/**
 * Created by Administrator on 2016-06-29.
 */
var http=require("http");
var qs=require("querystring");
var util=require("util");

http.createServer(function(req,res){
    var post="";
    req.on("data",function(chunk){
        post+=chunk;
    });
    req.on("end",function(){
        post=qs.parse(post);
        console.log(post);
    });
    res.end();

}).listen(4000);
console.log("Server runing at port: " + 4000 + ".");