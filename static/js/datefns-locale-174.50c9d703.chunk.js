(this["webpackJsonppwa-pos-terminal"]=this["webpackJsonppwa-pos-terminal"]||[]).push([[84,0,1,78,80,81,82,83,112,223],{551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}},e.exports=t.default},552:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;n=e.formattingValues[u]||e.formattingValues[i]}else{var o=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},553:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),r=a||{},i=r.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],o=n.match(u);if(!o)return null;var d,l=o[0],f=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(f)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(f,(function(e){return e.test(l)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(f,(function(e){return e.test(l)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(l.length)}}},e.exports=t.default},554:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),r=a||{},i=n.match(e.matchPattern);if(!i)return null;var u=i[0],o=n.match(e.parsePattern);if(!o)return null;var d=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(u.length)}}},e.exports=t.default},688:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var r;a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?r+"\u0aae\u0abe\u0a82":r+" \u0aaa\u0ab9\u0ac7\u0ab2\u0abe\u0a82";return r};var n={lessThanXSeconds:{one:"\u0ab9\u0aae\u0aa3\u0abe\u0a82",other:"\u200b\u0a86\u0ab6\u0ab0\u0ac7 {{count}} \u0ab8\u0ac7\u0a95\u0a82\u0aa1"},xSeconds:{one:"1 \u0ab8\u0ac7\u0a95\u0a82\u0aa1",other:"{{count}} \u0ab8\u0ac7\u0a95\u0a82\u0aa1"},halfAMinute:"\u0a85\u0aa1\u0aa7\u0ac0 \u0aae\u0abf\u0aa8\u0abf\u0a9f",lessThanXMinutes:{one:"\u0a86 \u0aae\u0abf\u0aa8\u0abf\u0a9f",other:"\u200b\u0a86\u0ab6\u0ab0\u0ac7 {{count}} \u0aae\u0abf\u0aa8\u0abf\u0a9f"},xMinutes:{one:"1 \u0aae\u0abf\u0aa8\u0abf\u0a9f",other:"{{count}} \u0aae\u0abf\u0aa8\u0abf\u0a9f"},aboutXHours:{one:"\u200b\u0a86\u0ab6\u0ab0\u0ac7 1 \u0a95\u0ab2\u0abe\u0a95",other:"\u200b\u0a86\u0ab6\u0ab0\u0ac7 {{count}} \u0a95\u0ab2\u0abe\u0a95"},xHours:{one:"1 \u0a95\u0ab2\u0abe\u0a95",other:"{{count}} \u0a95\u0ab2\u0abe\u0a95"},xDays:{one:"1 \u0aa6\u0abf\u0ab5\u0ab8",other:"{{count}} \u0aa6\u0abf\u0ab5\u0ab8"},aboutXWeeks:{one:"\u0a86\u0ab6\u0ab0\u0ac7 1 \u0a85\u0aa0\u0ab5\u0abe\u0aa1\u0abf\u0aaf\u0ac1\u0a82",other:"\u0a86\u0ab6\u0ab0\u0ac7 {{count}} \u0a85\u0aa0\u0ab5\u0abe\u0aa1\u0abf\u0aaf\u0abe"},xWeeks:{one:"1 \u0a85\u0aa0\u0ab5\u0abe\u0aa1\u0abf\u0aaf\u0ac1\u0a82",other:"{{count}} \u0a85\u0aa0\u0ab5\u0abe\u0aa1\u0abf\u0aaf\u0abe"},aboutXMonths:{one:"\u0a86\u0ab6\u0ab0\u0ac7 1 \u0aae\u0ab9\u0abf\u0aa8\u0acb",other:"\u0a86\u0ab6\u0ab0\u0ac7 {{count}} \u0aae\u0ab9\u0abf\u0aa8\u0abe"},xMonths:{one:"1 \u0aae\u0ab9\u0abf\u0aa8\u0acb",other:"{{count}} \u0aae\u0ab9\u0abf\u0aa8\u0abe"},aboutXYears:{one:"\u0a86\u0ab6\u0ab0\u0ac7 1 \u0ab5\u0ab0\u0acd\u0ab7",other:"\u0a86\u0ab6\u0ab0\u0ac7 {{count}} \u0ab5\u0ab0\u0acd\u0ab7"},xYears:{one:"1 \u0ab5\u0ab0\u0acd\u0ab7",other:"{{count}} \u0ab5\u0ab0\u0acd\u0ab7"},overXYears:{one:"1 \u0ab5\u0ab0\u0acd\u0ab7\u0aa5\u0ac0 \u0ab5\u0aa7\u0ac1",other:"{{count}} \u0ab5\u0ab0\u0acd\u0ab7\u0aa5\u0ac0 \u0ab5\u0aa7\u0ac1"},almostXYears:{one:"\u0ab2\u0a97\u0aad\u0a97 1 \u0ab5\u0ab0\u0acd\u0ab7",other:"\u0ab2\u0a97\u0aad\u0a97 {{count}} \u0ab5\u0ab0\u0acd\u0ab7"}};e.exports=t.default},689:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(551))&&n.__esModule?n:{default:n};var i={date:(0,r.default)({formats:{full:"EEEE, d MMMM, y",long:"d MMMM, y",medium:"d MMM, y",short:"d/M/yy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"hh:mm:ss a zzzz",long:"hh:mm:ss a z",medium:"hh:mm:ss a",short:"hh:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},690:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,r){return n[e]};var n={lastWeek:"'\u0aaa\u0abe\u0a9b\u0ab2\u0abe' eeee p",yesterday:"'\u0a97\u0a88\u0a95\u0abe\u0ab2\u0ac7' p",today:"'\u0a86\u0a9c\u0ac7' p",tomorrow:"'\u0a86\u0ab5\u0aa4\u0ac0\u0a95\u0abe\u0ab2\u0ac7' p",nextWeek:"eeee p",other:"P"};e.exports=t.default},691:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(552))&&n.__esModule?n:{default:n};var i={ordinalNumber:function(e,t){return Number(e)},era:(0,r.default)({values:{narrow:["\u0a88\u0ab8\u0aaa\u0ac2","\u0a88\u0ab8"],abbreviated:["\u0a88.\u0ab8.\u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7","\u0a88.\u0ab8."],wide:["\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8 \u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7","\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1\u0ab2\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8","2\u0a9c\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8","3\u0a9c\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8","4\u0aa5\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["\u0a9c\u0abe","\u0aab\u0ac7","\u0aae\u0abe","\u0a8f","\u0aae\u0ac7","\u0a9c\u0ac2","\u0a9c\u0ac1","\u0a93","\u0ab8","\u0a93","\u0aa8","\u0aa1\u0abf"],abbreviated:["\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1","\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1","\u0aae\u0abe\u0ab0\u0acd\u0a9a","\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2","\u0aae\u0ac7","\u0a9c\u0ac2\u0aa8","\u0a9c\u0ac1\u0ab2\u0abe\u0a88","\u0a91\u0a97\u0ab8\u0acd\u0a9f","\u0ab8\u0aaa\u0acd\u0a9f\u0ac7","\u0a93\u0a95\u0acd\u0a9f\u0acb","\u0aa8\u0ab5\u0ac7","\u0aa1\u0abf\u0ab8\u0ac7"],wide:["\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0","\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0","\u0aae\u0abe\u0ab0\u0acd\u0a9a","\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2","\u0aae\u0ac7","\u0a9c\u0ac2\u0aa8","\u0a9c\u0ac1\u0ab2\u0abe\u0a87","\u0a93\u0a97\u0ab8\u0acd\u0a9f","\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0","\u0a93\u0a95\u0acd\u0a9f\u0acb\u0aac\u0ab0","\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0","\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["\u0ab0","\u0ab8\u0acb","\u0aae\u0a82","\u0aac\u0ac1","\u0a97\u0ac1","\u0ab6\u0ac1","\u0ab6"],short:["\u0ab0","\u0ab8\u0acb","\u0aae\u0a82","\u0aac\u0ac1","\u0a97\u0ac1","\u0ab6\u0ac1","\u0ab6"],abbreviated:["\u0ab0\u0ab5\u0abf","\u0ab8\u0acb\u0aae","\u0aae\u0a82\u0a97\u0ab3","\u0aac\u0ac1\u0aa7","\u0a97\u0ac1\u0ab0\u0ac1","\u0ab6\u0ac1\u0a95\u0acd\u0ab0","\u0ab6\u0aa8\u0abf"],wide:["\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0","\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0","\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0","\u0aac\u0ac1\u0aa7\u0ab5\u0abe\u0ab0","\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0","\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0","\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"\u0aae.\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac.",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"},abbreviated:{am:"AM",pm:"PM",midnight:"\u200b\u0aae\u0aa7\u0acd\u0aaf\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"},wide:{am:"AM",pm:"PM",midnight:"\u200b\u0aae\u0aa7\u0acd\u0aaf\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"\u0aae.\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"},abbreviated:{am:"AM",pm:"PM",midnight:"\u0aae\u0aa7\u0acd\u0aaf\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"},wide:{am:"AM",pm:"PM",midnight:"\u200b\u0aae\u0aa7\u0acd\u0aaf\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0abf",noon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",morning:"\u0ab8\u0ab5\u0abe\u0ab0\u0ac7",afternoon:"\u0aac\u0aaa\u0acb\u0ab0\u0ac7",evening:"\u0ab8\u0abe\u0a82\u0a9c\u0ac7",night:"\u0ab0\u0abe\u0aa4\u0acd\u0ab0\u0ac7"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},692:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(554)),r=i(a(553));function i(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(\u0ab2|\u0a9c|\u0aa5|\u0aa0\u0acd\u0aa0|\u0aae)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(\u0a88\u0ab8\u0aaa\u0ac2|\u0a88\u0ab8)/i,abbreviated:/^(\u0a88\.\u0ab8\.\u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7|\u0a88\.\u0ab8\.)/i,wide:/^(\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8\s\u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7|\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u0a88\u0ab8\u0aaa\u0ac2|\u0a88\u0ab8)/i,/^(\u0a88\.\u0ab8\.\u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7|\u0a88\.\u0ab8\.)/i,/^(\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8\s\u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7|\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\u0ab2\u0acb|\u0a9c\u0acb|\u0aa5\u0acb)? \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[\u0a9c\u0abe\u0aab\u0ac7\u0aae\u0abe\u0a8f\u0aae\u0ac7\u0a9c\u0ac2\u0a9c\u0ac1\u0a93\u0ab8\u0a93\u0aa8\u0aa1\u0abf]/i,abbreviated:/^(\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1|\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1|\u0aae\u0abe\u0ab0\u0acd\u0a9a|\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2|\u0aae\u0ac7|\u0a9c\u0ac2\u0aa8|\u0a9c\u0ac1\u0ab2\u0abe\u0a88|\u0a91\u0a97\u0ab8\u0acd\u0a9f|\u0ab8\u0aaa\u0acd\u0a9f\u0ac7|\u0a93\u0a95\u0acd\u0a9f\u0acb|\u0aa8\u0ab5\u0ac7|\u0aa1\u0abf\u0ab8\u0ac7)/i,wide:/^(\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0|\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0|\u0aae\u0abe\u0ab0\u0acd\u0a9a|\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2|\u0aae\u0ac7|\u0a9c\u0ac2\u0aa8|\u0a9c\u0ac1\u0ab2\u0abe\u0a87|\u0a93\u0a97\u0ab8\u0acd\u0a9f|\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0|\u0a93\u0a95\u0acd\u0a9f\u0acb\u0aac\u0ab0|\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0|\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0a9c\u0abe/i,/^\u0aab\u0ac7/i,/^\u0aae\u0abe/i,/^\u0a8f/i,/^\u0aae\u0ac7/i,/^\u0a9c\u0ac2/i,/^\u0a9c\u0ac1/i,/^\u0a91\u0a97/i,/^\u0ab8/i,/^\u0a93\u0a95\u0acd\u0a9f\u0acb/i,/^\u0aa8/i,/^\u0aa1\u0abf/i],any:[/^\u0a9c\u0abe/i,/^\u0aab\u0ac7/i,/^\u0aae\u0abe/i,/^\u0a8f/i,/^\u0aae\u0ac7/i,/^\u0a9c\u0ac2/i,/^\u0a9c\u0ac1/i,/^\u0a91\u0a97/i,/^\u0ab8/i,/^\u0a93\u0a95\u0acd\u0a9f\u0acb/i,/^\u0aa8/i,/^\u0aa1\u0abf/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(\u0ab0|\u0ab8\u0acb|\u0aae\u0a82|\u0aac\u0ac1|\u0a97\u0ac1|\u0ab6\u0ac1|\u0ab6)/i,short:/^(\u0ab0|\u0ab8\u0acb|\u0aae\u0a82|\u0aac\u0ac1|\u0a97\u0ac1|\u0ab6\u0ac1|\u0ab6)/i,abbreviated:/^(\u0ab0\u0ab5\u0abf|\u0ab8\u0acb\u0aae|\u0aae\u0a82\u0a97\u0ab3|\u0aac\u0ac1\u0aa7|\u0a97\u0ac1\u0ab0\u0ac1|\u0ab6\u0ac1\u0a95\u0acd\u0ab0|\u0ab6\u0aa8\u0abf)/i,wide:/^(\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0|\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0|\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0|\u0aac\u0ac1\u0aa7\u0ab5\u0abe\u0ab0|\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0|\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0|\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0ab0/i,/^\u0ab8\u0acb/i,/^\u0aae\u0a82/i,/^\u0aac\u0ac1/i,/^\u0a97\u0ac1/i,/^\u0ab6\u0ac1/i,/^\u0ab6/i],any:[/^\u0ab0/i,/^\u0ab8\u0acb/i,/^\u0aae\u0a82/i,/^\u0aac\u0ac1/i,/^\u0a97\u0ac1/i,/^\u0ab6\u0ac1/i,/^\u0ab6/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|\u0aae\.?|\u0ab8|\u0aac|\u0ab8\u0abe\u0a82|\u0ab0\u0abe)/i,any:/^(a|p|\u0aae\.?|\u0ab8|\u0aac|\u0ab8\u0abe\u0a82|\u0ab0\u0abe)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^\u0aae\.?/i,noon:/^\u0aac/i,morning:/\u0ab8/i,afternoon:/\u0aac/i,evening:/\u0ab8\u0abe\u0a82/i,night:/\u0ab0\u0abe/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},940:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(688)),r=d(a(689)),i=d(a(690)),u=d(a(691)),o=d(a(692));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"gu",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=datefns-locale-174.50c9d703.chunk.js.map