function setCookie(name,val,iday){
	var date = new Date();
	date.setDate(date.getDate()+iday);
	document.cookie = " "+name+"="+"val"+";expires="+date;	
}
function getCookie(name){
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i<arr.length; i++){
		var arr1 = arr[i].split('=');
		var  name1 = arr1[0];
		var value = arr1[1];
		if(name = name){
			return value;
		}
	}
	return;
}
function removeCookie(naem){
    setCookie(name, "", -1);
}