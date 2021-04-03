export default ({className, icon}) => {
  return <li className={"pay-systems__item pay-systems__item--" + className}>
          <img className="pay-systems__img" src={icon} />
        </li>
}
