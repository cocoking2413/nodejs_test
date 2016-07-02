/**
 * Created by Administrator on 2016-06-25.
 */
/**********
 * Test
 * **********/
String.prototype.replaceAll = function(s1,s2) {
    return this.replace(new RegExp(s1,"gm"),s2);
};
var PORT = 3000;

var http = require('http');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');
var mine = require('./MINE.js').types;
var path = require('path');


var server = http.createServer(function (request, response) {
    var urls = url.parse(request.url);
    var pathname = urls.pathname;
    pathname = decodeURI(pathname);
    var realPath = path.join("play-24243636d7", pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';


    fs.exists(realPath, function (exists) {
        if (!exists) {
            if (urls.pathname == "/get_lrc") {
                var aa = qs.parse(urls.query);
                var lrc_name = aa.method;

                if (lrc_name == "get_lyric_data") {//获取指定歌词名的歌词内容
                    var lrc_file_name = aa.name;
                    if (lrc_file_name == '') {
                        error_404(response, pathname);
                    } else {
                        var patha = path.join("play-24243636d7", "mp3" , lrc_file_name);
                        fs.exists(patha, function (exist) {
                            if (exist) {
                                fs.readFile(patha, function (err, file) {
                                    if (err) {
                                        error_500(err);
                                    } else {
                                        var data = file.toString().replaceAll("\r\n", ",").replaceAll("\n",",");
                                        var str = {
                                            state: "success",
                                            message: "all have done",
                                            lrc: data
                                        };
                                        return_200(JSON.stringify(str));
                                    }
                                });
                            } else {
                                var str={
                                    state:"success",
                                    message:"all have done",
                                    lrc: "没有歌曲!"
                                };
                                return_200(JSON.stringify(str));
                            }
                        });
                    }
                }
                else if (lrc_name == "get_music_list")//获取所有歌曲列表
                {
                    fs.readdir("play-24243636d7/mp3", function(err,files){
                        if(err){console.log(0);
                            error_404(response,pathname);
                        }
                        var music_list=new Array();
                        files.forEach(function(filename){
                           if(filename.indexOf(".mp3")>0){
                               music_list.push(filename);
                           }
                        });
                        var str={
                            state:"success",
                            music_list:music_list
                        };
                        return_200(JSON.stringify(str));
                    });
                }
                else {
                    error_404(response, pathname);
                }
            } else {
                error_404(response, pathname);
            }
        } else {
            fs.readFile(realPath, function (err, file) {
                if (err) {
                    error_500(err);
                } else {
                    return_200(file);
                }
            });
        }
    });
    function return_200(file) {
        var contentType = mine[ext] || "text/html";
        response.writeHead(200, {
            'Content-Type': contentType,
            'charset': 'UTF-8'
        });
        response.write(file);
        response.end();
    }

    function error_404(response, pathname) {
        response.writeHead(404, {
            'Content-Type': 'text/html;',
            'charset': 'UTF-8'
        });
        response.write("This request URL " + pathname + " was not found on this server.");
        response.end();
    }

    function error_500(err) {
        response.writeHead(500, {
            'Content-Type': 'text/html',
            'charset': 'UTF-8'
        });
        response.write(JSON.stringify(err));
        response.end();
    }
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");


/******
 *html页面响应（包括js，css等资源文件处理）
 * ******/
//var http = require("http");
//var fs = require("fs");
//var url = require("url");
//exports.start = function () {
//    http.createServer(function (request, response) {
//        var pathname = url.parse(request.url).pathname;
//        var ext = pathname.match(/(\.[^.]+|)$/)[0];//取url后缀
//        switch (ext) {
//            case ".css":
//            case  ".js":
//                fs.readFile("." + request.url, "utf-8", function (err, data) {
//                    if (err)throw err;
//                    response.writeHead(200, {
//                        "Content-Type": {
//                            ".css": "text/css",
//                            ".js": "application/javascript"
//                        }[ext]
//                    });
//                    response.write(data);
//                    response.end();
//                });
//                break;
//            default:
//                fs.readFile('./index.html', 'utf-8', function (err, data) {//读取内容
//                    if (err) throw err;
//                    response.writeHead(200, {
//                        "Content-Type": "text/html"
//                    });
//                    response.write(data);
//                    response.end();
//                });
//        }
//    }).listen(8000);
//    console.log("server start...");
//};

/*****
 * 简单响应html页面
 * *****/
//var http = require("http");
//var fs=require("fs");
//exports.start = function(){
//    http.createServer(function(request, response) {
//        fs.readFile("./index.html","utf-8",function(err,data){
//            if(err)throw err;
//            response.writeHead(200,{"Content-Type":"text/html"});
//            response.write(data);
//            response.end();
//        });
//    }).listen(8000);
//    console.log("server start...");
//};

/****
 * http
 * ****/
//var http = require("http");
//http.createServer(function (request, response) {
//    //发送头文件
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//
//    //发送内容body
//    response.write("dddddddddddddddddd<br/>dddddddddddddddddddddd /r/n");
//
//    var fs = require("fs");
//    //var data=fs.readFile("./www",function(err,data){
//    //    if(err)return console.error(err);
//    //    console.log((new Date())+data.toString());
//    //});
//    var data = fs.readFileSync("./eventdemo.js");
//    response.write(data.toString());
//
//    response.end("over!!");
//}).listen(8000);
//
//console.log("server over");

/*****
 * TCP
 * ******/
//var net=require("net");
//var server=net.createServer(function(socket){
//   socket.write("over aaaaaaaaaaaaaaa");
//    socket.pipe(socket);
//});
//server.listen(3000,'127.0.0.1');
//console.log("server over");