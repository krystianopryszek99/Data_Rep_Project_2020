import React from 'react';
// import { Items } from './orders';
import axios from 'axios';
//import Card from bootstrap for the use of card for displaying data
import Card from 'react-bootstrap/Card';
//importing button from bootstrap
import Button from 'react-bootstrap/Button';
//importing Form from bootstrap to use the form enter the data
import Form from 'react-bootstrap/Form';

export class MakeOrder extends React.Component {
    
    constructor() {
        //invoke the parents constructor
        super();

        // binding the events
        // onSubmit - is the method that gets called when the button on our form is clicked
        this.onSubmit = this.onSubmit.bind(this);

        this.onChangeDep = this.onChangeDep.bind(this);
        this.onChangeDes = this.onChangeDes.bind(this);

        this.onChangeSenderForename = this.onChangeSenderForename.bind(this);
        this.onChangeReceiverForename = this.onChangeReceiverForename.bind(this);

        this.onChangeSenderSurname = this.onChangeSenderSurname.bind(this);
        this.onChangeReceiverSurname = this.onChangeReceiverSurname.bind(this);

        this.onChangeSenderAddress = this.onChangeSenderAddress.bind(this);
        this.onChangeReceiverAddress = this.onChangeReceiverAddress.bind(this);

        this.onChangeSenderEmail = this.onChangeSenderEmail.bind(this);
        this.onChangeReceiverEmail = this.onChangeReceiverEmail.bind(this);

        this.onChangeSenderContact = this.onChangeSenderContact.bind(this);
        this.onChangeReceiverContact = this.onChangeReceiverContact.bind(this);

        this.onChangeContents = this.onChangeContents.bind(this);

        this.onChangeValue = this.onChangeValue.bind(this);

        this.onChangeWeigth = this.onChangeWeigth.bind(this);

        this.onChangeTotalSize = this.onChangeTotalSize.bind(this);


        this.state = {
            
            _id: '',
            //departure and destination 
            DepartureCountry: '',
            DestinationCountry: '',
            //sender and receiver first name
            SenderForename: '',
            ReceiverForename: '',
            //sender and receiver surname
            SenderSurname: '',
            ReceiverSurname: '',
            //sender and receiver address
            SenderAddress: '',
            ReceiverAddress: '',
            //sender and receiver email
            SenderEmail: '',
            ReceiverEmail: '',
            //sender and receiver contact number
            SenderContact: '',
            ReceiverContact: '',
            //parcels details
            Contents: '',
            Value: '',
            Weight: '',
            TotalSize: ''
        }
    }

    // Method onSubmit, takes an argument 'e'
    // e.prevenet.Default() will stop us from calling this button multiple of times
    onSubmit(e) {
        e.preventDefault();
        //alert shown when button is clicked
        alert("Thank you for your order" + " " + this.state.SenderForename +  " " + this.state.SenderSurname);
        
       //creating new object 
        const newOrder = {

            //creating lowercase as there is already uppercase
            //server is listening for lowercase that's why it's being used
            //sending them up
            departureCountry: this.state.DepartureCountry,
            destinationCountry: this.state.DestinationCountry,

            senderForename: this.state.SenderForename,
            receiverForename: this.state.ReceiverForename,

            senderSurname: this.state.SenderSurname,
            receiverSurname: this.state.ReceiverSurname,

            senderAddress: this.state.SenderAddress,
            receiverAddress: this.state.ReceiverAddress,

            senderEmail: this.state.SenderEmail,
            receiverEmail: this.state.ReceiverEmail,

            senderContact: this.state.SenderContact,
            receiverContact: this.state.ReceiverContact,

            contents: this.state.Contents,
            value: this.state.Value,
            weight: this.state.Weight,
            totalSize: this.state.TotalSize

        }

        //axios - post method 
        //send data to the server
        axios.post('http://localhost:4000/api/orders', newOrder)
            //return a promise 
            //making post request asynchronously
            .then((res) => {
                //response coming back
                //response to the console
                console.log(res);
            })
            //error
            .catch((err) => {
                console.log(err);
            });
    }

    //departure
    // gets called when the value of our input control changes
    // when the value changes it will update this state
    onChangeDep(e) {
        this.setState({
            DepartureCountry: e.target.value
        });
    }

    //destination
    // e is the event coming back when it's invoked 
    // setState - updating our state or object for storing
    onChangeDes(e) {
        this.setState({
            DestinationCountry: e.target.value
        });
    }

    //sender
    //forename
    onChangeSenderForename(e) {
        this.setState({
            SenderForename: e.target.value
        });
    }

    //surname
    onChangeSenderSurname(e) {
        this.setState({
            SenderSurname: e.target.value
        });
    }

    //address
    onChangeSenderAddress(e) {
        this.setState({
            SenderAddress: e.target.value
        });
    }

    //email
    onChangeSenderEmail(e) {
        this.setState({
            SenderEmail: e.target.value
        });
    }

    //contact
    onChangeSenderContact(e) {
        this.setState({
            SenderContact: e.target.value
        });
    }

    //receiver
    //forename
    onChangeReceiverForename(e) {
        this.setState({
            ReceiverForename: e.target.value
        });
    }

    //surname
    onChangeReceiverSurname(e) {
        this.setState({
            ReceiverSurname: e.target.value
        });
    }

    //address
    onChangeReceiverAddress(e) {
        this.setState({
            ReceiverAddress: e.target.value
        });
    }

    //email
    onChangeReceiverEmail(e) {
        this.setState({
            ReceiverEmail: e.target.value
        });
    }

    //contact
    onChangeReceiverContact(e) {
        this.setState({
            ReceiverContact: e.target.value
        });
    }

    //contents
    onChangeContents(e) {
        this.setState({
            Contents: e.target.value
        });
    }

    //value
    onChangeValue(e) {
        this.setState({
            Value: e.target.value
        });
    }

    //weight
    onChangeWeigth(e) {
        this.setState({
            Weight: e.target.value
        });
    }

    //total size
    onChangeTotalSize(e) {
        this.setState({
            TotalSize: e.target.value
        });
    }
    
    // onSubmit - when the button is clicked it gonna invoke a method thisonSubmit
    // first div is for the input control
    // the buttom one is for the submit button
    render() {
        return (

            <div className="App">
                
                <br />

                <form onSubmit={this.onSubmit}>
                   
                    <h1>Please fill out the below to complete your order</h1>
                    
                    <Card className="card">
                    
                        <Card.Header >Please choose the country you would like to send your parcel to</Card.Header>
                        <br></br>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label >Send From</Form.Label>
                                <Form.Control type="text" value={this.state.DepartureCountry} onChange={this.onChangeDep}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label >Send To</Form.Label>
                                <Form.Control type='text' size="50" value={this.state.DestinationCountry} onChange={this.onChangeDes}></Form.Control>
                            </Form.Group>

                        </Form>
                        <br></br>

                        <Card.Header>Sender's Information</Card.Header>

                        <br></br>
                        <Form>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' value={this.state.SenderForename} onChange={this.onChangeSenderForename}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.SenderSurname} onChange={this.onChangeSenderSurname}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.SenderAddress} onChange={this.onChangeSenderAddress}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.SenderEmail} onChange={this.onChangeSenderEmail}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control  type='text' value={this.state.SenderContact} onChange={this.onChangeSenderContact}></Form.Control>
                            </Form.Group>
                        </Form>

                        <br></br>

                        <Card.Header>Receiver's Information</Card.Header>

                        <br></br>

                        <Form>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.ReceiverForename} onChange={this.onChangeReceiverForename}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.ReceiverSurname} onChange={this.onChangeReceiverSurname}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.ReceiverAddress} onChange={this.onChangeReceiverAddress}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.ReceiverEmail} onChange={this.onChangeReceiverEmail}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.ReceiverContact} onChange={this.onChangeReceiverContact}></Form.Control>
                            </Form.Group>
                        </Form>

                        <Card.Header>Package Information</Card.Header>

                        <br></br>

                        <Form>
                            <Form.Group>
                                <Form.Label>Contents</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.Contents} onChange={this.onChangeContents}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Value</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.Value} onChange={this.onChangeValue}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Weight</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.Weight} onChange={this.onChangeWeigth}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Total Size</Form.Label>
                                <Form.Control size="50" type='text' value={this.state.TotalSize} onChange={this.onChangeTotalSize}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                        </Form>

                        <div className="form-group">
                            <Button variant="success" type="submit">Make Your Order</Button>
                        </div>

                    </Card>
                    
                </form>
            </div>
        );
    }
}