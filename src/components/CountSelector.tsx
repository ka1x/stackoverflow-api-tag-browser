import {Col, FormGroup, FormLabel} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {setPageSize} from '../redux/slices/tagSlice';
import {useState} from 'react';

const CountSelector = () => {
   const dispatch = useDispatch();
   const {apiPageSize} = useSelector((state: RootState) => state.tags);

   const [inputValue, setInputValue] = useState(apiPageSize);

   const handleConfirm = () => {
      dispatch(setPageSize(inputValue));
   };

   return (
      <FormGroup className='mx-3 gap-3 text-center'>
         <Col>
            <FormLabel htmlFor='numberInput'>Tags per page:</FormLabel>
         </Col>
         <Col
            className=' d-flex align-items-center justify-content-center '
            style={{gap: '10px'}}>
            <input
               type='number'
               className='form-control '
               style={{width: '75px'}}
               id='numberInput'
               min={1}
               max={100}
               value={inputValue}
               onChange={(e) => setInputValue(parseInt(e.target.value))}
            />

            <button
               className='btn btn-outline-secondary btn-sm'
               onClick={handleConfirm}>
               Set
            </button>
         </Col>
      </FormGroup>
   );
};

export default CountSelector;
