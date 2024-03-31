import {Container} from 'react-bootstrap';
import CountSelector from './CountSelector';
import SortControls from './SortControls';

const FiltersBar = () => {
   return (
      <>
         <Container className='w-100 d-flex flex-row mb-3 justify-content-between align-items-center shadow-sm bg-white rounded py-2 mt-5'>
            <CountSelector />
            <SortControls
               label='Name'
               sortType={'name'}
            />
            <SortControls
               label='Count'
               sortType={'popular'}
            />{' '}
         </Container>
      </>
   );
};

export default FiltersBar;
