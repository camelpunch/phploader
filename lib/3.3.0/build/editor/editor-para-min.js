YUI.add("editor-para",function(A){var D=function(){D.superclass.constructor.apply(this,arguments);},K="host",F="body",C="nodeChange",J="parentNode",B=F+" > p",H="p",G="<br>",I="firstChild",E="li";A.extend(D,A.Base,{_fixFirstPara:function(){var O=this.get(K),Q=O.getInstance(),P,R,L=Q.config.doc.body,N=L.innerHTML,M=((N.length)?true:false);if(N===G){N="";M=false;}L.innerHTML="<"+H+">"+N+Q.Selection.CURSOR+"</"+H+">";R=Q.one(B);P=new Q.Selection();P.selectNode(R,true,M);},_onNodeChange:function(s){var f=this.get(K),O=f.getInstance(),U,a,Z,v,o,h=O.Selection.DEFAULT_BLOCK_TAG,W,N,Q,q,S,L,g,l,R,m,x,u,j,Y,X,r=":last-child";switch(s.changedType){case"enter-up":var M=((this._lastPara)?this._lastPara:s.changedNode),w=M.one("br.yui-cursor");if(this._lastPara){delete this._lastPara;}if(w){if(w.previous()||w.next()){if(w.ancestor(H)){w.remove();}}}if(!M.test(h)){var c=M.ancestor(h);if(c){M=c;c=null;}}if(M.test(h)){var i=M.previous(),k,T,V=false;if(i){k=i.one(r);while(!V){if(k){T=k.one(r);if(T){k=T;}else{V=true;}}else{V=true;}}if(k){f.copyStyles(k,M);}}}break;case"enter":if(A.UA.ie){if(s.changedNode.test("br")){s.changedNode.remove();}else{if(s.changedNode.test("p, span")){var w=s.changedNode.one("br.yui-cursor");if(w){w.remove();}}}}if(A.UA.webkit){if(s.changedEvent.shiftKey){f.execCommand("insertbr");s.changedEvent.preventDefault();}}if(A.UA.gecko&&f.get("defaultblock")!=="p"){Z=s.changedNode;if(!Z.test(E)&&!Z.ancestor(E)){if(!Z.test(h)){Z=Z.ancestor(h);}v=O.Node.create("<"+h+"></"+h+">");Z.insert(v,"after");o=new O.Selection();if(o.anchorOffset){W=o.anchorNode.get("textContent");a=O.one(O.config.doc.createTextNode(W.substr(0,o.anchorOffset)));N=O.one(O.config.doc.createTextNode(W.substr(o.anchorOffset)));q=o.anchorNode;q.setContent("");L=q.cloneNode();L.append(N);g=false;R=q;while(!g){R=R.get(J);if(R&&!R.test(h)){l=R.cloneNode();l.set("innerHTML","");l.append(L);Q=R.get("childNodes");var P=false;Q.each(function(b){if(P){l.append(b);}if(b===q){P=true;}});q=R;L=l;}else{g=true;}}N=L;o.anchorNode.append(a);if(N){v.append(N);}}if(v.get(I)){v=v.get(I);}v.prepend(O.Selection.CURSOR);o.focusCursor(true,true);U=O.Selection.getText(v);if(U!==""){O.Selection.cleanCursor();}s.changedEvent.preventDefault();}}break;case"keyup":if(A.UA.gecko){if(O.config.doc&&O.config.doc.body&&O.config.doc.body.innerHTML.length<2){this._fixFirstPara();}}break;case"backspace-up":case"backspace-down":case"delete-up":if(!A.UA.ie){m=O.all(B);u=O.one(F);if(m.item(0)){u=m.item(0);}x=u.one("br");if(x){x.removeAttribute("id");x.removeAttribute("class");}a=O.Selection.getText(u);a=a.replace(/ /g,"").replace(/\n/g,"");Y=u.all("img");if(a.length===0&&!Y.size()){if(!u.test(H)){this._fixFirstPara();}j=null;if(s.changedNode&&s.changedNode.test(H)){j=s.changedNode;}if(!j&&f._lastPara&&f._lastPara.inDoc()){j=f._lastPara;}if(j&&!j.test(H)){j=j.ancestor(H);}if(j){if(!j.previous()&&j.get(J)&&j.get(J).test(F)){s.changedEvent.frameEvent.halt();}}}if(A.UA.webkit){if(s.changedNode){u=s.changedNode;if(u.test("li")&&(!u.previous()&&!u.next())){U=u.get("innerHTML").replace(G,"");if(U===""){if(u.get(J)){u.get(J).replace(O.Node.create(G));s.changedEvent.frameEvent.halt();s.preventDefault();O.Selection.filterBlocks();}}}}}}if(A.UA.gecko){v=s.changedNode;X=O.config.doc.createTextNode(" ");v.appendChild(X);v.removeChild(X);}break;}if(A.UA.gecko){if(s.changedNode&&!s.changedNode.test(h)){j=s.changedNode.ancestor(h);if(j){this._lastPara=j;}}}},_afterEditorReady:function(){var M=this.get(K),N=M.getInstance(),L;if(N){N.Selection.filterBlocks();L=N.Selection.DEFAULT_BLOCK_TAG;B=F+" > "+L;H=L;}},_afterContentChange:function(){var L=this.get(K),M=L.getInstance();if(M&&M.Selection){M.Selection.filterBlocks();}},_afterPaste:function(){var L=this.get(K),N=L.getInstance(),M=new N.Selection();A.later(50,L,function(){N.Selection.filterBlocks();});},initializer:function(){var L=this.get(K);if(L.editorBR){A.error("Can not plug EditorPara and EditorBR at the same time.");return;}L.on(C,A.bind(this._onNodeChange,this));L.after("ready",A.bind(this._afterEditorReady,this));L.after("contentChange",A.bind(this._afterContentChange,this));if(A.Env.webkit){L.after("dom:paste",A.bind(this._afterPaste,this));}}},{NAME:"editorPara",NS:"editorPara",ATTRS:{host:{value:false}}});A.namespace("Plugin");A.Plugin.EditorPara=D;},"@VERSION@",{skinnable:false,requires:["node"]});