import React from 'react';
import styled from 'styled-components'
import { previewVideo } from 'assets/videos'

const VideoWrapper = styled.div`
width: 100%;
max-height: calc(100vh - 70px);
overflow: hidden;
`

const Video = styled.video`
width: 100%;
height: 100%;
`

export const HomePage =  ({}) => {
  return (
    <VideoWrapper>
      <Video loop="true" autoplay="true" preload="true">
        <source type="video/mp4" src={previewVideo} />
      </Video>
    </VideoWrapper>
  )
}
