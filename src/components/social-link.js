export default ({className, text, link}) => {
  return <li className="social__link-item">
          <a className={"social__link social__link--" + className} href={link} aria-label={text}> </a>
        </li>
}
