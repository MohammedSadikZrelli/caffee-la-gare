(this["webpackJsonppwa-pos-terminal"]=this["webpackJsonppwa-pos-terminal"]||[]).push([[6,112,223],{553:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t,e){var n=String(t),i=e||{},r=i.width,u=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],d=n.match(u);if(!d)return null;var s,l=d[0],o=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(o)?function(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}(o,(function(a){return a.test(l)})):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}(o,(function(a){return a.test(l)})),s=a.valueCallback?a.valueCallback(s):s,{value:s=i.valueCallback?i.valueCallback(s):s,rest:n.slice(l.length)}}},a.exports=t.default},554:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t,e){var n=String(t),i=e||{},r=n.match(a.matchPattern);if(!r)return null;var u=r[0],d=n.match(a.parsePattern);if(!d)return null;var s=a.valueCallback?a.valueCallback(d[0]):d[0];return{value:s=i.valueCallback?i.valueCallback(s):s,rest:n.slice(u.length)}}},a.exports=t.default},557:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(e(554)),i=r(e(553));function r(a){return a&&a.__esModule?a:{default:a}}var u={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};t.default=u,a.exports=t.default}}]);
//# sourceMappingURL=datefns-locale-103.84397c65.chunk.js.map