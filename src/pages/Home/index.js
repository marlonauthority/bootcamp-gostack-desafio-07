import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Loading,
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
import api from '../../services/api';
import { formatPrice } from '../../util/format';

class Home extends Component {
  state = {
    loading: false,
    products: [],
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    this.load();
  }

  load = async () => {
    const response = await api.get(`products`);
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data, loading: false });
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
          <ProductPrice>{item.priceFormatted}</ProductPrice>
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
    const { products, loading } = this.state;
    return (
      <Container>
        {loading === true && <Loading />}

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
