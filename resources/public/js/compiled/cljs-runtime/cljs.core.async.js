goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46699 = arguments.length;
switch (G__46699) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46700 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46700 = (function (f,blockable,meta46701){
this.f = f;
this.blockable = blockable;
this.meta46701 = meta46701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46702,meta46701__$1){
var self__ = this;
var _46702__$1 = this;
return (new cljs.core.async.t_cljs$core$async46700(self__.f,self__.blockable,meta46701__$1));
}));

(cljs.core.async.t_cljs$core$async46700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46702){
var self__ = this;
var _46702__$1 = this;
return self__.meta46701;
}));

(cljs.core.async.t_cljs$core$async46700.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46700.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46701","meta46701",-1279189111,null)], null);
}));

(cljs.core.async.t_cljs$core$async46700.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46700");

(cljs.core.async.t_cljs$core$async46700.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46700");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46700.
 */
cljs.core.async.__GT_t_cljs$core$async46700 = (function cljs$core$async$__GT_t_cljs$core$async46700(f__$1,blockable__$1,meta46701){
return (new cljs.core.async.t_cljs$core$async46700(f__$1,blockable__$1,meta46701));
});

}

return (new cljs.core.async.t_cljs$core$async46700(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__46705 = arguments.length;
switch (G__46705) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46707 = arguments.length;
switch (G__46707) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__46709 = arguments.length;
switch (G__46709) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48159 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48159) : fn1.call(null,val_48159));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48159) : fn1.call(null,val_48159));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46711 = arguments.length;
switch (G__46711) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___48173 = n;
var x_48174 = (0);
while(true){
if((x_48174 < n__4666__auto___48173)){
(a[x_48174] = x_48174);

var G__48175 = (x_48174 + (1));
x_48174 = G__48175;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46712 = (function (flag,meta46713){
this.flag = flag;
this.meta46713 = meta46713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46714,meta46713__$1){
var self__ = this;
var _46714__$1 = this;
return (new cljs.core.async.t_cljs$core$async46712(self__.flag,meta46713__$1));
}));

(cljs.core.async.t_cljs$core$async46712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46714){
var self__ = this;
var _46714__$1 = this;
return self__.meta46713;
}));

(cljs.core.async.t_cljs$core$async46712.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46713","meta46713",-1780772072,null)], null);
}));

(cljs.core.async.t_cljs$core$async46712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46712");

(cljs.core.async.t_cljs$core$async46712.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46712.
 */
cljs.core.async.__GT_t_cljs$core$async46712 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46712(flag__$1,meta46713){
return (new cljs.core.async.t_cljs$core$async46712(flag__$1,meta46713));
});

}

return (new cljs.core.async.t_cljs$core$async46712(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46715 = (function (flag,cb,meta46716){
this.flag = flag;
this.cb = cb;
this.meta46716 = meta46716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46717,meta46716__$1){
var self__ = this;
var _46717__$1 = this;
return (new cljs.core.async.t_cljs$core$async46715(self__.flag,self__.cb,meta46716__$1));
}));

(cljs.core.async.t_cljs$core$async46715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46717){
var self__ = this;
var _46717__$1 = this;
return self__.meta46716;
}));

(cljs.core.async.t_cljs$core$async46715.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46715.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46716","meta46716",130209262,null)], null);
}));

(cljs.core.async.t_cljs$core$async46715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46715");

(cljs.core.async.t_cljs$core$async46715.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46715.
 */
cljs.core.async.__GT_t_cljs$core$async46715 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46715(flag__$1,cb__$1,meta46716){
return (new cljs.core.async.t_cljs$core$async46715(flag__$1,cb__$1,meta46716));
});

}

return (new cljs.core.async.t_cljs$core$async46715(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46718_SHARP_){
var G__46720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46718_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46720) : fret.call(null,G__46720));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46719_SHARP_){
var G__46721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46719_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46721) : fret.call(null,G__46721));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48233 = (i + (1));
i = G__48233;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4795__auto__ = [];
var len__4789__auto___48235 = arguments.length;
var i__4790__auto___48236 = (0);
while(true){
if((i__4790__auto___48236 < len__4789__auto___48235)){
args__4795__auto__.push((arguments[i__4790__auto___48236]));

var G__48237 = (i__4790__auto___48236 + (1));
i__4790__auto___48236 = G__48237;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46726){
var map__46727 = p__46726;
var map__46727__$1 = (((((!((map__46727 == null))))?(((((map__46727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46727):map__46727);
var opts = map__46727__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46724){
var G__46725 = cljs.core.first(seq46724);
var seq46724__$1 = cljs.core.next(seq46724);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46725,seq46724__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__46730 = arguments.length;
switch (G__46730) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46638__auto___48243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_46754){
var state_val_46755 = (state_46754[(1)]);
if((state_val_46755 === (7))){
var inst_46750 = (state_46754[(2)]);
var state_46754__$1 = state_46754;
var statearr_46756_48246 = state_46754__$1;
(statearr_46756_48246[(2)] = inst_46750);

(statearr_46756_48246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (1))){
var state_46754__$1 = state_46754;
var statearr_46757_48251 = state_46754__$1;
(statearr_46757_48251[(2)] = null);

(statearr_46757_48251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (4))){
var inst_46733 = (state_46754[(7)]);
var inst_46733__$1 = (state_46754[(2)]);
var inst_46734 = (inst_46733__$1 == null);
var state_46754__$1 = (function (){var statearr_46758 = state_46754;
(statearr_46758[(7)] = inst_46733__$1);

return statearr_46758;
})();
if(cljs.core.truth_(inst_46734)){
var statearr_46759_48252 = state_46754__$1;
(statearr_46759_48252[(1)] = (5));

} else {
var statearr_46760_48253 = state_46754__$1;
(statearr_46760_48253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (13))){
var state_46754__$1 = state_46754;
var statearr_46761_48255 = state_46754__$1;
(statearr_46761_48255[(2)] = null);

(statearr_46761_48255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (6))){
var inst_46733 = (state_46754[(7)]);
var state_46754__$1 = state_46754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46754__$1,(11),to,inst_46733);
} else {
if((state_val_46755 === (3))){
var inst_46752 = (state_46754[(2)]);
var state_46754__$1 = state_46754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46754__$1,inst_46752);
} else {
if((state_val_46755 === (12))){
var state_46754__$1 = state_46754;
var statearr_46762_48259 = state_46754__$1;
(statearr_46762_48259[(2)] = null);

(statearr_46762_48259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (2))){
var state_46754__$1 = state_46754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46754__$1,(4),from);
} else {
if((state_val_46755 === (11))){
var inst_46743 = (state_46754[(2)]);
var state_46754__$1 = state_46754;
if(cljs.core.truth_(inst_46743)){
var statearr_46763_48261 = state_46754__$1;
(statearr_46763_48261[(1)] = (12));

} else {
var statearr_46764_48262 = state_46754__$1;
(statearr_46764_48262[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (9))){
var state_46754__$1 = state_46754;
var statearr_46765_48263 = state_46754__$1;
(statearr_46765_48263[(2)] = null);

(statearr_46765_48263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (5))){
var state_46754__$1 = state_46754;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46766_48264 = state_46754__$1;
(statearr_46766_48264[(1)] = (8));

} else {
var statearr_46767_48265 = state_46754__$1;
(statearr_46767_48265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (14))){
var inst_46748 = (state_46754[(2)]);
var state_46754__$1 = state_46754;
var statearr_46768_48266 = state_46754__$1;
(statearr_46768_48266[(2)] = inst_46748);

(statearr_46768_48266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (10))){
var inst_46740 = (state_46754[(2)]);
var state_46754__$1 = state_46754;
var statearr_46769_48267 = state_46754__$1;
(statearr_46769_48267[(2)] = inst_46740);

(statearr_46769_48267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (8))){
var inst_46737 = cljs.core.async.close_BANG_(to);
var state_46754__$1 = state_46754;
var statearr_46770_48271 = state_46754__$1;
(statearr_46770_48271[(2)] = inst_46737);

(statearr_46770_48271[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_46771 = [null,null,null,null,null,null,null,null];
(statearr_46771[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_46771[(1)] = (1));

return statearr_46771;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_46754){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_46754);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e46772){if((e46772 instanceof Object)){
var ex__46544__auto__ = e46772;
var statearr_46773_48273 = state_46754;
(statearr_46773_48273[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48283 = state_46754;
state_46754 = G__48283;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_46754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_46754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_46774 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_46774[(6)] = c__46638__auto___48243);

return statearr_46774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__46775){
var vec__46776 = p__46775;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(1),null);
var job = vec__46776;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46638__auto___48290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_46783){
var state_val_46784 = (state_46783[(1)]);
if((state_val_46784 === (1))){
var state_46783__$1 = state_46783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46783__$1,(2),res,v);
} else {
if((state_val_46784 === (2))){
var inst_46780 = (state_46783[(2)]);
var inst_46781 = cljs.core.async.close_BANG_(res);
var state_46783__$1 = (function (){var statearr_46785 = state_46783;
(statearr_46785[(7)] = inst_46780);

return statearr_46785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46783__$1,inst_46781);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0 = (function (){
var statearr_46786 = [null,null,null,null,null,null,null,null];
(statearr_46786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__);

(statearr_46786[(1)] = (1));

return statearr_46786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1 = (function (state_46783){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_46783);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e46787){if((e46787 instanceof Object)){
var ex__46544__auto__ = e46787;
var statearr_46788_48294 = state_46783;
(statearr_46788_48294[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48295 = state_46783;
state_46783 = G__48295;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = function(state_46783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1.call(this,state_46783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_46789 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_46789[(6)] = c__46638__auto___48290);

return statearr_46789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46790){
var vec__46791 = p__46790;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46791,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46791,(1),null);
var job = vec__46791;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___48314 = n;
var __48315 = (0);
while(true){
if((__48315 < n__4666__auto___48314)){
var G__46794_48316 = type;
var G__46794_48317__$1 = (((G__46794_48316 instanceof cljs.core.Keyword))?G__46794_48316.fqn:null);
switch (G__46794_48317__$1) {
case "compute":
var c__46638__auto___48319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48315,c__46638__auto___48319,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async){
return (function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = ((function (__48315,c__46638__auto___48319,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async){
return (function (state_46807){
var state_val_46808 = (state_46807[(1)]);
if((state_val_46808 === (1))){
var state_46807__$1 = state_46807;
var statearr_46809_48323 = state_46807__$1;
(statearr_46809_48323[(2)] = null);

(statearr_46809_48323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (2))){
var state_46807__$1 = state_46807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46807__$1,(4),jobs);
} else {
if((state_val_46808 === (3))){
var inst_46805 = (state_46807[(2)]);
var state_46807__$1 = state_46807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46807__$1,inst_46805);
} else {
if((state_val_46808 === (4))){
var inst_46797 = (state_46807[(2)]);
var inst_46798 = process(inst_46797);
var state_46807__$1 = state_46807;
if(cljs.core.truth_(inst_46798)){
var statearr_46810_48327 = state_46807__$1;
(statearr_46810_48327[(1)] = (5));

} else {
var statearr_46811_48328 = state_46807__$1;
(statearr_46811_48328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (5))){
var state_46807__$1 = state_46807;
var statearr_46812_48329 = state_46807__$1;
(statearr_46812_48329[(2)] = null);

(statearr_46812_48329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (6))){
var state_46807__$1 = state_46807;
var statearr_46813_48359 = state_46807__$1;
(statearr_46813_48359[(2)] = null);

(statearr_46813_48359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (7))){
var inst_46803 = (state_46807[(2)]);
var state_46807__$1 = state_46807;
var statearr_46814_48360 = state_46807__$1;
(statearr_46814_48360[(2)] = inst_46803);

(statearr_46814_48360[(1)] = (3));


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
});})(__48315,c__46638__auto___48319,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async))
;
return ((function (__48315,switch__46540__auto__,c__46638__auto___48319,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0 = (function (){
var statearr_46815 = [null,null,null,null,null,null,null];
(statearr_46815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__);

(statearr_46815[(1)] = (1));

return statearr_46815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1 = (function (state_46807){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_46807);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e46816){if((e46816 instanceof Object)){
var ex__46544__auto__ = e46816;
var statearr_46817_48370 = state_46807;
(statearr_46817_48370[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48371 = state_46807;
state_46807 = G__48371;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = function(state_46807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1.call(this,state_46807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__;
})()
;})(__48315,switch__46540__auto__,c__46638__auto___48319,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async))
})();
var state__46640__auto__ = (function (){var statearr_46818 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_46818[(6)] = c__46638__auto___48319);

return statearr_46818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
});})(__48315,c__46638__auto___48319,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async))
);


break;
case "async":
var c__46638__auto___48378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48315,c__46638__auto___48378,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async){
return (function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = ((function (__48315,c__46638__auto___48378,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async){
return (function (state_46831){
var state_val_46832 = (state_46831[(1)]);
if((state_val_46832 === (1))){
var state_46831__$1 = state_46831;
var statearr_46833_48379 = state_46831__$1;
(statearr_46833_48379[(2)] = null);

(statearr_46833_48379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (2))){
var state_46831__$1 = state_46831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46831__$1,(4),jobs);
} else {
if((state_val_46832 === (3))){
var inst_46829 = (state_46831[(2)]);
var state_46831__$1 = state_46831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46831__$1,inst_46829);
} else {
if((state_val_46832 === (4))){
var inst_46821 = (state_46831[(2)]);
var inst_46822 = async(inst_46821);
var state_46831__$1 = state_46831;
if(cljs.core.truth_(inst_46822)){
var statearr_46834_48381 = state_46831__$1;
(statearr_46834_48381[(1)] = (5));

} else {
var statearr_46835_48382 = state_46831__$1;
(statearr_46835_48382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (5))){
var state_46831__$1 = state_46831;
var statearr_46836_48383 = state_46831__$1;
(statearr_46836_48383[(2)] = null);

(statearr_46836_48383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (6))){
var state_46831__$1 = state_46831;
var statearr_46837_48384 = state_46831__$1;
(statearr_46837_48384[(2)] = null);

(statearr_46837_48384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (7))){
var inst_46827 = (state_46831[(2)]);
var state_46831__$1 = state_46831;
var statearr_46838_48385 = state_46831__$1;
(statearr_46838_48385[(2)] = inst_46827);

(statearr_46838_48385[(1)] = (3));


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
});})(__48315,c__46638__auto___48378,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async))
;
return ((function (__48315,switch__46540__auto__,c__46638__auto___48378,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0 = (function (){
var statearr_46839 = [null,null,null,null,null,null,null];
(statearr_46839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__);

(statearr_46839[(1)] = (1));

return statearr_46839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1 = (function (state_46831){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_46831);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e46840){if((e46840 instanceof Object)){
var ex__46544__auto__ = e46840;
var statearr_46841_48386 = state_46831;
(statearr_46841_48386[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48387 = state_46831;
state_46831 = G__48387;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = function(state_46831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1.call(this,state_46831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__;
})()
;})(__48315,switch__46540__auto__,c__46638__auto___48378,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async))
})();
var state__46640__auto__ = (function (){var statearr_46842 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_46842[(6)] = c__46638__auto___48378);

return statearr_46842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
});})(__48315,c__46638__auto___48378,G__46794_48316,G__46794_48317__$1,n__4666__auto___48314,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46794_48317__$1)].join('')));

}

var G__48388 = (__48315 + (1));
__48315 = G__48388;
continue;
} else {
}
break;
}

var c__46638__auto___48389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_46864){
var state_val_46865 = (state_46864[(1)]);
if((state_val_46865 === (7))){
var inst_46860 = (state_46864[(2)]);
var state_46864__$1 = state_46864;
var statearr_46866_48390 = state_46864__$1;
(statearr_46866_48390[(2)] = inst_46860);

(statearr_46866_48390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (1))){
var state_46864__$1 = state_46864;
var statearr_46867_48391 = state_46864__$1;
(statearr_46867_48391[(2)] = null);

(statearr_46867_48391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (4))){
var inst_46845 = (state_46864[(7)]);
var inst_46845__$1 = (state_46864[(2)]);
var inst_46846 = (inst_46845__$1 == null);
var state_46864__$1 = (function (){var statearr_46868 = state_46864;
(statearr_46868[(7)] = inst_46845__$1);

return statearr_46868;
})();
if(cljs.core.truth_(inst_46846)){
var statearr_46869_48392 = state_46864__$1;
(statearr_46869_48392[(1)] = (5));

} else {
var statearr_46870_48393 = state_46864__$1;
(statearr_46870_48393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (6))){
var inst_46850 = (state_46864[(8)]);
var inst_46845 = (state_46864[(7)]);
var inst_46850__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46852 = [inst_46845,inst_46850__$1];
var inst_46853 = (new cljs.core.PersistentVector(null,2,(5),inst_46851,inst_46852,null));
var state_46864__$1 = (function (){var statearr_46871 = state_46864;
(statearr_46871[(8)] = inst_46850__$1);

return statearr_46871;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46864__$1,(8),jobs,inst_46853);
} else {
if((state_val_46865 === (3))){
var inst_46862 = (state_46864[(2)]);
var state_46864__$1 = state_46864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46864__$1,inst_46862);
} else {
if((state_val_46865 === (2))){
var state_46864__$1 = state_46864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46864__$1,(4),from);
} else {
if((state_val_46865 === (9))){
var inst_46857 = (state_46864[(2)]);
var state_46864__$1 = (function (){var statearr_46872 = state_46864;
(statearr_46872[(9)] = inst_46857);

return statearr_46872;
})();
var statearr_46873_48394 = state_46864__$1;
(statearr_46873_48394[(2)] = null);

(statearr_46873_48394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (5))){
var inst_46848 = cljs.core.async.close_BANG_(jobs);
var state_46864__$1 = state_46864;
var statearr_46874_48395 = state_46864__$1;
(statearr_46874_48395[(2)] = inst_46848);

(statearr_46874_48395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (8))){
var inst_46850 = (state_46864[(8)]);
var inst_46855 = (state_46864[(2)]);
var state_46864__$1 = (function (){var statearr_46875 = state_46864;
(statearr_46875[(10)] = inst_46855);

return statearr_46875;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46864__$1,(9),results,inst_46850);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0 = (function (){
var statearr_46876 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__);

(statearr_46876[(1)] = (1));

return statearr_46876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1 = (function (state_46864){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_46864);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e46877){if((e46877 instanceof Object)){
var ex__46544__auto__ = e46877;
var statearr_46878_48396 = state_46864;
(statearr_46878_48396[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48397 = state_46864;
state_46864 = G__48397;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = function(state_46864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1.call(this,state_46864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_46879 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_46879[(6)] = c__46638__auto___48389);

return statearr_46879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


var c__46638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_46917){
var state_val_46918 = (state_46917[(1)]);
if((state_val_46918 === (7))){
var inst_46913 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46919_48400 = state_46917__$1;
(statearr_46919_48400[(2)] = inst_46913);

(statearr_46919_48400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (20))){
var state_46917__$1 = state_46917;
var statearr_46920_48401 = state_46917__$1;
(statearr_46920_48401[(2)] = null);

(statearr_46920_48401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (1))){
var state_46917__$1 = state_46917;
var statearr_46921_48402 = state_46917__$1;
(statearr_46921_48402[(2)] = null);

(statearr_46921_48402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (4))){
var inst_46882 = (state_46917[(7)]);
var inst_46882__$1 = (state_46917[(2)]);
var inst_46883 = (inst_46882__$1 == null);
var state_46917__$1 = (function (){var statearr_46922 = state_46917;
(statearr_46922[(7)] = inst_46882__$1);

return statearr_46922;
})();
if(cljs.core.truth_(inst_46883)){
var statearr_46923_48409 = state_46917__$1;
(statearr_46923_48409[(1)] = (5));

} else {
var statearr_46924_48410 = state_46917__$1;
(statearr_46924_48410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (15))){
var inst_46895 = (state_46917[(8)]);
var state_46917__$1 = state_46917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46917__$1,(18),to,inst_46895);
} else {
if((state_val_46918 === (21))){
var inst_46908 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46925_48412 = state_46917__$1;
(statearr_46925_48412[(2)] = inst_46908);

(statearr_46925_48412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (13))){
var inst_46910 = (state_46917[(2)]);
var state_46917__$1 = (function (){var statearr_46926 = state_46917;
(statearr_46926[(9)] = inst_46910);

return statearr_46926;
})();
var statearr_46927_48413 = state_46917__$1;
(statearr_46927_48413[(2)] = null);

(statearr_46927_48413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (6))){
var inst_46882 = (state_46917[(7)]);
var state_46917__$1 = state_46917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46917__$1,(11),inst_46882);
} else {
if((state_val_46918 === (17))){
var inst_46903 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
if(cljs.core.truth_(inst_46903)){
var statearr_46928_48416 = state_46917__$1;
(statearr_46928_48416[(1)] = (19));

} else {
var statearr_46929_48417 = state_46917__$1;
(statearr_46929_48417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (3))){
var inst_46915 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46917__$1,inst_46915);
} else {
if((state_val_46918 === (12))){
var inst_46892 = (state_46917[(10)]);
var state_46917__$1 = state_46917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46917__$1,(14),inst_46892);
} else {
if((state_val_46918 === (2))){
var state_46917__$1 = state_46917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46917__$1,(4),results);
} else {
if((state_val_46918 === (19))){
var state_46917__$1 = state_46917;
var statearr_46930_48418 = state_46917__$1;
(statearr_46930_48418[(2)] = null);

(statearr_46930_48418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (11))){
var inst_46892 = (state_46917[(2)]);
var state_46917__$1 = (function (){var statearr_46931 = state_46917;
(statearr_46931[(10)] = inst_46892);

return statearr_46931;
})();
var statearr_46932_48419 = state_46917__$1;
(statearr_46932_48419[(2)] = null);

(statearr_46932_48419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (9))){
var state_46917__$1 = state_46917;
var statearr_46933_48420 = state_46917__$1;
(statearr_46933_48420[(2)] = null);

(statearr_46933_48420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (5))){
var state_46917__$1 = state_46917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46934_48421 = state_46917__$1;
(statearr_46934_48421[(1)] = (8));

} else {
var statearr_46935_48422 = state_46917__$1;
(statearr_46935_48422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (14))){
var inst_46895 = (state_46917[(8)]);
var inst_46895__$1 = (state_46917[(2)]);
var inst_46896 = (inst_46895__$1 == null);
var inst_46897 = cljs.core.not(inst_46896);
var state_46917__$1 = (function (){var statearr_46936 = state_46917;
(statearr_46936[(8)] = inst_46895__$1);

return statearr_46936;
})();
if(inst_46897){
var statearr_46937_48424 = state_46917__$1;
(statearr_46937_48424[(1)] = (15));

} else {
var statearr_46938_48428 = state_46917__$1;
(statearr_46938_48428[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (16))){
var state_46917__$1 = state_46917;
var statearr_46939_48429 = state_46917__$1;
(statearr_46939_48429[(2)] = false);

(statearr_46939_48429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (10))){
var inst_46889 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46940_48430 = state_46917__$1;
(statearr_46940_48430[(2)] = inst_46889);

(statearr_46940_48430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (18))){
var inst_46900 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46941_48433 = state_46917__$1;
(statearr_46941_48433[(2)] = inst_46900);

(statearr_46941_48433[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (8))){
var inst_46886 = cljs.core.async.close_BANG_(to);
var state_46917__$1 = state_46917;
var statearr_46942_48436 = state_46917__$1;
(statearr_46942_48436[(2)] = inst_46886);

(statearr_46942_48436[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0 = (function (){
var statearr_46943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__);

(statearr_46943[(1)] = (1));

return statearr_46943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1 = (function (state_46917){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_46917);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e46944){if((e46944 instanceof Object)){
var ex__46544__auto__ = e46944;
var statearr_46945_48450 = state_46917;
(statearr_46945_48450[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46944;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48451 = state_46917;
state_46917 = G__48451;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__ = function(state_46917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1.call(this,state_46917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_46946 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_46946[(6)] = c__46638__auto__);

return statearr_46946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));

return c__46638__auto__;
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
var G__46948 = arguments.length;
switch (G__46948) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__46950 = arguments.length;
switch (G__46950) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__46952 = arguments.length;
switch (G__46952) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46638__auto___48455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_46978){
var state_val_46979 = (state_46978[(1)]);
if((state_val_46979 === (7))){
var inst_46974 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
var statearr_46980_48456 = state_46978__$1;
(statearr_46980_48456[(2)] = inst_46974);

(statearr_46980_48456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (1))){
var state_46978__$1 = state_46978;
var statearr_46981_48457 = state_46978__$1;
(statearr_46981_48457[(2)] = null);

(statearr_46981_48457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (4))){
var inst_46955 = (state_46978[(7)]);
var inst_46955__$1 = (state_46978[(2)]);
var inst_46956 = (inst_46955__$1 == null);
var state_46978__$1 = (function (){var statearr_46982 = state_46978;
(statearr_46982[(7)] = inst_46955__$1);

return statearr_46982;
})();
if(cljs.core.truth_(inst_46956)){
var statearr_46983_48458 = state_46978__$1;
(statearr_46983_48458[(1)] = (5));

} else {
var statearr_46984_48477 = state_46978__$1;
(statearr_46984_48477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (13))){
var state_46978__$1 = state_46978;
var statearr_46985_48478 = state_46978__$1;
(statearr_46985_48478[(2)] = null);

(statearr_46985_48478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (6))){
var inst_46955 = (state_46978[(7)]);
var inst_46961 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46955) : p.call(null,inst_46955));
var state_46978__$1 = state_46978;
if(cljs.core.truth_(inst_46961)){
var statearr_46986_48479 = state_46978__$1;
(statearr_46986_48479[(1)] = (9));

} else {
var statearr_46987_48480 = state_46978__$1;
(statearr_46987_48480[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (3))){
var inst_46976 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46978__$1,inst_46976);
} else {
if((state_val_46979 === (12))){
var state_46978__$1 = state_46978;
var statearr_46988_48481 = state_46978__$1;
(statearr_46988_48481[(2)] = null);

(statearr_46988_48481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (2))){
var state_46978__$1 = state_46978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46978__$1,(4),ch);
} else {
if((state_val_46979 === (11))){
var inst_46955 = (state_46978[(7)]);
var inst_46965 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46978__$1,(8),inst_46965,inst_46955);
} else {
if((state_val_46979 === (9))){
var state_46978__$1 = state_46978;
var statearr_46989_48482 = state_46978__$1;
(statearr_46989_48482[(2)] = tc);

(statearr_46989_48482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (5))){
var inst_46958 = cljs.core.async.close_BANG_(tc);
var inst_46959 = cljs.core.async.close_BANG_(fc);
var state_46978__$1 = (function (){var statearr_46990 = state_46978;
(statearr_46990[(8)] = inst_46958);

return statearr_46990;
})();
var statearr_46991_48483 = state_46978__$1;
(statearr_46991_48483[(2)] = inst_46959);

(statearr_46991_48483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (14))){
var inst_46972 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
var statearr_46992_48484 = state_46978__$1;
(statearr_46992_48484[(2)] = inst_46972);

(statearr_46992_48484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (10))){
var state_46978__$1 = state_46978;
var statearr_46993_48485 = state_46978__$1;
(statearr_46993_48485[(2)] = fc);

(statearr_46993_48485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (8))){
var inst_46967 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
if(cljs.core.truth_(inst_46967)){
var statearr_46994_48486 = state_46978__$1;
(statearr_46994_48486[(1)] = (12));

} else {
var statearr_46995_48487 = state_46978__$1;
(statearr_46995_48487[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_46996 = [null,null,null,null,null,null,null,null,null];
(statearr_46996[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_46996[(1)] = (1));

return statearr_46996;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_46978){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_46978);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e46997){if((e46997 instanceof Object)){
var ex__46544__auto__ = e46997;
var statearr_46998_48488 = state_46978;
(statearr_46998_48488[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48489 = state_46978;
state_46978 = G__48489;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_46978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_46978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_46999 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_46999[(6)] = c__46638__auto___48455);

return statearr_46999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47020){
var state_val_47021 = (state_47020[(1)]);
if((state_val_47021 === (7))){
var inst_47016 = (state_47020[(2)]);
var state_47020__$1 = state_47020;
var statearr_47022_48491 = state_47020__$1;
(statearr_47022_48491[(2)] = inst_47016);

(statearr_47022_48491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47021 === (1))){
var inst_47000 = init;
var state_47020__$1 = (function (){var statearr_47023 = state_47020;
(statearr_47023[(7)] = inst_47000);

return statearr_47023;
})();
var statearr_47024_48492 = state_47020__$1;
(statearr_47024_48492[(2)] = null);

(statearr_47024_48492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47021 === (4))){
var inst_47003 = (state_47020[(8)]);
var inst_47003__$1 = (state_47020[(2)]);
var inst_47004 = (inst_47003__$1 == null);
var state_47020__$1 = (function (){var statearr_47025 = state_47020;
(statearr_47025[(8)] = inst_47003__$1);

return statearr_47025;
})();
if(cljs.core.truth_(inst_47004)){
var statearr_47026_48493 = state_47020__$1;
(statearr_47026_48493[(1)] = (5));

} else {
var statearr_47027_48494 = state_47020__$1;
(statearr_47027_48494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47021 === (6))){
var inst_47000 = (state_47020[(7)]);
var inst_47003 = (state_47020[(8)]);
var inst_47007 = (state_47020[(9)]);
var inst_47007__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47000,inst_47003) : f.call(null,inst_47000,inst_47003));
var inst_47008 = cljs.core.reduced_QMARK_(inst_47007__$1);
var state_47020__$1 = (function (){var statearr_47028 = state_47020;
(statearr_47028[(9)] = inst_47007__$1);

return statearr_47028;
})();
if(inst_47008){
var statearr_47029_48495 = state_47020__$1;
(statearr_47029_48495[(1)] = (8));

} else {
var statearr_47030_48496 = state_47020__$1;
(statearr_47030_48496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47021 === (3))){
var inst_47018 = (state_47020[(2)]);
var state_47020__$1 = state_47020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47020__$1,inst_47018);
} else {
if((state_val_47021 === (2))){
var state_47020__$1 = state_47020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47020__$1,(4),ch);
} else {
if((state_val_47021 === (9))){
var inst_47007 = (state_47020[(9)]);
var inst_47000 = inst_47007;
var state_47020__$1 = (function (){var statearr_47031 = state_47020;
(statearr_47031[(7)] = inst_47000);

return statearr_47031;
})();
var statearr_47032_48497 = state_47020__$1;
(statearr_47032_48497[(2)] = null);

(statearr_47032_48497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47021 === (5))){
var inst_47000 = (state_47020[(7)]);
var state_47020__$1 = state_47020;
var statearr_47033_48498 = state_47020__$1;
(statearr_47033_48498[(2)] = inst_47000);

(statearr_47033_48498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47021 === (10))){
var inst_47014 = (state_47020[(2)]);
var state_47020__$1 = state_47020;
var statearr_47034_48499 = state_47020__$1;
(statearr_47034_48499[(2)] = inst_47014);

(statearr_47034_48499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47021 === (8))){
var inst_47007 = (state_47020[(9)]);
var inst_47010 = cljs.core.deref(inst_47007);
var state_47020__$1 = state_47020;
var statearr_47035_48500 = state_47020__$1;
(statearr_47035_48500[(2)] = inst_47010);

(statearr_47035_48500[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46541__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46541__auto____0 = (function (){
var statearr_47036 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47036[(0)] = cljs$core$async$reduce_$_state_machine__46541__auto__);

(statearr_47036[(1)] = (1));

return statearr_47036;
});
var cljs$core$async$reduce_$_state_machine__46541__auto____1 = (function (state_47020){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47020);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47037){if((e47037 instanceof Object)){
var ex__46544__auto__ = e47037;
var statearr_47038_48501 = state_47020;
(statearr_47038_48501[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48502 = state_47020;
state_47020 = G__48502;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46541__auto__ = function(state_47020){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46541__auto____1.call(this,state_47020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46541__auto____0;
cljs$core$async$reduce_$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46541__auto____1;
return cljs$core$async$reduce_$_state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47039 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47039[(6)] = c__46638__auto__);

return statearr_47039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));

return c__46638__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47045){
var state_val_47046 = (state_47045[(1)]);
if((state_val_47046 === (1))){
var inst_47040 = cljs.core.async.reduce(f__$1,init,ch);
var state_47045__$1 = state_47045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47045__$1,(2),inst_47040);
} else {
if((state_val_47046 === (2))){
var inst_47042 = (state_47045[(2)]);
var inst_47043 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47042) : f__$1.call(null,inst_47042));
var state_47045__$1 = state_47045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47045__$1,inst_47043);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46541__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46541__auto____0 = (function (){
var statearr_47047 = [null,null,null,null,null,null,null];
(statearr_47047[(0)] = cljs$core$async$transduce_$_state_machine__46541__auto__);

(statearr_47047[(1)] = (1));

return statearr_47047;
});
var cljs$core$async$transduce_$_state_machine__46541__auto____1 = (function (state_47045){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47045);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47048){if((e47048 instanceof Object)){
var ex__46544__auto__ = e47048;
var statearr_47049_48508 = state_47045;
(statearr_47049_48508[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47048;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48509 = state_47045;
state_47045 = G__48509;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46541__auto__ = function(state_47045){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46541__auto____1.call(this,state_47045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46541__auto____0;
cljs$core$async$transduce_$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46541__auto____1;
return cljs$core$async$transduce_$_state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47050 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47050[(6)] = c__46638__auto__);

return statearr_47050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));

return c__46638__auto__;
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
var G__47052 = arguments.length;
switch (G__47052) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47077){
var state_val_47078 = (state_47077[(1)]);
if((state_val_47078 === (7))){
var inst_47059 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
var statearr_47079_48512 = state_47077__$1;
(statearr_47079_48512[(2)] = inst_47059);

(statearr_47079_48512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (1))){
var inst_47053 = cljs.core.seq(coll);
var inst_47054 = inst_47053;
var state_47077__$1 = (function (){var statearr_47080 = state_47077;
(statearr_47080[(7)] = inst_47054);

return statearr_47080;
})();
var statearr_47081_48514 = state_47077__$1;
(statearr_47081_48514[(2)] = null);

(statearr_47081_48514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (4))){
var inst_47054 = (state_47077[(7)]);
var inst_47057 = cljs.core.first(inst_47054);
var state_47077__$1 = state_47077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47077__$1,(7),ch,inst_47057);
} else {
if((state_val_47078 === (13))){
var inst_47071 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
var statearr_47082_48516 = state_47077__$1;
(statearr_47082_48516[(2)] = inst_47071);

(statearr_47082_48516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (6))){
var inst_47062 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
if(cljs.core.truth_(inst_47062)){
var statearr_47083_48517 = state_47077__$1;
(statearr_47083_48517[(1)] = (8));

} else {
var statearr_47084_48519 = state_47077__$1;
(statearr_47084_48519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (3))){
var inst_47075 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47077__$1,inst_47075);
} else {
if((state_val_47078 === (12))){
var state_47077__$1 = state_47077;
var statearr_47085_48520 = state_47077__$1;
(statearr_47085_48520[(2)] = null);

(statearr_47085_48520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (2))){
var inst_47054 = (state_47077[(7)]);
var state_47077__$1 = state_47077;
if(cljs.core.truth_(inst_47054)){
var statearr_47086_48521 = state_47077__$1;
(statearr_47086_48521[(1)] = (4));

} else {
var statearr_47087_48522 = state_47077__$1;
(statearr_47087_48522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (11))){
var inst_47068 = cljs.core.async.close_BANG_(ch);
var state_47077__$1 = state_47077;
var statearr_47088_48523 = state_47077__$1;
(statearr_47088_48523[(2)] = inst_47068);

(statearr_47088_48523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (9))){
var state_47077__$1 = state_47077;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47089_48524 = state_47077__$1;
(statearr_47089_48524[(1)] = (11));

} else {
var statearr_47090_48526 = state_47077__$1;
(statearr_47090_48526[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (5))){
var inst_47054 = (state_47077[(7)]);
var state_47077__$1 = state_47077;
var statearr_47091_48528 = state_47077__$1;
(statearr_47091_48528[(2)] = inst_47054);

(statearr_47091_48528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (10))){
var inst_47073 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
var statearr_47092_48529 = state_47077__$1;
(statearr_47092_48529[(2)] = inst_47073);

(statearr_47092_48529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (8))){
var inst_47054 = (state_47077[(7)]);
var inst_47064 = cljs.core.next(inst_47054);
var inst_47054__$1 = inst_47064;
var state_47077__$1 = (function (){var statearr_47093 = state_47077;
(statearr_47093[(7)] = inst_47054__$1);

return statearr_47093;
})();
var statearr_47094_48530 = state_47077__$1;
(statearr_47094_48530[(2)] = null);

(statearr_47094_48530[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_47095 = [null,null,null,null,null,null,null,null];
(statearr_47095[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_47095[(1)] = (1));

return statearr_47095;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_47077){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47077);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47096){if((e47096 instanceof Object)){
var ex__46544__auto__ = e47096;
var statearr_47097_48531 = state_47077;
(statearr_47097_48531[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48532 = state_47077;
state_47077 = G__48532;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_47077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_47077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47098 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47098[(6)] = c__46638__auto__);

return statearr_47098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));

return c__46638__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47099 = (function (ch,cs,meta47100){
this.ch = ch;
this.cs = cs;
this.meta47100 = meta47100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47101,meta47100__$1){
var self__ = this;
var _47101__$1 = this;
return (new cljs.core.async.t_cljs$core$async47099(self__.ch,self__.cs,meta47100__$1));
}));

(cljs.core.async.t_cljs$core$async47099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47101){
var self__ = this;
var _47101__$1 = this;
return self__.meta47100;
}));

(cljs.core.async.t_cljs$core$async47099.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47099.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47099.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47099.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47099.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47100","meta47100",-1544658729,null)], null);
}));

(cljs.core.async.t_cljs$core$async47099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47099");

(cljs.core.async.t_cljs$core$async47099.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47099.
 */
cljs.core.async.__GT_t_cljs$core$async47099 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47099(ch__$1,cs__$1,meta47100){
return (new cljs.core.async.t_cljs$core$async47099(ch__$1,cs__$1,meta47100));
});

}

return (new cljs.core.async.t_cljs$core$async47099(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46638__auto___48536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47236){
var state_val_47237 = (state_47236[(1)]);
if((state_val_47237 === (7))){
var inst_47232 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47238_48537 = state_47236__$1;
(statearr_47238_48537[(2)] = inst_47232);

(statearr_47238_48537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (20))){
var inst_47135 = (state_47236[(7)]);
var inst_47147 = cljs.core.first(inst_47135);
var inst_47148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47147,(0),null);
var inst_47149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47147,(1),null);
var state_47236__$1 = (function (){var statearr_47239 = state_47236;
(statearr_47239[(8)] = inst_47148);

return statearr_47239;
})();
if(cljs.core.truth_(inst_47149)){
var statearr_47240_48542 = state_47236__$1;
(statearr_47240_48542[(1)] = (22));

} else {
var statearr_47241_48543 = state_47236__$1;
(statearr_47241_48543[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (27))){
var inst_47179 = (state_47236[(9)]);
var inst_47184 = (state_47236[(10)]);
var inst_47177 = (state_47236[(11)]);
var inst_47104 = (state_47236[(12)]);
var inst_47184__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47177,inst_47179);
var inst_47185 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47184__$1,inst_47104,done);
var state_47236__$1 = (function (){var statearr_47242 = state_47236;
(statearr_47242[(10)] = inst_47184__$1);

return statearr_47242;
})();
if(cljs.core.truth_(inst_47185)){
var statearr_47243_48544 = state_47236__$1;
(statearr_47243_48544[(1)] = (30));

} else {
var statearr_47244_48545 = state_47236__$1;
(statearr_47244_48545[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (1))){
var state_47236__$1 = state_47236;
var statearr_47245_48546 = state_47236__$1;
(statearr_47245_48546[(2)] = null);

(statearr_47245_48546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (24))){
var inst_47135 = (state_47236[(7)]);
var inst_47154 = (state_47236[(2)]);
var inst_47155 = cljs.core.next(inst_47135);
var inst_47113 = inst_47155;
var inst_47114 = null;
var inst_47115 = (0);
var inst_47116 = (0);
var state_47236__$1 = (function (){var statearr_47246 = state_47236;
(statearr_47246[(13)] = inst_47114);

(statearr_47246[(14)] = inst_47154);

(statearr_47246[(15)] = inst_47115);

(statearr_47246[(16)] = inst_47116);

(statearr_47246[(17)] = inst_47113);

return statearr_47246;
})();
var statearr_47247_48547 = state_47236__$1;
(statearr_47247_48547[(2)] = null);

(statearr_47247_48547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (39))){
var state_47236__$1 = state_47236;
var statearr_47251_48555 = state_47236__$1;
(statearr_47251_48555[(2)] = null);

(statearr_47251_48555[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (4))){
var inst_47104 = (state_47236[(12)]);
var inst_47104__$1 = (state_47236[(2)]);
var inst_47105 = (inst_47104__$1 == null);
var state_47236__$1 = (function (){var statearr_47252 = state_47236;
(statearr_47252[(12)] = inst_47104__$1);

return statearr_47252;
})();
if(cljs.core.truth_(inst_47105)){
var statearr_47253_48559 = state_47236__$1;
(statearr_47253_48559[(1)] = (5));

} else {
var statearr_47254_48560 = state_47236__$1;
(statearr_47254_48560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (15))){
var inst_47114 = (state_47236[(13)]);
var inst_47115 = (state_47236[(15)]);
var inst_47116 = (state_47236[(16)]);
var inst_47113 = (state_47236[(17)]);
var inst_47131 = (state_47236[(2)]);
var inst_47132 = (inst_47116 + (1));
var tmp47248 = inst_47114;
var tmp47249 = inst_47115;
var tmp47250 = inst_47113;
var inst_47113__$1 = tmp47250;
var inst_47114__$1 = tmp47248;
var inst_47115__$1 = tmp47249;
var inst_47116__$1 = inst_47132;
var state_47236__$1 = (function (){var statearr_47255 = state_47236;
(statearr_47255[(13)] = inst_47114__$1);

(statearr_47255[(18)] = inst_47131);

(statearr_47255[(15)] = inst_47115__$1);

(statearr_47255[(16)] = inst_47116__$1);

(statearr_47255[(17)] = inst_47113__$1);

return statearr_47255;
})();
var statearr_47256_48567 = state_47236__$1;
(statearr_47256_48567[(2)] = null);

(statearr_47256_48567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (21))){
var inst_47158 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47260_48569 = state_47236__$1;
(statearr_47260_48569[(2)] = inst_47158);

(statearr_47260_48569[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (31))){
var inst_47184 = (state_47236[(10)]);
var inst_47188 = done(null);
var inst_47189 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47184);
var state_47236__$1 = (function (){var statearr_47261 = state_47236;
(statearr_47261[(19)] = inst_47188);

return statearr_47261;
})();
var statearr_47262_48573 = state_47236__$1;
(statearr_47262_48573[(2)] = inst_47189);

(statearr_47262_48573[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (32))){
var inst_47179 = (state_47236[(9)]);
var inst_47176 = (state_47236[(20)]);
var inst_47177 = (state_47236[(11)]);
var inst_47178 = (state_47236[(21)]);
var inst_47191 = (state_47236[(2)]);
var inst_47192 = (inst_47179 + (1));
var tmp47257 = inst_47176;
var tmp47258 = inst_47177;
var tmp47259 = inst_47178;
var inst_47176__$1 = tmp47257;
var inst_47177__$1 = tmp47258;
var inst_47178__$1 = tmp47259;
var inst_47179__$1 = inst_47192;
var state_47236__$1 = (function (){var statearr_47263 = state_47236;
(statearr_47263[(9)] = inst_47179__$1);

(statearr_47263[(20)] = inst_47176__$1);

(statearr_47263[(11)] = inst_47177__$1);

(statearr_47263[(22)] = inst_47191);

(statearr_47263[(21)] = inst_47178__$1);

return statearr_47263;
})();
var statearr_47264_48574 = state_47236__$1;
(statearr_47264_48574[(2)] = null);

(statearr_47264_48574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (40))){
var inst_47204 = (state_47236[(23)]);
var inst_47208 = done(null);
var inst_47209 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47204);
var state_47236__$1 = (function (){var statearr_47265 = state_47236;
(statearr_47265[(24)] = inst_47208);

return statearr_47265;
})();
var statearr_47266_48575 = state_47236__$1;
(statearr_47266_48575[(2)] = inst_47209);

(statearr_47266_48575[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (33))){
var inst_47195 = (state_47236[(25)]);
var inst_47197 = cljs.core.chunked_seq_QMARK_(inst_47195);
var state_47236__$1 = state_47236;
if(inst_47197){
var statearr_47267_48578 = state_47236__$1;
(statearr_47267_48578[(1)] = (36));

} else {
var statearr_47268_48579 = state_47236__$1;
(statearr_47268_48579[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (13))){
var inst_47125 = (state_47236[(26)]);
var inst_47128 = cljs.core.async.close_BANG_(inst_47125);
var state_47236__$1 = state_47236;
var statearr_47269_48580 = state_47236__$1;
(statearr_47269_48580[(2)] = inst_47128);

(statearr_47269_48580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (22))){
var inst_47148 = (state_47236[(8)]);
var inst_47151 = cljs.core.async.close_BANG_(inst_47148);
var state_47236__$1 = state_47236;
var statearr_47270_48583 = state_47236__$1;
(statearr_47270_48583[(2)] = inst_47151);

(statearr_47270_48583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (36))){
var inst_47195 = (state_47236[(25)]);
var inst_47199 = cljs.core.chunk_first(inst_47195);
var inst_47200 = cljs.core.chunk_rest(inst_47195);
var inst_47201 = cljs.core.count(inst_47199);
var inst_47176 = inst_47200;
var inst_47177 = inst_47199;
var inst_47178 = inst_47201;
var inst_47179 = (0);
var state_47236__$1 = (function (){var statearr_47271 = state_47236;
(statearr_47271[(9)] = inst_47179);

(statearr_47271[(20)] = inst_47176);

(statearr_47271[(11)] = inst_47177);

(statearr_47271[(21)] = inst_47178);

return statearr_47271;
})();
var statearr_47272_48584 = state_47236__$1;
(statearr_47272_48584[(2)] = null);

(statearr_47272_48584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (41))){
var inst_47195 = (state_47236[(25)]);
var inst_47211 = (state_47236[(2)]);
var inst_47212 = cljs.core.next(inst_47195);
var inst_47176 = inst_47212;
var inst_47177 = null;
var inst_47178 = (0);
var inst_47179 = (0);
var state_47236__$1 = (function (){var statearr_47273 = state_47236;
(statearr_47273[(9)] = inst_47179);

(statearr_47273[(27)] = inst_47211);

(statearr_47273[(20)] = inst_47176);

(statearr_47273[(11)] = inst_47177);

(statearr_47273[(21)] = inst_47178);

return statearr_47273;
})();
var statearr_47274_48590 = state_47236__$1;
(statearr_47274_48590[(2)] = null);

(statearr_47274_48590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (43))){
var state_47236__$1 = state_47236;
var statearr_47275_48591 = state_47236__$1;
(statearr_47275_48591[(2)] = null);

(statearr_47275_48591[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (29))){
var inst_47220 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47276_48592 = state_47236__$1;
(statearr_47276_48592[(2)] = inst_47220);

(statearr_47276_48592[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (44))){
var inst_47229 = (state_47236[(2)]);
var state_47236__$1 = (function (){var statearr_47277 = state_47236;
(statearr_47277[(28)] = inst_47229);

return statearr_47277;
})();
var statearr_47278_48594 = state_47236__$1;
(statearr_47278_48594[(2)] = null);

(statearr_47278_48594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (6))){
var inst_47168 = (state_47236[(29)]);
var inst_47167 = cljs.core.deref(cs);
var inst_47168__$1 = cljs.core.keys(inst_47167);
var inst_47169 = cljs.core.count(inst_47168__$1);
var inst_47170 = cljs.core.reset_BANG_(dctr,inst_47169);
var inst_47175 = cljs.core.seq(inst_47168__$1);
var inst_47176 = inst_47175;
var inst_47177 = null;
var inst_47178 = (0);
var inst_47179 = (0);
var state_47236__$1 = (function (){var statearr_47279 = state_47236;
(statearr_47279[(29)] = inst_47168__$1);

(statearr_47279[(9)] = inst_47179);

(statearr_47279[(20)] = inst_47176);

(statearr_47279[(11)] = inst_47177);

(statearr_47279[(30)] = inst_47170);

(statearr_47279[(21)] = inst_47178);

return statearr_47279;
})();
var statearr_47280_48597 = state_47236__$1;
(statearr_47280_48597[(2)] = null);

(statearr_47280_48597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (28))){
var inst_47176 = (state_47236[(20)]);
var inst_47195 = (state_47236[(25)]);
var inst_47195__$1 = cljs.core.seq(inst_47176);
var state_47236__$1 = (function (){var statearr_47281 = state_47236;
(statearr_47281[(25)] = inst_47195__$1);

return statearr_47281;
})();
if(inst_47195__$1){
var statearr_47282_48598 = state_47236__$1;
(statearr_47282_48598[(1)] = (33));

} else {
var statearr_47283_48599 = state_47236__$1;
(statearr_47283_48599[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (25))){
var inst_47179 = (state_47236[(9)]);
var inst_47178 = (state_47236[(21)]);
var inst_47181 = (inst_47179 < inst_47178);
var inst_47182 = inst_47181;
var state_47236__$1 = state_47236;
if(cljs.core.truth_(inst_47182)){
var statearr_47284_48600 = state_47236__$1;
(statearr_47284_48600[(1)] = (27));

} else {
var statearr_47285_48601 = state_47236__$1;
(statearr_47285_48601[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (34))){
var state_47236__$1 = state_47236;
var statearr_47286_48602 = state_47236__$1;
(statearr_47286_48602[(2)] = null);

(statearr_47286_48602[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (17))){
var state_47236__$1 = state_47236;
var statearr_47287_48603 = state_47236__$1;
(statearr_47287_48603[(2)] = null);

(statearr_47287_48603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (3))){
var inst_47234 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47236__$1,inst_47234);
} else {
if((state_val_47237 === (12))){
var inst_47163 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47288_48604 = state_47236__$1;
(statearr_47288_48604[(2)] = inst_47163);

(statearr_47288_48604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (2))){
var state_47236__$1 = state_47236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47236__$1,(4),ch);
} else {
if((state_val_47237 === (23))){
var state_47236__$1 = state_47236;
var statearr_47289_48605 = state_47236__$1;
(statearr_47289_48605[(2)] = null);

(statearr_47289_48605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (35))){
var inst_47218 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47290_48606 = state_47236__$1;
(statearr_47290_48606[(2)] = inst_47218);

(statearr_47290_48606[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (19))){
var inst_47135 = (state_47236[(7)]);
var inst_47139 = cljs.core.chunk_first(inst_47135);
var inst_47140 = cljs.core.chunk_rest(inst_47135);
var inst_47141 = cljs.core.count(inst_47139);
var inst_47113 = inst_47140;
var inst_47114 = inst_47139;
var inst_47115 = inst_47141;
var inst_47116 = (0);
var state_47236__$1 = (function (){var statearr_47291 = state_47236;
(statearr_47291[(13)] = inst_47114);

(statearr_47291[(15)] = inst_47115);

(statearr_47291[(16)] = inst_47116);

(statearr_47291[(17)] = inst_47113);

return statearr_47291;
})();
var statearr_47292_48607 = state_47236__$1;
(statearr_47292_48607[(2)] = null);

(statearr_47292_48607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (11))){
var inst_47135 = (state_47236[(7)]);
var inst_47113 = (state_47236[(17)]);
var inst_47135__$1 = cljs.core.seq(inst_47113);
var state_47236__$1 = (function (){var statearr_47293 = state_47236;
(statearr_47293[(7)] = inst_47135__$1);

return statearr_47293;
})();
if(inst_47135__$1){
var statearr_47294_48612 = state_47236__$1;
(statearr_47294_48612[(1)] = (16));

} else {
var statearr_47295_48613 = state_47236__$1;
(statearr_47295_48613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (9))){
var inst_47165 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47296_48614 = state_47236__$1;
(statearr_47296_48614[(2)] = inst_47165);

(statearr_47296_48614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (5))){
var inst_47111 = cljs.core.deref(cs);
var inst_47112 = cljs.core.seq(inst_47111);
var inst_47113 = inst_47112;
var inst_47114 = null;
var inst_47115 = (0);
var inst_47116 = (0);
var state_47236__$1 = (function (){var statearr_47297 = state_47236;
(statearr_47297[(13)] = inst_47114);

(statearr_47297[(15)] = inst_47115);

(statearr_47297[(16)] = inst_47116);

(statearr_47297[(17)] = inst_47113);

return statearr_47297;
})();
var statearr_47298_48615 = state_47236__$1;
(statearr_47298_48615[(2)] = null);

(statearr_47298_48615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (14))){
var state_47236__$1 = state_47236;
var statearr_47299_48616 = state_47236__$1;
(statearr_47299_48616[(2)] = null);

(statearr_47299_48616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (45))){
var inst_47226 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47300_48621 = state_47236__$1;
(statearr_47300_48621[(2)] = inst_47226);

(statearr_47300_48621[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (26))){
var inst_47168 = (state_47236[(29)]);
var inst_47222 = (state_47236[(2)]);
var inst_47223 = cljs.core.seq(inst_47168);
var state_47236__$1 = (function (){var statearr_47301 = state_47236;
(statearr_47301[(31)] = inst_47222);

return statearr_47301;
})();
if(inst_47223){
var statearr_47302_48623 = state_47236__$1;
(statearr_47302_48623[(1)] = (42));

} else {
var statearr_47303_48624 = state_47236__$1;
(statearr_47303_48624[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (16))){
var inst_47135 = (state_47236[(7)]);
var inst_47137 = cljs.core.chunked_seq_QMARK_(inst_47135);
var state_47236__$1 = state_47236;
if(inst_47137){
var statearr_47304_48625 = state_47236__$1;
(statearr_47304_48625[(1)] = (19));

} else {
var statearr_47305_48626 = state_47236__$1;
(statearr_47305_48626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (38))){
var inst_47215 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47306_48627 = state_47236__$1;
(statearr_47306_48627[(2)] = inst_47215);

(statearr_47306_48627[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (30))){
var state_47236__$1 = state_47236;
var statearr_47307_48628 = state_47236__$1;
(statearr_47307_48628[(2)] = null);

(statearr_47307_48628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (10))){
var inst_47114 = (state_47236[(13)]);
var inst_47116 = (state_47236[(16)]);
var inst_47124 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47114,inst_47116);
var inst_47125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47124,(0),null);
var inst_47126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47124,(1),null);
var state_47236__$1 = (function (){var statearr_47308 = state_47236;
(statearr_47308[(26)] = inst_47125);

return statearr_47308;
})();
if(cljs.core.truth_(inst_47126)){
var statearr_47309_48630 = state_47236__$1;
(statearr_47309_48630[(1)] = (13));

} else {
var statearr_47310_48631 = state_47236__$1;
(statearr_47310_48631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (18))){
var inst_47161 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47311_48632 = state_47236__$1;
(statearr_47311_48632[(2)] = inst_47161);

(statearr_47311_48632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (42))){
var state_47236__$1 = state_47236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47236__$1,(45),dchan);
} else {
if((state_val_47237 === (37))){
var inst_47204 = (state_47236[(23)]);
var inst_47195 = (state_47236[(25)]);
var inst_47104 = (state_47236[(12)]);
var inst_47204__$1 = cljs.core.first(inst_47195);
var inst_47205 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47204__$1,inst_47104,done);
var state_47236__$1 = (function (){var statearr_47312 = state_47236;
(statearr_47312[(23)] = inst_47204__$1);

return statearr_47312;
})();
if(cljs.core.truth_(inst_47205)){
var statearr_47313_48637 = state_47236__$1;
(statearr_47313_48637[(1)] = (39));

} else {
var statearr_47314_48638 = state_47236__$1;
(statearr_47314_48638[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (8))){
var inst_47115 = (state_47236[(15)]);
var inst_47116 = (state_47236[(16)]);
var inst_47118 = (inst_47116 < inst_47115);
var inst_47119 = inst_47118;
var state_47236__$1 = state_47236;
if(cljs.core.truth_(inst_47119)){
var statearr_47315_48639 = state_47236__$1;
(statearr_47315_48639[(1)] = (10));

} else {
var statearr_47316_48640 = state_47236__$1;
(statearr_47316_48640[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__46541__auto__ = null;
var cljs$core$async$mult_$_state_machine__46541__auto____0 = (function (){
var statearr_47317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47317[(0)] = cljs$core$async$mult_$_state_machine__46541__auto__);

(statearr_47317[(1)] = (1));

return statearr_47317;
});
var cljs$core$async$mult_$_state_machine__46541__auto____1 = (function (state_47236){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47236);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47318){if((e47318 instanceof Object)){
var ex__46544__auto__ = e47318;
var statearr_47319_48641 = state_47236;
(statearr_47319_48641[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47318;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48642 = state_47236;
state_47236 = G__48642;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46541__auto__ = function(state_47236){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46541__auto____1.call(this,state_47236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46541__auto____0;
cljs$core$async$mult_$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46541__auto____1;
return cljs$core$async$mult_$_state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47320 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47320[(6)] = c__46638__auto___48536);

return statearr_47320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47322 = arguments.length;
switch (G__47322) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48652 = arguments.length;
var i__4790__auto___48653 = (0);
while(true){
if((i__4790__auto___48653 < len__4789__auto___48652)){
args__4795__auto__.push((arguments[i__4790__auto___48653]));

var G__48654 = (i__4790__auto___48653 + (1));
i__4790__auto___48653 = G__48654;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47327){
var map__47328 = p__47327;
var map__47328__$1 = (((((!((map__47328 == null))))?(((((map__47328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47328):map__47328);
var opts = map__47328__$1;
var statearr_47330_48656 = state;
(statearr_47330_48656[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47331_48657 = state;
(statearr_47331_48657[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47332_48658 = state;
(statearr_47332_48658[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47323){
var G__47324 = cljs.core.first(seq47323);
var seq47323__$1 = cljs.core.next(seq47323);
var G__47325 = cljs.core.first(seq47323__$1);
var seq47323__$2 = cljs.core.next(seq47323__$1);
var G__47326 = cljs.core.first(seq47323__$2);
var seq47323__$3 = cljs.core.next(seq47323__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47324,G__47325,G__47326,seq47323__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47333 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47334){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47334 = meta47334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47335,meta47334__$1){
var self__ = this;
var _47335__$1 = this;
return (new cljs.core.async.t_cljs$core$async47333(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47334__$1));
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47335){
var self__ = this;
var _47335__$1 = this;
return self__.meta47334;
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47334","meta47334",-916633124,null)], null);
}));

(cljs.core.async.t_cljs$core$async47333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47333");

(cljs.core.async.t_cljs$core$async47333.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47333.
 */
cljs.core.async.__GT_t_cljs$core$async47333 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47333(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47334){
return (new cljs.core.async.t_cljs$core$async47333(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47334));
});

}

return (new cljs.core.async.t_cljs$core$async47333(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46638__auto___48672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47437){
var state_val_47438 = (state_47437[(1)]);
if((state_val_47438 === (7))){
var inst_47352 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
var statearr_47439_48673 = state_47437__$1;
(statearr_47439_48673[(2)] = inst_47352);

(statearr_47439_48673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (20))){
var inst_47364 = (state_47437[(7)]);
var state_47437__$1 = state_47437;
var statearr_47440_48674 = state_47437__$1;
(statearr_47440_48674[(2)] = inst_47364);

(statearr_47440_48674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (27))){
var state_47437__$1 = state_47437;
var statearr_47441_48675 = state_47437__$1;
(statearr_47441_48675[(2)] = null);

(statearr_47441_48675[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (1))){
var inst_47339 = (state_47437[(8)]);
var inst_47339__$1 = calc_state();
var inst_47341 = (inst_47339__$1 == null);
var inst_47342 = cljs.core.not(inst_47341);
var state_47437__$1 = (function (){var statearr_47442 = state_47437;
(statearr_47442[(8)] = inst_47339__$1);

return statearr_47442;
})();
if(inst_47342){
var statearr_47443_48676 = state_47437__$1;
(statearr_47443_48676[(1)] = (2));

} else {
var statearr_47444_48677 = state_47437__$1;
(statearr_47444_48677[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (24))){
var inst_47397 = (state_47437[(9)]);
var inst_47411 = (state_47437[(10)]);
var inst_47388 = (state_47437[(11)]);
var inst_47411__$1 = (inst_47388.cljs$core$IFn$_invoke$arity$1 ? inst_47388.cljs$core$IFn$_invoke$arity$1(inst_47397) : inst_47388.call(null,inst_47397));
var state_47437__$1 = (function (){var statearr_47445 = state_47437;
(statearr_47445[(10)] = inst_47411__$1);

return statearr_47445;
})();
if(cljs.core.truth_(inst_47411__$1)){
var statearr_47446_48679 = state_47437__$1;
(statearr_47446_48679[(1)] = (29));

} else {
var statearr_47447_48680 = state_47437__$1;
(statearr_47447_48680[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (4))){
var inst_47355 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
if(cljs.core.truth_(inst_47355)){
var statearr_47448_48681 = state_47437__$1;
(statearr_47448_48681[(1)] = (8));

} else {
var statearr_47449_48682 = state_47437__$1;
(statearr_47449_48682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (15))){
var inst_47382 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
if(cljs.core.truth_(inst_47382)){
var statearr_47450_48683 = state_47437__$1;
(statearr_47450_48683[(1)] = (19));

} else {
var statearr_47451_48684 = state_47437__$1;
(statearr_47451_48684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (21))){
var inst_47387 = (state_47437[(12)]);
var inst_47387__$1 = (state_47437[(2)]);
var inst_47388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47387__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47387__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47387__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47437__$1 = (function (){var statearr_47452 = state_47437;
(statearr_47452[(12)] = inst_47387__$1);

(statearr_47452[(13)] = inst_47389);

(statearr_47452[(11)] = inst_47388);

return statearr_47452;
})();
return cljs.core.async.ioc_alts_BANG_(state_47437__$1,(22),inst_47390);
} else {
if((state_val_47438 === (31))){
var inst_47419 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
if(cljs.core.truth_(inst_47419)){
var statearr_47453_48685 = state_47437__$1;
(statearr_47453_48685[(1)] = (32));

} else {
var statearr_47454_48689 = state_47437__$1;
(statearr_47454_48689[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (32))){
var inst_47396 = (state_47437[(14)]);
var state_47437__$1 = state_47437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47437__$1,(35),out,inst_47396);
} else {
if((state_val_47438 === (33))){
var inst_47387 = (state_47437[(12)]);
var inst_47364 = inst_47387;
var state_47437__$1 = (function (){var statearr_47455 = state_47437;
(statearr_47455[(7)] = inst_47364);

return statearr_47455;
})();
var statearr_47456_48694 = state_47437__$1;
(statearr_47456_48694[(2)] = null);

(statearr_47456_48694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (13))){
var inst_47364 = (state_47437[(7)]);
var inst_47371 = inst_47364.cljs$lang$protocol_mask$partition0$;
var inst_47372 = (inst_47371 & (64));
var inst_47373 = inst_47364.cljs$core$ISeq$;
var inst_47374 = (cljs.core.PROTOCOL_SENTINEL === inst_47373);
var inst_47375 = ((inst_47372) || (inst_47374));
var state_47437__$1 = state_47437;
if(cljs.core.truth_(inst_47375)){
var statearr_47457_48695 = state_47437__$1;
(statearr_47457_48695[(1)] = (16));

} else {
var statearr_47458_48696 = state_47437__$1;
(statearr_47458_48696[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (22))){
var inst_47397 = (state_47437[(9)]);
var inst_47396 = (state_47437[(14)]);
var inst_47395 = (state_47437[(2)]);
var inst_47396__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47395,(0),null);
var inst_47397__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47395,(1),null);
var inst_47398 = (inst_47396__$1 == null);
var inst_47399 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47397__$1,change);
var inst_47400 = ((inst_47398) || (inst_47399));
var state_47437__$1 = (function (){var statearr_47459 = state_47437;
(statearr_47459[(9)] = inst_47397__$1);

(statearr_47459[(14)] = inst_47396__$1);

return statearr_47459;
})();
if(cljs.core.truth_(inst_47400)){
var statearr_47460_48697 = state_47437__$1;
(statearr_47460_48697[(1)] = (23));

} else {
var statearr_47461_48698 = state_47437__$1;
(statearr_47461_48698[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (36))){
var inst_47387 = (state_47437[(12)]);
var inst_47364 = inst_47387;
var state_47437__$1 = (function (){var statearr_47462 = state_47437;
(statearr_47462[(7)] = inst_47364);

return statearr_47462;
})();
var statearr_47463_48699 = state_47437__$1;
(statearr_47463_48699[(2)] = null);

(statearr_47463_48699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (29))){
var inst_47411 = (state_47437[(10)]);
var state_47437__$1 = state_47437;
var statearr_47464_48700 = state_47437__$1;
(statearr_47464_48700[(2)] = inst_47411);

(statearr_47464_48700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (6))){
var state_47437__$1 = state_47437;
var statearr_47465_48701 = state_47437__$1;
(statearr_47465_48701[(2)] = false);

(statearr_47465_48701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (28))){
var inst_47407 = (state_47437[(2)]);
var inst_47408 = calc_state();
var inst_47364 = inst_47408;
var state_47437__$1 = (function (){var statearr_47466 = state_47437;
(statearr_47466[(7)] = inst_47364);

(statearr_47466[(15)] = inst_47407);

return statearr_47466;
})();
var statearr_47467_48702 = state_47437__$1;
(statearr_47467_48702[(2)] = null);

(statearr_47467_48702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (25))){
var inst_47433 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
var statearr_47468_48704 = state_47437__$1;
(statearr_47468_48704[(2)] = inst_47433);

(statearr_47468_48704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (34))){
var inst_47431 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
var statearr_47469_48705 = state_47437__$1;
(statearr_47469_48705[(2)] = inst_47431);

(statearr_47469_48705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (17))){
var state_47437__$1 = state_47437;
var statearr_47470_48706 = state_47437__$1;
(statearr_47470_48706[(2)] = false);

(statearr_47470_48706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (3))){
var state_47437__$1 = state_47437;
var statearr_47471_48707 = state_47437__$1;
(statearr_47471_48707[(2)] = false);

(statearr_47471_48707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (12))){
var inst_47435 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47437__$1,inst_47435);
} else {
if((state_val_47438 === (2))){
var inst_47339 = (state_47437[(8)]);
var inst_47344 = inst_47339.cljs$lang$protocol_mask$partition0$;
var inst_47345 = (inst_47344 & (64));
var inst_47346 = inst_47339.cljs$core$ISeq$;
var inst_47347 = (cljs.core.PROTOCOL_SENTINEL === inst_47346);
var inst_47348 = ((inst_47345) || (inst_47347));
var state_47437__$1 = state_47437;
if(cljs.core.truth_(inst_47348)){
var statearr_47472_48709 = state_47437__$1;
(statearr_47472_48709[(1)] = (5));

} else {
var statearr_47473_48710 = state_47437__$1;
(statearr_47473_48710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (23))){
var inst_47396 = (state_47437[(14)]);
var inst_47402 = (inst_47396 == null);
var state_47437__$1 = state_47437;
if(cljs.core.truth_(inst_47402)){
var statearr_47474_48711 = state_47437__$1;
(statearr_47474_48711[(1)] = (26));

} else {
var statearr_47475_48712 = state_47437__$1;
(statearr_47475_48712[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (35))){
var inst_47422 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
if(cljs.core.truth_(inst_47422)){
var statearr_47476_48713 = state_47437__$1;
(statearr_47476_48713[(1)] = (36));

} else {
var statearr_47477_48714 = state_47437__$1;
(statearr_47477_48714[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (19))){
var inst_47364 = (state_47437[(7)]);
var inst_47384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47364);
var state_47437__$1 = state_47437;
var statearr_47478_48715 = state_47437__$1;
(statearr_47478_48715[(2)] = inst_47384);

(statearr_47478_48715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (11))){
var inst_47364 = (state_47437[(7)]);
var inst_47368 = (inst_47364 == null);
var inst_47369 = cljs.core.not(inst_47368);
var state_47437__$1 = state_47437;
if(inst_47369){
var statearr_47479_48716 = state_47437__$1;
(statearr_47479_48716[(1)] = (13));

} else {
var statearr_47480_48717 = state_47437__$1;
(statearr_47480_48717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (9))){
var inst_47339 = (state_47437[(8)]);
var state_47437__$1 = state_47437;
var statearr_47481_48718 = state_47437__$1;
(statearr_47481_48718[(2)] = inst_47339);

(statearr_47481_48718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (5))){
var state_47437__$1 = state_47437;
var statearr_47482_48719 = state_47437__$1;
(statearr_47482_48719[(2)] = true);

(statearr_47482_48719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (14))){
var state_47437__$1 = state_47437;
var statearr_47483_48720 = state_47437__$1;
(statearr_47483_48720[(2)] = false);

(statearr_47483_48720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (26))){
var inst_47397 = (state_47437[(9)]);
var inst_47404 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47397);
var state_47437__$1 = state_47437;
var statearr_47484_48721 = state_47437__$1;
(statearr_47484_48721[(2)] = inst_47404);

(statearr_47484_48721[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (16))){
var state_47437__$1 = state_47437;
var statearr_47485_48722 = state_47437__$1;
(statearr_47485_48722[(2)] = true);

(statearr_47485_48722[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (38))){
var inst_47427 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
var statearr_47486_48723 = state_47437__$1;
(statearr_47486_48723[(2)] = inst_47427);

(statearr_47486_48723[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (30))){
var inst_47397 = (state_47437[(9)]);
var inst_47389 = (state_47437[(13)]);
var inst_47388 = (state_47437[(11)]);
var inst_47414 = cljs.core.empty_QMARK_(inst_47388);
var inst_47415 = (inst_47389.cljs$core$IFn$_invoke$arity$1 ? inst_47389.cljs$core$IFn$_invoke$arity$1(inst_47397) : inst_47389.call(null,inst_47397));
var inst_47416 = cljs.core.not(inst_47415);
var inst_47417 = ((inst_47414) && (inst_47416));
var state_47437__$1 = state_47437;
var statearr_47487_48725 = state_47437__$1;
(statearr_47487_48725[(2)] = inst_47417);

(statearr_47487_48725[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (10))){
var inst_47339 = (state_47437[(8)]);
var inst_47360 = (state_47437[(2)]);
var inst_47361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47360,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47360,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47360,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47364 = inst_47339;
var state_47437__$1 = (function (){var statearr_47488 = state_47437;
(statearr_47488[(7)] = inst_47364);

(statearr_47488[(16)] = inst_47362);

(statearr_47488[(17)] = inst_47363);

(statearr_47488[(18)] = inst_47361);

return statearr_47488;
})();
var statearr_47489_48730 = state_47437__$1;
(statearr_47489_48730[(2)] = null);

(statearr_47489_48730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (18))){
var inst_47379 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
var statearr_47490_48734 = state_47437__$1;
(statearr_47490_48734[(2)] = inst_47379);

(statearr_47490_48734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (37))){
var state_47437__$1 = state_47437;
var statearr_47491_48735 = state_47437__$1;
(statearr_47491_48735[(2)] = null);

(statearr_47491_48735[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (8))){
var inst_47339 = (state_47437[(8)]);
var inst_47357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47339);
var state_47437__$1 = state_47437;
var statearr_47492_48737 = state_47437__$1;
(statearr_47492_48737[(2)] = inst_47357);

(statearr_47492_48737[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__46541__auto__ = null;
var cljs$core$async$mix_$_state_machine__46541__auto____0 = (function (){
var statearr_47493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47493[(0)] = cljs$core$async$mix_$_state_machine__46541__auto__);

(statearr_47493[(1)] = (1));

return statearr_47493;
});
var cljs$core$async$mix_$_state_machine__46541__auto____1 = (function (state_47437){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47437);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47494){if((e47494 instanceof Object)){
var ex__46544__auto__ = e47494;
var statearr_47495_48739 = state_47437;
(statearr_47495_48739[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47494;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48740 = state_47437;
state_47437 = G__48740;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46541__auto__ = function(state_47437){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46541__auto____1.call(this,state_47437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46541__auto____0;
cljs$core$async$mix_$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46541__auto____1;
return cljs$core$async$mix_$_state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47496 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47496[(6)] = c__46638__auto___48672);

return statearr_47496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47498 = arguments.length;
switch (G__47498) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__47501 = arguments.length;
switch (G__47501) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47499_SHARP_){
if(cljs.core.truth_((p1__47499_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47499_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47499_SHARP_.call(null,topic)))){
return p1__47499_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47499_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47502 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47503){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47503 = meta47503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47504,meta47503__$1){
var self__ = this;
var _47504__$1 = this;
return (new cljs.core.async.t_cljs$core$async47502(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47503__$1));
}));

(cljs.core.async.t_cljs$core$async47502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47504){
var self__ = this;
var _47504__$1 = this;
return self__.meta47503;
}));

(cljs.core.async.t_cljs$core$async47502.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47502.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47502.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47502.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47502.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47503","meta47503",1550248099,null)], null);
}));

(cljs.core.async.t_cljs$core$async47502.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47502");

(cljs.core.async.t_cljs$core$async47502.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47502");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47502.
 */
cljs.core.async.__GT_t_cljs$core$async47502 = (function cljs$core$async$__GT_t_cljs$core$async47502(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47503){
return (new cljs.core.async.t_cljs$core$async47502(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47503));
});

}

return (new cljs.core.async.t_cljs$core$async47502(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46638__auto___48749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47576){
var state_val_47577 = (state_47576[(1)]);
if((state_val_47577 === (7))){
var inst_47572 = (state_47576[(2)]);
var state_47576__$1 = state_47576;
var statearr_47578_48751 = state_47576__$1;
(statearr_47578_48751[(2)] = inst_47572);

(statearr_47578_48751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (20))){
var state_47576__$1 = state_47576;
var statearr_47579_48752 = state_47576__$1;
(statearr_47579_48752[(2)] = null);

(statearr_47579_48752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (1))){
var state_47576__$1 = state_47576;
var statearr_47580_48753 = state_47576__$1;
(statearr_47580_48753[(2)] = null);

(statearr_47580_48753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (24))){
var inst_47555 = (state_47576[(7)]);
var inst_47564 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47555);
var state_47576__$1 = state_47576;
var statearr_47581_48757 = state_47576__$1;
(statearr_47581_48757[(2)] = inst_47564);

(statearr_47581_48757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (4))){
var inst_47507 = (state_47576[(8)]);
var inst_47507__$1 = (state_47576[(2)]);
var inst_47508 = (inst_47507__$1 == null);
var state_47576__$1 = (function (){var statearr_47582 = state_47576;
(statearr_47582[(8)] = inst_47507__$1);

return statearr_47582;
})();
if(cljs.core.truth_(inst_47508)){
var statearr_47583_48762 = state_47576__$1;
(statearr_47583_48762[(1)] = (5));

} else {
var statearr_47584_48763 = state_47576__$1;
(statearr_47584_48763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (15))){
var inst_47549 = (state_47576[(2)]);
var state_47576__$1 = state_47576;
var statearr_47585_48767 = state_47576__$1;
(statearr_47585_48767[(2)] = inst_47549);

(statearr_47585_48767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (21))){
var inst_47569 = (state_47576[(2)]);
var state_47576__$1 = (function (){var statearr_47586 = state_47576;
(statearr_47586[(9)] = inst_47569);

return statearr_47586;
})();
var statearr_47587_48768 = state_47576__$1;
(statearr_47587_48768[(2)] = null);

(statearr_47587_48768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (13))){
var inst_47531 = (state_47576[(10)]);
var inst_47533 = cljs.core.chunked_seq_QMARK_(inst_47531);
var state_47576__$1 = state_47576;
if(inst_47533){
var statearr_47588_48769 = state_47576__$1;
(statearr_47588_48769[(1)] = (16));

} else {
var statearr_47589_48770 = state_47576__$1;
(statearr_47589_48770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (22))){
var inst_47561 = (state_47576[(2)]);
var state_47576__$1 = state_47576;
if(cljs.core.truth_(inst_47561)){
var statearr_47590_48771 = state_47576__$1;
(statearr_47590_48771[(1)] = (23));

} else {
var statearr_47591_48772 = state_47576__$1;
(statearr_47591_48772[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (6))){
var inst_47557 = (state_47576[(11)]);
var inst_47555 = (state_47576[(7)]);
var inst_47507 = (state_47576[(8)]);
var inst_47555__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47507) : topic_fn.call(null,inst_47507));
var inst_47556 = cljs.core.deref(mults);
var inst_47557__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47556,inst_47555__$1);
var state_47576__$1 = (function (){var statearr_47592 = state_47576;
(statearr_47592[(11)] = inst_47557__$1);

(statearr_47592[(7)] = inst_47555__$1);

return statearr_47592;
})();
if(cljs.core.truth_(inst_47557__$1)){
var statearr_47593_48776 = state_47576__$1;
(statearr_47593_48776[(1)] = (19));

} else {
var statearr_47594_48777 = state_47576__$1;
(statearr_47594_48777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (25))){
var inst_47566 = (state_47576[(2)]);
var state_47576__$1 = state_47576;
var statearr_47595_48778 = state_47576__$1;
(statearr_47595_48778[(2)] = inst_47566);

(statearr_47595_48778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (17))){
var inst_47531 = (state_47576[(10)]);
var inst_47540 = cljs.core.first(inst_47531);
var inst_47541 = cljs.core.async.muxch_STAR_(inst_47540);
var inst_47542 = cljs.core.async.close_BANG_(inst_47541);
var inst_47543 = cljs.core.next(inst_47531);
var inst_47517 = inst_47543;
var inst_47518 = null;
var inst_47519 = (0);
var inst_47520 = (0);
var state_47576__$1 = (function (){var statearr_47596 = state_47576;
(statearr_47596[(12)] = inst_47518);

(statearr_47596[(13)] = inst_47542);

(statearr_47596[(14)] = inst_47519);

(statearr_47596[(15)] = inst_47520);

(statearr_47596[(16)] = inst_47517);

return statearr_47596;
})();
var statearr_47597_48782 = state_47576__$1;
(statearr_47597_48782[(2)] = null);

(statearr_47597_48782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (3))){
var inst_47574 = (state_47576[(2)]);
var state_47576__$1 = state_47576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47576__$1,inst_47574);
} else {
if((state_val_47577 === (12))){
var inst_47551 = (state_47576[(2)]);
var state_47576__$1 = state_47576;
var statearr_47598_48786 = state_47576__$1;
(statearr_47598_48786[(2)] = inst_47551);

(statearr_47598_48786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (2))){
var state_47576__$1 = state_47576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47576__$1,(4),ch);
} else {
if((state_val_47577 === (23))){
var state_47576__$1 = state_47576;
var statearr_47599_48803 = state_47576__$1;
(statearr_47599_48803[(2)] = null);

(statearr_47599_48803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (19))){
var inst_47557 = (state_47576[(11)]);
var inst_47507 = (state_47576[(8)]);
var inst_47559 = cljs.core.async.muxch_STAR_(inst_47557);
var state_47576__$1 = state_47576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47576__$1,(22),inst_47559,inst_47507);
} else {
if((state_val_47577 === (11))){
var inst_47517 = (state_47576[(16)]);
var inst_47531 = (state_47576[(10)]);
var inst_47531__$1 = cljs.core.seq(inst_47517);
var state_47576__$1 = (function (){var statearr_47600 = state_47576;
(statearr_47600[(10)] = inst_47531__$1);

return statearr_47600;
})();
if(inst_47531__$1){
var statearr_47601_48804 = state_47576__$1;
(statearr_47601_48804[(1)] = (13));

} else {
var statearr_47602_48805 = state_47576__$1;
(statearr_47602_48805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (9))){
var inst_47553 = (state_47576[(2)]);
var state_47576__$1 = state_47576;
var statearr_47603_48806 = state_47576__$1;
(statearr_47603_48806[(2)] = inst_47553);

(statearr_47603_48806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (5))){
var inst_47514 = cljs.core.deref(mults);
var inst_47515 = cljs.core.vals(inst_47514);
var inst_47516 = cljs.core.seq(inst_47515);
var inst_47517 = inst_47516;
var inst_47518 = null;
var inst_47519 = (0);
var inst_47520 = (0);
var state_47576__$1 = (function (){var statearr_47604 = state_47576;
(statearr_47604[(12)] = inst_47518);

(statearr_47604[(14)] = inst_47519);

(statearr_47604[(15)] = inst_47520);

(statearr_47604[(16)] = inst_47517);

return statearr_47604;
})();
var statearr_47605_48813 = state_47576__$1;
(statearr_47605_48813[(2)] = null);

(statearr_47605_48813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (14))){
var state_47576__$1 = state_47576;
var statearr_47609_48814 = state_47576__$1;
(statearr_47609_48814[(2)] = null);

(statearr_47609_48814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (16))){
var inst_47531 = (state_47576[(10)]);
var inst_47535 = cljs.core.chunk_first(inst_47531);
var inst_47536 = cljs.core.chunk_rest(inst_47531);
var inst_47537 = cljs.core.count(inst_47535);
var inst_47517 = inst_47536;
var inst_47518 = inst_47535;
var inst_47519 = inst_47537;
var inst_47520 = (0);
var state_47576__$1 = (function (){var statearr_47610 = state_47576;
(statearr_47610[(12)] = inst_47518);

(statearr_47610[(14)] = inst_47519);

(statearr_47610[(15)] = inst_47520);

(statearr_47610[(16)] = inst_47517);

return statearr_47610;
})();
var statearr_47611_48815 = state_47576__$1;
(statearr_47611_48815[(2)] = null);

(statearr_47611_48815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (10))){
var inst_47518 = (state_47576[(12)]);
var inst_47519 = (state_47576[(14)]);
var inst_47520 = (state_47576[(15)]);
var inst_47517 = (state_47576[(16)]);
var inst_47525 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47518,inst_47520);
var inst_47526 = cljs.core.async.muxch_STAR_(inst_47525);
var inst_47527 = cljs.core.async.close_BANG_(inst_47526);
var inst_47528 = (inst_47520 + (1));
var tmp47606 = inst_47518;
var tmp47607 = inst_47519;
var tmp47608 = inst_47517;
var inst_47517__$1 = tmp47608;
var inst_47518__$1 = tmp47606;
var inst_47519__$1 = tmp47607;
var inst_47520__$1 = inst_47528;
var state_47576__$1 = (function (){var statearr_47612 = state_47576;
(statearr_47612[(12)] = inst_47518__$1);

(statearr_47612[(14)] = inst_47519__$1);

(statearr_47612[(15)] = inst_47520__$1);

(statearr_47612[(17)] = inst_47527);

(statearr_47612[(16)] = inst_47517__$1);

return statearr_47612;
})();
var statearr_47613_48816 = state_47576__$1;
(statearr_47613_48816[(2)] = null);

(statearr_47613_48816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (18))){
var inst_47546 = (state_47576[(2)]);
var state_47576__$1 = state_47576;
var statearr_47614_48823 = state_47576__$1;
(statearr_47614_48823[(2)] = inst_47546);

(statearr_47614_48823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47577 === (8))){
var inst_47519 = (state_47576[(14)]);
var inst_47520 = (state_47576[(15)]);
var inst_47522 = (inst_47520 < inst_47519);
var inst_47523 = inst_47522;
var state_47576__$1 = state_47576;
if(cljs.core.truth_(inst_47523)){
var statearr_47615_48824 = state_47576__$1;
(statearr_47615_48824[(1)] = (10));

} else {
var statearr_47616_48825 = state_47576__$1;
(statearr_47616_48825[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_47617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47617[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_47617[(1)] = (1));

return statearr_47617;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_47576){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47576);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47618){if((e47618 instanceof Object)){
var ex__46544__auto__ = e47618;
var statearr_47619_48826 = state_47576;
(statearr_47619_48826[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48827 = state_47576;
state_47576 = G__48827;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_47576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_47576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47620 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47620[(6)] = c__46638__auto___48749);

return statearr_47620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47622 = arguments.length;
switch (G__47622) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47624 = arguments.length;
switch (G__47624) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__47626 = arguments.length;
switch (G__47626) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46638__auto___48837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47665){
var state_val_47666 = (state_47665[(1)]);
if((state_val_47666 === (7))){
var state_47665__$1 = state_47665;
var statearr_47667_48838 = state_47665__$1;
(statearr_47667_48838[(2)] = null);

(statearr_47667_48838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (1))){
var state_47665__$1 = state_47665;
var statearr_47668_48839 = state_47665__$1;
(statearr_47668_48839[(2)] = null);

(statearr_47668_48839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (4))){
var inst_47629 = (state_47665[(7)]);
var inst_47631 = (inst_47629 < cnt);
var state_47665__$1 = state_47665;
if(cljs.core.truth_(inst_47631)){
var statearr_47669_48840 = state_47665__$1;
(statearr_47669_48840[(1)] = (6));

} else {
var statearr_47670_48841 = state_47665__$1;
(statearr_47670_48841[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (15))){
var inst_47661 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47671_48845 = state_47665__$1;
(statearr_47671_48845[(2)] = inst_47661);

(statearr_47671_48845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (13))){
var inst_47654 = cljs.core.async.close_BANG_(out);
var state_47665__$1 = state_47665;
var statearr_47672_48846 = state_47665__$1;
(statearr_47672_48846[(2)] = inst_47654);

(statearr_47672_48846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (6))){
var state_47665__$1 = state_47665;
var statearr_47673_48847 = state_47665__$1;
(statearr_47673_48847[(2)] = null);

(statearr_47673_48847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (3))){
var inst_47663 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47665__$1,inst_47663);
} else {
if((state_val_47666 === (12))){
var inst_47651 = (state_47665[(8)]);
var inst_47651__$1 = (state_47665[(2)]);
var inst_47652 = cljs.core.some(cljs.core.nil_QMARK_,inst_47651__$1);
var state_47665__$1 = (function (){var statearr_47674 = state_47665;
(statearr_47674[(8)] = inst_47651__$1);

return statearr_47674;
})();
if(cljs.core.truth_(inst_47652)){
var statearr_47675_48848 = state_47665__$1;
(statearr_47675_48848[(1)] = (13));

} else {
var statearr_47676_48849 = state_47665__$1;
(statearr_47676_48849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (2))){
var inst_47628 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47629 = (0);
var state_47665__$1 = (function (){var statearr_47677 = state_47665;
(statearr_47677[(7)] = inst_47629);

(statearr_47677[(9)] = inst_47628);

return statearr_47677;
})();
var statearr_47678_48853 = state_47665__$1;
(statearr_47678_48853[(2)] = null);

(statearr_47678_48853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (11))){
var inst_47629 = (state_47665[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47665,(10),Object,null,(9));
var inst_47638 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47629) : chs__$1.call(null,inst_47629));
var inst_47639 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47629) : done.call(null,inst_47629));
var inst_47640 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47638,inst_47639);
var state_47665__$1 = state_47665;
var statearr_47679_48856 = state_47665__$1;
(statearr_47679_48856[(2)] = inst_47640);


cljs.core.async.impl.ioc_helpers.process_exception(state_47665__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (9))){
var inst_47629 = (state_47665[(7)]);
var inst_47642 = (state_47665[(2)]);
var inst_47643 = (inst_47629 + (1));
var inst_47629__$1 = inst_47643;
var state_47665__$1 = (function (){var statearr_47680 = state_47665;
(statearr_47680[(7)] = inst_47629__$1);

(statearr_47680[(10)] = inst_47642);

return statearr_47680;
})();
var statearr_47681_48857 = state_47665__$1;
(statearr_47681_48857[(2)] = null);

(statearr_47681_48857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (5))){
var inst_47649 = (state_47665[(2)]);
var state_47665__$1 = (function (){var statearr_47682 = state_47665;
(statearr_47682[(11)] = inst_47649);

return statearr_47682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47665__$1,(12),dchan);
} else {
if((state_val_47666 === (14))){
var inst_47651 = (state_47665[(8)]);
var inst_47656 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47651);
var state_47665__$1 = state_47665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47665__$1,(16),out,inst_47656);
} else {
if((state_val_47666 === (16))){
var inst_47658 = (state_47665[(2)]);
var state_47665__$1 = (function (){var statearr_47683 = state_47665;
(statearr_47683[(12)] = inst_47658);

return statearr_47683;
})();
var statearr_47684_48858 = state_47665__$1;
(statearr_47684_48858[(2)] = null);

(statearr_47684_48858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (10))){
var inst_47633 = (state_47665[(2)]);
var inst_47634 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47665__$1 = (function (){var statearr_47685 = state_47665;
(statearr_47685[(13)] = inst_47633);

return statearr_47685;
})();
var statearr_47686_48859 = state_47665__$1;
(statearr_47686_48859[(2)] = inst_47634);


cljs.core.async.impl.ioc_helpers.process_exception(state_47665__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (8))){
var inst_47647 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47687_48862 = state_47665__$1;
(statearr_47687_48862[(2)] = inst_47647);

(statearr_47687_48862[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_47688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47688[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_47688[(1)] = (1));

return statearr_47688;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_47665){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47665);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47689){if((e47689 instanceof Object)){
var ex__46544__auto__ = e47689;
var statearr_47690_48863 = state_47665;
(statearr_47690_48863[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48864 = state_47665;
state_47665 = G__48864;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_47665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_47665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47691 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47691[(6)] = c__46638__auto___48837);

return statearr_47691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47694 = arguments.length;
switch (G__47694) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46638__auto___48869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47726){
var state_val_47727 = (state_47726[(1)]);
if((state_val_47727 === (7))){
var inst_47706 = (state_47726[(7)]);
var inst_47705 = (state_47726[(8)]);
var inst_47705__$1 = (state_47726[(2)]);
var inst_47706__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47705__$1,(0),null);
var inst_47707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47705__$1,(1),null);
var inst_47708 = (inst_47706__$1 == null);
var state_47726__$1 = (function (){var statearr_47728 = state_47726;
(statearr_47728[(7)] = inst_47706__$1);

(statearr_47728[(9)] = inst_47707);

(statearr_47728[(8)] = inst_47705__$1);

return statearr_47728;
})();
if(cljs.core.truth_(inst_47708)){
var statearr_47729_48876 = state_47726__$1;
(statearr_47729_48876[(1)] = (8));

} else {
var statearr_47730_48877 = state_47726__$1;
(statearr_47730_48877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47727 === (1))){
var inst_47695 = cljs.core.vec(chs);
var inst_47696 = inst_47695;
var state_47726__$1 = (function (){var statearr_47731 = state_47726;
(statearr_47731[(10)] = inst_47696);

return statearr_47731;
})();
var statearr_47732_48878 = state_47726__$1;
(statearr_47732_48878[(2)] = null);

(statearr_47732_48878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47727 === (4))){
var inst_47696 = (state_47726[(10)]);
var state_47726__$1 = state_47726;
return cljs.core.async.ioc_alts_BANG_(state_47726__$1,(7),inst_47696);
} else {
if((state_val_47727 === (6))){
var inst_47722 = (state_47726[(2)]);
var state_47726__$1 = state_47726;
var statearr_47733_48880 = state_47726__$1;
(statearr_47733_48880[(2)] = inst_47722);

(statearr_47733_48880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47727 === (3))){
var inst_47724 = (state_47726[(2)]);
var state_47726__$1 = state_47726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47726__$1,inst_47724);
} else {
if((state_val_47727 === (2))){
var inst_47696 = (state_47726[(10)]);
var inst_47698 = cljs.core.count(inst_47696);
var inst_47699 = (inst_47698 > (0));
var state_47726__$1 = state_47726;
if(cljs.core.truth_(inst_47699)){
var statearr_47735_48883 = state_47726__$1;
(statearr_47735_48883[(1)] = (4));

} else {
var statearr_47736_48885 = state_47726__$1;
(statearr_47736_48885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47727 === (11))){
var inst_47696 = (state_47726[(10)]);
var inst_47715 = (state_47726[(2)]);
var tmp47734 = inst_47696;
var inst_47696__$1 = tmp47734;
var state_47726__$1 = (function (){var statearr_47737 = state_47726;
(statearr_47737[(11)] = inst_47715);

(statearr_47737[(10)] = inst_47696__$1);

return statearr_47737;
})();
var statearr_47738_48887 = state_47726__$1;
(statearr_47738_48887[(2)] = null);

(statearr_47738_48887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47727 === (9))){
var inst_47706 = (state_47726[(7)]);
var state_47726__$1 = state_47726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47726__$1,(11),out,inst_47706);
} else {
if((state_val_47727 === (5))){
var inst_47720 = cljs.core.async.close_BANG_(out);
var state_47726__$1 = state_47726;
var statearr_47739_48888 = state_47726__$1;
(statearr_47739_48888[(2)] = inst_47720);

(statearr_47739_48888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47727 === (10))){
var inst_47718 = (state_47726[(2)]);
var state_47726__$1 = state_47726;
var statearr_47740_48889 = state_47726__$1;
(statearr_47740_48889[(2)] = inst_47718);

(statearr_47740_48889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47727 === (8))){
var inst_47706 = (state_47726[(7)]);
var inst_47707 = (state_47726[(9)]);
var inst_47696 = (state_47726[(10)]);
var inst_47705 = (state_47726[(8)]);
var inst_47710 = (function (){var cs = inst_47696;
var vec__47701 = inst_47705;
var v = inst_47706;
var c = inst_47707;
return (function (p1__47692_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47692_SHARP_);
});
})();
var inst_47711 = cljs.core.filterv(inst_47710,inst_47696);
var inst_47696__$1 = inst_47711;
var state_47726__$1 = (function (){var statearr_47741 = state_47726;
(statearr_47741[(10)] = inst_47696__$1);

return statearr_47741;
})();
var statearr_47742_48890 = state_47726__$1;
(statearr_47742_48890[(2)] = null);

(statearr_47742_48890[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_47743 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47743[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_47743[(1)] = (1));

return statearr_47743;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_47726){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47726);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47744){if((e47744 instanceof Object)){
var ex__46544__auto__ = e47744;
var statearr_47745_48891 = state_47726;
(statearr_47745_48891[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48892 = state_47726;
state_47726 = G__48892;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_47726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_47726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47746 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47746[(6)] = c__46638__auto___48869);

return statearr_47746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47748 = arguments.length;
switch (G__47748) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46638__auto___48894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47772){
var state_val_47773 = (state_47772[(1)]);
if((state_val_47773 === (7))){
var inst_47754 = (state_47772[(7)]);
var inst_47754__$1 = (state_47772[(2)]);
var inst_47755 = (inst_47754__$1 == null);
var inst_47756 = cljs.core.not(inst_47755);
var state_47772__$1 = (function (){var statearr_47774 = state_47772;
(statearr_47774[(7)] = inst_47754__$1);

return statearr_47774;
})();
if(inst_47756){
var statearr_47775_48896 = state_47772__$1;
(statearr_47775_48896[(1)] = (8));

} else {
var statearr_47776_48897 = state_47772__$1;
(statearr_47776_48897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (1))){
var inst_47749 = (0);
var state_47772__$1 = (function (){var statearr_47777 = state_47772;
(statearr_47777[(8)] = inst_47749);

return statearr_47777;
})();
var statearr_47778_48899 = state_47772__$1;
(statearr_47778_48899[(2)] = null);

(statearr_47778_48899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (4))){
var state_47772__$1 = state_47772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47772__$1,(7),ch);
} else {
if((state_val_47773 === (6))){
var inst_47767 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47779_48901 = state_47772__$1;
(statearr_47779_48901[(2)] = inst_47767);

(statearr_47779_48901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (3))){
var inst_47769 = (state_47772[(2)]);
var inst_47770 = cljs.core.async.close_BANG_(out);
var state_47772__$1 = (function (){var statearr_47780 = state_47772;
(statearr_47780[(9)] = inst_47769);

return statearr_47780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47772__$1,inst_47770);
} else {
if((state_val_47773 === (2))){
var inst_47749 = (state_47772[(8)]);
var inst_47751 = (inst_47749 < n);
var state_47772__$1 = state_47772;
if(cljs.core.truth_(inst_47751)){
var statearr_47781_48903 = state_47772__$1;
(statearr_47781_48903[(1)] = (4));

} else {
var statearr_47782_48904 = state_47772__$1;
(statearr_47782_48904[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (11))){
var inst_47749 = (state_47772[(8)]);
var inst_47759 = (state_47772[(2)]);
var inst_47760 = (inst_47749 + (1));
var inst_47749__$1 = inst_47760;
var state_47772__$1 = (function (){var statearr_47783 = state_47772;
(statearr_47783[(8)] = inst_47749__$1);

(statearr_47783[(10)] = inst_47759);

return statearr_47783;
})();
var statearr_47784_48905 = state_47772__$1;
(statearr_47784_48905[(2)] = null);

(statearr_47784_48905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (9))){
var state_47772__$1 = state_47772;
var statearr_47785_48907 = state_47772__$1;
(statearr_47785_48907[(2)] = null);

(statearr_47785_48907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (5))){
var state_47772__$1 = state_47772;
var statearr_47786_48908 = state_47772__$1;
(statearr_47786_48908[(2)] = null);

(statearr_47786_48908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (10))){
var inst_47764 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47787_48909 = state_47772__$1;
(statearr_47787_48909[(2)] = inst_47764);

(statearr_47787_48909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (8))){
var inst_47754 = (state_47772[(7)]);
var state_47772__$1 = state_47772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47772__$1,(11),out,inst_47754);
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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_47788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47788[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_47788[(1)] = (1));

return statearr_47788;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_47772){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47772);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47789){if((e47789 instanceof Object)){
var ex__46544__auto__ = e47789;
var statearr_47790_48911 = state_47772;
(statearr_47790_48911[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48912 = state_47772;
state_47772 = G__48912;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_47772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_47772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47791 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47791[(6)] = c__46638__auto___48894);

return statearr_47791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47793 = (function (f,ch,meta47794){
this.f = f;
this.ch = ch;
this.meta47794 = meta47794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47795,meta47794__$1){
var self__ = this;
var _47795__$1 = this;
return (new cljs.core.async.t_cljs$core$async47793(self__.f,self__.ch,meta47794__$1));
}));

(cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47795){
var self__ = this;
var _47795__$1 = this;
return self__.meta47794;
}));

(cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47796 = (function (f,ch,meta47794,_,fn1,meta47797){
this.f = f;
this.ch = ch;
this.meta47794 = meta47794;
this._ = _;
this.fn1 = fn1;
this.meta47797 = meta47797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47798,meta47797__$1){
var self__ = this;
var _47798__$1 = this;
return (new cljs.core.async.t_cljs$core$async47796(self__.f,self__.ch,self__.meta47794,self__._,self__.fn1,meta47797__$1));
}));

(cljs.core.async.t_cljs$core$async47796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47798){
var self__ = this;
var _47798__$1 = this;
return self__.meta47797;
}));

(cljs.core.async.t_cljs$core$async47796.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47796.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47792_SHARP_){
var G__47799 = (((p1__47792_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47792_SHARP_) : self__.f.call(null,p1__47792_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47799) : f1.call(null,G__47799));
});
}));

(cljs.core.async.t_cljs$core$async47796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47794","meta47794",-386456927,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47793","cljs.core.async/t_cljs$core$async47793",-558404283,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47797","meta47797",277349870,null)], null);
}));

(cljs.core.async.t_cljs$core$async47796.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47796");

(cljs.core.async.t_cljs$core$async47796.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47796");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47796.
 */
cljs.core.async.__GT_t_cljs$core$async47796 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47796(f__$1,ch__$1,meta47794__$1,___$2,fn1__$1,meta47797){
return (new cljs.core.async.t_cljs$core$async47796(f__$1,ch__$1,meta47794__$1,___$2,fn1__$1,meta47797));
});

}

return (new cljs.core.async.t_cljs$core$async47796(self__.f,self__.ch,self__.meta47794,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47800 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47800) : self__.f.call(null,G__47800));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47794","meta47794",-386456927,null)], null);
}));

(cljs.core.async.t_cljs$core$async47793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47793");

(cljs.core.async.t_cljs$core$async47793.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47793.
 */
cljs.core.async.__GT_t_cljs$core$async47793 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47793(f__$1,ch__$1,meta47794){
return (new cljs.core.async.t_cljs$core$async47793(f__$1,ch__$1,meta47794));
});

}

return (new cljs.core.async.t_cljs$core$async47793(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47801 = (function (f,ch,meta47802){
this.f = f;
this.ch = ch;
this.meta47802 = meta47802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47803,meta47802__$1){
var self__ = this;
var _47803__$1 = this;
return (new cljs.core.async.t_cljs$core$async47801(self__.f,self__.ch,meta47802__$1));
}));

(cljs.core.async.t_cljs$core$async47801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47803){
var self__ = this;
var _47803__$1 = this;
return self__.meta47802;
}));

(cljs.core.async.t_cljs$core$async47801.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47801.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47801.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47802","meta47802",-1647645770,null)], null);
}));

(cljs.core.async.t_cljs$core$async47801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47801");

(cljs.core.async.t_cljs$core$async47801.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47801.
 */
cljs.core.async.__GT_t_cljs$core$async47801 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47801(f__$1,ch__$1,meta47802){
return (new cljs.core.async.t_cljs$core$async47801(f__$1,ch__$1,meta47802));
});

}

return (new cljs.core.async.t_cljs$core$async47801(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47804 = (function (p,ch,meta47805){
this.p = p;
this.ch = ch;
this.meta47805 = meta47805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47806,meta47805__$1){
var self__ = this;
var _47806__$1 = this;
return (new cljs.core.async.t_cljs$core$async47804(self__.p,self__.ch,meta47805__$1));
}));

(cljs.core.async.t_cljs$core$async47804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47806){
var self__ = this;
var _47806__$1 = this;
return self__.meta47805;
}));

(cljs.core.async.t_cljs$core$async47804.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47804.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47804.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47804.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47805","meta47805",-721637893,null)], null);
}));

(cljs.core.async.t_cljs$core$async47804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47804");

(cljs.core.async.t_cljs$core$async47804.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47804.
 */
cljs.core.async.__GT_t_cljs$core$async47804 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47804(p__$1,ch__$1,meta47805){
return (new cljs.core.async.t_cljs$core$async47804(p__$1,ch__$1,meta47805));
});

}

return (new cljs.core.async.t_cljs$core$async47804(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47808 = arguments.length;
switch (G__47808) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46638__auto___48983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47829){
var state_val_47830 = (state_47829[(1)]);
if((state_val_47830 === (7))){
var inst_47825 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
var statearr_47831_48986 = state_47829__$1;
(statearr_47831_48986[(2)] = inst_47825);

(statearr_47831_48986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (1))){
var state_47829__$1 = state_47829;
var statearr_47832_48987 = state_47829__$1;
(statearr_47832_48987[(2)] = null);

(statearr_47832_48987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (4))){
var inst_47811 = (state_47829[(7)]);
var inst_47811__$1 = (state_47829[(2)]);
var inst_47812 = (inst_47811__$1 == null);
var state_47829__$1 = (function (){var statearr_47833 = state_47829;
(statearr_47833[(7)] = inst_47811__$1);

return statearr_47833;
})();
if(cljs.core.truth_(inst_47812)){
var statearr_47834_48988 = state_47829__$1;
(statearr_47834_48988[(1)] = (5));

} else {
var statearr_47835_48989 = state_47829__$1;
(statearr_47835_48989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (6))){
var inst_47811 = (state_47829[(7)]);
var inst_47816 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47811) : p.call(null,inst_47811));
var state_47829__$1 = state_47829;
if(cljs.core.truth_(inst_47816)){
var statearr_47836_48990 = state_47829__$1;
(statearr_47836_48990[(1)] = (8));

} else {
var statearr_47837_48991 = state_47829__$1;
(statearr_47837_48991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (3))){
var inst_47827 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47829__$1,inst_47827);
} else {
if((state_val_47830 === (2))){
var state_47829__$1 = state_47829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47829__$1,(4),ch);
} else {
if((state_val_47830 === (11))){
var inst_47819 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
var statearr_47838_48992 = state_47829__$1;
(statearr_47838_48992[(2)] = inst_47819);

(statearr_47838_48992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (9))){
var state_47829__$1 = state_47829;
var statearr_47839_48993 = state_47829__$1;
(statearr_47839_48993[(2)] = null);

(statearr_47839_48993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (5))){
var inst_47814 = cljs.core.async.close_BANG_(out);
var state_47829__$1 = state_47829;
var statearr_47840_48994 = state_47829__$1;
(statearr_47840_48994[(2)] = inst_47814);

(statearr_47840_48994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (10))){
var inst_47822 = (state_47829[(2)]);
var state_47829__$1 = (function (){var statearr_47841 = state_47829;
(statearr_47841[(8)] = inst_47822);

return statearr_47841;
})();
var statearr_47842_48999 = state_47829__$1;
(statearr_47842_48999[(2)] = null);

(statearr_47842_48999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (8))){
var inst_47811 = (state_47829[(7)]);
var state_47829__$1 = state_47829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47829__$1,(11),out,inst_47811);
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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_47843 = [null,null,null,null,null,null,null,null,null];
(statearr_47843[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_47843[(1)] = (1));

return statearr_47843;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_47829){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47829);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47844){if((e47844 instanceof Object)){
var ex__46544__auto__ = e47844;
var statearr_47845_49008 = state_47829;
(statearr_47845_49008[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49015 = state_47829;
state_47829 = G__49015;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_47829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_47829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47846 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47846[(6)] = c__46638__auto___48983);

return statearr_47846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47848 = arguments.length;
switch (G__47848) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47910){
var state_val_47911 = (state_47910[(1)]);
if((state_val_47911 === (7))){
var inst_47906 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47912_49095 = state_47910__$1;
(statearr_47912_49095[(2)] = inst_47906);

(statearr_47912_49095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (20))){
var inst_47876 = (state_47910[(7)]);
var inst_47887 = (state_47910[(2)]);
var inst_47888 = cljs.core.next(inst_47876);
var inst_47862 = inst_47888;
var inst_47863 = null;
var inst_47864 = (0);
var inst_47865 = (0);
var state_47910__$1 = (function (){var statearr_47913 = state_47910;
(statearr_47913[(8)] = inst_47887);

(statearr_47913[(9)] = inst_47862);

(statearr_47913[(10)] = inst_47863);

(statearr_47913[(11)] = inst_47864);

(statearr_47913[(12)] = inst_47865);

return statearr_47913;
})();
var statearr_47914_49096 = state_47910__$1;
(statearr_47914_49096[(2)] = null);

(statearr_47914_49096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (1))){
var state_47910__$1 = state_47910;
var statearr_47915_49097 = state_47910__$1;
(statearr_47915_49097[(2)] = null);

(statearr_47915_49097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (4))){
var inst_47851 = (state_47910[(13)]);
var inst_47851__$1 = (state_47910[(2)]);
var inst_47852 = (inst_47851__$1 == null);
var state_47910__$1 = (function (){var statearr_47916 = state_47910;
(statearr_47916[(13)] = inst_47851__$1);

return statearr_47916;
})();
if(cljs.core.truth_(inst_47852)){
var statearr_47917_49101 = state_47910__$1;
(statearr_47917_49101[(1)] = (5));

} else {
var statearr_47918_49102 = state_47910__$1;
(statearr_47918_49102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (15))){
var state_47910__$1 = state_47910;
var statearr_47922_49103 = state_47910__$1;
(statearr_47922_49103[(2)] = null);

(statearr_47922_49103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (21))){
var state_47910__$1 = state_47910;
var statearr_47923_49104 = state_47910__$1;
(statearr_47923_49104[(2)] = null);

(statearr_47923_49104[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (13))){
var inst_47862 = (state_47910[(9)]);
var inst_47863 = (state_47910[(10)]);
var inst_47864 = (state_47910[(11)]);
var inst_47865 = (state_47910[(12)]);
var inst_47872 = (state_47910[(2)]);
var inst_47873 = (inst_47865 + (1));
var tmp47919 = inst_47862;
var tmp47920 = inst_47863;
var tmp47921 = inst_47864;
var inst_47862__$1 = tmp47919;
var inst_47863__$1 = tmp47920;
var inst_47864__$1 = tmp47921;
var inst_47865__$1 = inst_47873;
var state_47910__$1 = (function (){var statearr_47924 = state_47910;
(statearr_47924[(9)] = inst_47862__$1);

(statearr_47924[(14)] = inst_47872);

(statearr_47924[(10)] = inst_47863__$1);

(statearr_47924[(11)] = inst_47864__$1);

(statearr_47924[(12)] = inst_47865__$1);

return statearr_47924;
})();
var statearr_47925_49105 = state_47910__$1;
(statearr_47925_49105[(2)] = null);

(statearr_47925_49105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (22))){
var state_47910__$1 = state_47910;
var statearr_47926_49106 = state_47910__$1;
(statearr_47926_49106[(2)] = null);

(statearr_47926_49106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (6))){
var inst_47851 = (state_47910[(13)]);
var inst_47860 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47851) : f.call(null,inst_47851));
var inst_47861 = cljs.core.seq(inst_47860);
var inst_47862 = inst_47861;
var inst_47863 = null;
var inst_47864 = (0);
var inst_47865 = (0);
var state_47910__$1 = (function (){var statearr_47927 = state_47910;
(statearr_47927[(9)] = inst_47862);

(statearr_47927[(10)] = inst_47863);

(statearr_47927[(11)] = inst_47864);

(statearr_47927[(12)] = inst_47865);

return statearr_47927;
})();
var statearr_47928_49110 = state_47910__$1;
(statearr_47928_49110[(2)] = null);

(statearr_47928_49110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (17))){
var inst_47876 = (state_47910[(7)]);
var inst_47880 = cljs.core.chunk_first(inst_47876);
var inst_47881 = cljs.core.chunk_rest(inst_47876);
var inst_47882 = cljs.core.count(inst_47880);
var inst_47862 = inst_47881;
var inst_47863 = inst_47880;
var inst_47864 = inst_47882;
var inst_47865 = (0);
var state_47910__$1 = (function (){var statearr_47929 = state_47910;
(statearr_47929[(9)] = inst_47862);

(statearr_47929[(10)] = inst_47863);

(statearr_47929[(11)] = inst_47864);

(statearr_47929[(12)] = inst_47865);

return statearr_47929;
})();
var statearr_47930_49111 = state_47910__$1;
(statearr_47930_49111[(2)] = null);

(statearr_47930_49111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (3))){
var inst_47908 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47910__$1,inst_47908);
} else {
if((state_val_47911 === (12))){
var inst_47896 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47931_49112 = state_47910__$1;
(statearr_47931_49112[(2)] = inst_47896);

(statearr_47931_49112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (2))){
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47910__$1,(4),in$);
} else {
if((state_val_47911 === (23))){
var inst_47904 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47932_49113 = state_47910__$1;
(statearr_47932_49113[(2)] = inst_47904);

(statearr_47932_49113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (19))){
var inst_47891 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47933_49114 = state_47910__$1;
(statearr_47933_49114[(2)] = inst_47891);

(statearr_47933_49114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (11))){
var inst_47862 = (state_47910[(9)]);
var inst_47876 = (state_47910[(7)]);
var inst_47876__$1 = cljs.core.seq(inst_47862);
var state_47910__$1 = (function (){var statearr_47934 = state_47910;
(statearr_47934[(7)] = inst_47876__$1);

return statearr_47934;
})();
if(inst_47876__$1){
var statearr_47935_49119 = state_47910__$1;
(statearr_47935_49119[(1)] = (14));

} else {
var statearr_47936_49120 = state_47910__$1;
(statearr_47936_49120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (9))){
var inst_47898 = (state_47910[(2)]);
var inst_47899 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47910__$1 = (function (){var statearr_47937 = state_47910;
(statearr_47937[(15)] = inst_47898);

return statearr_47937;
})();
if(cljs.core.truth_(inst_47899)){
var statearr_47938_49129 = state_47910__$1;
(statearr_47938_49129[(1)] = (21));

} else {
var statearr_47939_49130 = state_47910__$1;
(statearr_47939_49130[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (5))){
var inst_47854 = cljs.core.async.close_BANG_(out);
var state_47910__$1 = state_47910;
var statearr_47940_49131 = state_47910__$1;
(statearr_47940_49131[(2)] = inst_47854);

(statearr_47940_49131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (14))){
var inst_47876 = (state_47910[(7)]);
var inst_47878 = cljs.core.chunked_seq_QMARK_(inst_47876);
var state_47910__$1 = state_47910;
if(inst_47878){
var statearr_47941_49133 = state_47910__$1;
(statearr_47941_49133[(1)] = (17));

} else {
var statearr_47942_49134 = state_47910__$1;
(statearr_47942_49134[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (16))){
var inst_47894 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47943_49135 = state_47910__$1;
(statearr_47943_49135[(2)] = inst_47894);

(statearr_47943_49135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (10))){
var inst_47863 = (state_47910[(10)]);
var inst_47865 = (state_47910[(12)]);
var inst_47870 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47863,inst_47865);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47910__$1,(13),out,inst_47870);
} else {
if((state_val_47911 === (18))){
var inst_47876 = (state_47910[(7)]);
var inst_47885 = cljs.core.first(inst_47876);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47910__$1,(20),out,inst_47885);
} else {
if((state_val_47911 === (8))){
var inst_47864 = (state_47910[(11)]);
var inst_47865 = (state_47910[(12)]);
var inst_47867 = (inst_47865 < inst_47864);
var inst_47868 = inst_47867;
var state_47910__$1 = state_47910;
if(cljs.core.truth_(inst_47868)){
var statearr_47944_49137 = state_47910__$1;
(statearr_47944_49137[(1)] = (10));

} else {
var statearr_47945_49138 = state_47910__$1;
(statearr_47945_49138[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46541__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46541__auto____0 = (function (){
var statearr_47946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47946[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46541__auto__);

(statearr_47946[(1)] = (1));

return statearr_47946;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46541__auto____1 = (function (state_47910){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47910);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47947){if((e47947 instanceof Object)){
var ex__46544__auto__ = e47947;
var statearr_47948_49141 = state_47910;
(statearr_47948_49141[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49144 = state_47910;
state_47910 = G__49144;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46541__auto__ = function(state_47910){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46541__auto____1.call(this,state_47910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46541__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46541__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_47949 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_47949[(6)] = c__46638__auto__);

return statearr_47949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));

return c__46638__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47951 = arguments.length;
switch (G__47951) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47953 = arguments.length;
switch (G__47953) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47955 = arguments.length;
switch (G__47955) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46638__auto___49183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_47979){
var state_val_47980 = (state_47979[(1)]);
if((state_val_47980 === (7))){
var inst_47974 = (state_47979[(2)]);
var state_47979__$1 = state_47979;
var statearr_47981_49184 = state_47979__$1;
(statearr_47981_49184[(2)] = inst_47974);

(statearr_47981_49184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47980 === (1))){
var inst_47956 = null;
var state_47979__$1 = (function (){var statearr_47982 = state_47979;
(statearr_47982[(7)] = inst_47956);

return statearr_47982;
})();
var statearr_47983_49192 = state_47979__$1;
(statearr_47983_49192[(2)] = null);

(statearr_47983_49192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47980 === (4))){
var inst_47959 = (state_47979[(8)]);
var inst_47959__$1 = (state_47979[(2)]);
var inst_47960 = (inst_47959__$1 == null);
var inst_47961 = cljs.core.not(inst_47960);
var state_47979__$1 = (function (){var statearr_47984 = state_47979;
(statearr_47984[(8)] = inst_47959__$1);

return statearr_47984;
})();
if(inst_47961){
var statearr_47985_49203 = state_47979__$1;
(statearr_47985_49203[(1)] = (5));

} else {
var statearr_47986_49208 = state_47979__$1;
(statearr_47986_49208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47980 === (6))){
var state_47979__$1 = state_47979;
var statearr_47987_49212 = state_47979__$1;
(statearr_47987_49212[(2)] = null);

(statearr_47987_49212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47980 === (3))){
var inst_47976 = (state_47979[(2)]);
var inst_47977 = cljs.core.async.close_BANG_(out);
var state_47979__$1 = (function (){var statearr_47988 = state_47979;
(statearr_47988[(9)] = inst_47976);

return statearr_47988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47979__$1,inst_47977);
} else {
if((state_val_47980 === (2))){
var state_47979__$1 = state_47979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47979__$1,(4),ch);
} else {
if((state_val_47980 === (11))){
var inst_47959 = (state_47979[(8)]);
var inst_47968 = (state_47979[(2)]);
var inst_47956 = inst_47959;
var state_47979__$1 = (function (){var statearr_47989 = state_47979;
(statearr_47989[(10)] = inst_47968);

(statearr_47989[(7)] = inst_47956);

return statearr_47989;
})();
var statearr_47990_49220 = state_47979__$1;
(statearr_47990_49220[(2)] = null);

(statearr_47990_49220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47980 === (9))){
var inst_47959 = (state_47979[(8)]);
var state_47979__$1 = state_47979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47979__$1,(11),out,inst_47959);
} else {
if((state_val_47980 === (5))){
var inst_47959 = (state_47979[(8)]);
var inst_47956 = (state_47979[(7)]);
var inst_47963 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47959,inst_47956);
var state_47979__$1 = state_47979;
if(inst_47963){
var statearr_47992_49222 = state_47979__$1;
(statearr_47992_49222[(1)] = (8));

} else {
var statearr_47993_49223 = state_47979__$1;
(statearr_47993_49223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47980 === (10))){
var inst_47971 = (state_47979[(2)]);
var state_47979__$1 = state_47979;
var statearr_47994_49224 = state_47979__$1;
(statearr_47994_49224[(2)] = inst_47971);

(statearr_47994_49224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47980 === (8))){
var inst_47956 = (state_47979[(7)]);
var tmp47991 = inst_47956;
var inst_47956__$1 = tmp47991;
var state_47979__$1 = (function (){var statearr_47995 = state_47979;
(statearr_47995[(7)] = inst_47956__$1);

return statearr_47995;
})();
var statearr_47996_49225 = state_47979__$1;
(statearr_47996_49225[(2)] = null);

(statearr_47996_49225[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_47997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47997[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_47997[(1)] = (1));

return statearr_47997;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_47979){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_47979);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e47998){if((e47998 instanceof Object)){
var ex__46544__auto__ = e47998;
var statearr_47999_49230 = state_47979;
(statearr_47999_49230[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49246 = state_47979;
state_47979 = G__49246;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_47979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_47979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_48000 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_48000[(6)] = c__46638__auto___49183);

return statearr_48000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48002 = arguments.length;
switch (G__48002) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46638__auto___49249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_48040){
var state_val_48041 = (state_48040[(1)]);
if((state_val_48041 === (7))){
var inst_48036 = (state_48040[(2)]);
var state_48040__$1 = state_48040;
var statearr_48042_49250 = state_48040__$1;
(statearr_48042_49250[(2)] = inst_48036);

(statearr_48042_49250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (1))){
var inst_48003 = (new Array(n));
var inst_48004 = inst_48003;
var inst_48005 = (0);
var state_48040__$1 = (function (){var statearr_48043 = state_48040;
(statearr_48043[(7)] = inst_48005);

(statearr_48043[(8)] = inst_48004);

return statearr_48043;
})();
var statearr_48044_49251 = state_48040__$1;
(statearr_48044_49251[(2)] = null);

(statearr_48044_49251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (4))){
var inst_48008 = (state_48040[(9)]);
var inst_48008__$1 = (state_48040[(2)]);
var inst_48009 = (inst_48008__$1 == null);
var inst_48010 = cljs.core.not(inst_48009);
var state_48040__$1 = (function (){var statearr_48045 = state_48040;
(statearr_48045[(9)] = inst_48008__$1);

return statearr_48045;
})();
if(inst_48010){
var statearr_48046_49253 = state_48040__$1;
(statearr_48046_49253[(1)] = (5));

} else {
var statearr_48047_49255 = state_48040__$1;
(statearr_48047_49255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (15))){
var inst_48030 = (state_48040[(2)]);
var state_48040__$1 = state_48040;
var statearr_48048_49256 = state_48040__$1;
(statearr_48048_49256[(2)] = inst_48030);

(statearr_48048_49256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (13))){
var state_48040__$1 = state_48040;
var statearr_48049_49257 = state_48040__$1;
(statearr_48049_49257[(2)] = null);

(statearr_48049_49257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (6))){
var inst_48005 = (state_48040[(7)]);
var inst_48026 = (inst_48005 > (0));
var state_48040__$1 = state_48040;
if(cljs.core.truth_(inst_48026)){
var statearr_48050_49258 = state_48040__$1;
(statearr_48050_49258[(1)] = (12));

} else {
var statearr_48051_49259 = state_48040__$1;
(statearr_48051_49259[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (3))){
var inst_48038 = (state_48040[(2)]);
var state_48040__$1 = state_48040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48040__$1,inst_48038);
} else {
if((state_val_48041 === (12))){
var inst_48004 = (state_48040[(8)]);
var inst_48028 = cljs.core.vec(inst_48004);
var state_48040__$1 = state_48040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48040__$1,(15),out,inst_48028);
} else {
if((state_val_48041 === (2))){
var state_48040__$1 = state_48040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48040__$1,(4),ch);
} else {
if((state_val_48041 === (11))){
var inst_48020 = (state_48040[(2)]);
var inst_48021 = (new Array(n));
var inst_48004 = inst_48021;
var inst_48005 = (0);
var state_48040__$1 = (function (){var statearr_48052 = state_48040;
(statearr_48052[(7)] = inst_48005);

(statearr_48052[(8)] = inst_48004);

(statearr_48052[(10)] = inst_48020);

return statearr_48052;
})();
var statearr_48053_49261 = state_48040__$1;
(statearr_48053_49261[(2)] = null);

(statearr_48053_49261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (9))){
var inst_48004 = (state_48040[(8)]);
var inst_48018 = cljs.core.vec(inst_48004);
var state_48040__$1 = state_48040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48040__$1,(11),out,inst_48018);
} else {
if((state_val_48041 === (5))){
var inst_48013 = (state_48040[(11)]);
var inst_48005 = (state_48040[(7)]);
var inst_48008 = (state_48040[(9)]);
var inst_48004 = (state_48040[(8)]);
var inst_48012 = (inst_48004[inst_48005] = inst_48008);
var inst_48013__$1 = (inst_48005 + (1));
var inst_48014 = (inst_48013__$1 < n);
var state_48040__$1 = (function (){var statearr_48054 = state_48040;
(statearr_48054[(12)] = inst_48012);

(statearr_48054[(11)] = inst_48013__$1);

return statearr_48054;
})();
if(cljs.core.truth_(inst_48014)){
var statearr_48055_49266 = state_48040__$1;
(statearr_48055_49266[(1)] = (8));

} else {
var statearr_48056_49267 = state_48040__$1;
(statearr_48056_49267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (14))){
var inst_48033 = (state_48040[(2)]);
var inst_48034 = cljs.core.async.close_BANG_(out);
var state_48040__$1 = (function (){var statearr_48058 = state_48040;
(statearr_48058[(13)] = inst_48033);

return statearr_48058;
})();
var statearr_48059_49271 = state_48040__$1;
(statearr_48059_49271[(2)] = inst_48034);

(statearr_48059_49271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (10))){
var inst_48024 = (state_48040[(2)]);
var state_48040__$1 = state_48040;
var statearr_48060_49275 = state_48040__$1;
(statearr_48060_49275[(2)] = inst_48024);

(statearr_48060_49275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48041 === (8))){
var inst_48013 = (state_48040[(11)]);
var inst_48004 = (state_48040[(8)]);
var tmp48057 = inst_48004;
var inst_48004__$1 = tmp48057;
var inst_48005 = inst_48013;
var state_48040__$1 = (function (){var statearr_48061 = state_48040;
(statearr_48061[(7)] = inst_48005);

(statearr_48061[(8)] = inst_48004__$1);

return statearr_48061;
})();
var statearr_48062_49276 = state_48040__$1;
(statearr_48062_49276[(2)] = null);

(statearr_48062_49276[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_48063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48063[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_48063[(1)] = (1));

return statearr_48063;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_48040){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_48040);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e48064){if((e48064 instanceof Object)){
var ex__46544__auto__ = e48064;
var statearr_48065_49278 = state_48040;
(statearr_48065_49278[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49279 = state_48040;
state_48040 = G__49279;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_48040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_48040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_48066 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_48066[(6)] = c__46638__auto___49249);

return statearr_48066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48068 = arguments.length;
switch (G__48068) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46638__auto___49282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46639__auto__ = (function (){var switch__46540__auto__ = (function (state_48110){
var state_val_48111 = (state_48110[(1)]);
if((state_val_48111 === (7))){
var inst_48106 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48112_49283 = state_48110__$1;
(statearr_48112_49283[(2)] = inst_48106);

(statearr_48112_49283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (1))){
var inst_48069 = [];
var inst_48070 = inst_48069;
var inst_48071 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48110__$1 = (function (){var statearr_48113 = state_48110;
(statearr_48113[(7)] = inst_48071);

(statearr_48113[(8)] = inst_48070);

return statearr_48113;
})();
var statearr_48114_49284 = state_48110__$1;
(statearr_48114_49284[(2)] = null);

(statearr_48114_49284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (4))){
var inst_48074 = (state_48110[(9)]);
var inst_48074__$1 = (state_48110[(2)]);
var inst_48075 = (inst_48074__$1 == null);
var inst_48076 = cljs.core.not(inst_48075);
var state_48110__$1 = (function (){var statearr_48115 = state_48110;
(statearr_48115[(9)] = inst_48074__$1);

return statearr_48115;
})();
if(inst_48076){
var statearr_48116_49292 = state_48110__$1;
(statearr_48116_49292[(1)] = (5));

} else {
var statearr_48117_49293 = state_48110__$1;
(statearr_48117_49293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (15))){
var inst_48100 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48118_49294 = state_48110__$1;
(statearr_48118_49294[(2)] = inst_48100);

(statearr_48118_49294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (13))){
var state_48110__$1 = state_48110;
var statearr_48119_49295 = state_48110__$1;
(statearr_48119_49295[(2)] = null);

(statearr_48119_49295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (6))){
var inst_48070 = (state_48110[(8)]);
var inst_48095 = inst_48070.length;
var inst_48096 = (inst_48095 > (0));
var state_48110__$1 = state_48110;
if(cljs.core.truth_(inst_48096)){
var statearr_48120_49296 = state_48110__$1;
(statearr_48120_49296[(1)] = (12));

} else {
var statearr_48121_49297 = state_48110__$1;
(statearr_48121_49297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (3))){
var inst_48108 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48110__$1,inst_48108);
} else {
if((state_val_48111 === (12))){
var inst_48070 = (state_48110[(8)]);
var inst_48098 = cljs.core.vec(inst_48070);
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48110__$1,(15),out,inst_48098);
} else {
if((state_val_48111 === (2))){
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48110__$1,(4),ch);
} else {
if((state_val_48111 === (11))){
var inst_48078 = (state_48110[(10)]);
var inst_48074 = (state_48110[(9)]);
var inst_48088 = (state_48110[(2)]);
var inst_48089 = [];
var inst_48090 = inst_48089.push(inst_48074);
var inst_48070 = inst_48089;
var inst_48071 = inst_48078;
var state_48110__$1 = (function (){var statearr_48122 = state_48110;
(statearr_48122[(7)] = inst_48071);

(statearr_48122[(8)] = inst_48070);

(statearr_48122[(11)] = inst_48090);

(statearr_48122[(12)] = inst_48088);

return statearr_48122;
})();
var statearr_48123_49300 = state_48110__$1;
(statearr_48123_49300[(2)] = null);

(statearr_48123_49300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (9))){
var inst_48070 = (state_48110[(8)]);
var inst_48086 = cljs.core.vec(inst_48070);
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48110__$1,(11),out,inst_48086);
} else {
if((state_val_48111 === (5))){
var inst_48078 = (state_48110[(10)]);
var inst_48071 = (state_48110[(7)]);
var inst_48074 = (state_48110[(9)]);
var inst_48078__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48074) : f.call(null,inst_48074));
var inst_48079 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48078__$1,inst_48071);
var inst_48080 = cljs.core.keyword_identical_QMARK_(inst_48071,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48081 = ((inst_48079) || (inst_48080));
var state_48110__$1 = (function (){var statearr_48124 = state_48110;
(statearr_48124[(10)] = inst_48078__$1);

return statearr_48124;
})();
if(cljs.core.truth_(inst_48081)){
var statearr_48125_49316 = state_48110__$1;
(statearr_48125_49316[(1)] = (8));

} else {
var statearr_48126_49317 = state_48110__$1;
(statearr_48126_49317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (14))){
var inst_48103 = (state_48110[(2)]);
var inst_48104 = cljs.core.async.close_BANG_(out);
var state_48110__$1 = (function (){var statearr_48128 = state_48110;
(statearr_48128[(13)] = inst_48103);

return statearr_48128;
})();
var statearr_48129_49322 = state_48110__$1;
(statearr_48129_49322[(2)] = inst_48104);

(statearr_48129_49322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (10))){
var inst_48093 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48130_49323 = state_48110__$1;
(statearr_48130_49323[(2)] = inst_48093);

(statearr_48130_49323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (8))){
var inst_48078 = (state_48110[(10)]);
var inst_48070 = (state_48110[(8)]);
var inst_48074 = (state_48110[(9)]);
var inst_48083 = inst_48070.push(inst_48074);
var tmp48127 = inst_48070;
var inst_48070__$1 = tmp48127;
var inst_48071 = inst_48078;
var state_48110__$1 = (function (){var statearr_48131 = state_48110;
(statearr_48131[(7)] = inst_48071);

(statearr_48131[(14)] = inst_48083);

(statearr_48131[(8)] = inst_48070__$1);

return statearr_48131;
})();
var statearr_48132_49324 = state_48110__$1;
(statearr_48132_49324[(2)] = null);

(statearr_48132_49324[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46541__auto__ = null;
var cljs$core$async$state_machine__46541__auto____0 = (function (){
var statearr_48133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48133[(0)] = cljs$core$async$state_machine__46541__auto__);

(statearr_48133[(1)] = (1));

return statearr_48133;
});
var cljs$core$async$state_machine__46541__auto____1 = (function (state_48110){
while(true){
var ret_value__46542__auto__ = (function (){try{while(true){
var result__46543__auto__ = switch__46540__auto__(state_48110);
if(cljs.core.keyword_identical_QMARK_(result__46543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46543__auto__;
}
break;
}
}catch (e48134){if((e48134 instanceof Object)){
var ex__46544__auto__ = e48134;
var statearr_48135_49325 = state_48110;
(statearr_48135_49325[(5)] = ex__46544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49326 = state_48110;
state_48110 = G__49326;
continue;
} else {
return ret_value__46542__auto__;
}
break;
}
});
cljs$core$async$state_machine__46541__auto__ = function(state_48110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46541__auto____1.call(this,state_48110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46541__auto____0;
cljs$core$async$state_machine__46541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46541__auto____1;
return cljs$core$async$state_machine__46541__auto__;
})()
})();
var state__46640__auto__ = (function (){var statearr_48136 = (f__46639__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46639__auto__.cljs$core$IFn$_invoke$arity$0() : f__46639__auto__.call(null));
(statearr_48136[(6)] = c__46638__auto___49282);

return statearr_48136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46640__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
