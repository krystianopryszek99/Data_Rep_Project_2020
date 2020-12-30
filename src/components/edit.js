import React from 'react';
// import { Items } from './orders';
//import axios
import axios from 'axios';
//import Card from bootstrap for the use of card for displaying data
import Card from 'react-bootstrap/Card'
//import Button react bootstrap
import Button from 'react-bootstrap/Button'
//importing Form from bootstrap to use the form enter the data
import Form from 'react-bootstrap/Form'

export class Edit extends React.Component {

    constructor() {
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

    //for edit 
    //componentDidMount - gets fired when the component becomes active in the view 
    componentDidMount() {
        //pull the parameter out 
        console.log(this.props.match.params.id)

        //read this record from the database 
        //asynchronous calls to the server
        axios.get('http://localhost:4000/api/orders/' + this.props.match.params.id)
            //callback function
            .then(response => {
                this.setState({
                    _id: response.data._id,

                    DepartureCountry: response.data.departureCountry,
                    DestinationCountry: response.data.destinationCountry,

                    SenderForename: response.data.senderForename,
                    SenderSurname: response.data.senderSurname,
                    SenderAddress: response.data.senderAddress,
                    SenderEmail: response.data.senderEmail,
                    SenderContact: response.data.senderContact,

                    ReceiverForename: response.data.receiverForename,
                    ReceiverSurname: response.data.receiverSurname,
                    ReceiverAddress: response.data.receiverAddress,
                    ReceiverEmail: response.data.receiverEmail,
                    ReceiverContact: response.data.receiverContact,

                    Contents: response.data.contents,
                    Value: response.data.value,
                    Weight: response.data.weight,
                    TotalSize: response.data.totalSize
                })
            })
            //error
            .catch((error) => {
                //log the error
                console.log(error);
            });
    }

    // Method onSubmit, takes an argument 'e'
    // e.prevenet.Default() will stop us from calling this button multiple of times
    onSubmit(e) {
        e.preventDefault();
        //alert to log when the button is clicked 
        alert("Update has been successfully completed, go back to view order to see the change");

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
            totalSize: this.state.TotalSize,
            _id: this.state._id

        }

        //edit a record
        //method for passing the edited movie
        axios.put('http://localhost:4000/api/orders/' + this.state._id, newOrder)
            //return me a promise
            .then(response => {
                console.log(response.data)
            })
            .catch();

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
                    
                    <Card >
                        <Card.Header>Please choose the country you would like to send your parcel to</Card.Header>
                        <Card.Body>
                            <Card.Title>Send from</Card.Title>
                            <Card.Text>
                                <Form.Label>Email address</Form.Label>
                                <input type='text' value={this.state.DepartureCountry} onChange={this.onChangeDep}></input>
                            </Card.Text>
                            <Card.Title>Send to</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.DestinationCountry} onChange={this.onChangeDes}></input>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card >
                        <Card.Header>Sender's Information</Card.Header>
                        <Card.Body>
                            <Card.Title>First Name</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.SenderForename} onChange={this.onChangeSenderForename}></input>
                            </Card.Text>

                            <Card.Title>Surname</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.SenderSurname} onChange={this.onChangeSenderSurname}></input>
                            </Card.Text>

                            <Card.Title>Address</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.SenderAddress} onChange={this.onChangeSenderAddress}></input>
                            </Card.Text>

                            <Card.Title>Email Address</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.SenderEmail} onChange={this.onChangeSenderEmail}></input>
                            </Card.Text>

                            <Card.Title>Contact Number</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.SenderContact} onChange={this.onChangeSenderContact}></input>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card >
                        <Card.Header>Receivers's Information</Card.Header>
                        <Card.Body>
                            <Card.Title>First Name</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.ReceiverForename} onChange={this.onChangeReceiverForename}></input>
                            </Card.Text>

                            <Card.Title>Surname</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.ReceiverSurname} onChange={this.onChangeReceiverSurname}></input>
                            </Card.Text>

                            <Card.Title>Address</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.ReceiverAddress} onChange={this.onChangeReceiverAddress}></input>
                            </Card.Text>

                            <Card.Title>Email Address</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.ReceiverEmail} onChange={this.onChangeReceiverEmail}></input>
                            </Card.Text>

                            <Card.Title>Contact Number</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.ReceiverContact} onChange={this.onChangeReceiverContact}></input>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card >
                        <Card.Header>Package Information</Card.Header>
                        <Card.Body>
                            <Card.Title>Contents</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.Contents} onChange={this.onChangeContents}></input>
                            </Card.Text>

                            <Card.Title>Value</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.Value} onChange={this.onChangeValue}></input>
                            </Card.Text>

                            <Card.Title>Weight</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.Weight} onChange={this.onChangeWeigth}></input>
                            </Card.Text>

                            <Card.Title>Email Address</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.ReceiverEmail} onChange={this.onChangeReceiverEmail}></input>
                            </Card.Text>

                            <Card.Title>Total Size</Card.Title>
                            <Card.Text>
                                <input type='text' value={this.state.TotalSize} onChange={this.onChangeTotalSize}></input>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <br></br>

                    <div className="form-group">
                        <Button variant="success" type="submit">Edit</Button>
                    </div>

                </form>
            </div>

        );
    }
}