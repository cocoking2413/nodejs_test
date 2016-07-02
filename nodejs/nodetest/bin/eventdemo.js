/**
 * Created by Administrator on 2016-06-25.
 */
/*******
 * 事件
 * ********/

////导入包
//var events = require("events");
////创建一个事件对象
//var eventEmitter = new events.EventEmitter();
////创建一个事件处理
//var connectHandler = function connect() {
//    console.log('connection successful.');
//    //触发数据回执函数
//    eventEmitter.emit("data_received");
//};
////绑定连接处理事件
//eventEmitter.on("connection",connectHandler);
////绑定数据回执事件到一个匿名函数
//eventEmitter.on('data_received',function(){
//    console.log("data_received successful.");
//});
////触发连接事件
//eventEmitter.emit("connection");
//console.log("over at : "+(new Date()));

/******
 * 事件发射器
 * *****/
var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log("listener1 executed.");
};
var listener2 = function listener2() {
    console.log("listener2 executed.");
};

eventEmitter.addListener("connection", listener1);
eventEmitter.on("connection", listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + ' Listener listening to connection event');

eventEmitter.emit("connection");

eventEmitter.removeListener("connection", listener1);
console.log("listener1 remove.");

eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + ' Listener listening to connection event');

console.log("over at : " + (new Date()));



