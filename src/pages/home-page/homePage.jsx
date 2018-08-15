import React from 'react';
import styled from 'styled-components'
import { previewVideo } from 'assets/videos'

const VideoWrapper = styled.div`
padding-top: 50px;
width: 100%;
max-height: calc(100vh - 70px);
overflow: hidden;
`

export class HomePage extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({loaded: true})
  }

  render() {
    return (
      <VideoWrapper>
        { this.state.loaded &&
        <video style={{width: '100%', height: '100%'}} playsInline muted loop autoPlay preload="none">
          <source type="video/mp4" src={previewVideo} />
        </video>}
      </VideoWrapper>
    )
  }
}
