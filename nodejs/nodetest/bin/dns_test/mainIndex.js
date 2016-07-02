/**
 * Created by Administrator on 2016-07-01.
 */
var fs=require("fs");
var url=require("url");
//var path=require("path");
var help=require("./server_help");
exports.goIndex=function(res){
    //var readPath=url.parse('./dns_test/index.html').pathname;
    //console.log(path.resolve(readPath));
    var indexpage=fs.readFile('./dns_test/index.html');
    try {
        help.return_200("333",res,'./dns_test/index.html', indexpage);
    }catch (e){
        console.log(e);

    }
};