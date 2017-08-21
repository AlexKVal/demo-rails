// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28286__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28286__auto__){
return or__28286__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28286__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34958_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34958_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34959 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34960 = null;
var count__34961 = (0);
var i__34962 = (0);
while(true){
if((i__34962 < count__34961)){
var n = cljs.core._nth.call(null,chunk__34960,i__34962);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34963 = seq__34959;
var G__34964 = chunk__34960;
var G__34965 = count__34961;
var G__34966 = (i__34962 + (1));
seq__34959 = G__34963;
chunk__34960 = G__34964;
count__34961 = G__34965;
i__34962 = G__34966;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34959);
if(temp__4657__auto__){
var seq__34959__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34959__$1)){
var c__29126__auto__ = cljs.core.chunk_first.call(null,seq__34959__$1);
var G__34967 = cljs.core.chunk_rest.call(null,seq__34959__$1);
var G__34968 = c__29126__auto__;
var G__34969 = cljs.core.count.call(null,c__29126__auto__);
var G__34970 = (0);
seq__34959 = G__34967;
chunk__34960 = G__34968;
count__34961 = G__34969;
i__34962 = G__34970;
continue;
} else {
var n = cljs.core.first.call(null,seq__34959__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34971 = cljs.core.next.call(null,seq__34959__$1);
var G__34972 = null;
var G__34973 = (0);
var G__34974 = (0);
seq__34959 = G__34971;
chunk__34960 = G__34972;
count__34961 = G__34973;
i__34962 = G__34974;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34984_34992 = cljs.core.seq.call(null,deps);
var chunk__34985_34993 = null;
var count__34986_34994 = (0);
var i__34987_34995 = (0);
while(true){
if((i__34987_34995 < count__34986_34994)){
var dep_34996 = cljs.core._nth.call(null,chunk__34985_34993,i__34987_34995);
topo_sort_helper_STAR_.call(null,dep_34996,(depth + (1)),state);

var G__34997 = seq__34984_34992;
var G__34998 = chunk__34985_34993;
var G__34999 = count__34986_34994;
var G__35000 = (i__34987_34995 + (1));
seq__34984_34992 = G__34997;
chunk__34985_34993 = G__34998;
count__34986_34994 = G__34999;
i__34987_34995 = G__35000;
continue;
} else {
var temp__4657__auto___35001 = cljs.core.seq.call(null,seq__34984_34992);
if(temp__4657__auto___35001){
var seq__34984_35002__$1 = temp__4657__auto___35001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34984_35002__$1)){
var c__29126__auto___35003 = cljs.core.chunk_first.call(null,seq__34984_35002__$1);
var G__35004 = cljs.core.chunk_rest.call(null,seq__34984_35002__$1);
var G__35005 = c__29126__auto___35003;
var G__35006 = cljs.core.count.call(null,c__29126__auto___35003);
var G__35007 = (0);
seq__34984_34992 = G__35004;
chunk__34985_34993 = G__35005;
count__34986_34994 = G__35006;
i__34987_34995 = G__35007;
continue;
} else {
var dep_35008 = cljs.core.first.call(null,seq__34984_35002__$1);
topo_sort_helper_STAR_.call(null,dep_35008,(depth + (1)),state);

var G__35009 = cljs.core.next.call(null,seq__34984_35002__$1);
var G__35010 = null;
var G__35011 = (0);
var G__35012 = (0);
seq__34984_34992 = G__35009;
chunk__34985_34993 = G__35010;
count__34986_34994 = G__35011;
i__34987_34995 = G__35012;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34988){
var vec__34989 = p__34988;
var seq__34990 = cljs.core.seq.call(null,vec__34989);
var first__34991 = cljs.core.first.call(null,seq__34990);
var seq__34990__$1 = cljs.core.next.call(null,seq__34990);
var x = first__34991;
var xs = seq__34990__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34989,seq__34990,first__34991,seq__34990__$1,x,xs,get_deps__$1){
return (function (p1__34975_SHARP_){
return clojure.set.difference.call(null,p1__34975_SHARP_,x);
});})(vec__34989,seq__34990,first__34991,seq__34990__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35013 = cljs.core.seq.call(null,provides);
var chunk__35014 = null;
var count__35015 = (0);
var i__35016 = (0);
while(true){
if((i__35016 < count__35015)){
var prov = cljs.core._nth.call(null,chunk__35014,i__35016);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35017_35025 = cljs.core.seq.call(null,requires);
var chunk__35018_35026 = null;
var count__35019_35027 = (0);
var i__35020_35028 = (0);
while(true){
if((i__35020_35028 < count__35019_35027)){
var req_35029 = cljs.core._nth.call(null,chunk__35018_35026,i__35020_35028);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35029,prov);

var G__35030 = seq__35017_35025;
var G__35031 = chunk__35018_35026;
var G__35032 = count__35019_35027;
var G__35033 = (i__35020_35028 + (1));
seq__35017_35025 = G__35030;
chunk__35018_35026 = G__35031;
count__35019_35027 = G__35032;
i__35020_35028 = G__35033;
continue;
} else {
var temp__4657__auto___35034 = cljs.core.seq.call(null,seq__35017_35025);
if(temp__4657__auto___35034){
var seq__35017_35035__$1 = temp__4657__auto___35034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35017_35035__$1)){
var c__29126__auto___35036 = cljs.core.chunk_first.call(null,seq__35017_35035__$1);
var G__35037 = cljs.core.chunk_rest.call(null,seq__35017_35035__$1);
var G__35038 = c__29126__auto___35036;
var G__35039 = cljs.core.count.call(null,c__29126__auto___35036);
var G__35040 = (0);
seq__35017_35025 = G__35037;
chunk__35018_35026 = G__35038;
count__35019_35027 = G__35039;
i__35020_35028 = G__35040;
continue;
} else {
var req_35041 = cljs.core.first.call(null,seq__35017_35035__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35041,prov);

var G__35042 = cljs.core.next.call(null,seq__35017_35035__$1);
var G__35043 = null;
var G__35044 = (0);
var G__35045 = (0);
seq__35017_35025 = G__35042;
chunk__35018_35026 = G__35043;
count__35019_35027 = G__35044;
i__35020_35028 = G__35045;
continue;
}
} else {
}
}
break;
}

var G__35046 = seq__35013;
var G__35047 = chunk__35014;
var G__35048 = count__35015;
var G__35049 = (i__35016 + (1));
seq__35013 = G__35046;
chunk__35014 = G__35047;
count__35015 = G__35048;
i__35016 = G__35049;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35013);
if(temp__4657__auto__){
var seq__35013__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35013__$1)){
var c__29126__auto__ = cljs.core.chunk_first.call(null,seq__35013__$1);
var G__35050 = cljs.core.chunk_rest.call(null,seq__35013__$1);
var G__35051 = c__29126__auto__;
var G__35052 = cljs.core.count.call(null,c__29126__auto__);
var G__35053 = (0);
seq__35013 = G__35050;
chunk__35014 = G__35051;
count__35015 = G__35052;
i__35016 = G__35053;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35013__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35021_35054 = cljs.core.seq.call(null,requires);
var chunk__35022_35055 = null;
var count__35023_35056 = (0);
var i__35024_35057 = (0);
while(true){
if((i__35024_35057 < count__35023_35056)){
var req_35058 = cljs.core._nth.call(null,chunk__35022_35055,i__35024_35057);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35058,prov);

var G__35059 = seq__35021_35054;
var G__35060 = chunk__35022_35055;
var G__35061 = count__35023_35056;
var G__35062 = (i__35024_35057 + (1));
seq__35021_35054 = G__35059;
chunk__35022_35055 = G__35060;
count__35023_35056 = G__35061;
i__35024_35057 = G__35062;
continue;
} else {
var temp__4657__auto___35063__$1 = cljs.core.seq.call(null,seq__35021_35054);
if(temp__4657__auto___35063__$1){
var seq__35021_35064__$1 = temp__4657__auto___35063__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35021_35064__$1)){
var c__29126__auto___35065 = cljs.core.chunk_first.call(null,seq__35021_35064__$1);
var G__35066 = cljs.core.chunk_rest.call(null,seq__35021_35064__$1);
var G__35067 = c__29126__auto___35065;
var G__35068 = cljs.core.count.call(null,c__29126__auto___35065);
var G__35069 = (0);
seq__35021_35054 = G__35066;
chunk__35022_35055 = G__35067;
count__35023_35056 = G__35068;
i__35024_35057 = G__35069;
continue;
} else {
var req_35070 = cljs.core.first.call(null,seq__35021_35064__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35070,prov);

var G__35071 = cljs.core.next.call(null,seq__35021_35064__$1);
var G__35072 = null;
var G__35073 = (0);
var G__35074 = (0);
seq__35021_35054 = G__35071;
chunk__35022_35055 = G__35072;
count__35023_35056 = G__35073;
i__35024_35057 = G__35074;
continue;
}
} else {
}
}
break;
}

var G__35075 = cljs.core.next.call(null,seq__35013__$1);
var G__35076 = null;
var G__35077 = (0);
var G__35078 = (0);
seq__35013 = G__35075;
chunk__35014 = G__35076;
count__35015 = G__35077;
i__35016 = G__35078;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35079_35083 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35080_35084 = null;
var count__35081_35085 = (0);
var i__35082_35086 = (0);
while(true){
if((i__35082_35086 < count__35081_35085)){
var ns_35087 = cljs.core._nth.call(null,chunk__35080_35084,i__35082_35086);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35087);

var G__35088 = seq__35079_35083;
var G__35089 = chunk__35080_35084;
var G__35090 = count__35081_35085;
var G__35091 = (i__35082_35086 + (1));
seq__35079_35083 = G__35088;
chunk__35080_35084 = G__35089;
count__35081_35085 = G__35090;
i__35082_35086 = G__35091;
continue;
} else {
var temp__4657__auto___35092 = cljs.core.seq.call(null,seq__35079_35083);
if(temp__4657__auto___35092){
var seq__35079_35093__$1 = temp__4657__auto___35092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35079_35093__$1)){
var c__29126__auto___35094 = cljs.core.chunk_first.call(null,seq__35079_35093__$1);
var G__35095 = cljs.core.chunk_rest.call(null,seq__35079_35093__$1);
var G__35096 = c__29126__auto___35094;
var G__35097 = cljs.core.count.call(null,c__29126__auto___35094);
var G__35098 = (0);
seq__35079_35083 = G__35095;
chunk__35080_35084 = G__35096;
count__35081_35085 = G__35097;
i__35082_35086 = G__35098;
continue;
} else {
var ns_35099 = cljs.core.first.call(null,seq__35079_35093__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35099);

var G__35100 = cljs.core.next.call(null,seq__35079_35093__$1);
var G__35101 = null;
var G__35102 = (0);
var G__35103 = (0);
seq__35079_35083 = G__35100;
chunk__35080_35084 = G__35101;
count__35081_35085 = G__35102;
i__35082_35086 = G__35103;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28286__auto__ = goog.require__;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35104__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35105__i = 0, G__35105__a = new Array(arguments.length -  0);
while (G__35105__i < G__35105__a.length) {G__35105__a[G__35105__i] = arguments[G__35105__i + 0]; ++G__35105__i;}
  args = new cljs.core.IndexedSeq(G__35105__a,0,null);
} 
return G__35104__delegate.call(this,args);};
G__35104.cljs$lang$maxFixedArity = 0;
G__35104.cljs$lang$applyTo = (function (arglist__35106){
var args = cljs.core.seq(arglist__35106);
return G__35104__delegate(args);
});
G__35104.cljs$core$IFn$_invoke$arity$variadic = G__35104__delegate;
return G__35104;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35107_SHARP_,p2__35108_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35107_SHARP_)].join('')),p2__35108_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35109_SHARP_,p2__35110_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35109_SHARP_)].join(''),p2__35110_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35111 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35111.addCallback(((function (G__35111){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35111))
);

G__35111.addErrback(((function (G__35111){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35111))
);

return G__35111;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35112 = cljs.core._EQ_;
var expr__35113 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35112.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35113))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35112,expr__35113){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35112,expr__35113))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35112,expr__35113){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35115){if((e35115 instanceof Error)){
var e = e35115;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35115;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35112,expr__35113))
} else {
if(cljs.core.truth_(pred__35112.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35113))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35112.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35113))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35112.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35113))){
return ((function (pred__35112,expr__35113){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35116){if((e35116 instanceof Error)){
var e = e35116;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35116;

}
}})());
});
;})(pred__35112,expr__35113))
} else {
return ((function (pred__35112,expr__35113){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35112,expr__35113))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35117,callback){
var map__35118 = p__35117;
var map__35118__$1 = ((((!((map__35118 == null)))?((((map__35118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35118):map__35118);
var file_msg = map__35118__$1;
var request_url = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35118,map__35118__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35118,map__35118__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__){
return (function (state_35142){
var state_val_35143 = (state_35142[(1)]);
if((state_val_35143 === (7))){
var inst_35138 = (state_35142[(2)]);
var state_35142__$1 = state_35142;
var statearr_35144_35161 = state_35142__$1;
(statearr_35144_35161[(2)] = inst_35138);

(statearr_35144_35161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (1))){
var state_35142__$1 = state_35142;
var statearr_35145_35162 = state_35142__$1;
(statearr_35145_35162[(2)] = null);

(statearr_35145_35162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (4))){
var inst_35122 = (state_35142[(7)]);
var inst_35122__$1 = (state_35142[(2)]);
var state_35142__$1 = (function (){var statearr_35146 = state_35142;
(statearr_35146[(7)] = inst_35122__$1);

return statearr_35146;
})();
if(cljs.core.truth_(inst_35122__$1)){
var statearr_35147_35163 = state_35142__$1;
(statearr_35147_35163[(1)] = (5));

} else {
var statearr_35148_35164 = state_35142__$1;
(statearr_35148_35164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (6))){
var state_35142__$1 = state_35142;
var statearr_35149_35165 = state_35142__$1;
(statearr_35149_35165[(2)] = null);

(statearr_35149_35165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (3))){
var inst_35140 = (state_35142[(2)]);
var state_35142__$1 = state_35142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35142__$1,inst_35140);
} else {
if((state_val_35143 === (2))){
var state_35142__$1 = state_35142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35142__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35143 === (11))){
var inst_35134 = (state_35142[(2)]);
var state_35142__$1 = (function (){var statearr_35150 = state_35142;
(statearr_35150[(8)] = inst_35134);

return statearr_35150;
})();
var statearr_35151_35166 = state_35142__$1;
(statearr_35151_35166[(2)] = null);

(statearr_35151_35166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (9))){
var inst_35126 = (state_35142[(9)]);
var inst_35128 = (state_35142[(10)]);
var inst_35130 = inst_35128.call(null,inst_35126);
var state_35142__$1 = state_35142;
var statearr_35152_35167 = state_35142__$1;
(statearr_35152_35167[(2)] = inst_35130);

(statearr_35152_35167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (5))){
var inst_35122 = (state_35142[(7)]);
var inst_35124 = figwheel.client.file_reloading.blocking_load.call(null,inst_35122);
var state_35142__$1 = state_35142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35142__$1,(8),inst_35124);
} else {
if((state_val_35143 === (10))){
var inst_35126 = (state_35142[(9)]);
var inst_35132 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35126);
var state_35142__$1 = state_35142;
var statearr_35153_35168 = state_35142__$1;
(statearr_35153_35168[(2)] = inst_35132);

(statearr_35153_35168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (8))){
var inst_35122 = (state_35142[(7)]);
var inst_35128 = (state_35142[(10)]);
var inst_35126 = (state_35142[(2)]);
var inst_35127 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35128__$1 = cljs.core.get.call(null,inst_35127,inst_35122);
var state_35142__$1 = (function (){var statearr_35154 = state_35142;
(statearr_35154[(9)] = inst_35126);

(statearr_35154[(10)] = inst_35128__$1);

return statearr_35154;
})();
if(cljs.core.truth_(inst_35128__$1)){
var statearr_35155_35169 = state_35142__$1;
(statearr_35155_35169[(1)] = (9));

} else {
var statearr_35156_35170 = state_35142__$1;
(statearr_35156_35170[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31788__auto__))
;
return ((function (switch__31700__auto__,c__31788__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31701__auto__ = null;
var figwheel$client$file_reloading$state_machine__31701__auto____0 = (function (){
var statearr_35157 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35157[(0)] = figwheel$client$file_reloading$state_machine__31701__auto__);

(statearr_35157[(1)] = (1));

return statearr_35157;
});
var figwheel$client$file_reloading$state_machine__31701__auto____1 = (function (state_35142){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_35142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e35158){if((e35158 instanceof Object)){
var ex__31704__auto__ = e35158;
var statearr_35159_35171 = state_35142;
(statearr_35159_35171[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35172 = state_35142;
state_35142 = G__35172;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31701__auto__ = function(state_35142){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31701__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31701__auto____1.call(this,state_35142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31701__auto____0;
figwheel$client$file_reloading$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31701__auto____1;
return figwheel$client$file_reloading$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__))
})();
var state__31790__auto__ = (function (){var statearr_35160 = f__31789__auto__.call(null);
(statearr_35160[(6)] = c__31788__auto__);

return statearr_35160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__))
);

return c__31788__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35173,callback){
var map__35174 = p__35173;
var map__35174__$1 = ((((!((map__35174 == null)))?((((map__35174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35174):map__35174);
var file_msg = map__35174__$1;
var namespace = cljs.core.get.call(null,map__35174__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35174,map__35174__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35174,map__35174__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35176){
var map__35177 = p__35176;
var map__35177__$1 = ((((!((map__35177 == null)))?((((map__35177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35177):map__35177);
var file_msg = map__35177__$1;
var namespace = cljs.core.get.call(null,map__35177__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35179){
var map__35180 = p__35179;
var map__35180__$1 = ((((!((map__35180 == null)))?((((map__35180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35180):map__35180);
var file_msg = map__35180__$1;
var namespace = cljs.core.get.call(null,map__35180__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28274__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28274__auto__){
var or__28286__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28274__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35182,callback){
var map__35183 = p__35182;
var map__35183__$1 = ((((!((map__35183 == null)))?((((map__35183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35183):map__35183);
var file_msg = map__35183__$1;
var request_url = cljs.core.get.call(null,map__35183__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31788__auto___35233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___35233,out){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___35233,out){
return (function (state_35218){
var state_val_35219 = (state_35218[(1)]);
if((state_val_35219 === (1))){
var inst_35192 = cljs.core.seq.call(null,files);
var inst_35193 = cljs.core.first.call(null,inst_35192);
var inst_35194 = cljs.core.next.call(null,inst_35192);
var inst_35195 = files;
var state_35218__$1 = (function (){var statearr_35220 = state_35218;
(statearr_35220[(7)] = inst_35193);

(statearr_35220[(8)] = inst_35195);

(statearr_35220[(9)] = inst_35194);

return statearr_35220;
})();
var statearr_35221_35234 = state_35218__$1;
(statearr_35221_35234[(2)] = null);

(statearr_35221_35234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (2))){
var inst_35195 = (state_35218[(8)]);
var inst_35201 = (state_35218[(10)]);
var inst_35200 = cljs.core.seq.call(null,inst_35195);
var inst_35201__$1 = cljs.core.first.call(null,inst_35200);
var inst_35202 = cljs.core.next.call(null,inst_35200);
var inst_35203 = (inst_35201__$1 == null);
var inst_35204 = cljs.core.not.call(null,inst_35203);
var state_35218__$1 = (function (){var statearr_35222 = state_35218;
(statearr_35222[(11)] = inst_35202);

(statearr_35222[(10)] = inst_35201__$1);

return statearr_35222;
})();
if(inst_35204){
var statearr_35223_35235 = state_35218__$1;
(statearr_35223_35235[(1)] = (4));

} else {
var statearr_35224_35236 = state_35218__$1;
(statearr_35224_35236[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (3))){
var inst_35216 = (state_35218[(2)]);
var state_35218__$1 = state_35218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35218__$1,inst_35216);
} else {
if((state_val_35219 === (4))){
var inst_35201 = (state_35218[(10)]);
var inst_35206 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35201);
var state_35218__$1 = state_35218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35218__$1,(7),inst_35206);
} else {
if((state_val_35219 === (5))){
var inst_35212 = cljs.core.async.close_BANG_.call(null,out);
var state_35218__$1 = state_35218;
var statearr_35225_35237 = state_35218__$1;
(statearr_35225_35237[(2)] = inst_35212);

(statearr_35225_35237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (6))){
var inst_35214 = (state_35218[(2)]);
var state_35218__$1 = state_35218;
var statearr_35226_35238 = state_35218__$1;
(statearr_35226_35238[(2)] = inst_35214);

(statearr_35226_35238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (7))){
var inst_35202 = (state_35218[(11)]);
var inst_35208 = (state_35218[(2)]);
var inst_35209 = cljs.core.async.put_BANG_.call(null,out,inst_35208);
var inst_35195 = inst_35202;
var state_35218__$1 = (function (){var statearr_35227 = state_35218;
(statearr_35227[(8)] = inst_35195);

(statearr_35227[(12)] = inst_35209);

return statearr_35227;
})();
var statearr_35228_35239 = state_35218__$1;
(statearr_35228_35239[(2)] = null);

(statearr_35228_35239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31788__auto___35233,out))
;
return ((function (switch__31700__auto__,c__31788__auto___35233,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto____0 = (function (){
var statearr_35229 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35229[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto__);

(statearr_35229[(1)] = (1));

return statearr_35229;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto____1 = (function (state_35218){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_35218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e35230){if((e35230 instanceof Object)){
var ex__31704__auto__ = e35230;
var statearr_35231_35240 = state_35218;
(statearr_35231_35240[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35241 = state_35218;
state_35218 = G__35241;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto__ = function(state_35218){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto____1.call(this,state_35218);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___35233,out))
})();
var state__31790__auto__ = (function (){var statearr_35232 = f__31789__auto__.call(null);
(statearr_35232[(6)] = c__31788__auto___35233);

return statearr_35232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___35233,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35242,opts){
var map__35243 = p__35242;
var map__35243__$1 = ((((!((map__35243 == null)))?((((map__35243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35243):map__35243);
var eval_body = cljs.core.get.call(null,map__35243__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28274__auto__ = eval_body;
if(cljs.core.truth_(and__28274__auto__)){
return typeof eval_body === 'string';
} else {
return and__28274__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35245){var e = e35245;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35246_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35246_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35247){
var vec__35248 = p__35247;
var k = cljs.core.nth.call(null,vec__35248,(0),null);
var v = cljs.core.nth.call(null,vec__35248,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35251){
var vec__35252 = p__35251;
var k = cljs.core.nth.call(null,vec__35252,(0),null);
var v = cljs.core.nth.call(null,vec__35252,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35258,p__35259){
var map__35260 = p__35258;
var map__35260__$1 = ((((!((map__35260 == null)))?((((map__35260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35260):map__35260);
var opts = map__35260__$1;
var before_jsload = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35261 = p__35259;
var map__35261__$1 = ((((!((map__35261 == null)))?((((map__35261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35261):map__35261);
var msg = map__35261__$1;
var files = cljs.core.get.call(null,map__35261__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35261__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35261__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35415){
var state_val_35416 = (state_35415[(1)]);
if((state_val_35416 === (7))){
var inst_35278 = (state_35415[(7)]);
var inst_35276 = (state_35415[(8)]);
var inst_35275 = (state_35415[(9)]);
var inst_35277 = (state_35415[(10)]);
var inst_35283 = cljs.core._nth.call(null,inst_35276,inst_35278);
var inst_35284 = figwheel.client.file_reloading.eval_body.call(null,inst_35283,opts);
var inst_35285 = (inst_35278 + (1));
var tmp35417 = inst_35276;
var tmp35418 = inst_35275;
var tmp35419 = inst_35277;
var inst_35275__$1 = tmp35418;
var inst_35276__$1 = tmp35417;
var inst_35277__$1 = tmp35419;
var inst_35278__$1 = inst_35285;
var state_35415__$1 = (function (){var statearr_35420 = state_35415;
(statearr_35420[(7)] = inst_35278__$1);

(statearr_35420[(11)] = inst_35284);

(statearr_35420[(8)] = inst_35276__$1);

(statearr_35420[(9)] = inst_35275__$1);

(statearr_35420[(10)] = inst_35277__$1);

return statearr_35420;
})();
var statearr_35421_35504 = state_35415__$1;
(statearr_35421_35504[(2)] = null);

(statearr_35421_35504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (20))){
var inst_35318 = (state_35415[(12)]);
var inst_35326 = figwheel.client.file_reloading.sort_files.call(null,inst_35318);
var state_35415__$1 = state_35415;
var statearr_35422_35505 = state_35415__$1;
(statearr_35422_35505[(2)] = inst_35326);

(statearr_35422_35505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (27))){
var state_35415__$1 = state_35415;
var statearr_35423_35506 = state_35415__$1;
(statearr_35423_35506[(2)] = null);

(statearr_35423_35506[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (1))){
var inst_35267 = (state_35415[(13)]);
var inst_35264 = before_jsload.call(null,files);
var inst_35265 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35266 = (function (){return ((function (inst_35267,inst_35264,inst_35265,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35255_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35255_SHARP_);
});
;})(inst_35267,inst_35264,inst_35265,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35267__$1 = cljs.core.filter.call(null,inst_35266,files);
var inst_35268 = cljs.core.not_empty.call(null,inst_35267__$1);
var state_35415__$1 = (function (){var statearr_35424 = state_35415;
(statearr_35424[(14)] = inst_35265);

(statearr_35424[(15)] = inst_35264);

(statearr_35424[(13)] = inst_35267__$1);

return statearr_35424;
})();
if(cljs.core.truth_(inst_35268)){
var statearr_35425_35507 = state_35415__$1;
(statearr_35425_35507[(1)] = (2));

} else {
var statearr_35426_35508 = state_35415__$1;
(statearr_35426_35508[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (24))){
var state_35415__$1 = state_35415;
var statearr_35427_35509 = state_35415__$1;
(statearr_35427_35509[(2)] = null);

(statearr_35427_35509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (39))){
var inst_35368 = (state_35415[(16)]);
var state_35415__$1 = state_35415;
var statearr_35428_35510 = state_35415__$1;
(statearr_35428_35510[(2)] = inst_35368);

(statearr_35428_35510[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (46))){
var inst_35410 = (state_35415[(2)]);
var state_35415__$1 = state_35415;
var statearr_35429_35511 = state_35415__$1;
(statearr_35429_35511[(2)] = inst_35410);

(statearr_35429_35511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (4))){
var inst_35312 = (state_35415[(2)]);
var inst_35313 = cljs.core.List.EMPTY;
var inst_35314 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35313);
var inst_35315 = (function (){return ((function (inst_35312,inst_35313,inst_35314,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35256_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35256_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35256_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35256_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_35312,inst_35313,inst_35314,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35316 = cljs.core.filter.call(null,inst_35315,files);
var inst_35317 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35318 = cljs.core.concat.call(null,inst_35316,inst_35317);
var state_35415__$1 = (function (){var statearr_35430 = state_35415;
(statearr_35430[(17)] = inst_35312);

(statearr_35430[(12)] = inst_35318);

(statearr_35430[(18)] = inst_35314);

return statearr_35430;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35431_35512 = state_35415__$1;
(statearr_35431_35512[(1)] = (16));

} else {
var statearr_35432_35513 = state_35415__$1;
(statearr_35432_35513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (15))){
var inst_35302 = (state_35415[(2)]);
var state_35415__$1 = state_35415;
var statearr_35433_35514 = state_35415__$1;
(statearr_35433_35514[(2)] = inst_35302);

(statearr_35433_35514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (21))){
var inst_35328 = (state_35415[(19)]);
var inst_35328__$1 = (state_35415[(2)]);
var inst_35329 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35328__$1);
var state_35415__$1 = (function (){var statearr_35434 = state_35415;
(statearr_35434[(19)] = inst_35328__$1);

return statearr_35434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35415__$1,(22),inst_35329);
} else {
if((state_val_35416 === (31))){
var inst_35413 = (state_35415[(2)]);
var state_35415__$1 = state_35415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35415__$1,inst_35413);
} else {
if((state_val_35416 === (32))){
var inst_35368 = (state_35415[(16)]);
var inst_35373 = inst_35368.cljs$lang$protocol_mask$partition0$;
var inst_35374 = (inst_35373 & (64));
var inst_35375 = inst_35368.cljs$core$ISeq$;
var inst_35376 = (cljs.core.PROTOCOL_SENTINEL === inst_35375);
var inst_35377 = (inst_35374) || (inst_35376);
var state_35415__$1 = state_35415;
if(cljs.core.truth_(inst_35377)){
var statearr_35435_35515 = state_35415__$1;
(statearr_35435_35515[(1)] = (35));

} else {
var statearr_35436_35516 = state_35415__$1;
(statearr_35436_35516[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (40))){
var inst_35390 = (state_35415[(20)]);
var inst_35389 = (state_35415[(2)]);
var inst_35390__$1 = cljs.core.get.call(null,inst_35389,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35391 = cljs.core.get.call(null,inst_35389,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35392 = cljs.core.not_empty.call(null,inst_35390__$1);
var state_35415__$1 = (function (){var statearr_35437 = state_35415;
(statearr_35437[(21)] = inst_35391);

(statearr_35437[(20)] = inst_35390__$1);

return statearr_35437;
})();
if(cljs.core.truth_(inst_35392)){
var statearr_35438_35517 = state_35415__$1;
(statearr_35438_35517[(1)] = (41));

} else {
var statearr_35439_35518 = state_35415__$1;
(statearr_35439_35518[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (33))){
var state_35415__$1 = state_35415;
var statearr_35440_35519 = state_35415__$1;
(statearr_35440_35519[(2)] = false);

(statearr_35440_35519[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (13))){
var inst_35288 = (state_35415[(22)]);
var inst_35292 = cljs.core.chunk_first.call(null,inst_35288);
var inst_35293 = cljs.core.chunk_rest.call(null,inst_35288);
var inst_35294 = cljs.core.count.call(null,inst_35292);
var inst_35275 = inst_35293;
var inst_35276 = inst_35292;
var inst_35277 = inst_35294;
var inst_35278 = (0);
var state_35415__$1 = (function (){var statearr_35441 = state_35415;
(statearr_35441[(7)] = inst_35278);

(statearr_35441[(8)] = inst_35276);

(statearr_35441[(9)] = inst_35275);

(statearr_35441[(10)] = inst_35277);

return statearr_35441;
})();
var statearr_35442_35520 = state_35415__$1;
(statearr_35442_35520[(2)] = null);

(statearr_35442_35520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (22))){
var inst_35332 = (state_35415[(23)]);
var inst_35331 = (state_35415[(24)]);
var inst_35336 = (state_35415[(25)]);
var inst_35328 = (state_35415[(19)]);
var inst_35331__$1 = (state_35415[(2)]);
var inst_35332__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35331__$1);
var inst_35333 = (function (){var all_files = inst_35328;
var res_SINGLEQUOTE_ = inst_35331__$1;
var res = inst_35332__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35332,inst_35331,inst_35336,inst_35328,inst_35331__$1,inst_35332__$1,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35257_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35257_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35332,inst_35331,inst_35336,inst_35328,inst_35331__$1,inst_35332__$1,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35334 = cljs.core.filter.call(null,inst_35333,inst_35331__$1);
var inst_35335 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35336__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35335);
var inst_35337 = cljs.core.not_empty.call(null,inst_35336__$1);
var state_35415__$1 = (function (){var statearr_35443 = state_35415;
(statearr_35443[(26)] = inst_35334);

(statearr_35443[(23)] = inst_35332__$1);

(statearr_35443[(24)] = inst_35331__$1);

(statearr_35443[(25)] = inst_35336__$1);

return statearr_35443;
})();
if(cljs.core.truth_(inst_35337)){
var statearr_35444_35521 = state_35415__$1;
(statearr_35444_35521[(1)] = (23));

} else {
var statearr_35445_35522 = state_35415__$1;
(statearr_35445_35522[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (36))){
var state_35415__$1 = state_35415;
var statearr_35446_35523 = state_35415__$1;
(statearr_35446_35523[(2)] = false);

(statearr_35446_35523[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (41))){
var inst_35390 = (state_35415[(20)]);
var inst_35394 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35395 = cljs.core.map.call(null,inst_35394,inst_35390);
var inst_35396 = cljs.core.pr_str.call(null,inst_35395);
var inst_35397 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35396)].join('');
var inst_35398 = figwheel.client.utils.log.call(null,inst_35397);
var state_35415__$1 = state_35415;
var statearr_35447_35524 = state_35415__$1;
(statearr_35447_35524[(2)] = inst_35398);

(statearr_35447_35524[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (43))){
var inst_35391 = (state_35415[(21)]);
var inst_35401 = (state_35415[(2)]);
var inst_35402 = cljs.core.not_empty.call(null,inst_35391);
var state_35415__$1 = (function (){var statearr_35448 = state_35415;
(statearr_35448[(27)] = inst_35401);

return statearr_35448;
})();
if(cljs.core.truth_(inst_35402)){
var statearr_35449_35525 = state_35415__$1;
(statearr_35449_35525[(1)] = (44));

} else {
var statearr_35450_35526 = state_35415__$1;
(statearr_35450_35526[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (29))){
var inst_35368 = (state_35415[(16)]);
var inst_35334 = (state_35415[(26)]);
var inst_35332 = (state_35415[(23)]);
var inst_35331 = (state_35415[(24)]);
var inst_35336 = (state_35415[(25)]);
var inst_35328 = (state_35415[(19)]);
var inst_35364 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35367 = (function (){var all_files = inst_35328;
var res_SINGLEQUOTE_ = inst_35331;
var res = inst_35332;
var files_not_loaded = inst_35334;
var dependencies_that_loaded = inst_35336;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35368,inst_35334,inst_35332,inst_35331,inst_35336,inst_35328,inst_35364,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35366){
var map__35451 = p__35366;
var map__35451__$1 = ((((!((map__35451 == null)))?((((map__35451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35451):map__35451);
var namespace = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35368,inst_35334,inst_35332,inst_35331,inst_35336,inst_35328,inst_35364,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35368__$1 = cljs.core.group_by.call(null,inst_35367,inst_35334);
var inst_35370 = (inst_35368__$1 == null);
var inst_35371 = cljs.core.not.call(null,inst_35370);
var state_35415__$1 = (function (){var statearr_35453 = state_35415;
(statearr_35453[(16)] = inst_35368__$1);

(statearr_35453[(28)] = inst_35364);

return statearr_35453;
})();
if(inst_35371){
var statearr_35454_35527 = state_35415__$1;
(statearr_35454_35527[(1)] = (32));

} else {
var statearr_35455_35528 = state_35415__$1;
(statearr_35455_35528[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (44))){
var inst_35391 = (state_35415[(21)]);
var inst_35404 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35391);
var inst_35405 = cljs.core.pr_str.call(null,inst_35404);
var inst_35406 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35405)].join('');
var inst_35407 = figwheel.client.utils.log.call(null,inst_35406);
var state_35415__$1 = state_35415;
var statearr_35456_35529 = state_35415__$1;
(statearr_35456_35529[(2)] = inst_35407);

(statearr_35456_35529[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (6))){
var inst_35309 = (state_35415[(2)]);
var state_35415__$1 = state_35415;
var statearr_35457_35530 = state_35415__$1;
(statearr_35457_35530[(2)] = inst_35309);

(statearr_35457_35530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (28))){
var inst_35334 = (state_35415[(26)]);
var inst_35361 = (state_35415[(2)]);
var inst_35362 = cljs.core.not_empty.call(null,inst_35334);
var state_35415__$1 = (function (){var statearr_35458 = state_35415;
(statearr_35458[(29)] = inst_35361);

return statearr_35458;
})();
if(cljs.core.truth_(inst_35362)){
var statearr_35459_35531 = state_35415__$1;
(statearr_35459_35531[(1)] = (29));

} else {
var statearr_35460_35532 = state_35415__$1;
(statearr_35460_35532[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (25))){
var inst_35332 = (state_35415[(23)]);
var inst_35348 = (state_35415[(2)]);
var inst_35349 = cljs.core.not_empty.call(null,inst_35332);
var state_35415__$1 = (function (){var statearr_35461 = state_35415;
(statearr_35461[(30)] = inst_35348);

return statearr_35461;
})();
if(cljs.core.truth_(inst_35349)){
var statearr_35462_35533 = state_35415__$1;
(statearr_35462_35533[(1)] = (26));

} else {
var statearr_35463_35534 = state_35415__$1;
(statearr_35463_35534[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (34))){
var inst_35384 = (state_35415[(2)]);
var state_35415__$1 = state_35415;
if(cljs.core.truth_(inst_35384)){
var statearr_35464_35535 = state_35415__$1;
(statearr_35464_35535[(1)] = (38));

} else {
var statearr_35465_35536 = state_35415__$1;
(statearr_35465_35536[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (17))){
var state_35415__$1 = state_35415;
var statearr_35466_35537 = state_35415__$1;
(statearr_35466_35537[(2)] = recompile_dependents);

(statearr_35466_35537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (3))){
var state_35415__$1 = state_35415;
var statearr_35467_35538 = state_35415__$1;
(statearr_35467_35538[(2)] = null);

(statearr_35467_35538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (12))){
var inst_35305 = (state_35415[(2)]);
var state_35415__$1 = state_35415;
var statearr_35468_35539 = state_35415__$1;
(statearr_35468_35539[(2)] = inst_35305);

(statearr_35468_35539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (2))){
var inst_35267 = (state_35415[(13)]);
var inst_35274 = cljs.core.seq.call(null,inst_35267);
var inst_35275 = inst_35274;
var inst_35276 = null;
var inst_35277 = (0);
var inst_35278 = (0);
var state_35415__$1 = (function (){var statearr_35469 = state_35415;
(statearr_35469[(7)] = inst_35278);

(statearr_35469[(8)] = inst_35276);

(statearr_35469[(9)] = inst_35275);

(statearr_35469[(10)] = inst_35277);

return statearr_35469;
})();
var statearr_35470_35540 = state_35415__$1;
(statearr_35470_35540[(2)] = null);

(statearr_35470_35540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (23))){
var inst_35334 = (state_35415[(26)]);
var inst_35332 = (state_35415[(23)]);
var inst_35331 = (state_35415[(24)]);
var inst_35336 = (state_35415[(25)]);
var inst_35328 = (state_35415[(19)]);
var inst_35339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35341 = (function (){var all_files = inst_35328;
var res_SINGLEQUOTE_ = inst_35331;
var res = inst_35332;
var files_not_loaded = inst_35334;
var dependencies_that_loaded = inst_35336;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35334,inst_35332,inst_35331,inst_35336,inst_35328,inst_35339,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35340){
var map__35471 = p__35340;
var map__35471__$1 = ((((!((map__35471 == null)))?((((map__35471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35471):map__35471);
var request_url = cljs.core.get.call(null,map__35471__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35334,inst_35332,inst_35331,inst_35336,inst_35328,inst_35339,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35342 = cljs.core.reverse.call(null,inst_35336);
var inst_35343 = cljs.core.map.call(null,inst_35341,inst_35342);
var inst_35344 = cljs.core.pr_str.call(null,inst_35343);
var inst_35345 = figwheel.client.utils.log.call(null,inst_35344);
var state_35415__$1 = (function (){var statearr_35473 = state_35415;
(statearr_35473[(31)] = inst_35339);

return statearr_35473;
})();
var statearr_35474_35541 = state_35415__$1;
(statearr_35474_35541[(2)] = inst_35345);

(statearr_35474_35541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (35))){
var state_35415__$1 = state_35415;
var statearr_35475_35542 = state_35415__$1;
(statearr_35475_35542[(2)] = true);

(statearr_35475_35542[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (19))){
var inst_35318 = (state_35415[(12)]);
var inst_35324 = figwheel.client.file_reloading.expand_files.call(null,inst_35318);
var state_35415__$1 = state_35415;
var statearr_35476_35543 = state_35415__$1;
(statearr_35476_35543[(2)] = inst_35324);

(statearr_35476_35543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (11))){
var state_35415__$1 = state_35415;
var statearr_35477_35544 = state_35415__$1;
(statearr_35477_35544[(2)] = null);

(statearr_35477_35544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (9))){
var inst_35307 = (state_35415[(2)]);
var state_35415__$1 = state_35415;
var statearr_35478_35545 = state_35415__$1;
(statearr_35478_35545[(2)] = inst_35307);

(statearr_35478_35545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (5))){
var inst_35278 = (state_35415[(7)]);
var inst_35277 = (state_35415[(10)]);
var inst_35280 = (inst_35278 < inst_35277);
var inst_35281 = inst_35280;
var state_35415__$1 = state_35415;
if(cljs.core.truth_(inst_35281)){
var statearr_35479_35546 = state_35415__$1;
(statearr_35479_35546[(1)] = (7));

} else {
var statearr_35480_35547 = state_35415__$1;
(statearr_35480_35547[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (14))){
var inst_35288 = (state_35415[(22)]);
var inst_35297 = cljs.core.first.call(null,inst_35288);
var inst_35298 = figwheel.client.file_reloading.eval_body.call(null,inst_35297,opts);
var inst_35299 = cljs.core.next.call(null,inst_35288);
var inst_35275 = inst_35299;
var inst_35276 = null;
var inst_35277 = (0);
var inst_35278 = (0);
var state_35415__$1 = (function (){var statearr_35481 = state_35415;
(statearr_35481[(7)] = inst_35278);

(statearr_35481[(32)] = inst_35298);

(statearr_35481[(8)] = inst_35276);

(statearr_35481[(9)] = inst_35275);

(statearr_35481[(10)] = inst_35277);

return statearr_35481;
})();
var statearr_35482_35548 = state_35415__$1;
(statearr_35482_35548[(2)] = null);

(statearr_35482_35548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (45))){
var state_35415__$1 = state_35415;
var statearr_35483_35549 = state_35415__$1;
(statearr_35483_35549[(2)] = null);

(statearr_35483_35549[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (26))){
var inst_35334 = (state_35415[(26)]);
var inst_35332 = (state_35415[(23)]);
var inst_35331 = (state_35415[(24)]);
var inst_35336 = (state_35415[(25)]);
var inst_35328 = (state_35415[(19)]);
var inst_35351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35353 = (function (){var all_files = inst_35328;
var res_SINGLEQUOTE_ = inst_35331;
var res = inst_35332;
var files_not_loaded = inst_35334;
var dependencies_that_loaded = inst_35336;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35334,inst_35332,inst_35331,inst_35336,inst_35328,inst_35351,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35352){
var map__35484 = p__35352;
var map__35484__$1 = ((((!((map__35484 == null)))?((((map__35484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35484):map__35484);
var namespace = cljs.core.get.call(null,map__35484__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35484__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35334,inst_35332,inst_35331,inst_35336,inst_35328,inst_35351,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35354 = cljs.core.map.call(null,inst_35353,inst_35332);
var inst_35355 = cljs.core.pr_str.call(null,inst_35354);
var inst_35356 = figwheel.client.utils.log.call(null,inst_35355);
var inst_35357 = (function (){var all_files = inst_35328;
var res_SINGLEQUOTE_ = inst_35331;
var res = inst_35332;
var files_not_loaded = inst_35334;
var dependencies_that_loaded = inst_35336;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35334,inst_35332,inst_35331,inst_35336,inst_35328,inst_35351,inst_35353,inst_35354,inst_35355,inst_35356,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35334,inst_35332,inst_35331,inst_35336,inst_35328,inst_35351,inst_35353,inst_35354,inst_35355,inst_35356,state_val_35416,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35358 = setTimeout(inst_35357,(10));
var state_35415__$1 = (function (){var statearr_35486 = state_35415;
(statearr_35486[(33)] = inst_35356);

(statearr_35486[(34)] = inst_35351);

return statearr_35486;
})();
var statearr_35487_35550 = state_35415__$1;
(statearr_35487_35550[(2)] = inst_35358);

(statearr_35487_35550[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (16))){
var state_35415__$1 = state_35415;
var statearr_35488_35551 = state_35415__$1;
(statearr_35488_35551[(2)] = reload_dependents);

(statearr_35488_35551[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (38))){
var inst_35368 = (state_35415[(16)]);
var inst_35386 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35368);
var state_35415__$1 = state_35415;
var statearr_35489_35552 = state_35415__$1;
(statearr_35489_35552[(2)] = inst_35386);

(statearr_35489_35552[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (30))){
var state_35415__$1 = state_35415;
var statearr_35490_35553 = state_35415__$1;
(statearr_35490_35553[(2)] = null);

(statearr_35490_35553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (10))){
var inst_35288 = (state_35415[(22)]);
var inst_35290 = cljs.core.chunked_seq_QMARK_.call(null,inst_35288);
var state_35415__$1 = state_35415;
if(inst_35290){
var statearr_35491_35554 = state_35415__$1;
(statearr_35491_35554[(1)] = (13));

} else {
var statearr_35492_35555 = state_35415__$1;
(statearr_35492_35555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (18))){
var inst_35322 = (state_35415[(2)]);
var state_35415__$1 = state_35415;
if(cljs.core.truth_(inst_35322)){
var statearr_35493_35556 = state_35415__$1;
(statearr_35493_35556[(1)] = (19));

} else {
var statearr_35494_35557 = state_35415__$1;
(statearr_35494_35557[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (42))){
var state_35415__$1 = state_35415;
var statearr_35495_35558 = state_35415__$1;
(statearr_35495_35558[(2)] = null);

(statearr_35495_35558[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (37))){
var inst_35381 = (state_35415[(2)]);
var state_35415__$1 = state_35415;
var statearr_35496_35559 = state_35415__$1;
(statearr_35496_35559[(2)] = inst_35381);

(statearr_35496_35559[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35416 === (8))){
var inst_35288 = (state_35415[(22)]);
var inst_35275 = (state_35415[(9)]);
var inst_35288__$1 = cljs.core.seq.call(null,inst_35275);
var state_35415__$1 = (function (){var statearr_35497 = state_35415;
(statearr_35497[(22)] = inst_35288__$1);

return statearr_35497;
})();
if(inst_35288__$1){
var statearr_35498_35560 = state_35415__$1;
(statearr_35498_35560[(1)] = (10));

} else {
var statearr_35499_35561 = state_35415__$1;
(statearr_35499_35561[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31700__auto__,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto____0 = (function (){
var statearr_35500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35500[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto__);

(statearr_35500[(1)] = (1));

return statearr_35500;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto____1 = (function (state_35415){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_35415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e35501){if((e35501 instanceof Object)){
var ex__31704__auto__ = e35501;
var statearr_35502_35562 = state_35415;
(statearr_35502_35562[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35563 = state_35415;
state_35415 = G__35563;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto__ = function(state_35415){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto____1.call(this,state_35415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31790__auto__ = (function (){var statearr_35503 = f__31789__auto__.call(null);
(statearr_35503[(6)] = c__31788__auto__);

return statearr_35503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__,map__35260,map__35260__$1,opts,before_jsload,on_jsload,reload_dependents,map__35261,map__35261__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31788__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35566,link){
var map__35567 = p__35566;
var map__35567__$1 = ((((!((map__35567 == null)))?((((map__35567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35567):map__35567);
var file = cljs.core.get.call(null,map__35567__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35567,map__35567__$1,file){
return (function (p1__35564_SHARP_,p2__35565_SHARP_){
if(cljs.core._EQ_.call(null,p1__35564_SHARP_,p2__35565_SHARP_)){
return p1__35564_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35567,map__35567__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35570){
var map__35571 = p__35570;
var map__35571__$1 = ((((!((map__35571 == null)))?((((map__35571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35571):map__35571);
var match_length = cljs.core.get.call(null,map__35571__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35571__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35569_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35569_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35573_SHARP_,p2__35574_SHARP_){
return cljs.core.assoc.call(null,p1__35573_SHARP_,cljs.core.get.call(null,p2__35574_SHARP_,key),p2__35574_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35575 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35575);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35575);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35576,p__35577){
var map__35578 = p__35576;
var map__35578__$1 = ((((!((map__35578 == null)))?((((map__35578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35578):map__35578);
var on_cssload = cljs.core.get.call(null,map__35578__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35579 = p__35577;
var map__35579__$1 = ((((!((map__35579 == null)))?((((map__35579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35579):map__35579);
var files_msg = map__35579__$1;
var files = cljs.core.get.call(null,map__35579__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1503404162165
