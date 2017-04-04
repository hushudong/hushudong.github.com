//var a=10;
//for (var i=0;i<a;i++) {
//	for (var j=0;j<i;j++) {
//		document.write("<span style='width:10px;'> </span>");
//	}
//	for (var k=0;k<a-j;k++) {
//		document.write("<span style='width:20px;'>*</span>");
//	}
//	document.write("<br />");
//}
var a=10;
for (var i=1;i<=a;i++){
	for(var j=1;j<i;j++){
		document.write("<span style='width:10px'> </span>");
	}for(var k=1;k<=a-j;k++){
		document.write("<span style='width:10px'>*</span>")
	}
	document.write("<br/>");
}
