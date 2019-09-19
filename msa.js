
var id ="disabled";
window.onerror = function(message, url, lineNumber) {  
  console.log(message + "   " + lineNumber);
  return true;
};  
if (!document.querySelector('#msapp')) {

var scripts = [];

var loadJS = function(url, loaded) {
  if (!scripts.includes(url)) {
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.src = url;
    scripts.push(url);
    if (window.navigator.userAgent.indexOf('MSIE') > -1) {
        scr.onload = scr.onreadystatechange = function() {
            if (this.readyState === "loaded" || this.readyState === "complete") {
                if (loaded) {
                    loaded();
                }
            }
            scr.onload = scr.onreadystatechange = null;
        };
    } else {
        scr.onload = loaded;
    }
    document.getElementsByTagName('head')[0].appendChild(scr);
  }
  else {
    loaded();
  }
}
   loadJS("https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js", function() {

        loadJS("https://www.gstatic.com/firebasejs/6.6.0/firebase-auth.js", function() {

            loadJS("https://www.gstatic.com/firebasejs/6.6.0/firebase-database.js", function() {
   var firebaseConfig = {
                    apiKey: "AIzaSyCS_CTjeQzMeVxH4ihJOZMf42C9btkxh8U",
                    authDomain: "msapp-62775.firebaseapp.com",
                    databaseURL: "https://msapp-62775.firebaseio.com",
                    projectId: "msapp-62775",
                    storageBucket: "",
                    messagingSenderId: "967476199114",
                    appId: "1:967476199114:web:e29ad2a0bd38b91338be33"
                };
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);

                window.database = firebase.database();

             console.log("loaded fb");
});
});
});

}


!function(l){function t(t){if("string"==typeof t.data&&(t.data={keys:t.data}),t.data&&t.data.keys&&"string"==typeof t.data.keys){var o=t.handler,p=t.data.keys.toLowerCase().split(" ");t.handler=function(a){if(this===a.target||!(l.hotkeys.options.filterInputAcceptingElements&&l.hotkeys.textInputTypes.test(a.target.nodeName)||l.hotkeys.options.filterContentEditable&&l(a.target).attr("contenteditable")||l.hotkeys.options.filterTextInputs&&-1<l.inArray(a.target.type,l.hotkeys.textAcceptingInputTypes))){var s="keypress"!==a.type&&l.hotkeys.specialKeys[a.which],t=String.fromCharCode(a.which).toLowerCase(),n="",e={};l.each(["alt","ctrl","shift"],function(t,e){a[e+"Key"]&&s!==e&&(n+=e+"+")}),a.metaKey&&!a.ctrlKey&&"meta"!==s&&(n+="meta+"),a.metaKey&&"meta"!==s&&-1<n.indexOf("alt+ctrl+shift+")&&(n=n.replace("alt+ctrl+shift+","hyper+")),s?e[n+s]=!0:(e[n+t]=!0,e[n+l.hotkeys.shiftNums[t]]=!0,"shift+"===n&&(e[l.hotkeys.shiftNums[t]]=!0));for(var i=0,r=p.length;i<r;i++)if(e[p[i]])return o.apply(this,arguments)}}}}l.hotkeys={version:"0.2.0",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},l.each(["keydown","keyup","keypress"],function(){l.event.special[this]={add:t}})}(jQuery||this.jQuery||window.jQuery);


//image dance
$("body").append("<img src=\"data:image/jpeg;base64,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\" width=\"100px\" heigh\"100px\" class=\"x\">")
R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; 
var DI, DIL;

$("head").append("<style>.x { z-index: 9999; display: none; }</style>")

function A() {
    var i;
    var DIS;
// 	alert(1);
    for(i=0; i-DIL; i++){
// 	    alert(2);
        DIS=DI[ i ].style; 
        DIS.position='absolute'; 
        DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px"; 
        DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px"
    }
    R++
}

var dancing = false;
var dance;

function imgDance() {
	if (!dancing) {
// 		alert(0);
		DI=document.getElementsByClassName("x"); DIL=DI.length;
		DI[0].style.display = "block";
// 		alert(8);
		dance = setInterval(A, 100);
// 		alert(5);
		dancing = true;
	}
	else {
		clearInterval(dance);
		DI[0].style.display = "none";
		dancing = false;
	}
}

$(document).bind('keydown', 'alt+q', imgDance);


var blackmode = false;
function toggle() {
   if (!blackmode) {
       $("html, img, video").attr("style", "-webkit-filter:invert(1)hue-rotate(180deg);filter:invert(1)hue-rotate(180deg)");
       $("body").attr("style", "background:#000");
       $('#site-header-container')
       .removeClass("pri-100-bgc")
       .attr("style", "background-color: #fff !important;");
       $('#site-header')
       .removeClass("pri-100-bgc")
       .attr("style", "background-color: #fff !important;");
       $("#site-search-input")
       .parent().parent().parent().parent()
       .find("*")
       .attr("style", "color: black;");
       blackmode = true;
   }
   else {
       $("html, img, video").attr("style", "");
       $("body").attr("style", "");
       $('#site-header-container')
    .addClass("pri-100-bgc")
    .attr("style", "");
    $('#site-header')
    .addClass("pri-100-bgc")
    .attr("style", "");
    $("#site-search-input")
    .parent().parent().parent().parent()
    .find("*")
    .attr("style", "");
       blackmode = false;
   }
}
var spamming = false;
var spamInterval;
function toggleSpam() {
   if (!spamming) {
   	spamInterval = setInterval(function () {
		toggle();
	}, 25)
	spamming = true;
   }
   else {
	clearInterval(spamInterval);
	spamming = false;
   }
}
if (document.domain != "stmary.myschoolapp.com") {
(function() {     var link = document.querySelector("link[rel*='icon']") || document.createElement('link');     link.type = 'image/x-icon';     link.rel = 'shortcut icon';     link.href = 'https://bbk12e1-cdn.myschoolcdn.com/ftpimages/896/logo/favicon.ico';     document.title='Student: (1) My Day';     console.log(document.title);     document.getElementsByTagName('head')[0].appendChild(link); })();	
}
else {
toggle();
$(document).bind('keydown', 'ctrl+q', toggle);
$(document).bind('keydown', 'ctrl+2', toggleSpam);
}

// alert(3);
// $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>')
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

var codes = {
      "=": "equal",
      "+": "plus",
      "/": "slash",
      "0": "zero",
	"1": "uno",
	"2": "two",
	"3": "tres",
	"4": "four",
	"5": "cinco",
	"6": "six",
	"7": "seven",
	"8": "ocho",
	"9": "nine",
      "a": "alfa",
      "b": "bravo",
      "c": "charlie",
      "d": "delta",
      "e": "echo",
      "f": "froxtrot",
      "g": "golf",
      "h": "hotel",
      "i": "india",
      "j": "julliet",
      "k": "kilo",
      "l": "lima",
      "m": "mike",
      "n": "november",
      "o": "oscar",
      "p": "papa",
      "q": "quebec",
      "r": "romeo",
      "s": "sierra",
      "t": "tango",
      "u": "uniform",
      "v": "victor",
      "w": "whiskey",
      "x": "xray",
      "y": "yankee",
      "z": "zulu",
      "A": "Alfa",
      "B": "Bravo",
      "C": "Charlie",
      "D": "Delta",
      "E": "Echo",
      "F": "Froxtrot",
      "G": "Golf",
      "H": "Hotel",
      "I": "India",
      "J": "Julliet",
      "K": "Kilo",
      "L": "Lima",
      "M": "Mike",
      "N": "November",
      "O": "Oscar",
      "P": "Papa",
      "Q": "Quebec",
      "R": "Romeo",
      "S": "Sierra",
      "T": "Tango",
      "U": "Uniform",
      "V": "Victor",
      "W": "Whiskey",
      "X": "Xray",
      "Y": "Yankee",
      "Z": "Zulu"
}

function radio_en(words) {
	var chars = "";
	for (var i = 0; i < words.length; i++) {
	    var char = words.charAt(i);
	    if (char in codes) {
	      chars += codes[char] + " ";
	    }
	    else {
	      chars += char + " ";
	    }
	}
	return chars;
}
function radio_de(words) {
	words = words.replace(/ /g,'')
	for (key in codes) {
	    var code = codes[key];
	    // console.log(code + " -> " + key);
	    words = words.replaceAll(code, key);
	}
	return words;	
}

function rc4(key, str) {
   if (str.startsWith("NATO ")) {
	return CryptoJS.AES.decrypt(radio_de(str.replace("NATO ", "")), key).toString(CryptoJS.enc.Utf8);
   }
   else {
     var x = CryptoJS.AES.encrypt(str, key);
   	return "NATO " + radio_en(x.toString());
   }
}
function copyToClipboard(txt) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(txt).select();
    document.execCommand("copy");
    $temp.remove();
}
function secret() {
 var key = prompt("Enter the secret key"); 
 var str = prompt("Enter the text to encrypt/decrypt");
 var e = rc4(key, str);
 prompt("Copy", e);
 copyToClipboard(e);
}// alert(2);
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();

// alert(1);

// alert(CryptoJS);
$(document).bind('keydown', 'ctrl+1', secret);

$("#site-logo").click(secret);

function reloadAssignments() {
    $('.fakeassignments').remove();
    loadAssignments();
}

function loadAssignments() {
   
//                var firebaseConfig = {
//                    apiKey: "AIzaSyCS_CTjeQzMeVxH4ihJOZMf42C9btkxh8U",
//                    authDomain: "msapp-62775.firebaseapp.com",
//                    databaseURL: "https://msapp-62775.firebaseio.com",
//                    projectId: "msapp-62775",
//                    storageBucket: "",
//                    messagingSenderId: "967476199114",
//                    appId: "1:967476199114:web:e29ad2a0bd38b91338be33"
//                };
//                // Initialize Firebase
//                firebase.initializeApp(firebaseConfig);
//
//                var database = firebase.database();

                var jj = [];
                try {
                window.database.ref(id + "/assignments").once('value').then(function(snapshot) {
                    var j = snapshot.val().replace(/\\"/g, '"');
                    j = j.substring(0, j.length - 1);
                    j = j.substring(1, j.length);
                    jj = JSON.parse(j);

                    for (ji of jj) {
                        var myclass = ji['class'];
                        var mytype = ji['type'];
                        var mydetails = ji['details'];
                        var myassign = ji['assign'];
                        var mydue = ji['due'];
                        var aid = ji['aid'];

                        var tbody = $("#assignment-center-assignment-items");
                        var tr = `
                             <tr id="${aid}" class="fakeassignments">
                             <td data-heading="Class">${myclass}</td>
                             <td data-heading="Type">${mytype}</td>
                             <td data-heading="Details">
                             ${mydetails}
                             </td>
                             <td data-heading="Assign">${myassign}</td>
                             <td data-heading="Due">${mydue}</td>
                             <td data-heading="Status">
                             <div class="mt-3">
                             <div class="mb-10">
                             <a class="btn btn-sm btn-default" onclick="deleteAssignment('${aid}');">Remove</a> 
                             </div>
                             </div>
                             </td>
                             <td> </td>
                             </tr>
                        `;
                        tbody.prepend(tr);
                    }
                });
          
          }
          catch (err) {
          console.error(err);
                        window.database.ref(id).set({
                                 assignments: JSON.stringify(JSON.stringify([{}]))
                            });
          }
}

function deleteAssignment(aid) {
    console.log(1);
    $("#" + aid).remove();
    console.log(4);

//                var firebaseConfig = {
//                    apiKey: "AIzaSyCS_CTjeQzMeVxH4ihJOZMf42C9btkxh8U",
//                    authDomain: "msapp-62775.firebaseapp.com",
//                    databaseURL: "https://msapp-62775.firebaseio.com",
//                    projectId: "msapp-62775",
//                    storageBucket: "",
//                    messagingSenderId: "967476199114",
//                    appId: "1:967476199114:web:e29ad2a0bd38b91338be33"
//                };
//                // Initialize Firebase
//                firebase.initializeApp(firebaseConfig);
//
//                var database = firebase.database();

                var jj = [];
                
                window.database.ref(id + "/assignments").once('value').then(function(snapshot) {
                    var j = snapshot.val().replace(/\\"/g, '"');
                    j = j.substring(0, j.length - 1);
                    j = j.substring(1, j.length);
                    jj = JSON.parse(j);

                    for (ji of jj) {
                        if (ji['aid'] == aid) {
                            jj.splice(jj.indexOf(ji), 1);
                            window.database.ref(id).set({
                                 assignments: JSON.stringify(JSON.stringify(jj))
                            });

                        }
                    }
                });

}
function createAssignment(myclass, mytype, mydetails, myassign, mydue) {


//                var firebaseConfig = {
//                    apiKey: "AIzaSyCS_CTjeQzMeVxH4ihJOZMf42C9btkxh8U",
//                    authDomain: "msapp-62775.firebaseapp.com",
//                    databaseURL: "https://msapp-62775.firebaseio.com",
//                    projectId: "msapp-62775",
//                    storageBucket: "",
//                    messagingSenderId: "967476199114",
//                    appId: "1:967476199114:web:e29ad2a0bd38b91338be33"
//                };
//                // Initialize Firebase
//                firebase.initializeApp(firebaseConfig);
//
//                var database = firebase.database();

                var jj = [];
                
                window.database.ref(id + "/assignments").once('value').then(function(snapshot) {
                    var j = snapshot.val().replace(/\\"/g, '"');
                    j = j.substring(0, j.length - 1);
                    j = j.substring(1, j.length);
                    jj = JSON.parse(j);

var aid = Math.random().toString(36).substring(3);
                    jj.push({
                         'class': myclass,
                         'type': mytype, 
                         'details': mydetails,
                         'assign': myassign,
                         'due': mydue,
                         'aid': aid
                    });

                    window.database.ref(id).set({
                         assignments: JSON.stringify(JSON.stringify(jj))
                    });

                        var tbody = $("#assignment-center-assignment-items");
                        var tr = `
                             <tr id="${aid}" class="fakeassignments">
                             <td data-heading="Class">${myclass}</td>
                             <td data-heading="Type">${mytype}</td>
                             <td data-heading="Details">
                             ${mydetails}
                             </td>
                             <td data-heading="Assign">${myassign}</td>
                             <td data-heading="Due">${mydue}</td>
                             <td data-heading="Status">
                             <div class="mt-3">
                             <div class="mb-10">
                             <a class="btn btn-sm btn-default" onclick="deleteAssignment('${aid}');">Remove</a> 
                             </div>
                             </div>
                             </td>
                             <td> </td>
                             </tr>
                        `;
                        tbody.prepend(tr);
                });

}

setTimeout(function () {
if (document.querySelector('#msapp')) {
    if (document.location == "aaaaahttps://stmary.myschoolapaaaaaap.com/app/student#studentmyday/assignment-center") {
         var myclass = prompt("What class is this assignment from?");
         var mytype = prompt("What type of assignment is this? (Quiz, Exam, HW)");
         var mydetails = prompt("What are the details of this assignment? (pg23-34. Qs 14-16)");
         var today = new Date();
         var dd = String(today.getDate()).padStart(2, '0');
         var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
         var yyyy = today.getFullYear();
         var myassign = mm + "/" + dd + "/" + yyyy;
         var mydue = prompt("When is this assignment due?");
         console.log(window.database);
         createAssignment(myclass, mytype, mydetails, myassign, mydue, window.database);
    }
}
else {
    $('body').append("<p id=\"msapp\"></p>");
}
//"\"[{\"class\":\"test1\", \"type\": \"test2\", \"details\": \"test3\", \"assign\": \"test4\", \"due\": \"test5\"}]\""
}, 1000);
setInterval(function () {
    if (document.location == "https://stmary.myschoolapp.com/app/student#studentmyday/assignment-center") {
        if (!document.querySelector(".fakeassignments")) {
             //loadAssignments();
        }
    }
}, 1000);


