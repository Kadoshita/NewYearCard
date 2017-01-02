var daysText=document.getElementById('days-text');
var hourText=document.getElementById('hour-text');
var minText=document.getElementById('min-text');
var secText=document.getElementById('sec-text');
var millsecText=document.getElementById('millsec-text');

var message='happy new year!';
var message2='How is your progressing?';
var messageElm=document.getElementById('message');

var isAnime=false;
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

setInterval(function () {
	var date=new Date();
	var proconDate=new Date(2017,9,7,0,0,0);
	var day,hour,min,sec;

	var milliSec=proconDate.getTime()-date.getTime();

	day=~~(milliSec/(1000*60*60*24));
	milliSec-=day*1000*60*60*24;
	if(day<10){
		day='00'+day;
	}else if (day<100) {
		day='0'+day;
	}

	hour=~~(milliSec/(1000*60*60));
	milliSec-=hour*1000*60*60;
	if(hour<10){
		hour='0'+hour;
	}

	min=~~(milliSec/(1000*60));
	milliSec-=min*1000*60;
	if(min<10){
		min='0'+min;
	}

	sec=~~(milliSec/1000);
	milliSec-=sec*1000;
	if(sec<10){
		sec='0'+sec;
	}
	milliSec=~~(milliSec/100);

	if (!isAnime) {
		animeNumber(daysText,day);
		animeNumber(hourText,hour);
		animeNumber(minText,min);
		animeNumber(secText,sec);
		isAnime=true;
	} else {
		appendNumber(daysText,day);
		appendNumber(hourText,hour);
		appendNumber(minText,min);
		appendNumber(secText,sec);
		appendNumber(millsecText,milliSec);
	}
},100);

function animeNumber (element,count) {
	var i=0;
	var interval=10;
	if(count>100){
		interval=1;
		i=count-100;
	}
	var timer=setInterval(function () {
		element.innerHTML=i;
		if(i>=count){
			clearInterval(timer);
		}
		i++;
	},interval);
}

function appendNumber (element,number) {
	element.innerHTML=number;
}