import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
`;
export const ProductList = styled.FlatList`
  margin: 0 auto;
`;

export const Product = styled.View`
  background: #fff;
  width: 300px;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  margin: 14px 0;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;
export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
  margin-left: 42px;
  margin-right: -50px;
`;
export const ProductPrice = styled.Text`
  font-size: 20px;
  top: -3px;
  left: -6px;
  justify-content: flex-end;
  align-items: flex-end;
  color: #484848;
`;
export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
`;
export const AddButtonText = styled.Text`
  text-transform: uppercase;
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};

  flex-direction: row;
  align-items: center;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
`;
