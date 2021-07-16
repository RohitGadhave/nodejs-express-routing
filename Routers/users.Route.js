const express = require("express");

const router = express.Router();
/*
*Basic Routing
*
*/
// GET method route
router.get('/', (req, res) => {
    res.status(200).send("hello i am root router");
});

// GET method route
router.get('/users', (req, res) => {
    res.status(200).send("hello i am get with user router");
});
// POST method route
router.post('/', (req, res) => {
    res.status(200).send("hello i am post with user router");
});
// PATCH method route
router.patch('/:id', (req, res) => {
    res.status(200).send("hello i am patch router with id " + req.params.id);
});
// DELETE method route
router.delete('/:id', (req, res) => {
    res.status(200).send("hello i am delet router with id " + req.params.id);
});


//Route parameters
/*
*method:Get
*Route path: /user/:userId/books/:bookId
*Request URL: http://localhost:3000/user/34/books/8989
*req.params: { "userId": "34", "bookId": "8989" }
*/

router.get('/:userId/books/:bookId',(req,res)=>{
    res.json(req.params);
});



/*
Route path: /user/:from-:to
Request URL: http://localhost:3000/users/100-300
req.params: { "from": "100", "to": "300" }
*/

router.get('/:from-:to',(req,res)=>{
    res.json(req.params);
});

/*
Route path: /user/:from.:to
Request URL: http://localhost:3000/users/100-300
req.params: { "from": "100", "to": "300" }
*/

router.get('/:from.:to1',(req,res)=>{
    res.json(req.params);
});

/*
Route path: /user/:userId(\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}
*/

router.get('/user/:userId(\\d+)',(req,res)=>{
    res.json(req.params);
});

/*
method:POST
Route path: /jsonobj
Content-Type: application/json
Request URL: http://localhost:3000/user/json
req.body: {"userId": "42","jxbjb":"z"}
*/

router.post('/jsonobj',(req,res)=>{
    //console.log(req.body);
    res.json(req.body);
});


module.exports = router;