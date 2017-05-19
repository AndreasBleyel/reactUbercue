import React, {Component} from 'react';
import './App.css';
import SingleGrill from './SingleGrill';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {grills : [], grill : null};
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

    loadGrill(grillId) {
        fetch('http://localhost:3001/api/grills/' + grillId)
            .then((response) => response.json())
            .then((data) => this.setState({grill: data}));
    }

    render() {

       const { grills , grill} = this.state;

        return (
            <div>
            <ul>
                {grills.map((grill) => (
                    <li key={grill.id}>
                        <a href="#" onClick={ (e) => this.loadGrill(grill.id) }> {grill.name} </a>
                    </li>
                ))}
            </ul>
                {grill && <SingleGrill grill={grill} /> }

            </div>
        )
    };
}

export default App;
