var id ="disabled";

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
toggle();
$(document).bind('keydown', 'ctrl+q', toggle);

// $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>')

function rc4(key, str) {
   if (str.startsWith("%")) {
	return CryptoJS.AES.decrypt(str.substring(1), key).toString(CryptoJS.enc.Utf8);
   }
   else {
   	return "%" + CryptoJS.AES.encrypt(str, key);
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
	alert(e);
 copyToClipboard(e);
}
loadJS("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js", secret)	

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


