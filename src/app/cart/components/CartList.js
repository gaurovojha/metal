
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
 
    shouldComponentUpdate(nextProps, nextState) {

        console.log("cart list should update");
        
        //shallow compare
        //check two referenes
        return nextProps.items !== this.props.items;

    }   
    
    render() {
        console.log("CartList render");

        let items = this.props.items;

        let rows = items.map ( item => (
            <CartItem item={item} 
                      key={item.id}  
                       />
        ));

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>

                    {rows}

                </tbody>
            </table>
        )
    }
} 
