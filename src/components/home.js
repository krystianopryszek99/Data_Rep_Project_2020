import React from 'react';
//import Card from bootstrap for the use of card for displaying data
import Card from 'react-bootstrap/Card'
//importing button from bootstrap in order to use the function of buttons
import Button from 'react-bootstrap/Button'
//importing card deck for the use of card deck from bootstrap
import CardDeck from 'react-bootstrap/CardDeck'
//importing Carousel to show images that move on screen 
import Carousel from 'react-bootstrap/Carousel'

export class Home extends React.Component {

  //using two Carousels to show images 
  render() {
    return (
      <div className="App">

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="images/vanImg2.jpg"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="images/vanImg.jpg"
            />
          </Carousel.Item>
        </Carousel>


        <h1>Our Services</h1>
        <CardDeck>

          <Card>

            <Card.Body>
              <Card.Img variant="top" src="images/services1.jpg" />
              <Card.Title>Prices of our parcels</Card.Title>
              <Card.Text>
                Check our price before making an order. Just simply click the bottom below to get more information about the prices of our services
              </Card.Text>
              <Button href="/pricing" variant="danger">Prices</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Img variant="top" src="images/services2.jpg" />
              <Card.Title>Standard Parcels</Card.Title>
              <Card.Text>
                We offer the best service out there, get you parcel send now for as little as 30 euro for standard parcel, to find out more click below
              </Card.Text>
              <Button href="/pricing" variant="danger">More</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Img variant="top" src="images/services3.jpg" />
              <Card.Title>Home Moves</Card.Title>
              <Card.Text>
                Did you know we offer the cheapest home moves? Check out our prices to find more!
              </Card.Text>
              <Button href="/pricing" variant="danger">Move Now</Button>
            </Card.Body>
          </Card>
        </CardDeck>

      </div>
    );
  }
}