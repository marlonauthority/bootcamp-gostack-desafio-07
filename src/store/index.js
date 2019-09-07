import { createStore } from 'redux';

import cartReducer from './modules/cart/reducer';

const store = createStore(cartReducer);

export default store;
