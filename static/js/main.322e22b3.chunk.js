(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(48)},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),i=n.n(o),c=(n(25),n(4)),u=n(2);n(27);function l(e){return Math.floor(Math.random()*Math.floor(e))}function s(e,t){var n=e.length;return e.map(function(e,r){return t(e,r,{first:0===r,last:r===n-1,length:n})})}function h(e,t){var n=Object(r.useState)(e()),a=Object(u.a)(n,2),o=a[0],i=a[1];return Object(r.useMemo)(function(){var t=e(o);return t!==o&&i(o=t),o},t),[o,i]}n(29),n(31);var f,m=function(e){var t,n=e.num;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"Fret-number",style:{gridArea:"top / f".concat(n)}},n+1),a.a.createElement("div",{className:"Fret",style:{gridArea:"top-edge / f".concat(n," / bottom-edge / f").concat(n+1)}},2===(t=n)||4===t||6===t||8===t||14===t?a.a.createElement("span",{className:"dot single"}):11===t?a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"dot double1"}),a.a.createElement("span",{className:"dot double2"})):null))},d=(n(33),{quiz:"Note-quiz",indicator:"Note-indicator",chordRoot:"Note-chord-root"}),p=function(e){var t,n=e.note,r=e.type,o=e.showOctave,i=e.gridArea;return t="quiz"===(r=r||"indicator")?"?":a.a.createElement("span",null,n.tone,o?a.a.createElement("sub",null,n.octave):null),a.a.createElement("div",{className:"Note "+d[r],style:{gridArea:i}},t)},v=n(7),b=n(8),g={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},E=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];!function(e){e[e.Unison=0]="Unison",e[e.MinorSecond=1]="MinorSecond",e[e.MajorSecond=2]="MajorSecond",e[e.MinorThird=3]="MinorThird",e[e.MajorThird=4]="MajorThird",e[e.PerfectFourth=5]="PerfectFourth",e[e.Tritone=6]="Tritone",e[e.PerfectFifth=7]="PerfectFifth",e[e.MinorSixth=8]="MinorSixth",e[e.MajorSixth=9]="MajorSixth",e[e.MinorSeventh=10]="MinorSeventh",e[e.MajorSeventh=11]="MajorSeventh",e[e.Octave=12]="Octave"}(f||(f={}));var j=function(){function e(t,n){Object(v.a)(this,e),this.tone=t,this.octave=n}return Object(b.a)(e,[{key:"toString",value:function(){return this.tone}},{key:"toSpn",value:function(){return this.tone+this.octave}},{key:"toneEquals",value:function(e){return g[this.tone]===g[e.tone]}},{key:"equals",value:function(e){return this.toneEquals(e)&&this.octave===e.octave}}]),e}();function O(e){return"string"!==typeof e?e:3===e.length?new j(e[0]+e[1],parseInt(e[2])):new j(e[0],parseInt(e[1]))}function M(e,t){var n=g[O(e).tone],r=g[t]-n;return r<0&&(r+=12),r}function w(e,t){var n=g[e.tone],r=e.octave,a=n+t%12;return a<0?(a+=12,r--):a>=12&&(a-=12,r++),r+=t/12|0,new j(E[a],r)}var S=n(13),x=function(){function e(t,n){Object(v.a)(this,e),this.notes=void 0,this.shortName=void 0,this.longName=void 0;var r=t=O(t);this.notes=[r].concat(Object(c.a)(n.map(function(e){return w(r,e)})));var a=Object(S.a)(n),o=a[0],i=a[1],u=a[2],l=(a[3],a.slice(4),r.tone),s=r.tone;switch(i){case f.PerfectFifth:switch(o){case f.MajorThird:switch(u){case f.MinorSeventh:l+="m7",s+="min7";break;case f.MajorSeventh:}break;case f.MinorThird:switch(l+="m",s+="min",u){case f.MinorSeventh:l+="7",s+="7";break;case f.MajorSeventh:l+="/m7",s+="/maj7"}}break;case f.Tritone:if(u)switch(o){case f.MajorThird:switch(u){case f.MinorSeventh:l+="7\u266d5",s+="7dim5"}break;case f.MinorThird:switch(u){case f.MinorSeventh:l+="\xf87",s+="\xf87";break;case f.MajorSixth:l+="\xb07",s+="dim7"}}else l+="\xb0",s+="dim";break;case f.MinorSixth:switch(l+="+",s+="aug",u){case f.MinorSeventh:l+="7",s+="7";break;case f.MajorSeventh:l+="/m7",s+="/maj7"}}this.shortName=l,this.longName=s}return Object(b.a)(e,[{key:"rootNote",get:function(){return this.notes[0]}}]),e}();var y=function(){function e(t,n){Object(v.a)(this,e),this.name=t,this.notes=void 0,this.notes=n.map(O)}return Object(b.a)(e,[{key:"toString",value:function(){return this.notes.join("-")}},{key:"positionToNote",value:function(e,t){return w(this.notes[e],t)}}]),e}(),N=[new y("Standard",["E2","A2","D3","G3","B3","E4"]),new y("Open A",["E2","A2","C#3","E3","A3","E4"]),new y("Open B",["B2","F#2","B3","F#3","B3","D#4"]),new y("Open C",["C2","G2","C3","G3","C4","E4"]),new y("Open D",["D2","A2","D3","F#3","A3","D4"]),new y("Open E",["E2","B2","E3","G#3","B3","E4"]),new y("Open F",["F2","A2","C3","F3","C4","F4"]),new y("Open F#",["F#2","A#2","C#3","F#3","C#4","F#4"]),new y("Open G",["D2","G2","D3","G3","B3","D4"])],k=Object(r.createContext)({showOctave:!1,tuning:N[0],fretCount:14,update:function(){}}),F=100,C=function(e,t){return"s".concat(e+1," / span 1 / s").concat(e+1," / f").concat(t)};var A=function(e){var t=e.children,n=e.fretCount,o=e.tuning,i=e.notes,c=Object(r.useMemo)(function(){var e=function(e){for(var t=[],n=10,r=0;r<e;r++){var a=n/17.817;n-=a,t.push(a)}return t}(n);return[e,function(e){return"[start] auto [head] "+F+"px "+s(e,function(e,t,n){return(n.first?"[nut f0] ":"")+e+"fr [f"+(t+1)+(n.last?" fretboard-end]":"]")}).join(" ")+" auto [end]"}(e)]},[n]),l=Object(u.a)(c,2),h=l[0],f=l[1],d=Object(r.useContext)(k).showOctave,v=Object(r.useMemo)(function(){return function(e){var t=e.notes.length;return"[top] auto "+s(e.notes,function(e,n,r){return(r.first?"[top-edge ":"[")+"s"+(t-n)+"] 40px"}).join(" ")+" [bottom-edge s0]"}(o)},[o]);return a.a.createElement("div",{className:"Fretboard",style:{gridTemplateColumns:f,gridTemplateRows:v}},a.a.createElement("div",{className:"Fretboard-head",style:{gridArea:"top-edge / head / bottom-edge / nut"}}),a.a.createElement("div",{className:"Fretboard-fingerboard",style:{gridArea:"top-edge / nut / bottom-edge / fretboard-end"}}),t,i.map(function(e,t){return a.a.createElement(p,Object.assign({key:"note_"+t,showOctave:d},e))}),h.map(function(e,t){return a.a.createElement(m,{key:"fret"+t,num:t})}))},T=(n(35),function(e,t){var n=e.reduce(function(e,t,n){return t&&e.push(n),e},[]);return{type:"note",string:n[l(n.length)],fret:l(t)}}),D=function(e){var t=e.content,n=e.includedStrings,o=Object(r.useContext)(k),i=o.fretCount,c=o.tuning,l=Object(r.useState)(""),s=Object(u.a)(l,2),h=s[0],f=s[1],m=Object(r.useState)(null),d=Object(u.a)(m,2),p=d[0],v=d[1],b=Object(r.useState)(function(){return T(n,i)}),E=Object(u.a)(b,2),j=E[0],O=E[1],M=function(e){var t,r,a=c.positionToNote(j.string,j.fret);t=h,r=a.toString(),g.hasOwnProperty(t)&&g.hasOwnProperty(r)&&g[t]===g[r]?(O(T(n,i)),v({correct:!0,id:Date.now()})):v({correct:!1,id:Date.now()}),f(""),e.preventDefault()};n[j.string]||O(T(n,i));var w=[{note:c.positionToNote(j.string,j.fret),type:"quiz",gridArea:C(j.string,j.fret)}];return a.a.createElement(a.a.Fragment,null,t(w),a.a.createElement("div",{className:"Quiz"},a.a.createElement("form",{className:"Quiz-question",onSubmit:function(e){return M(e)}},a.a.createElement("h1",null,"What is the higlighted note?"),a.a.createElement("input",{className:"Quiz-answer-field",type:"text",value:h,onChange:function(e){return f(e.target.value)}}),p?a.a.createElement("div",{className:"Quiz-judgement "+(p.correct?"correct":"incorrect"),key:p.id},p.correct?"Correct":"Incorrect"):null)))},B=(n(37),function(e){var t=e.activeStrings,n=e.onToggle,o=Object(r.useContext)(k).tuning;return a.a.createElement(a.a.Fragment,null,o.notes.map(function(e,o,i){var c=i.length,u=Math.max(1,Math.round((c-(o+1))/c*3));return a.a.createElement(r.Fragment,{key:o},a.a.createElement("div",{onClick:function(){return n(o)},className:"GuitarStrings-root-note "+(t[o]?"included":"excluded"),style:{gridArea:"s".concat(o+1," / fretboard-end")}},e.tone),a.a.createElement("div",{className:"GuitarStrings-string",style:{height:"50%",gridArea:"s".concat(o," / head / s").concat(o+1," / fretboard-end"),borderBottom:"".concat(u,"px solid yellow")}}))}))}),q=n(16),R=function(){function e(t,n){var r=this;Object(v.a)(this,e),this.notes=t,this.bassNote=n,this.minFret=void 0,this.maxFret=void 0,this.distance=void 0,this.strValue=void 0;var a=t.filter(function(e){return null!==e});this.minFret=Math.min.apply(Math,Object(c.a)(a)),this.maxFret=Math.max.apply(Math,Object(c.a)(a)),this.distance=t.reduce(function(e,t){return e+(null===t?r.maxFret+1:t)},0),this.notes=t,this.strValue=this.notes.map(function(e){return null===e?"x":e}).join(" ")}return Object(b.a)(e,[{key:"toString",value:function(){return this.strValue}},{key:"equals",value:function(e){var t=e.notes;return this.notes.length===t.length&&!this.notes.some(function(e,n){return t[n]!==e})}}]),e}();function G(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3?arguments[3]:void 0,a=[];return function t(o,i,u,l){if(0!==o.length){for(var s=Object(S.a)(o),h=s[0],f=s.slice(1),m=i.filter(function(e){return null!==e}),d=Math.min.apply(Math,Object(c.a)(m)),p=Math.max.apply(Math,Object(c.a)(m)),v=0,b=function(e){for(var n=M(h,u[e].toString());n<r+1;n+=12){var a=Math.min(n,d);Math.max(n,p)-a>4||(t(f,Object(c.a)(i).concat([n]),u.filter(function(t,n){return n!==e}),Object(c.a)(l).concat([u[e]])),v++)}},g=0;g<u.length;g++)b(g);e.notes.length-i.length>u.length&&(Object(c.a)(l).concat(Object(c.a)(n)).forEach(function(e){for(var n=M(h,e.toString());n<r+1;n+=12){var a=Math.min(n,d);Math.max(n,p)-a>4||(t(f,Object(c.a)(i).concat([n]),u,l),v++)}}),0!==v&&0!==l.length||t(f,Object(c.a)(i).concat([null]),u,l))}else 0===u.length&&function(t){var n=t.findIndex(function(e){return null!==e}),r=w(e.notes[n],t[n]),o=new R(t,r);a.push(o)}(i)}(e.notes,[],t,[]),a.sort(function(e,t){return e.distance-t.distance}),a}n(39);var P=n(15),z=n.n(P),I=a.a.memo(function(e){var t=e.options,n=e.className,o=e.value,i=e.onSelect,c=Object(r.useRef)(null),l=Object(r.useState)(!1),s=Object(u.a)(l,2),h=s[0],f=(s[1],Object(r.useState)(null)),m=Object(u.a)(f,2),d=m[0],p=(m[1],Object(r.useState)("")),v=Object(u.a)(p,2),b=v[0],g=(v[1],Object(r.useState)(null)),E=Object(u.a)(g,2),j=E[0];E[1];function O(){if(c.current)c.current.querySelector('[role="option"]')}return a.a.createElement("ul",{ref:c,className:z()("Listbox",n),role:"listbox",onFocus:function(){j||O()},onKeyDown:function(e){var t=e.key;if(j){var n=document.getElementById(j);if(n)switch(t){case"PageUp":case"PageDown":h&&e.preventDefault();break;case"ArrowUp":case"ArrowDown":if(e.preventDefault(),h&&e.altKey)return;n="ArrowUp"===t?n.previousElementSibling:n.nextElementSibling;break;case"Home":e.preventDefault(),O();break;case"End":e.preventDefault(),function(){if(c.current){var e=c.current.querySelectorAll('[role="option"]');e.length&&e[e.length-1]}}();break;case"Space":e.preventDefault();break;case"Backspace":case"Delete":case"Return":if(!d)return;break;default:!function(e){if(!c.current)return null;var t=c.current.querySelectorAll('[role="option"]');if(b)for(var n=0;n<b.length;n++)t[n].getAttribute("id")}()}}}},t.map(function(e,t){return a.a.createElement("li",{key:t,className:z()("Listbox-item",{selected:o===e}),role:"option",onClick:function(){return i(e)}},e.toString())}))}),U=(n(41),function(){function e(t,n){Object(v.a)(this,e),this.value=t,this.label=void 0,this.label=n||this.value.toString()}return Object(b.a)(e,[{key:"toString",value:function(){return this.label}}]),e}()),Q=[new U("A"),new U("A#","A# / Db"),new U("B"),new U("C"),new U("C#","C# / Db"),new U("D"),new U("D#","D# / Eb"),new U("E"),new U("F"),new U("F#","F# / Gb"),new U("G"),new U("G#","G# / Ab")],V=["Root","3rd","5th","7th"],W={"Major triad":function(e){return new x(e,[f.MajorThird,f.PerfectFifth])},"Minor triad":function(e){return new x(e,[f.MinorThird,f.PerfectFifth])},"Augmented triad":function(e){return new x(e,[f.MajorThird,f.MinorSixth])},"Diminished triad":function(e){return new x(e,[f.MinorThird,f.Tritone])},"Major 6th":function(e){return new x(e,[f.MajorThird,f.PerfectFifth,f.MajorSixth])},"Minor 6th":function(e){return new x(e,[f.MinorThird,f.PerfectFifth,f.MajorSixth])},"7th":function(e){return new x(e,[f.MajorThird,f.PerfectFifth,f.MinorSeventh])},"Major 7th":function(e){return new x(e,[f.MajorThird,f.PerfectFifth,f.MajorSeventh])},"Minor 7th":function(e){return new x(e,[f.MinorThird,f.PerfectFifth,f.MinorSeventh])},"Augmented 7th":function(e){return new x(e,[f.MajorThird,f.MinorSixth,f.MinorSeventh])},"Diminished 7th":function(e){return new x(e,[f.MinorThird,f.Tritone,f.MajorSixth])},"Half-diminished 7th":function(e){return new x(e,[f.MinorThird,f.Tritone,f.MinorSeventh])},"Minor-major 7th":function(e){return new x(e,[f.MinorThird,f.PerfectFifth,f.MajorSeventh])}},H=Object.keys(W),J=function(e){var t=e.content,n=e.match,o=e.history,i=Object(r.useContext)(k),c=i.tuning,l=i.fretCount,s=n?n.params:{chordRoot:"A",chordType:"Major triad"},f=s.chordRoot,m=s.chordType;f=decodeURIComponent(f);var d=Q.find(function(e){return e.value==f})||Q[0],p=Object(r.useMemo)(function(){return W[m](d.value+"3")},[d,m]),v=h(function(){var e=p.notes.length>3;return p.notes.map(function(t,n){return{note:t,label:t.toString()+" ("+V[n]+")",status:0===n?"Bass":2===n&&e?"Optional":"Required"}})},[p]),b=Object(u.a)(v,2),g=b[0],E=b[1],j=Object(r.useMemo)(function(){var e=G(c,g.filter(function(e){return"Bass"===e.status||"Required"===e.status}).map(function(e){return e.note}),g.filter(function(e){return"Optional"===e.status}).map(function(e){return e.note}),l),t=g.find(function(e){return"Bass"===e.status});return t&&(e=e.filter(function(e){return e.bassNote.tone===t.note.tone})),e},[c,g]),O=h(function(e){if(e){var t=j.findIndex(function(t){return t.equals(e)});if(-1!=t)return j[t]}return j[0]},[j]),M=Object(u.a)(O,2),S=M[0],x=M[1],y=j.indexOf(S),N=function(e){e<0?e=0:e>=j.length&&(e=j.length-1),x(j[e])},F=Object(r.useMemo)(function(){var e=[];return S.notes.forEach(function(t,n){if(null!==t){var r=w(c.notes[n],t);e.push({type:r.tone===p.rootNote.tone?"chordRoot":"indicator",note:r,gridArea:C(n,t)})}}),e},[S]);return a.a.createElement(a.a.Fragment,null,t(F),a.a.createElement("div",{className:"Explorer"},a.a.createElement("label",{className:"Explorer-root Explorer-label"},"Root"),a.a.createElement(I,{className:"Explorer-chord Explorer-list",options:Q,value:d,onSelect:function(e){return o.push("/explore/".concat(encodeURIComponent(e.value),"/").concat(m))}}),a.a.createElement("label",{className:"Explorer-chord-type Explorer-label"},"Chord"),a.a.createElement(I,{className:"Explorer-chord-type Explorer-list",options:H,value:m,onSelect:function(e){return o.push("/explore/".concat(encodeURIComponent(d.value),"/").concat(e))}}),a.a.createElement("label",{className:"Explorer-chord-notes Explorer-label"},"Notes"),a.a.createElement("div",{className:"Explorer-chord-notes Explorer-list"},g.map(function(e,t){var n=function(e){return n=t,r=e.currentTarget.value,void E(g.map(function(e,t){return n===t?Object(q.a)({},e,{status:r}):"Bass"===r&&"Bass"===e.status?Object(q.a)({},e,{status:"Required"}):e}));var n,r};return a.a.createElement(a.a.Fragment,{key:t},a.a.createElement("span",{className:"Explorer-chord-note-label"},e.label,":"),a.a.createElement("label",null,a.a.createElement("input",{type:"radio",value:"Bass",checked:"Bass"===e.status,onChange:n})," Bass"),a.a.createElement("label",null,a.a.createElement("input",{type:"radio",value:"Required",checked:"Required"===e.status,onChange:n})," Required"),a.a.createElement("label",null,a.a.createElement("input",{type:"radio",value:"Optional",checked:"Optional"===e.status,onChange:n})," Optional"),a.a.createElement("label",null,a.a.createElement("input",{type:"radio",value:"Omitted",checked:"Omitted"===e.status,onChange:n})," Omitted"))})),a.a.createElement("label",{className:"Explorer-voicings Explorer-label"},j.length," Voicings"),a.a.createElement(I,{className:"Explorer-voicings Explorer-list",options:j,value:S,onSelect:function(e){return x(e)}}),a.a.createElement("div",{className:"Explorer-voicings-nav"},a.a.createElement("button",{onClick:function(){return N(0)}},"|<"),a.a.createElement("button",{onClick:function(){return N(y-1)}},"<"),a.a.createElement("button",{onClick:function(){return N(y+1)}},">"),a.a.createElement("button",{onClick:function(){return N(j.length-1)}},">|"))))},K=(n(43),function(){var e=Object(r.useContext)(k),t=e.tuning,n=e.showOctave,o=e.update;return a.a.createElement("div",{className:"Settings"},a.a.createElement("label",{htmlFor:"tuning"},"Tuning"),a.a.createElement("select",{className:"Settings-tuning",value:t.name,onChange:function(e){o({tuning:N.find(function(t){return t.name===e.currentTarget.value})||t})},id:"tuning"},N.map(function(e,t){return a.a.createElement("option",{key:t},e.name)})),a.a.createElement("label",{className:"Settings-show-octave"},a.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return o({showOctave:!n})}})," Show octave"))}),L=n(51),$=n(53),_=n(49),X=n(52),Y=function(){var e=Object(r.useState)(N[0]),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(!0),l=Object(u.a)(i,2),s=l[0],h=l[1],f=Object(r.useState)(function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[],r=0;r<e;r++)n.push(t);return n}(n.notes.length)),m=Object(u.a)(f,2),d=m[0],p=m[1],v=function(e){var t=Object(c.a)(d);t[e]=!t[e],p(t)},b=function(e){return a.a.createElement(A,{fretCount:15,tuning:n,notes:e},a.a.createElement(B,{activeStrings:d,onToggle:v}))};return a.a.createElement(L.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(k.Provider,{value:{showOctave:s,tuning:n,fretCount:15,update:function(e){"undefined"!==typeof e.showOctave&&h(e.showOctave),e.tuning&&o(e.tuning)}}},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",{className:"App-title"},"Fretfull"),a.a.createElement("nav",{className:"App-nav"},a.a.createElement($.a,{className:"App-explore-link",to:"/explore"},"Explore"),a.a.createElement($.a,{className:"App-quiz-link",to:"/quiz"},"Quiz")),a.a.createElement(K,null)),a.a.createElement(_.a,{exact:!0,path:"/",render:function(){return a.a.createElement(X.a,{to:"/explore/A/Major triad"})}}),a.a.createElement(_.a,{exact:!0,path:"/explore",render:function(){return a.a.createElement(X.a,{to:"/explore/A/Major triad"})}}),a.a.createElement(_.a,{exact:!0,path:"/explore/:chordRoot/:chordType",render:function(e){return a.a.createElement(J,Object.assign({content:b},e))}}),a.a.createElement(_.a,{path:"/quiz",render:function(){return a.a.createElement(D,{includedStrings:d,content:b})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.322e22b3.chunk.js.map