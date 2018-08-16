import React from 'react';
import styled from 'styled-components'
import { largePreviewMP4 } from 'assets/videos'
import $ from 'jquery'

const VideoWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
  height: calc(100vh - 110px);
  overflow: hidden;
`

const Video = styled.video`
  &.wide {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  &:not(.wide) {
    margin-left: 50%;
    transform: translateX(-50%);
    height: 100%;
  }
`

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.resize_video = this.resize_video.bind(this);

    this.state = {
      loaded: false
    }
  }

  isScreenTall() {
    const wrapper = $('#previewWrapper')
    const ratio = wrapper.width() / wrapper.height()

    return (16.0 / 9.0 - ratio > 0)
  }

  resize_video() {
    if (this.isScreenTall()) $('#previewVideo').removeClass('wide')
    else $('#previewVideo').addClass('wide')
  }

  componentDidMount() {
    this.setState({loaded: true})

    $(window).resize(this.resize_video);
    this.resize_video()
  }

  render() {
    return (
      <VideoWrapper id="previewWrapper">
        { this.state.loaded &&
        <Video
          playsInline
          muted
          loop
          autoPlay
          preload="auto"
          className={`${this.isScreenTall() ? null : 'wide'}`}
          id="previewVideo"
          style={{}}
        >
          <source type="video/mp4" src={largePreviewMP4} />
        </Video>}
      </VideoWrapper>
    )
  }
}
