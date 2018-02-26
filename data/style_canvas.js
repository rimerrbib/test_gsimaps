{
options:
{
  attribution: '鉄道中心線',minZoom: 15,maxNativeZoom: 16, maxZoom: 18,styletype:"canvas"
},
geojsonOptions:
{
   style: function (feature) {
	if(feature.properties['type']=="普通鉄道（ＪＲ）"){
	     if(feature.properties['snglDbl']=="駅部分"){
	        return {color:"#ff0",weight:14,opacity:0.5,lineCap:"butt"};
	      }else{
	        return {color:"#0f0",weight:7,opacity:0.5,lineCap:"butt"};
	      }
	}else if(feature.properties['type']=="普通鉄道（ＪＲ以外）"){
	     if(feature.properties['snglDbl']=="駅部分"){
	        return {color:"#ff4242",weight:14,opacity:0.5,lineCap:"butt"};
	      }else{
	        return {color:"#ffaf3f",weight:7,opacity:0.5,lineCap:"butt"};
	      }
	}
   },
   onEachFeature: function (feature, layer) {
   
var lineproperties = {
"class":"クラス名",
"rID":"レコード ID",
"lfSpanFr":"整備データ登録日",
"lfSpanTo":"整備データ削除日",
"tmpFlg":"暫定フラグ",
"orgGILvl":"出典地理情報レベル",
"ftCode":"地物種別コード",
"admCode":"行政コード",
"devDate":"整備完了日",
"type":"種別",
"snglDbl":"単複",
"railState":"鉄道状態",
"lvOrder":"階層順",
"staCode":"駅コード",
"rtCode":"路線コード"
};
var s = '<div class="popup">';
for(var k in feature.properties) {
 var v = feature.properties[k];
 if(v !== ""){s += lineproperties[k] + ': ' + v + '<br>';}
}
s += '</div>';
layer.bindPopup(s);

   }
}
}