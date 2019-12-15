goog.provide('text_game.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('text_game.subs');
text_game.views.main_panel = (function text_game$views$main_panel(){
var name = (function (){var G__53213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.subs","name","text-game.subs/name",921584186)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53213) : re_frame.core.subscribe.call(null,G__53213));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello from ",cljs.core.deref(name)], null)], null);
});

//# sourceMappingURL=text_game.views.js.map
