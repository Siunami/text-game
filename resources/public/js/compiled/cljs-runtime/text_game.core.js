goog.provide('text_game.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('text_game.events');
goog.require('text_game.views');
goog.require('text_game.config');
text_game.core.dev_setup = (function text_game$core$dev_setup(){
if(text_game.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
text_game.core.mount_root = (function text_game$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text_game.views.main_panel], null),document.getElementById("app"));
});
text_game.core.init = (function text_game$core$init(){
var G__53214_53215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.events","initialize-db","text-game.events/initialize-db",1311440715)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__53214_53215) : re_frame.core.dispatch_sync.call(null,G__53214_53215));

text_game.core.dev_setup();

return text_game.core.mount_root();
});

//# sourceMappingURL=text_game.core.js.map
