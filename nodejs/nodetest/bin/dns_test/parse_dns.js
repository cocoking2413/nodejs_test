/**
 * Created by Administrator on 2016-07-01.
 */
var querystring = require("querystring");
var dns = require("dns");
var util = require('util');

exports.parseDns = function (res, req,callback) {
    var postData = '';
    req.on('data', function (chunk) {
        postData += chunk;
    });
    req.on("end", function () {
        if(postData) {
            var type = querystring.parse(postData).seach_type;
            console.log(typeof type);
            switch (type) {
                case "1":
                var retData = getDns(postData, function (domain, addresses) {
                        var str = util.inspect({
                            Domain: domain,
                            IP: addresses.join(',')
                        });
                        callback(str);
                    });
                    break;
                case "2":
                    var ret = reDns(postData, function (domain, addresses) {
                        var str = util.inspect({
                            Domain: domain,
                            IP: addresses.join(',')
                        });
                        callback(str);
                    });
                    break;
                default: callback(false);
                    break;
            }
        }else{
            callback(false);
        }
    });
};

function getDns(postData, callBack) {
    var domain = querystring.parse(postData).seach_dns;
    console.log("domain:"+domain);
    dns.resolve(domain, function (err, address) {
        if (!address) {
            address = ['not found'];
        }
        callBack(domain, address);
    });
    //dns.lookup(domain,4, function (err, address) {
    //    if (!address) {
    //        address = ['not found'];
    //    }
    //    callBack(domain, address);
    //});
}

function reDns(postData,callback){
    var domain = querystring.parse(postData).seach_dns;
    console.log("domain:"+domain);
    dns.reverse(domain, function (err, ip) {
        if(err){
            console.log(err);
        }
        if (!ip) {
            ip = ['not found'];
        }
        callback(domain, ip);
    });
}
