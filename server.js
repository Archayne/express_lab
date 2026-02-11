const express = require('express');

const app = express() //Calling express as a function sets up server

app.get('/',(req, res)=>{
    console.log('Here');
    res.render('index');
});
app.get('/potato',(req, res)=>{
    res.send('<p>Here are your potatoes</p>')
});
app.get('/status', (req, res)=>{
    res.status(500).send('Hi');
});
app.listen(3030); //Tell our app to listen for requests