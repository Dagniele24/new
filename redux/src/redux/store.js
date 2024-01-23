import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer); //crea uno store utilizzando come argomento il rootReducer.

export default store;