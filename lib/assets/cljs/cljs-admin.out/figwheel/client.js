// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36668){if((e36668 instanceof Error)){
var e = e36668;
return "Error: Unable to stringify";
} else {
throw e36668;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36671 = arguments.length;
switch (G__36671) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36669_SHARP_){
if(typeof p1__36669_SHARP_ === 'string'){
return p1__36669_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36669_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29463__auto__ = [];
var len__29456__auto___36674 = arguments.length;
var i__29457__auto___36675 = (0);
while(true){
if((i__29457__auto___36675 < len__29456__auto___36674)){
args__29463__auto__.push((arguments[i__29457__auto___36675]));

var G__36676 = (i__29457__auto___36675 + (1));
i__29457__auto___36675 = G__36676;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36673){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36673));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29463__auto__ = [];
var len__29456__auto___36678 = arguments.length;
var i__29457__auto___36679 = (0);
while(true){
if((i__29457__auto___36679 < len__29456__auto___36678)){
args__29463__auto__.push((arguments[i__29457__auto___36679]));

var G__36680 = (i__29457__auto___36679 + (1));
i__29457__auto___36679 = G__36680;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36677){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36677));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36681){
var map__36682 = p__36681;
var map__36682__$1 = ((((!((map__36682 == null)))?((((map__36682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36682):map__36682);
var message = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28286__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28274__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28274__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28274__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31788__auto___36761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___36761,ch){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___36761,ch){
return (function (state_36733){
var state_val_36734 = (state_36733[(1)]);
if((state_val_36734 === (7))){
var inst_36729 = (state_36733[(2)]);
var state_36733__$1 = state_36733;
var statearr_36735_36762 = state_36733__$1;
(statearr_36735_36762[(2)] = inst_36729);

(statearr_36735_36762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (1))){
var state_36733__$1 = state_36733;
var statearr_36736_36763 = state_36733__$1;
(statearr_36736_36763[(2)] = null);

(statearr_36736_36763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (4))){
var inst_36686 = (state_36733[(7)]);
var inst_36686__$1 = (state_36733[(2)]);
var state_36733__$1 = (function (){var statearr_36737 = state_36733;
(statearr_36737[(7)] = inst_36686__$1);

return statearr_36737;
})();
if(cljs.core.truth_(inst_36686__$1)){
var statearr_36738_36764 = state_36733__$1;
(statearr_36738_36764[(1)] = (5));

} else {
var statearr_36739_36765 = state_36733__$1;
(statearr_36739_36765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (15))){
var inst_36693 = (state_36733[(8)]);
var inst_36708 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36693);
var inst_36709 = cljs.core.first.call(null,inst_36708);
var inst_36710 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36709);
var inst_36711 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36710)].join('');
var inst_36712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36711);
var state_36733__$1 = state_36733;
var statearr_36740_36766 = state_36733__$1;
(statearr_36740_36766[(2)] = inst_36712);

(statearr_36740_36766[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (13))){
var inst_36717 = (state_36733[(2)]);
var state_36733__$1 = state_36733;
var statearr_36741_36767 = state_36733__$1;
(statearr_36741_36767[(2)] = inst_36717);

(statearr_36741_36767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (6))){
var state_36733__$1 = state_36733;
var statearr_36742_36768 = state_36733__$1;
(statearr_36742_36768[(2)] = null);

(statearr_36742_36768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (17))){
var inst_36715 = (state_36733[(2)]);
var state_36733__$1 = state_36733;
var statearr_36743_36769 = state_36733__$1;
(statearr_36743_36769[(2)] = inst_36715);

(statearr_36743_36769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (3))){
var inst_36731 = (state_36733[(2)]);
var state_36733__$1 = state_36733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36733__$1,inst_36731);
} else {
if((state_val_36734 === (12))){
var inst_36692 = (state_36733[(9)]);
var inst_36706 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36692,opts);
var state_36733__$1 = state_36733;
if(cljs.core.truth_(inst_36706)){
var statearr_36744_36770 = state_36733__$1;
(statearr_36744_36770[(1)] = (15));

} else {
var statearr_36745_36771 = state_36733__$1;
(statearr_36745_36771[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (2))){
var state_36733__$1 = state_36733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36733__$1,(4),ch);
} else {
if((state_val_36734 === (11))){
var inst_36693 = (state_36733[(8)]);
var inst_36698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36699 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36693);
var inst_36700 = cljs.core.async.timeout.call(null,(1000));
var inst_36701 = [inst_36699,inst_36700];
var inst_36702 = (new cljs.core.PersistentVector(null,2,(5),inst_36698,inst_36701,null));
var state_36733__$1 = state_36733;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36733__$1,(14),inst_36702);
} else {
if((state_val_36734 === (9))){
var inst_36693 = (state_36733[(8)]);
var inst_36719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36720 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36693);
var inst_36721 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36720);
var inst_36722 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36721)].join('');
var inst_36723 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36722);
var state_36733__$1 = (function (){var statearr_36746 = state_36733;
(statearr_36746[(10)] = inst_36719);

return statearr_36746;
})();
var statearr_36747_36772 = state_36733__$1;
(statearr_36747_36772[(2)] = inst_36723);

(statearr_36747_36772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (5))){
var inst_36686 = (state_36733[(7)]);
var inst_36688 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36689 = (new cljs.core.PersistentArrayMap(null,2,inst_36688,null));
var inst_36690 = (new cljs.core.PersistentHashSet(null,inst_36689,null));
var inst_36691 = figwheel.client.focus_msgs.call(null,inst_36690,inst_36686);
var inst_36692 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36691);
var inst_36693 = cljs.core.first.call(null,inst_36691);
var inst_36694 = figwheel.client.autoload_QMARK_.call(null);
var state_36733__$1 = (function (){var statearr_36748 = state_36733;
(statearr_36748[(8)] = inst_36693);

(statearr_36748[(9)] = inst_36692);

return statearr_36748;
})();
if(cljs.core.truth_(inst_36694)){
var statearr_36749_36773 = state_36733__$1;
(statearr_36749_36773[(1)] = (8));

} else {
var statearr_36750_36774 = state_36733__$1;
(statearr_36750_36774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (14))){
var inst_36704 = (state_36733[(2)]);
var state_36733__$1 = state_36733;
var statearr_36751_36775 = state_36733__$1;
(statearr_36751_36775[(2)] = inst_36704);

(statearr_36751_36775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (16))){
var state_36733__$1 = state_36733;
var statearr_36752_36776 = state_36733__$1;
(statearr_36752_36776[(2)] = null);

(statearr_36752_36776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (10))){
var inst_36725 = (state_36733[(2)]);
var state_36733__$1 = (function (){var statearr_36753 = state_36733;
(statearr_36753[(11)] = inst_36725);

return statearr_36753;
})();
var statearr_36754_36777 = state_36733__$1;
(statearr_36754_36777[(2)] = null);

(statearr_36754_36777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36734 === (8))){
var inst_36692 = (state_36733[(9)]);
var inst_36696 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36692,opts);
var state_36733__$1 = state_36733;
if(cljs.core.truth_(inst_36696)){
var statearr_36755_36778 = state_36733__$1;
(statearr_36755_36778[(1)] = (11));

} else {
var statearr_36756_36779 = state_36733__$1;
(statearr_36756_36779[(1)] = (12));

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
});})(c__31788__auto___36761,ch))
;
return ((function (switch__31700__auto__,c__31788__auto___36761,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31701__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31701__auto____0 = (function (){
var statearr_36757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36757[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31701__auto__);

(statearr_36757[(1)] = (1));

return statearr_36757;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31701__auto____1 = (function (state_36733){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_36733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e36758){if((e36758 instanceof Object)){
var ex__31704__auto__ = e36758;
var statearr_36759_36780 = state_36733;
(statearr_36759_36780[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36781 = state_36733;
state_36733 = G__36781;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31701__auto__ = function(state_36733){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31701__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31701__auto____1.call(this,state_36733);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31701__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31701__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___36761,ch))
})();
var state__31790__auto__ = (function (){var statearr_36760 = f__31789__auto__.call(null);
(statearr_36760[(6)] = c__31788__auto___36761);

return statearr_36760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___36761,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36782_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36782_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36784 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36784){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36783){if((e36783 instanceof Error)){
var e = e36783;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36784], null));
} else {
var e = e36783;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36784))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36785){
var map__36786 = p__36785;
var map__36786__$1 = ((((!((map__36786 == null)))?((((map__36786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36786):map__36786);
var opts = map__36786__$1;
var build_id = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36786,map__36786__$1,opts,build_id){
return (function (p__36788){
var vec__36789 = p__36788;
var seq__36790 = cljs.core.seq.call(null,vec__36789);
var first__36791 = cljs.core.first.call(null,seq__36790);
var seq__36790__$1 = cljs.core.next.call(null,seq__36790);
var map__36792 = first__36791;
var map__36792__$1 = ((((!((map__36792 == null)))?((((map__36792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36792):map__36792);
var msg = map__36792__$1;
var msg_name = cljs.core.get.call(null,map__36792__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36790__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36789,seq__36790,first__36791,seq__36790__$1,map__36792,map__36792__$1,msg,msg_name,_,map__36786,map__36786__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36789,seq__36790,first__36791,seq__36790__$1,map__36792,map__36792__$1,msg,msg_name,_,map__36786,map__36786__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36786,map__36786__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36794){
var vec__36795 = p__36794;
var seq__36796 = cljs.core.seq.call(null,vec__36795);
var first__36797 = cljs.core.first.call(null,seq__36796);
var seq__36796__$1 = cljs.core.next.call(null,seq__36796);
var map__36798 = first__36797;
var map__36798__$1 = ((((!((map__36798 == null)))?((((map__36798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36798):map__36798);
var msg = map__36798__$1;
var msg_name = cljs.core.get.call(null,map__36798__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36796__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36800){
var map__36801 = p__36800;
var map__36801__$1 = ((((!((map__36801 == null)))?((((map__36801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36801):map__36801);
var on_compile_warning = cljs.core.get.call(null,map__36801__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36801__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36801,map__36801__$1,on_compile_warning,on_compile_fail){
return (function (p__36803){
var vec__36804 = p__36803;
var seq__36805 = cljs.core.seq.call(null,vec__36804);
var first__36806 = cljs.core.first.call(null,seq__36805);
var seq__36805__$1 = cljs.core.next.call(null,seq__36805);
var map__36807 = first__36806;
var map__36807__$1 = ((((!((map__36807 == null)))?((((map__36807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36807):map__36807);
var msg = map__36807__$1;
var msg_name = cljs.core.get.call(null,map__36807__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36805__$1;
var pred__36809 = cljs.core._EQ_;
var expr__36810 = msg_name;
if(cljs.core.truth_(pred__36809.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36810))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36809.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36810))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36801,map__36801__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__,msg_hist,msg_names,msg){
return (function (state_36899){
var state_val_36900 = (state_36899[(1)]);
if((state_val_36900 === (7))){
var inst_36819 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
if(cljs.core.truth_(inst_36819)){
var statearr_36901_36948 = state_36899__$1;
(statearr_36901_36948[(1)] = (8));

} else {
var statearr_36902_36949 = state_36899__$1;
(statearr_36902_36949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (20))){
var inst_36893 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36903_36950 = state_36899__$1;
(statearr_36903_36950[(2)] = inst_36893);

(statearr_36903_36950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (27))){
var inst_36889 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36904_36951 = state_36899__$1;
(statearr_36904_36951[(2)] = inst_36889);

(statearr_36904_36951[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (1))){
var inst_36812 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36899__$1 = state_36899;
if(cljs.core.truth_(inst_36812)){
var statearr_36905_36952 = state_36899__$1;
(statearr_36905_36952[(1)] = (2));

} else {
var statearr_36906_36953 = state_36899__$1;
(statearr_36906_36953[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (24))){
var inst_36891 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36907_36954 = state_36899__$1;
(statearr_36907_36954[(2)] = inst_36891);

(statearr_36907_36954[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (4))){
var inst_36897 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36899__$1,inst_36897);
} else {
if((state_val_36900 === (15))){
var inst_36895 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36908_36955 = state_36899__$1;
(statearr_36908_36955[(2)] = inst_36895);

(statearr_36908_36955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (21))){
var inst_36848 = (state_36899[(2)]);
var inst_36849 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36850 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36849);
var state_36899__$1 = (function (){var statearr_36909 = state_36899;
(statearr_36909[(7)] = inst_36848);

return statearr_36909;
})();
var statearr_36910_36956 = state_36899__$1;
(statearr_36910_36956[(2)] = inst_36850);

(statearr_36910_36956[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (31))){
var inst_36878 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36899__$1 = state_36899;
if(cljs.core.truth_(inst_36878)){
var statearr_36911_36957 = state_36899__$1;
(statearr_36911_36957[(1)] = (34));

} else {
var statearr_36912_36958 = state_36899__$1;
(statearr_36912_36958[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (32))){
var inst_36887 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36913_36959 = state_36899__$1;
(statearr_36913_36959[(2)] = inst_36887);

(statearr_36913_36959[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (33))){
var inst_36874 = (state_36899[(2)]);
var inst_36875 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36876 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36875);
var state_36899__$1 = (function (){var statearr_36914 = state_36899;
(statearr_36914[(8)] = inst_36874);

return statearr_36914;
})();
var statearr_36915_36960 = state_36899__$1;
(statearr_36915_36960[(2)] = inst_36876);

(statearr_36915_36960[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (13))){
var inst_36833 = figwheel.client.heads_up.clear.call(null);
var state_36899__$1 = state_36899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36899__$1,(16),inst_36833);
} else {
if((state_val_36900 === (22))){
var inst_36854 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36855 = figwheel.client.heads_up.append_warning_message.call(null,inst_36854);
var state_36899__$1 = state_36899;
var statearr_36916_36961 = state_36899__$1;
(statearr_36916_36961[(2)] = inst_36855);

(statearr_36916_36961[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (36))){
var inst_36885 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36917_36962 = state_36899__$1;
(statearr_36917_36962[(2)] = inst_36885);

(statearr_36917_36962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (29))){
var inst_36865 = (state_36899[(2)]);
var inst_36866 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36867 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36866);
var state_36899__$1 = (function (){var statearr_36918 = state_36899;
(statearr_36918[(9)] = inst_36865);

return statearr_36918;
})();
var statearr_36919_36963 = state_36899__$1;
(statearr_36919_36963[(2)] = inst_36867);

(statearr_36919_36963[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (6))){
var inst_36814 = (state_36899[(10)]);
var state_36899__$1 = state_36899;
var statearr_36920_36964 = state_36899__$1;
(statearr_36920_36964[(2)] = inst_36814);

(statearr_36920_36964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (28))){
var inst_36861 = (state_36899[(2)]);
var inst_36862 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36863 = figwheel.client.heads_up.display_warning.call(null,inst_36862);
var state_36899__$1 = (function (){var statearr_36921 = state_36899;
(statearr_36921[(11)] = inst_36861);

return statearr_36921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36899__$1,(29),inst_36863);
} else {
if((state_val_36900 === (25))){
var inst_36859 = figwheel.client.heads_up.clear.call(null);
var state_36899__$1 = state_36899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36899__$1,(28),inst_36859);
} else {
if((state_val_36900 === (34))){
var inst_36880 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36899__$1 = state_36899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36899__$1,(37),inst_36880);
} else {
if((state_val_36900 === (17))){
var inst_36839 = (state_36899[(2)]);
var inst_36840 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36841 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36840);
var state_36899__$1 = (function (){var statearr_36922 = state_36899;
(statearr_36922[(12)] = inst_36839);

return statearr_36922;
})();
var statearr_36923_36965 = state_36899__$1;
(statearr_36923_36965[(2)] = inst_36841);

(statearr_36923_36965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (3))){
var inst_36831 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36899__$1 = state_36899;
if(cljs.core.truth_(inst_36831)){
var statearr_36924_36966 = state_36899__$1;
(statearr_36924_36966[(1)] = (13));

} else {
var statearr_36925_36967 = state_36899__$1;
(statearr_36925_36967[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (12))){
var inst_36827 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36926_36968 = state_36899__$1;
(statearr_36926_36968[(2)] = inst_36827);

(statearr_36926_36968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (2))){
var inst_36814 = (state_36899[(10)]);
var inst_36814__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36899__$1 = (function (){var statearr_36927 = state_36899;
(statearr_36927[(10)] = inst_36814__$1);

return statearr_36927;
})();
if(cljs.core.truth_(inst_36814__$1)){
var statearr_36928_36969 = state_36899__$1;
(statearr_36928_36969[(1)] = (5));

} else {
var statearr_36929_36970 = state_36899__$1;
(statearr_36929_36970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (23))){
var inst_36857 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36899__$1 = state_36899;
if(cljs.core.truth_(inst_36857)){
var statearr_36930_36971 = state_36899__$1;
(statearr_36930_36971[(1)] = (25));

} else {
var statearr_36931_36972 = state_36899__$1;
(statearr_36931_36972[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (35))){
var state_36899__$1 = state_36899;
var statearr_36932_36973 = state_36899__$1;
(statearr_36932_36973[(2)] = null);

(statearr_36932_36973[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (19))){
var inst_36852 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36899__$1 = state_36899;
if(cljs.core.truth_(inst_36852)){
var statearr_36933_36974 = state_36899__$1;
(statearr_36933_36974[(1)] = (22));

} else {
var statearr_36934_36975 = state_36899__$1;
(statearr_36934_36975[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (11))){
var inst_36823 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36935_36976 = state_36899__$1;
(statearr_36935_36976[(2)] = inst_36823);

(statearr_36935_36976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (9))){
var inst_36825 = figwheel.client.heads_up.clear.call(null);
var state_36899__$1 = state_36899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36899__$1,(12),inst_36825);
} else {
if((state_val_36900 === (5))){
var inst_36816 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36899__$1 = state_36899;
var statearr_36936_36977 = state_36899__$1;
(statearr_36936_36977[(2)] = inst_36816);

(statearr_36936_36977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (14))){
var inst_36843 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36899__$1 = state_36899;
if(cljs.core.truth_(inst_36843)){
var statearr_36937_36978 = state_36899__$1;
(statearr_36937_36978[(1)] = (18));

} else {
var statearr_36938_36979 = state_36899__$1;
(statearr_36938_36979[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (26))){
var inst_36869 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36899__$1 = state_36899;
if(cljs.core.truth_(inst_36869)){
var statearr_36939_36980 = state_36899__$1;
(statearr_36939_36980[(1)] = (30));

} else {
var statearr_36940_36981 = state_36899__$1;
(statearr_36940_36981[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (16))){
var inst_36835 = (state_36899[(2)]);
var inst_36836 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36837 = figwheel.client.heads_up.display_exception.call(null,inst_36836);
var state_36899__$1 = (function (){var statearr_36941 = state_36899;
(statearr_36941[(13)] = inst_36835);

return statearr_36941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36899__$1,(17),inst_36837);
} else {
if((state_val_36900 === (30))){
var inst_36871 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36872 = figwheel.client.heads_up.display_warning.call(null,inst_36871);
var state_36899__$1 = state_36899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36899__$1,(33),inst_36872);
} else {
if((state_val_36900 === (10))){
var inst_36829 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36942_36982 = state_36899__$1;
(statearr_36942_36982[(2)] = inst_36829);

(statearr_36942_36982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (18))){
var inst_36845 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36846 = figwheel.client.heads_up.display_exception.call(null,inst_36845);
var state_36899__$1 = state_36899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36899__$1,(21),inst_36846);
} else {
if((state_val_36900 === (37))){
var inst_36882 = (state_36899[(2)]);
var state_36899__$1 = state_36899;
var statearr_36943_36983 = state_36899__$1;
(statearr_36943_36983[(2)] = inst_36882);

(statearr_36943_36983[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36900 === (8))){
var inst_36821 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36899__$1 = state_36899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36899__$1,(11),inst_36821);
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
});})(c__31788__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31700__auto__,c__31788__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto____0 = (function (){
var statearr_36944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36944[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto__);

(statearr_36944[(1)] = (1));

return statearr_36944;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto____1 = (function (state_36899){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_36899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e36945){if((e36945 instanceof Object)){
var ex__31704__auto__ = e36945;
var statearr_36946_36984 = state_36899;
(statearr_36946_36984[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36985 = state_36899;
state_36899 = G__36985;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto__ = function(state_36899){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto____1.call(this,state_36899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__,msg_hist,msg_names,msg))
})();
var state__31790__auto__ = (function (){var statearr_36947 = f__31789__auto__.call(null);
(statearr_36947[(6)] = c__31788__auto__);

return statearr_36947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__,msg_hist,msg_names,msg))
);

return c__31788__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31788__auto___37014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___37014,ch){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___37014,ch){
return (function (state_37000){
var state_val_37001 = (state_37000[(1)]);
if((state_val_37001 === (1))){
var state_37000__$1 = state_37000;
var statearr_37002_37015 = state_37000__$1;
(statearr_37002_37015[(2)] = null);

(statearr_37002_37015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (2))){
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37000__$1,(4),ch);
} else {
if((state_val_37001 === (3))){
var inst_36998 = (state_37000[(2)]);
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37000__$1,inst_36998);
} else {
if((state_val_37001 === (4))){
var inst_36988 = (state_37000[(7)]);
var inst_36988__$1 = (state_37000[(2)]);
var state_37000__$1 = (function (){var statearr_37003 = state_37000;
(statearr_37003[(7)] = inst_36988__$1);

return statearr_37003;
})();
if(cljs.core.truth_(inst_36988__$1)){
var statearr_37004_37016 = state_37000__$1;
(statearr_37004_37016[(1)] = (5));

} else {
var statearr_37005_37017 = state_37000__$1;
(statearr_37005_37017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (5))){
var inst_36988 = (state_37000[(7)]);
var inst_36990 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36988);
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37000__$1,(8),inst_36990);
} else {
if((state_val_37001 === (6))){
var state_37000__$1 = state_37000;
var statearr_37006_37018 = state_37000__$1;
(statearr_37006_37018[(2)] = null);

(statearr_37006_37018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (7))){
var inst_36996 = (state_37000[(2)]);
var state_37000__$1 = state_37000;
var statearr_37007_37019 = state_37000__$1;
(statearr_37007_37019[(2)] = inst_36996);

(statearr_37007_37019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (8))){
var inst_36992 = (state_37000[(2)]);
var state_37000__$1 = (function (){var statearr_37008 = state_37000;
(statearr_37008[(8)] = inst_36992);

return statearr_37008;
})();
var statearr_37009_37020 = state_37000__$1;
(statearr_37009_37020[(2)] = null);

(statearr_37009_37020[(1)] = (2));


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
});})(c__31788__auto___37014,ch))
;
return ((function (switch__31700__auto__,c__31788__auto___37014,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31701__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31701__auto____0 = (function (){
var statearr_37010 = [null,null,null,null,null,null,null,null,null];
(statearr_37010[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31701__auto__);

(statearr_37010[(1)] = (1));

return statearr_37010;
});
var figwheel$client$heads_up_plugin_$_state_machine__31701__auto____1 = (function (state_37000){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_37000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e37011){if((e37011 instanceof Object)){
var ex__31704__auto__ = e37011;
var statearr_37012_37021 = state_37000;
(statearr_37012_37021[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37022 = state_37000;
state_37000 = G__37022;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31701__auto__ = function(state_37000){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31701__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31701__auto____1.call(this,state_37000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31701__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31701__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___37014,ch))
})();
var state__31790__auto__ = (function (){var statearr_37013 = f__31789__auto__.call(null);
(statearr_37013[(6)] = c__31788__auto___37014);

return statearr_37013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___37014,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__){
return (function (state_37028){
var state_val_37029 = (state_37028[(1)]);
if((state_val_37029 === (1))){
var inst_37023 = cljs.core.async.timeout.call(null,(3000));
var state_37028__$1 = state_37028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37028__$1,(2),inst_37023);
} else {
if((state_val_37029 === (2))){
var inst_37025 = (state_37028[(2)]);
var inst_37026 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37028__$1 = (function (){var statearr_37030 = state_37028;
(statearr_37030[(7)] = inst_37025);

return statearr_37030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37028__$1,inst_37026);
} else {
return null;
}
}
});})(c__31788__auto__))
;
return ((function (switch__31700__auto__,c__31788__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31701__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31701__auto____0 = (function (){
var statearr_37031 = [null,null,null,null,null,null,null,null];
(statearr_37031[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31701__auto__);

(statearr_37031[(1)] = (1));

return statearr_37031;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31701__auto____1 = (function (state_37028){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_37028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e37032){if((e37032 instanceof Object)){
var ex__31704__auto__ = e37032;
var statearr_37033_37035 = state_37028;
(statearr_37033_37035[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37036 = state_37028;
state_37028 = G__37036;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31701__auto__ = function(state_37028){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31701__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31701__auto____1.call(this,state_37028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31701__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31701__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__))
})();
var state__31790__auto__ = (function (){var statearr_37034 = f__31789__auto__.call(null);
(statearr_37034[(6)] = c__31788__auto__);

return statearr_37034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__))
);

return c__31788__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37043){
var state_val_37044 = (state_37043[(1)]);
if((state_val_37044 === (1))){
var inst_37037 = cljs.core.async.timeout.call(null,(2000));
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37043__$1,(2),inst_37037);
} else {
if((state_val_37044 === (2))){
var inst_37039 = (state_37043[(2)]);
var inst_37040 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37041 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37040);
var state_37043__$1 = (function (){var statearr_37045 = state_37043;
(statearr_37045[(7)] = inst_37039);

return statearr_37045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37043__$1,inst_37041);
} else {
return null;
}
}
});})(c__31788__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31700__auto__,c__31788__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto____0 = (function (){
var statearr_37046 = [null,null,null,null,null,null,null,null];
(statearr_37046[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto__);

(statearr_37046[(1)] = (1));

return statearr_37046;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto____1 = (function (state_37043){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_37043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e37047){if((e37047 instanceof Object)){
var ex__31704__auto__ = e37047;
var statearr_37048_37050 = state_37043;
(statearr_37048_37050[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37051 = state_37043;
state_37043 = G__37051;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto__ = function(state_37043){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto____1.call(this,state_37043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31790__auto__ = (function (){var statearr_37049 = f__31789__auto__.call(null);
(statearr_37049[(6)] = c__31788__auto__);

return statearr_37049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__,figwheel_version,temp__4657__auto__))
);

return c__31788__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37052){
var map__37053 = p__37052;
var map__37053__$1 = ((((!((map__37053 == null)))?((((map__37053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37053):map__37053);
var file = cljs.core.get.call(null,map__37053__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37053__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37053__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37055 = "";
var G__37055__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37055),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37055);
var G__37055__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37055__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37055__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37055__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37055__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37056){
var map__37057 = p__37056;
var map__37057__$1 = ((((!((map__37057 == null)))?((((map__37057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37057):map__37057);
var ed = map__37057__$1;
var formatted_exception = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37059_37063 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37060_37064 = null;
var count__37061_37065 = (0);
var i__37062_37066 = (0);
while(true){
if((i__37062_37066 < count__37061_37065)){
var msg_37067 = cljs.core._nth.call(null,chunk__37060_37064,i__37062_37066);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37067);

var G__37068 = seq__37059_37063;
var G__37069 = chunk__37060_37064;
var G__37070 = count__37061_37065;
var G__37071 = (i__37062_37066 + (1));
seq__37059_37063 = G__37068;
chunk__37060_37064 = G__37069;
count__37061_37065 = G__37070;
i__37062_37066 = G__37071;
continue;
} else {
var temp__4657__auto___37072 = cljs.core.seq.call(null,seq__37059_37063);
if(temp__4657__auto___37072){
var seq__37059_37073__$1 = temp__4657__auto___37072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37059_37073__$1)){
var c__29126__auto___37074 = cljs.core.chunk_first.call(null,seq__37059_37073__$1);
var G__37075 = cljs.core.chunk_rest.call(null,seq__37059_37073__$1);
var G__37076 = c__29126__auto___37074;
var G__37077 = cljs.core.count.call(null,c__29126__auto___37074);
var G__37078 = (0);
seq__37059_37063 = G__37075;
chunk__37060_37064 = G__37076;
count__37061_37065 = G__37077;
i__37062_37066 = G__37078;
continue;
} else {
var msg_37079 = cljs.core.first.call(null,seq__37059_37073__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37079);

var G__37080 = cljs.core.next.call(null,seq__37059_37073__$1);
var G__37081 = null;
var G__37082 = (0);
var G__37083 = (0);
seq__37059_37063 = G__37080;
chunk__37060_37064 = G__37081;
count__37061_37065 = G__37082;
i__37062_37066 = G__37083;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37084){
var map__37085 = p__37084;
var map__37085__$1 = ((((!((map__37085 == null)))?((((map__37085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37085):map__37085);
var w = map__37085__$1;
var message = cljs.core.get.call(null,map__37085__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"lib/assets/cljs/cljs-admin.out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"lib/assets/cljs/cljs-admin.out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28274__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28274__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37087 = cljs.core.seq.call(null,plugins);
var chunk__37088 = null;
var count__37089 = (0);
var i__37090 = (0);
while(true){
if((i__37090 < count__37089)){
var vec__37091 = cljs.core._nth.call(null,chunk__37088,i__37090);
var k = cljs.core.nth.call(null,vec__37091,(0),null);
var plugin = cljs.core.nth.call(null,vec__37091,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37097 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37087,chunk__37088,count__37089,i__37090,pl_37097,vec__37091,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37097.call(null,msg_hist);
});})(seq__37087,chunk__37088,count__37089,i__37090,pl_37097,vec__37091,k,plugin))
);
} else {
}

var G__37098 = seq__37087;
var G__37099 = chunk__37088;
var G__37100 = count__37089;
var G__37101 = (i__37090 + (1));
seq__37087 = G__37098;
chunk__37088 = G__37099;
count__37089 = G__37100;
i__37090 = G__37101;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37087);
if(temp__4657__auto__){
var seq__37087__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37087__$1)){
var c__29126__auto__ = cljs.core.chunk_first.call(null,seq__37087__$1);
var G__37102 = cljs.core.chunk_rest.call(null,seq__37087__$1);
var G__37103 = c__29126__auto__;
var G__37104 = cljs.core.count.call(null,c__29126__auto__);
var G__37105 = (0);
seq__37087 = G__37102;
chunk__37088 = G__37103;
count__37089 = G__37104;
i__37090 = G__37105;
continue;
} else {
var vec__37094 = cljs.core.first.call(null,seq__37087__$1);
var k = cljs.core.nth.call(null,vec__37094,(0),null);
var plugin = cljs.core.nth.call(null,vec__37094,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37106 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37087,chunk__37088,count__37089,i__37090,pl_37106,vec__37094,k,plugin,seq__37087__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37106.call(null,msg_hist);
});})(seq__37087,chunk__37088,count__37089,i__37090,pl_37106,vec__37094,k,plugin,seq__37087__$1,temp__4657__auto__))
);
} else {
}

var G__37107 = cljs.core.next.call(null,seq__37087__$1);
var G__37108 = null;
var G__37109 = (0);
var G__37110 = (0);
seq__37087 = G__37107;
chunk__37088 = G__37108;
count__37089 = G__37109;
i__37090 = G__37110;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37112 = arguments.length;
switch (G__37112) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37113_37118 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37114_37119 = null;
var count__37115_37120 = (0);
var i__37116_37121 = (0);
while(true){
if((i__37116_37121 < count__37115_37120)){
var msg_37122 = cljs.core._nth.call(null,chunk__37114_37119,i__37116_37121);
figwheel.client.socket.handle_incoming_message.call(null,msg_37122);

var G__37123 = seq__37113_37118;
var G__37124 = chunk__37114_37119;
var G__37125 = count__37115_37120;
var G__37126 = (i__37116_37121 + (1));
seq__37113_37118 = G__37123;
chunk__37114_37119 = G__37124;
count__37115_37120 = G__37125;
i__37116_37121 = G__37126;
continue;
} else {
var temp__4657__auto___37127 = cljs.core.seq.call(null,seq__37113_37118);
if(temp__4657__auto___37127){
var seq__37113_37128__$1 = temp__4657__auto___37127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37113_37128__$1)){
var c__29126__auto___37129 = cljs.core.chunk_first.call(null,seq__37113_37128__$1);
var G__37130 = cljs.core.chunk_rest.call(null,seq__37113_37128__$1);
var G__37131 = c__29126__auto___37129;
var G__37132 = cljs.core.count.call(null,c__29126__auto___37129);
var G__37133 = (0);
seq__37113_37118 = G__37130;
chunk__37114_37119 = G__37131;
count__37115_37120 = G__37132;
i__37116_37121 = G__37133;
continue;
} else {
var msg_37134 = cljs.core.first.call(null,seq__37113_37128__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37134);

var G__37135 = cljs.core.next.call(null,seq__37113_37128__$1);
var G__37136 = null;
var G__37137 = (0);
var G__37138 = (0);
seq__37113_37118 = G__37135;
chunk__37114_37119 = G__37136;
count__37115_37120 = G__37137;
i__37116_37121 = G__37138;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29463__auto__ = [];
var len__29456__auto___37143 = arguments.length;
var i__29457__auto___37144 = (0);
while(true){
if((i__29457__auto___37144 < len__29456__auto___37143)){
args__29463__auto__.push((arguments[i__29457__auto___37144]));

var G__37145 = (i__29457__auto___37144 + (1));
i__29457__auto___37144 = G__37145;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37140){
var map__37141 = p__37140;
var map__37141__$1 = ((((!((map__37141 == null)))?((((map__37141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37141):map__37141);
var opts = map__37141__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37139){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37139));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37146){if((e37146 instanceof Error)){
var e = e37146;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37146;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37147){
var map__37148 = p__37147;
var map__37148__$1 = ((((!((map__37148 == null)))?((((map__37148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37148):map__37148);
var msg_name = cljs.core.get.call(null,map__37148__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1503404164843
