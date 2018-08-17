import React, { Fragment } from 'react';
import { PreviewVideo, QuoteBox } from './home-page-components'
import { Parallax, RaisedPage, RaisedPageSection } from 'components'
import styled from 'styled-components'

export class HomePage extends React.Component {

  render() {
    return (
      <Fragment>
        <Parallax>
          <PreviewVideo />
          <QuoteBox />
        </Parallax>
        <RaisedPage>
          <RaisedPage.Section>
            HELOOkwajhdwkhdkah kjhjahdkahdkjwdhawkdjhawkdjawhdkjwhdawkj
          </RaisedPage.Section>
        </RaisedPage>
      </Fragment>
    )
  }
}
