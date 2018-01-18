
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props, context) {
        super(props);
        console.log("Cart Item Created", context);

        this.state = {
             qty: props.item.qty
        }
    }
    
    //ES.NEXT
    //babel-preset-env support es.next
    static contextTypes = {
        name: PropTypes.string,
       // color: PropTypes.string
    }


    componentWillMount() {
        console.log("cart item will mount");
        
    }

    componentDidMount() {
        console.log("cart item did mount");

        this.inputElement.focus();
          
    }

    componentWillUnmount() {
        console.log("cart item will unmount");
    }

    handleChange(e) {
        let value = e.target.value;
        console.log(value);

        this.setState({
            qty: value
        })
    }
 
    render() {
        
        console.log("cart item context", this.context.color);
        //let item = this.props.item;
        //deconstruct
        let {item} = this.props;
         console.log("CartItem render ");

        return (
            <tr>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                   
                   <input value={this.state.qty} 
                          onChange={(e)=>this.handleChange(e)}
                          ref={ (inputElement) => this.inputElement = inputElement}
                   
                   />

                </td>
                <td>
                  {item.price * item.qty}
                </td> 

                <td>
                   <button> 
                       Update
                    </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

