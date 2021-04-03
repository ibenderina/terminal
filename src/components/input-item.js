export default ({className, placeholder, description, id}) => {
  return <li className={"form__input-item form__input-item--" + className}>
          <label className="form__label">
            <input className="form__input" type="text" id={id} name={id} placeholder={placeholder} pattern={'[0-9]{1,3}|1000'} onInput={(evt)=> {

              evt.target.setCustomValidity('');
              if (!evt.target.checkValidity()) {
                evt.target.setCustomValidity('pusya');
                evt.target.reportValidity();
              }
            }}/>
            <span className="form__info">{description}</span>
          </label>
        </li>
}
