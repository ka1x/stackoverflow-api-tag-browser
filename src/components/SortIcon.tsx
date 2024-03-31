import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setSortBy, setOrder} from '../redux/slices/sortTagSlice';

type SortIconProps = {
   sortType: 'name' | 'popular';
   order: 'desc' | 'asc';
};

const SortIcon = ({sortType, order}: SortIconProps) => {
   const dispatch = useDispatch();
   const imageUrl = `/sort-${sortType === 'name' ? 'alpha' : 'numeric'}-${order === 'asc' ? 'down' : 'up'}.svg`;

   const handleClick = () => {
      console.log('click');
      dispatch(setSortBy(sortType));
      dispatch(setOrder(order));
   };

   return (
      <button
         type='button'
         className='btn btn-outline-secondary p-1 mx-1'>
         <img
            style={{height: '20px', cursor: 'pointer'}}
            src={imageUrl}
            onClick={handleClick}
         />
      </button>
   );
};

SortIcon.propTypes = {
   /** choice of count/name sorting enabling a change of state and setting appropriate icon */
   sortType: PropTypes.oneOf(['name', 'popular']).isRequired,
   /** choice of ascending/descending order enabling a change of state and setting appropriate icon */
   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
};
export default SortIcon;
