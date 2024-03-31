import {Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {decrementApiPage, incrementApiPage} from '../redux/slices/tagSlice';

const PageBtns = () => {
   const dispatch = useDispatch();
   const {apiPage} = useSelector((state: RootState) => state.tags);

   const handleIncrement = () => {
      dispatch(incrementApiPage());
   };

   const handleDecrement = () => {
      dispatch(decrementApiPage());
   };

   return (
      <Col className='d-flex justify-content-center align-items-center gap-3 mb-5'>
         <button
            type='button'
            onClick={handleDecrement}
            className='btn btn-outline-secondary btn-sm'>
            {' '}
            {`<`}{' '}
         </button>
         {apiPage}
         <button
            type='button'
            onClick={handleIncrement}
            className='btn btn-outline-secondary btn-sm'>
            {`>`}{' '}
         </button>
      </Col>
   );
};

export default PageBtns;
