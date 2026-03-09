const express = require('express');
const router = express.Router();
const {readFile, writeFile} = require('fs').promises; //Destructuring

router.get('/', (req, res)=>{
    res.send('Word Homepage');
});

router.get('/wotd', async (req, res)=>{
    let wordArray = await getWordFromDictionary();
    let [word, part, definition] = wordArray;
    res.render('wotd', {word:word, part:part, definition:definition});
    //Do something with that function uphere
});

module.exports = router;

router.get('/allwords', async(req, res)=>{
    //homework here
    let allwordsArray = await getAllWordsFromDictionary();
    let [word, part, definition] = allwordsArray;
    res.render('allwords', {word:word, part:part, definition:definition, lines:word.length});

});

let getAllWordsFromDictionary = async ()=>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');

        let word = [];
        let part = [];
        let definition = [];

        for(let i = 0; i < lines.length;i++){
            let columns = lines[i].split('\t');

            word.push(columns[0]);
            part.push(columns[1]);
            definition.push(columns[2]);
        }

        return [word, part, definition];
    }catch(err){
        console.log("There was an error reading the file: ", err);
    }
}

let getWordFromDictionary = async ()=>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let randomNumber = parseInt(Math.random()*lines.length);
        let randomLine = lines[randomNumber];
        let wordArray = randomLine.split('\t');
        console.log(wordArray);
        return wordArray;
    }catch(err){
        console.log("There was an error reading the file: ", err);
    }
}