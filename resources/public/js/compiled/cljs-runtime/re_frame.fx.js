goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52968 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52969 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52969);

try{try{var seq__52970 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52971 = null;
var count__52972 = (0);
var i__52973 = (0);
while(true){
if((i__52973 < count__52972)){
var vec__52980 = chunk__52971.cljs$core$IIndexed$_nth$arity$2(null,i__52973);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52980,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52980,(1),null);
var temp__5733__auto___53024 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53024)){
var effect_fn_53025 = temp__5733__auto___53024;
(effect_fn_53025.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53025.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53025.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53027 = seq__52970;
var G__53028 = chunk__52971;
var G__53029 = count__52972;
var G__53030 = (i__52973 + (1));
seq__52970 = G__53027;
chunk__52971 = G__53028;
count__52972 = G__53029;
i__52973 = G__53030;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52970);
if(temp__5735__auto__){
var seq__52970__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52970__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52970__$1);
var G__53032 = cljs.core.chunk_rest(seq__52970__$1);
var G__53033 = c__4609__auto__;
var G__53034 = cljs.core.count(c__4609__auto__);
var G__53035 = (0);
seq__52970 = G__53032;
chunk__52971 = G__53033;
count__52972 = G__53034;
i__52973 = G__53035;
continue;
} else {
var vec__52983 = cljs.core.first(seq__52970__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52983,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52983,(1),null);
var temp__5733__auto___53036 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53036)){
var effect_fn_53039 = temp__5733__auto___53036;
(effect_fn_53039.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53039.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53039.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53040 = cljs.core.next(seq__52970__$1);
var G__53041 = null;
var G__53042 = (0);
var G__53043 = (0);
seq__52970 = G__53040;
chunk__52971 = G__53041;
count__52972 = G__53042;
i__52973 = G__53043;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52692__auto___53044 = re_frame.interop.now();
var duration__52693__auto___53045 = (end__52692__auto___53044 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52693__auto___53045,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52692__auto___53044);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52968);
}} else {
var seq__52986 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52987 = null;
var count__52988 = (0);
var i__52989 = (0);
while(true){
if((i__52989 < count__52988)){
var vec__52998 = chunk__52987.cljs$core$IIndexed$_nth$arity$2(null,i__52989);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52998,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52998,(1),null);
var temp__5733__auto___53048 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53048)){
var effect_fn_53051 = temp__5733__auto___53048;
(effect_fn_53051.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53051.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53051.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53052 = seq__52986;
var G__53053 = chunk__52987;
var G__53054 = count__52988;
var G__53055 = (i__52989 + (1));
seq__52986 = G__53052;
chunk__52987 = G__53053;
count__52988 = G__53054;
i__52989 = G__53055;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52986);
if(temp__5735__auto__){
var seq__52986__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52986__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52986__$1);
var G__53056 = cljs.core.chunk_rest(seq__52986__$1);
var G__53057 = c__4609__auto__;
var G__53058 = cljs.core.count(c__4609__auto__);
var G__53059 = (0);
seq__52986 = G__53056;
chunk__52987 = G__53057;
count__52988 = G__53058;
i__52989 = G__53059;
continue;
} else {
var vec__53001 = cljs.core.first(seq__52986__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53001,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53001,(1),null);
var temp__5733__auto___53060 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53060)){
var effect_fn_53061 = temp__5733__auto___53060;
(effect_fn_53061.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53061.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53061.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53062 = cljs.core.next(seq__52986__$1);
var G__53063 = null;
var G__53064 = (0);
var G__53065 = (0);
seq__52986 = G__53062;
chunk__52987 = G__53063;
count__52988 = G__53064;
i__52989 = G__53065;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__53004 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53005 = null;
var count__53006 = (0);
var i__53007 = (0);
while(true){
if((i__53007 < count__53006)){
var map__53012 = chunk__53005.cljs$core$IIndexed$_nth$arity$2(null,i__53007);
var map__53012__$1 = (((((!((map__53012 == null))))?(((((map__53012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53012):map__53012);
var effect = map__53012__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53012__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53012__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53004,chunk__53005,count__53006,i__53007,map__53012,map__53012__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53004,chunk__53005,count__53006,i__53007,map__53012,map__53012__$1,effect,ms,dispatch))
,ms);
}


var G__53068 = seq__53004;
var G__53069 = chunk__53005;
var G__53070 = count__53006;
var G__53071 = (i__53007 + (1));
seq__53004 = G__53068;
chunk__53005 = G__53069;
count__53006 = G__53070;
i__53007 = G__53071;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53004);
if(temp__5735__auto__){
var seq__53004__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53004__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53004__$1);
var G__53072 = cljs.core.chunk_rest(seq__53004__$1);
var G__53073 = c__4609__auto__;
var G__53074 = cljs.core.count(c__4609__auto__);
var G__53075 = (0);
seq__53004 = G__53072;
chunk__53005 = G__53073;
count__53006 = G__53074;
i__53007 = G__53075;
continue;
} else {
var map__53014 = cljs.core.first(seq__53004__$1);
var map__53014__$1 = (((((!((map__53014 == null))))?(((((map__53014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53014):map__53014);
var effect = map__53014__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53014__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53014__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53004,chunk__53005,count__53006,i__53007,map__53014,map__53014__$1,effect,ms,dispatch,seq__53004__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53004,chunk__53005,count__53006,i__53007,map__53014,map__53014__$1,effect,ms,dispatch,seq__53004__$1,temp__5735__auto__))
,ms);
}


var G__53077 = cljs.core.next(seq__53004__$1);
var G__53078 = null;
var G__53079 = (0);
var G__53080 = (0);
seq__53004 = G__53077;
chunk__53005 = G__53078;
count__53006 = G__53079;
i__53007 = G__53080;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53016 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53017 = null;
var count__53018 = (0);
var i__53019 = (0);
while(true){
if((i__53019 < count__53018)){
var event = chunk__53017.cljs$core$IIndexed$_nth$arity$2(null,i__53019);
re_frame.router.dispatch(event);


var G__53081 = seq__53016;
var G__53082 = chunk__53017;
var G__53083 = count__53018;
var G__53084 = (i__53019 + (1));
seq__53016 = G__53081;
chunk__53017 = G__53082;
count__53018 = G__53083;
i__53019 = G__53084;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53016);
if(temp__5735__auto__){
var seq__53016__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53016__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53016__$1);
var G__53086 = cljs.core.chunk_rest(seq__53016__$1);
var G__53087 = c__4609__auto__;
var G__53088 = cljs.core.count(c__4609__auto__);
var G__53089 = (0);
seq__53016 = G__53086;
chunk__53017 = G__53087;
count__53018 = G__53088;
i__53019 = G__53089;
continue;
} else {
var event = cljs.core.first(seq__53016__$1);
re_frame.router.dispatch(event);


var G__53090 = cljs.core.next(seq__53016__$1);
var G__53091 = null;
var G__53092 = (0);
var G__53093 = (0);
seq__53016 = G__53090;
chunk__53017 = G__53091;
count__53018 = G__53092;
i__53019 = G__53093;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53020 = cljs.core.seq(value);
var chunk__53021 = null;
var count__53022 = (0);
var i__53023 = (0);
while(true){
if((i__53023 < count__53022)){
var event = chunk__53021.cljs$core$IIndexed$_nth$arity$2(null,i__53023);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53094 = seq__53020;
var G__53095 = chunk__53021;
var G__53096 = count__53022;
var G__53097 = (i__53023 + (1));
seq__53020 = G__53094;
chunk__53021 = G__53095;
count__53022 = G__53096;
i__53023 = G__53097;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53020);
if(temp__5735__auto__){
var seq__53020__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53020__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53020__$1);
var G__53098 = cljs.core.chunk_rest(seq__53020__$1);
var G__53099 = c__4609__auto__;
var G__53100 = cljs.core.count(c__4609__auto__);
var G__53101 = (0);
seq__53020 = G__53098;
chunk__53021 = G__53099;
count__53022 = G__53100;
i__53023 = G__53101;
continue;
} else {
var event = cljs.core.first(seq__53020__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53102 = cljs.core.next(seq__53020__$1);
var G__53103 = null;
var G__53104 = (0);
var G__53105 = (0);
seq__53020 = G__53102;
chunk__53021 = G__53103;
count__53022 = G__53104;
i__53023 = G__53105;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
