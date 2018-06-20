import React, { Component } from 'react';

class FamousPeople extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            FamousPerson: { name: '', role: '' },
            famousPersonList: []
        }
    }
    
    handleChangeFor = (propertyName) => (event) => {
        // console.log(propertyName);
        this.setState( { FamousPerson: {
            ...this.state.FamousPerson,
            [propertyName]: event.target.value
            }
        });
    }
  
    handleSubmit = (event) => {
        // console.log(this.state.FamousPerson);
        // this.famousPeople.push(this.state.FamousPerson);
        // console.log(this.famousPeople);

        event.preventDefault();
        this.setState({ famousPersonList: [...this.state.famousPersonList, this.state.FamousPerson]});
        this.setState({ FamousPerson: { name: '', role: ''}});
    }

    render() {
        return (
            <div>
                <h3>Famous People</h3>
                <form onSubmit={this.handleSubmit}>
                <input placeholder="Famous Person" onChange={this.handleChangeFor('name')} value={this.state.FamousPerson.name}/>
                <input placeholder="Famous Role" onChange={this.handleChangeFor('role')} value={this.state.FamousPerson.role}/>
                <input type="submit" value="Add" />
                </form>
                {/* <p>Name: {this.state.FamousPerson.name}</p>
                <p>Role: {this.state.FamousPerson.role}</p> */}
                <ul>
                    { this.state.famousPersonList.map( FamousPerson =>
                    <li key={FamousPerson.name}>{FamousPerson.name} is famous for the role of {FamousPerson.role}.</li>)}
                </ul>
            </div>
        );
    }
}

export default FamousPeople;
