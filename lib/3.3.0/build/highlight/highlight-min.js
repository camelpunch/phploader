YUI.add("highlight-base",function(h){var g=h.Array,e=h.Escape,d=h.Text.WordBreak,a=h.Lang.isArray,f={},c="(&[^;\\s]*)?",b={_REGEX:c+"(%needles)",_REPLACER:function(i,k,j){return k&&!(/\s/).test(j)?i:b._TEMPLATE.replace(/\{s\}/g,j);},_START_REGEX:"^"+c+"(%needles)",_TEMPLATE:'<b class="yui3-highlight">{s}</b>',all:function(r,j,s){var p=[],o,m,n,l,q,k;if(!s){s=f;}o=s.escapeHTML!==false;q=s.startsWith?b._START_REGEX:b._REGEX;k=s.replacer||b._REPLACER;j=a(j)?j:[j];for(m=0,n=j.length;m<n;++m){l=j[m];if(l){p.push(e.regex(o?e.html(l):l));}}if(o){r=e.html(r);}if(!p.length){return r;}return r.replace(new RegExp(q.replace("%needles",p.join("|")),s.caseSensitive?"g":"gi"),k);},allCase:function(k,j,i){return b.all(k,j,h.merge(i||f,{caseSensitive:true}));},start:function(k,j,i){return b.all(k,j,h.merge(i||f,{startsWith:true}));},startCase:function(j,i){return b.start(j,i,{caseSensitive:true});},words:function(m,l,j){var i,o,k=b._TEMPLATE,n;if(!j){j=f;}i=!!j.caseSensitive;l=g.hash(a(l)?l:d.getUniqueWords(l,{ignoreCase:!i}));o=j.mapper||function(q,p){if(p.hasOwnProperty(i?q:q.toLowerCase())){return k.replace(/\{s\}/g,e.html(q));}return e.html(q);};n=d.getWords(m,{includePunctuation:true,includeWhitespace:true});return g.map(n,function(p){return o(p,l);}).join("");},wordsCase:function(j,i){return b.words(j,i,{caseSensitive:true});}};h.Highlight=b;},"@VERSION@",{requires:["array-extras","escape","text-wordbreak"]});YUI.add("highlight-accentfold",function(e){var d=e.Text.AccentFold,b=e.Escape,c={},a=e.mix(e.Highlight,{allFold:function(o,f,q){var n=a._TEMPLATE,g=[],l=0,m,h,k,j,p;q=e.merge({escapeHTML:false,replacer:function(r,t,s,u){var i;if(t&&!(/\s/).test(s)){return r;}i=s.length;g.push([o.substring(l,u),o.substr(u,i)]);l=u+i;}},q||c);a.all(d.fold(o),d.fold(f),q);if(l<o.length-1){g.push([o.substr(l)]);}for(h=0,k=g.length;h<k;++h){m=b.html(g[h][0]);if((j=g[h][1])){m+=n.replace(/\{s\}/g,b.html(j));}g[h]=m;}return g.join("");},startFold:function(g,f){return a.allFold(g,f,{startsWith:true});},wordsFold:function(h,g){var f=a._TEMPLATE;return a.words(h,d.fold(g),{mapper:function(j,i){if(i.hasOwnProperty(d.fold(j))){return f.replace(/\{s\}/g,b.html(j));}return b.html(j);}});}});},"@VERSION@",{requires:["highlight-base","text-accentfold"]});YUI.add("highlight",function(a){},"@VERSION@",{use:["highlight-base","highlight-accentfold"]});