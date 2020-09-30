import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

moment().format();

const Logo = styled.img`
  border-radius: 10px;
  max-width: 150px;
`;

const SellerName = styled.h2`
  color: palevioletred;
`;

const Seller = (props) => {

    return (
      <div>
        <div>
          <Logo src={props.seller.imageUrl} />
        </div>
        <div>
          <SellerName>{props.seller.name}</SellerName>
        </div>
        <div>
          <div>
            <p>{`Total Sales: $${props.seller.totalSales}`}</p>
          </div>
          <div>
            <p>{`Joined: ${moment(props.seller.createdAt).fromNow()}`}</p>
          </div>
        </div>
        <div>
          <p>{`Location: ${props.seller.location}`}</p>
        </div>
      </div>
    )
};

Seller.propTypes = {
  seller: PropTypes.object,
};
Seller.defaultProps = {
  seller: null,
};

export default Seller;

