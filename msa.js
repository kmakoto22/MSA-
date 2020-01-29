function main() {
	if (document.domain != "stmary.myschoolapp.com") {
		(function() {    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');    link.type = 'image/x-icon';    link.rel = 'shortcut icon';    link.href = 'https://bbk12e1-cdn.myschoolcdn.com/ftpimages/896/logo/favicon.ico';    document.title='Student: My Day';    console.log(document.title);    document.getElementsByTagName('head')[0].appendChild(link);})();	
	}

	var id ="disabled";
	window.onerror = function(message, url, lineNumber) {  
  		console.log(message + "   " + lineNumber);
  		return true;
	};  
}

// Load libraries
!function(l){function t(t){if("string"==typeof t.data&&(t.data={keys:t.data}),t.data&&t.data.keys&&"string"==typeof t.data.keys){var o=t.handler,p=t.data.keys.toLowerCase().split(" ");t.handler=function(a){if(this===a.target||!(l.hotkeys.options.filterInputAcceptingElements&&l.hotkeys.textInputTypes.test(a.target.nodeName)||l.hotkeys.options.filterContentEditable&&l(a.target).attr("contenteditable")||l.hotkeys.options.filterTextInputs&&-1<l.inArray(a.target.type,l.hotkeys.textAcceptingInputTypes))){var s="keypress"!==a.type&&l.hotkeys.specialKeys[a.which],t=String.fromCharCode(a.which).toLowerCase(),n="",e={};l.each(["alt","ctrl","shift"],function(t,e){a[e+"Key"]&&s!==e&&(n+=e+"+")}),a.metaKey&&!a.ctrlKey&&"meta"!==s&&(n+="meta+"),a.metaKey&&"meta"!==s&&-1<n.indexOf("alt+ctrl+shift+")&&(n=n.replace("alt+ctrl+shift+","hyper+")),s?e[n+s]=!0:(e[n+t]=!0,e[n+l.hotkeys.shiftNums[t]]=!0,"shift+"===n&&(e[l.hotkeys.shiftNums[t]]=!0));for(var i=0,r=p.length;i<r;i++)if(e[p[i]])return o.apply(this,arguments)}}}}l.hotkeys={version:"0.2.0",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},l.each(["keydown","keyup","keypress"],function(){l.event.special[this]={add:t}})}(jQuery||this.jQuery||window.jQuery);

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

function createVars() {
	$("body").append('<img src="https://www.fbi.gov/wanted/cyber/wang-dong/@@images/image/preview" width="100px" height="100px" class="x">')
	$("body").append('<img src="https://www.fbi.gov/wanted/cyber/wang-dong/@@images/image/preview" width="100px" height="100px" class="z">')
	$("head").append("<style>.z { z-index: 9999; display: none; } .x { z-index: 9999; display: none; }</style>")
	$("li.last").has("span:contains('Sign Out')").find("li.last").append('<a onclick=”help();” data-taskid="-2" class="pri-75-bgc-hover black-fgc white-fgc-hover sky-nav" data-bypass="1"><span class="desc"><span onclick="help();" class=" title ">MSA++</span></span></a>');

	window.DI = 0; window.DIL = 0; window.BI = 0; window.BIL = 0;
	window.dancing = false;
	window.dance = 0;
	window.dance2 = 0;
	window.color = "red";
	window.color2 = "red";
	window.R = 0;
	window.S = 0;
	window.blackmode = false;
	window.spamming = false;
	window.spamInterval = false;
	
	
	window.codes = {
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
}

function A() {
    x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; 
    var i;
    var DIS;
    for(i=0; i-window.DIL; i++){
        DIS=window.DI[ i ].style;
	if (window.color == "red") {
	DIS.background = "yellow";
	window.color = "yellow";
	}
	else {
	DIS.background = "red";
	window.color = "red";
	}
        DIS.position='absolute'; 
        DIS.left=(Math.sin(window.R*x1+i*x2+x3)*x4+x5)+"px"; 
        DIS.top=(Math.cos(window.R*y1+i*y2+y3)*y4+y5)+"px"
    }
    window.R++
}
function B() {
    x1=.5; y1=.1; x2=.15; y2=.3; x3=1; y3=.15; x4=300; y4=100; x5=300; y5=50; 
    var i;
    var DIS;
    for(i=0; i-window.BIL; i++){
        DIS=window.BI[ i ].style;
	if (window.color2 == "red") {
	DIS.background = "yellow";
	window.color2 = "yellow";
	}
	else {
	DIS.background = "red";
	window.color2 = "red";
	}
        DIS.position='absolute'; 
        DIS.left=(Math.sin(window.S*x1+i*x2+x3)*x4+x5)+"px"; 
        DIS.top=(Math.cos(window.S*y1+i*y2+y3)*y4+y5)+"px"
    }
    window.S++
}

function imgDance() {
	if (!dancing) {
		window.DI=document.getElementsByClassName("x"); window.DIL=window.DI.length;
		window.BI=document.getElementsByClassName("z"); window.BIL=window.BI.length;
		window.DI[0].style.display = "block";
		window.BI[0].style.display = "block";
		window.dance = setInterval(A, 100);
		window.dance2 = setInterval(B, 100);
		window.dancing = true;
	}
	else {
		clearInterval(window.dance);
		clearInterval(window.dance2);
		window.DI[0].style.display = "none";
		window.BI[0].style.display = "none";
		window.dancing = false;
	}
}


function help() {
	alert(`
		MySchoolApp++ Menu
		\n
		\n
		CTRL + SHIFT + 1 == Toggle Darkmode\n
		CTRL + SHIFT + 2 == Encrypted Communication\n
		CTRL + SHIFT + 3 == Seizure Mode\n
		CTRL + SHIFT + 4 == Wang Dong\n
		CTRL + SHIFT + 5 == Student List\n
		CTRL + SHIFT + 6 == Injectable Incognito Box\n
	`);	
}


function hideTxt() {
	openWin("<html><head></head><body><textarea rows=\"30\" cols=\"50\" id=\"w\">Paste in text to be hidden</textarea><br><br><button onclick=\"x();\">Get Code</button><script>function x() { alert(document.getElementById(\"w\").value); }</script></body></html>");
	var txt = prompt("Paste the output from the popup window!");
	var code = "void function(){function e(t){(83==t.keyCode||83==t.which)%26%26(o-=1,$(\"%23omegalol\").scrollTop(o)),(68==t.keyCode||68==t.which)%26%26(o+=1,$(\"%23omegalol\").scrollTop(o)),(65==t.keyCode||65==t.which)%26%26(i%3F($(\"%23omegalol\").css({display:\"block\"}),i=!1):($(\"%23omegalol\").css({display:\"none\"}),i=!0)),(187==t.keyCode||187==t.which)%26%26192==a%26%26($(document).unbind(\"keydown\",e),$(document).keydown(n),$(\"%23text3306\").css({display:\"block\"}),$(\"%23text3306\").focus()),a=t.keyCode}function n(t){if(187==t.keyCode%26%26192==a%26%26(s=$(\"%23text3306\").val().replace(\"`\",\"\").replace(\"=\",\"\"),$(\"%23text3306\").val(\"\"),$(\"%23text3306\").blur(),$(\"body\").focus(),console.log(s),r=!0),r%26%2665==t.keyCode){$(document).unbind(\"keydown\",n),$(document).keydown(e),$(\"%23text3306\").css({display:\"block\"}),$(\"%23omegalol\").css({display:\"block\"}),$(\"%23omegalol\").scrollTop(0),console.log(s);try{o=$(\"span:contains(\'\"+s+\"\'):eq(0)\").position().top+$(\"span:contains(\'\"+s+\"\'):eq(0)\").height()-$(\"%23omegalol\").height(),console.log(o)}catch(t){console.log(t.message)}$(\"%23omegalol\").scrollTo($(\"span:contains(\'\"+s+\"\'):eq(0)\")),s=\"\",r=!1}a=t.keyCode};var t = \""+txt+"\";$(\"script\").remove(),$(\"body\").append($(\'<div style=\"position: absolute; left: 0; top: 150px; \"><div id=\"omegalol\" style=\"user-select: text; overflow: auto; width:200px; height: 50px; background-color: %23eeeeef; position:relative; opacity: 0.1; cursor: none; display: block;\">\'+t+\"<\/div><\/div>\")),jQuery.fn.scrollTo=function(e){var n=$(e);this.scrollTop(n.position().top+n.height()-this.height())};var a,s,o=0,i=!1,r=!1;$(\"body\").append($(\'<input type=\"text\" pattern=\"[a-zA-Z0-9 ]+\" id=\"text3306\" style=\"width:200px; height: 50px; background-color: %23fff; opacity: 0; position:absolute; left: 0; top: 500px; display: block;\">\')),$(document).keydown(e)}();"	
   	
	if (window.blackmode) {
		toggle();	
	}
	
// 	eval(code);
	
	alert("Compiled! Controls: \n\nS - Scroll Up. \nD - Scroll Down. \nA - Hide/Show. \n~ and +: Click once, type a search term, click again, then click A");
// 	prompt("Copy this code to a new bookmarklet.", code);
	
 }


function openWin(html) {
	newWin = window.open("about:blank", "hello", "width=500,height=700");
	newWin.document.write(html);
}

function getUsers() {
	$.ajax({ url: 'https://stmary.myschoolapp.com/api/message/getrecipients?format=json&_=1569251083226' }).then(function (d) {

		var newbod = "";
		for (var i = 0; i < d.length; i++) {
			newbod += "<p>" + d[i]['name'] + " | " + d[i]['userId'] + " <a href=\"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/896/user/" + d[i]['thumbFilename'].replace("thumb_user_", "large_user_") + "\">Picture</a></p>"
		}
		openWin(newbod);
	})
}

function toggle() {
   	if (!window.blackmode) {
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
       		window.blackmode = true;
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
       		window.blackmode = false;
   	}
}

function toggleSpam() {
   	if (!window.spamming) {
   		window.spamInterval = setInterval(function () {
			toggle();
		}, 25)
		window.spamming = true;
   	}
  	else {
		clearInterval(window.spamInterval);
		window.spamming = false;
   	}
}

toggle();

String.prototype.replaceAll = function (find, replace) {
   	var str = this;
    	return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

function radio_en(words) {
	var chars = "";
	for (var i = 0; i < words.length; i++) {
	    	var char = words.charAt(i);
	    	if (char in window.codes) {
	      		chars += window.codes[char] + " ";
	    	}
	    	else {
	      		chars += char + " ";
	    	}
	}
	return chars;
}
function radio_de(words) {
	words = words.replace(/ /g,'')
	for (key in window.codes) {
	    	var code = window.codes[key];
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
}

function binders() {
	$(document).bind('keydown', 'ctrl+shift+1', toggle);
	$(document).bind('keydown', 'ctrl+shift+2', secret);
	$(document).bind('keydown', 'ctrl+shift+3', toggleSpam);
	$(document).bind('keydown', 'ctrl+shift+4', imgDance);
	$(document).bind('keydown', 'ctrl+shift+5', getUsers);
	$(document).bind('keydown', 'ctrl+shift+6', hideTxt);

	$("#site-logo").click(help);
}

main();
createVars();
binders();

