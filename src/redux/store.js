import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productReducer, selectedProductReducer } from './reducers/productReducer';

const reducer = combineReducers(
    {allProducts: productReducer,
    product: selectedProductReducer
    }
);

const store = configureStore(
  {reducer}, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;

