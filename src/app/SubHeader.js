import React, {Component} from "react";
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
import Checkbox from 'react-bootstrap/lib/Checkbox'

export default class Home extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            
            <Grid>
              <Row>
                <Col md={3}>
                <label>Trade Date</label>
                </Col>
                <Col md={2}>
                <label>Commodity</label>
                </Col>
                <Col md={3}>
                <label>Side</label>
                </Col>
                <Col md={2}>
                <label>Counterparty</label>
                </Col>
                <Col md={2}>
                <label>Location</label>
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <FormControl type="text" class='input-lg'/>
                        <FormControl type="text" class='input-lg'/>
                    </FormGroup>{' '}
                </Form>
                </Col>
                <Col md={2}>
                <FormGroup >
			    <InputGroup>
                      <DropdownButton
                        componentClass={InputGroup.Button}
                        id="input-dropdown-addon"
                        title="Action">
                        <MenuItem key="1">Item</MenuItem>
                    </DropdownButton>
			        </InputGroup>
		        </FormGroup>
                </Col>
                <Col md={3}>
                    <Checkbox>Buy</Checkbox>
                    <Checkbox>Sell</Checkbox>
                </Col>
                <Col md={2}>
                    <FormGroup >
			        <InputGroup>
                      <DropdownButton
                        componentClass={InputGroup.Button}
                        id="input-dropdown-addon"
                        title="Action">
                        <MenuItem key="1">Item</MenuItem>
                    </DropdownButton>
			        </InputGroup>
		        </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup >
			            <InputGroup>
                            <DropdownButton
                                componentClass={InputGroup.Button}
                                id="input-dropdown-addon"
                                title="Action">
                            <MenuItem key="1">Item</MenuItem>
                            </DropdownButton>
			        </InputGroup>
		            </FormGroup>
                </Col>
              </Row>
            </Grid>
        )
    }
}