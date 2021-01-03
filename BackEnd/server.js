const express = require('express')
const app = express()
const port = 4000
//include Cors
const cors = require('cors');
//include body parser
const bodyParser = require("body-parser");
//include mongo
const mongoose = require('mongoose');

//using cors package everytime 
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//local mongo db
//replace the admin:<password> to your admin name 
const myConnectionString = 'mongodb+srv://krystianopryszek:Kozaktoja19@cluster0.sikdk.mongodb.net/orders?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//define Schema 
const Schema = mongoose.Schema;
//define schema
var orderSchema = new Schema({
   
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

//enteract with database, refer to OrderModel that will write to the database
var OrderModel = mongoose.model("order", orderSchema);

app.get('/api/orders/:id', (req, res) =>{
    console.log(req.params.id);

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
 
//listening for http delete method 
app.delete('/api/orders/:id', (req, res) => {
    //trapping the actual ID so we know that we can get the ID 
    console.log("Delete order: " + req.params.id);
    //match the id back here 
    OrderModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

//New Root point 
app.get('/api/orders', (req, res) => {

    //interact with the database
    OrderModel.find((err, data) => {
        res.json(data);
    })

})

//listening to post request
app.post('/api/orders', (req, res) => {
    //when data is passed up, it will take the body of the things passed up and include it 
    console.log(req.body.departureCountry);
    console.log(req.body.destinationCountry);

    console.log(req.body.senderForename);
    console.log(req.body.senderSurname);
    console.log(req.body.senderEmail);
    console.log(req.body.senderContact);
    console.log(req.body.senderAddress);

    console.log(req.body.receiverForename);
    console.log(req.body.receiverSurname);
    console.log(req.body.receiverEmail);
    console.log(req.body.receiverContact);
    console.log(req.body.receiverAddress);

    console.log(req.body.contents);
    console.log(req.body.value);
    console.log(req.body.weight);
    console.log(req.body.totalSize);
    
    //Interacting with the model
    OrderModel.create({
    
        departureCountry: req.body.departureCountry,
        destinationCountry: req.body.destinationCountry,

        senderForename: req.body.senderForename,
        senderSurname: req.body.senderSurname,
        senderEmail: req.body.senderEmail,
        senderContact: req.body.senderContact,
        senderAddress: req.body.senderAddress,

        receiverForename: req.body.receiverForename,
        receiverSurname: req.body.receiverSurname,
        receiverEmail: req.body.receiverEmail,
        receiverContact: req.body.receiverContact,
        receiverAddress: req.body.receiverAddress,

        contents: req.body.contents,
        value: req.body.value,
        weight: req.body.weight,
        totalSize: req.body.totalSize
        
    })

    //so it doen't add a duplicate
    res.send('Item Added');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
