goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52714){
var map__52715 = p__52714;
var map__52715__$1 = (((((!((map__52715 == null))))?(((((map__52715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52715):map__52715);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__52719_52748 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52720_52749 = null;
var count__52721_52750 = (0);
var i__52722_52751 = (0);
while(true){
if((i__52722_52751 < count__52721_52750)){
var vec__52734_52752 = chunk__52720_52749.cljs$core$IIndexed$_nth$arity$2(null,i__52722_52751);
var k_52753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52734_52752,(0),null);
var cb_52754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52734_52752,(1),null);
try{var G__52738_52755 = cljs.core.deref(re_frame.trace.traces);
(cb_52754.cljs$core$IFn$_invoke$arity$1 ? cb_52754.cljs$core$IFn$_invoke$arity$1(G__52738_52755) : cb_52754.call(null,G__52738_52755));
}catch (e52737){var e_52756 = e52737;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52753,"while storing",cljs.core.deref(re_frame.trace.traces),e_52756], 0));
}

var G__52757 = seq__52719_52748;
var G__52758 = chunk__52720_52749;
var G__52759 = count__52721_52750;
var G__52760 = (i__52722_52751 + (1));
seq__52719_52748 = G__52757;
chunk__52720_52749 = G__52758;
count__52721_52750 = G__52759;
i__52722_52751 = G__52760;
continue;
} else {
var temp__5735__auto___52761 = cljs.core.seq(seq__52719_52748);
if(temp__5735__auto___52761){
var seq__52719_52762__$1 = temp__5735__auto___52761;
if(cljs.core.chunked_seq_QMARK_(seq__52719_52762__$1)){
var c__4609__auto___52763 = cljs.core.chunk_first(seq__52719_52762__$1);
var G__52764 = cljs.core.chunk_rest(seq__52719_52762__$1);
var G__52765 = c__4609__auto___52763;
var G__52766 = cljs.core.count(c__4609__auto___52763);
var G__52767 = (0);
seq__52719_52748 = G__52764;
chunk__52720_52749 = G__52765;
count__52721_52750 = G__52766;
i__52722_52751 = G__52767;
continue;
} else {
var vec__52740_52768 = cljs.core.first(seq__52719_52762__$1);
var k_52769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52740_52768,(0),null);
var cb_52770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52740_52768,(1),null);
try{var G__52744_52771 = cljs.core.deref(re_frame.trace.traces);
(cb_52770.cljs$core$IFn$_invoke$arity$1 ? cb_52770.cljs$core$IFn$_invoke$arity$1(G__52744_52771) : cb_52770.call(null,G__52744_52771));
}catch (e52743){var e_52772 = e52743;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52769,"while storing",cljs.core.deref(re_frame.trace.traces),e_52772], 0));
}

var G__52773 = cljs.core.next(seq__52719_52762__$1);
var G__52774 = null;
var G__52775 = (0);
var G__52776 = (0);
seq__52719_52748 = G__52773;
chunk__52720_52749 = G__52774;
count__52721_52750 = G__52775;
i__52722_52751 = G__52776;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
