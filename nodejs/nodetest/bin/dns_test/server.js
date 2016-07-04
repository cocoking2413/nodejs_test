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
var mine = require('../MINE.js').types;

var server = http.createServer(function (req, response) {
    var pathname = url.parse(req.url).pathname;
    var ext = path.extname(pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    console.log("pathname:" + pathname);

    //req.setEncoding("utf8");

    router(pathname);

    function router(pathname) {

        var absurl = path.win32.resolve(".." + pathname);
        console.log(ext);
        switch (ext) {
            case "js":
            case "css":
            case "ico":
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
                            error_404(absurl);
                        } catch (e) {
                            console.error(e);
                        }
                    }
                });
                break;
            default:
                switch (pathname) {
                    case '/parse':
                        console.log(true);
                        parse_dns.parseDns(response, req, function (str) {
                            if (str) {
                                return_200(str);
                            } else {
                                error_404(pathname);
                            }
                        });
                        break;
                    default:
                        try {
                            mainIdex.goIndex(function (index) {
                                console.log(!!index);
                                if (!!index) {
                                    console.log(index);
                                    return_200(index);
                                } else {
                                    error_404(pathname)
                                }
                            });
                        } catch (e) {
                            console.log(0);
                            console.log(e);
                        }
                        break;
                }
                break;
        }

    }

    function return_200(file) {
        var contentType = mine[ext] || "text/html";
        response.writeHead(200, {
            'Content-Type': contentType,
            'charset': 'UTF-8'
        });
        response.write(file);
        response.end();
    }

    function error_404(pathname) {
        response.writeHead(404, {
            'Content-Type': 'text/html;',
            'charset': 'UTF-8'
        });
        response.write("<h1>404</h1><br/>This request URL " + pathname + " was not found on this server.");
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
}).listen(3000);

//console.log(util.inspect(server));

console.log("server running on port:" + 3000);

