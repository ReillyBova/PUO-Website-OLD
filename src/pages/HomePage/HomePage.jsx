import React, { Fragment } from 'react';
import { PreviewVideo, QuoteBox } from './home-page-components'
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
            <p>
              Lorem ipsum dolor amet
            </p>
        </RaisedPage>
      </Fragment>
    )
  }
}
