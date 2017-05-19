/**
 * Created by andi on 19.05.17.
 */
import React, {Component} from 'react';

class SingleGrill extends Component {



    render() {

        const {grill} = this.props;

        return (

            <h2> {grill.id} {grill.name}</h2>

        )
    };
}

export default SingleGrill;