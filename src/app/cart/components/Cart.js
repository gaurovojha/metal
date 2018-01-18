
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

 
export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            amount: 0,
            count: 0,
            reload: true
        }
    }

    getChildContext() {
        return {
                color: "purple",
                name: "Product App"
            };
    }


    componentWillMount() {
         
    }

    componentWillUnmount() {
        console.log("Cart  will unmount")
    }

    reCalculate(items) {
        let total = 0;
        let count = 0;

        for (let item of items) {
            total += item.qty * item.price;
            count += item.qty;
        }

        this.setState({
            amount: total,
            count: count
        })
    }

    addItem() {
        let id = Math.ceil(Math.random() * 1000000);
        let item = {
            id: id,
            name: 'Product ' + id,
            price: Math.ceil(Math.random() * 1000),
            qty: 1
        }

        //BAD
        //this.state.items.push(item);
        //this.forceUpdate();

        let items =  [...this.state.items, item];

        this.setState({
            items: items
        });

        this.setState({
            flag: true
        });


        this.setState({
            flag: false
        });

        this.reCalculate(items);  
 
    }

    removeItem(id) {
         
    }

    updateItem(id, qty) {
 
    }

    emptyCart() {
        this.setState({
            items: []
        });
    }

    //dummy
    refresh() {
       this.setState({
           flag: true
         //  reload: this.state.reload
       })
    }
 
    componentDidMount() {
        
    }
    
    render() {
        console.log("Cart render");

        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={()=> this.addItem()}>
                Add Item
            </button>
 
            <button onClick={()=> this.refresh()}>
                Refresh
            </button>

            <button onClick={()=> this.emptyCart()} >
                 Empty
            </button>

            <CartList  items={this.state.items}>
            </CartList>

            <CartSummary amount={this.state.amount}
                         count={this.state.count}
                        
            >

            </CartSummary>


 

            </div>
        )
    }
} 

Cart.childContextTypes = {
    color: PropTypes.string,
    name: PropTypes.string
};

Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}