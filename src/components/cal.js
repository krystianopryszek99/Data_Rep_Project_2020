//importing useState for the calendar 
import React, { useState } from 'react';
//import Card from bootstrap for the use of card for displaying data
import { Card } from 'react-bootstrap';
//importing Calendar from react calander for the use of calendar 
import Calendar from 'react-calendar';
//importing card deck for the use of card deck from bootstrap
import CardDeck from 'react-bootstrap/CardDeck'

export class Cal extends React.Component {

    //state that retrieved date for the calendar
    state = {
        date: new Date(),
    }
    
    //on change date to the current date
    onChange = data => this.setState({ data })

    render() {
        return (
            <div >

                <Card class="card">
                    <CardDeck>
                        <Card >
                            <Card.Body>
                                <Card.Title>Our Calendar</Card.Title>
                                <Card.Text>
                                    <Calendar className="text-center" onChange={this.onChange} value={this.state.data}/>
                                    <br></br>
                                    <b>Info</b>
                                    <br></br>
                                    <i>new pickup's times already arranged, instead of 07:00 - 19:00 are now 08:00 - 20:00</i>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="images/pickup.jpg" />
                                <Card.Body>
                                    <Card.Title>Days we pick up parcels 2020/21</Card.Title>
                                    <Card.Text>
                                        <b>December:</b> 31st (Last of 2020)
                                        <br></br>
                                        <i>Pickup: 07:00 - 19:00</i>
                                        <br></br>
                                        <b>January:</b> 8, 15, 22, 29 (every friday)
                                        <br></br>
                                        <i>Pickup: 08:00 - 20:00</i>
                                        <br></br>
                                        <b>February:</b> 5, 12, 19, 26
                                        <br></br>
                                        <i>Pickup: 08:00 - 20:00</i>
                                        <br></br>
                                        <b>No March Dates so far! Soon to be updated!</b>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Card>   

            </div>
        );
    }
}