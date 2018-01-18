import React,{Component} from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class StockTable extends Component{
    constructor(props, context) {
        super(props);
        console.log("Cart Item Created", context);
    }
    
    render(){
        console.log("inside stock table render method");
        let products = [
            {   'id':1,
                'name':'choclate',
                'price':100,
            },{   'id':1,
            'name':'choclate',
            'price':100,
        },{   'id':1,
        'name':'choclate',
        'price':100,
    },{   'id':1,
    'name':'choclate',
    'price':100,
}];
        return (
            
            <BootstrapTable data={ products }>
          <TableHeaderColumn width='50' dataField='id' isKey>Trade Date</TableHeaderColumn>
          <TableHeaderColumn width='50' dataField='name'>Commodity</TableHeaderColumn>
          <TableHeaderColumn width='50' dataField='price'>Side</TableHeaderColumn>
          <TableHeaderColumn width='50' dataField='name'>Qty(MT)</TableHeaderColumn>
          <TableHeaderColumn width='50' dataField='price'>Price(/MT)</TableHeaderColumn>
          <TableHeaderColumn width='50' dataField='name'>Counterparty</TableHeaderColumn>
          <TableHeaderColumn width='50' dataField='price'>Location</TableHeaderColumn>
          </BootstrapTable>
        )
    }
}
