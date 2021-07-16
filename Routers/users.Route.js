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
router.get('/', (req, res) => {
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

module.exports = router;