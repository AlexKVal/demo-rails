// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35585 = arguments.length;
var i__29457__auto___35586 = (0);
while(true){
if((i__29457__auto___35586 < len__29456__auto___35585)){
args__29463__auto__.push((arguments[i__29457__auto___35586]));

var G__35587 = (i__29457__auto___35586 + (1));
i__29457__auto___35586 = G__35587;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35584){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35584));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35589 = arguments.length;
var i__29457__auto___35590 = (0);
while(true){
if((i__29457__auto___35590 < len__29456__auto___35589)){
args__29463__auto__.push((arguments[i__29457__auto___35590]));

var G__35591 = (i__29457__auto___35590 + (1));
i__29457__auto___35590 = G__35591;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35588){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35588));
});

var g_QMARK__35592 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_35593 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35592){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__35592))
,null));
var mkg_35594 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35592,g_35593){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__35592,g_35593))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35592,g_35593,mkg_35594){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35592).call(null,x);
});})(g_QMARK__35592,g_35593,mkg_35594))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35592,g_35593,mkg_35594){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35594).call(null,gfn);
});})(g_QMARK__35592,g_35593,mkg_35594))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35592,g_35593,mkg_35594){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35593).call(null,generator);
});})(g_QMARK__35592,g_35593,mkg_35594))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29549__auto___35614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29549__auto___35614){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35615 = arguments.length;
var i__29457__auto___35616 = (0);
while(true){
if((i__29457__auto___35616 < len__29456__auto___35615)){
args__29463__auto__.push((arguments[i__29457__auto___35616]));

var G__35617 = (i__29457__auto___35616 + (1));
i__29457__auto___35616 = G__35617;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35614))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35614){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35614),args);
});})(g__29549__auto___35614))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29549__auto___35614){
return (function (seq35595){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35595));
});})(g__29549__auto___35614))
;


var g__29549__auto___35618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29549__auto___35618){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35619 = arguments.length;
var i__29457__auto___35620 = (0);
while(true){
if((i__29457__auto___35620 < len__29456__auto___35619)){
args__29463__auto__.push((arguments[i__29457__auto___35620]));

var G__35621 = (i__29457__auto___35620 + (1));
i__29457__auto___35620 = G__35621;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35618))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35618){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35618),args);
});})(g__29549__auto___35618))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29549__auto___35618){
return (function (seq35596){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35596));
});})(g__29549__auto___35618))
;


var g__29549__auto___35622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29549__auto___35622){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35623 = arguments.length;
var i__29457__auto___35624 = (0);
while(true){
if((i__29457__auto___35624 < len__29456__auto___35623)){
args__29463__auto__.push((arguments[i__29457__auto___35624]));

var G__35625 = (i__29457__auto___35624 + (1));
i__29457__auto___35624 = G__35625;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35622))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35622){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35622),args);
});})(g__29549__auto___35622))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29549__auto___35622){
return (function (seq35597){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35597));
});})(g__29549__auto___35622))
;


var g__29549__auto___35626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29549__auto___35626){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35627 = arguments.length;
var i__29457__auto___35628 = (0);
while(true){
if((i__29457__auto___35628 < len__29456__auto___35627)){
args__29463__auto__.push((arguments[i__29457__auto___35628]));

var G__35629 = (i__29457__auto___35628 + (1));
i__29457__auto___35628 = G__35629;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35626))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35626){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35626),args);
});})(g__29549__auto___35626))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29549__auto___35626){
return (function (seq35598){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35598));
});})(g__29549__auto___35626))
;


var g__29549__auto___35630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29549__auto___35630){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35631 = arguments.length;
var i__29457__auto___35632 = (0);
while(true){
if((i__29457__auto___35632 < len__29456__auto___35631)){
args__29463__auto__.push((arguments[i__29457__auto___35632]));

var G__35633 = (i__29457__auto___35632 + (1));
i__29457__auto___35632 = G__35633;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35630))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35630){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35630),args);
});})(g__29549__auto___35630))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29549__auto___35630){
return (function (seq35599){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35599));
});})(g__29549__auto___35630))
;


var g__29549__auto___35634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29549__auto___35634){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35635 = arguments.length;
var i__29457__auto___35636 = (0);
while(true){
if((i__29457__auto___35636 < len__29456__auto___35635)){
args__29463__auto__.push((arguments[i__29457__auto___35636]));

var G__35637 = (i__29457__auto___35636 + (1));
i__29457__auto___35636 = G__35637;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35634))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35634){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35634),args);
});})(g__29549__auto___35634))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29549__auto___35634){
return (function (seq35600){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35600));
});})(g__29549__auto___35634))
;


var g__29549__auto___35638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29549__auto___35638){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35639 = arguments.length;
var i__29457__auto___35640 = (0);
while(true){
if((i__29457__auto___35640 < len__29456__auto___35639)){
args__29463__auto__.push((arguments[i__29457__auto___35640]));

var G__35641 = (i__29457__auto___35640 + (1));
i__29457__auto___35640 = G__35641;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35638))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35638){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35638),args);
});})(g__29549__auto___35638))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29549__auto___35638){
return (function (seq35601){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35601));
});})(g__29549__auto___35638))
;


var g__29549__auto___35642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29549__auto___35642){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35643 = arguments.length;
var i__29457__auto___35644 = (0);
while(true){
if((i__29457__auto___35644 < len__29456__auto___35643)){
args__29463__auto__.push((arguments[i__29457__auto___35644]));

var G__35645 = (i__29457__auto___35644 + (1));
i__29457__auto___35644 = G__35645;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35642))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35642){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35642),args);
});})(g__29549__auto___35642))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29549__auto___35642){
return (function (seq35602){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35602));
});})(g__29549__auto___35642))
;


var g__29549__auto___35646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29549__auto___35646){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35647 = arguments.length;
var i__29457__auto___35648 = (0);
while(true){
if((i__29457__auto___35648 < len__29456__auto___35647)){
args__29463__auto__.push((arguments[i__29457__auto___35648]));

var G__35649 = (i__29457__auto___35648 + (1));
i__29457__auto___35648 = G__35649;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35646))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35646),args);
});})(g__29549__auto___35646))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29549__auto___35646){
return (function (seq35603){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35603));
});})(g__29549__auto___35646))
;


var g__29549__auto___35650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29549__auto___35650){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35651 = arguments.length;
var i__29457__auto___35652 = (0);
while(true){
if((i__29457__auto___35652 < len__29456__auto___35651)){
args__29463__auto__.push((arguments[i__29457__auto___35652]));

var G__35653 = (i__29457__auto___35652 + (1));
i__29457__auto___35652 = G__35653;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35650))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35650){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35650),args);
});})(g__29549__auto___35650))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29549__auto___35650){
return (function (seq35604){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35604));
});})(g__29549__auto___35650))
;


var g__29549__auto___35654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29549__auto___35654){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35655 = arguments.length;
var i__29457__auto___35656 = (0);
while(true){
if((i__29457__auto___35656 < len__29456__auto___35655)){
args__29463__auto__.push((arguments[i__29457__auto___35656]));

var G__35657 = (i__29457__auto___35656 + (1));
i__29457__auto___35656 = G__35657;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35654))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35654),args);
});})(g__29549__auto___35654))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29549__auto___35654){
return (function (seq35605){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35605));
});})(g__29549__auto___35654))
;


var g__29549__auto___35658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29549__auto___35658){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35659 = arguments.length;
var i__29457__auto___35660 = (0);
while(true){
if((i__29457__auto___35660 < len__29456__auto___35659)){
args__29463__auto__.push((arguments[i__29457__auto___35660]));

var G__35661 = (i__29457__auto___35660 + (1));
i__29457__auto___35660 = G__35661;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35658))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35658),args);
});})(g__29549__auto___35658))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29549__auto___35658){
return (function (seq35606){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35606));
});})(g__29549__auto___35658))
;


var g__29549__auto___35662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29549__auto___35662){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35663 = arguments.length;
var i__29457__auto___35664 = (0);
while(true){
if((i__29457__auto___35664 < len__29456__auto___35663)){
args__29463__auto__.push((arguments[i__29457__auto___35664]));

var G__35665 = (i__29457__auto___35664 + (1));
i__29457__auto___35664 = G__35665;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35662))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35662),args);
});})(g__29549__auto___35662))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29549__auto___35662){
return (function (seq35607){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35607));
});})(g__29549__auto___35662))
;


var g__29549__auto___35666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29549__auto___35666){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35667 = arguments.length;
var i__29457__auto___35668 = (0);
while(true){
if((i__29457__auto___35668 < len__29456__auto___35667)){
args__29463__auto__.push((arguments[i__29457__auto___35668]));

var G__35669 = (i__29457__auto___35668 + (1));
i__29457__auto___35668 = G__35669;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35666))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35666),args);
});})(g__29549__auto___35666))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29549__auto___35666){
return (function (seq35608){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35608));
});})(g__29549__auto___35666))
;


var g__29549__auto___35670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29549__auto___35670){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35671 = arguments.length;
var i__29457__auto___35672 = (0);
while(true){
if((i__29457__auto___35672 < len__29456__auto___35671)){
args__29463__auto__.push((arguments[i__29457__auto___35672]));

var G__35673 = (i__29457__auto___35672 + (1));
i__29457__auto___35672 = G__35673;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35670))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35670),args);
});})(g__29549__auto___35670))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29549__auto___35670){
return (function (seq35609){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35609));
});})(g__29549__auto___35670))
;


var g__29549__auto___35674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29549__auto___35674){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35675 = arguments.length;
var i__29457__auto___35676 = (0);
while(true){
if((i__29457__auto___35676 < len__29456__auto___35675)){
args__29463__auto__.push((arguments[i__29457__auto___35676]));

var G__35677 = (i__29457__auto___35676 + (1));
i__29457__auto___35676 = G__35677;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35674))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35674),args);
});})(g__29549__auto___35674))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29549__auto___35674){
return (function (seq35610){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35610));
});})(g__29549__auto___35674))
;


var g__29549__auto___35678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29549__auto___35678){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35679 = arguments.length;
var i__29457__auto___35680 = (0);
while(true){
if((i__29457__auto___35680 < len__29456__auto___35679)){
args__29463__auto__.push((arguments[i__29457__auto___35680]));

var G__35681 = (i__29457__auto___35680 + (1));
i__29457__auto___35680 = G__35681;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35678))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35678),args);
});})(g__29549__auto___35678))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29549__auto___35678){
return (function (seq35611){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35611));
});})(g__29549__auto___35678))
;


var g__29549__auto___35682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29549__auto___35682){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35683 = arguments.length;
var i__29457__auto___35684 = (0);
while(true){
if((i__29457__auto___35684 < len__29456__auto___35683)){
args__29463__auto__.push((arguments[i__29457__auto___35684]));

var G__35685 = (i__29457__auto___35684 + (1));
i__29457__auto___35684 = G__35685;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35682))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35682),args);
});})(g__29549__auto___35682))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29549__auto___35682){
return (function (seq35612){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35612));
});})(g__29549__auto___35682))
;


var g__29549__auto___35686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29549__auto___35686){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35687 = arguments.length;
var i__29457__auto___35688 = (0);
while(true){
if((i__29457__auto___35688 < len__29456__auto___35687)){
args__29463__auto__.push((arguments[i__29457__auto___35688]));

var G__35689 = (i__29457__auto___35688 + (1));
i__29457__auto___35688 = G__35689;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29549__auto___35686))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29549__auto___35686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29549__auto___35686),args);
});})(g__29549__auto___35686))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29549__auto___35686){
return (function (seq35613){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35613));
});})(g__29549__auto___35686))
;

var g__29562__auto___35711 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29562__auto___35711){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35712 = arguments.length;
var i__29457__auto___35713 = (0);
while(true){
if((i__29457__auto___35713 < len__29456__auto___35712)){
args__29463__auto__.push((arguments[i__29457__auto___35713]));

var G__35714 = (i__29457__auto___35713 + (1));
i__29457__auto___35713 = G__35714;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35711))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35711){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35711);
});})(g__29562__auto___35711))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29562__auto___35711){
return (function (seq35690){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35690));
});})(g__29562__auto___35711))
;


var g__29562__auto___35715 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29562__auto___35715){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35716 = arguments.length;
var i__29457__auto___35717 = (0);
while(true){
if((i__29457__auto___35717 < len__29456__auto___35716)){
args__29463__auto__.push((arguments[i__29457__auto___35717]));

var G__35718 = (i__29457__auto___35717 + (1));
i__29457__auto___35717 = G__35718;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35715))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35715){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35715);
});})(g__29562__auto___35715))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29562__auto___35715){
return (function (seq35691){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35691));
});})(g__29562__auto___35715))
;


var g__29562__auto___35719 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29562__auto___35719){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35720 = arguments.length;
var i__29457__auto___35721 = (0);
while(true){
if((i__29457__auto___35721 < len__29456__auto___35720)){
args__29463__auto__.push((arguments[i__29457__auto___35721]));

var G__35722 = (i__29457__auto___35721 + (1));
i__29457__auto___35721 = G__35722;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35719))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35719){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35719);
});})(g__29562__auto___35719))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29562__auto___35719){
return (function (seq35692){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35692));
});})(g__29562__auto___35719))
;


var g__29562__auto___35723 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29562__auto___35723){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35724 = arguments.length;
var i__29457__auto___35725 = (0);
while(true){
if((i__29457__auto___35725 < len__29456__auto___35724)){
args__29463__auto__.push((arguments[i__29457__auto___35725]));

var G__35726 = (i__29457__auto___35725 + (1));
i__29457__auto___35725 = G__35726;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35723))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35723){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35723);
});})(g__29562__auto___35723))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29562__auto___35723){
return (function (seq35693){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35693));
});})(g__29562__auto___35723))
;


var g__29562__auto___35727 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29562__auto___35727){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35728 = arguments.length;
var i__29457__auto___35729 = (0);
while(true){
if((i__29457__auto___35729 < len__29456__auto___35728)){
args__29463__auto__.push((arguments[i__29457__auto___35729]));

var G__35730 = (i__29457__auto___35729 + (1));
i__29457__auto___35729 = G__35730;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35727))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35727){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35727);
});})(g__29562__auto___35727))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29562__auto___35727){
return (function (seq35694){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35694));
});})(g__29562__auto___35727))
;


var g__29562__auto___35731 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29562__auto___35731){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35732 = arguments.length;
var i__29457__auto___35733 = (0);
while(true){
if((i__29457__auto___35733 < len__29456__auto___35732)){
args__29463__auto__.push((arguments[i__29457__auto___35733]));

var G__35734 = (i__29457__auto___35733 + (1));
i__29457__auto___35733 = G__35734;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35731))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35731){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35731);
});})(g__29562__auto___35731))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29562__auto___35731){
return (function (seq35695){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35695));
});})(g__29562__auto___35731))
;


var g__29562__auto___35735 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29562__auto___35735){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35736 = arguments.length;
var i__29457__auto___35737 = (0);
while(true){
if((i__29457__auto___35737 < len__29456__auto___35736)){
args__29463__auto__.push((arguments[i__29457__auto___35737]));

var G__35738 = (i__29457__auto___35737 + (1));
i__29457__auto___35737 = G__35738;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35735))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35735){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35735);
});})(g__29562__auto___35735))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29562__auto___35735){
return (function (seq35696){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35696));
});})(g__29562__auto___35735))
;


var g__29562__auto___35739 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29562__auto___35739){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35740 = arguments.length;
var i__29457__auto___35741 = (0);
while(true){
if((i__29457__auto___35741 < len__29456__auto___35740)){
args__29463__auto__.push((arguments[i__29457__auto___35741]));

var G__35742 = (i__29457__auto___35741 + (1));
i__29457__auto___35741 = G__35742;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35739))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35739){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35739);
});})(g__29562__auto___35739))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29562__auto___35739){
return (function (seq35697){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35697));
});})(g__29562__auto___35739))
;


var g__29562__auto___35743 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29562__auto___35743){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35744 = arguments.length;
var i__29457__auto___35745 = (0);
while(true){
if((i__29457__auto___35745 < len__29456__auto___35744)){
args__29463__auto__.push((arguments[i__29457__auto___35745]));

var G__35746 = (i__29457__auto___35745 + (1));
i__29457__auto___35745 = G__35746;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35743))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35743){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35743);
});})(g__29562__auto___35743))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29562__auto___35743){
return (function (seq35698){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35698));
});})(g__29562__auto___35743))
;


var g__29562__auto___35747 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29562__auto___35747){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35748 = arguments.length;
var i__29457__auto___35749 = (0);
while(true){
if((i__29457__auto___35749 < len__29456__auto___35748)){
args__29463__auto__.push((arguments[i__29457__auto___35749]));

var G__35750 = (i__29457__auto___35749 + (1));
i__29457__auto___35749 = G__35750;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35747))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35747){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35747);
});})(g__29562__auto___35747))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29562__auto___35747){
return (function (seq35699){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35699));
});})(g__29562__auto___35747))
;


var g__29562__auto___35751 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29562__auto___35751){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35752 = arguments.length;
var i__29457__auto___35753 = (0);
while(true){
if((i__29457__auto___35753 < len__29456__auto___35752)){
args__29463__auto__.push((arguments[i__29457__auto___35753]));

var G__35754 = (i__29457__auto___35753 + (1));
i__29457__auto___35753 = G__35754;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35751))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35751){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35751);
});})(g__29562__auto___35751))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29562__auto___35751){
return (function (seq35700){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35700));
});})(g__29562__auto___35751))
;


var g__29562__auto___35755 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29562__auto___35755){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35756 = arguments.length;
var i__29457__auto___35757 = (0);
while(true){
if((i__29457__auto___35757 < len__29456__auto___35756)){
args__29463__auto__.push((arguments[i__29457__auto___35757]));

var G__35758 = (i__29457__auto___35757 + (1));
i__29457__auto___35757 = G__35758;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35755))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35755){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35755);
});})(g__29562__auto___35755))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29562__auto___35755){
return (function (seq35701){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35701));
});})(g__29562__auto___35755))
;


var g__29562__auto___35759 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29562__auto___35759){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35760 = arguments.length;
var i__29457__auto___35761 = (0);
while(true){
if((i__29457__auto___35761 < len__29456__auto___35760)){
args__29463__auto__.push((arguments[i__29457__auto___35761]));

var G__35762 = (i__29457__auto___35761 + (1));
i__29457__auto___35761 = G__35762;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35759))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35759){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35759);
});})(g__29562__auto___35759))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29562__auto___35759){
return (function (seq35702){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35702));
});})(g__29562__auto___35759))
;


var g__29562__auto___35763 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29562__auto___35763){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35764 = arguments.length;
var i__29457__auto___35765 = (0);
while(true){
if((i__29457__auto___35765 < len__29456__auto___35764)){
args__29463__auto__.push((arguments[i__29457__auto___35765]));

var G__35766 = (i__29457__auto___35765 + (1));
i__29457__auto___35765 = G__35766;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35763))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35763){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35763);
});})(g__29562__auto___35763))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29562__auto___35763){
return (function (seq35703){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35703));
});})(g__29562__auto___35763))
;


var g__29562__auto___35767 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29562__auto___35767){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35768 = arguments.length;
var i__29457__auto___35769 = (0);
while(true){
if((i__29457__auto___35769 < len__29456__auto___35768)){
args__29463__auto__.push((arguments[i__29457__auto___35769]));

var G__35770 = (i__29457__auto___35769 + (1));
i__29457__auto___35769 = G__35770;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35767))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35767){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35767);
});})(g__29562__auto___35767))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29562__auto___35767){
return (function (seq35704){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35704));
});})(g__29562__auto___35767))
;


var g__29562__auto___35771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29562__auto___35771){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35772 = arguments.length;
var i__29457__auto___35773 = (0);
while(true){
if((i__29457__auto___35773 < len__29456__auto___35772)){
args__29463__auto__.push((arguments[i__29457__auto___35773]));

var G__35774 = (i__29457__auto___35773 + (1));
i__29457__auto___35773 = G__35774;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35771))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35771){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35771);
});})(g__29562__auto___35771))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29562__auto___35771){
return (function (seq35705){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35705));
});})(g__29562__auto___35771))
;


var g__29562__auto___35775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29562__auto___35775){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35776 = arguments.length;
var i__29457__auto___35777 = (0);
while(true){
if((i__29457__auto___35777 < len__29456__auto___35776)){
args__29463__auto__.push((arguments[i__29457__auto___35777]));

var G__35778 = (i__29457__auto___35777 + (1));
i__29457__auto___35777 = G__35778;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35775))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35775){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35775);
});})(g__29562__auto___35775))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29562__auto___35775){
return (function (seq35706){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35706));
});})(g__29562__auto___35775))
;


var g__29562__auto___35779 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29562__auto___35779){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35780 = arguments.length;
var i__29457__auto___35781 = (0);
while(true){
if((i__29457__auto___35781 < len__29456__auto___35780)){
args__29463__auto__.push((arguments[i__29457__auto___35781]));

var G__35782 = (i__29457__auto___35781 + (1));
i__29457__auto___35781 = G__35782;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35779))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35779){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35779);
});})(g__29562__auto___35779))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29562__auto___35779){
return (function (seq35707){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35707));
});})(g__29562__auto___35779))
;


var g__29562__auto___35783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29562__auto___35783){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35784 = arguments.length;
var i__29457__auto___35785 = (0);
while(true){
if((i__29457__auto___35785 < len__29456__auto___35784)){
args__29463__auto__.push((arguments[i__29457__auto___35785]));

var G__35786 = (i__29457__auto___35785 + (1));
i__29457__auto___35785 = G__35786;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35783))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35783){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35783);
});})(g__29562__auto___35783))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29562__auto___35783){
return (function (seq35708){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35708));
});})(g__29562__auto___35783))
;


var g__29562__auto___35787 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29562__auto___35787){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35788 = arguments.length;
var i__29457__auto___35789 = (0);
while(true){
if((i__29457__auto___35789 < len__29456__auto___35788)){
args__29463__auto__.push((arguments[i__29457__auto___35789]));

var G__35790 = (i__29457__auto___35789 + (1));
i__29457__auto___35789 = G__35790;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35787))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35787){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35787);
});})(g__29562__auto___35787))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29562__auto___35787){
return (function (seq35709){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35709));
});})(g__29562__auto___35787))
;


var g__29562__auto___35791 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29562__auto___35791){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35792 = arguments.length;
var i__29457__auto___35793 = (0);
while(true){
if((i__29457__auto___35793 < len__29456__auto___35792)){
args__29463__auto__.push((arguments[i__29457__auto___35793]));

var G__35794 = (i__29457__auto___35793 + (1));
i__29457__auto___35793 = G__35794;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__29562__auto___35791))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29562__auto___35791){
return (function (args){
return cljs.core.deref.call(null,g__29562__auto___35791);
});})(g__29562__auto___35791))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29562__auto___35791){
return (function (seq35710){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35710));
});})(g__29562__auto___35791))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29463__auto__ = [];
var len__29456__auto___35797 = arguments.length;
var i__29457__auto___35798 = (0);
while(true){
if((i__29457__auto___35798 < len__29456__auto___35797)){
args__29463__auto__.push((arguments[i__29457__auto___35798]));

var G__35799 = (i__29457__auto___35798 + (1));
i__29457__auto___35798 = G__35799;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35795_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35795_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35796){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35796));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35800_SHARP_){
return (new Date(p1__35800_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1503404162652
