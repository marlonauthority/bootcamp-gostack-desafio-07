import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, ButtonNavigator, ItemsCart } from './styles';

function Header({ cartSize, navigation }) {
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
export default connect(state => ({
  cartSize: state.cartReducer.length,
}))(Header);
