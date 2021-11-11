import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { singleNftRequest } from '../../store/actions/actions';
import AttributesCard from '../../components/AttributesCard/AttributesCard';
import './nft.scss';

interface Props {
  
}

const Nft = (props: Props) => {

  const dispatch = useDispatch();
  const { mint } = useParams();
  const state = useSelector((state: any) => state.nft)

  useEffect(() => {
    dispatch(singleNftRequest(mint))
  }, [dispatch, mint]);

  return (
    <div className="nft">
      <div className="img-attributes">
        <div className="img-wrap">
          <img src={state?.Properties?.files?.map((item: any) => item.uri)} alt={state.Title}/>
        </div>
        <div className="attributes-wrap">
          
          {state?.Properties?.attributes?.length !== 0 ? state?.Properties?.attributes?.map((item: any) => { 
              return <AttributesCard title={item.trait_type} attribute={item.value} />
          }):<span>There's no attributes in this post</span>}
        </div>
      </div>
      <div className="info-wrap">
        <div className="title-wrap">
          <div className="title">{state.Title}</div>
        </div>
        <div className="desc">{state.Description ? state.Description : 'There is no description'}</div>
      </div>
    </div>
  )
}

export default Nft
