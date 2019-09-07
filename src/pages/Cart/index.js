import React from 'react';
import { Text } from 'react-native';
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

export default function Cart(props) {
  return (
    <Container>
      {/* <BackButton onPress={() => props.navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <IconBack>Voltar</IconBack>
      </BackButton> */}
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tenis legal</ProductTitle>
              <ProductPrice>128,99</ProductPrice>
            </ProductDetails>
            <ProductDelete onPress={() => {}}>
              <Icon name="delete-forever" size={24} color="#7159c1" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton onPress={() => {}}>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductAmount value="3" />
            <ProductControlButton onPress={() => {}}>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductSubtotal>R$129,99</ProductSubtotal>
          </ProductControls>
        </Product>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tenis legal</ProductTitle>
              <ProductPrice>128,99</ProductPrice>
            </ProductDetails>
            <ProductDelete onPress={() => {}}>
              <Icon name="delete-forever" size={24} color="#7159c1" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton onPress={() => {}}>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductAmount value="3" />
            <ProductControlButton onPress={() => {}}>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductSubtotal>R$129,99</ProductSubtotal>
          </ProductControls>
        </Product>

        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalAmount>R$499,00</TotalAmount>
          <Order>
            <OrderText>Finalizar Pedido</OrderText>
          </Order>
        </TotalContainer>
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#ccc" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      </Products>
    </Container>
  );
}

/* Cart.navigationOptions = {
  header: null,
}; */
