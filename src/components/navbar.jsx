import React, { Component } from 'react';

class Navbar extends Component {
    state = {}
    render() {
        return <div>
            <nav class="navbar navbar-light bg-light">
                <button className="badge badge-primary badge-lg">{this.props.totalCounters}</button>
                <p>NavBar</p>
            </nav>
        </div>;
    }
}

export default Navbar;