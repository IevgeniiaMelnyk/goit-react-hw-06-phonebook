import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';
const initialStore = '';

const filterReducer = createReducer(initialStore, {
  [setFilter]: (_, { payload }) => payload,
});

export default filterReducer;
