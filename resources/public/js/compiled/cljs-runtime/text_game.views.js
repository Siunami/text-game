goog.provide('text_game.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('text_game.events');
goog.require('text_game.subs');
goog.require('clojure.string');
text_game.views.prompts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nns","nns",-364963773),new cljs.core.Keyword(null,"vbn","vbn",169537189),new cljs.core.Keyword(null,"nn","nn",-984385559),new cljs.core.Keyword(null,"liquid","liquid",1322031275),new cljs.core.Keyword(null,"jj","jj",-1161630610),new cljs.core.Keyword(null,"rb","rb",1673817808),new cljs.core.Keyword(null,"vbd","vbd",-973086895),new cljs.core.Keyword(null,"food","food",1842183121),new cljs.core.Keyword(null,"vbg","vbg",-852163854),new cljs.core.Keyword(null,"animal","animal",-1445940363),new cljs.core.Keyword(null,"animal_plural","animal_plural",-1841866442),new cljs.core.Keyword(null,"vbz","vbz",469522106),new cljs.core.Keyword(null,"body_plural","body_plural",1053003099),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"food_plural","food_plural",-445324929),new cljs.core.Keyword(null,"vb","vb",-975054337)],["plural noun","verb, past participle","noun","type of liquid","adjective","adverb","verb, past tense","type of food","Verb ending in \"ing\"","name of an animal","plural of an animal","Verb ending in \"s\"","plural of a part of the human body","name of a part of the human body","plural of a type of food","verb, base form"]);
text_game.views.extract_prompt = (function text_game$views$extract_prompt(s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(s.lastIndexOf(":") + (1)),s.lastIndexOf("/"));
});
text_game.views.parse_blanks = (function text_game$views$parse_blanks(blanks,prompts){
if(cljs.core.truth_(cljs.core.first(blanks))){
var G__41132 = cljs.core.rest(blanks);
var G__41133 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prompts,text_game.views.extract_prompt(cljs.core.first(blanks)));
return (text_game.views.parse_blanks.cljs$core$IFn$_invoke$arity$2 ? text_game.views.parse_blanks.cljs$core$IFn$_invoke$arity$2(G__41132,G__41133) : text_game.views.parse_blanks.call(null,G__41132,G__41133));
} else {
return prompts;
}
});
text_game.views.get_blank_spaces = (function text_game$views$get_blank_spaces(str){
var pattern = cljs.core.re_pattern("<.{1,10}::.{1,10}>");
return text_game.views.parse_blanks(cljs.core.re_seq(pattern,str),cljs.core.List.EMPTY);
});
text_game.views.text = (function (){var G__41134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.subs","text","text-game.subs/text",-1237571474)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41134) : re_frame.core.subscribe.call(null,G__41134));
})();
text_game.views.input_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null));
text_game.views.setParse = (function text_game$views$setParse(){
var G__41135_41143 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.events","set-blanks","text-game.events/set-blanks",-161525541),text_game.views.get_blank_spaces(cljs.core.deref(text_game.views.text))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41135_41143) : re_frame.core.dispatch.call(null,G__41135_41143));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(text_game.views.text)], 0));
});
text_game.views.setParse();
text_game.views.main_panel = (function text_game$views$main_panel(){
var text = (function (){var G__41137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.subs","text","text-game.subs/text",-1237571474)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41137) : re_frame.core.subscribe.call(null,G__41137));
})();
var blanks = (function (){var G__41138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.subs","remaining-blanks","text-game.subs/remaining-blanks",649510857)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41138) : re_frame.core.subscribe.call(null,G__41138));
})();
var inputs = (function (){var G__41139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.subs","inputs","text-game.subs/inputs",1688023137)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41139) : re_frame.core.subscribe.call(null,G__41139));
})();
if(cljs.core.truth_(cljs.core.first(cljs.core.deref(blanks)))){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"remaining blanks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Prompt: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(text_game.views.prompts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(blanks)))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"user-input",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"val","val",128701612),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(text_game.views.input_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__41136_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(text_game.views.input_data,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),p1__41136_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(text_game.views.input_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null))], 0));

var G__41140_41144 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text-game.events","set-inputs","text-game.events/set-inputs",8251875),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(inputs),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(text_game.views.input_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null))),cljs.core.rest(cljs.core.deref(blanks))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41140_41144) : re_frame.core.dispatch.call(null,G__41140_41144));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(text_game.views.input_data,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"");
})], null),"submit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["rest ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(cljs.core.deref(blanks)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(text_game.views.input_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(blanks))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["inputs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(inputs))].join('')], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["rest ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(cljs.core.deref(blanks)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(text_game.views.input_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(blanks))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["inputs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(inputs))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(text_game.views.prompts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jj","jj",-1161630610)], null))], null)], null)], null);
}
});

//# sourceMappingURL=text_game.views.js.map
