const express = require('express');

const app = express();
app.use('/', express.static(__dirname + '/public'));

//server side decryption
function decryptQueryParam(req, res, next) {
    let encData = req.query.code;
    let decData = '';
    for(let char in encData) {
        if(encData[char] == encData[char].toUpperCase()) {
            decData += encData[char].toLowerCase();
        } else {
            decData += encData[char].toUpperCase();
        }
    }
    req.query['code'] = decData;
    next();
}

//server side decoding
function decodeQueryBase64(req, res, next) {
    for(let q in req.query) {//req.query is an object.
        //console.log(req.query[q]);
        let data = req.query[q];
        data = Buffer.from(data, 'base64').toString('ascii');
        req.query[q] = data;//change the query string for further uses.
        //middleware function passes the changed data to the to next middleware function.
    }
    next();
}

//server side code Evaluation:
app.get('/eval',decryptQueryParam, decodeQueryBase64, (req, res) => {
    //console.log(req.query);
    //Caution Don't use this function "eval()" on production level, Too Dangerous.
    let result = eval(req.query.code);
    res.send(`<p>${req.query.code}</p>
    <h3>Evaluated Result: ${result}</h3>`);
})

app.listen(8090, () =>{
    console.log('Server listening on port 8090');
})

/**
 * logic for encryption: turn lower case
 * string into upper case string and vice-versa...
 */