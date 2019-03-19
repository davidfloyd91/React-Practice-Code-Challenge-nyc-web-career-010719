import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  state = {
    sushi: [],
    batchIndex: 0,
  };

  componentDidMount() {
    this.setState({
      sushi: [],
    }, () =>  {
      fetch("http://localhost:3000/sushis")
      .then(r => r.json())
      .then(sushi => {
        sushi.forEach(s => {
          this.setState({
            sushi: [...this.state.sushi, s]
          });
        });
      });
    });
  };

  eat = sushi => {
    this.props.onEat(sushi);
    let foundSush;
    foundSush = this.state.sushi.find(s => {
      return s.id === sushi.id;
    });
    foundSush.img_url = '';
  };

  handleClick = e => {
    this.setState({
      batchIndex: this.state.batchIndex + 4,
    });
  };

  renderSushi = () => {
    return this.state.sushi.slice(this.state.batchIndex, this.state.batchIndex + 4).map(s => {
      return (
        <Sushi
          id={s.id}
          name={s.name}
          price={s.price}
          img_url={s.img_url}
          eat={() => this.eat(s)}
        />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushi()}
          <MoreButton handleClick={this.handleClick}/>
        </div>
      </Fragment>
    );
  };
};

export default SushiContainer;
