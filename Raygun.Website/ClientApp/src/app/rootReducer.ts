import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/demo/counter/counterSlice';

const rootReducer = combineReducers({
  // Add your slice reducers here
  counter: counterReducer,
});

export default rootReducer;