goog.provide('text_game.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('text_game.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("text-game.events","initialize-db","text-game.events/initialize-db",1311440715),(function (_,___$1){
return text_game.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("text-game.events","set-blanks","text-game.events/set-blanks",-161525541),(function (db,p__41191){
var vec__41192 = p__41191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192,(0),null);
var blanks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"remaining-blanks","remaining-blanks",-107429446),blanks),new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.List.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("text-game.events","set-inputs","text-game.events/set-inputs",8251875),(function (db,p__41195){
var vec__41196 = p__41195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196,(0),null);
var inputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196,(1),null);
var blanks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"remaining-blanks","remaining-blanks",-107429446),blanks),new cljs.core.Keyword(null,"inputs","inputs",865803858),inputs);
}));

//# sourceMappingURL=text_game.events.js.map
