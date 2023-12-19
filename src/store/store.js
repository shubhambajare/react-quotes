import * as redux from 'redux';
import { QuoteReducer } from "./reducers/QuoteReducer";

export const store = redux.createStore(QuoteReducer);