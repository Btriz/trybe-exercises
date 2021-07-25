import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const list = this.props.list;

    return (
        <ul
        className="flex flex-wrap place-content-evenly p-5">
          {list.map((item) => (
            <Pokemon pokemon={item} key={ item.id } />
          ))}
        </ul>
    );
  }
}

export default Pokedex;