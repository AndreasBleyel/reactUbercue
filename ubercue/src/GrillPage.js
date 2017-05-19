import React, {Component} from 'react';
import './App.css';
import SingleGrill from './SingleGrill';

class GrillPage extends Component {





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
