parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"B9kg":[function(require,module,exports) {
!function(e){e.fn.truncate=function(t){t=e.extend({length:100,minTrail:10,moreText:"",lessText:"",ellipsisText:""},t);return this.each(function(){obj=e(this);var n=obj.html();if(n.length>t.length+t.minTrail&&-1!=(s=n.indexOf(" ",t.length))){var s=n.indexOf(" ",t.length),i=n.substring(0,s),l=n.substring(s,n.length-1);obj.html(i+'<span class="truncate_ellipsis">'+t.ellipsisText+'</span><span  class="truncate_more">'+l+"</span>"),obj.find(".truncate_more").css("display","none"),obj.append('<div class="clearboth"><a href="#" class="truncate_more_link">'+t.moreText+"</a></div>");var r=e(".truncate_more_link",obj),a=e(".truncate_more",obj),o=e(".truncate_ellipsis",obj);r.click(function(){return r.text()==t.moreText?(a.show("normal"),r.text(t.lessText),o.css("display","none")):(a.hide("normal"),r.text(t.moreText),o.css("display","inline")),!1})}})}}(jQuery),$().ready(function(){$(".story").truncate({length:0,minTrail:10,moreText:"Read more",lessText:"Less",ellipsisText:""})});
},{}]},{},["B9kg"], null)
//# sourceMappingURL=/IvanProd-Oh_My_Dunats/readmore.7678b70a.js.map