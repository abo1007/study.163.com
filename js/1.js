/*----Javascript Document----*/

/*--实现图片切换与背景颜色切换的方法---*/
var timer = null;
function timeback(num){
	timer = window.setTimeout(function(){
		backg(num);
	},500);
}
function timebackstop(){
	clearTimeout(timer);
}
function backg(bnum){
	//document.getElementById('dcen-banner1').style.background="url(img/banner1.jpg) no-repeat";
	var sum = bnum;
	var colorclass=["#945cf1","#e96946","#614bd2","#1e3350","#488f3f","#edd6c4","#3d6c86"];
	var backgname = "url(img/banner"+sum+".jpg) no-repeat";
	document.getElementById('dtop-banner-a1').style.background=backgname;
	document.getElementById('dtop-banner1').style.background=colorclass[sum-1];
}
/*--实现顶格搜索栏只清空一次value的方法--*/
var clean = 1;
function cleant(){
	if(clean==1){
		document.getElementById('text-top1').value="";
		clean++;
	}	
}



// function cleant(){
// 	var textword = document.getElementById('text-top1').value;
// 	if(textword=="热门搜索"){
// 		document.getElementById('text-top1').value="";
// 	}
// }
