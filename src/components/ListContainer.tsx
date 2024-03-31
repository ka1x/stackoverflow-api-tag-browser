import {Container, ListGroup, ListGroupItem} from 'react-bootstrap';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

type Tag = {
   name: string;
   count: number;
};

type ListProps = {
   tags: Tag[];
};

const ListContainer = ({tags}: ListProps) => {
   return (
      <>
         <Container className='w-100 m-auto'>
            <ListGroup className=' mb-5 mt-5 '>
               <ListGroupItem
                  className='d-flex px-5 bg-transparent rounded justify-content-between fw-bold'
                  style={{border: 'none'}}>
                  <span>Name</span>
                  <span>Count</span>
               </ListGroupItem>
               {tags.map((item, i) => (
                  <ListItem
                     {...item}
                     key={i}
                  />
               ))}
            </ListGroup>
         </Container>
      </>
   );
};

ListContainer.propTypes = {
   /** array containg a list of tags, each of which is a ListItem */
   tags: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string.isRequired,
         count: PropTypes.number.isRequired,
      })
   ).isRequired,
};

export default ListContainer;
