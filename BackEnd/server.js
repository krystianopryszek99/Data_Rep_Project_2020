const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
//include body parser
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://krystianopryszek:Kozaktoja19@cluster0.sikdk.mongodb.net/orders?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;
//define schema
var orderSchema = new Schema({
    // title: String,
    // year: String,
    // poster: String

    //orderId: String,
    departureCountry: String,
    destinationCountry: String,

    senderForename: String,
    receiverForename: String,

    senderSurname: String,
    receiverSurname: String,

    senderEmail: String,
    receiverEmail: String,

    senderAddress: String,
    receiverAddress: String,

    senderContact: String,
    receiverContact: String,

    contents: String,
    value: String,
    weight: String,
    totalSize: String

});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//enteract with database, refer to OrderModel that will write to the database
var OrderModel = mongoose.model("order", orderSchema);

app.get('/api/orders/:id', (req, res) =>{
    console.log(req.params.id);

    //* THIS COULD ALSO BE USED FOR SEARCH BAR * 

    //use the id and find it in the database
    OrderModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

//edit
app.put('/api/orders/:id', (req, res) => {
    console.log("Update order: " + req.params.id);
    console.log(req.body);

    OrderModel.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, data) => {
            //send me back the data
            res.send(data);
        })
})
  
app.delete('/api/orders/:id', (req, res) => {
    console.log("Delete order: " + req.params.id);

    OrderModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.get('/api/orders', (req, res) => {

    // const mymovies = [
    //     {
    //         "Title":"Avengers: Infinity War",
    //         "Year":"2018",
    //         "imdbID":"tt4154756",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         },
    //         {
    //         "Title":"Captain America: Civil War",
    //         "Year":"2016",
    //         "imdbID":"tt3498820",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //         }
    // ];

    //interact with the database
    OrderModel.find((err, data) => {
        res.json(data);
    })

    // res.status(200).json({
    //     message: "Everything is ok",
    //     movies: mymovies
    // });
})

app.post('/api/orders', (req, res) => {
    /*console.log('Movie Received!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);*/

    //console.log(req.body.orderId);

    console.log(req.body.departureCountry);
    console.log(req.body.destinationCountry);

    console.log(req.body.senderForename);
    console.log(req.body.receiverForename);

    console.log(req.body.senderSurname);
    console.log(req.body.receiverSurname);

    console.log(req.body.senderEmail);
    console.log(req.body.receiverEmail);

    console.log(req.body.senderContact);
    console.log(req.body.receiverContact);

    console.log(req.body.senderAddress);
    console.log(req.body.receiverAddress);

    console.log(req.body.contents);
    console.log(req.body.value);
    console.log(req.body.weight);
    console.log(req.body.totalSize);



    OrderModel.create({
        //title: req.body.title,
        //year: req.body.year,
        //poster: req.body.poster

        //orderId: req.body.orderId,

        departureCountry: req.body.departureCountry,
        destinationCountry: req.body.destinationCountry,

        senderForename: req.body.senderForename,
        receiverForename: req.body.receiverForename,

        senderSurname: req.body.senderSurname,
        receiverSurname: req.body.receiverSurname,

        senderEmail: req.body.senderEmail,
        receiverEmail: req.body.receiverEmail,

        senderContact: req.body.senderContact,
        receiverContact: req.body.receiverContact,

        senderAddress: req.body.senderAddress,
        receiverAddress: req.body.receiverAddress,

        contents: req.body.contents,
        value: req.body.value,
        weight: req.body.weight,
        totalSize: req.body.totalSize
    })

    res.send('Item Added');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})