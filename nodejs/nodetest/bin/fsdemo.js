/**
 * Created by Administrator on 2016-06-25.
 */
/**********
 * 链式流
 * ********/
var fs=require("fs");
var zlib=require("zlib");

//压缩文件 test.txt 到 test.txt.gz
//fs.createReadStream("test.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("test.txt.gz"));

//解压缩文件 test.txt.gz 到 test.txt
fs.createReadStream("test.txt.gz").pipe(zlib.createGzip()).pipe(fs.createWriteStream("test.txt"));

console.log("over at:"+(new Date()));



/**********
 * 管道流
 * ********/
//var fs=require("fs");
////创建一个可读的流
//var readerStream=fs.createReadStream("./www");
////创建一个可写的流
//var writerStream=fs.createWriteStream("./test.txt");
////管道读写操作
//readerStream.pipe(writerStream);
//
//console.log("over at"+(new Date()));

/**********
 * 文件流写入
 * ********/
//var fs=require("fs");
//var data='welcome to here';
//
////创建一个可写的流
//var writerStream=fs.createWriteStream("test.txt");
//
////以utf8，写一个数据流
//writerStream.write(data,"utf8");
////结束流文件
//writerStream.end();
//
////流事件处理
//writerStream.on("finish",function(){
//    console.log("write finish!");
//});
//writerStream.on("error",function(err){
//console.error(err);
//});
//console.log("over at:"+(new Date()));

/********
 * 文件流读取
 * ************/
//var fs = require("fs");
//var data = '';

////创建一个可读的流
//var readerStream = fs.createReadStream("./server.js");
//readerStream.setEncoding("utf8");
//
//readerStream.on("data", function (chunk) {
//    data += chunk;
//});
//readerStream.on("error", function (err) {
//    console.error(err.stack);
//});
//readerStream.on("finish", function () {
//    console.log("read finish!");
//});
//readerStream.on("end", function () {
//    console.log(data);
//    console.log("read end.");
//});
//console.log("over at:"+(new Date()));

/*****
 * 文件读取（阻塞，非阻塞）
 * ****/
//var fs=require("fs");
////var data=fs.readFileSync("./server.js");
//var data=fs.readFile("./eventdemo.js",function(error,data){
//    if(error){console.log(error.stack);
//    return;
//    }
//    console.log(data.toString());
//});
////console.log(data.toString());
//console.log("over!");

/*****
 * 缓冲器
 * ***/
//var buf=new Buffer(256);
//var len=buf.write("1234567890 1234567890 汉字 over.    ",20,28);
//console.log("length:"+len);
//
//console.log(buf.toJSON());
