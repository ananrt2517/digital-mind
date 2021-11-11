import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoRequest, searchAction } from '../../store/actions/actions';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Card from '../../components/Card/Card';
import './explore.scss';
import { NFT_LIMIT } from '../../constants';
import { Link } from 'react-router-dom';
interface Props {
  
}

const Explore = (props: Props) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state);
  const [page, setPage] = useState(0);

  const skip = useMemo(() => NFT_LIMIT * page, [page]);

  const handleChange = useCallback(
    (e: any) => { 
      if (e.target.value === '') { 
        dispatch(fetchTodoRequest(0));
        setPage(0);
      }
      else dispatch(searchAction(e.target.value)) 
    },
    [dispatch],
  );

  const handleScroll = (e: any) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) setPage(page + 1);
  }

  useEffect(() => {
    dispatch(fetchTodoRequest(skip))
  }, [dispatch, page, skip]);

  return (
    <div className="explore">
      <span>Explore NFT</span>
      <input type="text" placeholder="Search by NFT name" onChange={handleChange}/>
      <div className="card-wrap" onScroll={handleScroll}>
        {data.map((item: any) => { 
          return (
            <a href={`nft/${item.Mint}`}>
              <Card title={item.Title}
                img={item?.Properties?.files.map((item: any) => item.uri)} id={item?.id}
                description={item.Description === '' ? 'Theres no description' : item?.Description} />
            </a>
          )
        })}
        </div>
    </div>
  )
}

export default Explore
