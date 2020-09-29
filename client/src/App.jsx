import React from 'react';
import reactDOM from'react-dom';
import Seller from './Seller.jsx';
import ProductList from './ProductList.jsx';
import axios from 'axios';
import styled from 'styled-components';

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

const testValue = null;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seller:null,
      products: null,
    }
  }


  componentDidMount() {
      axios.get('/api/seller', {
        params: {
          sellerName: 'Mincing Mockingbird'
        }
      })
        .then((response) => {
          let sellerInfo = response.data[0];
          let productList = response.data[0].products;
          console.log(productList)
          this.setState({
            seller: sellerInfo,
            products: productList
          })
        })
        .catch((error) => {
          console.log(error)
        })
  }

  render() {
    return (
      <div>
        <Container>
            <SellerStyle>
              <div>
                {
                  this.state.seller === null ? (
                    <>Loading...</>
                  ) : (
                    <Seller sellerInfo={this.state.seller}/>
                  )
                }
              </div>
            </SellerStyle>
          <div>
          {
            this.state.products === null ? (
              <>Loading...</>
            ) : (
              <ProductList products={this.state.products}/>
            )
          }
          </div>
        </Container>
      </div>
    )
  }
}

export default App;