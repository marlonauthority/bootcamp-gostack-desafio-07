import produce from 'immer';
import { Alert } from 'react-native';

export default function cart(state = [], action) {
  // console.tron.log('teste');
  // console.tron.log(action);
  // console.tron.log(state);

  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.product.id
        );
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id
        );
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        Alert.alert('Não é permitido uma quantidade abaixo de zero');
        return state;
      }
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
