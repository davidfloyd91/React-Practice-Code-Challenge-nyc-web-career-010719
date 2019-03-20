import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = props => {
  const eat = id => {
    let eatenSushi = props.sushi.find(s => {
      return s.id === id;
    });
    props.eat(eatenSushi);
  };

  const renderSushi = () => {
    return props.sushi.slice(props.index, props.index + 4).map(s => {
      return (
          props.eatenSushi.includes(s)
            ?
          <Sushi
          key={s.id}
          id={s.id}
          name={s.name}
          img_url=''
          price={s.price}
          eat={id => eat(id)}
          />
            :
          <Sushi
            key={s.id}
            id={s.id}
            name={s.name}
            img_url={s.img_url}
            price={s.price}
            eat={id => eat(id)}
          />
      );
    });
  };

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton more={props.more} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
