import React from 'react';
import Swiper from 'react-native-swiper';

import { Container, CustomText } from './styles';

export default function App() {
  return (
    <Swiper showsPagination={false} showsButtons>
      <Container color="#6324eb">
        <CustomText>View 1</CustomText>
      </Container>
      <Container color="#34ebc9">
        <CustomText>View 2</CustomText>
      </Container>
      <Container color="#eba534">
        <CustomText>View 3</CustomText>
      </Container>
    </Swiper>
  );
}
