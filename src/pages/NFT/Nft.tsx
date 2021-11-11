import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { singleNftRequest } from '../../store/actions/actions';

interface Props {
  
}

const Nft = (props: Props) => {

  const dispatch = useDispatch();
  const { mint } = useParams();
  const state = useSelector((state: any) => state.nft)

  console.log('mint', mint)
  console.log('state', state)

  useEffect(() => {
    dispatch(singleNftRequest(mint))
  }, [dispatch, mint]);

  return (
    <div className="nft">
      NFTS
    </div>
  )
}

export default Nft
