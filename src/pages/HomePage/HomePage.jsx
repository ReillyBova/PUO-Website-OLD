import React, { Fragment } from 'react';
import { PreviewVideo, QuoteBox, VideoButton } from './home-page-components'
import { Parallax, RaisedPage, RaisedPageSection } from 'components'

export class HomePage extends React.Component {

  render() {
    return (
      <Fragment>
        <Parallax>
          <PreviewVideo />
          <QuoteBox />
        </Parallax>
        <RaisedPage>
          <RaisedPageSection>
            HELOOkwajhdwkhdkah kjhjahdkahdkjwdhawkdjhawkdjawhdkjwhdawkj
          </RaisedPageSection>
        </RaisedPage>
      </Fragment>
    )
  }
}
