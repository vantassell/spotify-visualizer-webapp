/*! For license information please see login.bundle.js.LICENSE.txt */
(()=>{"use strict";function e(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)e[n]=t[n]}return e}var o=function o(t,n){function r(o,r,s){if("undefined"!=typeof document){"number"==typeof(s=e({},n,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in s)s[c]&&(i+="; "+c,!0!==s[c]&&(i+="="+s[c].split(";")[0]));return document.cookie=o+"="+t.write(r,o)+i}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var o=document.cookie?document.cookie.split("; "):[],n={},r=0;r<o.length;r++){var s=o[r].split("="),i=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(n[c]=t.read(i,c),e===c)break}catch(e){}}return e?n[e]:n}},remove:function(o,t){r(o,"",e({},t,{expires:-1}))},withAttributes:function(t){return o(this.converter,e({},this.attributes,t))},withConverter:function(t){return o(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});console.log("hello from login.js"),function(){const e=window.location.search,t=new URLSearchParams(e);console.log("starting queryParamsIntoCookies");const n=t.get("accessToken"),r=t.get("refreshToken"),s=t.get("expiresAt"),i=t.get("email"),c=t.get("displayName");n&&(console.log("trying to set accessToken cookie"),o.set("accessToken",n)),r&&(console.log("trying to set refreshToken cookie"),o.set("refreshToken",r)),s&&(console.log("trying to set expiresAt cookie"),o.set("expiresAt",s)),i&&(o.set("email",i),console.log("trying to set email cookie")),c&&(console.log("trying to set displayName cookie"),o.set("displayName",c)),console.log(`accessToken: ${o.get("accessToken")}`),console.log(`refreshToken: ${o.get("refreshToken")}`),console.log(`expiresAt: ${o.get("expiresAt")}`),console.log(`email: ${o.get("email")}`),console.log(`displayName: ${o.get("displayName")}`),console.log("exiting queryParamsIntoCookies")}();const t=o.get("accessToken");if(o.get("displayName"),t){const e=window.location.toString().split("/login")[0];console.log(`baseURL: ${e}`);const o=e+"/players/basic";console.log(`redirecting to: ${o}`),window.location.replace(o)}else{const e=baseURL+"/";console.log(`redirecting to: ${e}`),window.location.replace(e)}})();