
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// PureComponent => comes with shouldComponentUpdate implemented

export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            discount : true
        }
        
    }
    
    componentDidMount() {
        
    }

    applyDiscount() {
        //calls shouldComponentUpdate
        // this.setState({
        //     discount: !this.state.discount
        // });

        //calls render always
        //doesn't call shouldComponentUpdate
        this.forceUpdate();
    }

    // called when parent render called
    componentWillReceiveProps(nextProps) {
        console.log("summary next props", nextProps);
        console.log("summary current props", this.props);
    }
 
    // called when parent render
    // called when current comp setState
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("cart summary shouldComponentUpdate");
       
    //     console.log("should upate, current state", this.state);
    //     console.log("should upate, next state", nextState);
        
       
    //     if (this.props.count != nextProps.count || 
    //         this.props.amount != nextProps.amount ||
    //         this.state.discount != nextState.discount
    //     ) {
    //             return true; //this should call render
    //         }

    //     return false;
    // }
  
    render() {
        console.log("CartSummary render");
        
        return (
            <div> 
            
            <h2>Total Items {this.props.count}</h2>
            <h2>Amount  {this.props.amount}</h2>
 

            { this.state.discount && 
                <p> Discount {this.props.amount - 1000} </p>
            }

            <button onClick={() => this.applyDiscount()}>
                Apply discount
            </button>

            </div>
        )
    }
} 

 