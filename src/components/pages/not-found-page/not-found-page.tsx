
import { Link } from 'react-router-dom';
import './not-fount-page.css';

function NotFoundPage(): JSX.Element{
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <div className="container">
          <h1 className="not-found-page__title">404</h1>
          <p className="not-found-page__text">
            Page not found
          </p>
          <Link
            to="/"
            className="not-found-page__link"
          >
            Go to main page
          </Link>
        </div>
      </main>
    </div>

  );
}

export default NotFoundPage;
