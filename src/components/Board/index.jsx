import React from 'react';

import Form from '../Form';
import Ticket from '../Ticket';

import _data from '../../data/flights.json';

import './style.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: _data.result.flights.slice(0, 13),
    };
  }

  render() {
    return (
      <section className='taskboard'>
        <Form />
        <div class='tickets__container'>
          <div class='tickets__list'>
            {this.state.data.map((item, index) => (
              <Ticket {...item} key={index} />
            ))}

            <button class='tickets__btn'>Показать еще</button>
          </div>
        </div>
      </section>
    );
  }
}
