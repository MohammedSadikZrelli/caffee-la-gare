(this["webpackJsonppwa-pos-terminal"]=this["webpackJsonppwa-pos-terminal"]||[]).push([[92,1,95],{552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var o,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=a.width?String(a.width):r;o=e.formattingValues[u]||e.formattingValues[r]}else{var i=e.defaultWidth,d=a.width?String(a.width):e.defaultWidth;o=e.values[d]||e.values[i]}return o[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(552))&&o.__esModule?o:{default:o};var r={locale:{1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},number:{"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"}};var u={localeToNumber:function(e){var t=e.toString().replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,(function(e){return r.number[e]}));return Number(t)},numberToLocale:function(e){return e.toString().replace(/\d/g,(function(e){return r.locale[e]}))},ordinalNumber:function(e){var t=u.localeToNumber(e),n=u.numberToLocale(t);switch(t%10){case 2:case 3:case 4:case 6:case 1:case 5:case 7:case 8:case 9:case 0:return n}},era:(0,a.default)({values:{narrow:["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u094d\u0935\u0940"],abbreviated:["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u094d\u0935\u0940"],wide:["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u0935\u0940 \u0938\u0928"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u0924\u093f1","\u0924\u093f2","\u0924\u093f3","\u0924\u093f4"],wide:["\u092a\u0939\u0932\u0940 \u0924\u093f\u092e\u093e\u0939\u0940","\u0926\u0942\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940","\u0924\u0940\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940","\u091a\u094c\u0925\u0940 \u0924\u093f\u092e\u093e\u0939\u0940"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:{narrow:["\u091c","\u092b\u093c","\u092e\u093e","\u0905","\u092e\u0908","\u091c\u0942","\u091c\u0941","\u0905\u0917","\u0938\u093f","\u0905\u0915\u094d\u0924\u0942","\u0928","\u0926\u093f"],abbreviated:["\u091c\u0928","\u092b\u093c\u0930","\u092e\u093e\u0930\u094d\u091a","\u0905\u092a\u094d\u0930\u0948\u0932","\u092e\u0908","\u091c\u0942\u0928","\u091c\u0941\u0932","\u0905\u0917","\u0938\u093f\u0924","\u0905\u0915\u094d\u0924\u0942","\u0928\u0935","\u0926\u093f\u0938"],wide:["\u091c\u0928\u0935\u0930\u0940","\u092b\u093c\u0930\u0935\u0930\u0940","\u092e\u093e\u0930\u094d\u091a","\u0905\u092a\u094d\u0930\u0948\u0932","\u092e\u0908","\u091c\u0942\u0928","\u091c\u0941\u0932\u093e\u0908","\u0905\u0917\u0938\u094d\u0924","\u0938\u093f\u0924\u0902\u092c\u0930","\u0905\u0915\u094d\u0924\u0942\u092c\u0930","\u0928\u0935\u0902\u092c\u0930","\u0926\u093f\u0938\u0902\u092c\u0930"]},defaultWidth:"wide"}),day:(0,a.default)({values:{narrow:["\u0930","\u0938\u094b","\u092e\u0902","\u092c\u0941","\u0917\u0941","\u0936\u0941","\u0936"],short:["\u0930","\u0938\u094b","\u092e\u0902","\u092c\u0941","\u0917\u0941","\u0936\u0941","\u0936"],abbreviated:["\u0930\u0935\u093f","\u0938\u094b\u092e","\u092e\u0902\u0917\u0932","\u092c\u0941\u0927","\u0917\u0941\u0930\u0941","\u0936\u0941\u0915\u094d\u0930","\u0936\u0928\u093f"],wide:["\u0930\u0935\u093f\u0935\u093e\u0930","\u0938\u094b\u092e\u0935\u093e\u0930","\u092e\u0902\u0917\u0932\u0935\u093e\u0930","\u092c\u0941\u0927\u0935\u093e\u0930","\u0917\u0941\u0930\u0941\u0935\u093e\u0930","\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930","\u0936\u0928\u093f\u0935\u093e\u0930"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},abbreviated:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},wide:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},abbreviated:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},wide:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"}},defaultFormattingWidth:"wide"})},i=u;t.default=i,e.exports=t.default},698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o;n=n||{},o="string"===typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",a.default.numberToLocale(t));if(n.addSuffix)return n.comparison>0?o+"\u092e\u0947 ":o+" \u092a\u0939\u0932\u0947";return o};var o,a=(o=n(559))&&o.__esModule?o:{default:o};var r={lessThanXSeconds:{one:"\u0967 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092e",other:"{{count}} \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092e"},xSeconds:{one:"\u0967 \u0938\u0947\u0915\u0902\u0921",other:"{{count}} \u0938\u0947\u0915\u0902\u0921"},halfAMinute:"\u0906\u0927\u093e \u092e\u093f\u0928\u091f",lessThanXMinutes:{one:"\u0967 \u092e\u093f\u0928\u091f \u0938\u0947 \u0915\u092e",other:"{{count}} \u092e\u093f\u0928\u091f \u0938\u0947 \u0915\u092e"},xMinutes:{one:"\u0967 \u092e\u093f\u0928\u091f",other:"{{count}} \u092e\u093f\u0928\u091f"},aboutXHours:{one:"\u0932\u0917\u092d\u0917 \u0967 \u0918\u0902\u091f\u093e",other:"\u0932\u0917\u092d\u0917 {{count}} \u0918\u0902\u091f\u0947"},xHours:{one:"\u0967 \u0918\u0902\u091f\u093e",other:"{{count}} \u0918\u0902\u091f\u0947"},xDays:{one:"\u0967 \u0926\u093f\u0928",other:"{{count}} \u0926\u093f\u0928"},aboutXWeeks:{one:"\u0932\u0917\u092d\u0917 \u0967 \u0938\u092a\u094d\u0924\u093e\u0939",other:"\u0932\u0917\u092d\u0917 {{count}} \u0938\u092a\u094d\u0924\u093e\u0939"},xWeeks:{one:"\u0967 \u0938\u092a\u094d\u0924\u093e\u0939",other:"{{count}} \u0938\u092a\u094d\u0924\u093e\u0939"},aboutXMonths:{one:"\u0932\u0917\u092d\u0917 \u0967 \u092e\u0939\u0940\u0928\u093e",other:"\u0932\u0917\u092d\u0917 {{count}} \u092e\u0939\u0940\u0928\u0947"},xMonths:{one:"\u0967 \u092e\u0939\u0940\u0928\u093e",other:"{{count}} \u092e\u0939\u0940\u0928\u0947"},aboutXYears:{one:"\u0932\u0917\u092d\u0917 \u0967 \u0935\u0930\u094d\u0937",other:"\u0932\u0917\u092d\u0917 {{count}} \u0935\u0930\u094d\u0937"},xYears:{one:"\u0967 \u0935\u0930\u094d\u0937",other:"{{count}} \u0935\u0930\u094d\u0937"},overXYears:{one:"\u0967 \u0935\u0930\u094d\u0937 \u0938\u0947 \u0905\u0927\u093f\u0915",other:"{{count}} \u0935\u0930\u094d\u0937 \u0938\u0947 \u0905\u0927\u093f\u0915"},almostXYears:{one:"\u0932\u0917\u092d\u0917 \u0967 \u0935\u0930\u094d\u0937",other:"\u0932\u0917\u092d\u0917 {{count}} \u0935\u0930\u094d\u0937"}};e.exports=t.default}}]);
//# sourceMappingURL=datefns-locale-181.e0a52521.chunk.js.map