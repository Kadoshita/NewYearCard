var message='happy new year!';
var messageElm=document.getElementById('message');

setTimeout(displayCharcter, 2000,messageElm,message,message.length);

function displayCharcter (element,string,length) {
	var i=1;
	var timer=setInterval(function () {
		element.innerHTML=string.slice(0, i);
		if(i>=length){
			clearInterval(timer);
		}
		i++;
	},20);
}