import styled from 'styled-components';
import {ArrowRight} from '@styled-icons/fa-solid'

  /* App.jsx */
export const Main = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(53, 53, 99);
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin: 0px;
  background-color: #f8ebe6;
`;

export const Background = styled.section`
  grid-area: 1 / 1 / span 1 / span 2;
  max-width: 100%;
  background: url(https://qtlyimages.s3-us-west-2.amazonaws.com/qtsy_background1900.png) no-repeat center;
`;


/* Seller.jsx */
export const SellerStyle = styled.div`
  grid-area: 2 / 1 / span 1 / span 1;
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 4px;
`;

export const Company = styled.div`
  grid-area: 1 / 1 / span 1 / span 1;
`;

export const MoreItems = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr;
`;

export const MoreT = styled.div`
  font-size: 13px;
  color: #4a4a4a;
  font-family: 'Roboto', sans-serif;
  margin: 10px 4px 0px 4px;
`;

export const MoreB = styled.div`
  font-size: 13px;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin: 0px 4px;
  grid-area: 1 / 1 / span 1 / span 1;
  align-self: center;
`;

export const ArrowMore = styled(ArrowRight)`
  color: black;
  grid-area: 1 / 2 / span 1 / span 1;
  align-self: center;
  justify-self: start;
  &:hover {
    transform: translateX(4px);
  }
`;

export const Logo = styled.img`
  border-radius: 10px;
  max-width: 136px;
`;

export const SellerName = styled.p`
  color: black;
  font-size: 32px;
  font-family: 'Bitter', serif;
  letter-spacing: 0.35px;
  font-weight: 300;
  margin: 2px 4px;
`;

export const StatsHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 3fr 1fr 3fr;
  grid-area: 2 / 1 / span 1 / span 1;
  margin: 25px 4px 4px 4px;
  height: 150px;
`;

export const SalesText = styled.div`
font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #595959;
  grid-area: 1 / 1 / span 1 / span 1;
  align-self: end;
`;

export const Sales = styled.div`
  font-family: 'Bitter', serif;
  color: #000000;
  font-size: 27px;
  letter-spacing: 0.35px;
  font-weight: 300;
  grid-area: 2 / 1 / span 1 / span 1;
  align-self: start;
`;

export const YearText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: #595959;
  grid-area: 1 / 2 / span 1 / span 1;
  justify-self: start;
  align-self: end;
`;

export const Year = styled.div`
  font-family: 'Bitter', serif;
  font-size: 27px;
  letter-spacing: 0.35px;
  color: #000000;
  font-weight: 300;
  grid-area: 2 / 2 / span 1 / span 1;
  justify-self: start;
  align-self: start;
`;

export const LocationText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: #595959;
  grid-area: 3 / 1 / span 1 / span 2;
  align-self: end;
`;

export const Location = styled.div`
  font-family: 'Bitter', serif;
  font-size: 27px;
  font-weight: 300;
  color: #000000;
  letter-spacing: 0.35px;
  grid-area: 4 / 1 / span 1 / span 2;
  align-self: start;
`;

/* ProductList.jsx */

export const ProductMax = styled.div`
  grid-area: 2 / 2 / span 1 / span 1;
  padding: 4px;
  margin: 4px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-template-rows: repeat(6, 250px);
  grid-auto-flow: dense;
`;

export const ProductBox = styled.div`
  grid-area: auto;
  margin: 3px;
  padding: 6px;
  max-height: 250px;
  max-width: 250px;
  border-radius: 8px;
  transition: 0.25s all ease-in;
  &:hover {
    background-color: white;
    box-shadow: -1px 1px 12px 1px rgba(0, 0, 0, 0.1);
  };
`;


/* Products.jsx */
export const ProdImageHolder = styled.div`
  max-width: 233px;
  max-height: 186px;
  border-radius: 7px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

export const ProductImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  grid-area: 1 / 1 / span 1  spane 1;
  justify-self: center;
  align-self: center;
`;

export const Title = styled.p`
  margin-top: 8%;
  margin-bottom: 1px;
  padding: 1px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: black;
`;

export const Price = styled.p`
  margin-top: 1px;
  margin-bottom: 8px;
  padding-top: 1px;
  padding-bottom: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: black;
`;