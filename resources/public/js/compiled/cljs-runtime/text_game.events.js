goog.provide('text_game.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('text_game.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("text-game.events","initialize-db","text-game.events/initialize-db",1311440715),(function (_,___$1){
return text_game.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("text-game.events","set-blanks","text-game.events/set-blanks",-161525541),(function (db,p__42291){
var vec__42292 = p__42291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42292,(0),null);
var blanks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42292,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"remaining-blanks","remaining-blanks",-107429446),blanks);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("text-game.events","set-inputs","text-game.events/set-inputs",8251875),(function (db,p__42295){
var vec__42296 = p__42295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42296,(0),null);
var inputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42296,(1),null);
var blanks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42296,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"remaining-blanks","remaining-blanks",-107429446),blanks),new cljs.core.Keyword(null,"inputs","inputs",865803858),inputs);
}));

//# sourceMappingURL=text_game.events.js.map
