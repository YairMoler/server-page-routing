const fs = require("fs");
const http = require("node:http");
const { json } = require("stream/consumers");

http.createServer((req, res) => {
    const splittedURL = req.url.split("/");
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
        case "/contacts/1":
            getContact(res, 1);
            break;
        case "/contacts/2":
            getContact(res, 2);
            break;
        case "/contacts/3":
            getContact(res, 3);
            break;
        case "/contacts":
            getFile(res, "./data/contacts.json");
            break;
        case "/comps/prime/100":
            prime(req, res);
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

const getContact = (res, num) => {
    fs.readFile("./data/contacts.json", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const parsedData = JSON.parse(data);
        const contact = parsedData.contacts[num - 1];
        res.write(JSON.stringify(contact));
        res.end();
    });
};

const factorial = (req, res) => {
    const splittedURL = req.url.split("/");
    let sum = 1;
    for (let i = 1; i <= splittedURL[3]; i++) {
        sum = sum * 1;
    }

    res.write(sum);
    res.emd();
};

const prime = (req, res) => {
    const splittedURL = req.url.split("/");
    let primeArr = [];
    for (let i = 1; i <= splittedURL[3]; i++) {
        let flag = true;
        for (let j = 2; j < i; j++) {
            if ((i / j) % 1 === 0) flag = false;
        }
        if (flag) primeArr.push(i);
    }
    res.write(JSON.stringify(primeArr));
    res.end();
};
