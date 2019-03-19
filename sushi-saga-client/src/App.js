import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    wallet: 100,
  };

  handleEat = sushi => {
    if (this.state.wallet >= sushi.price) {
      this.setState({
        wallet: this.state.wallet - sushi.price,
      });
    } else {
      alert("Sorry dog you're broke.");
    };
  };

  render() {
    return (
      <div className="app">
        <SushiContainer onEat={this.handleEat} />
        <Table wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;
