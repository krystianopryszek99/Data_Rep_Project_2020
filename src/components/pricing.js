import React from 'react';
//importing card group from bootstrap for the ability to use CardGroup
import CardGroup from 'react-bootstrap/CardGroup';
//import Card from bootstrap for the use of card for displaying data
import Card from 'react-bootstrap/Card';
//importing for the use of button 
import Button from 'react-bootstrap/Button';

export class Pricing extends React.Component {

    render() {
        return (
            <div className="App">

                <img
                    className="d-block w-100 h-100"
                    src="images/prices2.jpg"
                />

                <br></br><br></br>

                <CardGroup >
                    <Card >
                        <Card.Img variant="top" src="images/services1.jpg" />
                        <Card.Body>
                            <Card.Title>Standard Parcels</Card.Title>
                            <Card.Text>
                                Standard parcels are packages packed in a carton box. These parcels are for packages that total size adds up to 300cm. The maximum weight is 50kg, if package is over that weight, there might be additional cost to the order!
                                </Card.Text>

                            <Card.Text>
                                <b>Max Weight:</b>50kg
                                        <br></br>
                                <b>Max Size:</b> 300cm
                                        <br></br>
                                <b>Cost:</b> 25 euro
                                    </Card.Text>

                            <br></br>

                            <Button href="/makeOrder" variant="danger">Order</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="images/notstandard.png" />
                        <Card.Body>
                            <Card.Title>Not Standard Parcels</Card.Title>
                            <Card.Text>
                                Not Standard parcels are packages that are not packed in a box or are in other shape. It still has to add up to 300cm total size and maximim weight it 50kg. Additional cost may be added if the weight or size exceeds the requirements stated.
                            </Card.Text>
                            <Card.Text>
                                <b>Max Weight:</b>50kg
                                <br></br>
                                <b>Max Size:</b> 300cm
                                <br></br>
                                <b>Cost:</b> 50 euro
                            </Card.Text>
                            <br></br>
                            <Button href="/makeOrder" variant="danger">Order</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="images/notdimentional.jpg" />
                        <Card.Body>
                            <Card.Title>Not Dimensional Parcels</Card.Title>
                            <Card.Text>
                                Not dimensional parcels are packages that have more than 300cm in total size and weight above 50kg.

                                If the package doesn't exceed them requirements and is below them, they might be a refund send to you.
                            </Card.Text>

                            <Card.Text>
                                <b>Min Weight:</b> 50kg
                                <br></br>
                                <b>Size:</b> not specified
                                <br></br>
                                <b>Cost:</b> 80 euro
                            </Card.Text>
                            <br></br>
                            <Button href="/makeOrder" variant="danger">Order</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>

            </div>
        );
    }
}