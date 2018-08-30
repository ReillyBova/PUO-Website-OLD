import React from 'react'
import { BackgroundButton } from 'components'
import styled from 'styled-components'
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';

const Wrapper = styled.div`
display: flex;
justify-content: center;
flex: 1;
align-items: center;
margin-top: -45px;
`

export const VideoButton = () => {
  return (
    <Wrapper>
      <BackgroundButton>
        Explore Our 2018 – 2019 Season
        <ArrowRightAlt style={{marginLeft: 8}} />
      </BackgroundButton>
    </Wrapper>
  )
}
