import AssetsRepository from '@/app/data/repositories/Finance/AssetsRepository';
import BalanceRepository from '@/app/data/repositories/Finance/BalanceRepository';
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

export type BalanceRecord = {
  id: string;
  name: string;
  type: 'Income' | 'Outcome';
  value: number;
};

export type BalanceState = {
  totalAssets: number;
  records: BalanceRecord[];
}

const initialState: BalanceState = {
  totalAssets: 0,
  records: [],
}

export const layout = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    loadAssets: (state) => {
      AssetsRepository.get()
        .then((asset) => {
          state.totalAssets = asset as number
        });
    },
    loadBalance: (state) => {
      BalanceRepository.get()
        .then((records) => {
          state.records = records as BalanceRecord[]
        }); 
    },
    setAssets: (state, { payload }) => {
      state.totalAssets = payload;
    },
    addRecord: (state, { payload }) => {
      state.records.push({
        id: uuid(),
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