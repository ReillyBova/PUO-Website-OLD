import React from "react"
import styled from 'styled-components'

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    width: 970px;
  }
  @media screen and (min-width: 768px) and (max-width: 991px)  {
    width: 720px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px)  {
    width: 540px;
  }
`

const RaisedPageSection = ({ children }) => {
  return (
    <StyledWrapper>
      { children }
    </StyledWrapper>
  );
}

export default RaisedPageSection;
