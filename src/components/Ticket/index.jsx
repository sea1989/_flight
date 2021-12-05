import React from 'react';
import AF from '../../assets/AF.svg';

import './style.css';

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: this.props.flight.price.passengerPrices[0].singlePassengerTotal.amount,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
  }

  render() {
    return (
      <div class='tickets__ticket ticket'>
        <div class='ticket__header header-ticket'>
          <div class='header-ticket__logo'>
            <img src={AF} alt='Логотип компании' width='343' height='37' />
          </div>
          <div class='header-ticket__body'>
            <div class='header-ticket__price'>{this.props.flight.price.passengerPrices[0].singlePassengerTotal.amount}₽</div>
            <div class='header-ticket__text'>
              Стоимость для одного взрослого пассажира
            </div>
          </div>
        </div>
        <div class='ticket__body body-ticket'>
          <div class='body-ticket__header'>
            <div class='body-ticket__left-header'>
              Москва, ШЕРЕМЕТЬЕВО<span>(SVO)</span>
            </div>
            <div class='body-ticket__center-header'>→</div>
            <div class='body-ticket__right-header'>
              ПАРИЖ, ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ<span>(CDG)</span>
            </div>
          </div>
          <div class='body-ticket__times'>
            <div class='body-ticket__left-times'>
              06:10<span>18 авг. ПТ</span>
            </div>
            <div class='body-ticket__center-times'>10 ч 15 мин</div>
            <div class='body-ticket__right-times'>
              16:25<span>18 авг. ПТ</span>
            </div>
          </div>
          <div class='body-ticket__transfer'>1 пересадка</div>
          <div class='body-ticket__footer'>Рейс выполняет: AF Air France</div>
        </div>
        <div class='ticket__line'> </div>
        <div class='ticket__body body-ticket'>
          <div class='body-ticket__header'>
            <div class='body-ticket__left-header'>
              ЛОНДОН, Лондон, Хитроу<span>(LHR)</span>
            </div>
            <div class='body-ticket__center-header'>→</div>
            <div class='body-ticket__right-header'>
              ПАРИЖ, ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ<span>(CDG)</span>
            </div>
          </div>
          <div class='body-ticket__times'>
            <div class='body-ticket__left-times'>
              17:35<span>19 авг. СБ</span>
            </div>
            <div class='body-ticket__center-times'>25 ч 20 мин</div>
            <div class='body-ticket__right-times'>
              18:55<span>20 авг. ВС</span>
            </div>
          </div>
          <div class='body-ticket__transfer'>1 пересадок</div>
          <div class='body-ticket__footer'>Рейс выполняет: AF Air France</div>
        </div>
        <button class='ticket__btn'>ВЫБРАТЬ</button>
      </div>
    );
  }
}
