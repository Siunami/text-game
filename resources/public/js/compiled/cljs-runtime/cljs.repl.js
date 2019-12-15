goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51512){
var map__51513 = p__51512;
var map__51513__$1 = (((((!((map__51513 == null))))?(((((map__51513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51513):map__51513);
var m = map__51513__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51513__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51513__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51515_51690 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51516_51691 = null;
var count__51517_51692 = (0);
var i__51518_51693 = (0);
while(true){
if((i__51518_51693 < count__51517_51692)){
var f_51703 = chunk__51516_51691.cljs$core$IIndexed$_nth$arity$2(null,i__51518_51693);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51703], 0));


var G__51704 = seq__51515_51690;
var G__51705 = chunk__51516_51691;
var G__51706 = count__51517_51692;
var G__51707 = (i__51518_51693 + (1));
seq__51515_51690 = G__51704;
chunk__51516_51691 = G__51705;
count__51517_51692 = G__51706;
i__51518_51693 = G__51707;
continue;
} else {
var temp__5735__auto___51708 = cljs.core.seq(seq__51515_51690);
if(temp__5735__auto___51708){
var seq__51515_51709__$1 = temp__5735__auto___51708;
if(cljs.core.chunked_seq_QMARK_(seq__51515_51709__$1)){
var c__4609__auto___51710 = cljs.core.chunk_first(seq__51515_51709__$1);
var G__51711 = cljs.core.chunk_rest(seq__51515_51709__$1);
var G__51712 = c__4609__auto___51710;
var G__51713 = cljs.core.count(c__4609__auto___51710);
var G__51714 = (0);
seq__51515_51690 = G__51711;
chunk__51516_51691 = G__51712;
count__51517_51692 = G__51713;
i__51518_51693 = G__51714;
continue;
} else {
var f_51715 = cljs.core.first(seq__51515_51709__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51715], 0));


var G__51716 = cljs.core.next(seq__51515_51709__$1);
var G__51717 = null;
var G__51718 = (0);
var G__51719 = (0);
seq__51515_51690 = G__51716;
chunk__51516_51691 = G__51717;
count__51517_51692 = G__51718;
i__51518_51693 = G__51719;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51720 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51720], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51720)))?cljs.core.second(arglists_51720):arglists_51720)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51519_51728 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51520_51729 = null;
var count__51521_51730 = (0);
var i__51522_51731 = (0);
while(true){
if((i__51522_51731 < count__51521_51730)){
var vec__51533_51732 = chunk__51520_51729.cljs$core$IIndexed$_nth$arity$2(null,i__51522_51731);
var name_51733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51533_51732,(0),null);
var map__51536_51734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51533_51732,(1),null);
var map__51536_51735__$1 = (((((!((map__51536_51734 == null))))?(((((map__51536_51734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51536_51734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51536_51734):map__51536_51734);
var doc_51736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51536_51735__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51536_51735__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51733], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51737], 0));

if(cljs.core.truth_(doc_51736)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51736], 0));
} else {
}


var G__51742 = seq__51519_51728;
var G__51743 = chunk__51520_51729;
var G__51744 = count__51521_51730;
var G__51745 = (i__51522_51731 + (1));
seq__51519_51728 = G__51742;
chunk__51520_51729 = G__51743;
count__51521_51730 = G__51744;
i__51522_51731 = G__51745;
continue;
} else {
var temp__5735__auto___51747 = cljs.core.seq(seq__51519_51728);
if(temp__5735__auto___51747){
var seq__51519_51749__$1 = temp__5735__auto___51747;
if(cljs.core.chunked_seq_QMARK_(seq__51519_51749__$1)){
var c__4609__auto___51751 = cljs.core.chunk_first(seq__51519_51749__$1);
var G__51752 = cljs.core.chunk_rest(seq__51519_51749__$1);
var G__51753 = c__4609__auto___51751;
var G__51754 = cljs.core.count(c__4609__auto___51751);
var G__51755 = (0);
seq__51519_51728 = G__51752;
chunk__51520_51729 = G__51753;
count__51521_51730 = G__51754;
i__51522_51731 = G__51755;
continue;
} else {
var vec__51538_51760 = cljs.core.first(seq__51519_51749__$1);
var name_51761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51538_51760,(0),null);
var map__51541_51762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51538_51760,(1),null);
var map__51541_51763__$1 = (((((!((map__51541_51762 == null))))?(((((map__51541_51762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51541_51762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51541_51762):map__51541_51762);
var doc_51764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51541_51763__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51541_51763__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51761], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51765], 0));

if(cljs.core.truth_(doc_51764)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51764], 0));
} else {
}


var G__51769 = cljs.core.next(seq__51519_51749__$1);
var G__51770 = null;
var G__51771 = (0);
var G__51772 = (0);
seq__51519_51728 = G__51769;
chunk__51520_51729 = G__51770;
count__51521_51730 = G__51771;
i__51522_51731 = G__51772;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51543 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51544 = null;
var count__51545 = (0);
var i__51546 = (0);
while(true){
if((i__51546 < count__51545)){
var role = chunk__51544.cljs$core$IIndexed$_nth$arity$2(null,i__51546);
var temp__5735__auto___51777__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51777__$1)){
var spec_51778 = temp__5735__auto___51777__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51778)], 0));
} else {
}


var G__51779 = seq__51543;
var G__51780 = chunk__51544;
var G__51781 = count__51545;
var G__51782 = (i__51546 + (1));
seq__51543 = G__51779;
chunk__51544 = G__51780;
count__51545 = G__51781;
i__51546 = G__51782;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51543);
if(temp__5735__auto____$1){
var seq__51543__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51543__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51543__$1);
var G__51785 = cljs.core.chunk_rest(seq__51543__$1);
var G__51786 = c__4609__auto__;
var G__51787 = cljs.core.count(c__4609__auto__);
var G__51788 = (0);
seq__51543 = G__51785;
chunk__51544 = G__51786;
count__51545 = G__51787;
i__51546 = G__51788;
continue;
} else {
var role = cljs.core.first(seq__51543__$1);
var temp__5735__auto___51789__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51789__$2)){
var spec_51790 = temp__5735__auto___51789__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51790)], 0));
} else {
}


var G__51791 = cljs.core.next(seq__51543__$1);
var G__51792 = null;
var G__51793 = (0);
var G__51794 = (0);
seq__51543 = G__51791;
chunk__51544 = G__51792;
count__51545 = G__51793;
i__51546 = G__51794;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51795 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51796 = cljs.core.ex_cause(t);
via = G__51795;
t = G__51796;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51557 = datafied_throwable;
var map__51557__$1 = (((((!((map__51557 == null))))?(((((map__51557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51557):map__51557);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51557__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51557__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51557__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51558 = cljs.core.last(via);
var map__51558__$1 = (((((!((map__51558 == null))))?(((((map__51558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51558):map__51558);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51558__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51558__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51558__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51559 = data;
var map__51559__$1 = (((((!((map__51559 == null))))?(((((map__51559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51559):map__51559);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51559__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51559__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51559__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51560 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51560__$1 = (((((!((map__51560 == null))))?(((((map__51560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51560):map__51560);
var top_data = map__51560__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51560__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51569 = phase;
var G__51569__$1 = (((G__51569 instanceof cljs.core.Keyword))?G__51569.fqn:null);
switch (G__51569__$1) {
case "read-source":
var map__51570 = data;
var map__51570__$1 = (((((!((map__51570 == null))))?(((((map__51570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51570):map__51570);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51570__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51570__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51572 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51572__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51572,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51572);
var G__51572__$2 = (cljs.core.truth_((function (){var fexpr__51573 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51573.cljs$core$IFn$_invoke$arity$1 ? fexpr__51573.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51573.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51572__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51572__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51572__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51572__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51575 = top_data;
var G__51575__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51575,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51575);
var G__51575__$2 = (cljs.core.truth_((function (){var fexpr__51576 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51576.cljs$core$IFn$_invoke$arity$1 ? fexpr__51576.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51576.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51575__$1);
var G__51575__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51575__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51575__$2);
var G__51575__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51575__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51575__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51575__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51575__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51577 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51577,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51577,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51577,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51577,(3),null);
var G__51580 = top_data;
var G__51580__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51580,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51580);
var G__51580__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51580__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51580__$1);
var G__51580__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51580__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51580__$2);
var G__51580__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51580__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51580__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51580__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51580__$4;
}

break;
case "execution":
var vec__51581 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51581,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51581,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51581,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51581,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51556_SHARP_){
var or__4185__auto__ = (p1__51556_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__51585 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51585.cljs$core$IFn$_invoke$arity$1 ? fexpr__51585.cljs$core$IFn$_invoke$arity$1(p1__51556_SHARP_) : fexpr__51585.call(null,p1__51556_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__51586 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51586__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51586,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51586);
var G__51586__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51586__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51586__$1);
var G__51586__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51586__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51586__$2);
var G__51586__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51586__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51586__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51586__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51586__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51569__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51592){
var map__51593 = p__51592;
var map__51593__$1 = (((((!((map__51593 == null))))?(((((map__51593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51593):map__51593);
var triage_data = map__51593__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51593__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51593__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51593__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51593__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51593__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51593__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51593__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51593__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51599 = phase;
var G__51599__$1 = (((G__51599 instanceof cljs.core.Keyword))?G__51599.fqn:null);
switch (G__51599__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51604 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51605 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51606 = loc;
var G__51607 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51617_51813 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51618_51814 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51619_51815 = true;
var _STAR_print_fn_STAR__temp_val__51620_51816 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51619_51815);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51620_51816);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51590_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51590_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51618_51814);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51617_51813);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51604,G__51605,G__51606,G__51607) : format.call(null,G__51604,G__51605,G__51606,G__51607));

break;
case "macroexpansion":
var G__51621 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51622 = cause_type;
var G__51623 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51624 = loc;
var G__51625 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51621,G__51622,G__51623,G__51624,G__51625) : format.call(null,G__51621,G__51622,G__51623,G__51624,G__51625));

break;
case "compile-syntax-check":
var G__51626 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51627 = cause_type;
var G__51628 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51629 = loc;
var G__51630 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51626,G__51627,G__51628,G__51629,G__51630) : format.call(null,G__51626,G__51627,G__51628,G__51629,G__51630));

break;
case "compilation":
var G__51631 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51632 = cause_type;
var G__51633 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51634 = loc;
var G__51635 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51631,G__51632,G__51633,G__51634,G__51635) : format.call(null,G__51631,G__51632,G__51633,G__51634,G__51635));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51636 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51637 = symbol;
var G__51638 = loc;
var G__51639 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51643_51825 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51644_51826 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51645_51827 = true;
var _STAR_print_fn_STAR__temp_val__51646_51828 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51645_51827);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51646_51828);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51591_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51591_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51644_51826);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51643_51825);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51636,G__51637,G__51638,G__51639) : format.call(null,G__51636,G__51637,G__51638,G__51639));
} else {
var G__51656 = "Execution error%s at %s(%s).\n%s\n";
var G__51657 = cause_type;
var G__51658 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51659 = loc;
var G__51660 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51656,G__51657,G__51658,G__51659,G__51660) : format.call(null,G__51656,G__51657,G__51658,G__51659,G__51660));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51599__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
