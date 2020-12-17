import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 4 }, { id: 3, value: 4 }, { id: 4, value: 4 },]

  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }
  handleDelete = counterId => {
    const dele = this.state.counters.filter(m => m.id !== counterId);
    this.setState({ counters: dele });
  }
  handleReset = () => {
    const counters = this.state.counters.map(counter => { counter.value = 0; return counter; });
    this.setState({ counters });

  }
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });


  }
  render() {
    return (
      <div>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} ></Navbar>
        <Counters onDecrement={this.handleDecrement} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onReset={this.handleReset} counters={this.state.counters}></Counters>
      </div >

    );
  }

}

export default App;
