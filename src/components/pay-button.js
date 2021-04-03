export default ({className, text, type}) => {
  return <li className={"pay-buttons__item pay-buttons__item--" + className}>
           <button className="pay-buttons__button" type={type}>{text}</button>
        </li>
}
