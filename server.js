const express = require('express');
const app = express(); //Calling express as a function sets up server
const userRouter = require('./routes/users');
const wordsRouter = require('./routes/words');
// In Server.js
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/users', userRouter);
app.use('/words', wordsRouter);

app.get('/',
(req, res)=>{
    console.log('Here');
    res.render('index', {userName:'George'});
});

app.listen(3030); //Tell our app to listen for requests

