goog.provide('text_game.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('text_game.events');
goog.require('text_game.subs');
goog.require('text_game.views');
goog.require('text_game.config');
goog.require('text_game.utils');
text_game.core.text = (function (){var G__43769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.subs","text","text-game.subs/text",-1237571474)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43769) : re_frame.core.subscribe.call(null,G__43769));
})();
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
var G__43771_43773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.events","initialize-db","text-game.events/initialize-db",1311440715)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__43771_43773) : re_frame.core.dispatch_sync.call(null,G__43771_43773));

var G__43772_43774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.events","set-blanks","text-game.events/set-blanks",-161525541),text_game.utils.get_prompts(cljs.core.deref(text_game.core.text))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43772_43774) : re_frame.core.dispatch.call(null,G__43772_43774));

text_game.core.dev_setup();

return text_game.core.mount_root();
});

//# sourceMappingURL=text_game.core.js.map
