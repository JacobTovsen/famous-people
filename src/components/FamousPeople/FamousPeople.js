import React, { Component } from 'react';

class FamousPeople extends Component {
  
    constructor(props) {
        super(props);
        this.state = { FamousPerson: { name: 'Famous Person', role: 'What Theyre Famous For' }}
    }
    
    handleChangeFor = (propertyName) => (event) => {
        console.log(propertyName);
        this.setState( { FamousPerson: {
            ...this.state.FamousPerson,
            [propertyName]: event.target.value
            }
        });
    }
  
    render() {
        return (
            <div>
                <h2>Famous People</h2>
                <input onChange={this.handleChangeFor('name')} />
                <input onChange={this.handleChangeFor('role')} />
                <p>{this.state.FamousPerson.name} is famous for the role of {this.state.FamousPerson.role}.</p>
            </div>
        );
    }
}

export default FamousPeople;
