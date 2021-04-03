import {useParams} from 'react-router';
import {ButtonList, InputList, Operators, SystemsList} from '../mock/mock';
import InputItem from './input-item';
import PayButton from './pay-button';
import SystemItem from './system-item';

export default () => {
  let {operator} = useParams();
  const settings = Operators[operator];

  return <div className="pay-screen pay-screen">
          <div className={"pay-screen__wrapper pay-screen--" + settings.operatorName}>
            <h1 className="pay-screen__header">Пополнить баланс</h1>
            <form className="pay-screen__form form">
              <span className="form__text">С банковской карты, Apple Pay или Google Pay</span>
              <span className="form__description">Мгновенное зачисление денег на счёт телефона без комиссий</span>
              <ul className="form__input-list">
                {Object.values(InputList).map(InputItem)}
              </ul>
              <div className="pay-screen__privacy">
                  <span className="pay-screen__privacy-text">
                    Нажимая кнопку «Продолжить», вы принимаете условия
                    <a className="pay-screen__privacy-link" href="#"> пользовательского соглашения.</a>
                  </span>
                <ul className="pay-screen__pay-systems pay-systems">
                  {Object.values(SystemsList).map(SystemItem)}
                </ul>
              </div>
            </form>
            <ul className="pay-screen__pay-buttons pay-buttons">
              {Object.values(ButtonList).map(PayButton)}
            </ul>
          </div>
          </div>
}



