import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCity } from '../../store/action';
import { RootState } from '../../store';
import { CITIES } from '../../const';


function CitiesList(): JSX.Element {
  const dispatch = useDispatch();
  const currentCity = useSelector((state: RootState) => state.city);

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
                to="#"
                onClick={() => handleCityChange(city)}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
