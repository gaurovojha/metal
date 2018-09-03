import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import TradeForm from '../trade/TradeForm';
import axios from 'axios';


const options = {
    onRowClick: function (row) {
        alert(`You double click row id: ${row.id}`);

    },
    onRowDoubleClick: function (row) {
        alert(`You double click row id: ${row.id}`);
    }

};


export default class StockTable extends Component {
    constructor(props, context) {
        super(props);
        console.log("Cart Item Created", context);
        this.onTradeAdd = this.onTradeAdd.bind(this);
        this.state = {
            toggleAddTrade: false,
            toggleTradeSumm: false,
            trades: []
        }
    }

    componentDidMount() {
        console.log('******************************'+this.state.trades);
        let that = this;
        axios.get('http://localhost:8090/api/trade')
            .then(function (response) {
                console.log(response);
                that.setState({
                    trades:response.data
                });
            })
            console.log('******************************'+this.state.trades);

    }


    onTradeAdd(e) {
        this.setState(prevState => ({
            toggleAddTrade: !prevState.toggleAddTrade
        }));
    }


    render() {
        let showDetail = null;
        const selectRowProp = {
            mode: 'radio'
        };


        console.log("inside stock table render method");


        if (this.state.toggleAddTrade) {
            showDetail = <TradeForm></TradeForm>
        }

        console.log("inside stock table render method");

        let products = [
            {
                'id': 1,
                'name': 'choclate',
                'price': 100,
            }, {
                'id': 2,
                'name': 'choclate',
                'price': 100,
            }, {
                'id': 3,
                'name': 'choclate',
                'price': 100,
            }, {
                'id': 4,
                'name': 'choclate',
                'price': 100,
            }, {
                'id': 5,
                'name': 'choclate',
                'price': 100,
            }, {
                'id': 6,
                'name': 'choclate',
                'price': 100,
            }, {
                'id': 7,
                'name': 'choclate',
                'price': 100,
            }, {
                'id': 8,
                'name': 'choclate',
                'price': 100,
            }];
        return (
            <Grid>
                <Row>
                    <Col md={8}>
                        <BootstrapTable data={this.state.trades} options={options} selectRow={selectRowProp}>
                            <TableHeaderColumn width='50' dataField='date' isKey>Trade Date</TableHeaderColumn>
                            <TableHeaderColumn width='50' dataField='name'>Commodity</TableHeaderColumn>
                            <TableHeaderColumn width='50' dataField='side'>Side</TableHeaderColumn>
                            <TableHeaderColumn width='50' dataField='quantity'>Qty(MT)</TableHeaderColumn>
                            <TableHeaderColumn width='50' dataField='price'>Price(/MT)</TableHeaderColumn>
                            <TableHeaderColumn width='50' dataField='name'>Counterparty</TableHeaderColumn>
                            <TableHeaderColumn width='50' dataField='price'>Location</TableHeaderColumn>
                        </BootstrapTable>
                    </Col>
                    <Col md={4}>
                        {showDetail}

                    </Col>
                </Row>
                <Row>
                    <Button bsSize="large" onClick={this.onTradeAdd}></Button>
                </Row>

            </Grid>

        )
    }
}
