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
  records: [
    {
      id: `1`,
      name: `INCOME`,
      type: 'Income',
      value: 500
    },
    {
      id: `2`,
      name: `Outcome`,
      type: 'Outcome',
      value: 300
    }
  ],
}

export const layout = createSlice({
  name: 'balance',
  initialState,
  reducers: {
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
export const { setAssets, addRecord, removeRecord } = actions

export default layout.reducer