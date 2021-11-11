import axios from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { NFT_LIMIT } from '../../constants';
import { IData } from '../../pages/Explore/Explore';
import { INFT } from '../../pages/NFT/Nft';

import { fetchNftsSuccess, singleNftSuccess } from '../actions/actions';
import { FETCH_NFTS_REQUEST, SEARCH_ACTION, SINGLE_NFT_REQUEST } from '../actions/actionTypes';
import { IState } from '../reducers/reducer';

const getNfts = async (skip: number) => {
  const { data } = await axios.get<IData[]>(`https://test-api.solsea.io/nft-listed/?$limit=${NFT_LIMIT}&$skip=${skip}`);
  return data;
}
  
const searchApi = async (term: string) => {
  const { data } = await axios.get<IData[]>(`https://test-api.solsea.io/nft-listed/?Title=${term}`);
  return data;
}

const singleNftApi = async (mint: string) => {
  const { data } = await axios.get<INFT[]>(`https://test-api.solsea.io/nft-listed/${mint}`);
  return data;
}

const getData = (state: IState) => state.data;

function* fetchNftsSaga(action: any):any {
  try {
    const response = yield call(getNfts, action.payload);
    const data = yield select(getData);
    if (action.payload === 0) {
      yield put(fetchNftsSuccess(response));
    } else {
      yield put(fetchNftsSuccess({ ...response, data: [...data, ...response.data] }));
    }
  } catch (e) {
    console.log(e);
  }
}

function* searchSagas(action: any):any {
  try {
    const response = yield call(searchApi, action.term);  
    yield put(fetchNftsSuccess(response));
  } catch (e) {
    console.log(e)
  }
}

function* singleNftSagas(action: any):any {
  try {
    const response = yield call(singleNftApi, action.mint);  
    yield put(singleNftSuccess(response));
  } catch (e) {
    console.log(e)
  }
}

function* todoSaga() {
  yield all([takeLatest(FETCH_NFTS_REQUEST, fetchNftsSaga)]);
  yield all([takeLatest(SEARCH_ACTION, searchSagas)]);
  yield all([takeLatest(SINGLE_NFT_REQUEST, singleNftSagas)]);
}

export default todoSaga;