import React from 'react';

import Form from '../form';
import Ticket from '../Ticket';

import _data from '../flights.json';

import './style.css';

export default class TaskBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: _data.result.flights.slice(0, 13),
    });
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
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
