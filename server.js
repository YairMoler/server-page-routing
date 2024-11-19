const fs = require("fs");
const http = require("node:http");

http.createServer((req, res) => {
    console.log("Running...");
    console.log("req.url:", req.url);
    const splittedURL = req.url.split("/");
    if (req.rul === "/pages") {
        console.log("i am at pages");
        getFile(res, "./html/pages.html");
    } else if (req.rul === "/pages/about") {
        getFile(res, "./html/about.html");
    } else if (req.rul === "/pages/sports") {
        getFile(res, "./html/sport.html");
    } else if (req.rul === "/files") {
        getFile(res, "./html/files.html");
    } else if (req.rul === "/files/people") {
        getFile(res, "./data/people.txt");
    } else if (req.rul === "/files/shops") {
        getFile(res, "./data/shops.txt");
    } else if (req.rul === "/contacts/1") {
        getFile(res, "./data/contacts.json");
    } else if (req.rul === "/contacts/2") {
        getFile(res, "./data/contacts.json");
    } else if (req.rul === "/contacts/3") {
        getFile(res, "./data/contacts.json");
    } else if (req.rul === "/contacts") {
        getFile(res, "./data/contacts.json");
    } else if (req.url.match(/\/comps\/factorial\/[0-9]+/)) {
        console.log("hi");
        getFile(res, "./html/pages.html");
    } else {
        console.log(typeof req.url);
        console.log("default");
        getFile(res, "./data/shops.txt");
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
