import React from 'react';
//import Card from bootstrap for the use of card for displaying data
import Card from 'react-bootstrap/Card'

export class Contact extends React.Component {

  render() {
    return (
      <div className="App">

        {/* img - for display image for banner for the page to indicate it's the contact us page */}
        <img
          className="d-block w-100 h-100"
          src="images/contactus.jpg"
        />

        <Card>
          <Card.Body>
            <Card.Title>Contact Number</Card.Title>
            <Card.Text>
              <br></br>
              <b>0871234567</b>
              <br></br><br></br>
              <i>from monday to friday</i>
              <br></br>
              <b>09:00 - 18:00</b>
            </Card.Text>
            <Card.Title>Email</Card.Title>
            <Card.Text>
              delivery.services@gmail.com
                    </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}