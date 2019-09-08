import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  IconBack,
  BackButton,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ cart, dispatch }) {
  return (
    <Container>
      {/* <BackButton onPress={() => props.navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <IconBack>Voltar</IconBack>
      </BackButton> */}
      {cart.length ? (
        <>
          <Products>
            {cart.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete
                    onPress={() =>
                      dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
                    }
                  >
                    <Icon name="delete-forever" size={24} color="#7159c1" />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => {}}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton onPress={() => {}}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </ProductControlButton>
                  <ProductSubtotal>R$129,99</ProductSubtotal>
                </ProductControls>
              </Product>
            ))}
          </Products>

          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalAmount>R$499,00</TotalAmount>
            <Order>
              <OrderText>Finalizar Pedido</OrderText>
            </Order>
          </TotalContainer>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#ccc" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

/* Cart.navigationOptions = {
  header: null,
}; */
const mapStateToProps = state => ({
  cart: state.cartReducer,
});

export default connect(mapStateToProps)(Cart);
