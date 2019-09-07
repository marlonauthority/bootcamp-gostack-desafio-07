import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, ButtonNavigator, ItemsCart } from './styles';

export default function Header(props) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <ButtonNavigator onPress={() => props.navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ItemsCart>2</ItemsCart>
        </ButtonNavigator>
      </Container>
    </Wrapper>
  );
}
