(this["webpackJsonppwa-pos-terminal"]=this["webpackJsonppwa-pos-terminal"]||[]).push([[82,1],{552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=i.width?String(i.width):r;a=e.formattingValues[d]||e.formattingValues[r]}else{var o=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},691:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(552))&&a.__esModule?a:{default:a};var r={ordinalNumber:function(e,t){return Number(e)},era:(0,i.default)({values:{narrow:["\u0a88\u0ab8\u0aaa\u0ac2","\u0a88\u0ab8"],abbreviated:["\u0a88.\u0ab8.\u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7","\u0a88.\u0ab8."],wide:["\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8 \u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7","\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1\u0ab2\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8","2\u0a9c\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8","3\u0a9c\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8","4\u0aa5\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["\u0a9c\u0abe","\u0aab\u0ac7","\u0aae\u0abe","\u0a8f","\u0aae\u0ac7","\u0a9c\u0ac2","\u0a9c\u0ac1","\u0a93","\u0ab8","\u0a93","\u0aa8","\u0aa1\u0abf"],abbreviated:["\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1","\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1","\u0aae\u0abe\u0ab0\u0acd\u0a9a","\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2","\u0aae\u0ac7","\u0a9c\u0ac2\u0aa8","\u0a9c\u0ac1\u0ab2\u0abe\u0a88","\u0a91\u0a97\u0ab8\u0acd\u0a9f","\u0ab8\u0aaa\u0acd\u0a9f\u0ac7","\u0a93\u0a95\u0acd\u0a9f\u0acb","\u0aa8\u0ab5\u0ac7","\u0aa1\u0abf\u0ab8\u0ac7"],wide:["\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0","\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0","\u0aae\u0abe\u0ab0\u0acd\u0a9a","\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2","\u0aae\u0ac7","\u0a9c\u0ac2\u0aa8","\u0a9c\u0ac1\u0ab2\u0abe\u0a87","\u0a93\u0a97\u0ab8\u0acd\u0a9f","\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0","\u0a93\u0a95\u0acd\u0a9f\u0acb\u0aac\u0ab0","\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0","\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u0ab0","\u0ab8\u0acb","\u0aae\u0a82","\u0aac\u0ac1","\u0a97\u0ac1","\u0ab6\u0ac1","\u0ab6"],short:["\u0ab0","\u0ab8\u0acb","\u0aae\u0a82","\u0aac\u0ac1","\u0a97\u0ac1","\u0ab6\u0ac1","\u0ab6"],abbreviated:["\u0ab0\u0ab5\u0abf","\u0ab8\u0acb\u0aae","\u0aae\u0a82\u0a97\u0ab3","\u0aac\u0ac1\u0aa7","\u0a97\u0ac1\u0ab0\u0ac1","\u0ab6\u0ac1\u0a95\u0acd\u0ab0","\u0ab6\u0aa8\u0abf"],wide:["\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0","\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0","\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0","\u0aac\u0ac1\u0aa7\u0ab5\u0abe\u0ab0","\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0","\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0","\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"\u0aae.\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac.",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"},abbreviated:{am:"AM",pm:"PM",midnight:"\u200b\u0aae\u0aa7\u0acd\u0aaf\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"},wide:{am:"AM",pm:"PM",midnight:"\u200b\u0aae\u0aa7\u0acd\u0aaf\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"\u0aae.\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"},abbreviated:{am:"AM",pm:"PM",midnight:"\u0aae\u0aa7\u0acd\u0aaf\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"},wide:{am:"AM",pm:"PM",midnight:"\u200b\u0aae\u0aa7\u0acd\u0aaf\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default}}]);
//# sourceMappingURL=datefns-locale-172.b45e8b12.chunk.js.map