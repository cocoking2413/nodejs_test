/**
 * Created by Administrator on 2016-07-01.
 */
var querystring = require("querystring");
var dns = require("dns");

exports.parseDns = function (res, req) {
    var postData = '';
    req.addListener("data", function (chunk) {
        postData += chunk;
    });
    req.addListener("end", function () {
        var retData = getDns(postData, function (domain, addresses) {
            var str = JSON.stringify({
                Domain: domain,
                IP: addresses.join(',')
            });

        });
    });
};

function getDns(postData,callBack){
    var domain=querystring.parse(postData).seach_dns;
    console.log(domain);
    dns.resolve(domain,function(err,address){
       if(!address){
           address=['not found'];
       }
        callBack(domain,address);
    });
}
