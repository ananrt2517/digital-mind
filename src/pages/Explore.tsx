import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoRequest } from '../store/actions/actions';
import { useEffect } from 'react';

interface Props {
  
}

const Explore = (props: Props) => {

  const dispatch = useDispatch();
  const state = useSelector(state => state)
  console.log('state', state)

  useEffect(() => {
    dispatch(fetchTodoRequest())
  }, [dispatch]);

  return (
    <div>
      explore
    </div>
  )
}

export default Explore
