import React from 'react';
//import Button react bootstrap
import Button from 'react-bootstrap/Button'; //this is for the button for delete
//import axois
import axios from 'axios'; //needed for delete
//help change the url of the application
//once this is clicked i wanted to change the url of the application and pass up the idea of the document we're working on
//import Link 
import { Link } from 'react-router-dom'; //for update/ edit
//import Card from bootstrap for the use of card for displaying data
import Card from 'react-bootstrap/Card'
//importing card deck for the use of card deck from bootstrap
import CardDeck from 'react-bootstrap/CardDeck'

export class DisplayOrder extends React.Component {

    constructor() {
        //invoke the parents constructor
        super();

        //delete movie method
        this.DeleteOrder = this.DeleteOrder.bind(this);
    }

    //method for delete
    DeleteOrder(e) {

        //this will stop this being happening or that this method getting called every time I load the page 
        e.preventDefault();

        // console.log("Delete: " + this.props.movie._id);
        console.log("Delete: " + this.props.order._id);

        //use axios
        axios.delete("http://localhost:4000/api/orders/" + this.props.order._id)
            //promise 
            //arrow function to go and invoke that method   
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    //this component is designed to display the data 
    //the card is used for better display of the data, it give a better look of the page 
    render() {
        return (
            <div>

                <Card>
                    <h1>Your Order Number: {this.props.order._id}</h1>
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>Departure/Destination</Card.Title>
                                <br></br>
                                <Card.Text>
                                    <b>Sending from: </b> {this.props.order.departureCountry}
                                    <br></br>
                                    <b>Sending to: </b> {this.props.order.destinationCountry}
                                    <br></br><br></br>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Parcel Details</Card.Title>
                                <Card.Text>
                                    <b>Contents:</b> {this.props.order.contents}
                                    <br></br>
                                    <b>Value:</b> {this.props.order.value}
                                    <br></br>
                                    <b>Weigth:</b> {this.props.order.weight}
                                    <br></br>
                                    <b>Total Size:</b> {this.props.order.totalSize}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <br></br>

                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>Sender's Details</Card.Title>
                                <Card.Text>
                                    <b>First Name:</b> {this.props.order.senderForename}
                                    <br></br>
                                    <b>Surname:</b> {this.props.order.senderSurname}
                                    <br></br>
                                    <b>Email:</b> {this.props.order.senderEmail}
                                    <br></br>
                                    <b>Contact Number:</b> {this.props.order.senderContact}
                                    <br></br>
                                    <b>Address:</b>{this.props.order.senderAddress}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Receivers's Details</Card.Title>
                                <Card.Text>
                                    <b>First Name:</b> {this.props.order.receiverForename}
                                    <br></br>
                                    <b>Surname:</b> {this.props.order.receiverSurname}
                                    <br></br>
                                    <b>Email:</b> {this.props.order.receiverEmail}
                                    <br></br>
                                    <b>Contact Number:</b> {this.props.order.receiverContact}
                                    <br></br>
                                    <b>Address:</b>{this.props.order.receiverAddress}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                </Card>
                <br></br>


                <Link to={"/edit/" + this.props.order._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={this.DeleteOrder}>Delete</Button>
            </div>
        );
    }
}