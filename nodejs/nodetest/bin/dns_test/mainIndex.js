/**
 * Created by Administrator on 2016-07-01.
 */
var fs = require("fs");
var url = require("url");
//var path=require("path");
var help = require("./server_help");
exports.goIndex = function (callback) {
    //var readPath=url.parse('./dns_test/index.html').pathname;
    //console.log(path.resolve(readPath));
    fs.readFile('index.html', function (err, data) {
        if (err) {
            return console.error(err);
            callback(false);
        }
        callback(data);
    });
};