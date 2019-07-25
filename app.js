const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 8000;
const domain = "http://testtask"

const server = http.createServer((req, res) => {
	req.on('data', function (data) {
		var store = '';
        store += data;
        console.log(store);
        fs.writeFileSync("hello.txt", store)
        res.end(store);
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', domain);
    res.setHeader('Access-Control-Allow-Credentials', true);
    //fs.writeFileSync("hello.txt", store)
    let fileContent = fs.readFileSync("hello.txt", "utf8");
    console.log(fileContent);
    res.end(fileContent);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// function request(request, response) {
//     var store = '';
//
//     request.on('data', function (data) {
//         store += data;
//         console.log(store);
//         fs.writeFileSync("hello.txt", store)
//         response.end(store);
//     });
//     let fileContent = fs.readFileSync("hello.txt", "utf8");
//     console.log(fileContent);
// }


