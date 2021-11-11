import axios from "axios";
import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { NFT_LIMIT } from "../../constants";

import { fetchTodoSuccess, singleNftSuccess } from "../actions/actions";
import { FETCH_TODO_REQUEST, SEARCH_ACTION, SINGLE_NFT_REQUEST } from "../actions/actionTypes";

const getTodos = async (skip: number) => {
  const { data } = await axios.get<any[]>(`https://test-api.solsea.io/nft-listed/?$limit=${NFT_LIMIT}&$skip=${skip}`);
  return data;
}
  
const searchApi = async (term: string) => {
  const { data } = await axios.get<any[]>(`https://test-api.solsea.io/nft-listed/?Title=${term}`);
  return data;
}

const singleNftApi = async (mint: string) => {
  const { data } = await axios.get<any[]>(`https://test-api.solsea.io/nft-listed/${mint}`);
  return data;
}

const getData = (state: any) => state.data;

function* fetchTodoSaga(action: any):any {
  try {
    const response = yield call(getTodos, action.payload);
    const data = yield select(getData);
    if (action.payload === 0) {
      yield put(fetchTodoSuccess(response));
    } else {
      yield put(fetchTodoSuccess({ ...response, data: [...data, ...response.data] }));
    }
  } catch (e) {
    console.log(e);
  }
}

function* searchSagas(action: any):any {
  try {
    const response = yield call(searchApi, action.term);  
    yield put(fetchTodoSuccess(response));
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
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
  yield all([takeLatest(SEARCH_ACTION, searchSagas)]);
  yield all([takeLatest(SINGLE_NFT_REQUEST, singleNftSagas)]);
}

export default todoSaga;