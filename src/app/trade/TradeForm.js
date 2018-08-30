import React from 'react';
import { render } from 'react-dom';
import Form, { Input, Fieldset } from 'react-bootstrap-form';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import axios from 'axios';


export default class TradeForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSideChange = this.handleSideChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.state = {
            isLoading: false,
            value: '',
            trade: {
                date: '',
                side: '',
                price: '',
                quantity: ''
            }
        }
    };


    handleDateChange(e) {
        this.state.trade.date = e.target.value;

    }

    handleSideChange(e) {
        this.state.trade.side = e.target.value;
    }

    handlePriceChange(e) {
        this.state.trade.price = e.target.value;
    }

    handleQuantityChange(e) {
        this.state.trade.quantity = e.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
            console.log(this.state.trade.date);
        this.setState({ isLoading: true });
        axios.post('http://localhost:8090/api/trade', {
            title:this.state.trade.side,
            side:this.state.trade.side,
            price : this.state.trade.price,
            quantity : this.state.trade.quantity,
            date : this.state.trade.date
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (<form>
            <FormGroup>
                <FormControl
                    type="text"
                    placeholder="Enter Date"
                    onChange={this.handleDateChange}
                />
                <FormControl
                    type="text"
                    placeholder="Enter Side"
                    onChange={this.handleSideChange}
                />
                <FormControl
                    type="text"
                    placeholder="Enter Price"
                    onChange={this.handlePriceChange}
                />
                <FormControl
                    type="text"
                    placeholder="Enter Quantity"
                    onChange={this.handleQuantityChange}
                />
                <Button bsStyle="primary" bsSize="large" onClick={this.handleSubmit}></Button>
            </FormGroup>
        </form>);
    }
}
