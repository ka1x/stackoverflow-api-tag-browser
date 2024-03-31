import {Col} from 'react-bootstrap';
import SortIcon from './SortIcon';
import PropTypes from 'prop-types';

type SortControlsType = {
   label: string;
   sortType: 'name' | 'popular';
};

const SortControls = ({label, sortType}: SortControlsType) => (
   <span className='text-center'>
      <Col>
         <Col>Sort by {label}:</Col>
         <Col>
            <SortIcon
               order={'asc'}
               sortType={sortType}
            />
            <SortIcon
               order={'desc'}
               sortType={sortType}
            />
         </Col>
      </Col>
   </span>
);

SortControls.propTypes = {
   /** Label signifying what type of sorting the component should trigger */
   label: PropTypes.string,
   /** Choice of sorting type performed by buttons in the component */
   sortType: PropTypes.oneOf(['name', 'popular']).isRequired,
};
export default SortControls;
