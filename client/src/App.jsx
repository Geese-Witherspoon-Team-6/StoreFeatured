import React, { useState, useEffect } from 'react';
import Seller from './Seller.jsx';
import ProductList from './ProductList.jsx';
import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import {Main, Background, Container, SellerStyle} from './Styles.jsx'

const App = () => {
  const [data, setData] = useState({});

  const fetchData = async function() {
    const result = await axios('/api/seller', {
      params: {
        sellerName: 'Mincing Mockingbird'
      }
    });
    setData(result.data[0])
  }

  useEffect(() => {
    fetchData();
  }, [/*watched variables to run hook again on updates: e.g. new search query*/])

  return (
    <Main>
      <Background>

      </Background>
      <Container>
          <SellerStyle>
            <div>
              <Seller seller={data}/>
            </div>
          </SellerStyle>
            <div>
              <ProductList products={data.products}/>
            </div>
      </Container>
    </Main>
  )
}

export default App;