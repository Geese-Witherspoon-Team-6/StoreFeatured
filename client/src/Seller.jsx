import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

moment().format();



class Seller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seller: null,
    }
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.props.sellerInfo.imageUrl}/>
        </div>
        <div className="sell-title">
          <h3>{this.props.sellerInfo.name}</h3>
        </div>
        <div className="sell-stats">
          <div className="sell-sales">
            <p>{`Total Sales: $${this.props.sellerInfo.totalSales}`}</p>
          </div>
          <div className="sell-year">
            <p>{`Joined: ${moment(this.props.sellerInfo.createdAt).fromNow()}`}</p>
          </div>
        </div>
        <div className="sell-location">
          <p>{`Location: ${this.props.sellerInfo.location}`}</p>
        </div>
      </div>
    )
  }
};

export default Seller;

