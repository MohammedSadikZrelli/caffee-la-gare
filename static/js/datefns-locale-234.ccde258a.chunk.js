(this["webpackJsonppwa-pos-terminal"]=this["webpackJsonppwa-pos-terminal"]||[]).push([[151,0,1,112,145,147,148,149,150,223],{551:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=e||{},n=a.width?String(a.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}},t.exports=e.default},552:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n,u=a||{};if("formatting"===(u.context?String(u.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=u.width?String(u.width):r;n=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,d=u.width?String(u.width):t.defaultWidth;n=t.values[d]||t.values[o]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},553:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n=String(e),u=a||{},r=u.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=n.match(i);if(!o)return null;var d,l=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}(s,(function(t){return t.test(l)})):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}(s,(function(t){return t.test(l)})),d=t.valueCallback?t.valueCallback(d):d,{value:d=u.valueCallback?u.valueCallback(d):d,rest:n.slice(l.length)}}},t.exports=e.default},554:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n=String(e),u=a||{},r=n.match(t.matchPattern);if(!r)return null;var i=r[0],o=n.match(t.parsePattern);if(!o)return null;var d=t.valueCallback?t.valueCallback(o[0]):o[0];return{value:d=u.valueCallback?u.valueCallback(d):d,rest:n.slice(i.length)}}},t.exports=e.default},737:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a){var u;a=a||{},u="string"===typeof n[t]?n[t]:a.addSuffix&&a.comparison>0?n[t].future.replace("{{count}}",e):a.addSuffix&&a.comparison<=0?n[t].past.replace("{{count}}",e):n[t].present.replace("{{count}}",e);return u};var n={lessThanXSeconds:{past:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8",future:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10e8\u10d8"},xSeconds:{past:"{{count}} \u10ec\u10d0\u10db\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d0\u10db\u10d8",future:"{{count}} \u10ec\u10d0\u10db\u10e8\u10d8"},halfAMinute:{past:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10d8",future:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10e8\u10d8"},lessThanXMinutes:{past:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8",future:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10e8\u10d8"},xMinutes:{past:"{{count}} \u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10e3\u10d7\u10d8",future:"{{count}} \u10ec\u10e3\u10d7\u10e8\u10d8"},aboutXHours:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10d8",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10e8\u10d8"},xHours:{past:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10d8",future:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10e8\u10d8"},xDays:{past:"{{count}} \u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10d3\u10e6\u10d4",future:"{{count}} \u10d3\u10e6\u10d4\u10e8\u10d8"},aboutXWeeks:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8"},xWeeks:{past:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e1 \u10d9\u10d5\u10d8\u10e0\u10d0",present:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0",future:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8"},aboutXMonths:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d4",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d4\u10e8\u10d8"},xMonths:{past:"{{count}} \u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10d7\u10d5\u10d4",future:"{{count}} \u10d7\u10d5\u10d4\u10e8\u10d8"},aboutXYears:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10d4\u10da\u10d8",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10d4\u10da\u10e8\u10d8"},xYears:{past:"{{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d4\u10da\u10d8",future:"{{count}} \u10ec\u10d4\u10da\u10e8\u10d8"},overXYears:{past:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8",future:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10e8\u10d4\u10db\u10d3\u10d4\u10d2"},almostXYears:{past:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10d4\u10da\u10d8",future:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10d4\u10da\u10e8\u10d8"}};t.exports=e.default},738:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,u=(n=a(551))&&n.__esModule?n:{default:n};var r={date:(0,u.default)({formats:{full:"EEEE, do MMMM, y",long:"do, MMMM, y",medium:"d, MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,u.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,u.default)({formats:{full:"{{date}} {{time}}'-\u10d6\u10d4'",long:"{{date}} {{time}}'-\u10d6\u10d4'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,t.exports=e.default},739:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a,u){return n[t]};var n={lastWeek:"'\u10ec\u10d8\u10dc\u10d0' eeee LT'-\u10d6\u10d4'",yesterday:"'\u10d2\u10e3\u10e8\u10d8\u10dc' LT'-\u10d6\u10d4'",today:"'\u10d3\u10e6\u10d4\u10e1' LT'-\u10d6\u10d4'",tomorrow:"'\u10ee\u10d5\u10d0\u10da' LT'-\u10d6\u10d4'",nextWeek:"'\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8' eeee LT'-\u10d6\u10d4'",other:"L"};t.exports=e.default},740:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,u=(n=a(552))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(t,e){var a=Number(t);return 1===a?a+"-\u10da\u10d8":a+"-\u10d4"},era:(0,u.default)({values:{narrow:["\u10e9.\u10ec-\u10db\u10d3\u10d4","\u10e9.\u10ec"],abbreviated:["\u10e9\u10d5.\u10ec-\u10db\u10d3\u10d4","\u10e9\u10d5.\u10ec"],wide:["\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4","\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u10da\u10d8 \u10d9\u10d5","2-\u10d4 \u10d9\u10d5","3-\u10d4 \u10d9\u10d5","4-\u10d4 \u10d9\u10d5"],wide:["1-\u10da\u10d8 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","2-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","3-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","4-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,u.default)({values:{narrow:["\u10d8\u10d0","\u10d7\u10d4","\u10db\u10d0","\u10d0\u10de","\u10db\u10e1","\u10d5\u10dc","\u10d5\u10da","\u10d0\u10d2","\u10e1\u10d4","\u10dd\u10e5","\u10dc\u10dd","\u10d3\u10d4"],abbreviated:["\u10d8\u10d0\u10dc","\u10d7\u10d4\u10d1","\u10db\u10d0\u10e0","\u10d0\u10de\u10e0","\u10db\u10d0\u10d8","\u10d8\u10d5\u10dc","\u10d8\u10d5\u10da","\u10d0\u10d2\u10d5","\u10e1\u10d4\u10e5","\u10dd\u10e5\u10e2","\u10dc\u10dd\u10d4","\u10d3\u10d4\u10d9"],wide:["\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8","\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8","\u10db\u10d0\u10e0\u10e2\u10d8","\u10d0\u10de\u10e0\u10d8\u10da\u10d8","\u10db\u10d0\u10d8\u10e1\u10d8","\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8","\u10d8\u10d5\u10da\u10d8\u10e1\u10d8","\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd","\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8","\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8","\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8","\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["\u10d9\u10d5","\u10dd\u10e0","\u10e1\u10d0","\u10dd\u10d7","\u10ee\u10e3","\u10de\u10d0","\u10e8\u10d0"],short:["\u10d9\u10d5\u10d8","\u10dd\u10e0\u10e8","\u10e1\u10d0\u10db","\u10dd\u10d7\u10ee","\u10ee\u10e3\u10d7","\u10de\u10d0\u10e0","\u10e8\u10d0\u10d1"],abbreviated:["\u10d9\u10d5\u10d8","\u10dd\u10e0\u10e8","\u10e1\u10d0\u10db","\u10dd\u10d7\u10ee","\u10ee\u10e3\u10d7","\u10de\u10d0\u10e0","\u10e8\u10d0\u10d1"],wide:["\u10d9\u10d5\u10d8\u10e0\u10d0","\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8","\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{narrow:{am:"a",pm:"p",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"},abbreviated:{am:"AM",pm:"PM",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"},abbreviated:{am:"AM",pm:"PM",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"}},defaultFormattingWidth:"wide"})};e.default=r,t.exports=e.default},741:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a(554)),u=r(a(553));function r(t){return t&&t.__esModule?t:{default:t}}var i={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(-\u10da\u10d8|-\u10d4)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,u.default)({matchPatterns:{narrow:/^(\u10e9\u10d5?\.\u10ec)/i,abbreviated:/^(\u10e9\u10d5?\.\u10ec)/i,wide:/^(\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d0\u10db\u10d3\u10d4|\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d8\u10d3\u10d0\u10dc)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d0\u10db\u10d3\u10d4)/i,/^(\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d8\u10d3\u10d0\u10dc)/i]},defaultParseWidth:"any"}),quarter:(0,u.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]-(\u10da\u10d8|\u10d4)? \u10d9\u10d5/i,wide:/^[1234]-(\u10da\u10d8|\u10d4)? \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,u.default)({matchPatterns:{any:/^(\u10d8\u10d0|\u10d7\u10d4|\u10db\u10d0|\u10d0\u10de|\u10db\u10e1|\u10d5\u10dc|\u10d5\u10da|\u10d0\u10d2|\u10e1\u10d4|\u10dd\u10e5|\u10dc\u10dd|\u10d3\u10d4)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u10d8\u10d0/i,/^\u10d7/i,/^\u10db\u10d0\u10e0/i,/^\u10d0\u10de/i,/^\u10db\u10d0\u10d8/i,/^\u10d8?\u10d5\u10dc/i,/^\u10d8?\u10d5\u10da/i,/^\u10d0\u10d2/i,/^\u10e1/i,/^\u10dd/i,/^\u10dc/i,/^\u10d3/i]},defaultParseWidth:"any"}),day:(0,u.default)({matchPatterns:{narrow:/^(\u10d9\u10d5|\u10dd\u10e0|\u10e1\u10d0|\u10dd\u10d7|\u10ee\u10e3|\u10de\u10d0|\u10e8\u10d0)/i,short:/^(\u10d9\u10d5\u10d8|\u10dd\u10e0\u10e8|\u10e1\u10d0\u10db|\u10dd\u10d7\u10ee|\u10ee\u10e3\u10d7|\u10de\u10d0\u10e0|\u10e8\u10d0\u10d1)/i,long:/^(\u10d9\u10d5\u10d8\u10e0\u10d0|\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8|\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u10d9\u10d5/i,/^\u10dd\u10e0/i,/^\u10e1\u10d0/i,/^\u10dd\u10d7/i,/^\u10ee\u10e3/i,/^\u10de\u10d0/i,/^\u10e8\u10d0/i]},defaultParseWidth:"any"}),dayPeriod:(0,u.default)({matchPatterns:{any:/^([ap]\.?\s?m\.?|\u10e8\u10e3\u10d0\u10e6|\u10d3\u10d8\u10da)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^\u10e8\u10e3\u10d0\u10e6/i,noon:/^\u10e8\u10e3\u10d0\u10d3\u10e6/i,morning:/^\u10d3\u10d8\u10da/i,afternoon:/\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1/i,evening:/\u10e1\u10d0\u10e6\u10d0\u10db\u10dd/i,night:/\u10e6\u10d0\u10db/i}},defaultParseWidth:"any"})};e.default=i,t.exports=e.default},950:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=d(a(737)),u=d(a(738)),r=d(a(739)),i=d(a(740)),o=d(a(741));function d(t){return t&&t.__esModule?t:{default:t}}var l={code:"ka",formatDistance:n.default,formatLong:u.default,formatRelative:r.default,localize:i.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,t.exports=e.default}}]);
//# sourceMappingURL=datefns-locale-234.ccde258a.chunk.js.map