// ==UserScript==
// @name           bro3_misc
// @namespace      Miscellaneous Tool
// @include        http://*.3gokushi.jp/facility/castle_send_troop.php*
// @include        http://*.3gokushi.jp/quest/*
// @include        http://*.3gokushi.jp/tutorial/*
// @include        http://*.3gokushi.jp/card/trade.php*
// @include        http://*.3gokushi.jp/card/exhibit_list.php*
// @include        http://*.3gokushi.jp/card/bid_list.php*
// @include        http://*.3gokushi.jp/card/busyobook_picture.php*
// @include        http://*.3gokushi.jp/busyodas/busyodas.php*
// @include        http://*.3gokushi.jp/busyodas/b3kuji.php*
// @include        http://*.3gokushi.jp/alliance/alliance_log.php*
// @include        http://*.3gokushi.jp/message/inbox.php*
// @description    雑多な改善(同盟ログ検索機能, トレード, 半自動チュートリアル, 自動ブショーダス(自動削除付), 自動ヨロズダス, 武将図鑑未取得カードのトレードリンク, トレード関連書簡自動開封削除, クエスト, 出兵予約時刻) by いかりや長介@ドリフ
// @require		   http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @version		   0.4.6
// ==/UserScript==
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5Q.8l();j$=5Q;K=Z.8j;V="8i"+K+"8h";3Y=2E;(D(){7(j$("#8g").S==0){1z}7(j$("#N").S!=0){j$("#N").8e()}7(Z.1M=="/3Z/8c.H"){j$("29[B=87 84]").3s("<A v=5F><A v=2D></A></A><A v=5D></A><A v=2P></A>");j$("#2D").E("<A v=7Z><F 19=L v=44 /> <F 19=2j v=2L 1u=検索><F 19=7V v=2H 1u=0></A>");j$("#2D").E("<A v=5y>検索期間 : <1f v=3e></1f>年<1f v=3d></1f>月<1f v=3b></1f>日 <1f v=38></1f>時 ～ <1f v=37></1f>年<1f v=36></1f>月<1f v=35></1f>日 <1f v=3a></1f>時</A>");j$("#5F").T({"1D":"49"});j$("#2D").T({"1D":"49","2w":"1Y","L-2b":"1Y"});j$("#5y").T({"1y-2n":"7U"});j$("#2P").T({"4q":"4t","7T-1r":"7S","1D":"49","4y-2n":"2F","7N":"5n"});7(Z.Q.18(/m=(.+)/)){j$("#2D").7L()}1l{j$("#2D").1s();1z}8 f=P 1T();8 g=P 1T(f.1n()-5*7K*1a);2J(i=f.3k()-1;i<=f.3k();i++){j$("#3e").E("<1x 1u="+i+">"+i+"</1x>");j$("#37").E("<1x 1u="+i+">"+i+"</1x>")}j$("#3e").w(g.3k());j$("#37").w(f.3k());2J(i=1;i<=12;i++){j$("#3d").E("<1x 1u="+i+">"+i+"</1x>");j$("#36").E("<1x 1u="+i+">"+i+"</1x>")}j$("#3d").w(g.4E()+1);j$("#36").w(f.4E()+1);2J(i=1;i<=31;i++){j$("#3b").E("<1x 1u="+i+">"+i+"</1x>");j$("#35").E("<1x 1u="+i+">"+i+"</1x>")}j$("#3b").w(g.4G());j$("#35").w(f.4G());2J(i=0;i<=23;i++){j$("#38").E("<1x 1u="+i+">"+i+"</1x>");j$("#3a").E("<1x 1u="+i+">"+i+"</1x>")}j$("#38").w(g.4H());j$("#3a").w(f.4H());j$("#2L").24("1Z",D(){7(j$("#44").w().1H()==""){1z}j$("#2L").G("16","16");j$("#2P").1U("");j$("#5D").1U("[検索結果]<3r /><J v=3u></J>");j$("#2P").E("<55 v=4Z></55>");j$("#2P").T({"3K":"4Y"});j$("#2H").w(0);4V(1)})}7(Z.1M.18(/\\/1p\\//)){j$("p[2b=3F]").E("<A v=2o>");7(j$("a[Q=/1p/2e.H?4W=1]").S!=0){4T("「領地の取り方」 及び 「武将のレベルアップ」以外は操作しないで下さい.\\n操作した場合は当該チュートリアルを手動で行うか, チュートリアルタブを再度クリックする必要があります.\\n状況確認等は新しいウインドウを作成して行って下さい.");Z.Q="M://"+K+"/1p/2e.H?4W=1"}7(j$("Y[U*=7G.22]").S!=0){Z.Q="M://"+K+"/1p/";1z}7(j$("J[B=1j]:W(武将をデッキにセット)").S!=0){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/1E/5c.H"+" #1S",D(){8 a={};8 b=j$("Y[7F=このカードをデッキにセットします]:27(0)").G("3D").2c(",")[1].1H();a[\'7E\']=b;a[\'7A[\'+b+\']\']=j$("#7x"+b+" 1x:1R-7w").w();a[\'7s\']="";a[\'2U\']="7r";a[\'p\']="1";a[\'25\']=j$("F[O=25]:27(0)").w();j$.1O("M://"+K+"/1E/5c.H",a,D(){Z.Q="M://"+K+"/1p/"})})}7(j$("J[B=1j]:W(武将カード)").S!=0){7(j$("F[O=送信]").G("3D").2c(",")[2].18(/\\\'([a-4r-9]+)\\\'/)==4p){1z}8 h={};h[\'4o\']="0";h[\'2I\']="2I";h[\'25\']=14.$1;j$.1O("M://"+K+"/1B/1B.H",h,D(){Z.Q="M://"+K+"/1p/"})}7(j$("J[B=1j]:W(内政設定)").S!=0){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/1E/3j.H"+" #1S",D(){8 a={};a[\'2U\']="7o";a[\'v\']=j$("F[O=v]:27(0)").w();7(j$("F[O=v]:27(0)").S!=0){j$.3h("M://"+K+"/1E/3j.H",a,D(){Z.Q="M://"+K+"/1p/"})}1l{4T("武将カードの4hが取得できません.\\n手動でセットして下さい.")}})}7(j$("J[B=1j]:W(畑の建設)").S!=0){8 j=P 1V();j.1d(P 1g(2S,1,4,5));1Q(j)}7(j$("J[B=1j]:W(伐採所の建設)").S!=0){8 j=P 1V();j.1d(P 1g(2V,1,2,1));1Q(j)}7(j$("J[B=1j]:W(石切り場と製鉄所の建設)").S!=0){8 j=P 1V();j.1d(P 1g(2W,1,4,1));j.1d(P 1g(2X,1,2,5));1Q(j)}7(j$("J[B=1j]:W(複数建設)").S!=0){8 j=P 1V();j.1d(P 1g(2V,1,1,0));j.1d(P 1g(2W,1,5,0));j.1d(P 1g(2X,1,1,6));j.1d(P 1g(2S,1,4,6));1Q(j)}7(j$("J[B=1j]:W(倉庫の建設)").S!=0){8 j=P 1V();j.1d(P 1g(7n,1,0,6));1Q(j)}7(j$("J[B=1j]:W(練兵所の建設)").S!=0){8 j=P 1V();j.1d(P 1g(7m,1,6,3));1Q(j)}7(j$("J[B=1j]:W(兵士を鍛える)").S!=0){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/2i/2i.H?x=6&y=3 #1S",D(){8 b=1m(j$("29:1t(Y[U*=39.2t]) 2d:1t(2m:W(現在の所有数)) 1w").L())+j$("29:1t(Y[U*=39.2t]) 2d:1t(2m:W(作成数)) 1w").S;7(b==0){8 c={};c[\'x\']="6";c[\'y\']="3";c[\'7l\']="7k";c[\'7j\']="1";j$.1O("M://"+K+"/2i/2i.H?x=6&y=3#7i",c,D(){8 a=P 1V();a.1d(P 1g(2W,1,6,1));a.1d(P 1g(2X,1,0,5));a.1d(P 1g(2V,1,1,1));a.1d(P 1g(2S,1,3,5));1Q(a)})}1l{8 d=0;7(j$("29:1t(Y[U*=39.2t]) 2d:1t(2m:W(作成残り時間)) 1w").S!=0){8 e=j$("29:1t(Y[U*=39.2t]) 2d:1t(2m:W(作成残り時間)) 1w").L();e.18(/(\\d\\d):(\\d\\d):(\\d\\d)/);d=1m(14.$1,10)*60*60*1a+1m(14.$2,10)*60*1a+1m(14.$3,10)*1a;j$("#2o").L("(剣兵作成中"+e+"後に完成)")}21(D(){Z.Q="M://"+K+"/1p/"},d)}})}7(j$("J[B=1j]:W(兵士の能力)").S!=0){8 h={};h[\'7h\']="15";h[\'7g\']="10";j$.1O("M://"+K+"/1p/2e.H",h,D(){Z.Q="M://"+K+"/1p/"})}7(j$("J[B=1j]:W(武将を内政から外す)").S!=0){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/1E/3j.H"+" #1S",D(){8 a={};a[\'2U\']="7f";a[\'v\']=j$("F[O=v]:27(0)").w();j$.3h("M://"+K+"/1E/3j.H",a,D(){Z.Q="M://"+K+"/1p/"})})}7(j$("J[B=1j]:W(全体地図)").S!=0){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/3Z/5x.H?p=1"+" #48",D(){7(j$("a[Q*=7e.H]:27(0)").L().18(/\\((-?\\d+),(-?\\d+)\\)/)){8 a={};a[\'7d\']=14.$1;a[\'7c\']=14.$2;j$.1O("M://"+K+"/1p/2e.H",a,D(){Z.Q="M://"+K+"/1p/"})}})}7(j$("J[B=1j]:W(領地の取り方)").S!=0){j$("#2o").1U("自動化対象外のチュートリアルです<3r />手動で領地を取得して下さい!").T({"1r":"2z","1o-1L":"1I"})}7(j$("J[B=1j]:W(武将のレベルアップ)").S!=0){j$("#2o").1U("自動化対象外のチュートリアルです<3r />手動でクエストクリアして下さい!").T({"1r":"2z","1o-1L":"1I"})}7(j$("J[B=1j]:W(施設のレベルアップ)").S!=0){8 j=P 1V();j.1d(P 1g(2V,2,2,1));j.1d(P 1g(2W,2,4,1));j.1d(P 1g(2X,2,2,5));j.1d(P 1g(2S,2,4,5));1Q(j)}7(j$("J[B=1j]:W(本拠地に名前を付けよう)").S!=0){7(j$("F[O=送信]").G("3D").2c(",")[2].18(/\\\'([a-4r-9]+)\\\'/)==4p){1z}8 k=14.$1;j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/2B/2N/2N.H"+" #1S",D(){8 c={};j$("F[O*=7b]").2q(D(){8 a=j$(X).G("O");8 b=j$(X).w();b=b.1k("新規城","新城");c[a]=b});c[\'25\']=k;c[\'3T\']=j$("34[O=3T]").w();c[\'5O\']=j$("34[O=5O]").w();c[\'3Q\']="更新";j$.1O("M://"+K+"/2B/2N/2N.H",c,D(){Z.Q="M://"+K+"/1p/"})})}7(j$("J[B=1j]:W(人口とは？)").S!=0){8 j=P 1V();j.1d(P 1g(7a,1,3,6));j.1d(P 1g(2V,3,2,1));j.1d(P 1g(2W,3,4,1));j.1d(P 1g(2X,3,2,5));j.1d(P 1g(2S,3,4,5));1Q(j)}7(j$("J[B=1j]:W(掲示板)").S!=0){8 h={};h[\'1G\']="3M";h[\'3T\']="I 79 いかりや長介";h[\'m\']="p";h[\'77\']="0";h[\'76\']="";h[\'75\']="";h[\'3Q\']="はい";j$.1O("M://"+K+"/3S/74.H",h,D(){Z.Q="M://"+K+"/1p/"})}7(j$("J[B=1j]:W(防衛戦)").S!=0){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/2B/ #1S",D(){8 d=j$("1w:W(本拠地) a",X).G("Q").2c("=")[1];j$(1v.1A).E("<A v=3U>");j$("#3U").1s();j$("#3U").1q("M://"+K+"/2B/73.H?3W="+d+"&72=#5K #5K",D(){7(j$("1w:1t(J[v*=5H])",X).S!=0){j$("1w:1t(J[v*=5H])",X).L().18(/(.+)\\(あと/);8 a=14.$1.41().1H().1k(/-/g,"/");8 b=P 1T(a);8 c=P 1T();j$("#2o").L("(敵襲 "+a+" に到達)");21(D(){Z.Q="M://"+K+"/1p/"},b.1n()-c.1n()+3Y)}})})}7(j$("J[B=1j]:W(内政の強化)").S!=0){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/3S/71.H"+" #1S",D(){7(j$("a[Q*=43.H]:W(3M)").S!=0){j$("a[Q*=43.H]:W(3M)").G("Q").18(/5A=(\\d+)&m=P&5z=(\\d+)/);8 a={};a[\'m\']="P";a[\'5A\']=14.$1;a[\'5z\']=14.$2;a[\'6Z\']="スレッドの削除";j$.1O("M://"+K+"/3S/43.H",a,D(){Z.Q="M://"+K+"/1p/"})}1l{Z.Q="M://"+K+"/1p/"}})}}7(Z.1M=="/3t/"||Z.1M=="/3t/2e.H"){j$("1w[B=6Y]").G("1D",6X);8 l={};l["ともだちを招待しよう"]="3n 4c";l["同盟を組む"]="1c 1K";l["人口を増やそう"]="6W";l["生産力の強化"]="木石鉄糧 1a";l["生産施設を増やそう"]="木石鉄糧 3c";l["書簡の使い方"]="木石鉄糧 3c";l["ケータイ設定"]="1c 50";l["武将のレベルアップ　其二"]="木石鉄糧 4i";l["領地の取得　其二"]="木石鉄糧 1a";l["槍兵の研究"]="木鉄糧 1a 石 2E";l["弓兵の研究"]="石鉄糧 1a 木 2E";l["騎兵の研究"]="木石糧 1a 鉄 2E";l["生産力の強化　其の二"]="名声 1";l["カード合成"]="1h 10";l["人口を増やそう　其二"]=" 木石鉄糧 1a";l["一戦入魂（新米）"]="1c 80";l["寄付をしよう　其一"]="木石鉄糧 4l";l["鍛冶場で強化"]="木石鉄糧 1a";l["防具工場で強化"]="木石鉄糧 6V";l["武将のレベルアップ　其三"]="1c 1K";l["領地のレベルアップ"]="名声 1";l["武将デュエルにエントリーしよう"]="1c 20";l["スキルの習得"]="1h 40";l["同盟員の領地を討伐しよう"]="木石鉄糧 1W";l["同盟掲示板に書き込み"]="木石鉄糧 4i";l["同一スキルでレベルアップ合成しよう"]="1h 40";l["不可侵条約を活用しよう"]="木石鉄糧 1W";l["領地の取得　其三"]="木石鉄糧 2k";l["木収入強化"]="石鉄糧 2k";l["石収入強化"]="木鉄糧 2k";l["鉄収入強化"]="木石糧 2k";l["トレードに出品しよう"]="1h 20";l["人口を増やそう　其三"]="木石鉄糧 3m";l["寄付をしよう　其二"]="木石鉄糧 2k";l["週間ランキングを確認しよう"]="1c 50";l["拠点をつくれ！"]="木石鉄 2k 糧 1a";l["拠点に名前を付けよう"]="1h 33";l["拠点に武将をセットしよう"]="1c 50";l["武将のレベルアップ　其四"]="1c 4c";l["施設のいろは"]="3n 1K";l["スキルレベル"]="木石鉄糧 2k";l["一戦入魂（隊士）"]="1h 50";l["人口を増やそう　其四"]="木石鉄糧 2f";l["個人ランク"]="1c 50";l["同盟ランク"]="木石鉄糧 3x";l["領地の取得　其四"]="木石鉄糧 2E";l["チャージポイント"]="3n 1K";l["城のレベルアップ"]="木石糧 1a 鉄 2f";l["武将レベルアップ　其五"]="名声 1";l["同盟員と6P砦を落とせ"]="名声 2";l["寄付をしよう　其三"]="木石鉄糧 3A";l["人口を増やそう　其五"]="木石鉄糧 2O";l["世界の覇権"]="名声 1";l["幻のスキルを探せ"]="木石鉄糧 3m";l["防御武将を鍛えよう　其一"]="1c 50";l["内政武将を鍛えよう　其一"]="1c 50";l["移動速度を鍛えよう　其一"]="1c 50";l["斥候の研究"]="木石鉄 3m 糧 1a";l["木収入強化　其二"]="石鉄糧 2f";l["石収入強化　其二"]="木鉄糧 2f";l["鉄収入強化　其二"]="木石糧 2f";l["同盟のレベルアップ"]="木石鉄糧 4i";l["一戦入魂（隊長）"]="木石鉄糧 4w";l["衝車の研究"]="木石鉄 5q 糧 4w";l["領地の取得　其伍"]="木石鉄糧 4w";l["武将レベルアップ　其六"]="1c 6O";l["スキルの習得　其二"]="1h 1K";l["城のレベルアップ　其二"]="木石 2O 鉄糧 2f";l["スキルレベル　其二"]="1h 1K";l["人口を増やそう　其六"]="名声 1";l["斥候騎兵の研究"]="1c 6M";l["一戦入魂（大将）"]="木石鉄糧 3A";l["矛槍兵の研究"]="名声 1";l["弩兵の研究"]="名声 1";l["近衛騎兵の研究"]="名声 1";l["領地の取得　其六"]="木石鉄糧 2O";l["幻のスキルを探せ　其二"]="名声 1";l["スキルレベル　其三"]="1h 26";l["修行合成してみよう"]="1h 50";l["人口を増やそう　其七"]="木石鉄糧 3A";l["幻のスキルを探せ　其三"]="名声 1";l["武将のレベルアップ　其七"]="1c 3x";l["幻のスキルを探せ　其四"]="名声 1";l["一戦入魂（名将）"]="木石鉄糧 5i";l["人口を増やそう　其八"]="木石鉄糧 6K";l["一戦入魂（覇王）"]="名声 3";l["投石機の研究"]="名声 1";l["難関砦を攻略せよ"]="木石鉄糧 5i";l["武将のレベルアップ　其八"]="1c 5f";l["人口を増やそう　其九"]="木石鉄糧 6J";l["天下統一の足がかり"]="木石鉄糧 6H";l["役職者を任命しよう"]="1c 1K";l["同盟に貢献しよう　其一"]="1h 50";l["同盟上位への道　其一"]="1c 3c";l["同盟レベルを5まで上げよう"]="木石鉄糧 5q";l["同盟に貢献しよう　其二"]="1h 20";l["同盟上位への道　其二"]="1c 1W";l["鉄材研究所を建設しよう"]="木石鉄糧 1a";l["大練兵所を建設しよう"]="木石鉄糧 1a";l["同盟に貢献しよう　其三"]="1h 50";l["同盟上位への道　其三"]="1c 4l";l["石材研究所を建設しよう"]="木石鉄糧 2f";l["大兵舎を建設しよう"]="木石鉄糧 2f";l["同盟に貢献しよう　其四"]="1h 1K";l["木材研究所を建設しよう"]="木石鉄糧 2O";l["同盟上位への道　其四"]="1c 1a";l["大弓兵舎を建設しよう"]="木石鉄糧 2O";l["同盟に貢献しよう　其五"]="1h 4c";l["同盟上位への道　其五"]="1c 2k";l["食糧研究所を建設しよう"]="木石鉄糧 5a";l["大厩舎を建設しよう"]="木石鉄糧 5a";l["同盟に貢献しよう　其六"]="1h 3x";l["同盟上位への道　其六"]="1c 3m";l["大兵器工房を建設しよう"]="木石鉄糧 3A";l["同盟に貢献しよう　其七"]="シルバーチケット";l["同盟上位への道　其七"]="1c 2E";l["同盟に貢献しよう　其八"]="1h 1W";l["同盟上位への道　其八"]="シルバーチケット";l["拠点をつくれ！ 其二"]="1h 5f";l["拠点をつくれ！ 其三"]="1h 3c";l["拠点をつくれ！ 其四"]="1h 1W";l["拠点をつくれ！ 其五"]="1h 4l";l["倉庫の上限を増やそう　其一"]="木石鉄糧 1W";l["倉庫の上限を増やそう　其二"]="1h 1K";l["倉庫の上限を増やそう　其三"]="小麗チケット 1枚";l["倉庫の上限を増やそう　其四"]="小麗チケット 2枚";l["倉庫の上限を増やそう　其五"]="大鳳チケット 1枚";j$("a[Q*=/3t/2e.H?30]").2q(D(){7(j$(X).L()6G l){8 a=l[j$(X).L()];a=a.1k("木","<Y U="+j$("Y[U*=6F.22]:1R").G("U")+" />");a=a.1k("石","<Y U="+j$("Y[U*=6E.22]:1R").G("U")+" />");a=a.1k("鉄","<Y U="+j$("Y[U*=6D.22]:1R").G("U")+" />");a=a.1k("糧","<Y U="+j$("Y[U*=6C.22]:1R").G("U")+" />");a=a.1k("名声","<Y U="+j$("Y[U*=6B.22]:1R").G("U")+" />");a=a.1k("1c","<Y U="+j$("Y[U*=6A.22]:1R").G("U")+" />");a=a.1k("1h","<Y U="+j$("Y[U*=6z.22]:1R").G("U")+" />");a=a.1k("3n","<Y U="+j$("Y[U*=6y.22]:1R").G("U")+" />");a=a.1k("シルバーチケット","<Y U=/6x-6w/4S/6v/Y/1B/6u.3E 3K=4U />");a=a.1k("小麗チケット","<Y U=/4S/4X/Y/1B/6t.3E 3K=4U />");a=a.1k("大鳳チケット","<Y U=/4S/4X/Y/1B/6s.3E 3K=4U />");8 b=a.18(/ (\\d\\d\\d\\d+)/g);7(b){2J(8 i=0;i<b.S;i++){a=a.1k(b[i].41().1H(),51(b[i].41().1H()))}}j$(X).6r("<3r />"+a)}})}7(Z.1M=="/3t/2e.H"){7(j$("F[O=30]").w()=="6q"){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/2B/6p.H"+" #6o",D(){7(j$("29:1t(2m:W(\'攻撃\')) 1w:W(\'→\'):27(0)").L().18(/→ (\\d+)/)){j$("F[O=6n]").w(14.$1)}})}7(j$("F[O=30]").w()=="6m"){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/2B/6l.H"+" #48",D(){7(j$("1w[B=59]:W(\'→\')").L().18(/→ (\\d+)/)){j$("F[O=6k]").w(14.$1)}})}7(j$("F[O=30]").w()=="6j"){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q("M://"+K+"/3Z/5x.H"+" #48",D(){7(j$("1w[B=59]:W(\'→\')").L().18(/→ (\\d+)/)){j$("F[O=6i]").w(14.$1)}})}7(j$("F[O=30]").w()=="6h"){j$("F[O=x]").w("0");j$("F[O=y]").w("0")}}7(Z.1M=="/1E/5e.H"){j$("a[Q*=2G.H]").1Z(D(){6g.6f(X.Q,\'4B\');1z 13});8 m="";8 n=0;j$("A[B=5k-5l-5m]").E("<A v=2M>");j$("#2M").T({"1y-2n":"2F","1y-2a":"1P","1o-2p":"4x"});j$("#2M").E("6e即落札リスト[修正可能] <J v=1J></J>");j$("#2M").E("<34 v=28 4n=5 4m=4k>");j$("#2M").E("<A v=3g><F 19=2j v=2l 1u=自動入札></A>");j$("#3g").T({"L-2b":"1Y"});j$("2d:1t(2r:W(10))").2q(D(){7(j$("1w[B=6d]",X).L().1H()=="---"&&1m(j$("2r",X).1U().1k(",",""))==10){j$("a[Q*=2G.H]",X).G("Q").18(/v=(\\d+)/);8 a="M://"+K+"/1E/2G.H?v="+14.$1;m+=a+"\\n";n++}});j$("#28").w(m);j$("#1J").L("("+n+" 件)");j$("#2l").24(\'1Z\',D(){8 a=j$("#28").w().2c("\\n");j$("#2l").G("16","16");32(a)});j$("#28").2N(D(){j$("#1J").L("("+j$(X).w().1H().2c("\\n").S+" 件)")})}7(Z.1M=="/1E/5B.H"){8 m="";j$("A[B=6c]").3s("<A v=3o>");j$("#3o").T({"1y-2n":"2F","1y-2a":"1P","1o-2p":"4x"});j$("#3o").E("出品中カードへのダイレクトリンク");j$("#3o").E("<34 v=28 4n=11 4m=4k>");j$("a[Q*=5B.H?5E]").2q(D(){7(j$(X).G("Q").18(/5E=(\\d+)/)){8 a="M://"+K+"/1E/2G.H?v="+14.$1;m+=a+"\\n"}});j$("#28").w(m)}7(Z.1M=="/1E/69.H"){8 m="";j$("A[B=5k-5l-5m]").E("<A v=2Q>");j$("#2Q").T({"1y-2n":"2F","1y-2a":"1P","1o-2p":"4x"});j$("#2Q").E("リスト一括入札 <J v=1J></J>");j$("#2Q").E("<34 v=28 4n=11 4m=4k>");j$("#2Q").E("<A v=3g><F 19=2j v=2l 1u=自動入札></A>");j$("#3g").T({"L-2b":"1Y"});j$("#2l").24(\'1Z\',D(){7(j$("A[B=1Y]").S!=0){j$("A[B=1Y]").L().18(/(\\d+)件 \\/ 10件/);7(1m(14.$1)>=10){1z}}8 a=j$("#28").w().2c("\\n");j$("#2l").G("16","16");32(a)})}7(Z.1M=="/1E/68.H"){j$("Y[U*=66.2t]").2q(D(){8 a=j$("J[B=5J]",j$(X).1F()).L().1H();j$(X).1F().E("<F 19=2j 1u=トレードで探す>").T({"L-2b":"3F","z-2e":"10"}).24(\'1Z\',D(){Z.Q="M://"+K+"/1E/5e.H?s=64&o=a&t=61&k="+a+"&5Z=0"})})}7(Z.1M=="/2i/5S.H"){8 o=P 1T();j$("1f[O=5T]").w(o.5U());j$("1f[O=5V]").w(o.4E()+1);j$("1f[O=5W]").w(o.4G());j$("1f[O=5X]").w(o.4H());j$("1f[O=5Y]").w(("0"+o.5R()).3H(-2,-1));j$("1f[O=62]").w(("0"+o.5R()).3H(-1));j$("1f[O=63]").w(("0"+o.5N()).3H(-2,-1));j$("1f[O=65]").w(("0"+o.5N()).3H(-1))}7(Z.1M=="/1B/1B.H"){8 p;8 q=1m(j$("1b[B=67] J").L());j$("A[B=3y]").L().18(/残り(\\d+)枚/);8 r=1m(14.$1);j$("#6a:1t(Y[U*=6b.3E]) 29").3s("<A v=3l>");j$("#3l").E("<A v=1i>");j$("#3l").E("<A v=4v>");j$("#1i").E("<A v=1J>※自動破棄を有効にしても<J B=5h>4C</J>, <J B=5d>R</J>及び優良<J B=3p>2h</J>(コスト3/自動スキル/劉備/孫権/諸葛亮/徐庶)は破棄対象外</A>");j$("#1i").E("<A v=58><A v=57 1G=R以上及び優良2h(コスト3/自動スキル/劉備/孫権/諸葛亮/徐庶)を除外><F 19=1C v=3v>自動破棄を有効にする</A><A v=54><F 19=2j v=53 1u=設定保存></A><A v=52><F 19=2j v=3z 1u=自動ブショーダス></A></A>");j$("#1i").E("<A B=3B>破棄除外(スキル付与素材)</A>");j$("#1i").E("<3G>");j$("#1i").E("<1b B=1X 1G=騎兵強行スキルを除外><F 19=1C v=4R>一騎当千</1b>");j$("#1i").E("<1b B=1X 1G=槍兵突撃/槍兵強行/槍兵の強撃スキルを除外><F 19=1C v=4Q>槍兵の猛撃</1b>");j$("#1i").E("<1b B=1X 1G=騎兵突撃/騎兵の強撃スキルを除外><F 19=1C v=4P>騎兵の猛撃</1b>");j$("#1i").E("<1b B=1X 1G=弓兵突撃/弓兵の強撃スキルを除外><F 19=1C v=4O>弓兵の猛撃</1b>");j$("#1i").E("<1b B=1X 1G=兵器の強撃スキルを除外><F 19=1C v=4N>兵器の猛撃</1b>");j$("#1i").E("<1b B=1X 1G=鉄壁スキルを除外><F 19=1C v=4M>豪傑</1b>");j$("#1i").E("<1b B=1X 1G=急速援護スキルを除外><F 19=1C v=4L>千里行</1b>");j$("#1i").E("</3G>");j$("#1i").E("<A B=3B>破棄除外(育成対象素材)</A>");j$("#1i").E("<3G>");j$("#1i").E("<1b B=1X 1G=知力15以上を除外><F 19=1C v=4K>知力15以上</1b>");j$("#1i").E("<1b B=1X 1G=コスト2.5 2hを除外><F 19=1C v=4J>コスト2.5 <J B=3p>2h</J></1b>");j$("#1i").E("<1b B=1X 1G=コスト2.5 2h/Cを除外><F 19=1C v=4I>コスト2.5 <J B=3p>2h</J><J B=5b>/C</J></1b>");j$("#1i").E("</3G>");j$("#1i").E("<A B=3B>破棄除外(ホワイトリスト) [カード4hを半角かつカンマ区切りで入力]</A>");j$("#1i").E("<A 6I=4q:4t><F 19=L v=2x 2p=78></A>");j$("#1J").T({"1D":"2T","1y-2a":"4A"});j$("#58").T({"1D":"2T"});j$("#57").T({"1D":"6L","2w":"2s"});j$("#54").T({"1D":"6N","2w":"2s"});j$("#52").T({"1D":"4Y","2w":"2s","L-2b":"1Y"});j$("#3l").T({"1D":"2T","5p":"5s 6Q #5t","1y-2a":"1P","6R":"1P"});j$("#4v").T({"1D":"2T","1o-2p":"4A","L-2b":"3F","1y-2n":"2F","1y-2a":"1P"});j$("#1i").T({"1D":"2T","1o-2p":"6S","1y-2s":"1P","1y-2a":"1P"});j$(".3B").T({"1y-2n":"6T","1y-2a":"1P","1o-1L":"1I","5p-2s":"5s 1P #5t","4q":"4t"});j$(".1X").T({"2w":"2s","1y-1Y":"1P","1y-2a":"2F","1D":"6U"});j$(".5h").T({"1r":"#5u","1o-1L":"1I"});j$(".5d").T({"1r":"#5v","1o-1L":"1I"});j$(".3p").T({"1r":"#5w","1o-1L":"1I"});j$(".5b").T({"1r":"3q","1o-1L":"1I"});p=17(V+"46",13);j$("#3v").G("1e",p);7(p==13){j$("F[19=1C][v*=3C]").G("16","16");j$("#2x").G("16","16")}p=17(V+"3V",13);j$("#4R").G("1e",p);p=17(V+"2Z",13);j$("#4Q").G("1e",p);p=17(V+"3I",13);j$("#4P").G("1e",p);p=17(V+"3J",13);j$("#4O").G("1e",p);p=17(V+"3P",13);j$("#4N").G("1e",p);p=17(V+"3O",13);j$("#4M").G("1e",p);p=17(V+"3N",13);j$("#4L").G("1e",p);p=17(V+"3L",13);j$("#4K").G("1e",p);p=17(V+"3X",13);j$("#4J").G("1e",p);p=17(V+"42",13);j$("#4I").G("1e",p);p=17(V+"47","");j$("#2x").w(p);j$("F[19=1C]:1e").1F().T("1r","2z");j$("#53").24(\'1Z\',D(){1N(V+"46",j$("#3v").G("1e"));1N(V+"3V",j$("#4R").G("1e"));1N(V+"2Z",j$("#4Q").G("1e"));1N(V+"3I",j$("#4P").G("1e"));1N(V+"3J",j$("#4O").G("1e"));1N(V+"3P",j$("#4N").G("1e"));1N(V+"3O",j$("#4M").G("1e"));1N(V+"3N",j$("#4L").G("1e"));1N(V+"3L",j$("#4K").G("1e"));1N(V+"3X",j$("#4J").G("1e"));1N(V+"42",j$("#4I").G("1e"));1N(V+"47",j$("#2x").G("1u"));4T("設定保存しました")});j$("#3v").24(\'1Z\',D(){7(j$(X).G(\'1e\')==13){j$(X).1F().T("1r","3q");j$("F[19=1C][v*=3C]").G("16","16");j$("#2x").G("16","16")}1l{j$(X).1F().T("1r","2z");j$("F[19=1C][v*=3C]").2g("16");j$("#2x").2g("16")}});j$("F[19=1C][v*=3C]").24(\'1Z\',D(){7(j$(X).G(\'1e\')==13){j$(X).1F().T("1r","3q")}1l{j$(X).1F().T("1r","2z")}});j$("#3z").24(\'1Z\',D(){j$("#3z").G("16","16");4a(q,r,"0")});7(r==0||1m(q/1K)==0){j$("#3z").2g("16")}}7(Z.1M=="/1B/4b.H"){j$("A[B=3y]").L().18(/残り(\\d+)回/);8 s=1m(14.$1);j$("A[B=3y]").3s("<A v=3i>");j$("#3i").E("<A v=4d>");j$("#3i").E("<A v=2R>");j$("#4d").E("<F 19=2j v=3f 1u=自動ヨロズダス>");j$("#3i").T({"1D":"4e"});j$("#2R").T({"1D":"4e","1o-2p":"4A","L-2b":"3F"});j$("#4d").T({"1D":"4e","4y-2s":"5n","4y-1Y":"1P","L-2b":"1Y"});j$("#3f").24(\'1Z\',D(){j$("#3f").G("16","16");4g(s)});7(s==0){j$("#3f").2g("16")}}7(Z.1M=="/4j/7p.H"){8 t=P 1V();j$("#7q").E("<1b B=2y><F 19=2j v=3w 1u=トレード書簡開封削除></1b>");j$("#1S 7t").E("<A v=1J></A>");j$("#1J").T({"2w":"1Y"});j$("#3w").24(\'1Z\',D(){j$("2d[B=7u]:1t(J[B=7v])").2q(D(){7(j$("a[Q*=4s.H]",X).L().18(/カード.*落札/)!=4p){t.1d(j$("a[Q*=4s.H]",X).G("Q"))}});j$("#3w").G("16","16");4u(t,P 1V())})}})();D 1Q(e){j$(1v.1A).E("<A v=N>");j$("#N").1s();7(e.S==0){j$("#N").1q("M://"+K+"/7y.H #7z",D(){8 a=0;8 b;7(j$("J[B=5r]:2y").S!=0){b=j$("J[B=5r]:2y").L();b.18(/(\\d\\d):(\\d\\d):(\\d\\d)/);a=1m(14.$1,10)*60*60*1a+1m(14.$2,10)*60*1a+1m(14.$3,10)*1a}7(b!=7B){j$("#2o").L("(施設建設中"+b+"後に完成)")}21(D(){Z.Q="M://"+K+"/1p/"},a)});1z}j$("#N").1q("M://"+K+"/2i/7C.H?x="+e[0].x+"&y="+e[0].y+" #7D",D(){8 a={};a[\'x\']=e[0].x;a[\'y\']=e[0].y;a[\'3W\']=j$("F[O=3W]:27(0)").w();a[\'25\']=j$("F[O=25]:27(0)").w();8 b=0;8 c=e[0].5j;8 d;7(j$("A[B=5g]").S!=0){j$("A[B=5g]").L().18(/レベル(\\d+)/);b=14.$1}7(j$("A[B=3y]:W(建設中)").S!=0){b++}7(j$("29:1t(Y[U*=56"+e[0].v+".2t]) 2d:1t(2m:W(所要時間)) 1w").S>0){2C=j$("29:1t(Y[U*=56"+e[0].v+".2t]) 2d:1t(2m:W(所要時間)) 1w").1U().1H();4F=2C.7H("<J>",0);7(4F>0){2C=2C.7I(0,4F-1)}2C.18(/(\\d\\d):(\\d\\d):(\\d\\d)/);d=1m(14.$1,10)*60*60*1a+1m(14.$2,10)*60*1a+1m(14.$3,10)*1a}1l{d=0}7(b==0){a[\'v\']=e[0].v}e.4D();7(b>=c){1Q(e)}1l{j$("#2o").L("(施設建設中"+2C+"後に完成)");j$.1O("M://"+K+"/2i/7J.H",a,D(){21(D(){1Q(e)},d+3Y)})}})}D 32(b){7(b.S==0){j$("#28").w("");j$("#2l").2g("16");1z}8 c=b[0].1H();8 d=P 14("M:\\\\/\\\\/"+K+"\\\\/1E\\\\/2G.H\\\\?v=\\\\d+");b.4D();7(c.18(d)){j$(1v.1A).E("<A v=N>");j$("#N").1s();j$("#N").1q(c+" #1S",D(){8 a={};7(j$("F[O=4z]").S!=0){a[\'t\']=j$("F[O=t]").w();a[\'k\']=j$("F[O=k]").w();a[\'p\']=j$("F[O=p]").w();a[\'s\']=j$("F[O=s]").w();a[\'o\']=j$("F[O=o]").w();a[\'4z\']=j$("F[O=4z]").w();a[\'2K\']=j$("F[O=2K]").w();a[\'7M\']="落札する"}1l{a[\'25\']=j$("F[O=25]").w();a[\'t\']=j$("F[O=t]").w();a[\'k\']=j$("F[O=k]").w();a[\'p\']=j$("F[O=p]").w();a[\'s\']=j$("F[O=s]").w();a[\'o\']=j$("F[O=o]").w();a[\'5o\']=j$("F[O=5o]").w();a[\'2K\']=j$("F[O=2K]").w();a[\'7O\']="入札する"}j$("#1J").L("(トレード4h "+j$("F[O=2K]").w()+" を入札中)");j$.1O("M://"+K+"/1E/2G.H",a,D(){21(D(){32(b)},1W)})})}1l{j$("#1J").L("(有効なトレードリンクではありませんでした)");21(D(){32(b)},1W)}}D 4a(o,p,q){j$(1v.1A).E("<A v=N>");j$("#N").1s();8 r;7(o/1K>=p){r=p}1l{r=1m(o/1K)}j$("F[O=送信]").G("3D").2c(",")[2].18(/\\\'([a-4r-9]+)\\\'/);8 s=14.$1;7(r==0){7(q!=0){8 t={};t[\'7P[\'+q+\']\']="1";t[\'p\']="1";t[\'s\']="";t[\'o\']="";t[\'7Q\']="";t[\'25\']=s;t[\'3Q\']="破棄";j$.1O("M://"+K+"/1E/7R.H",t,D(){Z.Q="M://"+K+"/1B/1B.H";1z})}1l{Z.Q="M://"+K+"/1B/1B.H";1z}}8 t={};8 u=2A.4f(2A.45()*3x+1W);t[\'4o\']="0";t[\'2I\']="2I";t[\'25\']=s;t[\'7W\']=q;j$("#N").1q("M://"+K+"/1B/1B.H #1S",t,D(){j$("a[Q*=7X]").G("Q").18(/\\\'(\\d+)\\\'/);8 a=14.$1;8 b=j$("J[B=5J]").L();8 c=j$("J[B*=7Y]").L();8 d=j$("J[B=O]").L();8 e=5C(j$("J[B=81]").L());8 f=5C(j$("J[B=82]").L());8 g=P 83(j$("J[B=5G 85]").S);j$("J[B*=5G]").L().18(/:(.+)86/);8 h=14.$1;8 j=" が当たりました!";8 k="0";7(17(V+"46",13)==2Y){k=a;j=" を自動削除しました!";7(c=="R"||c=="4C"||e>=3.0||g==2Y||b=="88"||b=="89"||b=="8a"||b=="8b"){k="0";j=" が当たりました!"}7((17(V+"3V",13)&&h=="騎兵強行")||(17(V+"2Z",13)&&h=="槍兵突撃")||(17(V+"2Z",13)&&h=="槍兵強行")||(17(V+"3I",13)&&h=="騎兵突撃")||(17(V+"3I",13)&&h=="騎兵の強撃")||(17(V+"3J",13)&&h=="弓兵突撃")||(17(V+"3J",13)&&h=="弓兵の強撃")||(17(V+"3P",13)&&h=="兵器の強撃")||(17(V+"3O",13)&&h=="鉄壁")||(17(V+"3N",13)&&h=="急速援護")||(17(V+"3L",13)&&f>=15.0)||(17(V+"42",13)&&e>=2.5)||(17(V+"3X",13)&&e>=2.5&&c=="2h")||(17(V+"2Z",13)&&h=="槍兵の強撃")){k="0";j=" が当たりました!"}8 l=17(V+"47","").1H().2c(",");2J(8 i=0;i<l.S;i++){7(l[i].1H()==b){k="0";j=" が当たりました!"}}}j$("#4v").1U("<J v=2v>"+c+"</J>  "+d+" (8d."+b+")<J v=5I>"+j+"</J>");7(c=="C"){j$("#2v").T({"1r":"3q","1o-1L":"1I"})}1l 7(c=="2h"){j$("#2v").T({"1r":"#5w","1o-1L":"1I"})}1l 7(c=="R"){j$("#2v").T({"1r":"#5v","1o-1L":"1I"})}1l 7(c=="4C"){j$("#2v").T({"1r":"#5u","1o-1L":"1I"})}1l{j$("#2v").T({"1r":"#8f","1o-1L":"1I"})}8 m=0;8 n=0;7(j==" が当たりました!"){m=1K;n=1}1l{m=70;j$("#5I").T({"1r":"2z","1o-1L":"1I"})}21(D(){4a(o-m,p-n,k)},u)})}D 4g(b){j$(1v.1A).E("<A v=N>");j$("#N").1s();7(b==0){21(D(){Z.Q="M://"+K+"/1B/4b.H"},1a);1z}8 c={};8 d=2A.4f(2A.45()*1W+1a);c[\'4o\']="0";c[\'2I\']="2I";j$("#N").1q("M://"+K+"/1B/4b.H #1S",c,D(){7(j$("p:W(おめでとうございます！)").S!=0){j$("p:W(おめでとうございます！)").1U().18(/<2r>(.+)&2u;/);8 a="<2r>"+14.$1+"</2r>";j$("#2R").1U(a+"が当たりました!")}1l{j$("#2R").1U("<2r>はずれ</2r>を引いてしまいました")}21(D(){j$("#2R").1U("&2u;");4g(b-1)},d)})}D 4V(l){8 m=1;7(j$("a[1G=2y 5L]:1R").S!=0){j$("a[1G=2y 5L]:1R").G("Q").18(/p=(\\d+)/);m=1m(14.$1)}7(l>m){j$("#2L").2g("16");j$("#3u").L("検索完了 "+j$("#2H").w()+" 件見つかりました");1z}8 n=P 1T(j$("#3e").w(),j$("#3d").w()-1,j$("#3b").w(),j$("#38").w());8 o=P 1T(j$("#37").w(),j$("#36").w()-1,j$("#35").w(),j$("#3a").w());7(n.1n()>o.1n()){8 p=P 1T(n);n.5M(o.1n());o.5M(p.1n())}j$("#3u").L("検索中 ( "+l+"/"+m+" )");7(j$("#N").S==0){j$(1v.1A).E("<A v=N>");j$("#N").1s()}j$("#N").1q(Z.Q+"&p="+l+" #1S",D(){8 i=P 1T(j$("1w[B*=3R]:1R",X).L().1k(/-/g,"/"));8 j=P 1T(j$("1w[B*=3R]:2y",X).L().1k(/-/g,"/"));8 k=13;7(n.1n()-o.1n()!=0){7(i.1n()<=n.1n()){j$("#2L").2g("16");j$("#3u").L("検索完了 "+j$("#2H").w()+" 件見つかりました");1z}7(j.1n()>o.1n()){k=2Y}}7(k==13){j$("a[Q*=4s.H?v=]:W("+j$("#44").w().1H()+")",X).2q(D(){8 a=j$(X).L();8 b=j$("Y",j$(X).1F()).G("U");8 c=j$(X).G("Q");8 d=j$("1w[B*=3R]",j$(X).1F().1F()).L();8 e=j$("a[Q*=/2i/5S.H]",j$(X).1F().1F()).G("Q");8 f=j$("Y[U*=8k.22]",j$(X).1F().1F()).G("U");8 g=2Y;7(n.1n()-o.1n()!=0){8 h=P 1T(d.1k(/-/g,"/"));7(n.1n()>h.1n()||h.1n()>o.1n()){g=13}}7(g==2Y){j$("#2H").w(1m(j$("#2H").w(),10)+1);j$("#4Z").E("<1b><Y U="+b+" /><a 5P=4B Q="+c+">"+a+"</a>&2u;&2u;<a 5P=4B Q="+e+"><Y U="+f+" /></a>&2u;&2u;("+d+")</1b>")}})}l++;j$.3h(Z.Q+"&p="+l,D(){4V(l)})})}D 4u(b,c){7(b.S==0){j$("#1J").L("削除作業中");8 d={};d[\'2U\']=j$("F[O=2U]").w();d[\'p\']=j$("8m[O=4j] F[O=p]").w();d[\'8n[]\']=c;j$.1O("M://"+K+"/4j/8o.H",d,D(){j$("#3w").2g("16");j$("#1J").L("");1z})}1l{8 e=b[0].1H();e.18(/v=(\\d+)/);c.1d(14.$1);b.4D();j$.3h(e,D(){j$("#1J").L("開封作業:残り"+b.S+"件");8 a=2A.4f(2A.45()*1W);21(D(){4u(b,c)},a)})}}D 1g(a,b,x,y){X.v=a;X.5j=b;X.x=x;X.y=y}D 51(a){8 b=P 8p(a).1k(/,/g,"");8q(b!=(b=b.1k(/^(-?\\d+)(\\d{3})/,"$1,$2")));1z b}',62,523,'|||||||if|var|||||||||||||||||||||||id|val||||div|class||function|append|input|attr|php||span|HOST|text|http|AjaxTempDOM|name|new|href||length|css|src|KEY|contains|this|img|location||||false|RegExp||disabled|GM_getValue|match|type|1000|li|BP|push|checked|select|Facility|TP|AutoBushodasControls|ttl_small|replace|else|parseInt|getTime|font|tutorial|load|color|hide|has|value|document|td|option|margin|return|body|busyodas|checkbox|width|card|parent|title|trim|bold|notice_msg|100|weight|pathname|GM_setValue|post|5px|BuildFacility|first|gray02Wrapper|Date|html|Array|500|keep_skill|right|click||setTimeout|gif||bind|ssid||eq|direct_link_lists|table|bottom|align|split|tr|index|3000|removeAttr|UC|facility|button|1500|auto_bid|th|top|AutoTutorialMsg|size|each|strong|left|png|nbsp|card_rarity|float|white_lists|last|orangered|Math|user|BuildTimeStr|search_controls|2500|10px|trade_bid|total_counts|send|for|exhibit_id|do_search|10tp_trade|change|5000|search_result_area|direct_trade|DrawResult|215|680px|mode|209|211|213|true|Keep_Spear|disp_id||AutoBid||textarea|to_d|to_m|to_y|from_h|unit_301l|to_h|from_d|300|from_m|from_y|AutoDrawYorozudas|control_area|get|AutoYodozudas|domestic_setting|getFullYear|AutoBushodasLite|2000|CP|trade_direct_link|Rarity_UC|black|br|before|quest|process_msg|auto_delete|del_trade_msg|200|sysMes|AutoDrawBushodas|10000|except_list|except_|onClick|jpg|center|ul|slice|Keep_Cavalry|Keep_Bow|height|Keep_Intelligence|AutoTutorial|Keep_Thousand_Miles|Keep_Courage|Keep_Ram|btn_send|contents|bbs|comment|AjaxTempDOM2|Keep_Hero|village_id|Keep_Cost_UC|MARGIN|alliance||toString|Keep_Cost_C|personal_res_view|search_query|random|AutoDelete|White_Lists|grayWrapper|710px|AutoBushodas|b3kuji|150|AutoYodozudasControls|740px|floor|AutoYorozudas|ID|800|message|93|700|cols|rows|got_type|null|clear|z0|detail|both|DeleteMsgs|CardInfo|4000|12pt|margine|exhibit_cid|20px|_blank|SR|shift|getMonth|Pos|getDate|getHours|except_cost_25_C|except_cost_25_UC|except_intelli_15|except_thousand_miles_run|except_courage|except_ram|except_bow|except_cavalry|except_spear|except_hero|extend_project|alert|48px|Search|st|ybga|300px|search_result||addFigure|draw_btn|save_settings|save_btn|ol|facility_|delete_enabler|first_line_wrap|rankNum|7000|Rarity_C|deck|Rarity_R|trade|250|th_ttl|Rarity_SR|30000|lv|ui|tabs|panel|auto|exhibit_price|border|8000|buildClock|solid|00b1da|ff4242|00c5ff|ffa200|list|date_field|user_id|thread_id|exhibit_list|parseFloat|search_header|del_id|log_search|skillName1|area_timer|result_msg|cardno|enemy|page|setTime|getSeconds|medal|target|jQuery|getMinutes|castle_send_troop|res_y|getYear|res_m|res_d|res_h|res_i1|tl||no|res_i2|res_s1|price|res_s2|bg_blank_card|first_bpbtn|busyobook_picture|bid_list|busyodasTabContent|hd_lite|trade_commission_info|limit|10TP|open|window|111|alliance_rank|106|tuto_p_ranking|ranking|123|attack_rank|weeklyranking_tables|weekly_ranking|166|after|img_rate_taihoh_no|img_rate_syourei_no|img_rate_silver_ex|w760|04|20111003|icon_header_cp|icon_header_tp|icon_header_bp|ico_fame|ico_grain|ico_ingot|ico_stone|ico_wood|in|50000|style|40000|25000|250px|180|122px|160|NPC|2px|padding|16px|15px|140px|1200|BP50|203|questName|thread_del||personal_topic_view|anchor|status|personal_topic_add|group_id_2|group_id_1|public_type||love|242|new_name|tuto_y|tuto_x|land|u_domestic|tuto_defense_spear|tuto_attack|ptop|count|301|unit_id|234|233|domestic|inbox|statMenu|set|btn_change_flg|h2|unread|notice|child|selected_village_|village|wrapper|selected_village|undefined|select_facility|whiteWrapper|target_card|alt|hd_complete_tutorial|indexOf|substr|build|3600|show|buy_btn|overflow|bid_btn|card_id|sz|allcard_delete|white|background|3px|hidden|del_card_id|BusyodasRetry|rarerity|query_field||cost|status_int|Boolean|tables|red|LV|commonTables|1007|1009|1014|3008|alliance_log|No|empty|f236fe|container|_|BRO3MISC_|hostname|icon_go|noConflict|form|chk|delete|String|while'.split('|'),0,{}))