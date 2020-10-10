import React, { useState, useEffect } from 'react';
import Seller from './Seller.jsx';
import ProductList from './ProductList.jsx';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import {Main, Background} from './Styles.jsx'

const App = () => {
  const [data, setData] = useState({});

  let listingId = Number(location.pathname.split('/')[2]);

  const fetchData = async function() {
    try {
      const result = await axios(`http://${location.hostname}:3004/api/listing/${listingId}`, {
        params: {
          itemId: listingId
        }
      });
      setData(result.data[0])
    }
    catch (rejected) {
      console.error(rejected)
    }
  }

  useEffect(() => {
    fetchData();
  }, [/*watched variables to run hook again on updates: e.g. new search query*/])

  return (
    <Main>
      <Background />
      <div>
        {
          data === undefined ? (
            <>Loading...</>
          ) : (
            <Seller seller={data}/>
          )
        }
      </div>
      <div>
        {
          data === undefined ? (
            <>Loading...</>
          ) : (
            <ProductList products={data.products}/>
          )
        }
      </div>
    </Main>
  )
}

export default App;