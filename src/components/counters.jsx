import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        return (<div>
            <button className="btn btn-primary" onClick={this.props.onReset}>Reset</button>
            {this.props.counters.map(counter => (
                <Counter key={counter.id} onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} counter={counter}></Counter>
            ))}


        </div>);
    }
}

export default Counters;