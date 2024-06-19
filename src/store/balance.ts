import AssetsRepository from '@/app/data/repositories/Finance/AssetsRepository';
import BalanceRepository from '@/app/data/repositories/Finance/BalanceRepository';
import { createSlice } from '@reduxjs/toolkit'
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
      AssetsRepository.get()
        .then((asset) => {
          store.dispatch({ type: 'balance/setAssets', payload: asset })
        })
        .catch(error => console.log('error :>> ', error));
    },
    loadBalance: () => {
      BalanceRepository.get<BalanceRecord[]>()
        .then((records) => {
          store.dispatch({ type: 'balance/resetRecord' })
          records?.map(record => store.dispatch({ type: 'balance/addRecord', payload: record }))
        });
    },
    setAssets: (state, { payload }) => {
      state.totalAssets = payload;
    },
    resetRecord: (state) => {
      state.records = [];
    },
    createRecord: (_state, { payload }) => {
      const { id, ...record } = payload;
      BalanceRepository.post(record)
        .then(() => store.dispatch({ type: 'balance/loadBalance' }));
    },
    addRecord: (state, { payload }) => {
      state.records.push({
        ...payload,
        amount: parseFloat(payload.amount),
      });
    },
    updateRecord: (_state, { payload }) => {
      const { id, ...record } = payload;
      BalanceRepository.put(id, record)
        .then(() => store.dispatch({ type: 'balance/loadBalance' }));
    },
    deleteRecord: (_state, { payload }) => {
      BalanceRepository.delete(payload.id)
        .then(() => store.dispatch({ type: 'balance/loadBalance' }));
    },
  },
})

export const { actions, selectors } = layout
export const { setAssets, loadAssets, loadBalance, addRecord, createRecord, updateRecord, deleteRecord } = actions

export default layout.reducer