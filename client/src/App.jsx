import React, { useState, useEffect } from 'react';
import Seller from './Seller.jsx';
import ProductList from './ProductList.jsx';
import Products from './Products.jsx';
import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';

const Main = styled.section`
  padding: 10px;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(53, 53, 99);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
`;

const Background = styled.section`
  height: 50px;
  width: 99.2%;
  background: url(https://qtsy-cropped.s3-us-west-2.amazonaws.com/qtsy_background.png) no-repeat center;
`;

const Container = styled.section`
  padding: 4px;
  margin: 4px;
  margin-top: 0px !important;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 500;
  background-color: #f8ebe6;
`;

const SellerStyle = styled.section`
  padding: 4px;
  margin: 4px;
  width: 35%;
  max-width: 300px;
  color: palevioletred;
`;



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