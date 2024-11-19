const fs = require("fs");
const http = require("node:http");

http.createServer((req, res) => {
    if (req.url === "/pages") {
        fs.readFile("./html/pages.html", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/pages/about") {
        fs.readFile("./html/about.html", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/pages/sports") {
        fs.readFile("./html/sport.html", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
}).listen(8080);
