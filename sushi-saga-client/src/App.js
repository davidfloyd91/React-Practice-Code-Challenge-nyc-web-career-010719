import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushi: [],
    index: 0,
    eatenSushi: [],
    bread: 200,
  };

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(sushi => {
      this.setState({ sushi })
    });
  };

  eat = sushi => {
    (this.state.bread >= sushi.price && !this.state.eatenSushi.includes(sushi))
      ?
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      bread: this.state.bread - sushi.price,
    })
      :
    alert('Naw dude rules\'re rules');
  };

  renderMore = () => {
    this.setState({
      index: this.state.index + 4,
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.sushi}
          eatenSushi={this.state.eatenSushi}
          index={this.state.index}
          more={this.renderMore}
          eat={sushi => this.eat(sushi)}
        />
        <Table
          plateArray={this.state.eatenSushi}
          bread={this.state.bread}
        />
      </div>
    );
  };
};

export default App;
