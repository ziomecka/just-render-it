!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValidEmitter=void 0;t.isValidEmitter=function(e,t,n){return t in e&&n in e&&"function"==typeof e[t]&&"function"==typeof e[n]}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.buildCreateComponent=r.buildCreateComponent},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},u=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),c=n(12);t.buildCreateComponent=function(e){var t=void 0===e?{render:function(){return""}}:e,n=t.render,s=t.inject,l=(void 0===s?{}:s).classNames,f=void 0===l?{}:l,d=t.options,p=void 0===d?[]:d;return o(void 0,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e={createComponent:function(e){var t=e.componentId,o=e.className,i=void 0===o?"":o,a=e.style,s=e.flex,l=u(e,["componentId","className","style","flex"]),d=t&&f[t]?f[t]:"";return n(r(r({style:c.buildStyle(a,s)},l),{className:d+" "+i}))}},[4,a.buildComponentHelpers(p)];case 1:return[2,(e.helpers=t.sent(),e)]}}))}))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(5);t.buildComponentHelpers=function(e){return r(void 0,void 0,void 0,(function(){var t,n,r;return o(this,(function(o){switch(o.label){case 0:t={},n=0,o.label=1;case 1:return n<e.length?[4,i.getCreateComponentHelper(e[n])]:[3,4];case 2:r=o.sent(),t[e[n]]=r.default,o.label=3;case 3:return n++,[3,1];case 4:return[2,t]}}))}))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=new Map([["controlBodyScroll",Promise.resolve().then((function(){return n(6)}))],["modifyBodyClassList",Promise.resolve().then((function(){return n(7)}))],["windowEventsPublisher",Promise.resolve().then((function(){return n(8)}))]]);t.getCreateComponentHelper=function(e){return r(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,i.get(e)];case 1:return[2,t.sent()]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={turnOnBodyScrolling:function(){document.body.style.overflowY="visible"},turnOffBodyScrolling:function(){document.body.style.overflowY="hidden"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={addBodyClass:function(e){document.body.classList.add(e)},removeBodyClass:function(e){document.body.classList.remove(e)}}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(9);t.publisher=new r.Publisher(e.window||window,"addEventListener","removeEventListener"),t.default=t.publisher}).call(this,n(1))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Publisher",{enumerable:!0,get:function(){return r.Publisher}}),Object.defineProperty(t,"EmitterInstance",{enumerable:!0,get:function(){return o.EmitterInstance}}),Object.defineProperty(t,"EventCallback",{enumerable:!0,get:function(){return o.EventCallback}}),Object.defineProperty(t,"PublisherProps",{enumerable:!0,get:function(){return o.PublisherProps}}),Object.defineProperty(t,"UnsubscribeFunction",{enumerable:!0,get:function(){return o.UnsubscribeFunction}});var r=n(10),o=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Publisher=void 0;var r=n(0),o=n(11);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"eventData",void 0),u(this,"addEventListener",void 0),u(this,"removeEventListener",void 0),u(this,"subscribe",(function(e,n,r){var i=new o.Subscriber(n,r),u=t.getEventData(e);return u||(u=t.eventData.set(e,[t.buildInformSubscribers(e),[]]).get(e),t.observeEvent(e,u)),u[1].push(i),t.unsubscribe(e,i)})),u(this,"unsubscribeAll",(function(){Array.from(t.eventData.keys()).forEach((function(e){t.unobserveEvent(e)}))})),u(this,"eventSubscribersCount",(function(e){return(t.getSubscribers(e)||[]).length})),u(this,"subscribersCount",(function(){return Array.from(t.eventData.values()).reduce((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return e+=t[1].length}),0)})),u(this,"buildInformSubscribers",(function(e){return function(n){(t.getSubscribers(e)||[]).forEach((function(e){return e.eventCallback(n)}))}})),u(this,"unsubscribe",(function(e,n){return function(){var r=(t.getEventData(e)||[])[1];r&&(r.splice(r.findIndex((function(e){return e===n})),1),r.length||t.unobserveEvent(e))}})),u(this,"observeEvent",(function(e,n){var r=n?n[0]:t.getEventCallback(e);r&&t.addEventListener(e,r)})),u(this,"unobserveEvent",(function(e){t.removeEventListener(e,t.getEventCallback(e)),t.eventData.delete(e)}));for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var c=i[0],s=i[1],l=i[2];if(!(0,r.isValidEmitter)(c,s,l))throw new Error("Publisher received incorrect arguments");this.eventData=new Map([]),this.addEventListener=c[s].bind(c),this.removeEventListener=c[l].bind(c)}var t,n,a;return t=e,(n=[{key:"getEventData",value:function(e){return this.eventData.get(e)}},{key:"getEventCallback",value:function(e){return(this.getEventData(e)||[])[0]}},{key:"getSubscribers",value:function(e){return(this.getEventData(e)||[])[1]}}])&&i(t.prototype,n),a&&i(t,a),e}();t.Publisher=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Subscriber=void 0;t.Subscriber=function e(t,n){var r,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=void 0,(o="eventCallback")in(r=this)?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this.eventCallback=t.bind(n)}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildStyle=function(e,t){return t?r(r(r({},e),{display:"flex"}),t):e}},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20);t.buildCreateComponent=r.buildCreateComponent},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21);t.buildCreateComponent=r.buildCreateComponent},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),u=n(22).default;t.buildCreateComponent=function(e){var t=void 0===e?{}:e,n=t.classNames,a=void 0===n?{}:n,c=t.options,s=void 0===c?[]:c;return r(void 0,void 0,void 0,(function(){return o(this,(function(e){return[2,i.buildCreateComponent({render:u,inject:{classNames:a},options:s})]}))}))}},function(e,t){!function(e,t){for(var n in t)e[n]=t[n]}(t,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.buildRender=r.buildRender},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.buildRender=r.buildRender},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(5);t.buildRender=function(e){if(e){var t=o.default(e),n=r.default(e,t);return function(e){return void 0===e&&(e={}),e?n(e).children:null}}return null}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(4);t.default=function(e,t){var n=function(u,a){void 0===u&&(u={});var c=u.children,s=u.HTMLTag,l=u.value,f=o(u,["children","HTMLTag","value"]),d=a||e.createDocumentFragment(),p=c?c.filter((function(e){return!!e})):[];if(!p.length)return function(n){return s?n.append(t(r({HTMLTag:s,value:l},f))):l?n.append(e.createTextNode(l)):f[0]&&n.append(f[0]),n}(d);var b=s?t(r({HTMLTag:s,value:l},f)):null,v=e.createDocumentFragment(),h=b||v;return p.forEach((function(t){"string"==typeof t?i.isSvg(t)?b?b.innerHTML=t:console.warn("SVG element can be child only of HTMLElement"):h.append(e.createTextNode(t)):n(t,v)})),b?(b.append(v),d.append(b)):d.append(v),d};return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSvg=function(e){return/^<svg[\w\s:.;&/"-=<>\\]*<\/svg>$/.test(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return void 0===t&&(t=!0),function(n){var r=void 0===n?{style:{},attributes:{},eventHandlers:{}}:n,o=r.HTMLTag,i=r.value,u=r.className,a=void 0===u?"":u,c=r.eventHandlers,s=void 0===c?{}:c,l=r.innerHTML,f=r.style,d=void 0===f?{}:f,p=r.attributes,b=void 0===p?{}:p,v=e.createElement(o);return i&&v.append(e.createTextNode(i)),a.split(" ").forEach((function(e){return e&&v.classList.add(e)})),l&&(v.innerHTML=l),Object.keys(d).forEach((function(e){v.style[e]=d[e]})),Object.keys(b).forEach((function(e){v.setAttribute(e,b[e])})),Object.keys(s).forEach((function(e){var n=s[e],r=Array.isArray(n)?n:[],o=r[0],i=void 0===o?n:o,u=r[1],a=void 0===u?t:u;v.addEventListener(e.slice(2).toLowerCase(),i,a)})),v}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(8),i=r.buildRender(new o.SSRDocument);t.default=function(e){return void 0===e&&(e={}),i(e).map((function(e){return e.toString()})).join("")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(10),i=function(){function e(){}return e.prototype.createElement=function(e,t){return new r.SSRElement(e,t)},e.prototype.createDocumentFragment=function(){return new o.SSRFragment},e.prototype.createTextNode=function(e){return void 0===e&&(e=""),e},e}();t.SSRDocument=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.list=[]}return Object.defineProperty(e.prototype,"className",{get:function(){return this.list.join(" ")},enumerable:!0,configurable:!0}),e.prototype.add=function(e){this.list.push(e)},e}(),o=function(){function e(e,t){var n=(void 0===t?{}:t).selfClosing;this.tagName=e,this.tagName=e,this.selfClosing=n,this._children=[],this.classList=new r,this.tagName=e,this._attributes={},this.style={}}return Object.defineProperty(e.prototype,"children",{get:function(){return this.renderChildren()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerText",{get:function(){return this.renderChildren()},set:function(e){"string"==typeof e&&this._children.push(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHTML",{get:function(){return this.renderChildren()},set:function(e){"string"==typeof e&&this._children.push(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"className",{get:function(){return this.classList.className},enumerable:!0,configurable:!0}),e.prototype.append=function(e){e&&this._children.push(e.toString())},e.prototype.toString=function(){var e=this.tags,t=e[0],n=e[1];return t+this.renderChildren()+n},e.prototype.renderChildren=function(){return this._children.map((function(e){return e.toString()})).join("")},Object.defineProperty(e.prototype,"attributes",{get:function(){var e=this,t=JSON.stringify(this.style);return t=t.substring(1,t.length-1).replace(/["']/gi,"").replace(/[,]/gi,"; ").replace(/\s?(([a-z])([A-Z]))(\w*:)/g,(function(e,t,n,r,o){return n+"-"+r.toLowerCase()+o})),Object.keys(this._attributes).reduce((function(t,n){return t+(n?" "+n+'="'+e._attributes[n]+'"':" "+n)}),"").concat(this.className?' class="'+this.className+'"':"").concat(t?' style="'+t+'"':"")},enumerable:!0,configurable:!0}),e.prototype.setAttribute=function(e,t){this._attributes[e]=t},e.prototype.addEventListener=function(){return null},Object.defineProperty(e.prototype,"tags",{get:function(){var e=this.tagName,t=!this.selfClosing;return e?["<"+e+this.attributes+(t?"":"/")+">","<"+(t?"/":"")+e+">"]:["",""]},enumerable:!0,configurable:!0}),e}();t.SSRElement=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.children=[]}return e.prototype.append=function(e){e&&this.children.push(e.toString())},e.prototype.toString=function(){return this.children.map((function(e){return e.toString()})).join("")},e}();t.SSRFragment=r}]))}]));