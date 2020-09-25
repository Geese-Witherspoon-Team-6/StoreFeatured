import React from 'react';

class Seller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }


  render() {
    return (
      <div>
        <div>
          <p>Seller Logo</p>
        </div>
        <div className="sell-title">
          <p>Seller Name</p>
        </div>
        <div className="sell-stats">
          <div className="sell-sales">
            <p>Total Sales</p>
          </div>
          <div className="sell-year">
            <p>Year Joined</p>
          </div>
        </div>
        <div className="sell-location">
          <p>Location</p>
        </div>
      </div>
    )
  }
};

export default Seller;

