import React, { useState, useEffect } from 'react';
import Seller from './Seller.jsx';
import ProductList from './ProductList.jsx';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import {Main, Background} from './Styles.jsx'

const App = () => {
  const [data, setData] = useState({});

  // const sellerIdentity = 'Mincing Mockingbird';
  // let sellerIdentity = decodeURI(location.pathname).split('/')[1];
  let sellerIdentity = 'Mincing Mockingbird';

  const fetchData = async function() {
    const result = await axios(`/api/seller/${sellerIdentity}`, {
      params: {
        sellID: sellerIdentity
      }
    });
    setData(result.data[0])
  }

  useEffect(() => {
    fetchData();
  }, [/*watched variables to run hook again on updates: e.g. new search query*/])

  return (
    <Main>
      <Background />
      <div>
        <Seller seller={data}/>
      </div>
      <div>
        <ProductList products={data.products}/>
      </div>
    </Main>
  )
}

export default App;