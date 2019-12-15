goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48222 = coll;
var G__48223 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48222,G__48223) : shadow.dom.lazy_native_coll_seq.call(null,G__48222,G__48223));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48239 = arguments.length;
switch (G__48239) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48241 = arguments.length;
switch (G__48241) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48245 = arguments.length;
switch (G__48245) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48258 = arguments.length;
switch (G__48258) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48277 = arguments.length;
switch (G__48277) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__48279 = document;
var G__48280 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48279,G__48280);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__48281 = shadow.dom.dom_node(parent);
var G__48282 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48281,G__48282);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__48284 = shadow.dom.dom_node(el);
var G__48285 = cls;
return goog.dom.classlist.add(G__48284,G__48285);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__48286 = shadow.dom.dom_node(el);
var G__48287 = cls;
return goog.dom.classlist.remove(G__48286,G__48287);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48289 = arguments.length;
switch (G__48289) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__48291 = shadow.dom.dom_node(el);
var G__48292 = cls;
return goog.dom.classlist.toggle(G__48291,G__48292);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48293){if((e48293 instanceof Object)){
var e = e48293;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48293;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48296 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48297 = null;
var count__48298 = (0);
var i__48299 = (0);
while(true){
if((i__48299 < count__48298)){
var el = chunk__48297.cljs$core$IIndexed$_nth$arity$2(null,i__48299);
var handler_48915__$1 = ((function (seq__48296,chunk__48297,count__48298,i__48299,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48296,chunk__48297,count__48298,i__48299,el))
;
var G__48306_48916 = el;
var G__48307_48917 = cljs.core.name(ev);
var G__48308_48918 = handler_48915__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48306_48916,G__48307_48917,G__48308_48918) : shadow.dom.dom_listen.call(null,G__48306_48916,G__48307_48917,G__48308_48918));


var G__48919 = seq__48296;
var G__48920 = chunk__48297;
var G__48921 = count__48298;
var G__48922 = (i__48299 + (1));
seq__48296 = G__48919;
chunk__48297 = G__48920;
count__48298 = G__48921;
i__48299 = G__48922;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48296);
if(temp__5735__auto__){
var seq__48296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48296__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48296__$1);
var G__48923 = cljs.core.chunk_rest(seq__48296__$1);
var G__48924 = c__4609__auto__;
var G__48925 = cljs.core.count(c__4609__auto__);
var G__48926 = (0);
seq__48296 = G__48923;
chunk__48297 = G__48924;
count__48298 = G__48925;
i__48299 = G__48926;
continue;
} else {
var el = cljs.core.first(seq__48296__$1);
var handler_48927__$1 = ((function (seq__48296,chunk__48297,count__48298,i__48299,el,seq__48296__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48296,chunk__48297,count__48298,i__48299,el,seq__48296__$1,temp__5735__auto__))
;
var G__48309_48928 = el;
var G__48310_48929 = cljs.core.name(ev);
var G__48311_48930 = handler_48927__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48309_48928,G__48310_48929,G__48311_48930) : shadow.dom.dom_listen.call(null,G__48309_48928,G__48310_48929,G__48311_48930));


var G__48931 = cljs.core.next(seq__48296__$1);
var G__48932 = null;
var G__48933 = (0);
var G__48934 = (0);
seq__48296 = G__48931;
chunk__48297 = G__48932;
count__48298 = G__48933;
i__48299 = G__48934;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48313 = arguments.length;
switch (G__48313) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__48320 = shadow.dom.dom_node(el);
var G__48321 = cljs.core.name(ev);
var G__48322 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48320,G__48321,G__48322) : shadow.dom.dom_listen.call(null,G__48320,G__48321,G__48322));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48324 = shadow.dom.dom_node(el);
var G__48325 = cljs.core.name(ev);
var G__48326 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48324,G__48325,G__48326) : shadow.dom.dom_listen_remove.call(null,G__48324,G__48325,G__48326));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48330 = cljs.core.seq(events);
var chunk__48331 = null;
var count__48332 = (0);
var i__48333 = (0);
while(true){
if((i__48333 < count__48332)){
var vec__48340 = chunk__48331.cljs$core$IIndexed$_nth$arity$2(null,i__48333);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48340,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48938 = seq__48330;
var G__48939 = chunk__48331;
var G__48940 = count__48332;
var G__48941 = (i__48333 + (1));
seq__48330 = G__48938;
chunk__48331 = G__48939;
count__48332 = G__48940;
i__48333 = G__48941;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48330);
if(temp__5735__auto__){
var seq__48330__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48330__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48330__$1);
var G__48942 = cljs.core.chunk_rest(seq__48330__$1);
var G__48943 = c__4609__auto__;
var G__48944 = cljs.core.count(c__4609__auto__);
var G__48945 = (0);
seq__48330 = G__48942;
chunk__48331 = G__48943;
count__48332 = G__48944;
i__48333 = G__48945;
continue;
} else {
var vec__48343 = cljs.core.first(seq__48330__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48947 = cljs.core.next(seq__48330__$1);
var G__48948 = null;
var G__48949 = (0);
var G__48950 = (0);
seq__48330 = G__48947;
chunk__48331 = G__48948;
count__48332 = G__48949;
i__48333 = G__48950;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48346 = cljs.core.seq(styles);
var chunk__48347 = null;
var count__48348 = (0);
var i__48349 = (0);
while(true){
if((i__48349 < count__48348)){
var vec__48364 = chunk__48347.cljs$core$IIndexed$_nth$arity$2(null,i__48349);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48364,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48364,(1),null);
var G__48367_48952 = dom;
var G__48368_48953 = cljs.core.name(k);
var G__48369_48954 = (((v == null))?"":v);
goog.style.setStyle(G__48367_48952,G__48368_48953,G__48369_48954);


var G__48955 = seq__48346;
var G__48956 = chunk__48347;
var G__48957 = count__48348;
var G__48958 = (i__48349 + (1));
seq__48346 = G__48955;
chunk__48347 = G__48956;
count__48348 = G__48957;
i__48349 = G__48958;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48346);
if(temp__5735__auto__){
var seq__48346__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48346__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48346__$1);
var G__48959 = cljs.core.chunk_rest(seq__48346__$1);
var G__48960 = c__4609__auto__;
var G__48961 = cljs.core.count(c__4609__auto__);
var G__48962 = (0);
seq__48346 = G__48959;
chunk__48347 = G__48960;
count__48348 = G__48961;
i__48349 = G__48962;
continue;
} else {
var vec__48372 = cljs.core.first(seq__48346__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372,(1),null);
var G__48375_48963 = dom;
var G__48376_48964 = cljs.core.name(k);
var G__48377_48965 = (((v == null))?"":v);
goog.style.setStyle(G__48375_48963,G__48376_48964,G__48377_48965);


var G__48967 = cljs.core.next(seq__48346__$1);
var G__48968 = null;
var G__48969 = (0);
var G__48970 = (0);
seq__48346 = G__48967;
chunk__48347 = G__48968;
count__48348 = G__48969;
i__48349 = G__48970;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48380_48971 = key;
var G__48380_48972__$1 = (((G__48380_48971 instanceof cljs.core.Keyword))?G__48380_48971.fqn:null);
switch (G__48380_48972__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48976 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48976,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48976,"aria-");
}
})())){
el.setAttribute(ks_48976,value);
} else {
(el[ks_48976] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__48398 = shadow.dom.dom_node(el);
var G__48399 = cls;
return goog.dom.classlist.contains(G__48398,G__48399);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48403){
var map__48404 = p__48403;
var map__48404__$1 = (((((!((map__48404 == null))))?(((((map__48404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48404):map__48404);
var props = map__48404__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48404__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48406 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48406,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48406,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48406,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48411 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48411,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48411;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48415 = arguments.length;
switch (G__48415) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48423){
var vec__48425 = p__48423;
var seq__48426 = cljs.core.seq(vec__48425);
var first__48427 = cljs.core.first(seq__48426);
var seq__48426__$1 = cljs.core.next(seq__48426);
var nn = first__48427;
var first__48427__$1 = cljs.core.first(seq__48426__$1);
var seq__48426__$2 = cljs.core.next(seq__48426__$1);
var np = first__48427__$1;
var nc = seq__48426__$2;
var node = vec__48425;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48431 = nn;
var G__48432 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48431,G__48432) : create_fn.call(null,G__48431,G__48432));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48434 = nn;
var G__48435 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48434,G__48435) : create_fn.call(null,G__48434,G__48435));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48437 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48437,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48437,(1),null);
var seq__48440_49004 = cljs.core.seq(node_children);
var chunk__48441_49005 = null;
var count__48442_49006 = (0);
var i__48443_49007 = (0);
while(true){
if((i__48443_49007 < count__48442_49006)){
var child_struct_49009 = chunk__48441_49005.cljs$core$IIndexed$_nth$arity$2(null,i__48443_49007);
var children_49010 = shadow.dom.dom_node(child_struct_49009);
if(cljs.core.seq_QMARK_(children_49010)){
var seq__48465_49011 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49010));
var chunk__48467_49012 = null;
var count__48468_49013 = (0);
var i__48469_49014 = (0);
while(true){
if((i__48469_49014 < count__48468_49013)){
var child_49016 = chunk__48467_49012.cljs$core$IIndexed$_nth$arity$2(null,i__48469_49014);
if(cljs.core.truth_(child_49016)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49016);


var G__49017 = seq__48465_49011;
var G__49018 = chunk__48467_49012;
var G__49019 = count__48468_49013;
var G__49020 = (i__48469_49014 + (1));
seq__48465_49011 = G__49017;
chunk__48467_49012 = G__49018;
count__48468_49013 = G__49019;
i__48469_49014 = G__49020;
continue;
} else {
var G__49021 = seq__48465_49011;
var G__49022 = chunk__48467_49012;
var G__49023 = count__48468_49013;
var G__49024 = (i__48469_49014 + (1));
seq__48465_49011 = G__49021;
chunk__48467_49012 = G__49022;
count__48468_49013 = G__49023;
i__48469_49014 = G__49024;
continue;
}
} else {
var temp__5735__auto___49025 = cljs.core.seq(seq__48465_49011);
if(temp__5735__auto___49025){
var seq__48465_49027__$1 = temp__5735__auto___49025;
if(cljs.core.chunked_seq_QMARK_(seq__48465_49027__$1)){
var c__4609__auto___49028 = cljs.core.chunk_first(seq__48465_49027__$1);
var G__49029 = cljs.core.chunk_rest(seq__48465_49027__$1);
var G__49030 = c__4609__auto___49028;
var G__49031 = cljs.core.count(c__4609__auto___49028);
var G__49032 = (0);
seq__48465_49011 = G__49029;
chunk__48467_49012 = G__49030;
count__48468_49013 = G__49031;
i__48469_49014 = G__49032;
continue;
} else {
var child_49033 = cljs.core.first(seq__48465_49027__$1);
if(cljs.core.truth_(child_49033)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49033);


var G__49034 = cljs.core.next(seq__48465_49027__$1);
var G__49035 = null;
var G__49036 = (0);
var G__49037 = (0);
seq__48465_49011 = G__49034;
chunk__48467_49012 = G__49035;
count__48468_49013 = G__49036;
i__48469_49014 = G__49037;
continue;
} else {
var G__49038 = cljs.core.next(seq__48465_49027__$1);
var G__49039 = null;
var G__49040 = (0);
var G__49041 = (0);
seq__48465_49011 = G__49038;
chunk__48467_49012 = G__49039;
count__48468_49013 = G__49040;
i__48469_49014 = G__49041;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49010);
}


var G__49042 = seq__48440_49004;
var G__49043 = chunk__48441_49005;
var G__49044 = count__48442_49006;
var G__49045 = (i__48443_49007 + (1));
seq__48440_49004 = G__49042;
chunk__48441_49005 = G__49043;
count__48442_49006 = G__49044;
i__48443_49007 = G__49045;
continue;
} else {
var temp__5735__auto___49046 = cljs.core.seq(seq__48440_49004);
if(temp__5735__auto___49046){
var seq__48440_49047__$1 = temp__5735__auto___49046;
if(cljs.core.chunked_seq_QMARK_(seq__48440_49047__$1)){
var c__4609__auto___49048 = cljs.core.chunk_first(seq__48440_49047__$1);
var G__49050 = cljs.core.chunk_rest(seq__48440_49047__$1);
var G__49051 = c__4609__auto___49048;
var G__49052 = cljs.core.count(c__4609__auto___49048);
var G__49053 = (0);
seq__48440_49004 = G__49050;
chunk__48441_49005 = G__49051;
count__48442_49006 = G__49052;
i__48443_49007 = G__49053;
continue;
} else {
var child_struct_49057 = cljs.core.first(seq__48440_49047__$1);
var children_49058 = shadow.dom.dom_node(child_struct_49057);
if(cljs.core.seq_QMARK_(children_49058)){
var seq__48471_49059 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49058));
var chunk__48473_49060 = null;
var count__48474_49061 = (0);
var i__48475_49062 = (0);
while(true){
if((i__48475_49062 < count__48474_49061)){
var child_49063 = chunk__48473_49060.cljs$core$IIndexed$_nth$arity$2(null,i__48475_49062);
if(cljs.core.truth_(child_49063)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49063);


var G__49064 = seq__48471_49059;
var G__49065 = chunk__48473_49060;
var G__49066 = count__48474_49061;
var G__49067 = (i__48475_49062 + (1));
seq__48471_49059 = G__49064;
chunk__48473_49060 = G__49065;
count__48474_49061 = G__49066;
i__48475_49062 = G__49067;
continue;
} else {
var G__49068 = seq__48471_49059;
var G__49069 = chunk__48473_49060;
var G__49070 = count__48474_49061;
var G__49071 = (i__48475_49062 + (1));
seq__48471_49059 = G__49068;
chunk__48473_49060 = G__49069;
count__48474_49061 = G__49070;
i__48475_49062 = G__49071;
continue;
}
} else {
var temp__5735__auto___49072__$1 = cljs.core.seq(seq__48471_49059);
if(temp__5735__auto___49072__$1){
var seq__48471_49073__$1 = temp__5735__auto___49072__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48471_49073__$1)){
var c__4609__auto___49074 = cljs.core.chunk_first(seq__48471_49073__$1);
var G__49075 = cljs.core.chunk_rest(seq__48471_49073__$1);
var G__49076 = c__4609__auto___49074;
var G__49077 = cljs.core.count(c__4609__auto___49074);
var G__49078 = (0);
seq__48471_49059 = G__49075;
chunk__48473_49060 = G__49076;
count__48474_49061 = G__49077;
i__48475_49062 = G__49078;
continue;
} else {
var child_49079 = cljs.core.first(seq__48471_49073__$1);
if(cljs.core.truth_(child_49079)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49079);


var G__49080 = cljs.core.next(seq__48471_49073__$1);
var G__49081 = null;
var G__49082 = (0);
var G__49083 = (0);
seq__48471_49059 = G__49080;
chunk__48473_49060 = G__49081;
count__48474_49061 = G__49082;
i__48475_49062 = G__49083;
continue;
} else {
var G__49084 = cljs.core.next(seq__48471_49073__$1);
var G__49085 = null;
var G__49086 = (0);
var G__49087 = (0);
seq__48471_49059 = G__49084;
chunk__48473_49060 = G__49085;
count__48474_49061 = G__49086;
i__48475_49062 = G__49087;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49058);
}


var G__49088 = cljs.core.next(seq__48440_49047__$1);
var G__49089 = null;
var G__49090 = (0);
var G__49091 = (0);
seq__48440_49004 = G__49088;
chunk__48441_49005 = G__49089;
count__48442_49006 = G__49090;
i__48443_49007 = G__49091;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48490 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48490);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48504 = cljs.core.seq(node);
var chunk__48505 = null;
var count__48506 = (0);
var i__48507 = (0);
while(true){
if((i__48507 < count__48506)){
var n = chunk__48505.cljs$core$IIndexed$_nth$arity$2(null,i__48507);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49115 = seq__48504;
var G__49116 = chunk__48505;
var G__49117 = count__48506;
var G__49118 = (i__48507 + (1));
seq__48504 = G__49115;
chunk__48505 = G__49116;
count__48506 = G__49117;
i__48507 = G__49118;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48504);
if(temp__5735__auto__){
var seq__48504__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48504__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48504__$1);
var G__49121 = cljs.core.chunk_rest(seq__48504__$1);
var G__49122 = c__4609__auto__;
var G__49123 = cljs.core.count(c__4609__auto__);
var G__49124 = (0);
seq__48504 = G__49121;
chunk__48505 = G__49122;
count__48506 = G__49123;
i__48507 = G__49124;
continue;
} else {
var n = cljs.core.first(seq__48504__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49125 = cljs.core.next(seq__48504__$1);
var G__49126 = null;
var G__49127 = (0);
var G__49128 = (0);
seq__48504 = G__49125;
chunk__48505 = G__49126;
count__48506 = G__49127;
i__48507 = G__49128;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48511 = shadow.dom.dom_node(new$);
var G__48513 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48511,G__48513);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48518 = arguments.length;
switch (G__48518) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48527 = arguments.length;
switch (G__48527) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48534 = arguments.length;
switch (G__48534) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49155 = arguments.length;
var i__4790__auto___49156 = (0);
while(true){
if((i__4790__auto___49156 < len__4789__auto___49155)){
args__4795__auto__.push((arguments[i__4790__auto___49156]));

var G__49157 = (i__4790__auto___49156 + (1));
i__4790__auto___49156 = G__49157;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48538_49158 = cljs.core.seq(nodes);
var chunk__48539_49159 = null;
var count__48540_49160 = (0);
var i__48541_49161 = (0);
while(true){
if((i__48541_49161 < count__48540_49160)){
var node_49162 = chunk__48539_49159.cljs$core$IIndexed$_nth$arity$2(null,i__48541_49161);
fragment.appendChild(shadow.dom._to_dom(node_49162));


var G__49163 = seq__48538_49158;
var G__49164 = chunk__48539_49159;
var G__49165 = count__48540_49160;
var G__49166 = (i__48541_49161 + (1));
seq__48538_49158 = G__49163;
chunk__48539_49159 = G__49164;
count__48540_49160 = G__49165;
i__48541_49161 = G__49166;
continue;
} else {
var temp__5735__auto___49167 = cljs.core.seq(seq__48538_49158);
if(temp__5735__auto___49167){
var seq__48538_49168__$1 = temp__5735__auto___49167;
if(cljs.core.chunked_seq_QMARK_(seq__48538_49168__$1)){
var c__4609__auto___49173 = cljs.core.chunk_first(seq__48538_49168__$1);
var G__49174 = cljs.core.chunk_rest(seq__48538_49168__$1);
var G__49175 = c__4609__auto___49173;
var G__49176 = cljs.core.count(c__4609__auto___49173);
var G__49177 = (0);
seq__48538_49158 = G__49174;
chunk__48539_49159 = G__49175;
count__48540_49160 = G__49176;
i__48541_49161 = G__49177;
continue;
} else {
var node_49178 = cljs.core.first(seq__48538_49168__$1);
fragment.appendChild(shadow.dom._to_dom(node_49178));


var G__49179 = cljs.core.next(seq__48538_49168__$1);
var G__49180 = null;
var G__49181 = (0);
var G__49182 = (0);
seq__48538_49158 = G__49179;
chunk__48539_49159 = G__49180;
count__48540_49160 = G__49181;
i__48541_49161 = G__49182;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48535){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48535));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48548_49185 = cljs.core.seq(scripts);
var chunk__48549_49186 = null;
var count__48550_49187 = (0);
var i__48551_49188 = (0);
while(true){
if((i__48551_49188 < count__48550_49187)){
var vec__48561_49189 = chunk__48549_49186.cljs$core$IIndexed$_nth$arity$2(null,i__48551_49188);
var script_tag_49190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48561_49189,(0),null);
var script_body_49191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48561_49189,(1),null);
eval(script_body_49191);


var G__49196 = seq__48548_49185;
var G__49197 = chunk__48549_49186;
var G__49198 = count__48550_49187;
var G__49199 = (i__48551_49188 + (1));
seq__48548_49185 = G__49196;
chunk__48549_49186 = G__49197;
count__48550_49187 = G__49198;
i__48551_49188 = G__49199;
continue;
} else {
var temp__5735__auto___49200 = cljs.core.seq(seq__48548_49185);
if(temp__5735__auto___49200){
var seq__48548_49201__$1 = temp__5735__auto___49200;
if(cljs.core.chunked_seq_QMARK_(seq__48548_49201__$1)){
var c__4609__auto___49202 = cljs.core.chunk_first(seq__48548_49201__$1);
var G__49204 = cljs.core.chunk_rest(seq__48548_49201__$1);
var G__49205 = c__4609__auto___49202;
var G__49206 = cljs.core.count(c__4609__auto___49202);
var G__49207 = (0);
seq__48548_49185 = G__49204;
chunk__48549_49186 = G__49205;
count__48550_49187 = G__49206;
i__48551_49188 = G__49207;
continue;
} else {
var vec__48564_49209 = cljs.core.first(seq__48548_49201__$1);
var script_tag_49210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48564_49209,(0),null);
var script_body_49211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48564_49209,(1),null);
eval(script_body_49211);


var G__49213 = cljs.core.next(seq__48548_49201__$1);
var G__49214 = null;
var G__49215 = (0);
var G__49216 = (0);
seq__48548_49185 = G__49213;
chunk__48549_49186 = G__49214;
count__48550_49187 = G__49215;
i__48551_49188 = G__49216;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48568){
var vec__48570 = p__48568;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48570,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48570,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48576 = shadow.dom.dom_node(el);
var G__48577 = cls;
return goog.dom.getAncestorByClass(G__48576,G__48577);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48582 = arguments.length;
switch (G__48582) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48585 = shadow.dom.dom_node(el);
var G__48586 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48585,G__48586);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48587 = shadow.dom.dom_node(el);
var G__48588 = cljs.core.name(tag);
var G__48589 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48587,G__48588,G__48589);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48593 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48593);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48595 = shadow.dom.dom_node(dom);
var G__48596 = value;
return goog.dom.forms.setValue(G__48595,G__48596);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48608 = cljs.core.seq(style_keys);
var chunk__48609 = null;
var count__48610 = (0);
var i__48611 = (0);
while(true){
if((i__48611 < count__48610)){
var it = chunk__48609.cljs$core$IIndexed$_nth$arity$2(null,i__48611);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49231 = seq__48608;
var G__49232 = chunk__48609;
var G__49233 = count__48610;
var G__49234 = (i__48611 + (1));
seq__48608 = G__49231;
chunk__48609 = G__49232;
count__48610 = G__49233;
i__48611 = G__49234;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48608);
if(temp__5735__auto__){
var seq__48608__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48608__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48608__$1);
var G__49235 = cljs.core.chunk_rest(seq__48608__$1);
var G__49236 = c__4609__auto__;
var G__49237 = cljs.core.count(c__4609__auto__);
var G__49238 = (0);
seq__48608 = G__49235;
chunk__48609 = G__49236;
count__48610 = G__49237;
i__48611 = G__49238;
continue;
} else {
var it = cljs.core.first(seq__48608__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49239 = cljs.core.next(seq__48608__$1);
var G__49240 = null;
var G__49241 = (0);
var G__49242 = (0);
seq__48608 = G__49239;
chunk__48609 = G__49240;
count__48610 = G__49241;
i__48611 = G__49242;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48618,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48629 = k48618;
var G__48629__$1 = (((G__48629 instanceof cljs.core.Keyword))?G__48629.fqn:null);
switch (G__48629__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48618,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48633){
var vec__48634 = p__48633;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48634,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48634,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48617){
var self__ = this;
var G__48617__$1 = this;
return (new cljs.core.RecordIter((0),G__48617__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48643 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48643(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48619,other48620){
var self__ = this;
var this48619__$1 = this;
return (((!((other48620 == null)))) && ((this48619__$1.constructor === other48620.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48619__$1.x,other48620.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48619__$1.y,other48620.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48619__$1.__extmap,other48620.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48617){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48645 = cljs.core.keyword_identical_QMARK_;
var expr__48646 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48648 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48649 = expr__48646;
return (pred__48645.cljs$core$IFn$_invoke$arity$2 ? pred__48645.cljs$core$IFn$_invoke$arity$2(G__48648,G__48649) : pred__48645.call(null,G__48648,G__48649));
})())){
return (new shadow.dom.Coordinate(G__48617,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48650 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48651 = expr__48646;
return (pred__48645.cljs$core$IFn$_invoke$arity$2 ? pred__48645.cljs$core$IFn$_invoke$arity$2(G__48650,G__48651) : pred__48645.call(null,G__48650,G__48651));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48617,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48617),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48617){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48617,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48622){
var extmap__4478__auto__ = (function (){var G__48655 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48622,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48622)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48655);
} else {
return G__48655;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48622),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48622),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48659 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48659);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48660 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48660);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48661 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48661);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48663,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48667 = k48663;
var G__48667__$1 = (((G__48667 instanceof cljs.core.Keyword))?G__48667.fqn:null);
switch (G__48667__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48663,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48668){
var vec__48669 = p__48668;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48669,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48669,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48662){
var self__ = this;
var G__48662__$1 = this;
return (new cljs.core.RecordIter((0),G__48662__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48678 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48678(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48664,other48665){
var self__ = this;
var this48664__$1 = this;
return (((!((other48665 == null)))) && ((this48664__$1.constructor === other48665.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48664__$1.w,other48665.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48664__$1.h,other48665.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48664__$1.__extmap,other48665.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48662){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48686 = cljs.core.keyword_identical_QMARK_;
var expr__48687 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48690 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48691 = expr__48687;
return (pred__48686.cljs$core$IFn$_invoke$arity$2 ? pred__48686.cljs$core$IFn$_invoke$arity$2(G__48690,G__48691) : pred__48686.call(null,G__48690,G__48691));
})())){
return (new shadow.dom.Size(G__48662,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48692 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48693 = expr__48687;
return (pred__48686.cljs$core$IFn$_invoke$arity$2 ? pred__48686.cljs$core$IFn$_invoke$arity$2(G__48692,G__48693) : pred__48686.call(null,G__48692,G__48693));
})())){
return (new shadow.dom.Size(self__.w,G__48662,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48662),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48662){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48662,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48666){
var extmap__4478__auto__ = (function (){var G__48703 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48666,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48666)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48703);
} else {
return G__48703;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48666),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48666),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48708 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48708);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__49307 = (i + (1));
var G__49308 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49307;
ret = G__49308;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48729){
var vec__48731 = p__48729;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48731,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48731,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48738 = arguments.length;
switch (G__48738) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48741_49329 = new_node;
var G__48742_49330 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48741_49329,G__48742_49330);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48743_49331 = new_node;
var G__48744_49332 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48743_49331,G__48744_49332);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49333 = ps;
var G__49334 = (i + (1));
el__$1 = G__49333;
i = G__49334;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48747 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48747);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48748 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48748);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48750 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48750);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48754 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48754,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48754,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48754,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48758_49338 = cljs.core.seq(props);
var chunk__48759_49339 = null;
var count__48760_49340 = (0);
var i__48761_49341 = (0);
while(true){
if((i__48761_49341 < count__48760_49340)){
var vec__48779_49342 = chunk__48759_49339.cljs$core$IIndexed$_nth$arity$2(null,i__48761_49341);
var k_49343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48779_49342,(0),null);
var v_49344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48779_49342,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49343);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49343),v_49344);


var G__49348 = seq__48758_49338;
var G__49349 = chunk__48759_49339;
var G__49350 = count__48760_49340;
var G__49351 = (i__48761_49341 + (1));
seq__48758_49338 = G__49348;
chunk__48759_49339 = G__49349;
count__48760_49340 = G__49350;
i__48761_49341 = G__49351;
continue;
} else {
var temp__5735__auto___49352 = cljs.core.seq(seq__48758_49338);
if(temp__5735__auto___49352){
var seq__48758_49353__$1 = temp__5735__auto___49352;
if(cljs.core.chunked_seq_QMARK_(seq__48758_49353__$1)){
var c__4609__auto___49354 = cljs.core.chunk_first(seq__48758_49353__$1);
var G__49355 = cljs.core.chunk_rest(seq__48758_49353__$1);
var G__49356 = c__4609__auto___49354;
var G__49357 = cljs.core.count(c__4609__auto___49354);
var G__49358 = (0);
seq__48758_49338 = G__49355;
chunk__48759_49339 = G__49356;
count__48760_49340 = G__49357;
i__48761_49341 = G__49358;
continue;
} else {
var vec__48783_49359 = cljs.core.first(seq__48758_49353__$1);
var k_49360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48783_49359,(0),null);
var v_49361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48783_49359,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49360);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49360),v_49361);


var G__49373 = cljs.core.next(seq__48758_49353__$1);
var G__49374 = null;
var G__49375 = (0);
var G__49376 = (0);
seq__48758_49338 = G__49373;
chunk__48759_49339 = G__49374;
count__48760_49340 = G__49375;
i__48761_49341 = G__49376;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48788 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788,(1),null);
var seq__48791_49380 = cljs.core.seq(node_children);
var chunk__48793_49381 = null;
var count__48794_49382 = (0);
var i__48795_49383 = (0);
while(true){
if((i__48795_49383 < count__48794_49382)){
var child_struct_49384 = chunk__48793_49381.cljs$core$IIndexed$_nth$arity$2(null,i__48795_49383);
if((!((child_struct_49384 == null)))){
if(typeof child_struct_49384 === 'string'){
var text_49385 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49385),child_struct_49384].join(''));
} else {
var children_49386 = shadow.dom.svg_node(child_struct_49384);
if(cljs.core.seq_QMARK_(children_49386)){
var seq__48817_49390 = cljs.core.seq(children_49386);
var chunk__48819_49391 = null;
var count__48820_49392 = (0);
var i__48821_49393 = (0);
while(true){
if((i__48821_49393 < count__48820_49392)){
var child_49394 = chunk__48819_49391.cljs$core$IIndexed$_nth$arity$2(null,i__48821_49393);
if(cljs.core.truth_(child_49394)){
node.appendChild(child_49394);


var G__49395 = seq__48817_49390;
var G__49396 = chunk__48819_49391;
var G__49397 = count__48820_49392;
var G__49398 = (i__48821_49393 + (1));
seq__48817_49390 = G__49395;
chunk__48819_49391 = G__49396;
count__48820_49392 = G__49397;
i__48821_49393 = G__49398;
continue;
} else {
var G__49399 = seq__48817_49390;
var G__49400 = chunk__48819_49391;
var G__49401 = count__48820_49392;
var G__49402 = (i__48821_49393 + (1));
seq__48817_49390 = G__49399;
chunk__48819_49391 = G__49400;
count__48820_49392 = G__49401;
i__48821_49393 = G__49402;
continue;
}
} else {
var temp__5735__auto___49403 = cljs.core.seq(seq__48817_49390);
if(temp__5735__auto___49403){
var seq__48817_49404__$1 = temp__5735__auto___49403;
if(cljs.core.chunked_seq_QMARK_(seq__48817_49404__$1)){
var c__4609__auto___49405 = cljs.core.chunk_first(seq__48817_49404__$1);
var G__49406 = cljs.core.chunk_rest(seq__48817_49404__$1);
var G__49407 = c__4609__auto___49405;
var G__49408 = cljs.core.count(c__4609__auto___49405);
var G__49409 = (0);
seq__48817_49390 = G__49406;
chunk__48819_49391 = G__49407;
count__48820_49392 = G__49408;
i__48821_49393 = G__49409;
continue;
} else {
var child_49411 = cljs.core.first(seq__48817_49404__$1);
if(cljs.core.truth_(child_49411)){
node.appendChild(child_49411);


var G__49412 = cljs.core.next(seq__48817_49404__$1);
var G__49413 = null;
var G__49414 = (0);
var G__49415 = (0);
seq__48817_49390 = G__49412;
chunk__48819_49391 = G__49413;
count__48820_49392 = G__49414;
i__48821_49393 = G__49415;
continue;
} else {
var G__49418 = cljs.core.next(seq__48817_49404__$1);
var G__49419 = null;
var G__49420 = (0);
var G__49421 = (0);
seq__48817_49390 = G__49418;
chunk__48819_49391 = G__49419;
count__48820_49392 = G__49420;
i__48821_49393 = G__49421;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49386);
}
}


var G__49422 = seq__48791_49380;
var G__49423 = chunk__48793_49381;
var G__49424 = count__48794_49382;
var G__49425 = (i__48795_49383 + (1));
seq__48791_49380 = G__49422;
chunk__48793_49381 = G__49423;
count__48794_49382 = G__49424;
i__48795_49383 = G__49425;
continue;
} else {
var G__49426 = seq__48791_49380;
var G__49427 = chunk__48793_49381;
var G__49428 = count__48794_49382;
var G__49429 = (i__48795_49383 + (1));
seq__48791_49380 = G__49426;
chunk__48793_49381 = G__49427;
count__48794_49382 = G__49428;
i__48795_49383 = G__49429;
continue;
}
} else {
var temp__5735__auto___49430 = cljs.core.seq(seq__48791_49380);
if(temp__5735__auto___49430){
var seq__48791_49431__$1 = temp__5735__auto___49430;
if(cljs.core.chunked_seq_QMARK_(seq__48791_49431__$1)){
var c__4609__auto___49432 = cljs.core.chunk_first(seq__48791_49431__$1);
var G__49433 = cljs.core.chunk_rest(seq__48791_49431__$1);
var G__49434 = c__4609__auto___49432;
var G__49435 = cljs.core.count(c__4609__auto___49432);
var G__49436 = (0);
seq__48791_49380 = G__49433;
chunk__48793_49381 = G__49434;
count__48794_49382 = G__49435;
i__48795_49383 = G__49436;
continue;
} else {
var child_struct_49437 = cljs.core.first(seq__48791_49431__$1);
if((!((child_struct_49437 == null)))){
if(typeof child_struct_49437 === 'string'){
var text_49438 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49438),child_struct_49437].join(''));
} else {
var children_49440 = shadow.dom.svg_node(child_struct_49437);
if(cljs.core.seq_QMARK_(children_49440)){
var seq__48830_49441 = cljs.core.seq(children_49440);
var chunk__48832_49442 = null;
var count__48833_49443 = (0);
var i__48834_49444 = (0);
while(true){
if((i__48834_49444 < count__48833_49443)){
var child_49445 = chunk__48832_49442.cljs$core$IIndexed$_nth$arity$2(null,i__48834_49444);
if(cljs.core.truth_(child_49445)){
node.appendChild(child_49445);


var G__49446 = seq__48830_49441;
var G__49447 = chunk__48832_49442;
var G__49448 = count__48833_49443;
var G__49449 = (i__48834_49444 + (1));
seq__48830_49441 = G__49446;
chunk__48832_49442 = G__49447;
count__48833_49443 = G__49448;
i__48834_49444 = G__49449;
continue;
} else {
var G__49450 = seq__48830_49441;
var G__49451 = chunk__48832_49442;
var G__49452 = count__48833_49443;
var G__49453 = (i__48834_49444 + (1));
seq__48830_49441 = G__49450;
chunk__48832_49442 = G__49451;
count__48833_49443 = G__49452;
i__48834_49444 = G__49453;
continue;
}
} else {
var temp__5735__auto___49454__$1 = cljs.core.seq(seq__48830_49441);
if(temp__5735__auto___49454__$1){
var seq__48830_49455__$1 = temp__5735__auto___49454__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48830_49455__$1)){
var c__4609__auto___49456 = cljs.core.chunk_first(seq__48830_49455__$1);
var G__49457 = cljs.core.chunk_rest(seq__48830_49455__$1);
var G__49458 = c__4609__auto___49456;
var G__49459 = cljs.core.count(c__4609__auto___49456);
var G__49460 = (0);
seq__48830_49441 = G__49457;
chunk__48832_49442 = G__49458;
count__48833_49443 = G__49459;
i__48834_49444 = G__49460;
continue;
} else {
var child_49461 = cljs.core.first(seq__48830_49455__$1);
if(cljs.core.truth_(child_49461)){
node.appendChild(child_49461);


var G__49462 = cljs.core.next(seq__48830_49455__$1);
var G__49463 = null;
var G__49464 = (0);
var G__49465 = (0);
seq__48830_49441 = G__49462;
chunk__48832_49442 = G__49463;
count__48833_49443 = G__49464;
i__48834_49444 = G__49465;
continue;
} else {
var G__49466 = cljs.core.next(seq__48830_49455__$1);
var G__49467 = null;
var G__49468 = (0);
var G__49469 = (0);
seq__48830_49441 = G__49466;
chunk__48832_49442 = G__49467;
count__48833_49443 = G__49468;
i__48834_49444 = G__49469;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49440);
}
}


var G__49470 = cljs.core.next(seq__48791_49431__$1);
var G__49471 = null;
var G__49472 = (0);
var G__49473 = (0);
seq__48791_49380 = G__49470;
chunk__48793_49381 = G__49471;
count__48794_49382 = G__49472;
i__48795_49383 = G__49473;
continue;
} else {
var G__49474 = cljs.core.next(seq__48791_49431__$1);
var G__49475 = null;
var G__49476 = (0);
var G__49477 = (0);
seq__48791_49380 = G__49474;
chunk__48793_49381 = G__49475;
count__48794_49382 = G__49476;
i__48795_49383 = G__49477;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48842_49478 = shadow.dom._to_svg;
var G__48843_49479 = "string";
var G__48844_49480 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48842_49478,G__48843_49479,G__48844_49480);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48850_49483 = shadow.dom._to_svg;
var G__48851_49484 = "null";
var G__48852_49485 = (function (_){
return null;
});
goog.object.set(G__48850_49483,G__48851_49484,G__48852_49485);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49490 = arguments.length;
var i__4790__auto___49491 = (0);
while(true){
if((i__4790__auto___49491 < len__4789__auto___49490)){
args__4795__auto__.push((arguments[i__4790__auto___49491]));

var G__49493 = (i__4790__auto___49491 + (1));
i__4790__auto___49491 = G__49493;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48854){
var G__48855 = cljs.core.first(seq48854);
var seq48854__$1 = cljs.core.next(seq48854);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48855,seq48854__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48861 = arguments.length;
switch (G__48861) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48866_49497 = shadow.dom.dom_node(el);
var G__48867_49498 = cljs.core.name(event);
var G__48868_49499 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48866_49497,G__48867_49498,G__48868_49499) : shadow.dom.dom_listen.call(null,G__48866_49497,G__48867_49498,G__48868_49499));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46638__auto___49500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_48874){
var state_val_48875 = (state_48874[(1)]);
if((state_val_48875 === (1))){
var state_48874__$1 = state_48874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48874__$1,(2),once_or_cleanup);
} else {
if((state_val_48875 === (2))){
var inst_48871 = (state_48874[(2)]);
var inst_48872 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48874__$1 = (function (){var statearr_48879 = state_48874;
(statearr_48879[(7)] = inst_48871);

return statearr_48879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48874__$1,inst_48872);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46541__auto__ = null;
var shadow$dom$state_machine__46541__auto____0 = (function (){
var statearr_48881 = [null,null,null,null,null,null,null,null];
(statearr_48881[(0)] = shadow$dom$state_machine__46541__auto__);

(statearr_48881[(1)] = (1));

return statearr_48881;
});
var shadow$dom$state_machine__46541__auto____1 = (function (state_48874){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_48874);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e48882){if((e48882 instanceof Object)){
var ex__46544__auto__ = e48882;
var statearr_48884_49510 = state_48874;
(statearr_48884_49510[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49511 = state_48874;
state_48874 = G__49511;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
shadow$dom$state_machine__46541__auto__ = function(state_48874){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46541__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46541__auto____1.call(this,state_48874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46541__auto____0;
shadow$dom$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46541__auto____1;
return shadow$dom$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_48886 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_48886[(6)] = c__46638__auto___49500);

return statearr_48886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
