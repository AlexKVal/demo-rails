// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs_gravatar.core');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('clojure.string');
cljs_gravatar.core.digest = (function cljs_gravatar$core$digest(s){
var hasher = (new goog.crypt.Md5());
hasher.update(goog.crypt.stringToUtf8ByteArray(clojure.string.lower_case.call(null,s)));

return goog.crypt.byteArrayToHex(hasher.digest());
});
/**
 * Generates gravatar's url for a given email
 * Options are:
 *    size    -- size of image
 *    rating  -- one of :pg, :g, :x,: r which are Parental Guidance,
 *               General Audience, Explicit, and Restricted respectively.
 *    default -- default image if the one choosen doesn't exist. One of
 *               :404       -- a 404 error,
 *               :mm        -- cartoon-style silhouetted outline of a person,
 *               :identicon -- geometric pattern based on an email hash,
 *               :monsterid -- generated 'monster' with different colors, faces, etc,
 *               :wavatar   -- generated faces with differing features and background,
 *               :retro     -- generated 8-bit arcade-style pixelated faces
 */
cljs_gravatar.core.url = (function cljs_gravatar$core$url(var_args){
var args__29463__auto__ = [];
var len__29456__auto___30616 = arguments.length;
var i__29457__auto___30617 = (0);
while(true){
if((i__29457__auto___30617 < len__29456__auto___30616)){
args__29463__auto__.push((arguments[i__29457__auto___30617]));

var G__30618 = (i__29457__auto___30617 + (1));
i__29457__auto___30617 = G__30618;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((1) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((1)),(0),null)):null);
return cljs_gravatar.core.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29464__auto__);
});

cljs_gravatar.core.url.cljs$core$IFn$_invoke$arity$variadic = (function (email,p__30613){
var map__30614 = p__30613;
var map__30614__$1 = ((((!((map__30614 == null)))?((((map__30614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30614):map__30614);
var size = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var rating = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"rating","rating",144173662));
var default$ = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var s = (cljs.core.truth_(size)?["s=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join(''):null);
var r = (cljs.core.truth_(rating)?["r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rating))].join(''):null);
var d = (cljs.core.truth_(default$)?["d=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,default$))].join(''):null);
var params = clojure.string.join.call(null,"&",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,r,d], null)));
var query = ((clojure.string.blank_QMARK_.call(null,params))?null:"?");
return ["https://secure.gravatar.com/avatar/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_gravatar.core.digest.call(null,email)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)].join('');
});

cljs_gravatar.core.url.cljs$lang$maxFixedArity = (1);

cljs_gravatar.core.url.cljs$lang$applyTo = (function (seq30611){
var G__30612 = cljs.core.first.call(null,seq30611);
var seq30611__$1 = cljs.core.next.call(null,seq30611);
return cljs_gravatar.core.url.cljs$core$IFn$_invoke$arity$variadic(G__30612,seq30611__$1);
});


//# sourceMappingURL=core.js.map?rel=1503404156187
