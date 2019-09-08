import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import * as CartActions from '../../store/modules/cart/actions';

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

  handleAddProduct = product => {
    const { addToCart } = this.props;
    addToCart(product);
    // this.props.dispatch(CartActions.addToCart(product));
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
        <AddButton onPress={() => this.handleAddProduct(item)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
