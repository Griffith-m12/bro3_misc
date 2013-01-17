// ==UserScript==
// @name           bro3_misc
// @namespace      Miscellaneous Tool
// @include        http://*.3gokushi.jp/facility/castle_send_troop.php*
// @include        http://*.3gokushi.jp/quest/*
// @include        http://*.3gokushi.jp/tutorial/*
// @include        http://*.3gokushi.jp/card/deck.php*
// @include        http://*.3gokushi.jp/card/trade.php*
// @include        http://*.3gokushi.jp/card/exhibit_list.php*
// @include        http://*.3gokushi.jp/card/bid_list.php*
// @include        http://*.3gokushi.jp/card/busyobook_picture.php*
// @include        http://*.3gokushi.jp/card/status_info.php*
// @include        http://*.3gokushi.jp/busyodas/busyodas.php*
// @include        http://*.3gokushi.jp/busyodas/b3kuji.php*
// @include        http://*.3gokushi.jp/reward_vendor/reward_vendor.php*
// @include        http://*.3gokushi.jp/alliance/alliance_log.php*
// @include        http://*.3gokushi.jp/message/inbox.php*
// @include        http://*.3gokushi.jp/union/lvup.php*

// @include        http://*.sangokushi.in.th/card/deck.php*
// @include        http://*.sangokushi.in.th/card/trade.php*
// @include        http://*.sangokushi.in.th/card/busyobook_picture.php*
// @include        http://*.sangokushi.in.th/busyodas/b3kuji.php*
// @include        http://*.sangokushi.in.th/busyodas/busyodas.php*
// @include        http://*.sangokushi.in.th/card/status_info.php*

// @description    雑多な改善(同盟ログ検索機能, トレード, 半自動チュートリアル, 自動ブショーダス(自動削除付), 自動ヨロズダス, 武将図鑑未取得カードのトレードリンク, トレード関連書簡自動開封削除, クエスト, 出兵予約時刻) by いかりや長介@ドリフ
// @require        http://code.jquery.com/jquery.min.js
// @updateURL      https://github.com/Griffith-m12/bro3_misc/raw/Griffith/bro3_misc.meta.js
// @downloadURL    https://github.com/Griffith-m12/bro3_misc/raw/Griffith/bro3_misc.user.js
// @version        0.4.6g201301180013
// ==/UserScript==

var VERSION_KEY = "b3tMisc";
var logtitle = 'bro3_misc';

if(typeof GM_getMetadata != 'undefined') {
	if(typeof GM_getMetadata('name') != 'undefined') {
		logtitle = GM_getMetadata('name');
		if(typeof logtitle != 'string') { logtitle = logtitle[0]; }
	}
} else
if(typeof GM_info != 'undefined') {
	if(typeof GM_info.script != 'undefined') {
		logtitle = GM_info.script.name;
	}
}

logtitle = logtitle.toLowerCase();
var debug_log = function(msg) { console.log(logtitle + ':' + location.host + ':' + msg); };

jQuery.noConflict();
j$ = jQuery;
HOST = location.hostname;
KEY = "BRO3MISC_" + HOST + "_";
GLOBAL_KEY = "BRO3MISC__";
MARGIN = 2500;

(function () {
    debug_log('Enter')
    if (j$("#container").length == 0) {
        return
    }
try{
    var tmp = {};
    if (j$("#AjaxTempDOM").length != 0) {
        j$("#AjaxTempDOM").empty()
    }
    if (location.pathname == "/alliance/alliance_log.php") {
        debug_log('同盟ログ検索');
        j$("table.commonTables.tables").before("<div id=log_search><div id=search_controls></div></div><div id=search_header></div><div id=search_result_area></div>");
        j$("#search_controls").append("<div id=query_field><input type=text id=search_query /> <input type=button id=do_search value=検索><input type=hidden id=total_counts value=0></div>");
        j$("#search_controls").append("<div id=date_field>検索期間 : <select id=from_y></select>年<select id=from_m></select>月<select id=from_d></select>日 <select id=from_h></select>時 ～ <select id=to_y></select>年<select id=to_m></select>月<select id=to_d></select>日 <select id=to_h></select>時</div>");
        j$("#log_search").css({
            "width": "710px"
        });
        j$("#search_controls").css({
            "width": "710px",
            "float": "right",
            "text-align": "right"
        });
        j$("#date_field").css({
            "margin-top": "3px"
        });
        j$("#search_result_area").css({
            "clear": "both",
            "background-color": "white",
            "width": "710px",
            "margine-top": "10px",
            "overflow": "auto"
        });
        if (location.href.match(/m=(.+)/)) {
            j$("#search_controls").show()
        } else {
            j$("#search_controls").hide();
            debug_log('同盟ログ検索 not m')
            return
        }
        var f = new Date();
        var g = new Date(f.getTime() - 5 * 3600 * 1000);
        for (i = f.getFullYear() - 1; i <= f.getFullYear(); i++) {
            j$("#from_y").append("<option value=" + i + ">" + i + "</option>");
            j$("#to_y").append("<option value=" + i + ">" + i + "</option>")
        }
        j$("#from_y").val(g.getFullYear());
        j$("#to_y").val(f.getFullYear());
        for (i = 1; i <= 12; i++) {
            j$("#from_m").append("<option value=" + i + ">" + i + "</option>");
            j$("#to_m").append("<option value=" + i + ">" + i + "</option>")
        }
        j$("#from_m").val(g.getMonth() + 1);
        j$("#to_m").val(f.getMonth() + 1);
        for (i = 1; i <= 31; i++) {
            j$("#from_d").append("<option value=" + i + ">" + i + "</option>");
            j$("#to_d").append("<option value=" + i + ">" + i + "</option>")
        }
        j$("#from_d").val(g.getDate());
        j$("#to_d").val(f.getDate());
        for (i = 0; i <= 23; i++) {
            j$("#from_h").append("<option value=" + i + ">" + i + "</option>");
            j$("#to_h").append("<option value=" + i + ">" + i + "</option>")
        }
        j$("#from_h").val(g.getHours());
        j$("#to_h").val(f.getHours());
        j$("#do_search").bind("click", function () {
            if (j$("#search_query").val().trim() == "") {
                return
            }
            j$("#do_search").attr("disabled", "disabled");
            j$("#search_result_area").html("");
            j$("#search_header").html("[検索結果]<br /><span id=process_msg></span>");
            j$("#search_result_area").append("<ol id=search_result></ol>");
            j$("#search_result_area").css({
                "height": "300px"
            });
            j$("#total_counts").val(0);
            Search(1)
        })
    }
    if (location.pathname.match(/\/tutorial\//)) {
        debug_log('チュートリアル補助機能');
        j$("p[align='center']").append("<div id=AutoTutorialMsg>");
        if (j$("a[href='/tutorial/index.php?st=1']").length != 0) {
            alert("「領地の取り方」 及び 「武将のレベルアップ」以外は操作しないで下さい.\n操作した場合は当該チュートリアルを手動で行うか, チュートリアルタブを再度クリックする必要があります.\n状況確認等は新しいウインドウを作成して行って下さい.");
            location.href = "http://" + HOST + "/tutorial/index.php?st=1"
        }
        if (j$("img[src*='hd_complete_tutorial.gif']").length != 0) {
            location.href = "http://" + HOST + "/tutorial/";
            return
        }
        if (j$("span.ttl_small:contains('武将をデッキにセット')").length != 0) {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/card/deck.php" + " #gray02Wrapper", function () {
                var a = {};
                var b = j$("img[alt='このカードをデッキにセットします']:eq(0)").attr("onClick").split(",")[1].trim();
                a['target_card'] = b;
                a['selected_village[' + b + ']'] = j$("#selected_village_" + b + " option:first-child").val();
                a['btn_change_flg'] = "";
                a['mode'] = "set";
                a['p'] = "1";
                a['ssid'] = j$("input[name='ssid']:eq(0)").val();
                j$.post("http://" + HOST + "/card/deck.php", a, function () {
                    location.href = "http://" + HOST + "/tutorial/"
                })
            })
        }
        if (j$("span.ttl_small:contains('武将カード')").length != 0) {
            if (j$("input[name='送信']").attr("onClick").split(",")[2].match(/\'([a-z0-9]+)\'/) == null) {
                return
            }
            var h = {};
            h['got_type'] = "0";
            h['send'] = "send";
            h['ssid'] = RegExp.$1;
            j$.post("http://" + HOST + "/busyodas/busyodas.php", h, function () {
                location.href = "http://" + HOST + "/tutorial/"
            })
        }
        if (j$("span.ttl_small:contains('内政設定')").length != 0) {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/card/domestic_setting.php" + " #gray02Wrapper", function () {
                var a = {};
                a['mode'] = "domestic";
                a['id'] = j$("input[name='id']:eq(0)").val();
                if (j$("input[name='id']:eq(0)").length != 0) {
                    j$.get("http://" + HOST + "/card/domestic_setting.php", a, function () {
                        location.href = "http://" + HOST + "/tutorial/"
                    })
                } else {
                    alert("武将カードのIDが取得できません.\n手動でセットして下さい.")
                }
            })
        }
        if (j$("span.ttl_small:contains('畑の建設')").length != 0) {
            var j = new Array();
            j.push(new Facility(215, 1, 4, 5));
            BuildFacility(j)
        }
        if (j$("span.ttl_small:contains('伐採所の建設')").length != 0) {
            var j = new Array();
            j.push(new Facility(209, 1, 2, 1));
            BuildFacility(j)
        }
        if (j$("span.ttl_small:contains('石切り場と製鉄所の建設')").length != 0) {
            var j = new Array();
            j.push(new Facility(211, 1, 4, 1));
            j.push(new Facility(213, 1, 2, 5));
            BuildFacility(j)
        }
        if (j$("span.ttl_small:contains('複数建設')").length != 0) {
            var j = new Array();
            j.push(new Facility(209, 1, 1, 0));
            j.push(new Facility(211, 1, 5, 0));
            j.push(new Facility(213, 1, 1, 6));
            j.push(new Facility(215, 1, 4, 6));
            BuildFacility(j)
        }
        if (j$("span.ttl_small:contains('倉庫の建設')").length != 0) {
            var j = new Array();
            j.push(new Facility(233, 1, 0, 6));
            BuildFacility(j)
        }
        if (j$("span.ttl_small:contains('練兵所の建設')").length != 0) {
            var j = new Array();
            j.push(new Facility(234, 1, 6, 3));
            BuildFacility(j)
        }
        if (j$("span.ttl_small:contains('兵士を鍛える')").length != 0) {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/facility/facility.php?x=6&y=3 #gray02Wrapper", function () {
                var b = parseInt(j$("table:has(img[src*='unit_301l.png']) tr:has(th:contains('現在の所有数')) td").text()) + j$("table:has(img[src*='unit_301l.png']) tr:has(th:contains('作成数')) td").length;
                if (b == 0) {
                    var c = {};
                    c['x'] = "6";
                    c['y'] = "3";
                    c['unit_id'] = "301";
                    c['count'] = "1";
                    j$.post("http://" + HOST + "/facility/facility.php?x=6&y=3#ptop", c, function () {
                        var a = new Array();
                        a.push(new Facility(211, 1, 6, 1));
                        a.push(new Facility(213, 1, 0, 5));
                        a.push(new Facility(209, 1, 1, 1));
                        a.push(new Facility(215, 1, 3, 5));
                        BuildFacility(a)
                    })
                } else {
                    var d = 0;
                    if (j$("table:has(img[src*='unit_301l.png']) tr:has(th:contains('作成残り時間')) td").length != 0) {
                        var e = j$("table:has(img[src*='unit_301l.png']) tr:has(th:contains('作成残り時間')) td").text();
                        e.match(/(\d\d):(\d\d):(\d\d)/);
                        d = parseInt(RegExp.$1, 10) * 60 * 60 * 1000 + parseInt(RegExp.$2, 10) * 60 * 1000 + parseInt(RegExp.$3, 10) * 1000;
                        j$("#AutoTutorialMsg").text("(剣兵作成中" + e + "後に完成)")
                    }
                    setTimeout(function () {
                        location.href = "http://" + HOST + "/tutorial/"
                    }, d)
                }
            })
        }
        if (j$("span.ttl_small:contains('兵士の能力')").length != 0) {
            var h = {};
            h['tuto_attack'] = "15";
            h['tuto_defense_spear'] = "10";
            j$.post("http://" + HOST + "/tutorial/index.php", h, function () {
                location.href = "http://" + HOST + "/tutorial/"
            })
        }
        if (j$("span.ttl_small:contains('武将を内政から外す')").length != 0) {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/card/domestic_setting.php" + " #gray02Wrapper", function () {
                var a = {};
                a['mode'] = "u_domestic";
                a['id'] = j$("input[name='id']:eq(0)").val();
                j$.get("http://" + HOST + "/card/domestic_setting.php", a, function () {
                    location.href = "http://" + HOST + "/tutorial/"
                })
            })
        }
        if (j$("span.ttl_small:contains('全体地図')").length != 0) {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/alliance/list.php?p=1" + " #grayWrapper", function () {
                if (j$("a[href*='land.php']:eq(0)").text().match(/\((-?\d+),(-?\d+)\)/)) {
                    var a = {};
                    a['tuto_x'] = RegExp.$1;
                    a['tuto_y'] = RegExp.$2;
                    j$.post("http://" + HOST + "/tutorial/index.php", a, function () {
                        location.href = "http://" + HOST + "/tutorial/"
                    })
                }
            })
        }
        if (j$("span.ttl_small:contains('領地の取り方')").length != 0) {
            j$("#AutoTutorialMsg").html("自動化対象外のチュートリアルです<br />手動で領地を取得して下さい!").css({
                "color": "orangered",
                "font-weight": "bold"
            })
        }
        if (j$("span.ttl_small:contains('武将のレベルアップ')").length != 0) {
            j$("#AutoTutorialMsg").html("自動化対象外のチュートリアルです<br />手動でクエストクリアして下さい!").css({
                "color": "orangered",
                "font-weight": "bold"
            })
        }
        if (j$("span.ttl_small:contains('施設のレベルアップ')").length != 0) {
            var j = new Array();
            j.push(new Facility(209, 2, 2, 1));
            j.push(new Facility(211, 2, 4, 1));
            j.push(new Facility(213, 2, 2, 5));
            j.push(new Facility(215, 2, 4, 5));
            BuildFacility(j)
        }
        if (j$("span.ttl_small:contains('本拠地に名前を付けよう')").length != 0) {
            if (j$("input[name='送信']").attr("onClick").split(",")[2].match(/\'([a-z0-9]+)\'/) == null) {
                return
            }
            var k = RegExp.$1;
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/user/change/change.php" + " #gray02Wrapper", function () {
                var c = {};
                j$("input[name*='new_name']").each(function () {
                    var a = j$(this).attr("name");
                    var b = j$(this).val();
                    b = b.replace("新規城", "新城");
                    c[a] = b
                });
                c['ssid'] = k;
                c['comment'] = j$("textarea[name='comment']").val();
                c['medal'] = j$("textarea[name='medal']").val();
                c['btn_send'] = "更新";
                j$.post("http://" + HOST + "/user/change/change.php", c, function () {
                    location.href = "http://" + HOST + "/tutorial/"
                })
            })
        }
        if (j$("span.ttl_small:contains('人口とは？')").length != 0) {
            var j = new Array();
            j.push(new Facility(242, 1, 3, 6));
            j.push(new Facility(209, 3, 2, 1));
            j.push(new Facility(211, 3, 4, 1));
            j.push(new Facility(213, 3, 2, 5));
            j.push(new Facility(215, 3, 4, 5));
            BuildFacility(j)
        }
        if (j$("span.ttl_small:contains('掲示板')").length != 0) {
            var h = {};
            h['title'] = "AutoTutorial";
            h['comment'] = "I love いかりや長介";
            h['m'] = "p";
            h['public_type'] = "0";
            h['group_id_1'] = "";
            h['group_id_2'] = "";
            h['btn_send'] = "はい";
            j$.post("http://" + HOST + "/bbs/personal_topic_add.php", h, function () {
                location.href = "http://" + HOST + "/tutorial/"
            })
        }
        if (j$("span.ttl_small:contains('防衛戦')").length != 0) {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/user/ #gray02Wrapper", function () {
                var d = j$("td:contains(本拠地) a", this).attr("href").split("=")[1];
                j$(document.body).append("<div id=AjaxTempDOM2>");
                j$("#AjaxTempDOM2").hide();
                j$("#AjaxTempDOM2").load("http://" + HOST + "/user/status.php?village_id=" + d + "&anchor=#enemy #enemy", function () {
                    if (j$("td:has(span[id*=area_timer])", this).length != 0) {
                        j$("td:has(span[id*=area_timer])", this).text().match(/(.+)\(あと/);
                        var a = RegExp.$1.toString().trim().replace(/-/g, "/");
                        var b = new Date(a);
                        var c = new Date();
                        j$("#AutoTutorialMsg").text("(敵襲 " + a + " に到達)");
                        setTimeout(function () {
                            location.href = "http://" + HOST + "/tutorial/"
                        }, b.getTime() - c.getTime() + MARGIN)
                    }
                })
            })
        }
        if (j$("span.ttl_small:contains(内政の強化)").length != 0) {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/bbs/personal_topic_view.php" + " #gray02Wrapper", function () {
                if (j$("a[href*=personal_res_view.php]:contains(AutoTutorial)").length != 0) {
                    j$("a[href*=personal_res_view.php]:contains(AutoTutorial)").attr("href").match(/thread_id=(\d+)&m=new&user_id=(\d+)/);
                    var a = {};
                    a['m'] = "new";
                    a['thread_id'] = RegExp.$1;
                    a['user_id'] = RegExp.$2;
                    a['thread_del'] = "スレッドの削除";
                    j$.post("http://" + HOST + "/bbs/personal_res_view.php", a, function () {
                        location.href = "http://" + HOST + "/tutorial/"
                    })
                } else {
                    location.href = "http://" + HOST + "/tutorial/"
                }
            })
        }
    }
    if (location.pathname == "/quest/" || location.pathname == "/quest/index.php") {
        if(location.search.length != 0){
          var a = location.search;
          var qry = {};
          a.split(/(?:^\?|&)([^=]+=[^&]*)/g).map(function(e){
            var r = e.split("=");
            if(r.length==2){
              if(r[0].length != 0) {
                qry[r[0]] = r[1];
              }
            };
          });
          j$("form[name='questForm']:first input[name='p']").val(qry.p);
        }
        j$("td.questName").attr("width", 203);
        var l = {};
        l["ともだちを招待しよう"] = "CP 150";
        l["同盟を組む"] = "BP 100";
        l["人口を増やそう"] = "BP50";
        l["生産力の強化"] = "木石鉄糧 1000";
        l["生産施設を増やそう"] = "木石鉄糧 300";
        l["書簡の使い方"] = "木石鉄糧 300";
        l["ケータイ設定"] = "BP 50";
        l["武将のレベルアップ　其二"] = "木石鉄糧 800";
        l["領地の取得　其二"] = "木石鉄糧 1000";
        l["槍兵の研究"] = "木鉄糧 1000 石 2500";
        l["弓兵の研究"] = "石鉄糧 1000 木 2500";
        l["騎兵の研究"] = "木石糧 1000 鉄 2500";
        l["生産力の強化　其の二"] = "名声 1";
        l["カード合成"] = "TP 10";
        l["人口を増やそう　其二"] = " 木石鉄糧 1000";
        l["一戦入魂（新米）"] = "BP 80";
        l["寄付をしよう　其一"] = "木石鉄糧 700";
        l["鍛冶場で強化"] = "木石鉄糧 1000";
        l["防具工場で強化"] = "木石鉄糧 1200";
        l["武将のレベルアップ　其三"] = "BP 100";
        l["領地のレベルアップ"] = "名声 1";
        l["武将デュエルにエントリーしよう"] = "BP 20";
        l["スキルの習得"] = "TP 40";
        l["同盟員の領地を討伐しよう"] = "木石鉄糧 500";
        l["同盟掲示板に書き込み"] = "木石鉄糧 800";
        l["同一スキルでレベルアップ合成しよう"] = "TP 40";
        l["不可侵条約を活用しよう"] = "木石鉄糧 500";
        l["領地の取得　其三"] = "木石鉄糧 1500";
        l["木収入強化"] = "石鉄糧 1500";
        l["石収入強化"] = "木鉄糧 1500";
        l["鉄収入強化"] = "木石糧 1500";
        l["トレードに出品しよう"] = "TP 20";
        l["人口を増やそう　其三"] = "木石鉄糧 2000";
        l["寄付をしよう　其二"] = "木石鉄糧 1500";
        l["週間ランキングを確認しよう"] = "BP 50";
        l["拠点をつくれ！"] = "木石鉄 1500 糧 1000";
        l["拠点に名前を付けよう"] = "TP 33";
        l["拠点に武将をセットしよう"] = "BP 50";
        l["武将のレベルアップ　其四"] = "BP 150";
        l["施設のいろは"] = "CP 100";
        l["スキルレベル"] = "木石鉄糧 1500";
        l["一戦入魂（隊士）"] = "TP 50";
        l["人口を増やそう　其四"] = "木石鉄糧 3000";
        l["個人ランク"] = "BP 50";
        l["同盟ランク"] = "木石鉄糧 200";
        l["領地の取得　其四"] = "木石鉄糧 2500";
        l["チャージポイント"] = "CP 100";
        l["城のレベルアップ"] = "木石糧 1000 鉄 3000";
        l["武将レベルアップ　其五"] = "名声 1";
        l["同盟員とNPC砦を落とせ"] = "名声 2";
        l["寄付をしよう　其三"] = "木石鉄糧 10000";
        l["人口を増やそう　其五"] = "木石鉄糧 5000";
        l["世界の覇権"] = "名声 1";
        l["幻のスキルを探せ"] = "木石鉄糧 2000";
        l["防御武将を鍛えよう　其一"] = "BP 50";
        l["内政武将を鍛えよう　其一"] = "BP 50";
        l["移動速度を鍛えよう　其一"] = "BP 50";
        l["斥候の研究"] = "木石鉄 2000 糧 1000";
        l["木収入強化　其二"] = "石鉄糧 3000";
        l["石収入強化　其二"] = "木鉄糧 3000";
        l["鉄収入強化　其二"] = "木石糧 3000";
        l["同盟のレベルアップ"] = "木石鉄糧 800";
        l["一戦入魂（隊長）"] = "木石鉄糧 4000";
        l["衝車の研究"] = "木石鉄 8000 糧 4000";
        l["領地の取得　其伍"] = "木石鉄糧 4000";
        l["武将レベルアップ　其六"] = "BP 160";
        l["スキルの習得　其二"] = "TP 100";
        l["城のレベルアップ　其二"] = "木石 5000 鉄糧 3000";
        l["スキルレベル　其二"] = "TP 100";
        l["人口を増やそう　其六"] = "名声 1";
        l["斥候騎兵の研究"] = "BP 180";
        l["一戦入魂（大将）"] = "木石鉄糧 10000";
        l["矛槍兵の研究"] = "名声 1";
        l["弩兵の研究"] = "名声 1";
        l["近衛騎兵の研究"] = "名声 1";
        l["領地の取得　其六"] = "木石鉄糧 5000";
        l["幻のスキルを探せ　其二"] = "名声 1";
        l["スキルレベル　其三"] = "TP 26";
        l["修行合成してみよう"] = "TP 50";
        l["人口を増やそう　其七"] = "木石鉄糧 10000";
        l["幻のスキルを探せ　其三"] = "名声 1";
        l["武将のレベルアップ　其七"] = "BP 200";
        l["幻のスキルを探せ　其四"] = "名声 1";
        l["一戦入魂（名将）"] = "木石鉄糧 30000";
        l["人口を増やそう　其八"] = "木石鉄糧 25000";
        l["一戦入魂（覇王）"] = "名声 3";
        l["投石機の研究"] = "名声 1";
        l["難関砦を攻略せよ"] = "木石鉄糧 30000";
        l["武将のレベルアップ　其八"] = "BP 250";
        l["人口を増やそう　其九"] = "木石鉄糧 40000";
        l["天下統一の足がかり"] = "木石鉄糧 50000";
        l["役職者を任命しよう"] = "BP 100";
        l["同盟に貢献しよう　其一"] = "TP 50";
        l["同盟上位への道　其一"] = "BP 300";
        l["同盟レベルを5まで上げよう"] = "木石鉄糧 8000";
        l["同盟に貢献しよう　其二"] = "TP 20";
        l["同盟上位への道　其二"] = "BP 500";
        l["鉄材研究所を建設しよう"] = "木石鉄糧 1000";
        l["大練兵所を建設しよう"] = "木石鉄糧 1000";
        l["同盟に貢献しよう　其三"] = "TP 50";
        l["同盟上位への道　其三"] = "BP 700";
        l["石材研究所を建設しよう"] = "木石鉄糧 3000";
        l["大兵舎を建設しよう"] = "木石鉄糧 3000";
        l["同盟に貢献しよう　其四"] = "TP 100";
        l["木材研究所を建設しよう"] = "木石鉄糧 5000";
        l["同盟上位への道　其四"] = "BP 1000";
        l["大弓兵舎を建設しよう"] = "木石鉄糧 5000";
        l["同盟に貢献しよう　其五"] = "TP 150";
        l["同盟上位への道　其五"] = "BP 1500";
        l["食糧研究所を建設しよう"] = "木石鉄糧 7000";
        l["大厩舎を建設しよう"] = "木石鉄糧 7000";
        l["同盟に貢献しよう　其六"] = "TP 200";
        l["同盟上位への道　其六"] = "BP 2000";
        l["大兵器工房を建設しよう"] = "木石鉄糧 10000";
        l["同盟に貢献しよう　其七"] = "シルバーチケット";
        l["同盟上位への道　其七"] = "BP 2500";
        l["同盟に貢献しよう　其八"] = "TP 500";
        l["同盟上位への道　其八"] = "シルバーチケット";
        l["拠点をつくれ！ 其二"] = "TP 250";
        l["拠点をつくれ！ 其三"] = "TP 300";
        l["拠点をつくれ！ 其四"] = "TP 500";
        l["拠点をつくれ！ 其五"] = "TP 700";
        l["倉庫の上限を増やそう　其一"] = "木石鉄糧 500";
        l["倉庫の上限を増やそう　其二"] = "TP 100";
        l["倉庫の上限を増やそう　其三"] = "小麗チケット 1枚";
        l["倉庫の上限を増やそう　其四"] = "小麗チケット 2枚";
        l["倉庫の上限を増やそう　其五"] = "大鳳チケット 1枚";
        j$("a[href*='/quest/index.php?disp_id']").each(function () {
            if (j$(this).text() in l) {
                var a = l[j$(this).text()];
                a = a.replace("木", "<img src=" + j$("img[src*='ico_wood.gif']:first").attr("src") + " />");
                a = a.replace("石", "<img src=" + j$("img[src*='ico_stone.gif']:first").attr("src") + " />");
                a = a.replace("鉄", "<img src=" + j$("img[src*='ico_ingot.gif']:first").attr("src") + " />");
                a = a.replace("糧", "<img src=" + j$("img[src*='ico_grain.gif']:first").attr("src") + " />");
                a = a.replace("名声", "<img src=" + j$("img[src*='ico_fame.gif']:first").attr("src") + " />");
                a = a.replace("BP", "<img src=" + j$("img[src*='icon_header_bp.gif']:first").attr("src") + " />");
                a = a.replace("TP", "<img src=" + j$("img[src*='icon_header_tp.gif']:first").attr("src") + " />");
                a = a.replace("CP", "<img src=" + j$("img[src*='icon_header_cp.gif']:first").attr("src") + " />");
                a = a.replace("シルバーチケット", "<img src=/20111003-04/extend_project/w760/img/busyodas/img_rate_silver_ex.jpg height=48px />");
                a = a.replace("小麗チケット", "<img src=/extend_project/ybga/img/busyodas/img_rate_syourei_no.jpg height=48px />");
                a = a.replace("大鳳チケット", "<img src=/extend_project/ybga/img/busyodas/img_rate_taihoh_no.jpg height=48px />");
                var b = a.match(/ (\d\d\d\d+)/g);
                if (b) {
                    for (var i = 0; i < b.length; i++) {
                        a = a.replace(b[i].toString().trim(), addFigure(b[i].toString().trim()))
                    }
                }
                j$(this).after("<br />" + a)
            }
        });
        j$("a[href^='javascript:takeQuest(']").each(function() {
          var qid = j$(this).attr("href").match(/\((\d+)\)/)[1];
          console.log("takeQuest:" + qid);
          if(qid == 254 || qid == 255 || qid == 256) {
            j$(this).attr("onclick", "");
          };
        });
    }
    if (location.pathname == "/quest/" || location.pathname == "/quest/index.php") {
        j$("#questB3_table").on("click", "td", function(){debug_log(j$(this).text());});
    }
    if (location.pathname == "/quest/index.php") {
        if (j$("input[name='disp_id']").val() == "166") {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/user/weekly_ranking.php" + " #weeklyranking_tables", function () {
                if (j$("table:has(th:contains('攻撃')) td:contains('→'):eq(0)").text().match(/→ (\d+)/)) {
                    j$("input[name='attack_rank']").val(RegExp.$1)
                }
            })
        }
        if (j$("input[name='disp_id']").val() == "123") {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/user/ranking.php" + " #grayWrapper", function () {
                if (j$("td.rankNum:contains('→')").text().match(/→ (\d+)/)) {
                    j$("input[name='tuto_p_ranking']").val(RegExp.$1)
                }
            })
        }
        if (j$("input[name='disp_id']").val() == "106") {
            j$(document.body).append("<div id=AjaxTempDOM>");
            j$("#AjaxTempDOM").hide();
            j$("#AjaxTempDOM").load("http://" + HOST + "/alliance/list.php" + " #grayWrapper", function () {
                if (j$("td.rankNum:contains('→')").text().match(/→ (\d+)/)) {
                    j$("input[name='alliance_rank']").val(RegExp.$1)
                }
            })
        }
        if (j$("input[name='disp_id']").val() == "111") {
            j$("input[name='x']").val("0");
            j$("input[name='y']").val("0")
        }
    }
    if (location.pathname == "/card/trade.php") {
        debug_log('トレード補助機能');
        if(j$('div>span.notice').length != 0) { return false; }
        j$("a[href*='trade_bid.php']").click(function () {
            window.open(this.href, '_blank');
            return false
        });
        var m = "";
        var n = 0;
        j$("div.ui-tabs-panel").append("<div id=10tp_trade>");
        j$("#10tp_trade").css({
            "margin-top": "10px",
            "margin-bottom": "5px",
            "font-size": "12pt"
        });
        j$("#10tp_trade").append("10TP即落札リスト[修正可能] <span id=notice_msg></span>");
        j$("#10tp_trade").append("<textarea id=direct_link_lists rows=5 cols=93>");
        j$("#10tp_trade").append("<div id=control_area><input type=button id=auto_bid value=自動入札></div>");
        j$("#control_area").css({
            "text-align": "right"
        });
        j$("tr:has(strong:contains('10'))").each(function () {
            if (j$("td.limit", this).text().trim() == "---" && parseInt(j$("strong", this).html().replace(",", "")) == 10) {
                j$("a[href*='trade_bid.php']", this).attr("href").match(/id=(\d+)/);
                var a = "http://" + HOST + "/card/trade_bid.php?id=" + RegExp.$1;
                m += a + "\n";
                n++
            }
        });
        j$("#direct_link_lists").val(m);
        j$("#notice_msg").text("(" + n + " 件)");
        j$("#auto_bid").bind('click', function () {
            var a = j$("#direct_link_lists").val().split("\n");
            j$("#auto_bid").attr("disabled", "disabled");
            AutoBid(a)
        });
        j$("#direct_link_lists").change(function () {
            j$("#notice_msg").text("(" + j$(this).val().trim().split("\n").length + " 件)")
        })
    }
    if (location.pathname == "/card/exhibit_list.php") {
        debug_log('出品中カードへのダイレクトリンク');
        var m = "";
        j$("div.trade_commission_info").before("<div id=trade_direct_link>");
        j$("#trade_direct_link").css({
            "margin-top": "10px",
            "margin-bottom": "5px",
            "font-size": "12pt"
        });
        j$("#trade_direct_link").append("出品中カードへのダイレクトリンク");
        j$("#trade_direct_link").append("<textarea id=direct_link_lists rows=11 cols=93>");
        j$("a[href*='exhibit_list.php?del_id']").each(function () {
            if (j$(this).attr("href").match(/del_id=(\d+)/)) {
                var a = "http://" + HOST + "/card/trade_bid.php?id=" + RegExp.$1;
                m += a + "\n"
            }
        });
        j$("#direct_link_lists").val(m)
    }
    if (location.pathname == "/card/status_info.php") {
        debug_log('ステータス+ALLボタンを追加');
        j$('td.line input[value="+5"]').each(function(){
          var h = this.outerHTML;
          j$(this).after(h.replace(', 5)',', 2000)').replace('+5','+ALL') + '</input>');
        });
    }
    if (location.pathname == "/card/deck.php") {
        debug_log('カード一括破棄ボタンを100枚版デフォルト化');
        with(j$("img[src*='btn_delete.']").parent()) {
          var url = attr('href');
          var search, hash;
          [url, hash] = url.split("#");
          [url, search] = url.split("?");
          if(search && search.length > 0) {
            url += "?" + search + "&sz=100";
          } else {
            url += "?sz=100";
          }
          if(hash && hash.length > 0) {
            url += "#" + hash;
          }
          attr('href', url);
        }
        // j$("img[src*='btn_delete.']").parent().attr('href', j$("img[src*='btn_delete.']").parent().attr('href') + '&sz=100')
    }
    if(location.pathname == "/union/lvup.php") {
        debug_log('レベルアップ合成対象入れ替え');
        j$("div.cardColmn div.control a").each(function(){
            with(j$(this)){
                if(attr("class") == "useUnion"){
                  attr('onclick').match(/\((\d+)\)/);
                  var cid = RegExp.$1;
                  after("<a class=\"skill-lvup-button\" title=\"スキルLvUP\" href=\"lvup.php?cid=" + cid + "\">このカードをベースカードにする</a>");
                }
            }
        });
    }
    if (location.pathname == "/card/bid_list.php") {
        debug_log('リスト一括入札');
        var m = "";
        j$("div.ui-tabs-panel").append("<div id=direct_trade>");
        j$("#direct_trade").css({
            "margin-top": "10px",
            "margin-bottom": "5px",
            "font-size": "12pt"
        });
        j$("#direct_trade").append("リスト一括入札 <span id=notice_msg></span>");
        j$("#direct_trade").append("<textarea id=direct_link_lists rows=11 cols=93>");
        j$("#direct_trade").append("<div id=control_area><input type=button id=auto_bid value=自動入札></div>");
        j$("#control_area").css({
            "text-align": "right"
        });
        j$("#auto_bid").bind('click', function () {
            if (j$("div.right").length != 0) {
                j$("div.right").text().match(/(\d+)件 \/ 10件/);
                if (parseInt(RegExp.$1) >= 10) {
                    return
                }
            }
            var a = j$("#direct_link_lists").val().split("\n");
            j$("#auto_bid").attr("disabled", "disabled");
            AutoBid(a)
        })
    }
    if (location.pathname == "/card/busyobook_picture.php") {
        debug_log('トレードで探すボタン');
        j$("a.card-link").each(function () {
            var a = j$("span.cardno", j$(this).parent()).text().trim();
            j$(this).parent().append("<input type=button value=トレードで探す>").css({
                "text-align": "center",
                "z-index": "10"
            }).bind('click', function () {
                location.href = "http://" + HOST + "/card/trade.php?s=price&o=a&t=no&k=" + a + "&tl=0"
            })
        })
    }
    if (location.pathname == "/facility/castle_send_troop.php") {
        var o = new Date();
        j$("select[name='res_y']").val(o.getYear());
        j$("select[name='res_m']").val(o.getMonth() + 1);
        j$("select[name='res_d']").val(o.getDate());
        j$("select[name='res_h']").val(o.getHours());
        j$("select[name='res_i1']").val(("0" + o.getMinutes()).slice(-2, -1));
        j$("select[name='res_i2']").val(("0" + o.getMinutes()).slice(-1));
        j$("select[name='res_s1']").val(("0" + o.getSeconds()).slice(-2, -1));
        j$("select[name='res_s2']").val(("0" + o.getSeconds()).slice(-1))
    }
    if (location.pathname == "/busyodas/busyodas.php") {
        debug_log('自動ブショーダスライト');
        tmp.Summary = {UR:0, SR:0, R:0, UC:0, C:0, other:0};
        var p;
        var q;
        if(j$("li.first_bpbtn span").length != 0){
          q = parseInt(j$("li.first_bpbtn span:first").text());
        } else {
          q = j$("img[src*='_bp.']").parent().text().replace(/\xA0| |\t/g,'').split("\n")[1];
        }
        var r = j$("div.sysMes strong");
        if(r.length == 3){
          r = r.get(0).textContent;
        } else if(r.length == 5){
          r = r.get(2).textContent;
        } else if(r.length == 8) {
          r = r.get(3).textContent;
        }
        r = parseInt(r);
        if(j$("#busyodasTabContent:has(img[src*='hd_lite.jpg']) table").length != 0) {
          j$("#busyodasTabContent:has(img[src*='hd_lite.jpg']) table").before("<div id=AutoBushodasLite>");
        } else if(j$("table#get_link").length != 0){
          j$("table#get_link").before("<div id=AutoBushodasLite>");
        } else {
          j$("DIV#busyodasTabContent.clearfix").append("<div id=AutoBushodasLite>");
        }
        j$("#AutoBushodasLite").append("<div id=AutoBushodasControls>");
        j$("#AutoBushodasLite").append("<div id=AutoBushodasSummary>");
        j$("#AutoBushodasLite").append("<div id=CardInfo>");
        j$("#AutoBushodasControls").append("<div id=notice_msg>※自動破棄を有効にしても<span class=Rarity_UR>UR</span>, <span class=Rarity_SR>SR</span>, <span class=Rarity_R>R</span>及び優良<span class=Rarity_UC>UC</span>(コスト3/自動スキル/劉備/孫権/諸葛亮/徐庶/水鏡)は破棄対象外</div>");　//ac1
        j$("#AutoBushodasControls").append("<div id=first_line_wrap>");
        j$("#AutoBushodasControls").append("<div id=delete_enabler title=R以上及び優良UC(コスト3/自動スキル/劉備/孫権/諸葛亮/徐庶/水鏡)を除外><input type=checkbox id=auto_delete>自動破棄を有効にする</div>");
        j$("#AutoBushodasControls").append("<div id=save_btn><input type=button id=save_settings value=設定保存></div>");
        j$("#AutoBushodasControls").append("<span><a href=\"/card/allcard_delete.php?sz=100\" title=\"武将カード一括破棄\">武将カード一括破棄ページ</a></span>");
        j$("#AutoBushodasControls").append("<div id=draw_btn><input type=button id=AutoDrawBushodas value=自動ブショーダス></div>");
        j$("#AutoBushodasControls").append("</div>"); //ac1
        j$("#AutoBushodasControls").append("<div class=except_list>破棄除外(スキル付与素材)</div>");
        j$("#AutoBushodasControls").append("<ul>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=騎兵強行スキルを除外><input type=checkbox id=except_hero>一騎当千</li>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=槍兵突撃/槍兵強行/槍兵の強撃スキルを除外><input type=checkbox id=except_spear>槍兵の猛撃</li>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=騎兵突撃/騎兵の強撃スキルを除外><input type=checkbox id=except_cavalry>騎兵の猛撃</li>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=弓兵突撃/弓兵の強撃スキルを除外><input type=checkbox id=except_bow>弓兵の猛撃</li>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=兵器の強撃スキルを除外><input type=checkbox id=except_ram>兵器の猛撃</li>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=鉄壁スキルを除外><input type=checkbox id=except_courage>豪傑</li>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=急速援護スキルを除外><input type=checkbox id=except_thousand_miles_run>千里行</li>");
        j$("#AutoBushodasControls").append("</ul>");
        j$("#AutoBushodasControls").append("<div class=except_list>破棄除外(育成対象素材)</div>");
        j$("#AutoBushodasControls").append("<ul>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=知力15以上を除外><input type=checkbox id=except_intelli_15>知力15以上</li>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=コスト2.5 UCを除外><input type=checkbox id=except_cost_25_UC>コスト2.5 <span class=Rarity_UC>UC</span></li>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=コスト2.5 UC/Cを除外><input type=checkbox id=except_cost_25_C>コスト2.5 <span class=Rarity_UC>UC</span><span class=Rarity_C>/C</span></li>");
        j$("#AutoBushodasControls").append("<li class=keep_skill title=全UC除外><input type=checkbox id=except_above_C>全<span class=Rarity_UC>UC</span></li>");
        j$("#AutoBushodasControls").append("</ul>");
        j$("#AutoBushodasControls").append("<div class=except_list>破棄除外(ホワイトリスト) [カードIDを半角かつカンマ区切りで入力]</div>");
        j$("#AutoBushodasControls").append("<div style=clear:both><input type=text id=white_lists size=78></div>");
        j$("#AutoBushodasControls").append("<div class=except_list>破棄除外スキル [スキル名を半角かつカンマ区切りで入力]</div>");
        j$("#AutoBushodasControls").append("<div style=clear:both><input type=text id=white_skills size=78></div>");
        tmp.Summary = JSON.parse(GM_getValue(KEY + "PrevSummary", JSON.stringify(tmp.Summary)));
        if(!tmp.Summary.UR && !tmp.Summary.SR && !tmp.Summary.R && !tmp.Summary.UC && !tmp.Summary.C && !tmp.Summary.other) { j$("#AutoBushodasSummary").hide(); }
        GM_deleteValue(KEY + "PrevSummary");
        j$("#AutoBushodasSummary").html("<span class=Rarity_UR>UR</span> <span id='ABL_Summary_UR'>" + tmp.Summary.UR + "</span>, <span class=Rarity_SR>SR</span> <span id='ABL_Summary_SR'>" + tmp.Summary.SR + "</span>, <span class=Rarity_R>R</span> <span id='ABL_Summary_R'>" + tmp.Summary.R + "</span>, <span class=Rarity_UC>UC</span> <span id='ABL_Summary_UC'>" + tmp.Summary.UC + "</span>, <span class=Rarity_C>C</span> <span id='ABL_Summary_C'>" + tmp.Summary.C + "</span>, (残り:<span id='ABL_Summary_BP'>" + q + "</span>BP / <span id='ABL_Summary_capacity'>" + r + "</span>枠)&nbsp;<a href='/busyodas/busyodas_history.php'>ブショーダス履歴</a>");
        j$("#notice_msg").css({
            "width": "680px",
            "margin-bottom": "20px"
        });
        j$("#first_line_wrap").css({
            "width": "680px"
        });
        j$("#delete_enabler").css({
            "width": "200px",
            "float": "left"
        });
        j$("#save_btn").css({
            "width": "122px",
            "float": "left"
        });
        j$("#draw_btn").css({
            "width": "160px",
            "float": "right",
            "text-align": "right"
        });
        j$("#AutoBushodasLite").css({
            "width": "680px",
            "border": "solid 2px #00b1da",
            "margin-bottom": "5px",
            "padding": "5px"
        });
        j$("#AutoBushodasSummary").css({
            "width": "680px",
            "font-size": "14px",
            "text-align": "center",
            "margin-top": "10px",
            "margin-bottom": "5px"
        });
        j$("#CardInfo").css({
            "width": "680px",
            "font-size": "20px",
            "text-align": "center",
            "margin-top": "10px",
            "margin-bottom": "5px"
        });
        j$("#AutoBushodasControls").css({
            "width": "680px",
            "font-size": "16px",
            "margin-left": "5px",
            "margin-bottom": "5px"
        });
        j$(".except_list").css({
            "margin-top": "15px",
            "margin-bottom": "5px",
            "font-weight": "bold",
            "border-left": "solid 5px #00b1da",
            "clear": "both"
        });
        j$(".keep_skill").css({
            "float": "left",
            "margin-right": "5px",
            "margin-bottom": "10px",
            "width": "140px"
        });
        j$(".Rarity_UR").css({ //ac.3
            "color": "#ff33ff",  //ac.3
            "font-weight": "bold"  //ac.3
        });
        j$(".Rarity_SR").css({
            "color": "#ff4242",
            "font-weight": "bold"
        });
        j$(".Rarity_R").css({
            "color": "#00c5ff",
            "font-weight": "bold"
        });
        j$(".Rarity_UC").css({
            "color": "#ffa200",
            "font-weight": "bold"
        });
        j$(".Rarity_C").css({
            "color": "black",
            "font-weight": "bold"
        });
        p = GM_getValue(KEY + "AutoDelete", false);
        j$("#auto_delete").attr("checked", p);
        if (p == false) {
            j$("input[type='checkbox'][id*='except_']").attr("disabled", "disabled");
            j$("#white_lists").attr("disabled", "disabled");
            j$("#white_skills").attr("disabled", "disabled");
        }
        p = GM_getValue(KEY + "Keep_Hero", false);
        j$("#except_hero").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Spear", false);
        j$("#except_spear").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Cavalry", false);
        j$("#except_cavalry").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Bow", false);
        j$("#except_bow").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Ram", false);
        j$("#except_ram").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Courage", false);
        j$("#except_courage").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Thousand_Miles", false);
        j$("#except_thousand_miles_run").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Intelligence", false);
        j$("#except_intelli_15").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Cost_UC", false);
        j$("#except_cost_25_UC").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Cost_C", false);
        j$("#except_cost_25_C").attr("checked", p);
        p = GM_getValue(KEY + "Keep_Above_C", false);
        j$("#except_above_C").attr("checked", p);
        p = GM_getValue(KEY + "White_Lists", "");
        p = p.split(/[, ]+/).sort(function(a,b) { return (a < b)?-1:(a > b)?1:0 }).join(",");
        j$("#white_lists").val(p);
        p = GM_getValue(KEY + "White_Skills", "");
        p = p.split(/[, ]+/).sort(function(a,b) { return (a < b)?-1:(a > b)?1:0 }).join(",");
        j$("#white_skills").val(p);
        j$("input[type='checkbox']:checked").parent().css("color", "orangered");
        j$("#save_settings").bind('click', function () {
            GM_setValue(KEY + "AutoDelete", j$("#auto_delete").attr("checked")||false);
            GM_setValue(KEY + "White_Lists", j$("#white_lists").attr("value"));
            GM_setValue(KEY + "White_Skills", j$("#white_skills").attr("value"));
            GM_setValue(KEY + "Keep_Hero", j$("#except_hero").attr("checked")||false);
            GM_setValue(KEY + "Keep_Spear", j$("#except_spear").attr("checked")||false);
            GM_setValue(KEY + "Keep_Cavalry", j$("#except_cavalry").attr("checked")||false);
            GM_setValue(KEY + "Keep_Bow", j$("#except_bow").attr("checked")||false);
            GM_setValue(KEY + "Keep_Ram", j$("#except_ram").attr("checked")||false);
            GM_setValue(KEY + "Keep_Courage", j$("#except_courage").attr("checked")||false);
            GM_setValue(KEY + "Keep_Thousand_Miles", j$("#except_thousand_miles_run").attr("checked")||false);
            GM_setValue(KEY + "Keep_Intelligence", j$("#except_intelli_15").attr("checked")||false);
            GM_setValue(KEY + "Keep_Cost_UC", j$("#except_cost_25_UC").attr("checked")||false);
            GM_setValue(KEY + "Keep_Cost_C", j$("#except_cost_25_C").attr("checked")||false);
            GM_setValue(KEY + "Keep_Above_C", j$("#except_above_C").attr("checked")||false);
            alert("設定保存しました")
        });
        j$("#auto_delete").bind('click', function () {
            if (j$(this).attr('checked') == false) {
                j$(this).parent().css("color", "black");
                j$("input[type='checkbox'][id*='except_']").attr("disabled", "disabled");
                j$("#white_lists").attr("disabled", "disabled");
                j$("#white_skills").attr("disabled", "disabled");
            } else {
                j$(this).parent().css("color", "orangered");
                j$("input[type='checkbox'][id*='except_']").removeAttr("disabled");
                j$("#white_lists").removeAttr("disabled");
                j$("#white_skills").removeAttr("disabled");
            }
        });
        j$("input[type='checkbox'][id*='except_']").bind('click', function () {
            if (j$(this).attr('checked') == false) {
                j$(this).parent().css("color", "black")
            } else {
                j$(this).parent().css("color", "orangered")
            }
        });
        j$("#AutoDrawBushodas").bind('click', function () {
            j$("#AutoDrawBushodas").attr("disabled", "disabled");
            j$("#AutoBushodasSummary").show();
            AutoBushodas(q, r, "0", tmp)
        });
        if (r == 0 || parseInt(q / 100) == 0) {
            j$("#AutoDrawBushodas").removeAttr("disabled")
        }
    }
    if (location.pathname == "/reward_vendor/reward_vendor.php" || location.pathname == "/busyodas/b3kuji.php") {
        debug_log('自動ヨロズダス');
        j$("div.sysMes").text().match(/残り(\d+)回/);
        var s = parseInt(RegExp.$1);
        j$("div.sysMes").before("<div id=AutoYodozudas>");
        j$("#AutoYodozudas").append("<div id=AutoYodozudasControls>");
        j$("#AutoYodozudas").append("<div id=DrawResult>");
        j$("#AutoYodozudasControls").append("<input type=button id=AutoDrawYorozudas value=自動ヨロズダス>");
        j$("#AutoYodozudas").css({
            "width": "740px"
        });
        j$("#DrawResult").css({
            "width": "740px",
            "font-size": "20px",
            "text-align": "center"
        });
        j$("#AutoYodozudasControls").css({
            "width": "740px",
            "margine-left": "auto",
            "margine-right": "5px",
            "text-align": "right"
        });
        j$("#AutoDrawYorozudas").bind('click', function () {
            j$("#AutoDrawYorozudas").attr("disabled", "disabled");
            AutoYorozudas(s)
        });
        if (s == 0) {
            j$("#AutoDrawYorozudas").removeAttr("disabled")
        }
    }
    if (location.pathname == "/message/inbox.php") {
        var t = new Array();
        j$("#statMenu").append("<li class=last><input type=button id=del_trade_msg value=トレード書簡開封削除></li>");
        j$("#gray02Wrapper h2").append("<div id=notice_msg></div>");
        j$("#notice_msg").css({
            "float": "right"
        });
        j$("#del_trade_msg").bind('click', function () {
            j$("tr.unread:has(span.notice)").each(function () {
                if (j$("a[href*='detail.php']", this).text().match(/カード.*落札/) != null) {
                    t.push(j$("a[href*='detail.php']", this).attr("href"))
                }
            });
            j$("#del_trade_msg").attr("disabled", "disabled");
            DeleteMsgs(t, new Array())
        })
    }
} catch(e) {
    debug_log('ERROR:' + e);
}
    debug_log('Quit.')
})();

function BuildFacility(e) {
    j$(document.body).append("<div id=AjaxTempDOM>");
    j$("#AjaxTempDOM").hide();
    if (e.length == 0) {
        j$("#AjaxTempDOM").load("http://" + HOST + "/village.php #wrapper", function () {
            var a = 0;
            var b;
            if (j$("span.buildClock:last").length != 0) {
                b = j$("span.buildClock:last").text();
                b.match(/(\d\d):(\d\d):(\d\d)/);
                a = parseInt(RegExp.$1, 10) * 60 * 60 * 1000 + parseInt(RegExp.$2, 10) * 60 * 1000 + parseInt(RegExp.$3, 10) * 1000
            }
            if (b != undefined) {
                j$("#AutoTutorialMsg").text("(施設建設中" + b + "後に完成)")
            }
            setTimeout(function () {
                location.href = "http://" + HOST + "/tutorial/"
            }, a)
        });
        return
    }
    j$("#AjaxTempDOM").load("http://" + HOST + "/facility/select_facility.php?x=" + e[0].x + "&y=" + e[0].y + " #whiteWrapper", function () {
        var a = {};
        a['x'] = e[0].x;
        a['y'] = e[0].y;
        a['village_id'] = j$("input[name='village_id']:eq(0)").val();
        a['ssid'] = j$("input[name='ssid']:eq(0)").val();
        var b = 0;
        var c = e[0].lv;
        var d;
        if (j$("div.th_ttl").length != 0) {
            j$("div.th_ttl").text().match(/レベル(\d+)/);
            b = RegExp.$1
        }
        if (j$("div.sysMes:contains(建設中)").length != 0) {
            b++
        }
        if (j$("table:has(img[src*='facility_" + e[0].id + ".png']) tr:has(th:contains('所要時間')) td").length > 0) {
            BuildTimeStr = j$("table:has(img[src*='facility_" + e[0].id + ".png']) tr:has(th:contains('所要時間')) td").html().trim();
            Pos = BuildTimeStr.indexOf("<span>", 0);
            if (Pos > 0) {
                BuildTimeStr = BuildTimeStr.substr(0, Pos - 1)
            }
            BuildTimeStr.match(/(\d\d):(\d\d):(\d\d)/);
            d = parseInt(RegExp.$1, 10) * 60 * 60 * 1000 + parseInt(RegExp.$2, 10) * 60 * 1000 + parseInt(RegExp.$3, 10) * 1000
        } else {
            d = 0
        }
        if (b == 0) {
            a['id'] = e[0].id
        }
        e.shift();
        if (b >= c) {
            BuildFacility(e)
        } else {
            j$("#AutoTutorialMsg").text("(施設建設中" + BuildTimeStr + "後に完成)");
            j$.post("http://" + HOST + "/facility/build.php", a, function () {
                setTimeout(function () {
                    BuildFacility(e)
                }, d + MARGIN)
            })
        }
    })
}
function AutoBid(b) {
    if (b.length == 0) {
        j$("#direct_link_lists").val("");
        j$("#auto_bid").removeAttr("disabled");
        return
    }
    var c = b[0].trim();
    var d = new RegExp("http:\\/\\/" + HOST + "\\/card\\/trade_bid.php\\?id=\\d+");
    b.shift();
    if (c.match(d)) {
        j$(document.body).append("<div id=AjaxTempDOM>");
        j$("#AjaxTempDOM").hide();
        j$("#AjaxTempDOM").load(c + " #gray02Wrapper", function () {
            var a = {};
            if (j$("input[name='exhibit_cid']").length != 0) {
                a['t'] = j$("input[name='t']").val();
                a['k'] = j$("input[name='k']").val();
                a['p'] = j$("input[name='p']").val();
                a['s'] = j$("input[name='s']").val();
                a['o'] = j$("input[name='o']").val();
                a['exhibit_cid'] = j$("input[name='exhibit_cid']").val();
                a['exhibit_id'] = j$("input[name='exhibit_id']").val();
                a['buy_btn'] = "落札する"
            } else {
                a['ssid'] = j$("input[name='ssid']").val();
                a['t'] = j$("input[name='t']").val();
                a['k'] = j$("input[name='k']").val();
                a['p'] = j$("input[name='p']").val();
                a['s'] = j$("input[name='s']").val();
                a['o'] = j$("input[name='o']").val();
                a['exhibit_price'] = j$("input[name='exhibit_price']").val();
                a['exhibit_id'] = j$("input[name='exhibit_id']").val();
                a['bid_btn'] = "入札する"
            }
            j$("#notice_msg").text("(トレードID " + j$("input[name=exhibit_id]").val() + " を入札中)");
            j$.post("http://" + HOST + "/card/trade_bid.php", a, function () {
                setTimeout(function () {
                    AutoBid(b)
                }, 500)
            })
        })
    } else {
        j$("#notice_msg").text("(有効なトレードリンクではありませんでした)");
        setTimeout(function () {
            AutoBid(b)
        }, 500)
    }
}
function AutoBushodas(o, p, q, tmp) {
    // o: Current BP
    // p: Card space
    // q: (Not zero):Delete request cardID
    // tmp:
    debug_log('AutoBushodas:Enter:' + j$("div#AjaxTempDOM").length + JSON.stringify({o:o,p:p,q:q, tmp:tmp}));
    if(j$("div#AjaxTempDOM").length == 0){
      j$(document.body).append("<div id=AjaxTempDOM>");
    }
    j$("div#AjaxTempDOM").empty();
    j$("div#AjaxTempDOM").hide();

    var r;
    if (o / 100 >= p) {
        r = p
    } else {
        r = parseInt(o / 100)
    }

    if(j$("input.commentSend").length != 0){
      j$("input.commentSend").attr("onClick").split(",").pop().match(/\'([a-z0-9]+)\'/);
    } else if(j$("#commentsendbtn").length != 0){
      j$("#commentsendbtn").attr("onClick").split(",").pop().match(/\'([a-z0-9]+)\'/);
    } else {
      return false;
    }
    var s = RegExp.$1;

    if (r == 0) {
        if (q != 0) {
            // BP不足状態でのカード削除
            var t = {};
            t['card_id[' + q + ']'] = "1";
            t['p'] = "1";
            t['s'] = "";
            t['o'] = "";
            t['sz'] = "";
            t['ssid'] = s;
            t['btn_send'] = "破棄";
            j$.post("http://" + HOST + "/card/allcard_delete.php", t, function () {
                location.href = "http://" + HOST + "/busyodas/busyodas.php";
                return
            })
        } else {
            location.href = "http://" + HOST + "/busyodas/busyodas.php";
            return
        }
    }

    var t = {};
    var u = Math.floor(Math.random() * 200 + 500);
    if(j$("input[name='continuty']").length == 0){
      t['send'] = "send";
      t['ssid'] = s;
      t['got_type'] = "0";
      t['csrf_token'] = s;
      t['del_card_id'] = q;
      if(!!q && q != 0) {
        debug_log("AutoBushodas:DrawWithDelete:" + q);
        t['delete[' + q + ']'] = q;
        t['label[' + q + ']'] = "";
        t['mode'] = "label";
        t['card'] = q;
      }
    } else {
      t['ssid'] = s;
      t['send'] = "send";
      t['tab'] = "normal";
      t['got_type'] = "0";
      t['continuty'] = "";
      if(!!q && q != 0) {
        debug_log("AutoBushodas:DrawWithDelete:" + q);
        t['delete[' + q + ']'] = q;
        t['label[' + q + ']'] = "";
        t['mode'] = "label";
        t['card'] = q;
      }
    }

    debug_log("AutoBushodas:load parameters:" + JSON.stringify(t));

    var callbackBushodas = function (responceText, event, XMLHttpRequest) {
        debug_log("callbackBushodas:" + JSON.stringify({event:event, XMLHttpRequest:XMLHttpRequest.statusText}));
        //if(j$('div.cardover-infomation').length != 0){
        //  j$("#CardInfo").html("<span id=result_msg>" + '武将カード所持上限の超過' + "</span>");
        //  return false;
        //}
        var leftBP = 0;
        var leftSpace = 0;
        var elms = j$("div.sysMes2:last strong");
        if(elms.length != 5 && elms.length !=8 && elms.length !=9) {
          elms = j$("div.sysMes:last strong");
        }
        if(elms.length == 5){
          leftBP = elms.get(0).textContent;
          leftSpace = elms.get(2).textContent;
        } else if(elms.length == 6) {   // Thai?
          leftBP = elms.get(0).textContent;
          leftSpace = elms.get(4).textContent;
        } else if(elms.length == 8) {
          leftSpace = elms.get(3).textContent;
        } else if(elms.length == 9) {
          leftBP = elms.get(0).textContent;
          leftSpace = elms.get(4).textContent;
        }

        leftBP = parseInt(leftBP);
        leftSpace = parseInt(leftSpace);

        var a = '';
        if(j$("a[href*=BusyodasRetry]").length != 0){
          j$("a[href*=BusyodasRetry]").attr("href").match(/\'(\d+)\'/);
          a = RegExp.$1;
        } else if(j$("input[name='card']").length != 0){
          a = j$("input[name='card']").first().val();
        } else if(j$("a[onclick*='BusyodasRetry']").length != 0) {
          j$("a[onclick*='BusyodasRetry']").attr('onclick').split(",").pop().match(/\'([a-z0-9]+)\'/);
          a = RegExp.$1;
        } else if(j$("input.delete:last").length != 0) {
          a = j$("input.delete:last").val();
        } else {
          debug_log('AutoBushodas:Quit:No cardID.');
          j$("#CardInfo").html("<span id=result_msg>" +  j$("span.notice").text() + "</span>");
          return false;
        }

        debug_log('CardID:' + a);
        var b = j$("span.cardno:first").text() || j$("span.gear_cardno:first").text();
        var c = j$("span[class*='rarerity']:first").text();
        if(!c){
          j$("div.card[class*='rarerity_']").attr('class').match(/_([^_ ]+)(?:$|\s)/)
          c = RegExp.$1.toUpperCase();
        }
        // <div class="clearfix cutin_bg" id="cutin_bg_r" onclick="window.location='./busyodas_result.php?card=579736&got_type=0'">
        var d = j$("span.name:first").text();
        if(!d || d.length == 0){
          d = j$("span.name1:first").text();
           if(!d || d.length == 0){
             d = j$("span.gear_name1:first").text();
          }
        }
        var e = parseFloat(j$("span.cost").text());
        var f = parseFloat(j$("span.status_int").text());
        var g = false;
        var h = '';
        if(j$("span[class*='skillName1']").text().length != 0) {
          g = new Boolean(j$("span.skillName1.red").length);
          j$("span[class*='skillName1']").text().match(/:(.+)LV/);
          h = (!RegExp.$0 && RegExp.$1) || "";
        }
        var j = " が当たりました!";
        var k = "0";
        var m = 0;
        var n = 0;
        // debug_log('getValue:' + JSON.stringify(GM_getValue(KEY + "AutoDelete", false)))
        if (GM_getValue(KEY + "AutoDelete", false) != false) {
            k = a;
            j = " を自動削除しました";
            if (c == "R" || c == "SR" || c == "UR" || e >= 3.0 || g == true || b == "1007" || b == "1009" || b == "1014" || b == "4082" || b == "3008") { //AC+ac1
                k = "0";
                j = " が当たりました!"
            }
            if ((GM_getValue(KEY + "Keep_Hero", false) && h == "騎兵強行")
            || (GM_getValue(KEY + "Keep_Spear", false) && h == "槍兵突撃")
            || (GM_getValue(KEY + "Keep_Spear", false) && h == "槍兵強行")
            || (GM_getValue(KEY + "Keep_Cavalry", false) && h == "騎兵突撃")
            || (GM_getValue(KEY + "Keep_Cavalry", false) && h == "騎兵の強撃")
            || (GM_getValue(KEY + "Keep_Bow", false) && h == "弓兵突撃")
            || (GM_getValue(KEY + "Keep_Bow", false) && h == "弓兵の強撃")
            || (GM_getValue(KEY + "Keep_Ram", false) && h == "兵器の強撃")
            || (GM_getValue(KEY + "Keep_Courage", false) && h == "鉄壁")
            || (GM_getValue(KEY + "Keep_Thousand_Miles", false) && h == "急速援護")
            || (GM_getValue(KEY + "Keep_Intelligence", false) && f >= 15.0)
            || (GM_getValue(KEY + "Keep_Cost_C", false) && e >= 2.5)
            || (GM_getValue(KEY + "Keep_Cost_UC", false) && e >= 2.5 && c == "UC")
            || (GM_getValue(KEY + "Keep_Above_C", false) && c != "C")
            || (GM_getValue(KEY + "Keep_Spear", false) && h == "槍兵の強撃")) {
                k = "0";
                j = " が当たりました!"
            }
            var l = GM_getValue(KEY + "White_Lists", "").trim().split(",");
            for (var i = 0; i < l.length; i++) {
                if (l[i].trim() == b) {
                    k = "0";
                    j = " が当たりました!"
                }
            }
            var l = GM_getValue(KEY + "White_Skills", "").trim().split(",");
            for (var i = 0; i < l.length; i++) {
                if (l[i].trim().length && 0 <=  h.indexOf(l[i].trim())) {
                    k = "0";
                    j = " が当たりました!"
                }
            }
        }
        if (j == " が当たりました!") {
            m = 100;
            n = 1
        } else {
            m = 70;
            j$("#result_msg").css({
                "color": "orangered",
                "font-weight": "bold"
            })
        }
        j$("#CardInfo").html("<span id=card_rarity>" + c + "</span>  " + d + " (No." + b + ") " + h + "<span id=result_msg>" + j + "</span>");
        if (c == "C") {
            tmp.Summary.C++;
            j$("#card_rarity").css({
                "color": "black",
                "font-weight": "bold"
            })
        } else if (c == "UC") {
            tmp.Summary.UC++;
            j$("#card_rarity").css({
                "color": "#ffa200",
                "font-weight": "bold"
            })
        } else if (c == "R") {
            tmp.Summary.R++;
            j$("#card_rarity").css({
                "color": "#00c5ff",
                "font-weight": "bold"
            })
        } else if (c == "SR") {
            tmp.Summary.SR++;
            j$("#card_rarity").css({
                "color": "#ff4242",
                "font-weight": "bold"
            })
        } else if (c == "UR") { //AC
            tmp.Summary.UR++;
            j$("#card_rarity").css({ //AC
                "color": "#ff4242", //AC
                "font-weight": "bold" //AC
            }) //AC
        } else {
            tmp.Summary.other++;
            j$("#card_rarity").css({
                "color": "#f236fe",
                "font-weight": "bold"
            })
        }
        j$("#AutoBushodasSummary span#ABL_Summary_UR").text(tmp.Summary.UR);
        j$("#AutoBushodasSummary span#ABL_Summary_SR").text(tmp.Summary.SR);
        j$("#AutoBushodasSummary span#ABL_Summary_R").text(tmp.Summary.R);
        j$("#AutoBushodasSummary span#ABL_Summary_UC").text(tmp.Summary.UC);
        j$("#AutoBushodasSummary span#ABL_Summary_C").text(tmp.Summary.C);
        // j$("#AutoBushodasSummary span#ABL_Summary_BP").text(o - m);
        // j$("#AutoBushodasSummary span#ABL_Summary_capacity").text(p - n);
        j$("#AutoBushodasSummary span#ABL_Summary_BP").text(leftBP + (100 - m));
        j$("#AutoBushodasSummary span#ABL_Summary_capacity").text(leftSpace + (1 - n));
        GM_setValue(KEY + "PrevSummary", JSON.stringify(tmp.Summary));
        setTimeout(function () {
            AutoBushodas(o - m, p - n, k, tmp)
        }, u)
    }

    j$("#AjaxTempDOM").load("http://" + HOST + "/busyodas/busyodas.php #gray02Wrapper", t, callbackBushodas);
}

function AutoYorozudas(b) {
    j$(document.body).append("<div id=AjaxTempDOM>");
    j$("#AjaxTempDOM").hide();
    if (b == 0) {
        setTimeout(function () {
            // location.href = "http://" + HOST + "/busyodas/b3kuji.php"
            location.href = location.pathname;
            // location.reload(false);
        }, 1000);
        return
    }
    var c = {};
    var d = Math.floor(Math.random() * 500 + 1000);
    c['got_type'] = "0";
    c['send'] = "send";
    j$("#AjaxTempDOM").load(j$('form').attr('action') + " #gray02Wrapper", c, function () {
        if (j$("p:contains('が当たりました')").length != 0) {
            //j$("p:contains('が当たりました')").html().match(/<strong>(.+)&nbsp;/);
            //var a = "<strong>" + RegExp.$1 + "</strong>";
            var a = j$("p:contains('が当たりました') strong").text().replace("\xA0", '', 'g');
            j$("#DrawResult").html(a + "が当たりました!")
        } else {
            j$("#DrawResult").html("<strong>はずれ</strong>を引いてしまいました")
        }
        setTimeout(function () {
            j$("#DrawResult").html("&nbsp;");
            AutoYorozudas(b - 1)
        }, d)
    })
}
function Search(l) {
    var m = 1;
    if (j$("a[title='last page']:first").length != 0) {
        j$("a[title='last page']:first").attr("href").match(/p=(\d+)/);
        m = parseInt(RegExp.$1)
    }
    if (l > m) {
        j$("#do_search").removeAttr("disabled");
        j$("#process_msg").text("検索完了( " + l + "/" + m + " )" + j$("#total_counts").val() + " 件見つかりました");
        return
    }
    var n = new Date(j$("#from_y").val(), j$("#from_m").val() - 1, j$("#from_d").val(), j$("#from_h").val());
    var o = new Date(j$("#to_y").val(), j$("#to_m").val() - 1, j$("#to_d").val(), j$("#to_h").val());
    if (n.getTime() > o.getTime()) {
        var p = new Date(n);
        n.setTime(o.getTime());
        o.setTime(p.getTime())
    }
    j$("#process_msg").text("検索中 ( " + l + "/" + m + " )");
    if (j$("#AjaxTempDOM").length == 0) {
        j$(document.body).append("<div id=AjaxTempDOM>");
        j$("#AjaxTempDOM").hide()
    }
    j$("#AjaxTempDOM").load(location.href + "&p=" + l + " #gray02Wrapper", function () {
        var i = new Date(j$("td[class*='contents']:first", this).text().replace(/-/g, "/"));
        var j = new Date(j$("td[class*='contents']:last", this).text().replace(/-/g, "/"));
        var k = false;
        if (n.getTime() - o.getTime() != 0) {
            if (i.getTime() <= n.getTime()) {
                j$("#do_search").removeAttr("disabled");
                j$("#process_msg").text("検索完了( " + l + "/" + m + " )" + j$("#total_counts").val() + " 件見つかりました");
                return
            }
            if (j.getTime() > o.getTime()) {
                k = true
            }
        }
        if (k == false) {
            j$("a[href*='detail.php?id=']:contains('" + j$("#search_query").val().trim() + "')", this).each(function () {
                var a = j$(this).text();
                var b = j$("img", j$(this).parent()).attr("src");
                var c = j$(this).attr("href");
                var d = j$("td[class*='contents']", j$(this).parent().parent()).text();
                var e = j$("a[href*='/facility/castle_send_troop.php']", j$(this).parent().parent()).attr("href");
                var f = j$("img[src*='icon_go.gif']", j$(this).parent().parent()).attr("src");
                var g = true;
                if (n.getTime() - o.getTime() != 0) {
                    var h = new Date(d.replace(/-/g, "/"));
                    if (n.getTime() > h.getTime() || h.getTime() > o.getTime()) {
                        g = false
                    }
                }
                if (g == true) {
                    j$("#total_counts").val(parseInt(j$("#total_counts").val(), 10) + 1);
                    j$("#search_result").append("<li><img src=" + b + " /><a target=_blank href=" + c + ">" + a + "</a>&nbsp;&nbsp;<a target=_blank href=" + e + "><img src=" + f + " /></a>&nbsp;&nbsp;(" + d + ")</li>")
                }
            })
        }
        l++;
        j$.get(location.href + "&p=" + l, function () {
            Search(l)
        })
    })
}
function DeleteMsgs(b, c) {
    if (b.length == 0) {
        j$("#notice_msg").text("削除作業中");
        var d = {};
        d['mode'] = j$("input[name='mode']").val();
        d['p'] = j$("form[name='message'] input[name='p']").val();
        d['chk[]'] = c;
        j$.post("http://" + HOST + "/message/delete.php", d, function () {
            j$("#del_trade_msg").removeAttr("disabled");
            j$("#notice_msg").text("");
            return
        })
    } else {
        var e = b[0].trim();
        e.match(/id=(\d+)/);
        c.push(RegExp.$1);
        b.shift();
        j$.get(e, function () {
            j$("#notice_msg").text("開封作業:残り" + b.length + "件");
            var a = Math.floor(Math.random() * 500);
            setTimeout(function () {
                DeleteMsgs(b, c)
            }, a)
        })
    }
}
function Facility(a, b, x, y) {
    this.id = a;
    this.lv = b;
    this.x = x;
    this.y = y
}
function addFigure(a) {
    var b = new String(a).replace(/,/g, "");
    while (b != (b = b.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
    return b
}

//--------------//
// データロード //
//--------------//
function loadExecFlag(hostname, key) {
	var datakey = new String();
	datakey = hostname + VERSION_KEY + key;

	var ret = new String();
	var src = CookieRead(datakey);
	if (src == "") return ret;

	return src;
}

//--------------//
// データセーブ //
//--------------//
function saveExecFlag(hostname, key, data) {

	var datakey = new String();
	datakey = hostname + VERSION_KEY + key;

	CookieWrite(datakey, data, 30);
}

//----------------------//
// クッキーへの書き込み //
//----------------------//
function CookieWrite(kword, kdata, kday)
{
	if(!navigator.cookieEnabled){    // クッキーが利用可能かどうか
		alert("クッキーへの書き込みができません");
		return;
	}

	sday = new Date();
	sday.setTime(sday.getTime() + (kday * 1000 * 60 * 60 * 24));
	s2day = sday.toGMTString();
	document.cookie = kword + "=" + escape(kdata) + ";expires=" + s2day;
}

//----------------------//
// クッキーから読み込み //
//----------------------//
function CookieRead(kword)
{
	if(typeof(kword) == "undefined"){	// キーワードなし
		return "";	// 何もしないで戻る
	}

	kword = kword + "=";
	kdata = "";
	scookie = document.cookie + ";";	// クッキー情報を読み込む
	start = scookie.indexOf(kword);		// キーワードを検索
	if (start != -1){
		// キーワードと一致するものあり
		end = scookie.indexOf(";", start);	// 情報の末尾位置を検索
		kdata = unescape(scookie.substring(start + kword.length, end));	// データ取り出し
	}

	return kdata;
}
