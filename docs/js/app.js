var message='happy new year!';
var message2='How is your progressing?';
var messageElm=document.getElementById('message');

var isProg=false;

setInterval(function(){
	if(!isProg){
		displayCharcter(messageElm,message2,message2.length);
		isProg=true;
	}
	else{
		displayCharcter(messageElm,message,message.length);
		isProg=false;
	}
},5000);

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