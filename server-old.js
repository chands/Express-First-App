const express = require('express');

const app = express();

//any one of "res" or "next", not both, must be called in each middleware to run smoothly
//2nd argument onwards all are middleware
app.get('/',m1, m2, m3, (req, res) => {//same as recursive call stack.
    console.log('pre-send');//collect data to be sent in response.
    res.send('Hello world!');//send imediately required data
    console.log('post-send');
    //after sending response we can log things to be used later on for analitics & Research purposes in future.
    //like time-range of visiting, no of user visited the page.
})
function m1 (req, res, next){
    console.log('M1 pre-next');
    next();//"Side Effect": just like recursion so keep it in mind about "Memory consumption".
    console.log('M1 post-next');
}
function m2 (req, res, next){
    console.log('M2  pre-next');
    next();
    console.log('M2 post-next');
}
function m3 (req, res, next){
    console.log('M3 pre-next');
    next();
    console.log('M3 post-next');
}

app.listen(1402, () => {
    console.log('server started on "http://localhost:1402');
})