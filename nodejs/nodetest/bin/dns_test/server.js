/**
 * Created by Administrator on 2016-07-01.
 */
var http = require("http");
var url = require("url");
var mainIdex = require("./mainIndex.js");
var parse_dns = require("./parse_dns.js");
var path = require("path");
var fs = require("fs");
var util = require("util");

var server = http.createServer(function (req, response) {
    var pathname = url.parse(req.url).pathname;
    var ext = path.extname(pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    console.log("pathname:" + pathname);
    //req.setEncoding("utf8");
    router(response, req, pathname);

    var return_200 = function (file) {
        var contentType = mine[ext] || "text/html";
        response.writeHead(200, {
            'Content-Type': contentType,
            'charset': 'UTF-8'
        });
        response.write(file);
        response.end();
    };

    var error_404 = function (pathname) {
        response.writeHead(404, {
            'Content-Type': 'text/html;',
            'charset': 'UTF-8'
        });
        response.write("This request URL " + pathname + " was not found on this server.");
        response.end();
    };

    var error_500 = function (err) {
        response.writeHead(500, {
            'Content-Type': 'text/html',
            'charset': 'UTF-8'
        });
        response.write(JSON.stringify(err));
        response.end();
    };

    function router(res, req, pathname) {
        var absurl = path.win32.resolve("." + pathname);
        console.log(absurl);
        switch (ext) {
            case ".js":
            case ".css":
                fs.exists(absurl, function (exist) {
                    if (exist) {
                        fs.readFile(absurl, function (err, file) {
                            if (err) {
                                error_500(err);
                            } else {
                                return_200(file);
                            }
                        });
                    } else {
                        try {
                            error_404(pathname);
                        } catch (e) {
                            console.log(1);
                            console.error(e);
                        }
                    }
                });
                break;
            default:
                break;
        }
        switch (pathname) {
            case '/parse':
                parse_dns.parseDns(res, req);
                break;
            default:
                mainIdex.goIndex(res);
                break;
        }
    }
}).listen(3000);

//console.log(util.inspect(server));

console.log("server running on port:" + 3000);

