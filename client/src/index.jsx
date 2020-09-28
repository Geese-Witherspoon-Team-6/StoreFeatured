import React from 'react';
import reactDOM from'react-dom';
import Seller from './Seller.jsx';
import ProductList from './ProductList.jsx';
import axios from 'axios';

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
      <div id="mainContainer">
        <div id="seller">
        {
          this.state.seller === null ? (
            <>Loading...</>
          ) : (
            <Seller sellerInfo={this.state.seller}/>
          )
        }
        </div>
        <div>
        {
          this.state.products === null ? (
            <>Loading...</>
          ) : (
            <ProductList products={this.state.products}/>
          )
        }
        </div>
      </div>
    )
  }
}

export default App;

reactDOM.render(<App />, document.getElementById('app'));