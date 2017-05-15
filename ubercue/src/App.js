import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {grills : []};
        this.loadGrills = this.loadGrills.bind(this);
    }

    componentWillMount(){
        this.loadGrills();
    }

    loadGrills(){
        fetch('http://localhost:3001/api/grills')
            .then((response) => response.json())
            .then((data) => this.setState({grills: data}));
    }

    render() {

       const { grills } = this.state;

        return (
            <ul>
                {grills.map((grill) => (
                <li key={grill.id} > {grill.name}</li>
                ))}
            </ul>
        )
    };
}

export default App;
