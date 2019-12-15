goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50412 = arguments.length;
var i__4790__auto___50413 = (0);
while(true){
if((i__4790__auto___50413 < len__4789__auto___50412)){
args__4795__auto__.push((arguments[i__4790__auto___50413]));

var G__50414 = (i__4790__auto___50413 + (1));
i__4790__auto___50413 = G__50414;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50213){
var G__50214 = cljs.core.first(seq50213);
var seq50213__$1 = cljs.core.next(seq50213);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50214,seq50213__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50224){
var map__50225 = p__50224;
var map__50225__$1 = (((((!((map__50225 == null))))?(((((map__50225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50225):map__50225);
var src = map__50225__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50227 = cljs.core.seq(sources);
var chunk__50228 = null;
var count__50229 = (0);
var i__50230 = (0);
while(true){
if((i__50230 < count__50229)){
var map__50238 = chunk__50228.cljs$core$IIndexed$_nth$arity$2(null,i__50230);
var map__50238__$1 = (((((!((map__50238 == null))))?(((((map__50238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50238):map__50238);
var src = map__50238__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50238__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50238__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50238__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50238__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50240){var e_50417 = e50240;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50417);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50417.message)].join('')));
}

var G__50418 = seq__50227;
var G__50419 = chunk__50228;
var G__50420 = count__50229;
var G__50421 = (i__50230 + (1));
seq__50227 = G__50418;
chunk__50228 = G__50419;
count__50229 = G__50420;
i__50230 = G__50421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50227);
if(temp__5735__auto__){
var seq__50227__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50227__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50227__$1);
var G__50422 = cljs.core.chunk_rest(seq__50227__$1);
var G__50423 = c__4609__auto__;
var G__50424 = cljs.core.count(c__4609__auto__);
var G__50425 = (0);
seq__50227 = G__50422;
chunk__50228 = G__50423;
count__50229 = G__50424;
i__50230 = G__50425;
continue;
} else {
var map__50241 = cljs.core.first(seq__50227__$1);
var map__50241__$1 = (((((!((map__50241 == null))))?(((((map__50241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50241):map__50241);
var src = map__50241__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50243){var e_50426 = e50243;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50426);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50426.message)].join('')));
}

var G__50427 = cljs.core.next(seq__50227__$1);
var G__50428 = null;
var G__50429 = (0);
var G__50430 = (0);
seq__50227 = G__50427;
chunk__50228 = G__50428;
count__50229 = G__50429;
i__50230 = G__50430;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50244 = cljs.core.seq(js_requires);
var chunk__50245 = null;
var count__50246 = (0);
var i__50247 = (0);
while(true){
if((i__50247 < count__50246)){
var js_ns = chunk__50245.cljs$core$IIndexed$_nth$arity$2(null,i__50247);
var require_str_50433 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50433);


var G__50434 = seq__50244;
var G__50435 = chunk__50245;
var G__50436 = count__50246;
var G__50437 = (i__50247 + (1));
seq__50244 = G__50434;
chunk__50245 = G__50435;
count__50246 = G__50436;
i__50247 = G__50437;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50244);
if(temp__5735__auto__){
var seq__50244__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50244__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50244__$1);
var G__50438 = cljs.core.chunk_rest(seq__50244__$1);
var G__50439 = c__4609__auto__;
var G__50440 = cljs.core.count(c__4609__auto__);
var G__50441 = (0);
seq__50244 = G__50438;
chunk__50245 = G__50439;
count__50246 = G__50440;
i__50247 = G__50441;
continue;
} else {
var js_ns = cljs.core.first(seq__50244__$1);
var require_str_50442 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50442);


var G__50443 = cljs.core.next(seq__50244__$1);
var G__50444 = null;
var G__50445 = (0);
var G__50446 = (0);
seq__50244 = G__50443;
chunk__50245 = G__50444;
count__50246 = G__50445;
i__50247 = G__50446;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__50249 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50249) : callback.call(null,G__50249));
} else {
var G__50250 = shadow.cljs.devtools.client.env.files_url();
var G__50251 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__50252 = "POST";
var G__50253 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50254 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50250,G__50251,G__50252,G__50253,G__50254);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50257){
var map__50258 = p__50257;
var map__50258__$1 = (((((!((map__50258 == null))))?(((((map__50258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50258):map__50258);
var msg = map__50258__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50258__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50258__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50260 = info;
var map__50260__$1 = (((((!((map__50260 == null))))?(((((map__50260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50260):map__50260);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50262(s__50263){
return (new cljs.core.LazySeq(null,(function (){
var s__50263__$1 = s__50263;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50263__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50269 = cljs.core.first(xs__6292__auto__);
var map__50269__$1 = (((((!((map__50269 == null))))?(((((map__50269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50269):map__50269);
var src = map__50269__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__50263__$1,map__50269,map__50269__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50260,map__50260__$1,sources,compiled,map__50258,map__50258__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50262_$_iter__50264(s__50265){
return (new cljs.core.LazySeq(null,((function (s__50263__$1,map__50269,map__50269__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50260,map__50260__$1,sources,compiled,map__50258,map__50258__$1,msg,info,reload_info){
return (function (){
var s__50265__$1 = s__50265;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50265__$1);
if(temp__5735__auto____$1){
var s__50265__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50265__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50265__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50267 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50266 = (0);
while(true){
if((i__50266 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50266);
cljs.core.chunk_append(b__50267,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50450 = (i__50266 + (1));
i__50266 = G__50450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50267),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50262_$_iter__50264(cljs.core.chunk_rest(s__50265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50267),null);
}
} else {
var warning = cljs.core.first(s__50265__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50262_$_iter__50264(cljs.core.rest(s__50265__$2)));
}
} else {
return null;
}
break;
}
});})(s__50263__$1,map__50269,map__50269__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50260,map__50260__$1,sources,compiled,map__50258,map__50258__$1,msg,info,reload_info))
,null,null));
});})(s__50263__$1,map__50269,map__50269__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50260,map__50260__$1,sources,compiled,map__50258,map__50258__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50262(cljs.core.rest(s__50263__$1)));
} else {
var G__50451 = cljs.core.rest(s__50263__$1);
s__50263__$1 = G__50451;
continue;
}
} else {
var G__50452 = cljs.core.rest(s__50263__$1);
s__50263__$1 = G__50452;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__50272_50453 = cljs.core.seq(warnings);
var chunk__50273_50454 = null;
var count__50274_50455 = (0);
var i__50275_50456 = (0);
while(true){
if((i__50275_50456 < count__50274_50455)){
var map__50281_50457 = chunk__50273_50454.cljs$core$IIndexed$_nth$arity$2(null,i__50275_50456);
var map__50281_50458__$1 = (((((!((map__50281_50457 == null))))?(((((map__50281_50457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50281_50457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50281_50457):map__50281_50457);
var w_50459 = map__50281_50458__$1;
var msg_50460__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50281_50458__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50281_50458__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50281_50458__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50281_50458__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50463)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50461),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50462),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50460__$1)].join(''));


var G__50464 = seq__50272_50453;
var G__50465 = chunk__50273_50454;
var G__50466 = count__50274_50455;
var G__50467 = (i__50275_50456 + (1));
seq__50272_50453 = G__50464;
chunk__50273_50454 = G__50465;
count__50274_50455 = G__50466;
i__50275_50456 = G__50467;
continue;
} else {
var temp__5735__auto___50469 = cljs.core.seq(seq__50272_50453);
if(temp__5735__auto___50469){
var seq__50272_50470__$1 = temp__5735__auto___50469;
if(cljs.core.chunked_seq_QMARK_(seq__50272_50470__$1)){
var c__4609__auto___50471 = cljs.core.chunk_first(seq__50272_50470__$1);
var G__50472 = cljs.core.chunk_rest(seq__50272_50470__$1);
var G__50473 = c__4609__auto___50471;
var G__50474 = cljs.core.count(c__4609__auto___50471);
var G__50475 = (0);
seq__50272_50453 = G__50472;
chunk__50273_50454 = G__50473;
count__50274_50455 = G__50474;
i__50275_50456 = G__50475;
continue;
} else {
var map__50283_50476 = cljs.core.first(seq__50272_50470__$1);
var map__50283_50477__$1 = (((((!((map__50283_50476 == null))))?(((((map__50283_50476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50283_50476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50283_50476):map__50283_50476);
var w_50478 = map__50283_50477__$1;
var msg_50479__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50283_50477__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50283_50477__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50283_50477__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50283_50477__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50482)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50480),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50481),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50479__$1)].join(''));


var G__50483 = cljs.core.next(seq__50272_50470__$1);
var G__50484 = null;
var G__50485 = (0);
var G__50486 = (0);
seq__50272_50453 = G__50483;
chunk__50273_50454 = G__50484;
count__50274_50455 = G__50485;
i__50275_50456 = G__50486;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50285){
var map__50286 = p__50285;
var map__50286__$1 = (((((!((map__50286 == null))))?(((((map__50286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50286):map__50286);
var src = map__50286__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50286__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50286__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50288){
var map__50289 = p__50288;
var map__50289__$1 = (((((!((map__50289 == null))))?(((((map__50289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50289):map__50289);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50289__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50291){
var map__50292 = p__50291;
var map__50292__$1 = (((((!((map__50292 == null))))?(((((map__50292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50292):map__50292);
var rc = map__50292__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50292__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__50255_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50255_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50295){
var map__50296 = p__50295;
var map__50296__$1 = (((((!((map__50296 == null))))?(((((map__50296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50296):map__50296);
var msg = map__50296__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50296__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50298 = cljs.core.seq(updates);
var chunk__50300 = null;
var count__50301 = (0);
var i__50302 = (0);
while(true){
if((i__50302 < count__50301)){
var path = chunk__50300.cljs$core$IIndexed$_nth$arity$2(null,i__50302);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50349_50490 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50352_50491 = null;
var count__50353_50492 = (0);
var i__50354_50493 = (0);
while(true){
if((i__50354_50493 < count__50353_50492)){
var node_50494 = chunk__50352_50491.cljs$core$IIndexed$_nth$arity$2(null,i__50354_50493);
var path_match_50495 = shadow.cljs.devtools.client.browser.match_paths(node_50494.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50495)){
var new_link_50496 = (function (){var G__50360 = node_50494.cloneNode(true);
G__50360.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50495),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50360;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50495], 0));

goog.dom.insertSiblingAfter(new_link_50496,node_50494);

goog.dom.removeNode(node_50494);


var G__50497 = seq__50349_50490;
var G__50498 = chunk__50352_50491;
var G__50499 = count__50353_50492;
var G__50500 = (i__50354_50493 + (1));
seq__50349_50490 = G__50497;
chunk__50352_50491 = G__50498;
count__50353_50492 = G__50499;
i__50354_50493 = G__50500;
continue;
} else {
var G__50501 = seq__50349_50490;
var G__50502 = chunk__50352_50491;
var G__50503 = count__50353_50492;
var G__50504 = (i__50354_50493 + (1));
seq__50349_50490 = G__50501;
chunk__50352_50491 = G__50502;
count__50353_50492 = G__50503;
i__50354_50493 = G__50504;
continue;
}
} else {
var temp__5735__auto___50505 = cljs.core.seq(seq__50349_50490);
if(temp__5735__auto___50505){
var seq__50349_50506__$1 = temp__5735__auto___50505;
if(cljs.core.chunked_seq_QMARK_(seq__50349_50506__$1)){
var c__4609__auto___50507 = cljs.core.chunk_first(seq__50349_50506__$1);
var G__50510 = cljs.core.chunk_rest(seq__50349_50506__$1);
var G__50511 = c__4609__auto___50507;
var G__50512 = cljs.core.count(c__4609__auto___50507);
var G__50513 = (0);
seq__50349_50490 = G__50510;
chunk__50352_50491 = G__50511;
count__50353_50492 = G__50512;
i__50354_50493 = G__50513;
continue;
} else {
var node_50514 = cljs.core.first(seq__50349_50506__$1);
var path_match_50515 = shadow.cljs.devtools.client.browser.match_paths(node_50514.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50515)){
var new_link_50516 = (function (){var G__50366 = node_50514.cloneNode(true);
G__50366.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50515),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50366;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50515], 0));

goog.dom.insertSiblingAfter(new_link_50516,node_50514);

goog.dom.removeNode(node_50514);


var G__50517 = cljs.core.next(seq__50349_50506__$1);
var G__50518 = null;
var G__50519 = (0);
var G__50520 = (0);
seq__50349_50490 = G__50517;
chunk__50352_50491 = G__50518;
count__50353_50492 = G__50519;
i__50354_50493 = G__50520;
continue;
} else {
var G__50521 = cljs.core.next(seq__50349_50506__$1);
var G__50522 = null;
var G__50523 = (0);
var G__50524 = (0);
seq__50349_50490 = G__50521;
chunk__50352_50491 = G__50522;
count__50353_50492 = G__50523;
i__50354_50493 = G__50524;
continue;
}
}
} else {
}
}
break;
}


var G__50525 = seq__50298;
var G__50526 = chunk__50300;
var G__50527 = count__50301;
var G__50528 = (i__50302 + (1));
seq__50298 = G__50525;
chunk__50300 = G__50526;
count__50301 = G__50527;
i__50302 = G__50528;
continue;
} else {
var G__50529 = seq__50298;
var G__50530 = chunk__50300;
var G__50531 = count__50301;
var G__50532 = (i__50302 + (1));
seq__50298 = G__50529;
chunk__50300 = G__50530;
count__50301 = G__50531;
i__50302 = G__50532;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50298);
if(temp__5735__auto__){
var seq__50298__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50298__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50298__$1);
var G__50533 = cljs.core.chunk_rest(seq__50298__$1);
var G__50534 = c__4609__auto__;
var G__50535 = cljs.core.count(c__4609__auto__);
var G__50536 = (0);
seq__50298 = G__50533;
chunk__50300 = G__50534;
count__50301 = G__50535;
i__50302 = G__50536;
continue;
} else {
var path = cljs.core.first(seq__50298__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50367_50537 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50370_50538 = null;
var count__50371_50539 = (0);
var i__50372_50540 = (0);
while(true){
if((i__50372_50540 < count__50371_50539)){
var node_50541 = chunk__50370_50538.cljs$core$IIndexed$_nth$arity$2(null,i__50372_50540);
var path_match_50542 = shadow.cljs.devtools.client.browser.match_paths(node_50541.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50542)){
var new_link_50543 = (function (){var G__50377 = node_50541.cloneNode(true);
G__50377.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50542),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50377;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50542], 0));

goog.dom.insertSiblingAfter(new_link_50543,node_50541);

goog.dom.removeNode(node_50541);


var G__50544 = seq__50367_50537;
var G__50545 = chunk__50370_50538;
var G__50546 = count__50371_50539;
var G__50547 = (i__50372_50540 + (1));
seq__50367_50537 = G__50544;
chunk__50370_50538 = G__50545;
count__50371_50539 = G__50546;
i__50372_50540 = G__50547;
continue;
} else {
var G__50548 = seq__50367_50537;
var G__50549 = chunk__50370_50538;
var G__50550 = count__50371_50539;
var G__50551 = (i__50372_50540 + (1));
seq__50367_50537 = G__50548;
chunk__50370_50538 = G__50549;
count__50371_50539 = G__50550;
i__50372_50540 = G__50551;
continue;
}
} else {
var temp__5735__auto___50552__$1 = cljs.core.seq(seq__50367_50537);
if(temp__5735__auto___50552__$1){
var seq__50367_50553__$1 = temp__5735__auto___50552__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50367_50553__$1)){
var c__4609__auto___50554 = cljs.core.chunk_first(seq__50367_50553__$1);
var G__50555 = cljs.core.chunk_rest(seq__50367_50553__$1);
var G__50556 = c__4609__auto___50554;
var G__50557 = cljs.core.count(c__4609__auto___50554);
var G__50558 = (0);
seq__50367_50537 = G__50555;
chunk__50370_50538 = G__50556;
count__50371_50539 = G__50557;
i__50372_50540 = G__50558;
continue;
} else {
var node_50559 = cljs.core.first(seq__50367_50553__$1);
var path_match_50560 = shadow.cljs.devtools.client.browser.match_paths(node_50559.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50560)){
var new_link_50561 = (function (){var G__50379 = node_50559.cloneNode(true);
G__50379.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50560),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50379;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50560], 0));

goog.dom.insertSiblingAfter(new_link_50561,node_50559);

goog.dom.removeNode(node_50559);


var G__50562 = cljs.core.next(seq__50367_50553__$1);
var G__50563 = null;
var G__50564 = (0);
var G__50565 = (0);
seq__50367_50537 = G__50562;
chunk__50370_50538 = G__50563;
count__50371_50539 = G__50564;
i__50372_50540 = G__50565;
continue;
} else {
var G__50566 = cljs.core.next(seq__50367_50553__$1);
var G__50567 = null;
var G__50568 = (0);
var G__50569 = (0);
seq__50367_50537 = G__50566;
chunk__50370_50538 = G__50567;
count__50371_50539 = G__50568;
i__50372_50540 = G__50569;
continue;
}
}
} else {
}
}
break;
}


var G__50570 = cljs.core.next(seq__50298__$1);
var G__50571 = null;
var G__50572 = (0);
var G__50573 = (0);
seq__50298 = G__50570;
chunk__50300 = G__50571;
count__50301 = G__50572;
i__50302 = G__50573;
continue;
} else {
var G__50574 = cljs.core.next(seq__50298__$1);
var G__50575 = null;
var G__50576 = (0);
var G__50577 = (0);
seq__50298 = G__50574;
chunk__50300 = G__50575;
count__50301 = G__50576;
i__50302 = G__50577;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50381){
var map__50382 = p__50381;
var map__50382__$1 = (((((!((map__50382 == null))))?(((((map__50382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50382):map__50382);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50382__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50382__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50384,done){
var map__50385 = p__50384;
var map__50385__$1 = (((((!((map__50385 == null))))?(((((map__50385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50385):map__50385);
var msg = map__50385__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50385__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50385__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50385__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50385__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50388){
var map__50389 = p__50388;
var map__50389__$1 = (((((!((map__50389 == null))))?(((((map__50389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50389):map__50389);
var src = map__50389__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e50391){var e = e50391;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50392,done){
var map__50394 = p__50392;
var map__50394__$1 = (((((!((map__50394 == null))))?(((((map__50394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50394):map__50394);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50396){
var map__50397 = p__50396;
var map__50397__$1 = (((((!((map__50397 == null))))?(((((map__50397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50397):map__50397);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50397__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50397__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50400,done){
var map__50401 = p__50400;
var map__50401__$1 = (((((!((map__50401 == null))))?(((((map__50401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50401):map__50401);
var msg = map__50401__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__50403_50581 = type;
var G__50403_50582__$1 = (((G__50403_50581 instanceof cljs.core.Keyword))?G__50403_50581.fqn:null);
switch (G__50403_50582__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__50404 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__50405 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__50406 = "POST";
var G__50407 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__50408 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50404,G__50405,G__50406,G__50407,G__50408);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e50409){var e = e50409;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50587 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50587)){
var s_50588 = temp__5735__auto___50587;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50588.onclose = (function (e){
return null;
}));

s_50588.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
