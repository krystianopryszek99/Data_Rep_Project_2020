import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
//importing bootstrap - shows the entire content on that for every page 
import 'bootstrap/dist/css/bootstrap.min.css';
//importing navbar that allows the navbar to work and be displayed 
import { Navbar, Nav } from 'react-bootstrap';
//importing the css for calendar
import 'react-calendar/dist/Calendar.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//importing components
//importing Home 
import { Home } from './components/home';
//importing Calendar
import { Cal } from './components/cal';
//importing Pricing 
import { Pricing } from './components/pricing';
//importing MakeOrder
import { MakeOrder } from './components/makeOrder';
//importing ViewOrder
import { ViewOrder } from './components/viewOrder';
//importing Contact
import { Contact } from './components/contact';
//importing Edit
import { Edit } from './components/edit';

//change from function to class
//In order to be a component it will have to extend React.Component
class App extends Component {

  //whatever is inside the render is what you see
  //inside the render you have the div

  //NavBar that allows you to change pages
  //NavBar - "Nav.Link href" must be the same as the "Route path" in order to work
  render() {
    return (
      <Router> 
      <div className="App">

        <Navbar bg="danger" variant="dark">
          <Navbar.Brand href="/">Delivery Services</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cal">Calendar</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/makeOrder">Order</Nav.Link>
            <Nav.Link href="/viewOrder">View Order</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar>
        
        <br></br>

        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/cal' component={Cal} exact/>
          <Route path='/pricing' component={Pricing} exact/>
          <Route path='/makeOrder' component={MakeOrder} exact/>
          <Route path='/viewOrder' component={ViewOrder} exact/>
          <Route path='/contact' component={Contact} exact/>
          <Route path='/edit/:id' component={Edit} exact/>
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
