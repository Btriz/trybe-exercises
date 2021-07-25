import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const {
      name,
      type,
      averageWeight: w,
      image,
      moreInfo: info,
    } = pokemon;
    const weight = `Average Weight: ${w.value} ${w.measurementUnit}`;

    return (
      <li className="p-7 mt-5 w-96 bg-white rounded-xl shadow-md flex items-center space-x-4">
        <img
          src={ image }
          alt={`imagem do pokemon ${ name }`}
        />
        <div>
          <h4
            className="text-2xl">
              { name }
          </h4>

          <p className="px-1 pt-1 pb-4 text-gray-500">
            { type } <br />
            { weight }
          </p>

          <a
            href={ info }
            rel="noreferrer"
            target="_blank">
              <button
                className="px-4 py-1 text-sm text-red-600 rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
                  More info...
              </button>
          </a>
        </div>
      </li>
    );
  }
}

export default Pokemon;