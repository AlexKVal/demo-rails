// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___39596 = arguments.length;
var i__29457__auto___39597 = (0);
while(true){
if((i__29457__auto___39597 < len__29456__auto___39596)){
args__29463__auto__.push((arguments[i__29457__auto___39597]));

var G__39598 = (i__29457__auto___39597 + (1));
i__29457__auto___39597 = G__39598;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((1) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29464__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__39591){
var vec__39592 = p__39591;
var context = cljs.core.nth.call(null,vec__39592,(0),null);
var footer = cljs.core.nth.call(null,vec__39592,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__28286__auto__ = e.message;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = goog.object.get(c,"groupCollapsed");
var log = goog.object.get(c,"log");
var group_end = goog.object.get(c,"groupEnd");
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e39595){var e__$1 = e39595;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq39589){
var G__39590 = cljs.core.first.call(null,seq39589);
var seq39589__$1 = cljs.core.next.call(null,seq39589);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39590,seq39589__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1503404170277
