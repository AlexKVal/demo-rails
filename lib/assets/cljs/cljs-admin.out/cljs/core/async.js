// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31834 = arguments.length;
switch (G__31834) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31835 = (function (f,blockable,meta31836){
this.f = f;
this.blockable = blockable;
this.meta31836 = meta31836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31837,meta31836__$1){
var self__ = this;
var _31837__$1 = this;
return (new cljs.core.async.t_cljs$core$async31835(self__.f,self__.blockable,meta31836__$1));
});

cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31837){
var self__ = this;
var _31837__$1 = this;
return self__.meta31836;
});

cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31836","meta31836",-1834335704,null)], null);
});

cljs.core.async.t_cljs$core$async31835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31835";

cljs.core.async.t_cljs$core$async31835.cljs$lang$ctorPrWriter = (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async31835");
});

cljs.core.async.__GT_t_cljs$core$async31835 = (function cljs$core$async$__GT_t_cljs$core$async31835(f__$1,blockable__$1,meta31836){
return (new cljs.core.async.t_cljs$core$async31835(f__$1,blockable__$1,meta31836));
});

}

return (new cljs.core.async.t_cljs$core$async31835(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31841 = arguments.length;
switch (G__31841) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31844 = arguments.length;
switch (G__31844) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31847 = arguments.length;
switch (G__31847) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31849 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31849);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31849,ret){
return (function (){
return fn1.call(null,val_31849);
});})(val_31849,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31851 = arguments.length;
switch (G__31851) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29232__auto___31853 = n;
var x_31854 = (0);
while(true){
if((x_31854 < n__29232__auto___31853)){
(a[x_31854] = (0));

var G__31855 = (x_31854 + (1));
x_31854 = G__31855;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31856 = (i + (1));
i = G__31856;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31857 = (function (flag,meta31858){
this.flag = flag;
this.meta31858 = meta31858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31859,meta31858__$1){
var self__ = this;
var _31859__$1 = this;
return (new cljs.core.async.t_cljs$core$async31857(self__.flag,meta31858__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31859){
var self__ = this;
var _31859__$1 = this;
return self__.meta31858;
});})(flag))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31857.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31858","meta31858",805916421,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31857";

cljs.core.async.t_cljs$core$async31857.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async31857");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31857 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31857(flag__$1,meta31858){
return (new cljs.core.async.t_cljs$core$async31857(flag__$1,meta31858));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31857(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31860 = (function (flag,cb,meta31861){
this.flag = flag;
this.cb = cb;
this.meta31861 = meta31861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31862,meta31861__$1){
var self__ = this;
var _31862__$1 = this;
return (new cljs.core.async.t_cljs$core$async31860(self__.flag,self__.cb,meta31861__$1));
});

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31862){
var self__ = this;
var _31862__$1 = this;
return self__.meta31861;
});

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31861","meta31861",-1970592009,null)], null);
});

cljs.core.async.t_cljs$core$async31860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31860";

cljs.core.async.t_cljs$core$async31860.cljs$lang$ctorPrWriter = (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async31860");
});

cljs.core.async.__GT_t_cljs$core$async31860 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31860(flag__$1,cb__$1,meta31861){
return (new cljs.core.async.t_cljs$core$async31860(flag__$1,cb__$1,meta31861));
});

}

return (new cljs.core.async.t_cljs$core$async31860(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31863_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31863_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31864_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31864_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28286__auto__ = wport;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31865 = (i + (1));
i = G__31865;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28286__auto__ = ret;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28274__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28274__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___31871 = arguments.length;
var i__29457__auto___31872 = (0);
while(true){
if((i__29457__auto___31872 < len__29456__auto___31871)){
args__29463__auto__.push((arguments[i__29457__auto___31872]));

var G__31873 = (i__29457__auto___31872 + (1));
i__29457__auto___31872 = G__31873;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((1) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29464__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31868){
var map__31869 = p__31868;
var map__31869__$1 = ((((!((map__31869 == null)))?((((map__31869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31869):map__31869);
var opts = map__31869__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31866){
var G__31867 = cljs.core.first.call(null,seq31866);
var seq31866__$1 = cljs.core.next.call(null,seq31866);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31867,seq31866__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31875 = arguments.length;
switch (G__31875) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31788__auto___31921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___31921){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___31921){
return (function (state_31899){
var state_val_31900 = (state_31899[(1)]);
if((state_val_31900 === (7))){
var inst_31895 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
var statearr_31901_31922 = state_31899__$1;
(statearr_31901_31922[(2)] = inst_31895);

(statearr_31901_31922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (1))){
var state_31899__$1 = state_31899;
var statearr_31902_31923 = state_31899__$1;
(statearr_31902_31923[(2)] = null);

(statearr_31902_31923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (4))){
var inst_31878 = (state_31899[(7)]);
var inst_31878__$1 = (state_31899[(2)]);
var inst_31879 = (inst_31878__$1 == null);
var state_31899__$1 = (function (){var statearr_31903 = state_31899;
(statearr_31903[(7)] = inst_31878__$1);

return statearr_31903;
})();
if(cljs.core.truth_(inst_31879)){
var statearr_31904_31924 = state_31899__$1;
(statearr_31904_31924[(1)] = (5));

} else {
var statearr_31905_31925 = state_31899__$1;
(statearr_31905_31925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (13))){
var state_31899__$1 = state_31899;
var statearr_31906_31926 = state_31899__$1;
(statearr_31906_31926[(2)] = null);

(statearr_31906_31926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (6))){
var inst_31878 = (state_31899[(7)]);
var state_31899__$1 = state_31899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31899__$1,(11),to,inst_31878);
} else {
if((state_val_31900 === (3))){
var inst_31897 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31899__$1,inst_31897);
} else {
if((state_val_31900 === (12))){
var state_31899__$1 = state_31899;
var statearr_31907_31927 = state_31899__$1;
(statearr_31907_31927[(2)] = null);

(statearr_31907_31927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (2))){
var state_31899__$1 = state_31899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31899__$1,(4),from);
} else {
if((state_val_31900 === (11))){
var inst_31888 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
if(cljs.core.truth_(inst_31888)){
var statearr_31908_31928 = state_31899__$1;
(statearr_31908_31928[(1)] = (12));

} else {
var statearr_31909_31929 = state_31899__$1;
(statearr_31909_31929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (9))){
var state_31899__$1 = state_31899;
var statearr_31910_31930 = state_31899__$1;
(statearr_31910_31930[(2)] = null);

(statearr_31910_31930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (5))){
var state_31899__$1 = state_31899;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31911_31931 = state_31899__$1;
(statearr_31911_31931[(1)] = (8));

} else {
var statearr_31912_31932 = state_31899__$1;
(statearr_31912_31932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (14))){
var inst_31893 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
var statearr_31913_31933 = state_31899__$1;
(statearr_31913_31933[(2)] = inst_31893);

(statearr_31913_31933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (10))){
var inst_31885 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
var statearr_31914_31934 = state_31899__$1;
(statearr_31914_31934[(2)] = inst_31885);

(statearr_31914_31934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (8))){
var inst_31882 = cljs.core.async.close_BANG_.call(null,to);
var state_31899__$1 = state_31899;
var statearr_31915_31935 = state_31899__$1;
(statearr_31915_31935[(2)] = inst_31882);

(statearr_31915_31935[(1)] = (10));


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
});})(c__31788__auto___31921))
;
return ((function (switch__31700__auto__,c__31788__auto___31921){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_31916 = [null,null,null,null,null,null,null,null];
(statearr_31916[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_31916[(1)] = (1));

return statearr_31916;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_31899){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_31899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e31917){if((e31917 instanceof Object)){
var ex__31704__auto__ = e31917;
var statearr_31918_31936 = state_31899;
(statearr_31918_31936[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31937 = state_31899;
state_31899 = G__31937;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_31899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_31899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___31921))
})();
var state__31790__auto__ = (function (){var statearr_31919 = f__31789__auto__.call(null);
(statearr_31919[(6)] = c__31788__auto___31921);

return statearr_31919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___31921))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31938){
var vec__31939 = p__31938;
var v = cljs.core.nth.call(null,vec__31939,(0),null);
var p = cljs.core.nth.call(null,vec__31939,(1),null);
var job = vec__31939;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31788__auto___32110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___32110,res,vec__31939,v,p,job,jobs,results){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___32110,res,vec__31939,v,p,job,jobs,results){
return (function (state_31946){
var state_val_31947 = (state_31946[(1)]);
if((state_val_31947 === (1))){
var state_31946__$1 = state_31946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31946__$1,(2),res,v);
} else {
if((state_val_31947 === (2))){
var inst_31943 = (state_31946[(2)]);
var inst_31944 = cljs.core.async.close_BANG_.call(null,res);
var state_31946__$1 = (function (){var statearr_31948 = state_31946;
(statearr_31948[(7)] = inst_31943);

return statearr_31948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31946__$1,inst_31944);
} else {
return null;
}
}
});})(c__31788__auto___32110,res,vec__31939,v,p,job,jobs,results))
;
return ((function (switch__31700__auto__,c__31788__auto___32110,res,vec__31939,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0 = (function (){
var statearr_31949 = [null,null,null,null,null,null,null,null];
(statearr_31949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__);

(statearr_31949[(1)] = (1));

return statearr_31949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1 = (function (state_31946){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_31946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e31950){if((e31950 instanceof Object)){
var ex__31704__auto__ = e31950;
var statearr_31951_32111 = state_31946;
(statearr_31951_32111[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32112 = state_31946;
state_31946 = G__32112;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = function(state_31946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1.call(this,state_31946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___32110,res,vec__31939,v,p,job,jobs,results))
})();
var state__31790__auto__ = (function (){var statearr_31952 = f__31789__auto__.call(null);
(statearr_31952[(6)] = c__31788__auto___32110);

return statearr_31952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___32110,res,vec__31939,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31953){
var vec__31954 = p__31953;
var v = cljs.core.nth.call(null,vec__31954,(0),null);
var p = cljs.core.nth.call(null,vec__31954,(1),null);
var job = vec__31954;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29232__auto___32113 = n;
var __32114 = (0);
while(true){
if((__32114 < n__29232__auto___32113)){
var G__31957_32115 = type;
var G__31957_32116__$1 = (((G__31957_32115 instanceof cljs.core.Keyword))?G__31957_32115.fqn:null);
switch (G__31957_32116__$1) {
case "compute":
var c__31788__auto___32118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32114,c__31788__auto___32118,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (__32114,c__31788__auto___32118,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async){
return (function (state_31970){
var state_val_31971 = (state_31970[(1)]);
if((state_val_31971 === (1))){
var state_31970__$1 = state_31970;
var statearr_31972_32119 = state_31970__$1;
(statearr_31972_32119[(2)] = null);

(statearr_31972_32119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (2))){
var state_31970__$1 = state_31970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31970__$1,(4),jobs);
} else {
if((state_val_31971 === (3))){
var inst_31968 = (state_31970[(2)]);
var state_31970__$1 = state_31970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31970__$1,inst_31968);
} else {
if((state_val_31971 === (4))){
var inst_31960 = (state_31970[(2)]);
var inst_31961 = process.call(null,inst_31960);
var state_31970__$1 = state_31970;
if(cljs.core.truth_(inst_31961)){
var statearr_31973_32120 = state_31970__$1;
(statearr_31973_32120[(1)] = (5));

} else {
var statearr_31974_32121 = state_31970__$1;
(statearr_31974_32121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (5))){
var state_31970__$1 = state_31970;
var statearr_31975_32122 = state_31970__$1;
(statearr_31975_32122[(2)] = null);

(statearr_31975_32122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (6))){
var state_31970__$1 = state_31970;
var statearr_31976_32123 = state_31970__$1;
(statearr_31976_32123[(2)] = null);

(statearr_31976_32123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31971 === (7))){
var inst_31966 = (state_31970[(2)]);
var state_31970__$1 = state_31970;
var statearr_31977_32124 = state_31970__$1;
(statearr_31977_32124[(2)] = inst_31966);

(statearr_31977_32124[(1)] = (3));


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
});})(__32114,c__31788__auto___32118,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async))
;
return ((function (__32114,switch__31700__auto__,c__31788__auto___32118,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0 = (function (){
var statearr_31978 = [null,null,null,null,null,null,null];
(statearr_31978[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__);

(statearr_31978[(1)] = (1));

return statearr_31978;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1 = (function (state_31970){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_31970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e31979){if((e31979 instanceof Object)){
var ex__31704__auto__ = e31979;
var statearr_31980_32125 = state_31970;
(statearr_31980_32125[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32126 = state_31970;
state_31970 = G__32126;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = function(state_31970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1.call(this,state_31970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__;
})()
;})(__32114,switch__31700__auto__,c__31788__auto___32118,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async))
})();
var state__31790__auto__ = (function (){var statearr_31981 = f__31789__auto__.call(null);
(statearr_31981[(6)] = c__31788__auto___32118);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(__32114,c__31788__auto___32118,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async))
);


break;
case "async":
var c__31788__auto___32127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32114,c__31788__auto___32127,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (__32114,c__31788__auto___32127,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async){
return (function (state_31994){
var state_val_31995 = (state_31994[(1)]);
if((state_val_31995 === (1))){
var state_31994__$1 = state_31994;
var statearr_31996_32128 = state_31994__$1;
(statearr_31996_32128[(2)] = null);

(statearr_31996_32128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (2))){
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31994__$1,(4),jobs);
} else {
if((state_val_31995 === (3))){
var inst_31992 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31994__$1,inst_31992);
} else {
if((state_val_31995 === (4))){
var inst_31984 = (state_31994[(2)]);
var inst_31985 = async.call(null,inst_31984);
var state_31994__$1 = state_31994;
if(cljs.core.truth_(inst_31985)){
var statearr_31997_32129 = state_31994__$1;
(statearr_31997_32129[(1)] = (5));

} else {
var statearr_31998_32130 = state_31994__$1;
(statearr_31998_32130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (5))){
var state_31994__$1 = state_31994;
var statearr_31999_32131 = state_31994__$1;
(statearr_31999_32131[(2)] = null);

(statearr_31999_32131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (6))){
var state_31994__$1 = state_31994;
var statearr_32000_32132 = state_31994__$1;
(statearr_32000_32132[(2)] = null);

(statearr_32000_32132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (7))){
var inst_31990 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_32001_32133 = state_31994__$1;
(statearr_32001_32133[(2)] = inst_31990);

(statearr_32001_32133[(1)] = (3));


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
});})(__32114,c__31788__auto___32127,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async))
;
return ((function (__32114,switch__31700__auto__,c__31788__auto___32127,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0 = (function (){
var statearr_32002 = [null,null,null,null,null,null,null];
(statearr_32002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__);

(statearr_32002[(1)] = (1));

return statearr_32002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1 = (function (state_31994){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_31994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e32003){if((e32003 instanceof Object)){
var ex__31704__auto__ = e32003;
var statearr_32004_32134 = state_31994;
(statearr_32004_32134[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32135 = state_31994;
state_31994 = G__32135;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = function(state_31994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1.call(this,state_31994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__;
})()
;})(__32114,switch__31700__auto__,c__31788__auto___32127,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async))
})();
var state__31790__auto__ = (function (){var statearr_32005 = f__31789__auto__.call(null);
(statearr_32005[(6)] = c__31788__auto___32127);

return statearr_32005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(__32114,c__31788__auto___32127,G__31957_32115,G__31957_32116__$1,n__29232__auto___32113,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31957_32116__$1)].join('')));

}

var G__32136 = (__32114 + (1));
__32114 = G__32136;
continue;
} else {
}
break;
}

var c__31788__auto___32137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___32137,jobs,results,process,async){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___32137,jobs,results,process,async){
return (function (state_32027){
var state_val_32028 = (state_32027[(1)]);
if((state_val_32028 === (1))){
var state_32027__$1 = state_32027;
var statearr_32029_32138 = state_32027__$1;
(statearr_32029_32138[(2)] = null);

(statearr_32029_32138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (2))){
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32027__$1,(4),from);
} else {
if((state_val_32028 === (3))){
var inst_32025 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32027__$1,inst_32025);
} else {
if((state_val_32028 === (4))){
var inst_32008 = (state_32027[(7)]);
var inst_32008__$1 = (state_32027[(2)]);
var inst_32009 = (inst_32008__$1 == null);
var state_32027__$1 = (function (){var statearr_32030 = state_32027;
(statearr_32030[(7)] = inst_32008__$1);

return statearr_32030;
})();
if(cljs.core.truth_(inst_32009)){
var statearr_32031_32139 = state_32027__$1;
(statearr_32031_32139[(1)] = (5));

} else {
var statearr_32032_32140 = state_32027__$1;
(statearr_32032_32140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (5))){
var inst_32011 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32027__$1 = state_32027;
var statearr_32033_32141 = state_32027__$1;
(statearr_32033_32141[(2)] = inst_32011);

(statearr_32033_32141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (6))){
var inst_32013 = (state_32027[(8)]);
var inst_32008 = (state_32027[(7)]);
var inst_32013__$1 = cljs.core.async.chan.call(null,(1));
var inst_32014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32015 = [inst_32008,inst_32013__$1];
var inst_32016 = (new cljs.core.PersistentVector(null,2,(5),inst_32014,inst_32015,null));
var state_32027__$1 = (function (){var statearr_32034 = state_32027;
(statearr_32034[(8)] = inst_32013__$1);

return statearr_32034;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32027__$1,(8),jobs,inst_32016);
} else {
if((state_val_32028 === (7))){
var inst_32023 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32035_32142 = state_32027__$1;
(statearr_32035_32142[(2)] = inst_32023);

(statearr_32035_32142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (8))){
var inst_32013 = (state_32027[(8)]);
var inst_32018 = (state_32027[(2)]);
var state_32027__$1 = (function (){var statearr_32036 = state_32027;
(statearr_32036[(9)] = inst_32018);

return statearr_32036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32027__$1,(9),results,inst_32013);
} else {
if((state_val_32028 === (9))){
var inst_32020 = (state_32027[(2)]);
var state_32027__$1 = (function (){var statearr_32037 = state_32027;
(statearr_32037[(10)] = inst_32020);

return statearr_32037;
})();
var statearr_32038_32143 = state_32027__$1;
(statearr_32038_32143[(2)] = null);

(statearr_32038_32143[(1)] = (2));


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
});})(c__31788__auto___32137,jobs,results,process,async))
;
return ((function (switch__31700__auto__,c__31788__auto___32137,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0 = (function (){
var statearr_32039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__);

(statearr_32039[(1)] = (1));

return statearr_32039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1 = (function (state_32027){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_32027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e32040){if((e32040 instanceof Object)){
var ex__31704__auto__ = e32040;
var statearr_32041_32144 = state_32027;
(statearr_32041_32144[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32145 = state_32027;
state_32027 = G__32145;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = function(state_32027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1.call(this,state_32027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___32137,jobs,results,process,async))
})();
var state__31790__auto__ = (function (){var statearr_32042 = f__31789__auto__.call(null);
(statearr_32042[(6)] = c__31788__auto___32137);

return statearr_32042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___32137,jobs,results,process,async))
);


var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__,jobs,results,process,async){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__,jobs,results,process,async){
return (function (state_32080){
var state_val_32081 = (state_32080[(1)]);
if((state_val_32081 === (7))){
var inst_32076 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
var statearr_32082_32146 = state_32080__$1;
(statearr_32082_32146[(2)] = inst_32076);

(statearr_32082_32146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (20))){
var state_32080__$1 = state_32080;
var statearr_32083_32147 = state_32080__$1;
(statearr_32083_32147[(2)] = null);

(statearr_32083_32147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (1))){
var state_32080__$1 = state_32080;
var statearr_32084_32148 = state_32080__$1;
(statearr_32084_32148[(2)] = null);

(statearr_32084_32148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (4))){
var inst_32045 = (state_32080[(7)]);
var inst_32045__$1 = (state_32080[(2)]);
var inst_32046 = (inst_32045__$1 == null);
var state_32080__$1 = (function (){var statearr_32085 = state_32080;
(statearr_32085[(7)] = inst_32045__$1);

return statearr_32085;
})();
if(cljs.core.truth_(inst_32046)){
var statearr_32086_32149 = state_32080__$1;
(statearr_32086_32149[(1)] = (5));

} else {
var statearr_32087_32150 = state_32080__$1;
(statearr_32087_32150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (15))){
var inst_32058 = (state_32080[(8)]);
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32080__$1,(18),to,inst_32058);
} else {
if((state_val_32081 === (21))){
var inst_32071 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
var statearr_32088_32151 = state_32080__$1;
(statearr_32088_32151[(2)] = inst_32071);

(statearr_32088_32151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (13))){
var inst_32073 = (state_32080[(2)]);
var state_32080__$1 = (function (){var statearr_32089 = state_32080;
(statearr_32089[(9)] = inst_32073);

return statearr_32089;
})();
var statearr_32090_32152 = state_32080__$1;
(statearr_32090_32152[(2)] = null);

(statearr_32090_32152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (6))){
var inst_32045 = (state_32080[(7)]);
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32080__$1,(11),inst_32045);
} else {
if((state_val_32081 === (17))){
var inst_32066 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
if(cljs.core.truth_(inst_32066)){
var statearr_32091_32153 = state_32080__$1;
(statearr_32091_32153[(1)] = (19));

} else {
var statearr_32092_32154 = state_32080__$1;
(statearr_32092_32154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (3))){
var inst_32078 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32080__$1,inst_32078);
} else {
if((state_val_32081 === (12))){
var inst_32055 = (state_32080[(10)]);
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32080__$1,(14),inst_32055);
} else {
if((state_val_32081 === (2))){
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32080__$1,(4),results);
} else {
if((state_val_32081 === (19))){
var state_32080__$1 = state_32080;
var statearr_32093_32155 = state_32080__$1;
(statearr_32093_32155[(2)] = null);

(statearr_32093_32155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (11))){
var inst_32055 = (state_32080[(2)]);
var state_32080__$1 = (function (){var statearr_32094 = state_32080;
(statearr_32094[(10)] = inst_32055);

return statearr_32094;
})();
var statearr_32095_32156 = state_32080__$1;
(statearr_32095_32156[(2)] = null);

(statearr_32095_32156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (9))){
var state_32080__$1 = state_32080;
var statearr_32096_32157 = state_32080__$1;
(statearr_32096_32157[(2)] = null);

(statearr_32096_32157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (5))){
var state_32080__$1 = state_32080;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32097_32158 = state_32080__$1;
(statearr_32097_32158[(1)] = (8));

} else {
var statearr_32098_32159 = state_32080__$1;
(statearr_32098_32159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (14))){
var inst_32058 = (state_32080[(8)]);
var inst_32060 = (state_32080[(11)]);
var inst_32058__$1 = (state_32080[(2)]);
var inst_32059 = (inst_32058__$1 == null);
var inst_32060__$1 = cljs.core.not.call(null,inst_32059);
var state_32080__$1 = (function (){var statearr_32099 = state_32080;
(statearr_32099[(8)] = inst_32058__$1);

(statearr_32099[(11)] = inst_32060__$1);

return statearr_32099;
})();
if(inst_32060__$1){
var statearr_32100_32160 = state_32080__$1;
(statearr_32100_32160[(1)] = (15));

} else {
var statearr_32101_32161 = state_32080__$1;
(statearr_32101_32161[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (16))){
var inst_32060 = (state_32080[(11)]);
var state_32080__$1 = state_32080;
var statearr_32102_32162 = state_32080__$1;
(statearr_32102_32162[(2)] = inst_32060);

(statearr_32102_32162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (10))){
var inst_32052 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
var statearr_32103_32163 = state_32080__$1;
(statearr_32103_32163[(2)] = inst_32052);

(statearr_32103_32163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (18))){
var inst_32063 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
var statearr_32104_32164 = state_32080__$1;
(statearr_32104_32164[(2)] = inst_32063);

(statearr_32104_32164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (8))){
var inst_32049 = cljs.core.async.close_BANG_.call(null,to);
var state_32080__$1 = state_32080;
var statearr_32105_32165 = state_32080__$1;
(statearr_32105_32165[(2)] = inst_32049);

(statearr_32105_32165[(1)] = (10));


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
});})(c__31788__auto__,jobs,results,process,async))
;
return ((function (switch__31700__auto__,c__31788__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0 = (function (){
var statearr_32106 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__);

(statearr_32106[(1)] = (1));

return statearr_32106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1 = (function (state_32080){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_32080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e32107){if((e32107 instanceof Object)){
var ex__31704__auto__ = e32107;
var statearr_32108_32166 = state_32080;
(statearr_32108_32166[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32167 = state_32080;
state_32080 = G__32167;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__ = function(state_32080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1.call(this,state_32080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__,jobs,results,process,async))
})();
var state__31790__auto__ = (function (){var statearr_32109 = f__31789__auto__.call(null);
(statearr_32109[(6)] = c__31788__auto__);

return statearr_32109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__,jobs,results,process,async))
);

return c__31788__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32169 = arguments.length;
switch (G__32169) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32172 = arguments.length;
switch (G__32172) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32175 = arguments.length;
switch (G__32175) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31788__auto___32224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___32224,tc,fc){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___32224,tc,fc){
return (function (state_32201){
var state_val_32202 = (state_32201[(1)]);
if((state_val_32202 === (7))){
var inst_32197 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
var statearr_32203_32225 = state_32201__$1;
(statearr_32203_32225[(2)] = inst_32197);

(statearr_32203_32225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (1))){
var state_32201__$1 = state_32201;
var statearr_32204_32226 = state_32201__$1;
(statearr_32204_32226[(2)] = null);

(statearr_32204_32226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (4))){
var inst_32178 = (state_32201[(7)]);
var inst_32178__$1 = (state_32201[(2)]);
var inst_32179 = (inst_32178__$1 == null);
var state_32201__$1 = (function (){var statearr_32205 = state_32201;
(statearr_32205[(7)] = inst_32178__$1);

return statearr_32205;
})();
if(cljs.core.truth_(inst_32179)){
var statearr_32206_32227 = state_32201__$1;
(statearr_32206_32227[(1)] = (5));

} else {
var statearr_32207_32228 = state_32201__$1;
(statearr_32207_32228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (13))){
var state_32201__$1 = state_32201;
var statearr_32208_32229 = state_32201__$1;
(statearr_32208_32229[(2)] = null);

(statearr_32208_32229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (6))){
var inst_32178 = (state_32201[(7)]);
var inst_32184 = p.call(null,inst_32178);
var state_32201__$1 = state_32201;
if(cljs.core.truth_(inst_32184)){
var statearr_32209_32230 = state_32201__$1;
(statearr_32209_32230[(1)] = (9));

} else {
var statearr_32210_32231 = state_32201__$1;
(statearr_32210_32231[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (3))){
var inst_32199 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32201__$1,inst_32199);
} else {
if((state_val_32202 === (12))){
var state_32201__$1 = state_32201;
var statearr_32211_32232 = state_32201__$1;
(statearr_32211_32232[(2)] = null);

(statearr_32211_32232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (2))){
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32201__$1,(4),ch);
} else {
if((state_val_32202 === (11))){
var inst_32178 = (state_32201[(7)]);
var inst_32188 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32201__$1,(8),inst_32188,inst_32178);
} else {
if((state_val_32202 === (9))){
var state_32201__$1 = state_32201;
var statearr_32212_32233 = state_32201__$1;
(statearr_32212_32233[(2)] = tc);

(statearr_32212_32233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (5))){
var inst_32181 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32182 = cljs.core.async.close_BANG_.call(null,fc);
var state_32201__$1 = (function (){var statearr_32213 = state_32201;
(statearr_32213[(8)] = inst_32181);

return statearr_32213;
})();
var statearr_32214_32234 = state_32201__$1;
(statearr_32214_32234[(2)] = inst_32182);

(statearr_32214_32234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (14))){
var inst_32195 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
var statearr_32215_32235 = state_32201__$1;
(statearr_32215_32235[(2)] = inst_32195);

(statearr_32215_32235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (10))){
var state_32201__$1 = state_32201;
var statearr_32216_32236 = state_32201__$1;
(statearr_32216_32236[(2)] = fc);

(statearr_32216_32236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (8))){
var inst_32190 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
if(cljs.core.truth_(inst_32190)){
var statearr_32217_32237 = state_32201__$1;
(statearr_32217_32237[(1)] = (12));

} else {
var statearr_32218_32238 = state_32201__$1;
(statearr_32218_32238[(1)] = (13));

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
});})(c__31788__auto___32224,tc,fc))
;
return ((function (switch__31700__auto__,c__31788__auto___32224,tc,fc){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_32219 = [null,null,null,null,null,null,null,null,null];
(statearr_32219[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_32219[(1)] = (1));

return statearr_32219;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_32201){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_32201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e32220){if((e32220 instanceof Object)){
var ex__31704__auto__ = e32220;
var statearr_32221_32239 = state_32201;
(statearr_32221_32239[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32240 = state_32201;
state_32201 = G__32240;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_32201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_32201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___32224,tc,fc))
})();
var state__31790__auto__ = (function (){var statearr_32222 = f__31789__auto__.call(null);
(statearr_32222[(6)] = c__31788__auto___32224);

return statearr_32222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___32224,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__){
return (function (state_32261){
var state_val_32262 = (state_32261[(1)]);
if((state_val_32262 === (7))){
var inst_32257 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32263_32281 = state_32261__$1;
(statearr_32263_32281[(2)] = inst_32257);

(statearr_32263_32281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (1))){
var inst_32241 = init;
var state_32261__$1 = (function (){var statearr_32264 = state_32261;
(statearr_32264[(7)] = inst_32241);

return statearr_32264;
})();
var statearr_32265_32282 = state_32261__$1;
(statearr_32265_32282[(2)] = null);

(statearr_32265_32282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (4))){
var inst_32244 = (state_32261[(8)]);
var inst_32244__$1 = (state_32261[(2)]);
var inst_32245 = (inst_32244__$1 == null);
var state_32261__$1 = (function (){var statearr_32266 = state_32261;
(statearr_32266[(8)] = inst_32244__$1);

return statearr_32266;
})();
if(cljs.core.truth_(inst_32245)){
var statearr_32267_32283 = state_32261__$1;
(statearr_32267_32283[(1)] = (5));

} else {
var statearr_32268_32284 = state_32261__$1;
(statearr_32268_32284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (6))){
var inst_32248 = (state_32261[(9)]);
var inst_32244 = (state_32261[(8)]);
var inst_32241 = (state_32261[(7)]);
var inst_32248__$1 = f.call(null,inst_32241,inst_32244);
var inst_32249 = cljs.core.reduced_QMARK_.call(null,inst_32248__$1);
var state_32261__$1 = (function (){var statearr_32269 = state_32261;
(statearr_32269[(9)] = inst_32248__$1);

return statearr_32269;
})();
if(inst_32249){
var statearr_32270_32285 = state_32261__$1;
(statearr_32270_32285[(1)] = (8));

} else {
var statearr_32271_32286 = state_32261__$1;
(statearr_32271_32286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (3))){
var inst_32259 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32261__$1,inst_32259);
} else {
if((state_val_32262 === (2))){
var state_32261__$1 = state_32261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32261__$1,(4),ch);
} else {
if((state_val_32262 === (9))){
var inst_32248 = (state_32261[(9)]);
var inst_32241 = inst_32248;
var state_32261__$1 = (function (){var statearr_32272 = state_32261;
(statearr_32272[(7)] = inst_32241);

return statearr_32272;
})();
var statearr_32273_32287 = state_32261__$1;
(statearr_32273_32287[(2)] = null);

(statearr_32273_32287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (5))){
var inst_32241 = (state_32261[(7)]);
var state_32261__$1 = state_32261;
var statearr_32274_32288 = state_32261__$1;
(statearr_32274_32288[(2)] = inst_32241);

(statearr_32274_32288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (10))){
var inst_32255 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32275_32289 = state_32261__$1;
(statearr_32275_32289[(2)] = inst_32255);

(statearr_32275_32289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (8))){
var inst_32248 = (state_32261[(9)]);
var inst_32251 = cljs.core.deref.call(null,inst_32248);
var state_32261__$1 = state_32261;
var statearr_32276_32290 = state_32261__$1;
(statearr_32276_32290[(2)] = inst_32251);

(statearr_32276_32290[(1)] = (10));


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
});})(c__31788__auto__))
;
return ((function (switch__31700__auto__,c__31788__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31701__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31701__auto____0 = (function (){
var statearr_32277 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32277[(0)] = cljs$core$async$reduce_$_state_machine__31701__auto__);

(statearr_32277[(1)] = (1));

return statearr_32277;
});
var cljs$core$async$reduce_$_state_machine__31701__auto____1 = (function (state_32261){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_32261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e32278){if((e32278 instanceof Object)){
var ex__31704__auto__ = e32278;
var statearr_32279_32291 = state_32261;
(statearr_32279_32291[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32292 = state_32261;
state_32261 = G__32292;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31701__auto__ = function(state_32261){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31701__auto____1.call(this,state_32261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31701__auto____0;
cljs$core$async$reduce_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31701__auto____1;
return cljs$core$async$reduce_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__))
})();
var state__31790__auto__ = (function (){var statearr_32280 = f__31789__auto__.call(null);
(statearr_32280[(6)] = c__31788__auto__);

return statearr_32280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__))
);

return c__31788__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__,f__$1){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__,f__$1){
return (function (state_32298){
var state_val_32299 = (state_32298[(1)]);
if((state_val_32299 === (1))){
var inst_32293 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32298__$1 = state_32298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32298__$1,(2),inst_32293);
} else {
if((state_val_32299 === (2))){
var inst_32295 = (state_32298[(2)]);
var inst_32296 = f__$1.call(null,inst_32295);
var state_32298__$1 = state_32298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32298__$1,inst_32296);
} else {
return null;
}
}
});})(c__31788__auto__,f__$1))
;
return ((function (switch__31700__auto__,c__31788__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31701__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31701__auto____0 = (function (){
var statearr_32300 = [null,null,null,null,null,null,null];
(statearr_32300[(0)] = cljs$core$async$transduce_$_state_machine__31701__auto__);

(statearr_32300[(1)] = (1));

return statearr_32300;
});
var cljs$core$async$transduce_$_state_machine__31701__auto____1 = (function (state_32298){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_32298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e32301){if((e32301 instanceof Object)){
var ex__31704__auto__ = e32301;
var statearr_32302_32304 = state_32298;
(statearr_32302_32304[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32305 = state_32298;
state_32298 = G__32305;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31701__auto__ = function(state_32298){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31701__auto____1.call(this,state_32298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31701__auto____0;
cljs$core$async$transduce_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31701__auto____1;
return cljs$core$async$transduce_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__,f__$1))
})();
var state__31790__auto__ = (function (){var statearr_32303 = f__31789__auto__.call(null);
(statearr_32303[(6)] = c__31788__auto__);

return statearr_32303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__,f__$1))
);

return c__31788__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32307 = arguments.length;
switch (G__32307) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__){
return (function (state_32332){
var state_val_32333 = (state_32332[(1)]);
if((state_val_32333 === (7))){
var inst_32314 = (state_32332[(2)]);
var state_32332__$1 = state_32332;
var statearr_32334_32355 = state_32332__$1;
(statearr_32334_32355[(2)] = inst_32314);

(statearr_32334_32355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (1))){
var inst_32308 = cljs.core.seq.call(null,coll);
var inst_32309 = inst_32308;
var state_32332__$1 = (function (){var statearr_32335 = state_32332;
(statearr_32335[(7)] = inst_32309);

return statearr_32335;
})();
var statearr_32336_32356 = state_32332__$1;
(statearr_32336_32356[(2)] = null);

(statearr_32336_32356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (4))){
var inst_32309 = (state_32332[(7)]);
var inst_32312 = cljs.core.first.call(null,inst_32309);
var state_32332__$1 = state_32332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32332__$1,(7),ch,inst_32312);
} else {
if((state_val_32333 === (13))){
var inst_32326 = (state_32332[(2)]);
var state_32332__$1 = state_32332;
var statearr_32337_32357 = state_32332__$1;
(statearr_32337_32357[(2)] = inst_32326);

(statearr_32337_32357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (6))){
var inst_32317 = (state_32332[(2)]);
var state_32332__$1 = state_32332;
if(cljs.core.truth_(inst_32317)){
var statearr_32338_32358 = state_32332__$1;
(statearr_32338_32358[(1)] = (8));

} else {
var statearr_32339_32359 = state_32332__$1;
(statearr_32339_32359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (3))){
var inst_32330 = (state_32332[(2)]);
var state_32332__$1 = state_32332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32332__$1,inst_32330);
} else {
if((state_val_32333 === (12))){
var state_32332__$1 = state_32332;
var statearr_32340_32360 = state_32332__$1;
(statearr_32340_32360[(2)] = null);

(statearr_32340_32360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (2))){
var inst_32309 = (state_32332[(7)]);
var state_32332__$1 = state_32332;
if(cljs.core.truth_(inst_32309)){
var statearr_32341_32361 = state_32332__$1;
(statearr_32341_32361[(1)] = (4));

} else {
var statearr_32342_32362 = state_32332__$1;
(statearr_32342_32362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (11))){
var inst_32323 = cljs.core.async.close_BANG_.call(null,ch);
var state_32332__$1 = state_32332;
var statearr_32343_32363 = state_32332__$1;
(statearr_32343_32363[(2)] = inst_32323);

(statearr_32343_32363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (9))){
var state_32332__$1 = state_32332;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32344_32364 = state_32332__$1;
(statearr_32344_32364[(1)] = (11));

} else {
var statearr_32345_32365 = state_32332__$1;
(statearr_32345_32365[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (5))){
var inst_32309 = (state_32332[(7)]);
var state_32332__$1 = state_32332;
var statearr_32346_32366 = state_32332__$1;
(statearr_32346_32366[(2)] = inst_32309);

(statearr_32346_32366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (10))){
var inst_32328 = (state_32332[(2)]);
var state_32332__$1 = state_32332;
var statearr_32347_32367 = state_32332__$1;
(statearr_32347_32367[(2)] = inst_32328);

(statearr_32347_32367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32333 === (8))){
var inst_32309 = (state_32332[(7)]);
var inst_32319 = cljs.core.next.call(null,inst_32309);
var inst_32309__$1 = inst_32319;
var state_32332__$1 = (function (){var statearr_32348 = state_32332;
(statearr_32348[(7)] = inst_32309__$1);

return statearr_32348;
})();
var statearr_32349_32368 = state_32332__$1;
(statearr_32349_32368[(2)] = null);

(statearr_32349_32368[(1)] = (2));


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
});})(c__31788__auto__))
;
return ((function (switch__31700__auto__,c__31788__auto__){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_32350 = [null,null,null,null,null,null,null,null];
(statearr_32350[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_32350[(1)] = (1));

return statearr_32350;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_32332){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_32332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e32351){if((e32351 instanceof Object)){
var ex__31704__auto__ = e32351;
var statearr_32352_32369 = state_32332;
(statearr_32352_32369[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32370 = state_32332;
state_32332 = G__32370;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_32332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_32332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__))
})();
var state__31790__auto__ = (function (){var statearr_32353 = f__31789__auto__.call(null);
(statearr_32353[(6)] = c__31788__auto__);

return statearr_32353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__))
);

return c__31788__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28970__auto__ = (((_ == null))?null:_);
var m__28971__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,_);
} else {
var m__28971__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28970__auto__ = (((m == null))?null:m);
var m__28971__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28971__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28970__auto__ = (((m == null))?null:m);
var m__28971__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,m,ch);
} else {
var m__28971__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28970__auto__ = (((m == null))?null:m);
var m__28971__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,m);
} else {
var m__28971__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32371 = (function (ch,cs,meta32372){
this.ch = ch;
this.cs = cs;
this.meta32372 = meta32372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32373,meta32372__$1){
var self__ = this;
var _32373__$1 = this;
return (new cljs.core.async.t_cljs$core$async32371(self__.ch,self__.cs,meta32372__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32373){
var self__ = this;
var _32373__$1 = this;
return self__.meta32372;
});})(cs))
;

cljs.core.async.t_cljs$core$async32371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32371.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32371.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32371.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32371.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32371.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32372","meta32372",-1598902935,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32371";

cljs.core.async.t_cljs$core$async32371.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async32371");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32371 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32371(ch__$1,cs__$1,meta32372){
return (new cljs.core.async.t_cljs$core$async32371(ch__$1,cs__$1,meta32372));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32371(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31788__auto___32593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___32593,cs,m,dchan,dctr,done){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___32593,cs,m,dchan,dctr,done){
return (function (state_32508){
var state_val_32509 = (state_32508[(1)]);
if((state_val_32509 === (7))){
var inst_32504 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32510_32594 = state_32508__$1;
(statearr_32510_32594[(2)] = inst_32504);

(statearr_32510_32594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (20))){
var inst_32407 = (state_32508[(7)]);
var inst_32419 = cljs.core.first.call(null,inst_32407);
var inst_32420 = cljs.core.nth.call(null,inst_32419,(0),null);
var inst_32421 = cljs.core.nth.call(null,inst_32419,(1),null);
var state_32508__$1 = (function (){var statearr_32511 = state_32508;
(statearr_32511[(8)] = inst_32420);

return statearr_32511;
})();
if(cljs.core.truth_(inst_32421)){
var statearr_32512_32595 = state_32508__$1;
(statearr_32512_32595[(1)] = (22));

} else {
var statearr_32513_32596 = state_32508__$1;
(statearr_32513_32596[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (27))){
var inst_32449 = (state_32508[(9)]);
var inst_32451 = (state_32508[(10)]);
var inst_32376 = (state_32508[(11)]);
var inst_32456 = (state_32508[(12)]);
var inst_32456__$1 = cljs.core._nth.call(null,inst_32449,inst_32451);
var inst_32457 = cljs.core.async.put_BANG_.call(null,inst_32456__$1,inst_32376,done);
var state_32508__$1 = (function (){var statearr_32514 = state_32508;
(statearr_32514[(12)] = inst_32456__$1);

return statearr_32514;
})();
if(cljs.core.truth_(inst_32457)){
var statearr_32515_32597 = state_32508__$1;
(statearr_32515_32597[(1)] = (30));

} else {
var statearr_32516_32598 = state_32508__$1;
(statearr_32516_32598[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (1))){
var state_32508__$1 = state_32508;
var statearr_32517_32599 = state_32508__$1;
(statearr_32517_32599[(2)] = null);

(statearr_32517_32599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (24))){
var inst_32407 = (state_32508[(7)]);
var inst_32426 = (state_32508[(2)]);
var inst_32427 = cljs.core.next.call(null,inst_32407);
var inst_32385 = inst_32427;
var inst_32386 = null;
var inst_32387 = (0);
var inst_32388 = (0);
var state_32508__$1 = (function (){var statearr_32518 = state_32508;
(statearr_32518[(13)] = inst_32388);

(statearr_32518[(14)] = inst_32426);

(statearr_32518[(15)] = inst_32386);

(statearr_32518[(16)] = inst_32387);

(statearr_32518[(17)] = inst_32385);

return statearr_32518;
})();
var statearr_32519_32600 = state_32508__$1;
(statearr_32519_32600[(2)] = null);

(statearr_32519_32600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (39))){
var state_32508__$1 = state_32508;
var statearr_32523_32601 = state_32508__$1;
(statearr_32523_32601[(2)] = null);

(statearr_32523_32601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (4))){
var inst_32376 = (state_32508[(11)]);
var inst_32376__$1 = (state_32508[(2)]);
var inst_32377 = (inst_32376__$1 == null);
var state_32508__$1 = (function (){var statearr_32524 = state_32508;
(statearr_32524[(11)] = inst_32376__$1);

return statearr_32524;
})();
if(cljs.core.truth_(inst_32377)){
var statearr_32525_32602 = state_32508__$1;
(statearr_32525_32602[(1)] = (5));

} else {
var statearr_32526_32603 = state_32508__$1;
(statearr_32526_32603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (15))){
var inst_32388 = (state_32508[(13)]);
var inst_32386 = (state_32508[(15)]);
var inst_32387 = (state_32508[(16)]);
var inst_32385 = (state_32508[(17)]);
var inst_32403 = (state_32508[(2)]);
var inst_32404 = (inst_32388 + (1));
var tmp32520 = inst_32386;
var tmp32521 = inst_32387;
var tmp32522 = inst_32385;
var inst_32385__$1 = tmp32522;
var inst_32386__$1 = tmp32520;
var inst_32387__$1 = tmp32521;
var inst_32388__$1 = inst_32404;
var state_32508__$1 = (function (){var statearr_32527 = state_32508;
(statearr_32527[(13)] = inst_32388__$1);

(statearr_32527[(15)] = inst_32386__$1);

(statearr_32527[(16)] = inst_32387__$1);

(statearr_32527[(17)] = inst_32385__$1);

(statearr_32527[(18)] = inst_32403);

return statearr_32527;
})();
var statearr_32528_32604 = state_32508__$1;
(statearr_32528_32604[(2)] = null);

(statearr_32528_32604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (21))){
var inst_32430 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32532_32605 = state_32508__$1;
(statearr_32532_32605[(2)] = inst_32430);

(statearr_32532_32605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (31))){
var inst_32456 = (state_32508[(12)]);
var inst_32460 = done.call(null,null);
var inst_32461 = cljs.core.async.untap_STAR_.call(null,m,inst_32456);
var state_32508__$1 = (function (){var statearr_32533 = state_32508;
(statearr_32533[(19)] = inst_32460);

return statearr_32533;
})();
var statearr_32534_32606 = state_32508__$1;
(statearr_32534_32606[(2)] = inst_32461);

(statearr_32534_32606[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (32))){
var inst_32448 = (state_32508[(20)]);
var inst_32449 = (state_32508[(9)]);
var inst_32451 = (state_32508[(10)]);
var inst_32450 = (state_32508[(21)]);
var inst_32463 = (state_32508[(2)]);
var inst_32464 = (inst_32451 + (1));
var tmp32529 = inst_32448;
var tmp32530 = inst_32449;
var tmp32531 = inst_32450;
var inst_32448__$1 = tmp32529;
var inst_32449__$1 = tmp32530;
var inst_32450__$1 = tmp32531;
var inst_32451__$1 = inst_32464;
var state_32508__$1 = (function (){var statearr_32535 = state_32508;
(statearr_32535[(20)] = inst_32448__$1);

(statearr_32535[(9)] = inst_32449__$1);

(statearr_32535[(10)] = inst_32451__$1);

(statearr_32535[(22)] = inst_32463);

(statearr_32535[(21)] = inst_32450__$1);

return statearr_32535;
})();
var statearr_32536_32607 = state_32508__$1;
(statearr_32536_32607[(2)] = null);

(statearr_32536_32607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (40))){
var inst_32476 = (state_32508[(23)]);
var inst_32480 = done.call(null,null);
var inst_32481 = cljs.core.async.untap_STAR_.call(null,m,inst_32476);
var state_32508__$1 = (function (){var statearr_32537 = state_32508;
(statearr_32537[(24)] = inst_32480);

return statearr_32537;
})();
var statearr_32538_32608 = state_32508__$1;
(statearr_32538_32608[(2)] = inst_32481);

(statearr_32538_32608[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (33))){
var inst_32467 = (state_32508[(25)]);
var inst_32469 = cljs.core.chunked_seq_QMARK_.call(null,inst_32467);
var state_32508__$1 = state_32508;
if(inst_32469){
var statearr_32539_32609 = state_32508__$1;
(statearr_32539_32609[(1)] = (36));

} else {
var statearr_32540_32610 = state_32508__$1;
(statearr_32540_32610[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (13))){
var inst_32397 = (state_32508[(26)]);
var inst_32400 = cljs.core.async.close_BANG_.call(null,inst_32397);
var state_32508__$1 = state_32508;
var statearr_32541_32611 = state_32508__$1;
(statearr_32541_32611[(2)] = inst_32400);

(statearr_32541_32611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (22))){
var inst_32420 = (state_32508[(8)]);
var inst_32423 = cljs.core.async.close_BANG_.call(null,inst_32420);
var state_32508__$1 = state_32508;
var statearr_32542_32612 = state_32508__$1;
(statearr_32542_32612[(2)] = inst_32423);

(statearr_32542_32612[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (36))){
var inst_32467 = (state_32508[(25)]);
var inst_32471 = cljs.core.chunk_first.call(null,inst_32467);
var inst_32472 = cljs.core.chunk_rest.call(null,inst_32467);
var inst_32473 = cljs.core.count.call(null,inst_32471);
var inst_32448 = inst_32472;
var inst_32449 = inst_32471;
var inst_32450 = inst_32473;
var inst_32451 = (0);
var state_32508__$1 = (function (){var statearr_32543 = state_32508;
(statearr_32543[(20)] = inst_32448);

(statearr_32543[(9)] = inst_32449);

(statearr_32543[(10)] = inst_32451);

(statearr_32543[(21)] = inst_32450);

return statearr_32543;
})();
var statearr_32544_32613 = state_32508__$1;
(statearr_32544_32613[(2)] = null);

(statearr_32544_32613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (41))){
var inst_32467 = (state_32508[(25)]);
var inst_32483 = (state_32508[(2)]);
var inst_32484 = cljs.core.next.call(null,inst_32467);
var inst_32448 = inst_32484;
var inst_32449 = null;
var inst_32450 = (0);
var inst_32451 = (0);
var state_32508__$1 = (function (){var statearr_32545 = state_32508;
(statearr_32545[(27)] = inst_32483);

(statearr_32545[(20)] = inst_32448);

(statearr_32545[(9)] = inst_32449);

(statearr_32545[(10)] = inst_32451);

(statearr_32545[(21)] = inst_32450);

return statearr_32545;
})();
var statearr_32546_32614 = state_32508__$1;
(statearr_32546_32614[(2)] = null);

(statearr_32546_32614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (43))){
var state_32508__$1 = state_32508;
var statearr_32547_32615 = state_32508__$1;
(statearr_32547_32615[(2)] = null);

(statearr_32547_32615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (29))){
var inst_32492 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32548_32616 = state_32508__$1;
(statearr_32548_32616[(2)] = inst_32492);

(statearr_32548_32616[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (44))){
var inst_32501 = (state_32508[(2)]);
var state_32508__$1 = (function (){var statearr_32549 = state_32508;
(statearr_32549[(28)] = inst_32501);

return statearr_32549;
})();
var statearr_32550_32617 = state_32508__$1;
(statearr_32550_32617[(2)] = null);

(statearr_32550_32617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (6))){
var inst_32440 = (state_32508[(29)]);
var inst_32439 = cljs.core.deref.call(null,cs);
var inst_32440__$1 = cljs.core.keys.call(null,inst_32439);
var inst_32441 = cljs.core.count.call(null,inst_32440__$1);
var inst_32442 = cljs.core.reset_BANG_.call(null,dctr,inst_32441);
var inst_32447 = cljs.core.seq.call(null,inst_32440__$1);
var inst_32448 = inst_32447;
var inst_32449 = null;
var inst_32450 = (0);
var inst_32451 = (0);
var state_32508__$1 = (function (){var statearr_32551 = state_32508;
(statearr_32551[(30)] = inst_32442);

(statearr_32551[(20)] = inst_32448);

(statearr_32551[(9)] = inst_32449);

(statearr_32551[(29)] = inst_32440__$1);

(statearr_32551[(10)] = inst_32451);

(statearr_32551[(21)] = inst_32450);

return statearr_32551;
})();
var statearr_32552_32618 = state_32508__$1;
(statearr_32552_32618[(2)] = null);

(statearr_32552_32618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (28))){
var inst_32448 = (state_32508[(20)]);
var inst_32467 = (state_32508[(25)]);
var inst_32467__$1 = cljs.core.seq.call(null,inst_32448);
var state_32508__$1 = (function (){var statearr_32553 = state_32508;
(statearr_32553[(25)] = inst_32467__$1);

return statearr_32553;
})();
if(inst_32467__$1){
var statearr_32554_32619 = state_32508__$1;
(statearr_32554_32619[(1)] = (33));

} else {
var statearr_32555_32620 = state_32508__$1;
(statearr_32555_32620[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (25))){
var inst_32451 = (state_32508[(10)]);
var inst_32450 = (state_32508[(21)]);
var inst_32453 = (inst_32451 < inst_32450);
var inst_32454 = inst_32453;
var state_32508__$1 = state_32508;
if(cljs.core.truth_(inst_32454)){
var statearr_32556_32621 = state_32508__$1;
(statearr_32556_32621[(1)] = (27));

} else {
var statearr_32557_32622 = state_32508__$1;
(statearr_32557_32622[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (34))){
var state_32508__$1 = state_32508;
var statearr_32558_32623 = state_32508__$1;
(statearr_32558_32623[(2)] = null);

(statearr_32558_32623[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (17))){
var state_32508__$1 = state_32508;
var statearr_32559_32624 = state_32508__$1;
(statearr_32559_32624[(2)] = null);

(statearr_32559_32624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (3))){
var inst_32506 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32508__$1,inst_32506);
} else {
if((state_val_32509 === (12))){
var inst_32435 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32560_32625 = state_32508__$1;
(statearr_32560_32625[(2)] = inst_32435);

(statearr_32560_32625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (2))){
var state_32508__$1 = state_32508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32508__$1,(4),ch);
} else {
if((state_val_32509 === (23))){
var state_32508__$1 = state_32508;
var statearr_32561_32626 = state_32508__$1;
(statearr_32561_32626[(2)] = null);

(statearr_32561_32626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (35))){
var inst_32490 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32562_32627 = state_32508__$1;
(statearr_32562_32627[(2)] = inst_32490);

(statearr_32562_32627[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (19))){
var inst_32407 = (state_32508[(7)]);
var inst_32411 = cljs.core.chunk_first.call(null,inst_32407);
var inst_32412 = cljs.core.chunk_rest.call(null,inst_32407);
var inst_32413 = cljs.core.count.call(null,inst_32411);
var inst_32385 = inst_32412;
var inst_32386 = inst_32411;
var inst_32387 = inst_32413;
var inst_32388 = (0);
var state_32508__$1 = (function (){var statearr_32563 = state_32508;
(statearr_32563[(13)] = inst_32388);

(statearr_32563[(15)] = inst_32386);

(statearr_32563[(16)] = inst_32387);

(statearr_32563[(17)] = inst_32385);

return statearr_32563;
})();
var statearr_32564_32628 = state_32508__$1;
(statearr_32564_32628[(2)] = null);

(statearr_32564_32628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (11))){
var inst_32385 = (state_32508[(17)]);
var inst_32407 = (state_32508[(7)]);
var inst_32407__$1 = cljs.core.seq.call(null,inst_32385);
var state_32508__$1 = (function (){var statearr_32565 = state_32508;
(statearr_32565[(7)] = inst_32407__$1);

return statearr_32565;
})();
if(inst_32407__$1){
var statearr_32566_32629 = state_32508__$1;
(statearr_32566_32629[(1)] = (16));

} else {
var statearr_32567_32630 = state_32508__$1;
(statearr_32567_32630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (9))){
var inst_32437 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32568_32631 = state_32508__$1;
(statearr_32568_32631[(2)] = inst_32437);

(statearr_32568_32631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (5))){
var inst_32383 = cljs.core.deref.call(null,cs);
var inst_32384 = cljs.core.seq.call(null,inst_32383);
var inst_32385 = inst_32384;
var inst_32386 = null;
var inst_32387 = (0);
var inst_32388 = (0);
var state_32508__$1 = (function (){var statearr_32569 = state_32508;
(statearr_32569[(13)] = inst_32388);

(statearr_32569[(15)] = inst_32386);

(statearr_32569[(16)] = inst_32387);

(statearr_32569[(17)] = inst_32385);

return statearr_32569;
})();
var statearr_32570_32632 = state_32508__$1;
(statearr_32570_32632[(2)] = null);

(statearr_32570_32632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (14))){
var state_32508__$1 = state_32508;
var statearr_32571_32633 = state_32508__$1;
(statearr_32571_32633[(2)] = null);

(statearr_32571_32633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (45))){
var inst_32498 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32572_32634 = state_32508__$1;
(statearr_32572_32634[(2)] = inst_32498);

(statearr_32572_32634[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (26))){
var inst_32440 = (state_32508[(29)]);
var inst_32494 = (state_32508[(2)]);
var inst_32495 = cljs.core.seq.call(null,inst_32440);
var state_32508__$1 = (function (){var statearr_32573 = state_32508;
(statearr_32573[(31)] = inst_32494);

return statearr_32573;
})();
if(inst_32495){
var statearr_32574_32635 = state_32508__$1;
(statearr_32574_32635[(1)] = (42));

} else {
var statearr_32575_32636 = state_32508__$1;
(statearr_32575_32636[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (16))){
var inst_32407 = (state_32508[(7)]);
var inst_32409 = cljs.core.chunked_seq_QMARK_.call(null,inst_32407);
var state_32508__$1 = state_32508;
if(inst_32409){
var statearr_32576_32637 = state_32508__$1;
(statearr_32576_32637[(1)] = (19));

} else {
var statearr_32577_32638 = state_32508__$1;
(statearr_32577_32638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (38))){
var inst_32487 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32578_32639 = state_32508__$1;
(statearr_32578_32639[(2)] = inst_32487);

(statearr_32578_32639[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (30))){
var state_32508__$1 = state_32508;
var statearr_32579_32640 = state_32508__$1;
(statearr_32579_32640[(2)] = null);

(statearr_32579_32640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (10))){
var inst_32388 = (state_32508[(13)]);
var inst_32386 = (state_32508[(15)]);
var inst_32396 = cljs.core._nth.call(null,inst_32386,inst_32388);
var inst_32397 = cljs.core.nth.call(null,inst_32396,(0),null);
var inst_32398 = cljs.core.nth.call(null,inst_32396,(1),null);
var state_32508__$1 = (function (){var statearr_32580 = state_32508;
(statearr_32580[(26)] = inst_32397);

return statearr_32580;
})();
if(cljs.core.truth_(inst_32398)){
var statearr_32581_32641 = state_32508__$1;
(statearr_32581_32641[(1)] = (13));

} else {
var statearr_32582_32642 = state_32508__$1;
(statearr_32582_32642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (18))){
var inst_32433 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32583_32643 = state_32508__$1;
(statearr_32583_32643[(2)] = inst_32433);

(statearr_32583_32643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (42))){
var state_32508__$1 = state_32508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32508__$1,(45),dchan);
} else {
if((state_val_32509 === (37))){
var inst_32467 = (state_32508[(25)]);
var inst_32376 = (state_32508[(11)]);
var inst_32476 = (state_32508[(23)]);
var inst_32476__$1 = cljs.core.first.call(null,inst_32467);
var inst_32477 = cljs.core.async.put_BANG_.call(null,inst_32476__$1,inst_32376,done);
var state_32508__$1 = (function (){var statearr_32584 = state_32508;
(statearr_32584[(23)] = inst_32476__$1);

return statearr_32584;
})();
if(cljs.core.truth_(inst_32477)){
var statearr_32585_32644 = state_32508__$1;
(statearr_32585_32644[(1)] = (39));

} else {
var statearr_32586_32645 = state_32508__$1;
(statearr_32586_32645[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (8))){
var inst_32388 = (state_32508[(13)]);
var inst_32387 = (state_32508[(16)]);
var inst_32390 = (inst_32388 < inst_32387);
var inst_32391 = inst_32390;
var state_32508__$1 = state_32508;
if(cljs.core.truth_(inst_32391)){
var statearr_32587_32646 = state_32508__$1;
(statearr_32587_32646[(1)] = (10));

} else {
var statearr_32588_32647 = state_32508__$1;
(statearr_32588_32647[(1)] = (11));

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
});})(c__31788__auto___32593,cs,m,dchan,dctr,done))
;
return ((function (switch__31700__auto__,c__31788__auto___32593,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31701__auto__ = null;
var cljs$core$async$mult_$_state_machine__31701__auto____0 = (function (){
var statearr_32589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32589[(0)] = cljs$core$async$mult_$_state_machine__31701__auto__);

(statearr_32589[(1)] = (1));

return statearr_32589;
});
var cljs$core$async$mult_$_state_machine__31701__auto____1 = (function (state_32508){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_32508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e32590){if((e32590 instanceof Object)){
var ex__31704__auto__ = e32590;
var statearr_32591_32648 = state_32508;
(statearr_32591_32648[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32649 = state_32508;
state_32508 = G__32649;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31701__auto__ = function(state_32508){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31701__auto____1.call(this,state_32508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31701__auto____0;
cljs$core$async$mult_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31701__auto____1;
return cljs$core$async$mult_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___32593,cs,m,dchan,dctr,done))
})();
var state__31790__auto__ = (function (){var statearr_32592 = f__31789__auto__.call(null);
(statearr_32592[(6)] = c__31788__auto___32593);

return statearr_32592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___32593,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32651 = arguments.length;
switch (G__32651) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28970__auto__ = (((m == null))?null:m);
var m__28971__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,m,ch);
} else {
var m__28971__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28970__auto__ = (((m == null))?null:m);
var m__28971__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,m,ch);
} else {
var m__28971__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28970__auto__ = (((m == null))?null:m);
var m__28971__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,m);
} else {
var m__28971__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28970__auto__ = (((m == null))?null:m);
var m__28971__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,m,state_map);
} else {
var m__28971__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28970__auto__ = (((m == null))?null:m);
var m__28971__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,m,mode);
} else {
var m__28971__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___32663 = arguments.length;
var i__29457__auto___32664 = (0);
while(true){
if((i__29457__auto___32664 < len__29456__auto___32663)){
args__29463__auto__.push((arguments[i__29457__auto___32664]));

var G__32665 = (i__29457__auto___32664 + (1));
i__29457__auto___32664 = G__32665;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((3) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29464__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32657){
var map__32658 = p__32657;
var map__32658__$1 = ((((!((map__32658 == null)))?((((map__32658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32658):map__32658);
var opts = map__32658__$1;
var statearr_32660_32666 = state;
(statearr_32660_32666[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32658,map__32658__$1,opts){
return (function (val){
var statearr_32661_32667 = state;
(statearr_32661_32667[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32658,map__32658__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32662_32668 = state;
(statearr_32662_32668[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32653){
var G__32654 = cljs.core.first.call(null,seq32653);
var seq32653__$1 = cljs.core.next.call(null,seq32653);
var G__32655 = cljs.core.first.call(null,seq32653__$1);
var seq32653__$2 = cljs.core.next.call(null,seq32653__$1);
var G__32656 = cljs.core.first.call(null,seq32653__$2);
var seq32653__$3 = cljs.core.next.call(null,seq32653__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32654,G__32655,G__32656,seq32653__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32669 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32670){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32670 = meta32670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32671,meta32670__$1){
var self__ = this;
var _32671__$1 = this;
return (new cljs.core.async.t_cljs$core$async32669(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32670__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32671){
var self__ = this;
var _32671__$1 = this;
return self__.meta32670;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32669.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32670","meta32670",1657685403,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32669.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32669";

cljs.core.async.t_cljs$core$async32669.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async32669");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32669 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32669(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32670){
return (new cljs.core.async.t_cljs$core$async32669(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32670));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32669(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31788__auto___32833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___32833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___32833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32773){
var state_val_32774 = (state_32773[(1)]);
if((state_val_32774 === (7))){
var inst_32688 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32775_32834 = state_32773__$1;
(statearr_32775_32834[(2)] = inst_32688);

(statearr_32775_32834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (20))){
var inst_32700 = (state_32773[(7)]);
var state_32773__$1 = state_32773;
var statearr_32776_32835 = state_32773__$1;
(statearr_32776_32835[(2)] = inst_32700);

(statearr_32776_32835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (27))){
var state_32773__$1 = state_32773;
var statearr_32777_32836 = state_32773__$1;
(statearr_32777_32836[(2)] = null);

(statearr_32777_32836[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (1))){
var inst_32675 = (state_32773[(8)]);
var inst_32675__$1 = calc_state.call(null);
var inst_32677 = (inst_32675__$1 == null);
var inst_32678 = cljs.core.not.call(null,inst_32677);
var state_32773__$1 = (function (){var statearr_32778 = state_32773;
(statearr_32778[(8)] = inst_32675__$1);

return statearr_32778;
})();
if(inst_32678){
var statearr_32779_32837 = state_32773__$1;
(statearr_32779_32837[(1)] = (2));

} else {
var statearr_32780_32838 = state_32773__$1;
(statearr_32780_32838[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (24))){
var inst_32724 = (state_32773[(9)]);
var inst_32747 = (state_32773[(10)]);
var inst_32733 = (state_32773[(11)]);
var inst_32747__$1 = inst_32724.call(null,inst_32733);
var state_32773__$1 = (function (){var statearr_32781 = state_32773;
(statearr_32781[(10)] = inst_32747__$1);

return statearr_32781;
})();
if(cljs.core.truth_(inst_32747__$1)){
var statearr_32782_32839 = state_32773__$1;
(statearr_32782_32839[(1)] = (29));

} else {
var statearr_32783_32840 = state_32773__$1;
(statearr_32783_32840[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (4))){
var inst_32691 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32691)){
var statearr_32784_32841 = state_32773__$1;
(statearr_32784_32841[(1)] = (8));

} else {
var statearr_32785_32842 = state_32773__$1;
(statearr_32785_32842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (15))){
var inst_32718 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32718)){
var statearr_32786_32843 = state_32773__$1;
(statearr_32786_32843[(1)] = (19));

} else {
var statearr_32787_32844 = state_32773__$1;
(statearr_32787_32844[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (21))){
var inst_32723 = (state_32773[(12)]);
var inst_32723__$1 = (state_32773[(2)]);
var inst_32724 = cljs.core.get.call(null,inst_32723__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32725 = cljs.core.get.call(null,inst_32723__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32726 = cljs.core.get.call(null,inst_32723__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32773__$1 = (function (){var statearr_32788 = state_32773;
(statearr_32788[(13)] = inst_32725);

(statearr_32788[(9)] = inst_32724);

(statearr_32788[(12)] = inst_32723__$1);

return statearr_32788;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32773__$1,(22),inst_32726);
} else {
if((state_val_32774 === (31))){
var inst_32755 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32755)){
var statearr_32789_32845 = state_32773__$1;
(statearr_32789_32845[(1)] = (32));

} else {
var statearr_32790_32846 = state_32773__$1;
(statearr_32790_32846[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (32))){
var inst_32732 = (state_32773[(14)]);
var state_32773__$1 = state_32773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32773__$1,(35),out,inst_32732);
} else {
if((state_val_32774 === (33))){
var inst_32723 = (state_32773[(12)]);
var inst_32700 = inst_32723;
var state_32773__$1 = (function (){var statearr_32791 = state_32773;
(statearr_32791[(7)] = inst_32700);

return statearr_32791;
})();
var statearr_32792_32847 = state_32773__$1;
(statearr_32792_32847[(2)] = null);

(statearr_32792_32847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (13))){
var inst_32700 = (state_32773[(7)]);
var inst_32707 = inst_32700.cljs$lang$protocol_mask$partition0$;
var inst_32708 = (inst_32707 & (64));
var inst_32709 = inst_32700.cljs$core$ISeq$;
var inst_32710 = (cljs.core.PROTOCOL_SENTINEL === inst_32709);
var inst_32711 = (inst_32708) || (inst_32710);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32711)){
var statearr_32793_32848 = state_32773__$1;
(statearr_32793_32848[(1)] = (16));

} else {
var statearr_32794_32849 = state_32773__$1;
(statearr_32794_32849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (22))){
var inst_32732 = (state_32773[(14)]);
var inst_32733 = (state_32773[(11)]);
var inst_32731 = (state_32773[(2)]);
var inst_32732__$1 = cljs.core.nth.call(null,inst_32731,(0),null);
var inst_32733__$1 = cljs.core.nth.call(null,inst_32731,(1),null);
var inst_32734 = (inst_32732__$1 == null);
var inst_32735 = cljs.core._EQ_.call(null,inst_32733__$1,change);
var inst_32736 = (inst_32734) || (inst_32735);
var state_32773__$1 = (function (){var statearr_32795 = state_32773;
(statearr_32795[(14)] = inst_32732__$1);

(statearr_32795[(11)] = inst_32733__$1);

return statearr_32795;
})();
if(cljs.core.truth_(inst_32736)){
var statearr_32796_32850 = state_32773__$1;
(statearr_32796_32850[(1)] = (23));

} else {
var statearr_32797_32851 = state_32773__$1;
(statearr_32797_32851[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (36))){
var inst_32723 = (state_32773[(12)]);
var inst_32700 = inst_32723;
var state_32773__$1 = (function (){var statearr_32798 = state_32773;
(statearr_32798[(7)] = inst_32700);

return statearr_32798;
})();
var statearr_32799_32852 = state_32773__$1;
(statearr_32799_32852[(2)] = null);

(statearr_32799_32852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (29))){
var inst_32747 = (state_32773[(10)]);
var state_32773__$1 = state_32773;
var statearr_32800_32853 = state_32773__$1;
(statearr_32800_32853[(2)] = inst_32747);

(statearr_32800_32853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (6))){
var state_32773__$1 = state_32773;
var statearr_32801_32854 = state_32773__$1;
(statearr_32801_32854[(2)] = false);

(statearr_32801_32854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (28))){
var inst_32743 = (state_32773[(2)]);
var inst_32744 = calc_state.call(null);
var inst_32700 = inst_32744;
var state_32773__$1 = (function (){var statearr_32802 = state_32773;
(statearr_32802[(7)] = inst_32700);

(statearr_32802[(15)] = inst_32743);

return statearr_32802;
})();
var statearr_32803_32855 = state_32773__$1;
(statearr_32803_32855[(2)] = null);

(statearr_32803_32855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (25))){
var inst_32769 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32804_32856 = state_32773__$1;
(statearr_32804_32856[(2)] = inst_32769);

(statearr_32804_32856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (34))){
var inst_32767 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32805_32857 = state_32773__$1;
(statearr_32805_32857[(2)] = inst_32767);

(statearr_32805_32857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (17))){
var state_32773__$1 = state_32773;
var statearr_32806_32858 = state_32773__$1;
(statearr_32806_32858[(2)] = false);

(statearr_32806_32858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (3))){
var state_32773__$1 = state_32773;
var statearr_32807_32859 = state_32773__$1;
(statearr_32807_32859[(2)] = false);

(statearr_32807_32859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (12))){
var inst_32771 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32773__$1,inst_32771);
} else {
if((state_val_32774 === (2))){
var inst_32675 = (state_32773[(8)]);
var inst_32680 = inst_32675.cljs$lang$protocol_mask$partition0$;
var inst_32681 = (inst_32680 & (64));
var inst_32682 = inst_32675.cljs$core$ISeq$;
var inst_32683 = (cljs.core.PROTOCOL_SENTINEL === inst_32682);
var inst_32684 = (inst_32681) || (inst_32683);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32684)){
var statearr_32808_32860 = state_32773__$1;
(statearr_32808_32860[(1)] = (5));

} else {
var statearr_32809_32861 = state_32773__$1;
(statearr_32809_32861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (23))){
var inst_32732 = (state_32773[(14)]);
var inst_32738 = (inst_32732 == null);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32738)){
var statearr_32810_32862 = state_32773__$1;
(statearr_32810_32862[(1)] = (26));

} else {
var statearr_32811_32863 = state_32773__$1;
(statearr_32811_32863[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (35))){
var inst_32758 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32758)){
var statearr_32812_32864 = state_32773__$1;
(statearr_32812_32864[(1)] = (36));

} else {
var statearr_32813_32865 = state_32773__$1;
(statearr_32813_32865[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (19))){
var inst_32700 = (state_32773[(7)]);
var inst_32720 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32700);
var state_32773__$1 = state_32773;
var statearr_32814_32866 = state_32773__$1;
(statearr_32814_32866[(2)] = inst_32720);

(statearr_32814_32866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (11))){
var inst_32700 = (state_32773[(7)]);
var inst_32704 = (inst_32700 == null);
var inst_32705 = cljs.core.not.call(null,inst_32704);
var state_32773__$1 = state_32773;
if(inst_32705){
var statearr_32815_32867 = state_32773__$1;
(statearr_32815_32867[(1)] = (13));

} else {
var statearr_32816_32868 = state_32773__$1;
(statearr_32816_32868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (9))){
var inst_32675 = (state_32773[(8)]);
var state_32773__$1 = state_32773;
var statearr_32817_32869 = state_32773__$1;
(statearr_32817_32869[(2)] = inst_32675);

(statearr_32817_32869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (5))){
var state_32773__$1 = state_32773;
var statearr_32818_32870 = state_32773__$1;
(statearr_32818_32870[(2)] = true);

(statearr_32818_32870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (14))){
var state_32773__$1 = state_32773;
var statearr_32819_32871 = state_32773__$1;
(statearr_32819_32871[(2)] = false);

(statearr_32819_32871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (26))){
var inst_32733 = (state_32773[(11)]);
var inst_32740 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32733);
var state_32773__$1 = state_32773;
var statearr_32820_32872 = state_32773__$1;
(statearr_32820_32872[(2)] = inst_32740);

(statearr_32820_32872[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (16))){
var state_32773__$1 = state_32773;
var statearr_32821_32873 = state_32773__$1;
(statearr_32821_32873[(2)] = true);

(statearr_32821_32873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (38))){
var inst_32763 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32822_32874 = state_32773__$1;
(statearr_32822_32874[(2)] = inst_32763);

(statearr_32822_32874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (30))){
var inst_32725 = (state_32773[(13)]);
var inst_32724 = (state_32773[(9)]);
var inst_32733 = (state_32773[(11)]);
var inst_32750 = cljs.core.empty_QMARK_.call(null,inst_32724);
var inst_32751 = inst_32725.call(null,inst_32733);
var inst_32752 = cljs.core.not.call(null,inst_32751);
var inst_32753 = (inst_32750) && (inst_32752);
var state_32773__$1 = state_32773;
var statearr_32823_32875 = state_32773__$1;
(statearr_32823_32875[(2)] = inst_32753);

(statearr_32823_32875[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (10))){
var inst_32675 = (state_32773[(8)]);
var inst_32696 = (state_32773[(2)]);
var inst_32697 = cljs.core.get.call(null,inst_32696,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32698 = cljs.core.get.call(null,inst_32696,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32699 = cljs.core.get.call(null,inst_32696,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32700 = inst_32675;
var state_32773__$1 = (function (){var statearr_32824 = state_32773;
(statearr_32824[(7)] = inst_32700);

(statearr_32824[(16)] = inst_32697);

(statearr_32824[(17)] = inst_32699);

(statearr_32824[(18)] = inst_32698);

return statearr_32824;
})();
var statearr_32825_32876 = state_32773__$1;
(statearr_32825_32876[(2)] = null);

(statearr_32825_32876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (18))){
var inst_32715 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32826_32877 = state_32773__$1;
(statearr_32826_32877[(2)] = inst_32715);

(statearr_32826_32877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (37))){
var state_32773__$1 = state_32773;
var statearr_32827_32878 = state_32773__$1;
(statearr_32827_32878[(2)] = null);

(statearr_32827_32878[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (8))){
var inst_32675 = (state_32773[(8)]);
var inst_32693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32675);
var state_32773__$1 = state_32773;
var statearr_32828_32879 = state_32773__$1;
(statearr_32828_32879[(2)] = inst_32693);

(statearr_32828_32879[(1)] = (10));


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
});})(c__31788__auto___32833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31700__auto__,c__31788__auto___32833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31701__auto__ = null;
var cljs$core$async$mix_$_state_machine__31701__auto____0 = (function (){
var statearr_32829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32829[(0)] = cljs$core$async$mix_$_state_machine__31701__auto__);

(statearr_32829[(1)] = (1));

return statearr_32829;
});
var cljs$core$async$mix_$_state_machine__31701__auto____1 = (function (state_32773){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_32773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e32830){if((e32830 instanceof Object)){
var ex__31704__auto__ = e32830;
var statearr_32831_32880 = state_32773;
(statearr_32831_32880[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32881 = state_32773;
state_32773 = G__32881;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31701__auto__ = function(state_32773){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31701__auto____1.call(this,state_32773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31701__auto____0;
cljs$core$async$mix_$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31701__auto____1;
return cljs$core$async$mix_$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___32833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31790__auto__ = (function (){var statearr_32832 = f__31789__auto__.call(null);
(statearr_32832[(6)] = c__31788__auto___32833);

return statearr_32832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___32833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28970__auto__ = (((p == null))?null:p);
var m__28971__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28971__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28970__auto__ = (((p == null))?null:p);
var m__28971__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,p,v,ch);
} else {
var m__28971__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32883 = arguments.length;
switch (G__32883) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28970__auto__ = (((p == null))?null:p);
var m__28971__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,p);
} else {
var m__28971__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28970__auto__ = (((p == null))?null:p);
var m__28971__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28970__auto__)]);
if(!((m__28971__auto__ == null))){
return m__28971__auto__.call(null,p,v);
} else {
var m__28971__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28971__auto____$1 == null))){
return m__28971__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32887 = arguments.length;
switch (G__32887) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28286__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28286__auto__,mults){
return (function (p1__32885_SHARP_){
if(cljs.core.truth_(p1__32885_SHARP_.call(null,topic))){
return p1__32885_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32885_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32888 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32889){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32889 = meta32889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32890,meta32889__$1){
var self__ = this;
var _32890__$1 = this;
return (new cljs.core.async.t_cljs$core$async32888(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32889__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32890){
var self__ = this;
var _32890__$1 = this;
return self__.meta32889;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32888.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32889","meta32889",-722211566,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32888";

cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async32888");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32888 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32889){
return (new cljs.core.async.t_cljs$core$async32888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32889));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32888(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31788__auto___33008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___33008,mults,ensure_mult,p){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___33008,mults,ensure_mult,p){
return (function (state_32962){
var state_val_32963 = (state_32962[(1)]);
if((state_val_32963 === (7))){
var inst_32958 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32964_33009 = state_32962__$1;
(statearr_32964_33009[(2)] = inst_32958);

(statearr_32964_33009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (20))){
var state_32962__$1 = state_32962;
var statearr_32965_33010 = state_32962__$1;
(statearr_32965_33010[(2)] = null);

(statearr_32965_33010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (1))){
var state_32962__$1 = state_32962;
var statearr_32966_33011 = state_32962__$1;
(statearr_32966_33011[(2)] = null);

(statearr_32966_33011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (24))){
var inst_32941 = (state_32962[(7)]);
var inst_32950 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32941);
var state_32962__$1 = state_32962;
var statearr_32967_33012 = state_32962__$1;
(statearr_32967_33012[(2)] = inst_32950);

(statearr_32967_33012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (4))){
var inst_32893 = (state_32962[(8)]);
var inst_32893__$1 = (state_32962[(2)]);
var inst_32894 = (inst_32893__$1 == null);
var state_32962__$1 = (function (){var statearr_32968 = state_32962;
(statearr_32968[(8)] = inst_32893__$1);

return statearr_32968;
})();
if(cljs.core.truth_(inst_32894)){
var statearr_32969_33013 = state_32962__$1;
(statearr_32969_33013[(1)] = (5));

} else {
var statearr_32970_33014 = state_32962__$1;
(statearr_32970_33014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (15))){
var inst_32935 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32971_33015 = state_32962__$1;
(statearr_32971_33015[(2)] = inst_32935);

(statearr_32971_33015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (21))){
var inst_32955 = (state_32962[(2)]);
var state_32962__$1 = (function (){var statearr_32972 = state_32962;
(statearr_32972[(9)] = inst_32955);

return statearr_32972;
})();
var statearr_32973_33016 = state_32962__$1;
(statearr_32973_33016[(2)] = null);

(statearr_32973_33016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (13))){
var inst_32917 = (state_32962[(10)]);
var inst_32919 = cljs.core.chunked_seq_QMARK_.call(null,inst_32917);
var state_32962__$1 = state_32962;
if(inst_32919){
var statearr_32974_33017 = state_32962__$1;
(statearr_32974_33017[(1)] = (16));

} else {
var statearr_32975_33018 = state_32962__$1;
(statearr_32975_33018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (22))){
var inst_32947 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
if(cljs.core.truth_(inst_32947)){
var statearr_32976_33019 = state_32962__$1;
(statearr_32976_33019[(1)] = (23));

} else {
var statearr_32977_33020 = state_32962__$1;
(statearr_32977_33020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (6))){
var inst_32941 = (state_32962[(7)]);
var inst_32943 = (state_32962[(11)]);
var inst_32893 = (state_32962[(8)]);
var inst_32941__$1 = topic_fn.call(null,inst_32893);
var inst_32942 = cljs.core.deref.call(null,mults);
var inst_32943__$1 = cljs.core.get.call(null,inst_32942,inst_32941__$1);
var state_32962__$1 = (function (){var statearr_32978 = state_32962;
(statearr_32978[(7)] = inst_32941__$1);

(statearr_32978[(11)] = inst_32943__$1);

return statearr_32978;
})();
if(cljs.core.truth_(inst_32943__$1)){
var statearr_32979_33021 = state_32962__$1;
(statearr_32979_33021[(1)] = (19));

} else {
var statearr_32980_33022 = state_32962__$1;
(statearr_32980_33022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (25))){
var inst_32952 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32981_33023 = state_32962__$1;
(statearr_32981_33023[(2)] = inst_32952);

(statearr_32981_33023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (17))){
var inst_32917 = (state_32962[(10)]);
var inst_32926 = cljs.core.first.call(null,inst_32917);
var inst_32927 = cljs.core.async.muxch_STAR_.call(null,inst_32926);
var inst_32928 = cljs.core.async.close_BANG_.call(null,inst_32927);
var inst_32929 = cljs.core.next.call(null,inst_32917);
var inst_32903 = inst_32929;
var inst_32904 = null;
var inst_32905 = (0);
var inst_32906 = (0);
var state_32962__$1 = (function (){var statearr_32982 = state_32962;
(statearr_32982[(12)] = inst_32904);

(statearr_32982[(13)] = inst_32928);

(statearr_32982[(14)] = inst_32906);

(statearr_32982[(15)] = inst_32905);

(statearr_32982[(16)] = inst_32903);

return statearr_32982;
})();
var statearr_32983_33024 = state_32962__$1;
(statearr_32983_33024[(2)] = null);

(statearr_32983_33024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (3))){
var inst_32960 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32962__$1,inst_32960);
} else {
if((state_val_32963 === (12))){
var inst_32937 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32984_33025 = state_32962__$1;
(statearr_32984_33025[(2)] = inst_32937);

(statearr_32984_33025[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (2))){
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32962__$1,(4),ch);
} else {
if((state_val_32963 === (23))){
var state_32962__$1 = state_32962;
var statearr_32985_33026 = state_32962__$1;
(statearr_32985_33026[(2)] = null);

(statearr_32985_33026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (19))){
var inst_32943 = (state_32962[(11)]);
var inst_32893 = (state_32962[(8)]);
var inst_32945 = cljs.core.async.muxch_STAR_.call(null,inst_32943);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32962__$1,(22),inst_32945,inst_32893);
} else {
if((state_val_32963 === (11))){
var inst_32917 = (state_32962[(10)]);
var inst_32903 = (state_32962[(16)]);
var inst_32917__$1 = cljs.core.seq.call(null,inst_32903);
var state_32962__$1 = (function (){var statearr_32986 = state_32962;
(statearr_32986[(10)] = inst_32917__$1);

return statearr_32986;
})();
if(inst_32917__$1){
var statearr_32987_33027 = state_32962__$1;
(statearr_32987_33027[(1)] = (13));

} else {
var statearr_32988_33028 = state_32962__$1;
(statearr_32988_33028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (9))){
var inst_32939 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32989_33029 = state_32962__$1;
(statearr_32989_33029[(2)] = inst_32939);

(statearr_32989_33029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (5))){
var inst_32900 = cljs.core.deref.call(null,mults);
var inst_32901 = cljs.core.vals.call(null,inst_32900);
var inst_32902 = cljs.core.seq.call(null,inst_32901);
var inst_32903 = inst_32902;
var inst_32904 = null;
var inst_32905 = (0);
var inst_32906 = (0);
var state_32962__$1 = (function (){var statearr_32990 = state_32962;
(statearr_32990[(12)] = inst_32904);

(statearr_32990[(14)] = inst_32906);

(statearr_32990[(15)] = inst_32905);

(statearr_32990[(16)] = inst_32903);

return statearr_32990;
})();
var statearr_32991_33030 = state_32962__$1;
(statearr_32991_33030[(2)] = null);

(statearr_32991_33030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (14))){
var state_32962__$1 = state_32962;
var statearr_32995_33031 = state_32962__$1;
(statearr_32995_33031[(2)] = null);

(statearr_32995_33031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (16))){
var inst_32917 = (state_32962[(10)]);
var inst_32921 = cljs.core.chunk_first.call(null,inst_32917);
var inst_32922 = cljs.core.chunk_rest.call(null,inst_32917);
var inst_32923 = cljs.core.count.call(null,inst_32921);
var inst_32903 = inst_32922;
var inst_32904 = inst_32921;
var inst_32905 = inst_32923;
var inst_32906 = (0);
var state_32962__$1 = (function (){var statearr_32996 = state_32962;
(statearr_32996[(12)] = inst_32904);

(statearr_32996[(14)] = inst_32906);

(statearr_32996[(15)] = inst_32905);

(statearr_32996[(16)] = inst_32903);

return statearr_32996;
})();
var statearr_32997_33032 = state_32962__$1;
(statearr_32997_33032[(2)] = null);

(statearr_32997_33032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (10))){
var inst_32904 = (state_32962[(12)]);
var inst_32906 = (state_32962[(14)]);
var inst_32905 = (state_32962[(15)]);
var inst_32903 = (state_32962[(16)]);
var inst_32911 = cljs.core._nth.call(null,inst_32904,inst_32906);
var inst_32912 = cljs.core.async.muxch_STAR_.call(null,inst_32911);
var inst_32913 = cljs.core.async.close_BANG_.call(null,inst_32912);
var inst_32914 = (inst_32906 + (1));
var tmp32992 = inst_32904;
var tmp32993 = inst_32905;
var tmp32994 = inst_32903;
var inst_32903__$1 = tmp32994;
var inst_32904__$1 = tmp32992;
var inst_32905__$1 = tmp32993;
var inst_32906__$1 = inst_32914;
var state_32962__$1 = (function (){var statearr_32998 = state_32962;
(statearr_32998[(17)] = inst_32913);

(statearr_32998[(12)] = inst_32904__$1);

(statearr_32998[(14)] = inst_32906__$1);

(statearr_32998[(15)] = inst_32905__$1);

(statearr_32998[(16)] = inst_32903__$1);

return statearr_32998;
})();
var statearr_32999_33033 = state_32962__$1;
(statearr_32999_33033[(2)] = null);

(statearr_32999_33033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (18))){
var inst_32932 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_33000_33034 = state_32962__$1;
(statearr_33000_33034[(2)] = inst_32932);

(statearr_33000_33034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (8))){
var inst_32906 = (state_32962[(14)]);
var inst_32905 = (state_32962[(15)]);
var inst_32908 = (inst_32906 < inst_32905);
var inst_32909 = inst_32908;
var state_32962__$1 = state_32962;
if(cljs.core.truth_(inst_32909)){
var statearr_33001_33035 = state_32962__$1;
(statearr_33001_33035[(1)] = (10));

} else {
var statearr_33002_33036 = state_32962__$1;
(statearr_33002_33036[(1)] = (11));

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
});})(c__31788__auto___33008,mults,ensure_mult,p))
;
return ((function (switch__31700__auto__,c__31788__auto___33008,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_33003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33003[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_33003[(1)] = (1));

return statearr_33003;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_32962){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_32962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e33004){if((e33004 instanceof Object)){
var ex__31704__auto__ = e33004;
var statearr_33005_33037 = state_32962;
(statearr_33005_33037[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33038 = state_32962;
state_32962 = G__33038;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_32962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_32962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___33008,mults,ensure_mult,p))
})();
var state__31790__auto__ = (function (){var statearr_33006 = f__31789__auto__.call(null);
(statearr_33006[(6)] = c__31788__auto___33008);

return statearr_33006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___33008,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33040 = arguments.length;
switch (G__33040) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33043 = arguments.length;
switch (G__33043) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33046 = arguments.length;
switch (G__33046) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31788__auto___33113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___33113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___33113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33085){
var state_val_33086 = (state_33085[(1)]);
if((state_val_33086 === (7))){
var state_33085__$1 = state_33085;
var statearr_33087_33114 = state_33085__$1;
(statearr_33087_33114[(2)] = null);

(statearr_33087_33114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (1))){
var state_33085__$1 = state_33085;
var statearr_33088_33115 = state_33085__$1;
(statearr_33088_33115[(2)] = null);

(statearr_33088_33115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (4))){
var inst_33049 = (state_33085[(7)]);
var inst_33051 = (inst_33049 < cnt);
var state_33085__$1 = state_33085;
if(cljs.core.truth_(inst_33051)){
var statearr_33089_33116 = state_33085__$1;
(statearr_33089_33116[(1)] = (6));

} else {
var statearr_33090_33117 = state_33085__$1;
(statearr_33090_33117[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (15))){
var inst_33081 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33091_33118 = state_33085__$1;
(statearr_33091_33118[(2)] = inst_33081);

(statearr_33091_33118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (13))){
var inst_33074 = cljs.core.async.close_BANG_.call(null,out);
var state_33085__$1 = state_33085;
var statearr_33092_33119 = state_33085__$1;
(statearr_33092_33119[(2)] = inst_33074);

(statearr_33092_33119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (6))){
var state_33085__$1 = state_33085;
var statearr_33093_33120 = state_33085__$1;
(statearr_33093_33120[(2)] = null);

(statearr_33093_33120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (3))){
var inst_33083 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33085__$1,inst_33083);
} else {
if((state_val_33086 === (12))){
var inst_33071 = (state_33085[(8)]);
var inst_33071__$1 = (state_33085[(2)]);
var inst_33072 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33071__$1);
var state_33085__$1 = (function (){var statearr_33094 = state_33085;
(statearr_33094[(8)] = inst_33071__$1);

return statearr_33094;
})();
if(cljs.core.truth_(inst_33072)){
var statearr_33095_33121 = state_33085__$1;
(statearr_33095_33121[(1)] = (13));

} else {
var statearr_33096_33122 = state_33085__$1;
(statearr_33096_33122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (2))){
var inst_33048 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33049 = (0);
var state_33085__$1 = (function (){var statearr_33097 = state_33085;
(statearr_33097[(9)] = inst_33048);

(statearr_33097[(7)] = inst_33049);

return statearr_33097;
})();
var statearr_33098_33123 = state_33085__$1;
(statearr_33098_33123[(2)] = null);

(statearr_33098_33123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (11))){
var inst_33049 = (state_33085[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33085,(10),Object,null,(9));
var inst_33058 = chs__$1.call(null,inst_33049);
var inst_33059 = done.call(null,inst_33049);
var inst_33060 = cljs.core.async.take_BANG_.call(null,inst_33058,inst_33059);
var state_33085__$1 = state_33085;
var statearr_33099_33124 = state_33085__$1;
(statearr_33099_33124[(2)] = inst_33060);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (9))){
var inst_33049 = (state_33085[(7)]);
var inst_33062 = (state_33085[(2)]);
var inst_33063 = (inst_33049 + (1));
var inst_33049__$1 = inst_33063;
var state_33085__$1 = (function (){var statearr_33100 = state_33085;
(statearr_33100[(7)] = inst_33049__$1);

(statearr_33100[(10)] = inst_33062);

return statearr_33100;
})();
var statearr_33101_33125 = state_33085__$1;
(statearr_33101_33125[(2)] = null);

(statearr_33101_33125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (5))){
var inst_33069 = (state_33085[(2)]);
var state_33085__$1 = (function (){var statearr_33102 = state_33085;
(statearr_33102[(11)] = inst_33069);

return statearr_33102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33085__$1,(12),dchan);
} else {
if((state_val_33086 === (14))){
var inst_33071 = (state_33085[(8)]);
var inst_33076 = cljs.core.apply.call(null,f,inst_33071);
var state_33085__$1 = state_33085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33085__$1,(16),out,inst_33076);
} else {
if((state_val_33086 === (16))){
var inst_33078 = (state_33085[(2)]);
var state_33085__$1 = (function (){var statearr_33103 = state_33085;
(statearr_33103[(12)] = inst_33078);

return statearr_33103;
})();
var statearr_33104_33126 = state_33085__$1;
(statearr_33104_33126[(2)] = null);

(statearr_33104_33126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (10))){
var inst_33053 = (state_33085[(2)]);
var inst_33054 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33085__$1 = (function (){var statearr_33105 = state_33085;
(statearr_33105[(13)] = inst_33053);

return statearr_33105;
})();
var statearr_33106_33127 = state_33085__$1;
(statearr_33106_33127[(2)] = inst_33054);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (8))){
var inst_33067 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33107_33128 = state_33085__$1;
(statearr_33107_33128[(2)] = inst_33067);

(statearr_33107_33128[(1)] = (5));


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
});})(c__31788__auto___33113,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31700__auto__,c__31788__auto___33113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_33108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33108[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_33108[(1)] = (1));

return statearr_33108;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_33085){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_33085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e33109){if((e33109 instanceof Object)){
var ex__31704__auto__ = e33109;
var statearr_33110_33129 = state_33085;
(statearr_33110_33129[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33130 = state_33085;
state_33085 = G__33130;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_33085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_33085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___33113,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31790__auto__ = (function (){var statearr_33111 = f__31789__auto__.call(null);
(statearr_33111[(6)] = c__31788__auto___33113);

return statearr_33111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___33113,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33133 = arguments.length;
switch (G__33133) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31788__auto___33187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___33187,out){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___33187,out){
return (function (state_33165){
var state_val_33166 = (state_33165[(1)]);
if((state_val_33166 === (7))){
var inst_33144 = (state_33165[(7)]);
var inst_33145 = (state_33165[(8)]);
var inst_33144__$1 = (state_33165[(2)]);
var inst_33145__$1 = cljs.core.nth.call(null,inst_33144__$1,(0),null);
var inst_33146 = cljs.core.nth.call(null,inst_33144__$1,(1),null);
var inst_33147 = (inst_33145__$1 == null);
var state_33165__$1 = (function (){var statearr_33167 = state_33165;
(statearr_33167[(7)] = inst_33144__$1);

(statearr_33167[(9)] = inst_33146);

(statearr_33167[(8)] = inst_33145__$1);

return statearr_33167;
})();
if(cljs.core.truth_(inst_33147)){
var statearr_33168_33188 = state_33165__$1;
(statearr_33168_33188[(1)] = (8));

} else {
var statearr_33169_33189 = state_33165__$1;
(statearr_33169_33189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (1))){
var inst_33134 = cljs.core.vec.call(null,chs);
var inst_33135 = inst_33134;
var state_33165__$1 = (function (){var statearr_33170 = state_33165;
(statearr_33170[(10)] = inst_33135);

return statearr_33170;
})();
var statearr_33171_33190 = state_33165__$1;
(statearr_33171_33190[(2)] = null);

(statearr_33171_33190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (4))){
var inst_33135 = (state_33165[(10)]);
var state_33165__$1 = state_33165;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33165__$1,(7),inst_33135);
} else {
if((state_val_33166 === (6))){
var inst_33161 = (state_33165[(2)]);
var state_33165__$1 = state_33165;
var statearr_33172_33191 = state_33165__$1;
(statearr_33172_33191[(2)] = inst_33161);

(statearr_33172_33191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (3))){
var inst_33163 = (state_33165[(2)]);
var state_33165__$1 = state_33165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33165__$1,inst_33163);
} else {
if((state_val_33166 === (2))){
var inst_33135 = (state_33165[(10)]);
var inst_33137 = cljs.core.count.call(null,inst_33135);
var inst_33138 = (inst_33137 > (0));
var state_33165__$1 = state_33165;
if(cljs.core.truth_(inst_33138)){
var statearr_33174_33192 = state_33165__$1;
(statearr_33174_33192[(1)] = (4));

} else {
var statearr_33175_33193 = state_33165__$1;
(statearr_33175_33193[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (11))){
var inst_33135 = (state_33165[(10)]);
var inst_33154 = (state_33165[(2)]);
var tmp33173 = inst_33135;
var inst_33135__$1 = tmp33173;
var state_33165__$1 = (function (){var statearr_33176 = state_33165;
(statearr_33176[(11)] = inst_33154);

(statearr_33176[(10)] = inst_33135__$1);

return statearr_33176;
})();
var statearr_33177_33194 = state_33165__$1;
(statearr_33177_33194[(2)] = null);

(statearr_33177_33194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (9))){
var inst_33145 = (state_33165[(8)]);
var state_33165__$1 = state_33165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33165__$1,(11),out,inst_33145);
} else {
if((state_val_33166 === (5))){
var inst_33159 = cljs.core.async.close_BANG_.call(null,out);
var state_33165__$1 = state_33165;
var statearr_33178_33195 = state_33165__$1;
(statearr_33178_33195[(2)] = inst_33159);

(statearr_33178_33195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (10))){
var inst_33157 = (state_33165[(2)]);
var state_33165__$1 = state_33165;
var statearr_33179_33196 = state_33165__$1;
(statearr_33179_33196[(2)] = inst_33157);

(statearr_33179_33196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (8))){
var inst_33144 = (state_33165[(7)]);
var inst_33146 = (state_33165[(9)]);
var inst_33145 = (state_33165[(8)]);
var inst_33135 = (state_33165[(10)]);
var inst_33149 = (function (){var cs = inst_33135;
var vec__33140 = inst_33144;
var v = inst_33145;
var c = inst_33146;
return ((function (cs,vec__33140,v,c,inst_33144,inst_33146,inst_33145,inst_33135,state_val_33166,c__31788__auto___33187,out){
return (function (p1__33131_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33131_SHARP_);
});
;})(cs,vec__33140,v,c,inst_33144,inst_33146,inst_33145,inst_33135,state_val_33166,c__31788__auto___33187,out))
})();
var inst_33150 = cljs.core.filterv.call(null,inst_33149,inst_33135);
var inst_33135__$1 = inst_33150;
var state_33165__$1 = (function (){var statearr_33180 = state_33165;
(statearr_33180[(10)] = inst_33135__$1);

return statearr_33180;
})();
var statearr_33181_33197 = state_33165__$1;
(statearr_33181_33197[(2)] = null);

(statearr_33181_33197[(1)] = (2));


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
});})(c__31788__auto___33187,out))
;
return ((function (switch__31700__auto__,c__31788__auto___33187,out){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_33182 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33182[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_33182[(1)] = (1));

return statearr_33182;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_33165){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_33165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e33183){if((e33183 instanceof Object)){
var ex__31704__auto__ = e33183;
var statearr_33184_33198 = state_33165;
(statearr_33184_33198[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33199 = state_33165;
state_33165 = G__33199;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_33165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_33165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___33187,out))
})();
var state__31790__auto__ = (function (){var statearr_33185 = f__31789__auto__.call(null);
(statearr_33185[(6)] = c__31788__auto___33187);

return statearr_33185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___33187,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33201 = arguments.length;
switch (G__33201) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31788__auto___33246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___33246,out){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___33246,out){
return (function (state_33225){
var state_val_33226 = (state_33225[(1)]);
if((state_val_33226 === (7))){
var inst_33207 = (state_33225[(7)]);
var inst_33207__$1 = (state_33225[(2)]);
var inst_33208 = (inst_33207__$1 == null);
var inst_33209 = cljs.core.not.call(null,inst_33208);
var state_33225__$1 = (function (){var statearr_33227 = state_33225;
(statearr_33227[(7)] = inst_33207__$1);

return statearr_33227;
})();
if(inst_33209){
var statearr_33228_33247 = state_33225__$1;
(statearr_33228_33247[(1)] = (8));

} else {
var statearr_33229_33248 = state_33225__$1;
(statearr_33229_33248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (1))){
var inst_33202 = (0);
var state_33225__$1 = (function (){var statearr_33230 = state_33225;
(statearr_33230[(8)] = inst_33202);

return statearr_33230;
})();
var statearr_33231_33249 = state_33225__$1;
(statearr_33231_33249[(2)] = null);

(statearr_33231_33249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (4))){
var state_33225__$1 = state_33225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33225__$1,(7),ch);
} else {
if((state_val_33226 === (6))){
var inst_33220 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
var statearr_33232_33250 = state_33225__$1;
(statearr_33232_33250[(2)] = inst_33220);

(statearr_33232_33250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (3))){
var inst_33222 = (state_33225[(2)]);
var inst_33223 = cljs.core.async.close_BANG_.call(null,out);
var state_33225__$1 = (function (){var statearr_33233 = state_33225;
(statearr_33233[(9)] = inst_33222);

return statearr_33233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33225__$1,inst_33223);
} else {
if((state_val_33226 === (2))){
var inst_33202 = (state_33225[(8)]);
var inst_33204 = (inst_33202 < n);
var state_33225__$1 = state_33225;
if(cljs.core.truth_(inst_33204)){
var statearr_33234_33251 = state_33225__$1;
(statearr_33234_33251[(1)] = (4));

} else {
var statearr_33235_33252 = state_33225__$1;
(statearr_33235_33252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (11))){
var inst_33202 = (state_33225[(8)]);
var inst_33212 = (state_33225[(2)]);
var inst_33213 = (inst_33202 + (1));
var inst_33202__$1 = inst_33213;
var state_33225__$1 = (function (){var statearr_33236 = state_33225;
(statearr_33236[(8)] = inst_33202__$1);

(statearr_33236[(10)] = inst_33212);

return statearr_33236;
})();
var statearr_33237_33253 = state_33225__$1;
(statearr_33237_33253[(2)] = null);

(statearr_33237_33253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (9))){
var state_33225__$1 = state_33225;
var statearr_33238_33254 = state_33225__$1;
(statearr_33238_33254[(2)] = null);

(statearr_33238_33254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (5))){
var state_33225__$1 = state_33225;
var statearr_33239_33255 = state_33225__$1;
(statearr_33239_33255[(2)] = null);

(statearr_33239_33255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (10))){
var inst_33217 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
var statearr_33240_33256 = state_33225__$1;
(statearr_33240_33256[(2)] = inst_33217);

(statearr_33240_33256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (8))){
var inst_33207 = (state_33225[(7)]);
var state_33225__$1 = state_33225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33225__$1,(11),out,inst_33207);
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
});})(c__31788__auto___33246,out))
;
return ((function (switch__31700__auto__,c__31788__auto___33246,out){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_33241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33241[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_33241[(1)] = (1));

return statearr_33241;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_33225){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_33225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e33242){if((e33242 instanceof Object)){
var ex__31704__auto__ = e33242;
var statearr_33243_33257 = state_33225;
(statearr_33243_33257[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33258 = state_33225;
state_33225 = G__33258;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_33225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_33225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___33246,out))
})();
var state__31790__auto__ = (function (){var statearr_33244 = f__31789__auto__.call(null);
(statearr_33244[(6)] = c__31788__auto___33246);

return statearr_33244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___33246,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33260 = (function (f,ch,meta33261){
this.f = f;
this.ch = ch;
this.meta33261 = meta33261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33262,meta33261__$1){
var self__ = this;
var _33262__$1 = this;
return (new cljs.core.async.t_cljs$core$async33260(self__.f,self__.ch,meta33261__$1));
});

cljs.core.async.t_cljs$core$async33260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33262){
var self__ = this;
var _33262__$1 = this;
return self__.meta33261;
});

cljs.core.async.t_cljs$core$async33260.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33260.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33260.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33263 = (function (f,ch,meta33261,_,fn1,meta33264){
this.f = f;
this.ch = ch;
this.meta33261 = meta33261;
this._ = _;
this.fn1 = fn1;
this.meta33264 = meta33264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33265,meta33264__$1){
var self__ = this;
var _33265__$1 = this;
return (new cljs.core.async.t_cljs$core$async33263(self__.f,self__.ch,self__.meta33261,self__._,self__.fn1,meta33264__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33265){
var self__ = this;
var _33265__$1 = this;
return self__.meta33264;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33263.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33263.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33259_SHARP_){
return f1.call(null,(((p1__33259_SHARP_ == null))?null:self__.f.call(null,p1__33259_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33263.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33261","meta33261",1119806851,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33260","cljs.core.async/t_cljs$core$async33260",1579367226,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33264","meta33264",845349068,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33263";

cljs.core.async.t_cljs$core$async33263.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async33263");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33263 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33263(f__$1,ch__$1,meta33261__$1,___$2,fn1__$1,meta33264){
return (new cljs.core.async.t_cljs$core$async33263(f__$1,ch__$1,meta33261__$1,___$2,fn1__$1,meta33264));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33263(self__.f,self__.ch,self__.meta33261,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28274__auto__ = ret;
if(cljs.core.truth_(and__28274__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28274__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33260.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33261","meta33261",1119806851,null)], null);
});

cljs.core.async.t_cljs$core$async33260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33260";

cljs.core.async.t_cljs$core$async33260.cljs$lang$ctorPrWriter = (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async33260");
});

cljs.core.async.__GT_t_cljs$core$async33260 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33260(f__$1,ch__$1,meta33261){
return (new cljs.core.async.t_cljs$core$async33260(f__$1,ch__$1,meta33261));
});

}

return (new cljs.core.async.t_cljs$core$async33260(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33266 = (function (f,ch,meta33267){
this.f = f;
this.ch = ch;
this.meta33267 = meta33267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33268,meta33267__$1){
var self__ = this;
var _33268__$1 = this;
return (new cljs.core.async.t_cljs$core$async33266(self__.f,self__.ch,meta33267__$1));
});

cljs.core.async.t_cljs$core$async33266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33268){
var self__ = this;
var _33268__$1 = this;
return self__.meta33267;
});

cljs.core.async.t_cljs$core$async33266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33267","meta33267",1506025135,null)], null);
});

cljs.core.async.t_cljs$core$async33266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33266";

cljs.core.async.t_cljs$core$async33266.cljs$lang$ctorPrWriter = (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async33266");
});

cljs.core.async.__GT_t_cljs$core$async33266 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33266(f__$1,ch__$1,meta33267){
return (new cljs.core.async.t_cljs$core$async33266(f__$1,ch__$1,meta33267));
});

}

return (new cljs.core.async.t_cljs$core$async33266(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33269 = (function (p,ch,meta33270){
this.p = p;
this.ch = ch;
this.meta33270 = meta33270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33271,meta33270__$1){
var self__ = this;
var _33271__$1 = this;
return (new cljs.core.async.t_cljs$core$async33269(self__.p,self__.ch,meta33270__$1));
});

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33271){
var self__ = this;
var _33271__$1 = this;
return self__.meta33270;
});

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33270","meta33270",-79596268,null)], null);
});

cljs.core.async.t_cljs$core$async33269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33269";

cljs.core.async.t_cljs$core$async33269.cljs$lang$ctorPrWriter = (function (this__28912__auto__,writer__28913__auto__,opt__28914__auto__){
return cljs.core._write.call(null,writer__28913__auto__,"cljs.core.async/t_cljs$core$async33269");
});

cljs.core.async.__GT_t_cljs$core$async33269 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33269(p__$1,ch__$1,meta33270){
return (new cljs.core.async.t_cljs$core$async33269(p__$1,ch__$1,meta33270));
});

}

return (new cljs.core.async.t_cljs$core$async33269(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33273 = arguments.length;
switch (G__33273) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31788__auto___33313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___33313,out){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___33313,out){
return (function (state_33294){
var state_val_33295 = (state_33294[(1)]);
if((state_val_33295 === (7))){
var inst_33290 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33296_33314 = state_33294__$1;
(statearr_33296_33314[(2)] = inst_33290);

(statearr_33296_33314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (1))){
var state_33294__$1 = state_33294;
var statearr_33297_33315 = state_33294__$1;
(statearr_33297_33315[(2)] = null);

(statearr_33297_33315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (4))){
var inst_33276 = (state_33294[(7)]);
var inst_33276__$1 = (state_33294[(2)]);
var inst_33277 = (inst_33276__$1 == null);
var state_33294__$1 = (function (){var statearr_33298 = state_33294;
(statearr_33298[(7)] = inst_33276__$1);

return statearr_33298;
})();
if(cljs.core.truth_(inst_33277)){
var statearr_33299_33316 = state_33294__$1;
(statearr_33299_33316[(1)] = (5));

} else {
var statearr_33300_33317 = state_33294__$1;
(statearr_33300_33317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (6))){
var inst_33276 = (state_33294[(7)]);
var inst_33281 = p.call(null,inst_33276);
var state_33294__$1 = state_33294;
if(cljs.core.truth_(inst_33281)){
var statearr_33301_33318 = state_33294__$1;
(statearr_33301_33318[(1)] = (8));

} else {
var statearr_33302_33319 = state_33294__$1;
(statearr_33302_33319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (3))){
var inst_33292 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33294__$1,inst_33292);
} else {
if((state_val_33295 === (2))){
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33294__$1,(4),ch);
} else {
if((state_val_33295 === (11))){
var inst_33284 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33303_33320 = state_33294__$1;
(statearr_33303_33320[(2)] = inst_33284);

(statearr_33303_33320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (9))){
var state_33294__$1 = state_33294;
var statearr_33304_33321 = state_33294__$1;
(statearr_33304_33321[(2)] = null);

(statearr_33304_33321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (5))){
var inst_33279 = cljs.core.async.close_BANG_.call(null,out);
var state_33294__$1 = state_33294;
var statearr_33305_33322 = state_33294__$1;
(statearr_33305_33322[(2)] = inst_33279);

(statearr_33305_33322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (10))){
var inst_33287 = (state_33294[(2)]);
var state_33294__$1 = (function (){var statearr_33306 = state_33294;
(statearr_33306[(8)] = inst_33287);

return statearr_33306;
})();
var statearr_33307_33323 = state_33294__$1;
(statearr_33307_33323[(2)] = null);

(statearr_33307_33323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (8))){
var inst_33276 = (state_33294[(7)]);
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33294__$1,(11),out,inst_33276);
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
});})(c__31788__auto___33313,out))
;
return ((function (switch__31700__auto__,c__31788__auto___33313,out){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_33308 = [null,null,null,null,null,null,null,null,null];
(statearr_33308[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_33308[(1)] = (1));

return statearr_33308;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_33294){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_33294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e33309){if((e33309 instanceof Object)){
var ex__31704__auto__ = e33309;
var statearr_33310_33324 = state_33294;
(statearr_33310_33324[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33325 = state_33294;
state_33294 = G__33325;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_33294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_33294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___33313,out))
})();
var state__31790__auto__ = (function (){var statearr_33311 = f__31789__auto__.call(null);
(statearr_33311[(6)] = c__31788__auto___33313);

return statearr_33311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___33313,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33327 = arguments.length;
switch (G__33327) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto__){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto__){
return (function (state_33390){
var state_val_33391 = (state_33390[(1)]);
if((state_val_33391 === (7))){
var inst_33386 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33392_33430 = state_33390__$1;
(statearr_33392_33430[(2)] = inst_33386);

(statearr_33392_33430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (20))){
var inst_33356 = (state_33390[(7)]);
var inst_33367 = (state_33390[(2)]);
var inst_33368 = cljs.core.next.call(null,inst_33356);
var inst_33342 = inst_33368;
var inst_33343 = null;
var inst_33344 = (0);
var inst_33345 = (0);
var state_33390__$1 = (function (){var statearr_33393 = state_33390;
(statearr_33393[(8)] = inst_33342);

(statearr_33393[(9)] = inst_33367);

(statearr_33393[(10)] = inst_33344);

(statearr_33393[(11)] = inst_33345);

(statearr_33393[(12)] = inst_33343);

return statearr_33393;
})();
var statearr_33394_33431 = state_33390__$1;
(statearr_33394_33431[(2)] = null);

(statearr_33394_33431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (1))){
var state_33390__$1 = state_33390;
var statearr_33395_33432 = state_33390__$1;
(statearr_33395_33432[(2)] = null);

(statearr_33395_33432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (4))){
var inst_33331 = (state_33390[(13)]);
var inst_33331__$1 = (state_33390[(2)]);
var inst_33332 = (inst_33331__$1 == null);
var state_33390__$1 = (function (){var statearr_33396 = state_33390;
(statearr_33396[(13)] = inst_33331__$1);

return statearr_33396;
})();
if(cljs.core.truth_(inst_33332)){
var statearr_33397_33433 = state_33390__$1;
(statearr_33397_33433[(1)] = (5));

} else {
var statearr_33398_33434 = state_33390__$1;
(statearr_33398_33434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (15))){
var state_33390__$1 = state_33390;
var statearr_33402_33435 = state_33390__$1;
(statearr_33402_33435[(2)] = null);

(statearr_33402_33435[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (21))){
var state_33390__$1 = state_33390;
var statearr_33403_33436 = state_33390__$1;
(statearr_33403_33436[(2)] = null);

(statearr_33403_33436[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (13))){
var inst_33342 = (state_33390[(8)]);
var inst_33344 = (state_33390[(10)]);
var inst_33345 = (state_33390[(11)]);
var inst_33343 = (state_33390[(12)]);
var inst_33352 = (state_33390[(2)]);
var inst_33353 = (inst_33345 + (1));
var tmp33399 = inst_33342;
var tmp33400 = inst_33344;
var tmp33401 = inst_33343;
var inst_33342__$1 = tmp33399;
var inst_33343__$1 = tmp33401;
var inst_33344__$1 = tmp33400;
var inst_33345__$1 = inst_33353;
var state_33390__$1 = (function (){var statearr_33404 = state_33390;
(statearr_33404[(8)] = inst_33342__$1);

(statearr_33404[(14)] = inst_33352);

(statearr_33404[(10)] = inst_33344__$1);

(statearr_33404[(11)] = inst_33345__$1);

(statearr_33404[(12)] = inst_33343__$1);

return statearr_33404;
})();
var statearr_33405_33437 = state_33390__$1;
(statearr_33405_33437[(2)] = null);

(statearr_33405_33437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (22))){
var state_33390__$1 = state_33390;
var statearr_33406_33438 = state_33390__$1;
(statearr_33406_33438[(2)] = null);

(statearr_33406_33438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (6))){
var inst_33331 = (state_33390[(13)]);
var inst_33340 = f.call(null,inst_33331);
var inst_33341 = cljs.core.seq.call(null,inst_33340);
var inst_33342 = inst_33341;
var inst_33343 = null;
var inst_33344 = (0);
var inst_33345 = (0);
var state_33390__$1 = (function (){var statearr_33407 = state_33390;
(statearr_33407[(8)] = inst_33342);

(statearr_33407[(10)] = inst_33344);

(statearr_33407[(11)] = inst_33345);

(statearr_33407[(12)] = inst_33343);

return statearr_33407;
})();
var statearr_33408_33439 = state_33390__$1;
(statearr_33408_33439[(2)] = null);

(statearr_33408_33439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (17))){
var inst_33356 = (state_33390[(7)]);
var inst_33360 = cljs.core.chunk_first.call(null,inst_33356);
var inst_33361 = cljs.core.chunk_rest.call(null,inst_33356);
var inst_33362 = cljs.core.count.call(null,inst_33360);
var inst_33342 = inst_33361;
var inst_33343 = inst_33360;
var inst_33344 = inst_33362;
var inst_33345 = (0);
var state_33390__$1 = (function (){var statearr_33409 = state_33390;
(statearr_33409[(8)] = inst_33342);

(statearr_33409[(10)] = inst_33344);

(statearr_33409[(11)] = inst_33345);

(statearr_33409[(12)] = inst_33343);

return statearr_33409;
})();
var statearr_33410_33440 = state_33390__$1;
(statearr_33410_33440[(2)] = null);

(statearr_33410_33440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (3))){
var inst_33388 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33390__$1,inst_33388);
} else {
if((state_val_33391 === (12))){
var inst_33376 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33411_33441 = state_33390__$1;
(statearr_33411_33441[(2)] = inst_33376);

(statearr_33411_33441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (2))){
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(4),in$);
} else {
if((state_val_33391 === (23))){
var inst_33384 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33412_33442 = state_33390__$1;
(statearr_33412_33442[(2)] = inst_33384);

(statearr_33412_33442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (19))){
var inst_33371 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33413_33443 = state_33390__$1;
(statearr_33413_33443[(2)] = inst_33371);

(statearr_33413_33443[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (11))){
var inst_33342 = (state_33390[(8)]);
var inst_33356 = (state_33390[(7)]);
var inst_33356__$1 = cljs.core.seq.call(null,inst_33342);
var state_33390__$1 = (function (){var statearr_33414 = state_33390;
(statearr_33414[(7)] = inst_33356__$1);

return statearr_33414;
})();
if(inst_33356__$1){
var statearr_33415_33444 = state_33390__$1;
(statearr_33415_33444[(1)] = (14));

} else {
var statearr_33416_33445 = state_33390__$1;
(statearr_33416_33445[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (9))){
var inst_33378 = (state_33390[(2)]);
var inst_33379 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33390__$1 = (function (){var statearr_33417 = state_33390;
(statearr_33417[(15)] = inst_33378);

return statearr_33417;
})();
if(cljs.core.truth_(inst_33379)){
var statearr_33418_33446 = state_33390__$1;
(statearr_33418_33446[(1)] = (21));

} else {
var statearr_33419_33447 = state_33390__$1;
(statearr_33419_33447[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (5))){
var inst_33334 = cljs.core.async.close_BANG_.call(null,out);
var state_33390__$1 = state_33390;
var statearr_33420_33448 = state_33390__$1;
(statearr_33420_33448[(2)] = inst_33334);

(statearr_33420_33448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (14))){
var inst_33356 = (state_33390[(7)]);
var inst_33358 = cljs.core.chunked_seq_QMARK_.call(null,inst_33356);
var state_33390__$1 = state_33390;
if(inst_33358){
var statearr_33421_33449 = state_33390__$1;
(statearr_33421_33449[(1)] = (17));

} else {
var statearr_33422_33450 = state_33390__$1;
(statearr_33422_33450[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (16))){
var inst_33374 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33423_33451 = state_33390__$1;
(statearr_33423_33451[(2)] = inst_33374);

(statearr_33423_33451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (10))){
var inst_33345 = (state_33390[(11)]);
var inst_33343 = (state_33390[(12)]);
var inst_33350 = cljs.core._nth.call(null,inst_33343,inst_33345);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33390__$1,(13),out,inst_33350);
} else {
if((state_val_33391 === (18))){
var inst_33356 = (state_33390[(7)]);
var inst_33365 = cljs.core.first.call(null,inst_33356);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33390__$1,(20),out,inst_33365);
} else {
if((state_val_33391 === (8))){
var inst_33344 = (state_33390[(10)]);
var inst_33345 = (state_33390[(11)]);
var inst_33347 = (inst_33345 < inst_33344);
var inst_33348 = inst_33347;
var state_33390__$1 = state_33390;
if(cljs.core.truth_(inst_33348)){
var statearr_33424_33452 = state_33390__$1;
(statearr_33424_33452[(1)] = (10));

} else {
var statearr_33425_33453 = state_33390__$1;
(statearr_33425_33453[(1)] = (11));

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
});})(c__31788__auto__))
;
return ((function (switch__31700__auto__,c__31788__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31701__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31701__auto____0 = (function (){
var statearr_33426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33426[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31701__auto__);

(statearr_33426[(1)] = (1));

return statearr_33426;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31701__auto____1 = (function (state_33390){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_33390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e33427){if((e33427 instanceof Object)){
var ex__31704__auto__ = e33427;
var statearr_33428_33454 = state_33390;
(statearr_33428_33454[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33455 = state_33390;
state_33390 = G__33455;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31701__auto__ = function(state_33390){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31701__auto____1.call(this,state_33390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31701__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31701__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto__))
})();
var state__31790__auto__ = (function (){var statearr_33429 = f__31789__auto__.call(null);
(statearr_33429[(6)] = c__31788__auto__);

return statearr_33429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto__))
);

return c__31788__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33457 = arguments.length;
switch (G__33457) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33460 = arguments.length;
switch (G__33460) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33463 = arguments.length;
switch (G__33463) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31788__auto___33510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___33510,out){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___33510,out){
return (function (state_33487){
var state_val_33488 = (state_33487[(1)]);
if((state_val_33488 === (7))){
var inst_33482 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
var statearr_33489_33511 = state_33487__$1;
(statearr_33489_33511[(2)] = inst_33482);

(statearr_33489_33511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (1))){
var inst_33464 = null;
var state_33487__$1 = (function (){var statearr_33490 = state_33487;
(statearr_33490[(7)] = inst_33464);

return statearr_33490;
})();
var statearr_33491_33512 = state_33487__$1;
(statearr_33491_33512[(2)] = null);

(statearr_33491_33512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (4))){
var inst_33467 = (state_33487[(8)]);
var inst_33467__$1 = (state_33487[(2)]);
var inst_33468 = (inst_33467__$1 == null);
var inst_33469 = cljs.core.not.call(null,inst_33468);
var state_33487__$1 = (function (){var statearr_33492 = state_33487;
(statearr_33492[(8)] = inst_33467__$1);

return statearr_33492;
})();
if(inst_33469){
var statearr_33493_33513 = state_33487__$1;
(statearr_33493_33513[(1)] = (5));

} else {
var statearr_33494_33514 = state_33487__$1;
(statearr_33494_33514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (6))){
var state_33487__$1 = state_33487;
var statearr_33495_33515 = state_33487__$1;
(statearr_33495_33515[(2)] = null);

(statearr_33495_33515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (3))){
var inst_33484 = (state_33487[(2)]);
var inst_33485 = cljs.core.async.close_BANG_.call(null,out);
var state_33487__$1 = (function (){var statearr_33496 = state_33487;
(statearr_33496[(9)] = inst_33484);

return statearr_33496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33487__$1,inst_33485);
} else {
if((state_val_33488 === (2))){
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33487__$1,(4),ch);
} else {
if((state_val_33488 === (11))){
var inst_33467 = (state_33487[(8)]);
var inst_33476 = (state_33487[(2)]);
var inst_33464 = inst_33467;
var state_33487__$1 = (function (){var statearr_33497 = state_33487;
(statearr_33497[(10)] = inst_33476);

(statearr_33497[(7)] = inst_33464);

return statearr_33497;
})();
var statearr_33498_33516 = state_33487__$1;
(statearr_33498_33516[(2)] = null);

(statearr_33498_33516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (9))){
var inst_33467 = (state_33487[(8)]);
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33487__$1,(11),out,inst_33467);
} else {
if((state_val_33488 === (5))){
var inst_33467 = (state_33487[(8)]);
var inst_33464 = (state_33487[(7)]);
var inst_33471 = cljs.core._EQ_.call(null,inst_33467,inst_33464);
var state_33487__$1 = state_33487;
if(inst_33471){
var statearr_33500_33517 = state_33487__$1;
(statearr_33500_33517[(1)] = (8));

} else {
var statearr_33501_33518 = state_33487__$1;
(statearr_33501_33518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (10))){
var inst_33479 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
var statearr_33502_33519 = state_33487__$1;
(statearr_33502_33519[(2)] = inst_33479);

(statearr_33502_33519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (8))){
var inst_33464 = (state_33487[(7)]);
var tmp33499 = inst_33464;
var inst_33464__$1 = tmp33499;
var state_33487__$1 = (function (){var statearr_33503 = state_33487;
(statearr_33503[(7)] = inst_33464__$1);

return statearr_33503;
})();
var statearr_33504_33520 = state_33487__$1;
(statearr_33504_33520[(2)] = null);

(statearr_33504_33520[(1)] = (2));


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
});})(c__31788__auto___33510,out))
;
return ((function (switch__31700__auto__,c__31788__auto___33510,out){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_33505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33505[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_33505[(1)] = (1));

return statearr_33505;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_33487){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_33487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e33506){if((e33506 instanceof Object)){
var ex__31704__auto__ = e33506;
var statearr_33507_33521 = state_33487;
(statearr_33507_33521[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33522 = state_33487;
state_33487 = G__33522;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_33487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_33487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___33510,out))
})();
var state__31790__auto__ = (function (){var statearr_33508 = f__31789__auto__.call(null);
(statearr_33508[(6)] = c__31788__auto___33510);

return statearr_33508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___33510,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33524 = arguments.length;
switch (G__33524) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31788__auto___33590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___33590,out){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___33590,out){
return (function (state_33562){
var state_val_33563 = (state_33562[(1)]);
if((state_val_33563 === (7))){
var inst_33558 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
var statearr_33564_33591 = state_33562__$1;
(statearr_33564_33591[(2)] = inst_33558);

(statearr_33564_33591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (1))){
var inst_33525 = (new Array(n));
var inst_33526 = inst_33525;
var inst_33527 = (0);
var state_33562__$1 = (function (){var statearr_33565 = state_33562;
(statearr_33565[(7)] = inst_33526);

(statearr_33565[(8)] = inst_33527);

return statearr_33565;
})();
var statearr_33566_33592 = state_33562__$1;
(statearr_33566_33592[(2)] = null);

(statearr_33566_33592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (4))){
var inst_33530 = (state_33562[(9)]);
var inst_33530__$1 = (state_33562[(2)]);
var inst_33531 = (inst_33530__$1 == null);
var inst_33532 = cljs.core.not.call(null,inst_33531);
var state_33562__$1 = (function (){var statearr_33567 = state_33562;
(statearr_33567[(9)] = inst_33530__$1);

return statearr_33567;
})();
if(inst_33532){
var statearr_33568_33593 = state_33562__$1;
(statearr_33568_33593[(1)] = (5));

} else {
var statearr_33569_33594 = state_33562__$1;
(statearr_33569_33594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (15))){
var inst_33552 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
var statearr_33570_33595 = state_33562__$1;
(statearr_33570_33595[(2)] = inst_33552);

(statearr_33570_33595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (13))){
var state_33562__$1 = state_33562;
var statearr_33571_33596 = state_33562__$1;
(statearr_33571_33596[(2)] = null);

(statearr_33571_33596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (6))){
var inst_33527 = (state_33562[(8)]);
var inst_33548 = (inst_33527 > (0));
var state_33562__$1 = state_33562;
if(cljs.core.truth_(inst_33548)){
var statearr_33572_33597 = state_33562__$1;
(statearr_33572_33597[(1)] = (12));

} else {
var statearr_33573_33598 = state_33562__$1;
(statearr_33573_33598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (3))){
var inst_33560 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33562__$1,inst_33560);
} else {
if((state_val_33563 === (12))){
var inst_33526 = (state_33562[(7)]);
var inst_33550 = cljs.core.vec.call(null,inst_33526);
var state_33562__$1 = state_33562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33562__$1,(15),out,inst_33550);
} else {
if((state_val_33563 === (2))){
var state_33562__$1 = state_33562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33562__$1,(4),ch);
} else {
if((state_val_33563 === (11))){
var inst_33542 = (state_33562[(2)]);
var inst_33543 = (new Array(n));
var inst_33526 = inst_33543;
var inst_33527 = (0);
var state_33562__$1 = (function (){var statearr_33574 = state_33562;
(statearr_33574[(7)] = inst_33526);

(statearr_33574[(8)] = inst_33527);

(statearr_33574[(10)] = inst_33542);

return statearr_33574;
})();
var statearr_33575_33599 = state_33562__$1;
(statearr_33575_33599[(2)] = null);

(statearr_33575_33599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (9))){
var inst_33526 = (state_33562[(7)]);
var inst_33540 = cljs.core.vec.call(null,inst_33526);
var state_33562__$1 = state_33562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33562__$1,(11),out,inst_33540);
} else {
if((state_val_33563 === (5))){
var inst_33526 = (state_33562[(7)]);
var inst_33535 = (state_33562[(11)]);
var inst_33527 = (state_33562[(8)]);
var inst_33530 = (state_33562[(9)]);
var inst_33534 = (inst_33526[inst_33527] = inst_33530);
var inst_33535__$1 = (inst_33527 + (1));
var inst_33536 = (inst_33535__$1 < n);
var state_33562__$1 = (function (){var statearr_33576 = state_33562;
(statearr_33576[(11)] = inst_33535__$1);

(statearr_33576[(12)] = inst_33534);

return statearr_33576;
})();
if(cljs.core.truth_(inst_33536)){
var statearr_33577_33600 = state_33562__$1;
(statearr_33577_33600[(1)] = (8));

} else {
var statearr_33578_33601 = state_33562__$1;
(statearr_33578_33601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (14))){
var inst_33555 = (state_33562[(2)]);
var inst_33556 = cljs.core.async.close_BANG_.call(null,out);
var state_33562__$1 = (function (){var statearr_33580 = state_33562;
(statearr_33580[(13)] = inst_33555);

return statearr_33580;
})();
var statearr_33581_33602 = state_33562__$1;
(statearr_33581_33602[(2)] = inst_33556);

(statearr_33581_33602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (10))){
var inst_33546 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
var statearr_33582_33603 = state_33562__$1;
(statearr_33582_33603[(2)] = inst_33546);

(statearr_33582_33603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (8))){
var inst_33526 = (state_33562[(7)]);
var inst_33535 = (state_33562[(11)]);
var tmp33579 = inst_33526;
var inst_33526__$1 = tmp33579;
var inst_33527 = inst_33535;
var state_33562__$1 = (function (){var statearr_33583 = state_33562;
(statearr_33583[(7)] = inst_33526__$1);

(statearr_33583[(8)] = inst_33527);

return statearr_33583;
})();
var statearr_33584_33604 = state_33562__$1;
(statearr_33584_33604[(2)] = null);

(statearr_33584_33604[(1)] = (2));


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
});})(c__31788__auto___33590,out))
;
return ((function (switch__31700__auto__,c__31788__auto___33590,out){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_33585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33585[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_33585[(1)] = (1));

return statearr_33585;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_33562){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_33562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e33586){if((e33586 instanceof Object)){
var ex__31704__auto__ = e33586;
var statearr_33587_33605 = state_33562;
(statearr_33587_33605[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33606 = state_33562;
state_33562 = G__33606;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_33562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_33562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___33590,out))
})();
var state__31790__auto__ = (function (){var statearr_33588 = f__31789__auto__.call(null);
(statearr_33588[(6)] = c__31788__auto___33590);

return statearr_33588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___33590,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33608 = arguments.length;
switch (G__33608) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31788__auto___33678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31788__auto___33678,out){
return (function (){
var f__31789__auto__ = (function (){var switch__31700__auto__ = ((function (c__31788__auto___33678,out){
return (function (state_33650){
var state_val_33651 = (state_33650[(1)]);
if((state_val_33651 === (7))){
var inst_33646 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33652_33679 = state_33650__$1;
(statearr_33652_33679[(2)] = inst_33646);

(statearr_33652_33679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (1))){
var inst_33609 = [];
var inst_33610 = inst_33609;
var inst_33611 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33650__$1 = (function (){var statearr_33653 = state_33650;
(statearr_33653[(7)] = inst_33610);

(statearr_33653[(8)] = inst_33611);

return statearr_33653;
})();
var statearr_33654_33680 = state_33650__$1;
(statearr_33654_33680[(2)] = null);

(statearr_33654_33680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (4))){
var inst_33614 = (state_33650[(9)]);
var inst_33614__$1 = (state_33650[(2)]);
var inst_33615 = (inst_33614__$1 == null);
var inst_33616 = cljs.core.not.call(null,inst_33615);
var state_33650__$1 = (function (){var statearr_33655 = state_33650;
(statearr_33655[(9)] = inst_33614__$1);

return statearr_33655;
})();
if(inst_33616){
var statearr_33656_33681 = state_33650__$1;
(statearr_33656_33681[(1)] = (5));

} else {
var statearr_33657_33682 = state_33650__$1;
(statearr_33657_33682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (15))){
var inst_33640 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33658_33683 = state_33650__$1;
(statearr_33658_33683[(2)] = inst_33640);

(statearr_33658_33683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (13))){
var state_33650__$1 = state_33650;
var statearr_33659_33684 = state_33650__$1;
(statearr_33659_33684[(2)] = null);

(statearr_33659_33684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (6))){
var inst_33610 = (state_33650[(7)]);
var inst_33635 = inst_33610.length;
var inst_33636 = (inst_33635 > (0));
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33636)){
var statearr_33660_33685 = state_33650__$1;
(statearr_33660_33685[(1)] = (12));

} else {
var statearr_33661_33686 = state_33650__$1;
(statearr_33661_33686[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (3))){
var inst_33648 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33650__$1,inst_33648);
} else {
if((state_val_33651 === (12))){
var inst_33610 = (state_33650[(7)]);
var inst_33638 = cljs.core.vec.call(null,inst_33610);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33650__$1,(15),out,inst_33638);
} else {
if((state_val_33651 === (2))){
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33650__$1,(4),ch);
} else {
if((state_val_33651 === (11))){
var inst_33614 = (state_33650[(9)]);
var inst_33618 = (state_33650[(10)]);
var inst_33628 = (state_33650[(2)]);
var inst_33629 = [];
var inst_33630 = inst_33629.push(inst_33614);
var inst_33610 = inst_33629;
var inst_33611 = inst_33618;
var state_33650__$1 = (function (){var statearr_33662 = state_33650;
(statearr_33662[(7)] = inst_33610);

(statearr_33662[(8)] = inst_33611);

(statearr_33662[(11)] = inst_33628);

(statearr_33662[(12)] = inst_33630);

return statearr_33662;
})();
var statearr_33663_33687 = state_33650__$1;
(statearr_33663_33687[(2)] = null);

(statearr_33663_33687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (9))){
var inst_33610 = (state_33650[(7)]);
var inst_33626 = cljs.core.vec.call(null,inst_33610);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33650__$1,(11),out,inst_33626);
} else {
if((state_val_33651 === (5))){
var inst_33611 = (state_33650[(8)]);
var inst_33614 = (state_33650[(9)]);
var inst_33618 = (state_33650[(10)]);
var inst_33618__$1 = f.call(null,inst_33614);
var inst_33619 = cljs.core._EQ_.call(null,inst_33618__$1,inst_33611);
var inst_33620 = cljs.core.keyword_identical_QMARK_.call(null,inst_33611,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33621 = (inst_33619) || (inst_33620);
var state_33650__$1 = (function (){var statearr_33664 = state_33650;
(statearr_33664[(10)] = inst_33618__$1);

return statearr_33664;
})();
if(cljs.core.truth_(inst_33621)){
var statearr_33665_33688 = state_33650__$1;
(statearr_33665_33688[(1)] = (8));

} else {
var statearr_33666_33689 = state_33650__$1;
(statearr_33666_33689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (14))){
var inst_33643 = (state_33650[(2)]);
var inst_33644 = cljs.core.async.close_BANG_.call(null,out);
var state_33650__$1 = (function (){var statearr_33668 = state_33650;
(statearr_33668[(13)] = inst_33643);

return statearr_33668;
})();
var statearr_33669_33690 = state_33650__$1;
(statearr_33669_33690[(2)] = inst_33644);

(statearr_33669_33690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (10))){
var inst_33633 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33670_33691 = state_33650__$1;
(statearr_33670_33691[(2)] = inst_33633);

(statearr_33670_33691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (8))){
var inst_33610 = (state_33650[(7)]);
var inst_33614 = (state_33650[(9)]);
var inst_33618 = (state_33650[(10)]);
var inst_33623 = inst_33610.push(inst_33614);
var tmp33667 = inst_33610;
var inst_33610__$1 = tmp33667;
var inst_33611 = inst_33618;
var state_33650__$1 = (function (){var statearr_33671 = state_33650;
(statearr_33671[(7)] = inst_33610__$1);

(statearr_33671[(8)] = inst_33611);

(statearr_33671[(14)] = inst_33623);

return statearr_33671;
})();
var statearr_33672_33692 = state_33650__$1;
(statearr_33672_33692[(2)] = null);

(statearr_33672_33692[(1)] = (2));


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
});})(c__31788__auto___33678,out))
;
return ((function (switch__31700__auto__,c__31788__auto___33678,out){
return (function() {
var cljs$core$async$state_machine__31701__auto__ = null;
var cljs$core$async$state_machine__31701__auto____0 = (function (){
var statearr_33673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33673[(0)] = cljs$core$async$state_machine__31701__auto__);

(statearr_33673[(1)] = (1));

return statearr_33673;
});
var cljs$core$async$state_machine__31701__auto____1 = (function (state_33650){
while(true){
var ret_value__31702__auto__ = (function (){try{while(true){
var result__31703__auto__ = switch__31700__auto__.call(null,state_33650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31703__auto__;
}
break;
}
}catch (e33674){if((e33674 instanceof Object)){
var ex__31704__auto__ = e33674;
var statearr_33675_33693 = state_33650;
(statearr_33675_33693[(5)] = ex__31704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33694 = state_33650;
state_33650 = G__33694;
continue;
} else {
return ret_value__31702__auto__;
}
break;
}
});
cljs$core$async$state_machine__31701__auto__ = function(state_33650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31701__auto____1.call(this,state_33650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31701__auto____0;
cljs$core$async$state_machine__31701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31701__auto____1;
return cljs$core$async$state_machine__31701__auto__;
})()
;})(switch__31700__auto__,c__31788__auto___33678,out))
})();
var state__31790__auto__ = (function (){var statearr_33676 = f__31789__auto__.call(null);
(statearr_33676[(6)] = c__31788__auto___33678);

return statearr_33676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31790__auto__);
});})(c__31788__auto___33678,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503404159126
