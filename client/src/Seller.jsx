import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  SellerStyle, Logo, SellerName, StatsHolder, Sales, Year, SalesText, YearText, LocationText, Location, Company, MoreT, MoreB
} from './Styles.jsx'

moment().format();
//{`${moment(props.seller.createdAt).fromNow()}`}
const Seller = (props) => {

    return (
      <div>
        <SellerStyle>
          <Company>

            <Logo src={props.seller.imageUrl} />
            <MoreT>More from</MoreT>
            <SellerName>{props.seller.name}</SellerName>
            <MoreB>See all 479 items</MoreB>
          </Company>

          <StatsHolder>

              <SalesText>Sales</SalesText>
              <Sales>{`${props.seller.totalSales}`}</Sales>
              <YearText>On Qtsy Since</YearText>
              <Year>2004</Year>
              <LocationText>Based in</LocationText>
              <Location>{`${props.seller.location}`}</Location>

          </StatsHolder>

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

