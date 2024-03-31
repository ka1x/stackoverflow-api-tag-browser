import {ListGroupItem} from 'react-bootstrap';
import PropTypes from 'prop-types';

type ListItemProps = {
   name: string;
   count: number;
};

const ListItem = ({name, count}: ListItemProps) => {
   return (
      <ListGroupItem
         className='d-flex px-5 py-3 my-2 shadow-sm rounded justify-content-between'
         style={{border: 'none'}}>
         # {name}
         <span className='fw-bold'>{count}</span>
      </ListGroupItem>
   );
};

ListItem.propTypes = {
   /** name of the tag */
   name: PropTypes.string,
   /** count of tag uses */
   count: PropTypes.number,
};

export default ListItem;
