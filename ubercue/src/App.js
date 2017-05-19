import React, {Component} from 'react';
import './App.css';
import GrillListPage from './GrillListPage';
import SingleGrill from './SingleGrill';
import {
    Route
} from 'react-router-dom'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {grills : [], grill : null};
        this.loadGrills = this.loadGrills.bind(this);
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

        const childProps = {
            grill: this.state.grill,
            grills: this.state.grills,
            loadGrills: this.loadGrills,
            loadGrill: this.loadGrill
        };

        return (
            <div>
                <h1>Willkommen</h1>
                <Route exact path="/" component={GrillListPage} {...childProps} />
                <Route path="/grill/:id" component={SingleGrill} {...childProps} />

            </div>
        )
    };
}

export default App;
