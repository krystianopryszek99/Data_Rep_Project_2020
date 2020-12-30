import React from 'react';
//importing DisplayOrder
import {DisplayOrder} from './displayOrder';

export class Orders extends React.Component{

    //log this.props to access what's been passed as a property to this new component 
    //function - "this.props.orders.map()" it's passed as the property as part of the property of this class
    //in the return method, it splits the collection using the map function 
    //in the return method, passing reload data, this is coming from the parent teaching grandchild
    render(){
        return this.props.orders.map((order)=>{
            return <DisplayOrder order={order} ReloadData={this.props.ReloadData}></DisplayOrder>
        })
    }
}