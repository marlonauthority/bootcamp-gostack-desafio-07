import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cartReducer.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function load() {
      const response = await api.get(`products`);
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setLoading(false);
      setProducts(data);
    }
    load();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderItems({ item }) {
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
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>Comprar</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  return (
    <Container>
      {loading === true && <Loading />}

      <ProductList
        data={products}
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        keyExtractor={item => String(item.id)}
        renderItem={renderItems}
      />
    </Container>
  );
}
