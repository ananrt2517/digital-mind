import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { singleNftRequest } from '../../store/actions/actions';
import AttributesCard from '../../components/AttributesCard/AttributesCard';
import './nft.scss';
import { IFiles } from '../Explore/Explore';
import { IState } from '../../store/reducers/reducer';

export interface INFT { 
  Properties: IProperties,
  Title: string,
  Description: string,
}

export interface IProperties { 
  attributes: IAttributes[],
  files: IFiles[],
}

export interface IAttributes { 
  trait_type: string,
  value: string,
}

const Nft = () => {

  const dispatch = useDispatch();
  const { mint } = useParams();
  const state = useSelector((state: IState) => state.nft)

  useEffect(() => {
    if (mint) dispatch(singleNftRequest(mint))
  }, [dispatch, mint]);

  return (
    <div className="nft">
      <div className="img-attributes">
        <div className="img-wrap">
          <img src={state?.Properties?.files[0] && state?.Properties?.files[0].uri} alt={state.Title}/>
        </div>
        <div className="attributes-wrap">
          
          {state?.Properties?.attributes?.length !== 0 ? state?.Properties?.attributes?.map((item: IAttributes) => { 
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
