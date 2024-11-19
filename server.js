const fs = require("fs");
const http = require("node:http");

http.createServer((req, res) => {
    switch (req.url) {
        case "/pages":
            getFile(res, "./html/pages.html");
            break;
        case "/pages/about":
            getFile(res, "./html/about.html");
            break;
        case "/pages/sports":
            getFile(res, "./html/sport.html");
            break;
        case "/files":
            getFile(res, "./html/files.html");
        case "/files/people":
            getFile(res, "./data/people.txt");
            break;
        case "/files/shops":
            getFile(res, "./data/shops.txt");
            break;
        case "/contacts":
            getFile(res, "./data/contacts.json");
            break;
    }
}).listen(8080);

const getFile = (res, file) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.write(data);
        res.end();
    });
};
