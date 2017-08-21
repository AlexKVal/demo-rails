// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36380){
var map__36381 = p__36380;
var map__36381__$1 = ((((!((map__36381 == null)))?((((map__36381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36381):map__36381);
var m = map__36381__$1;
var n = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36383_36405 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36384_36406 = null;
var count__36385_36407 = (0);
var i__36386_36408 = (0);
while(true){
if((i__36386_36408 < count__36385_36407)){
var f_36409 = cljs.core._nth.call(null,chunk__36384_36406,i__36386_36408);
cljs.core.println.call(null,"  ",f_36409);

var G__36410 = seq__36383_36405;
var G__36411 = chunk__36384_36406;
var G__36412 = count__36385_36407;
var G__36413 = (i__36386_36408 + (1));
seq__36383_36405 = G__36410;
chunk__36384_36406 = G__36411;
count__36385_36407 = G__36412;
i__36386_36408 = G__36413;
continue;
} else {
var temp__4657__auto___36414 = cljs.core.seq.call(null,seq__36383_36405);
if(temp__4657__auto___36414){
var seq__36383_36415__$1 = temp__4657__auto___36414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36383_36415__$1)){
var c__29126__auto___36416 = cljs.core.chunk_first.call(null,seq__36383_36415__$1);
var G__36417 = cljs.core.chunk_rest.call(null,seq__36383_36415__$1);
var G__36418 = c__29126__auto___36416;
var G__36419 = cljs.core.count.call(null,c__29126__auto___36416);
var G__36420 = (0);
seq__36383_36405 = G__36417;
chunk__36384_36406 = G__36418;
count__36385_36407 = G__36419;
i__36386_36408 = G__36420;
continue;
} else {
var f_36421 = cljs.core.first.call(null,seq__36383_36415__$1);
cljs.core.println.call(null,"  ",f_36421);

var G__36422 = cljs.core.next.call(null,seq__36383_36415__$1);
var G__36423 = null;
var G__36424 = (0);
var G__36425 = (0);
seq__36383_36405 = G__36422;
chunk__36384_36406 = G__36423;
count__36385_36407 = G__36424;
i__36386_36408 = G__36425;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36426 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36426);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36426)))?cljs.core.second.call(null,arglists_36426):arglists_36426));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36387_36427 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36388_36428 = null;
var count__36389_36429 = (0);
var i__36390_36430 = (0);
while(true){
if((i__36390_36430 < count__36389_36429)){
var vec__36391_36431 = cljs.core._nth.call(null,chunk__36388_36428,i__36390_36430);
var name_36432 = cljs.core.nth.call(null,vec__36391_36431,(0),null);
var map__36394_36433 = cljs.core.nth.call(null,vec__36391_36431,(1),null);
var map__36394_36434__$1 = ((((!((map__36394_36433 == null)))?((((map__36394_36433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36394_36433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36394_36433):map__36394_36433);
var doc_36435 = cljs.core.get.call(null,map__36394_36434__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36436 = cljs.core.get.call(null,map__36394_36434__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36432);

cljs.core.println.call(null," ",arglists_36436);

if(cljs.core.truth_(doc_36435)){
cljs.core.println.call(null," ",doc_36435);
} else {
}

var G__36437 = seq__36387_36427;
var G__36438 = chunk__36388_36428;
var G__36439 = count__36389_36429;
var G__36440 = (i__36390_36430 + (1));
seq__36387_36427 = G__36437;
chunk__36388_36428 = G__36438;
count__36389_36429 = G__36439;
i__36390_36430 = G__36440;
continue;
} else {
var temp__4657__auto___36441 = cljs.core.seq.call(null,seq__36387_36427);
if(temp__4657__auto___36441){
var seq__36387_36442__$1 = temp__4657__auto___36441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36387_36442__$1)){
var c__29126__auto___36443 = cljs.core.chunk_first.call(null,seq__36387_36442__$1);
var G__36444 = cljs.core.chunk_rest.call(null,seq__36387_36442__$1);
var G__36445 = c__29126__auto___36443;
var G__36446 = cljs.core.count.call(null,c__29126__auto___36443);
var G__36447 = (0);
seq__36387_36427 = G__36444;
chunk__36388_36428 = G__36445;
count__36389_36429 = G__36446;
i__36390_36430 = G__36447;
continue;
} else {
var vec__36396_36448 = cljs.core.first.call(null,seq__36387_36442__$1);
var name_36449 = cljs.core.nth.call(null,vec__36396_36448,(0),null);
var map__36399_36450 = cljs.core.nth.call(null,vec__36396_36448,(1),null);
var map__36399_36451__$1 = ((((!((map__36399_36450 == null)))?((((map__36399_36450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36399_36450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36399_36450):map__36399_36450);
var doc_36452 = cljs.core.get.call(null,map__36399_36451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36453 = cljs.core.get.call(null,map__36399_36451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36449);

cljs.core.println.call(null," ",arglists_36453);

if(cljs.core.truth_(doc_36452)){
cljs.core.println.call(null," ",doc_36452);
} else {
}

var G__36454 = cljs.core.next.call(null,seq__36387_36442__$1);
var G__36455 = null;
var G__36456 = (0);
var G__36457 = (0);
seq__36387_36427 = G__36454;
chunk__36388_36428 = G__36455;
count__36389_36429 = G__36456;
i__36390_36430 = G__36457;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36401 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36402 = null;
var count__36403 = (0);
var i__36404 = (0);
while(true){
if((i__36404 < count__36403)){
var role = cljs.core._nth.call(null,chunk__36402,i__36404);
var temp__4657__auto___36458__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36458__$1)){
var spec_36459 = temp__4657__auto___36458__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36459));
} else {
}

var G__36460 = seq__36401;
var G__36461 = chunk__36402;
var G__36462 = count__36403;
var G__36463 = (i__36404 + (1));
seq__36401 = G__36460;
chunk__36402 = G__36461;
count__36403 = G__36462;
i__36404 = G__36463;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36401);
if(temp__4657__auto____$1){
var seq__36401__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36401__$1)){
var c__29126__auto__ = cljs.core.chunk_first.call(null,seq__36401__$1);
var G__36464 = cljs.core.chunk_rest.call(null,seq__36401__$1);
var G__36465 = c__29126__auto__;
var G__36466 = cljs.core.count.call(null,c__29126__auto__);
var G__36467 = (0);
seq__36401 = G__36464;
chunk__36402 = G__36465;
count__36403 = G__36466;
i__36404 = G__36467;
continue;
} else {
var role = cljs.core.first.call(null,seq__36401__$1);
var temp__4657__auto___36468__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36468__$2)){
var spec_36469 = temp__4657__auto___36468__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36469));
} else {
}

var G__36470 = cljs.core.next.call(null,seq__36401__$1);
var G__36471 = null;
var G__36472 = (0);
var G__36473 = (0);
seq__36401 = G__36470;
chunk__36402 = G__36471;
count__36403 = G__36472;
i__36404 = G__36473;
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

//# sourceMappingURL=repl.js.map?rel=1503404164006
