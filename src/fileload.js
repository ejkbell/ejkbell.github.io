function cdnObtain() {
	if (window.XMLHttpRequest) {
		var requestCDN = new XMLHttpRequest();
	} 
	else {
		var requestCDN = new ActiveXObject("Microsoft.XMLHTTP");
	}
	requestCDN.open("GET", "src/jquery_cdn.txt", true);
	requestCDN.send("src/jquery_cdn.txt");
	var tempCDN = requestCDN.responseText;
	metajQuery=document.createElement('script');
	metajQuery.src=tempCDN;
	document.getElementsByTagName('head')[0].appendChild(metajQuery);
}
window.onload=cdnObtain();