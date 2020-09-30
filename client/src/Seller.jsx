import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

moment().format();

const SellerStyle = styled.section`
  font-family: 'Antic Slab', serif;
  color: black;
`;

const Logo = styled.img`
  border-radius: 10px;
  max-width: 150px;
`;

const SellerName = styled.h2`
  color: black;
`;

const Seller = (props) => {

    return (
      <div>
        <SellerStyle>
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
        </SellerStyle>
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

