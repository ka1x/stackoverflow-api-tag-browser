import {Container} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTags} from './redux/slices/tagSlice';
import {useEffect} from 'react';
import ListContainer from './components/ListContainer';
import FiltersBar from './components/FiltersBar';
import PageBtns from './components/PageBtns';

function App() {
   const dispatch = useDispatch();
   const {tags, error, loading, apiPage, apiPageSize} = useSelector((state: any) => state.tags);
   const {order, sortBy} = useSelector((state: any) => state.sortTag);

   useEffect(() => {
      dispatch(fetchTags({sort: sortBy, order: order, page: apiPage, pageSize: apiPageSize}));
   }, [dispatch, sortBy, order, apiPageSize, apiPage]);

   return (
      <>
         <Container>
            <h1 className='text-center mt-5 mb-1'>Tag Browser</h1>
            {(loading || error) && (
               <div
                  className='text-center fs-4 d-flex justify-content-center align-items-center'
                  style={{height: '50vh'}}>
                  {loading ? `Loading...` : `Error: ${error}`}
               </div>
            )}

            {!loading && !error && (
               <>
                  {' '}
                  <FiltersBar /> <ListContainer tags={tags}></ListContainer>
                  <PageBtns />
               </>
            )}
         </Container>
      </>
   );
}

export default App;
