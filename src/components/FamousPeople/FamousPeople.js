import React, { Component } from 'react';

class FamousPeople extends Component {

    famousPeople = [];
    
    constructor(props) {
        super(props);
        this.state = { FamousPerson: { name: 'Famous Person', role: 'What Theyre Famous For' }}
    }
    
    handleChangeFor = (propertyName) => (event) => {
        // console.log(propertyName);
        this.setState( { FamousPerson: {
            ...this.state.FamousPerson,
            [propertyName]: event.target.value
            }
        });
    }
  
    logName = (event) => {
        console.log(this.state.FamousPerson);
        this.famousPeople.push(this.state.FamousPerson);
        console.log(this.famousPeople);
    }

    render() {
        return (
            <div>
                <input placeholder="Famous Person" onChange={this.handleChangeFor('name')} />
                <p>  </p>
                <input placeholder="Famous Role" onChange={this.handleChangeFor('role')} />
                <p>{this.state.FamousPerson.name} is famous for the role of {this.state.FamousPerson.role}.</p>
                <button onClick={this.logName}>Submit
                </button>
            </div>
        );
    }
}

export default FamousPeople;
