/**
 * Created by Administrator on 2016-06-25.
 */
var dns=require("dns");

dns.lookup("www.zbzbx.com",4,function(err, address, family){
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });
});


dns.lookup("www.baidu.com",4,function(err, address, family){
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });
});
//console.log(ip);

dns.lookup('www.github.com', function onLookup(err, address, family) {
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });
});


//var path=require("path");
//
//console.log(path.normalize('../public'));//规范化路径
//console.log(path.resolve('../public'));//绝对路径
//console.log(path.isAbsolute('../public'));//判断是否是绝对路径
//console.log(path.isAbsolute(path.resolve('../public')));//判断是否是绝对路径
//console.log(path.dirname("./Tst/test.js"));//返回路径中文件夹部分
//console.log(path.basename("./Tst/test.js"));//返回路径中最后一部分
//console.log(path.extname('./Tst/test.js'));//返回路径中文件后缀名
//console.log("\'"+path.extname('./www')+"\'");//返回路径中文件后缀名
//console.log(path.parse('./Tst/test.js'));//路径对象
//console.log(path.parse(path.resolve('../public')));//路径对象
//console.log(path.format(path.parse('./Tst/test.js')));//toString/******************貌似有点小问题**********************8/
//
//console.log(path.sep);//平台文件路径分隔符
//console.log(path.delimiter);//平台分隔符
//console.log(path.posix);//提供上述 path 的方法，不过总是以 posix 兼容的方式交互。
//console.log(path.win32);//提供上述 path 的方法，不过总是以 win32 兼容的方式交互。
//
//
//console.log(path.posix.format(path.parse('./Tst/test.js')));


//var os=require("os");
//console.log(os.endianness());//os字节序
//console.log(os.hostname());//主机名
//console.log(os.type());//os名
//console.log(os.platform());//os平台
//console.log(os.arch());//cpu架构
//console.log(os.release());//发行版本
//console.log(os.uptime());//os运行时间/s
//console.log(os.loadavg());//平均负载数组
//console.log(os.totalmem()/8/1024/1024/1024+" GB");//内存总量/字节
//console.log(os.freemem()/8/1024/1024/1024+" GB");//内存总量/字节
//console.log(os.cpus());//返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
//console.log(os.networkInterfaces());//网络接口列表

//var util=require("util");
//var obj=new Array();
//obj.push("aaa");
//var other={obj:[1,2]};
//
//console.log(util.isArray(obj));
//console.log(util.isArray(other.obj));
//console.log(util.isRegExp(/\/d/));
//console.log(util.isDate(new Date()));

//var a = {
//    get latest () {
//        if(this.log.length > 0) {
//            return this.log[this.log.length - 1];
//        }
//        else{
//            return null;
//        }
//    },
//    log: []
//};
//a.log[0] = "a";
//a.log[1] = "b";
//console.log(a.latest);
//a.log.push("ccc");
//console.log(a.latest);

//function Hello(){
//    var name;
//    this.setName=function(name){
//        this.name=name;
//    };
//    this.sayHello=function(){
//        console.log("hello "+this.name+"!");
//    };
//}
//var hello=new Hello();
////hello.setName("coco");
//hello.sayHello();

//function say(words){
//    console.log("say:"+words);
//}
//function exe(name,func){
//    func(name);
//}
//
//exe("dddd",function(a){
//    console.log("mysay:"+a);
//});


//var cmd="console.log(Object.getOwnPropertyNames(global));";
//eval(cmd);
//var ejs=require("ejs");
//app.engine("html",ejs._express);
//app.set("view engine","html");

/*****
 *全局变量方法
 * ******/
//for(var i in global){
//    console.log("var "+ i+" = "+global[i])
//}

//console.log(Object.getOwnPropertyNames(global));

//for(var i in module){
//    console.log("var "+ i + " = "+module[i])
//}
//console.log(__filename);//当前代码所在文件名
//
//console.log(__dirname);//正在执行脚本目录
//
//function timerPrint(){
//    console.log(new Date());
//}
//var t=setTimeout(timerPrint,2000);
////clearTimeout(t);
//
//var t1=setInterval(function(){timerPrint();console.log("interval...");},1000);
//var t3=setInterval(function(){timerPrint();console.log("interval3...");},5000);
//var t2=setTimeout(function(){timerPrint();console.log("clear interval");clearInterval(t1);process.exit();},10000);
//console.log("over.");

