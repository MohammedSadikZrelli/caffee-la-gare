(this["webpackJsonppwa-pos-terminal"]=this["webpackJsonppwa-pos-terminal"]||[]).push([[204,0,1,112,198,199,200,202,203,223],{551:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=e||{},n=t.width?String(t.width):a.defaultWidth;return a.formats[n]||a.formats[a.defaultWidth]}},a.exports=e.default},552:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,u=i.width?String(i.width):r;n=a.formattingValues[u]||a.formattingValues[r]}else{var o=a.defaultWidth,l=i.width?String(i.width):a.defaultWidth;n=a.values[l]||a.values[o]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},553:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n=String(e),i=t||{},r=i.width,u=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],o=n.match(u);if(!o)return null;var l,d=o[0],s=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(s)?function(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}(s,(function(a){return a.test(d)})):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}(s,(function(a){return a.test(d)})),l=a.valueCallback?a.valueCallback(l):l,{value:l=i.valueCallback?i.valueCallback(l):l,rest:n.slice(d.length)}}},a.exports=e.default},554:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n=String(e),i=t||{},r=n.match(a.matchPattern);if(!r)return null;var u=r[0],o=n.match(a.parsePattern);if(!o)return null;var l=a.valueCallback?a.valueCallback(o[0]):o[0];return{value:l=i.valueCallback?i.valueCallback(l):l,rest:n.slice(u.length)}}},a.exports=e.default},777:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a,e,t){var i;t=t||{},i="string"===typeof n[a]?n[a]:1===e?n[a].one:n[a].other.replace("{{count}}",e);if(t.addSuffix)return t.comparison>0?"dalam masa "+i:i+" yang lalu";return i};var n={lessThanXSeconds:{one:"kurang dari 1 saat",other:"kurang dari {{count}} saat"},xSeconds:{one:"1 saat",other:"{{count}} saat"},halfAMinute:"setengah minit",lessThanXMinutes:{one:"kurang dari 1 minit",other:"kurang dari {{count}} minit"},xMinutes:{one:"1 minit",other:"{{count}} minit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};a.exports=e.default},778:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(551))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,a.exports=e.default},779:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a,e,t,i){return n[a]};var n={lastWeek:"eeee 'lepas pada jam' p",yesterday:"'Semalam pada jam' p",today:"'Hari ini pada jam' p",tomorrow:"'Esok pada jam' p",nextWeek:"eeee 'pada jam' p",other:"P"};a.exports=e.default},780:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(552))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(a,e){var t=Number(a);return"ke-"+t},era:(0,i.default)({values:{narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masihi","Masihi"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["S1","S2","S3","S4"],wide:["Suku pertama","Suku kedua","Suku ketiga","Suku keempat"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],wide:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["A","I","S","R","K","J","S"],short:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],abbreviated:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],wide:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"tgh malam",noon:"tgh hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},781:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t(553));function i(a){return a&&a.__esModule?a:{default:a}}var r={ordinalNumber:(0,i(t(554)).default)({matchPattern:/^ke-(\d+)?/i,parsePattern:/petama|\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|m\.?)/i,wide:/^(sebelum masihi|masihi)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^(m)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^S[1234]/i,wide:/Suku (pertama|kedua|ketiga|keempat)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/pertama|1/i,/kedua|2/i,/ketiga|3/i,/keempat|4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i,wide:/^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^o/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^og/i,/^s/i,/^ok/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[aisrkj]/i,short:/^(ahd|isn|sel|rab|kha|jum|sab)/i,abbreviated:/^(ahd|isn|sel|rab|kha|jum|sab)/i,wide:/^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^a/i,/^i/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^a/i,/^i/i,/^se/i,/^r/i,/^k/i,/^j/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(am|pm|tengah malam|tengah hari|pagi|petang|malam)/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|pagi|petang|malam)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pa/i,afternoon:/tengah h/i,evening:/pe/i,night:/m/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},958:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(t(777)),i=l(t(778)),r=l(t(779)),u=l(t(780)),o=l(t(781));function l(a){return a&&a.__esModule?a:{default:a}}var d={code:"ms",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=d,a.exports=e.default}}]);
//# sourceMappingURL=datefns-locale-282.c5e8d64b.chunk.js.map