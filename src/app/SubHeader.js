import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Select from 'react-select';
import axios from 'axios';


export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            location: []
        }
    }


    componentDidMount() {
        let that = this;
        //do a ajax call and fetch data
        axios.get('http://localhost:8060/api/reference/location', {

        })
            .then(function (response) {
                console.log("reference data from api/reference ====", response.data.length);

                let loc = {};
                let locations = [];
                response.data.forEach(element => {
                    loc.value = element.countryDesc;
                    loc.lable = element.countryCode;
                    locations.push(loc);
                });
                that.setState({
                    location: locations
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {

        const options = this.state.location;
        console.log("fhakjjkdsgkjsagkjsgkjsaghhsagj", options);
        const field = ({ options }) => (
            <Select
                name="university"
                value="one"
                options={options}
                onChange={val => console.log(val)}
            />
        );




        return (
            <div class='form-inline'>
                <div class="form-group">
                    <label for="email">Trade Date:</label>
                    <input type="text" class="form-control input-sm" id="email" />to
                    <input type="text" class="form-control" id="pwd" />
                </div>
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                    </ul>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="text" class="form-control" id="pwd" />
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </div>
        )
    }
}