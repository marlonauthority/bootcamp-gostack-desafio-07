import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
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
import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, removeFromCart, updateAmount, total }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

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
                  <ProductDelete onPress={() => removeFromCart(product.id)}>
                    <Icon name="delete-forever" size={24} color="#7159c1" />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </ProductControlButton>
                  <ProductSubtotal>{product.subTotal}</ProductSubtotal>
                </ProductControls>
              </Product>
            ))}
          </Products>

          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalAmount>{total}</TotalAmount>
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
  cart: state.cartReducer.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cartReducer.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
