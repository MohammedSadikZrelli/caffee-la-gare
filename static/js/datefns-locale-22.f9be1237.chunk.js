(this["webpackJsonppwa-pos-terminal"]=this["webpackJsonppwa-pos-terminal"]||[]).push([[135],{580:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(o,e,t){var r;t=t||{},r="string"===typeof n[o]?n[o]:1===e?n[o].one:2===e?n[o].two:e<=10?n[o].threeToTen.replace("{{count}}",e):n[o].other.replace("{{count}}",e);if(t.addSuffix)return t.comparison>0?"\u0641\u064a \u062e\u0644\u0627\u0644 "+r:"\u0645\u0646\u0630 "+r;return r};var n={lessThanXSeconds:{one:"\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u062a\u064a\u0646",threeToTen:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062b\u0648\u0627\u0646\u064a",other:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062b\u0627\u0646\u064a\u0629"},xSeconds:{one:"\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u062b\u0627\u0646\u062a\u064a\u0646",threeToTen:"{{count}} \u062b\u0648\u0627\u0646\u064a",other:"{{count}} \u062b\u0627\u0646\u064a\u0629"},halfAMinute:"\u0646\u0635\u0641 \u062f\u0642\u064a\u0642\u0629",lessThanXMinutes:{one:"\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629",two:"\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u062a\u064a\u0646",threeToTen:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062f\u0642\u0627\u0626\u0642",other:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062f\u0642\u064a\u0642\u0629"},xMinutes:{one:"\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u062f\u0642\u064a\u0642\u062a\u064a\u0646",threeToTen:"{{count}} \u062f\u0642\u0627\u0626\u0642",other:"{{count}} \u062f\u0642\u064a\u0642\u0629"},aboutXHours:{one:"\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0633\u0627\u0639\u062a\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0633\u0627\u0639\u0627\u062a \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0633\u0627\u0639\u0629 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xHours:{one:"\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u0633\u0627\u0639\u062a\u064a\u0646",threeToTen:"{{count}} \u0633\u0627\u0639\u0627\u062a",other:"{{count}} \u0633\u0627\u0639\u0629"},xDays:{one:"\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",two:"\u064a\u0648\u0645\u064a\u0646",threeToTen:"{{count}} \u0623\u064a\u0627\u0645",other:"{{count}} \u064a\u0648\u0645"},aboutXWeeks:{one:"\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0623\u0633\u0628\u0648\u0639\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0633\u0627\u0628\u064a\u0639 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0623\u0633\u0628\u0648\u0639 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xWeeks:{one:"\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f",two:"\u0623\u0633\u0628\u0648\u0639\u064a\u0646",threeToTen:"{{count}} \u0623\u0633\u0627\u0628\u064a\u0639",other:"{{count}} \u0623\u0633\u0628\u0648\u0639"},aboutXMonths:{one:"\u0634\u0647\u0631 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0634\u0647\u0631\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0634\u0647\u0631 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0634\u0647\u0631 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xMonths:{one:"\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",two:"\u0634\u0647\u0631\u064a\u0646",threeToTen:"{{count}} \u0623\u0634\u0647\u0631",other:"{{count}} \u0634\u0647\u0631"},aboutXYears:{one:"\u0639\u0627\u0645 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0639\u0627\u0645\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0639\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xYears:{one:"\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",two:"\u0639\u0627\u0645\u064a\u0646",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645",other:"{{count}} \u0639\u0627\u0645"},overXYears:{one:"\u0623\u0643\u062b\u0631 \u0645\u0646 \u0639\u0627\u0645",two:"\u0623\u0643\u062b\u0631 \u0645\u0646 \u0639\u0627\u0645\u064a\u0646",threeToTen:"\u0623\u0643\u062b\u0631 \u0645\u0646 {{count}} \u0623\u0639\u0648\u0627\u0645",other:"\u0623\u0643\u062b\u0631 \u0645\u0646 {{count}} \u0639\u0627\u0645"},almostXYears:{one:"\u0639\u0627\u0645 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0639\u0627\u0645\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0639\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"}};o.exports=e.default}}]);
//# sourceMappingURL=datefns-locale-22.f9be1237.chunk.js.map