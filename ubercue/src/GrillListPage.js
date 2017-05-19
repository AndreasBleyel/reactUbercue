import React, {Component} from 'react';
import './App.css';

class GrillListPage extends Component {

    componentWillMount(){
        this.props.loadGrills();
    }

    render() {

       const { grills } = this.props;


        return (
            <ul>
                {grills && grills.map((grill) => (
                    <li key={grill.id}>
                        <a href="#" onClick={ (e) => this.props.loadGrill(grill.id) }> {grill.name} </a>
                    </li>
                ))}
            </ul>

        )
    };
}

export default GrillListPage;
