import {Operators} from '../mock/mock';
import OperatorItem from '../components/operator'

export default () => {
  return <ul className="operators">
          {Object.values(Operators).map(OperatorItem)}
        </ul>
}

