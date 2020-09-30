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
`;

const Container = styled.section`
  padding: 4px;
  margin: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 450;
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