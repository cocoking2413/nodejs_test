/**
 * Created by Administrator on 2016-07-01.
 */
var http = require('http');
var url = require('url');
var mine = require('../MINE.js').types;
var path = require('path');

exports.return_200 = function (nilstr, response, pathname, file) {
    var ext = path.extname(pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    var contentType = mine[ext] || "text/html";
    response.writeHead(200, {
        'Content-Type': contentType,
        'charset': 'UTF-8'
    });
    response.write(file);
    response.end();
};
exports.error_404 = function error_404(nilstr, response, pathname) {
    response.writeHead(404, {
        'Content-Type': 'text/html;',
        'charset': 'UTF-8'
    });
    response.write("This request URL " + pathname + " was not found on this server.");
    response.end();
};
exports.error_500 = function error_500(nilstr, response, err) {
    response.writeHead(500, {
        'Content-Type': 'text/html',
        'charset': 'UTF-8'
    });
    response.write(JSON.stringify(err));
    response.end();
};