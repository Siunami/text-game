goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51123__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51124__i = 0, G__51124__a = new Array(arguments.length -  0);
while (G__51124__i < G__51124__a.length) {G__51124__a[G__51124__i] = arguments[G__51124__i + 0]; ++G__51124__i;}
  args = new cljs.core.IndexedSeq(G__51124__a,0,null);
} 
return G__51123__delegate.call(this,args);};
G__51123.cljs$lang$maxFixedArity = 0;
G__51123.cljs$lang$applyTo = (function (arglist__51125){
var args = cljs.core.seq(arglist__51125);
return G__51123__delegate(args);
});
G__51123.cljs$core$IFn$_invoke$arity$variadic = G__51123__delegate;
return G__51123;
})()
);

(o.error = (function() { 
var G__51126__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51127__i = 0, G__51127__a = new Array(arguments.length -  0);
while (G__51127__i < G__51127__a.length) {G__51127__a[G__51127__i] = arguments[G__51127__i + 0]; ++G__51127__i;}
  args = new cljs.core.IndexedSeq(G__51127__a,0,null);
} 
return G__51126__delegate.call(this,args);};
G__51126.cljs$lang$maxFixedArity = 0;
G__51126.cljs$lang$applyTo = (function (arglist__51128){
var args = cljs.core.seq(arglist__51128);
return G__51126__delegate(args);
});
G__51126.cljs$core$IFn$_invoke$arity$variadic = G__51126__delegate;
return G__51126;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
