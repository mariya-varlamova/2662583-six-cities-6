import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { SORT_OPTIONS } from '../../const';

type SortingOptionsProps = {
  onSortChange: (sortType: string) => void;
}

function SortingOptions({ onSortChange }: SortingOptionsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentSort = useSelector((state: RootState) => state.sortType);

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSortSelect = (sortType: string) => {
    onSortChange(sortType);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortClick}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {SORT_OPTIONS.map((option) => (
          <li
            key={option}
            className={`places__option ${option === currentSort ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
