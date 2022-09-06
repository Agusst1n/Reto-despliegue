const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Users = require('./api/users')


const app = express()

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/users', Users)

mongoose.connect(
    'mongodb://mongo/mydatabase',
    {useNewUrlParser: true},
    (err,res)=>{
        err && console.log('Error connect to bd');
        app.listen(8085,()=>{
            console.log('Server run on port 8085')
        })
    }
)

