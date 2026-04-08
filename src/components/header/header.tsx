import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/api-actions';
import { useAppDispatch } from '../../store/hooks';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useSelector((state: RootState) => state.authorizationStatus);
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const allOffers = useSelector((state: RootState) => state.offers);

  const isAuthorized = authorizationStatus === 'AUTH';

  const handleLogout = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorized ? (
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        {userInfo?.avatarUrl && (
                          <img
                            src={userInfo.avatarUrl}
                            alt={userInfo.name}
                            style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        )}
                      </div>
                      <span className="header__user-name user__name">{userInfo?.email}</span>
                      <span className="header__favorite-count">
                        {allOffers.filter((offer) => offer.isFavorite).length}
                      </span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to="#"
                      onClick={handleLogout}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
