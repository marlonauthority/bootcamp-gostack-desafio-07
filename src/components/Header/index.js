import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, ButtonNavigator, ItemsCart } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cartReducer.length);
  return (
    <Wrapper>
      <Container>
        <Logo />
        <ButtonNavigator onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ItemsCart>{cartSize || 0}</ItemsCart>
        </ButtonNavigator>
      </Container>
    </Wrapper>
  );
}
