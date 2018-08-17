import React from "react"
import styled from 'styled-components'
import RaisedPageSection from './RaisedPageSection'

const Wrapper = styled.div`
  background: #FFFFFF;
  position: relative;
  z-index: 3;
  margin: -60px 30px 0;
  min-height: 200vh;
  overflow-wrap: break-word;

  @media screen and (max-width: 768px) {
    margin: -60px 15px 0;
  }
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`

const RaisedPage = ({ children }) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  );
}

RaisedPage.Section = RaisedPageSection

export default RaisedPage;
