var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<!DOCTYPE html>' +
    '<html><head><meta charset="utf-8"><title>菜鳥教程Node.js實例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '網站名： <input name="name"><br>' +
    '網站URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    console.log(req.url);
    console.log("receive request");
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on(
        'end', function () { //解析參數  
            console.log("req end");

            body = querystring.parse(body);
            //設置響應頭部信息及編碼
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
            console.log(body);

            if (body.name && body.url) { //輸出提交的數據  
                res.write("網站名：" + body.name);
                res.write(" <br> ");
                res.write("網站URL：" + body.url);
            }
            else { //輸出表單    
                res.write(postHTML);
            }
            res.end();
        });
}).listen(3000);
