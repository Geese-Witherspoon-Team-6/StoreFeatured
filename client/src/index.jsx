import React from 'react';
import reactDOM from'react-dom';
import Seller from './Seller.jsx'
import ProductList from './ProductList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:null,
    }
  }
  render() {
    return (
      <div id="mainContainer">
        <div id="seller">
          <Seller />
        </div>
        <div id="productBox">
          <ProductList />
        </div>
      </div>
    )
  }
}

export default App;

reactDOM.render(<App />, document.getElementById('app'));