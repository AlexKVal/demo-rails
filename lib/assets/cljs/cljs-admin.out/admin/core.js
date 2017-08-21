// Compiled by ClojureScript 1.9.908 {}
goog.provide('admin.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('admin.gravatar');
if(typeof admin.core.users !== 'undefined'){
} else {
admin.core.users = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.core.reset_BANG_.call(null,admin.core.users,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"AlexKVal",new cljs.core.Keyword(null,"email","email",1415816706),"alexkval@gmail.com",new cljs.core.Keyword(null,"microposts_count","microposts_count",-1674730424),(30)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"John Dow",new cljs.core.Keyword(null,"email","email",1415816706),"example-1@railstutorial.org",new cljs.core.Keyword(null,"microposts_count","microposts_count",-1674730424),(10)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Ivanov-AA",new cljs.core.Keyword(null,"email","email",1415816706),"example-2@railstutorial.org",new cljs.core.Keyword(null,"microposts_count","microposts_count",-1674730424),(11)], null)], null));
admin.core.user_item = (function admin$core$user_item(user){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.gravatar.gravatar_img,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"size","size",1098693007),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-info.microposts-count","span.label.label-info.microposts-count",-2111051885),new cljs.core.Keyword(null,"microposts_count","microposts_count",-1674730424).cljs$core$IFn$_invoke$arity$1(user)], null)], null);
});
admin.core.users_list = (function admin$core$users_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__29095__auto__ = (function admin$core$users_list_$_iter__39935(s__39936){
return (new cljs.core.LazySeq(null,(function (){
var s__39936__$1 = s__39936;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39936__$1);
if(temp__4657__auto__){
var s__39936__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39936__$2)){
var c__29093__auto__ = cljs.core.chunk_first.call(null,s__39936__$2);
var size__29094__auto__ = cljs.core.count.call(null,c__29093__auto__);
var b__39938 = cljs.core.chunk_buffer.call(null,size__29094__auto__);
if((function (){var i__39937 = (0);
while(true){
if((i__39937 < size__29094__auto__)){
var user = cljs.core._nth.call(null,c__29093__auto__,i__39937);
cljs.core.chunk_append.call(null,b__39938,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.core.user_item,user], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(user)], null)));

var G__39939 = (i__39937 + (1));
i__39937 = G__39939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39938),admin$core$users_list_$_iter__39935.call(null,cljs.core.chunk_rest.call(null,s__39936__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39938),null);
}
} else {
var user = cljs.core.first.call(null,s__39936__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.core.user_item,user], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(user)], null)),admin$core$users_list_$_iter__39935.call(null,cljs.core.rest.call(null,s__39936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29095__auto__.call(null,cljs.core.deref.call(null,admin.core.users));
})()], null);
});
admin.core.app = (function admin$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.core.users_list], null)], null)], null);
});
var temp__4657__auto___39940 = document.getElementById("cljs-admin-app");
if(cljs.core.truth_(temp__4657__auto___39940)){
var element_39941 = temp__4657__auto___39940;
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.core.app], null),element_39941);
} else {
}

//# sourceMappingURL=core.js.map?rel=1503404225302
