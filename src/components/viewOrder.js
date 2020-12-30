import React from 'react';
import { Orders } from './orders';
import axios from 'axios';

export class ViewOrder extends React.Component {

    //for delete - for refresh
    //binding tool
    constructor() {
        //invoke the parent constructor
        super();

        //binding
        this.ReloadData = this.ReloadData.bind(this);
    }

    // Pass this read components state to the new orders component
    // the state has special properties 
    // object orders, it has data about orders
    state = {
        orders: []
    };

    // PROMISE 
    // It gets called each time our component is mounted or becomes active in view 
    componentDidMount() {
        axios.get('http://localhost:4000/api/orders')
            // .then() you write a function when it works and the happy path has been met 
            // updating the state
            // Json of response data is the data coming back as part of the response from the web server
            .then((response) => {
                //changed from Search to movies as it has been changed
                this.setState({ orders: response.data })
            })
            // .catch() writing function so it says OK if things don't workout
            // * unfulfilled - for the error coming back *
            .catch((error) => {
                console.log(error)
            });
    }

    //for delete - to refresh 
    //reload method that will reload all the data
    //This is going to go off after database and get me all the orders I have in my database
    ReloadData() {
        axios.get('http://localhost:4000/api/orders')
            // .then() you write a function when it works and the happy path has been met 
            // updating the state
            // Json of response data is the data coming back as part of the response from the web server
            .then((response) => {
                //changed from Search to orders as it has been changed
                this.setState({ orders: response.data })
            })
            // .catch() writing function so it says OK if things don't workout
            // * unfulfilled - for the error coming back *
            .catch((error) => {
                console.log(error)
            });
    }

    // whatever is in in div will be displayed 
    // render allows it to be working and successfully display the below header
    // Passing the data from viewOrder component to the orders component by creating an object orders
    // state has object called orders, passing orders down as part of an object called orders
    render() {
        return (
            <div className="App">
                <Orders orders={this.state.orders} ReloadData={this.ReloadData}></Orders>
            </div>
        );
    }
}