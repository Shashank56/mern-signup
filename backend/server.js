const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes=express.Router();
const PORT = 4000;

let user = require('./user.model')

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World')
        })

mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

userRoutes.route('/').get(function(req, res) {
    user.find(function(err, users) {
        if (err) {
            res.end('hello\n');
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

userRoutes.route('/add').post(function(req, res) {
    let user = new user(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});