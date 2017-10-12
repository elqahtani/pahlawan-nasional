var express = require('express');
var router = express.Router();
var app = express(); // define our app using express


var pahlawan = [

    {
        "id": "1",
        "firstName": "Pangeran",
        "lastName": "Diponegoro",
        "die": "70",
        "senjata": "keris"
    },
    {
        "id": "2",
        "firstName": "Sultan",
        "lastName": "Hasanuddin",
        "die": "39",
        "senjata": "badik"
    },
    {
        "id": "3",
        "firstName": "Tuanku",
        "lastName": "Imam Bonjol",
        "die": "92",
        "senjata": "meriam"

    },
    {
        "id": "4",
        "firstName": "Jendral",
        "lastName": "Sudirman",
        "die": "34",
        "senjata": "senapan api"
    },
    {
        "id": "5",
        "firstName": "Bung",
        "lastName": "Tomo",
        "die": "61",
        "senjata": "bambu runcing"
    },
    {
        "id": "6",
        "firstName": "Cut Nyak",
        "lastName": "Dhien",
        "die": "60",
        "senjata": "rencong"
    },
    {
        "id": "7",
        "firstName": "Raden",
        "lastName": "Fatahillah",
        "die": "unknown",
        "senjata": "meriam"
    },

]


router.get('/api/pahlawan', function(req, res, next) {
    res.send({
        message: "ListPahlawan",
        members: pahlawan
    })
})


router.get('/api', function(req, res) {
    res.json({ message: 'Welcome to our api !' });
});



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome to Express' });
});

module.exports = router;