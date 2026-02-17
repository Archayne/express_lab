const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
res.send('Word Homepage');
});

router.get('/wotd', (req, res)=>{ // /users/
res.send('Heres word of the day');
});

module.exports = router;