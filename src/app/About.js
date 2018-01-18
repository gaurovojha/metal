import React, {Component} from "react";

export default class About extends Component {

    constructor() {
        super();

        //state is a keyword
        //for mutable data
        this.state = {
            members: ["Member 1", "Member 2"],
            showList: true
        }

    }

    addMember() {
        console.log("add member ", this);
        //BAD
        //Mutable
        this.state.members.push("member " 
                    + Math.random());

        //BAD
        //trigger render method
        //this.forceUpdate();
        //GOOD
        this.setState({
            members: this.state.members
        })
        
    }

    showHide() {
        // set the state
        //calls render
        this.setState({
            showList: !this.state.showList
        })
    }

    //returns a virtual dom

    getList() {
        return (
            <ul>
            {
                this.state.members.map( (member, index) => (
                    <li key={index} > {member} </li>
                ))
            }
             </ul>
        )
    }

    render() {

            console.log("about render called");

        return (
<div>
    <h2>About</h2>

    <h2>Member2</h2>

    { this.state.showList && this.getList() }
    
    {/* { this.state.showList &&  <ul>
        {
            this.state.members.map( (member, index) => (
                <li key={index} > {member} </li>
            ))
        }
     </ul>
    } */}

    <button onClick={() => this.addMember()}>
        Add
    </button>

   {/* comments */}
    <button onClick={() => this.showHide()}>
        {this.state.showList ? "Hide": "Show"}
    </button>
</div>
        )
    }

}