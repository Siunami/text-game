goog.provide('text_game.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('text_game.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("text-game.events","initialize-db","text-game.events/initialize-db",1311440715),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"re-frame",new cljs.core.Keyword(null,"text","text",-1790561697),"\"Little Red Riding <Hood::nn/>\" is a/an <beloved::jj/> fairy tale for young children.\nIt is a story about a/an <young::jj/> girl and a wolf.\nThe girl's mother sends her to take <food::food/> to her sick grandmother.\nThe mother tells her she must not <stop::vb/> on the way.\nA wolf sees the girl walking through the <woods::nns/> and makes a plan to <eat::vb/> her.\nThe wolf <politely::rb/> asks the girl where she is going.\nThe girl <answers::vbz/> him, because he seems <friendly::jj/>.\nThen the wolf tells her to pick some <flowers::nns/> for her grandmother.\nWhile she is <picking::vbg/> flowers, the wolf goes to her grandmother's house and eats her.\nHe puts on the grandmother's <night-cap::nn/> and gets into her bed.\nWhen the girl arrives at her grandmother's house, she gets into <bed::nn/> with the wolf.\nThe wolf leaps upon the child and <eats::vbz/> her.",new cljs.core.Keyword(null,"remaining-blanks","remaining-blanks",-107429446),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.List.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("text-game.events","set-blanks","text-game.events/set-blanks",-161525541),(function (db,p__41047){
var vec__41048 = p__41047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41048,(0),null);
var blanks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41048,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"remaining-blanks","remaining-blanks",-107429446),blanks);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("text-game.events","set-inputs","text-game.events/set-inputs",8251875),(function (db,p__41051){
var vec__41052 = p__41051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41052,(0),null);
var inputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41052,(1),null);
var blanks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41052,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"remaining-blanks","remaining-blanks",-107429446),blanks),new cljs.core.Keyword(null,"inputs","inputs",865803858),inputs);
}));

//# sourceMappingURL=text_game.events.js.map
