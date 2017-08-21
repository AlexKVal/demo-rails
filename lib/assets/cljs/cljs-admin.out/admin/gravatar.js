// Compiled by ClojureScript 1.9.908 {}
goog.provide('admin.gravatar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_gravatar.core');
admin.gravatar.gravatar_img = (function admin$gravatar$gravatar_img(var_args){
var args__29463__auto__ = [];
var len__29456__auto___39930 = arguments.length;
var i__29457__auto___39931 = (0);
while(true){
if((i__29457__auto___39931 < len__29456__auto___39930)){
args__29463__auto__.push((arguments[i__29457__auto___39931]));

var G__39932 = (i__29457__auto___39931 + (1));
i__29457__auto___39931 = G__39932;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((1) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((1)),(0),null)):null);
return admin.gravatar.gravatar_img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29464__auto__);
});

admin.gravatar.gravatar_img.cljs$core$IFn$_invoke$arity$variadic = (function (email,p__39927){
var map__39928 = p__39927;
var map__39928__$1 = ((((!((map__39928 == null)))?((((map__39928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39928):map__39928);
var size = cljs.core.get.call(null,map__39928__$1,new cljs.core.Keyword(null,"size","size",1098693007),(80));
var url = cljs_gravatar.core.url.call(null,email,new cljs.core.Keyword(null,"size","size",1098693007),size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"alt","alt",-3214426),email,new cljs.core.Keyword(null,"class","class",-2030961996),"gravatar"], null)], null);
});

admin.gravatar.gravatar_img.cljs$lang$maxFixedArity = (1);

admin.gravatar.gravatar_img.cljs$lang$applyTo = (function (seq39925){
var G__39926 = cljs.core.first.call(null,seq39925);
var seq39925__$1 = cljs.core.next.call(null,seq39925);
return admin.gravatar.gravatar_img.cljs$core$IFn$_invoke$arity$variadic(G__39926,seq39925__$1);
});


//# sourceMappingURL=gravatar.js.map?rel=1503404225114
