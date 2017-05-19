/**
 * Created by andi on 19.05.17.
 */
import React, {Component} from 'react';

class SingleGrill extends Component {

    constructor(props) {
        this.state = {grill: String};
        this.loadGrill = this.loadGrill.bind(this);
    }

    componentWillMount() {
        this.loadGrill();
    }


    loadGrill(grillId) {
        fetch('http://localhost:3001/api/grills/' + grillId)
            .then((response) => response.json())
            .then((data) => this.setState({grill: data}));
    }

    render() {

        const {grill} = this.state;

        return (

            <h2> {grill.id} {grill.name}</h2>

        )
    };
}

export default SingleGrill;