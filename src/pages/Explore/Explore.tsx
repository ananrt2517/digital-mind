import { useDispatch, useSelector } from 'react-redux';
import { fetchNftsRequest, searchAction, setScrollPosition } from '../../store/actions/actions';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Card from '../../components/Card/Card';
import './explore.scss';
import { NFT_LIMIT } from '../../constants';
import { Link } from 'react-router-dom';
import { IState } from '../../store/reducers/reducer';

export interface IData { 
  Mint: string,
  Title: string,
  Properties: IProperties,
  id: string,
  Description: string,
}

export interface IProperties { 
  files: IFiles[],
}

export interface IFiles { 
  uri: string,
}

const Explore = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: IState) => state);
  const scrollPosition = useSelector((state: IState) => state.scrollPosition)

  const [page, setPage] = useState(0);

  const cardRef = useRef<HTMLDivElement>(null)

  const skip = useMemo(() => NFT_LIMIT * page, [page]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => { 
      if (e.target.value === '') { 
        dispatch(fetchNftsRequest(0));
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
    dispatch(fetchNftsRequest(skip))
  }, [dispatch, page, skip]);

  useEffect(() => {
    const cardReference = cardRef?.current;
      if(cardReference) cardReference.scrollTop = scrollPosition
  }, [scrollPosition]);
  
  return (
    <div className="explore">
      <span>Explore NFT</span>
      <input type="text" placeholder="Search by NFT name" onChange={handleChange}/>
      <div className="card-wrap" ref={cardRef} onScroll={handleScroll}>
        {data.map((item:IData) => { 
          return (
            <Link to={`/nft/${item.Mint}`} onClick={() => dispatch(setScrollPosition(cardRef?.current?.scrollTop))}>
              <Card title={item.Title}
                img={item?.Properties?.files[0].uri}
                id={item?.id}
                description={item.Description === '' ? 'Theres no description' : item?.Description} />
            </Link>
          )
        })}
        </div>
    </div>
  )
}

export default Explore
