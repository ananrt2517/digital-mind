import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoRequest } from './store/actions/actions';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state)
  console.log('state', state)

  useEffect(() => {
    dispatch(fetchTodoRequest())
  }, [dispatch]);

  return (
    <div className="App">
      ana
    </div>
  );
}

export default App;
