import {Link} from 'react-router-dom';

export default ({operatorName}) => {
  return <li className={["operators__item", operatorName].join(' ')}>
          <Link className="operators__item-link" to={'/'+operatorName}>{operatorName}</Link>
        </li>
}



