import {MySocialList} from '../mock/mock';
import SocialItem from '../components/social-link';

export default () => {
  return (
      <footer className="footer">
        <div className="container__content">
          <ul className="footer__social social">
            {Object.keys(MySocialList).map((key) => {
              return SocialItem({
                      className: key,
                      text: MySocialList[key].text,
                      link: MySocialList[key].link,
                    });
            })}
          </ul>
          <a className="footer__developer" href="https://github.com/ibenderina">
            <span className="footer__developer-text">
              Developer
              <br/>Irina Lukina
            </span>
          </a>
        </div>
      </footer>
  );
};
