import React from 'react';

import './style.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
  }

  render() {
    return (
      <form class='header__form'>
        <div class='header__row'>
          <div class='header__title'>Сортировать</div>
          <div class='header__input'>
            <label class='header__label'>
              - по возрастанию цены
              <input type='radio' name='sort' value='maxPrice' />
            </label>
            <label class='header__label'>
              - по убыванию цены
              <input type='radio' name='sort' value='minPrice' />
            </label>
            <label class='header__label'>
              - по времени в пути
              <input type='radio' name='sort' value='bestTime' />
            </label>
          </div>
        </div>
        <div class='header__row'>
          <div class='header__title'>Фильтровать</div>
          <div class='header__input'>
            <label class='header__label'>
              - 1 пересадка
              <input type='checkbox' name='transfer' value='1' />
            </label>
            <label class='header__label'>
              - без пересадок
              <input type='checkbox' name='transfer' value='0' />
            </label>
          </div>
        </div>
        <div class='header__row'>
          <div class='header__title'>Цена</div>
          <div class='header__input'>
            <label class='header__label-price' for='afterPrice'>
              От
              <input id='afterPrice' type='number' name='afterPrice' />
            </label>
            <label class='header__label-price' for='beforePrice'>
              До
              <input id='beforePrice' type='number' name='beforePrice' />
            </label>
          </div>
        </div>
        <div class='header__row'>
          <div class='header__title'>Авиакомпании</div>
          <div class='header__input'>
            <label class='header__label'>
              LOT Polish Airlines
              <input type='checkbox' name='aircompany' value='LO' />
            </label>
            <label class='header__label'>
              Аэрофлот
              <input type='checkbox' name='aircompany' value='SU' />
            </label>
          </div>
        </div>
      </form>
    );
  }
}
