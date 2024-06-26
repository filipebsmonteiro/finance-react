import { createSlice } from '@reduxjs/toolkit'
import { IPCAState } from './state';
import IPCA7060 from '@/app/data/repositories/IBGE/IPCA/IPCA7060';
import store from '@/store';

const initialState: IPCAState = {
  columns: {},
  list: [],
};

export const ipca = createSlice({
  name: 'ipca',
  initialState,
  reducers: {
    // load: (state, { table }) => {
    //   if (table === 1705) {
    //     IPCA1705.fetch({})
    //       .then((response) => {
    //         const data = JSON.parse(response);
    //         state.columns = data.shift();
    //         state.list = data;
    //       })
    //   }

    //   if (table === 7060) {
    //     IPCA7060.fetch({})
    //       .then((response) => {
    //         const data = JSON.parse(response);
    //         state.columns = data.shift();
    //         state.list = data;
    //       })
    //   }
    // },
    loadLastMonths: (_state, { payload: { quantity = 12 } }) => {
      IPCA7060.fetch({ period: IPCA7060.getLastMonths(quantity) })
        .then(({ data }) => {
          store.dispatch({ type: 'ipca/setColumns', payload: data.shift() })
          store.dispatch({ type: 'ipca/setList', payload: data })
        })
    },
    setColumns: (state, { payload }): void => {
      const columns = [];
      for (const [key, value] of Object.entries(payload)) {
        if (
          key.slice(-1) === 'C' ||  // Hide Codes Columns
          key === 'D1N' || // Hide Territory Column
          key === 'NN' ||  // Hide Territory Column
          key === 'D4N'    // Hide Groups Column
        ) {
          continue;
        }

        columns.push({
          // name: key,
          field: key,
          label: value,
          // sortable: true,
          // align: "left",
        })
      }
      state.columns = columns
    },
    setList: (state, { payload }): void => {
      state.list = payload
    },
  },
})

export const { actions, selectors } = ipca
export const { loadLastMonths } = actions

export default ipca.reducer