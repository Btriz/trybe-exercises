import React from 'react';

class Header extends React.Component {
  render() {
    const list = this.props.list;

    return (
      <div className="p-6 bg-red-600">
        <h1 className="m-5 text-5xl text-white">
          Pokédex</h1>
      </div>
    );
  }
}

export default Header;