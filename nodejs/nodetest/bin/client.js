/**
 * Created by Administrator on 2016-06-29.
 */
var http=require("http");

var options={//请求项
    host:'localhost',
    port:'3000',
    path:'/index.html'
};
//处理响应函数
var callback=function(res){
    var body='';
    res.on("data",function(data){
        body+=data;
    });
    res.on("end",function(){
        console.log(body);
    });
};
var req=http.request(options,callback);
req.end();
