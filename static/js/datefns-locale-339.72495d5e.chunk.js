(this["webpackJsonppwa-pos-terminal"]=this["webpackJsonppwa-pos-terminal"]||[]).push([[267],{1010:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},1011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){(0,a.default)(2,arguments);var u=(0,n.default)(e,r),o=(0,n.default)(t,r);return u.getTime()===o.getTime()};var n=u(r(1012)),a=u(r(1010));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1012:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var r=t||{},o=r.locale,s=o&&o.options&&o.options.weekStartsOn,f=null==s?0:(0,n.default)(s),l=null==r.weekStartsOn?f:(0,n.default)(r.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=(0,a.default)(e),i=c.getUTCDay(),d=(i<l?7:0)+i-l;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c};var n=o(r(1013)),a=o(r(1014)),u=o(r(1010));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1013:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},1014:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,a.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var n,a=(n=r(1010))&&n.__esModule?n:{default:n};e.exports=t.default},829:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n){var a=s[e];if("function"===typeof a)return a(t,r,n);return a};var n,a=(n=r(1011))&&n.__esModule?n:{default:n};var u=["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0443","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0443","\u0441\u0443\u0431\u0431\u043e\u0442\u0443"];function o(e){var t=u[e];return 2===e?"'\u0432\u043e "+t+" \u0432' p":"'\u0432 "+t+" \u0432' p"}var s={lastWeek:function(e,t,r){var n=e.getUTCDay();return(0,a.default)(e,t,r)?o(n):function(e){var t=u[e];switch(e){case 0:return"'\u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u0435 "+t+" \u0432' p";case 1:case 2:case 4:return"'\u0432 \u043f\u0440\u043e\u0448\u043b\u044b\u0439 "+t+" \u0432' p";case 3:case 5:case 6:return"'\u0432 \u043f\u0440\u043e\u0448\u043b\u0443\u044e "+t+" \u0432' p"}}(n)},yesterday:"'\u0432\u0447\u0435\u0440\u0430 \u0432' p",today:"'\u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432' p",tomorrow:"'\u0437\u0430\u0432\u0442\u0440\u0430 \u0432' p",nextWeek:function(e,t,r){var n=e.getUTCDay();return(0,a.default)(e,t,r)?o(n):function(e){var t=u[e];switch(e){case 0:return"'\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 "+t+" \u0432' p";case 1:case 2:case 4:return"'\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 "+t+" \u0432' p";case 3:case 5:case 6:return"'\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e "+t+" \u0432' p"}}(n)},other:"P"};e.exports=t.default}}]);
//# sourceMappingURL=datefns-locale-339.72495d5e.chunk.js.map