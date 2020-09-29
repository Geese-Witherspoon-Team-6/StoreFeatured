import React, { useState, useEffect } from 'react';
import reactDOM from'react-dom';
import Seller from './Seller.jsx';
import ProductList from './ProductList.jsx';
import axios from 'axios';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';

const SellerStyle = styled.section`
  padding: 4px;
  margin: 4px;
  border: 1px solid gray;
  width: 35%;
  color: palevioletred;
`;

const Container = styled.section`
  padding: 4px;
  margin: 4px;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios('/api/seller', {
        params: {
          sellerName: 'Mincing Mockingbird'
        }
      });
      setData(result.data[0])
    }
    fetchData();
  }, [/*watched variables to run hook again on updates: e.g. new search query*/])

  return (
    <div>
      <Container>
          <SellerStyle>
            <div>
              {
                data.products === undefined ? (
                  <>Loading...</>
                ) : (
                  <Seller sellerInfo={data}/>
                )
              }
            </div>
          </SellerStyle>
        <div>
          {
            data === null ? (
              <>Loading...</>
            ) : (
              <ProductList products={data.products}/>
            )
          }
        </div>
      </Container>
    </div>
  )
}

export default App;