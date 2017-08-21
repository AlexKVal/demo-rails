// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28970__auto__ = (((value == null))?null:value);
var m__28971__auto__ = (devtools.format._header[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,value);
} else {
var m__28971__auto____$1 = (devtools.format._header["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28970__auto__ = (((value == null))?null:value);
var m__28971__auto__ = (devtools.format._has_body[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,value);
} else {
var m__28971__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28970__auto__ = (((value == null))?null:value);
var m__28971__auto__ = (devtools.format._body[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,value);
} else {
var m__28971__auto____$1 = (devtools.format._body["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37187__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37187__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37187__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37187__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37187__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37188__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37187__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37188__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37187__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37209 = arguments.length;
var i__29457__auto___37210 = (0);
while(true){
if((i__29457__auto___37210 < len__29456__auto___37209)){
args__29463__auto__.push((arguments[i__29457__auto___37210]));

var G__37211 = (i__29457__auto___37210 + (1));
i__29457__auto___37210 = G__37211;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37208){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37208));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37213 = arguments.length;
var i__29457__auto___37214 = (0);
while(true){
if((i__29457__auto___37214 < len__29456__auto___37213)){
args__29463__auto__.push((arguments[i__29457__auto___37214]));

var G__37215 = (i__29457__auto___37214 + (1));
i__29457__auto___37214 = G__37215;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37212){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37212));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37217 = arguments.length;
var i__29457__auto___37218 = (0);
while(true){
if((i__29457__auto___37218 < len__29456__auto___37217)){
args__29463__auto__.push((arguments[i__29457__auto___37218]));

var G__37219 = (i__29457__auto___37218 + (1));
i__29457__auto___37218 = G__37219;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37216){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37216));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37221 = arguments.length;
var i__29457__auto___37222 = (0);
while(true){
if((i__29457__auto___37222 < len__29456__auto___37221)){
args__29463__auto__.push((arguments[i__29457__auto___37222]));

var G__37223 = (i__29457__auto___37222 + (1));
i__29457__auto___37222 = G__37223;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37220){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37220));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37225 = arguments.length;
var i__29457__auto___37226 = (0);
while(true){
if((i__29457__auto___37226 < len__29456__auto___37225)){
args__29463__auto__.push((arguments[i__29457__auto___37226]));

var G__37227 = (i__29457__auto___37226 + (1));
i__29457__auto___37226 = G__37227;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37224){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37224));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37229 = arguments.length;
var i__29457__auto___37230 = (0);
while(true){
if((i__29457__auto___37230 < len__29456__auto___37229)){
args__29463__auto__.push((arguments[i__29457__auto___37230]));

var G__37231 = (i__29457__auto___37230 + (1));
i__29457__auto___37230 = G__37231;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37228){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37228));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37233 = arguments.length;
var i__29457__auto___37234 = (0);
while(true){
if((i__29457__auto___37234 < len__29456__auto___37233)){
args__29463__auto__.push((arguments[i__29457__auto___37234]));

var G__37235 = (i__29457__auto___37234 + (1));
i__29457__auto___37234 = G__37235;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37232){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37232));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37243 = arguments.length;
var i__29457__auto___37244 = (0);
while(true){
if((i__29457__auto___37244 < len__29456__auto___37243)){
args__29463__auto__.push((arguments[i__29457__auto___37244]));

var G__37245 = (i__29457__auto___37244 + (1));
i__29457__auto___37244 = G__37245;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((1) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29464__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37239){
var vec__37240 = p__37239;
var state_override = cljs.core.nth.call(null,vec__37240,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37240,state_override){
return (function (p1__37236_SHARP_){
return cljs.core.merge.call(null,p1__37236_SHARP_,state_override);
});})(vec__37240,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37237){
var G__37238 = cljs.core.first.call(null,seq37237);
var seq37237__$1 = cljs.core.next.call(null,seq37237);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37238,seq37237__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37247 = arguments.length;
var i__29457__auto___37248 = (0);
while(true){
if((i__29457__auto___37248 < len__29456__auto___37247)){
args__29463__auto__.push((arguments[i__29457__auto___37248]));

var G__37249 = (i__29457__auto___37248 + (1));
i__29457__auto___37248 = G__37249;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37246){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37246));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37252 = arguments.length;
var i__29457__auto___37253 = (0);
while(true){
if((i__29457__auto___37253 < len__29456__auto___37252)){
args__29463__auto__.push((arguments[i__29457__auto___37253]));

var G__37254 = (i__29457__auto___37253 + (1));
i__29457__auto___37253 = G__37254;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((1) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29464__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37250){
var G__37251 = cljs.core.first.call(null,seq37250);
var seq37250__$1 = cljs.core.next.call(null,seq37250);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37251,seq37250__$1);
});


//# sourceMappingURL=format.js.map?rel=1503404165244
