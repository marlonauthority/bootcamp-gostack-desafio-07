import React, { Component } from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Content,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

class Home extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 'R$179.9',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 'R$179.9',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 'R$179.9',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
    ],
  };

  renderItems = ({ item }) => {
    return (
      <Product>
        <Content>
          <ProductImage
            source={{
              uri: item.image,
            }}
          />
          <ProductPrice>{item.price}</ProductPrice>
        </Content>
        <ProductTitle>{item.title}</ProductTitle>
        <AddButton onPress={() => {}}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductAmountText>2</ProductAmountText>
          </ProductAmount>
          <AddButtonText>Comprar</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductList
          data={products}
          showsHorizontalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItems}
        />
      </Container>
    );
  }
}
export default Home;
