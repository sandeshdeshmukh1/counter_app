import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        marginTop: 25
    }


    render() {
        return (
            <div style={this.styles}>
                <span className={this.handleColorFormatter()}>{this.props.counter.value}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary m-2">+</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn-lg btn-info m-2" disabled={this.props.counter.value === 0 ? "disabled" : ""}>-</button>
                <button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>0</button>
            </div>);
    }
    handleColorFormatter() {
        let classes = "btn m-2 btn-";
        return classes += this.props.counter.value === 0 ? "danger" : "warning";
    }
    handeldeletebtn() {
        let classes = "btn btn-success  ";
        return classes += this.props.counter.value === 0 ? " disabled" : "m-2";

    }
}

export default Counter;