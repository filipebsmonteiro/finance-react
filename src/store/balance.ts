import AssetsRepository from '@/app/data/repositories/Finance/AssetsRepository';
import BalanceRepository from '@/app/data/repositories/Finance/BalanceRepository';
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { BalanceRecord, BalanceState } from './state';
import store from '@/store';

const initialState: BalanceState = {
  totalAssets: 0,
  records: [],
}

export const layout = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    loadAssets: () => {
      console.log('loadAssets :>> ');
      AssetsRepository.get()
        .then((asset) => {
          console.log('asset :>> ', asset);
          store.dispatch({ type: 'balance/setAssets', payload: asset })
        })
        .catch(error => console.log('error :>> ', error));
        console.log('aki :>> ');
    },
    loadBalance: () => {
      BalanceRepository.get<BalanceRecord[]>()
        .then((records) => {
          store.dispatch({ type: 'balance/resetRecord' })
          records?.map(record => store.dispatch({ type: 'balance/addRecord', payload: record }))
        });
    },
    setAssets: (state, { payload }) => {
      console.log('payload :>> ', payload);
      state.totalAssets = payload;
    },
    resetRecord: (state) => {
      state.records = [];
    },
    addRecord: (state, { payload }) => {
      state.records.push({
        id: payload.id || uuid(),
        ...payload
      });
    },
    removeRecord: (state, { payload }) => {
      state.records = state.records.filter(record => record.id === payload);
    },
  },
})

export const { actions, selectors } = layout
export const { setAssets, loadAssets, loadBalance, addRecord, removeRecord } = actions

export default layout.reducer