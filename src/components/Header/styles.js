import styled from 'styled-components/native';
import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #141419;
  flex-direction: row;
`;
export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-around;
  flex-direction: row;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const ButtonNavigator = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  height: 24px;
  width: 24px;
`;

export const ItemsCart = styled.Text`
  text-align: center;
  background: #7159c1;
  font-size: 12px;
  border-radius: 9px;
  color: #fff;

  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  padding: 2px;
  overflow: hidden;
`;
