import React from 'react';
import styled from 'styled-components'
import { largePreviewMP4, mediumPreviewMP4, smallPreviewMP4, tinyPreviewMP4 } from 'assets/videos'
import $ from 'jquery'

const VideoWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
  height: calc(100vh - 110px);
  overflow: hidden;
  background-color: black;

  @media screen and (max-height: 500px) and (min-width: 600px) {
    padding-top: 0;
    height: calc(100vh - 70px);
  }
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

export class PreviewVideo extends React.Component {
  constructor(props) {
    super(props);
    this.resize_video = this.resize_video.bind(this);

    this.state = {
      loaded: false,
      size: ''
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
    /* determine video size using initial screen width */
    const width = $(window).width()
    let size = 'large'
    if (width < 504) size = 'tiny'
    else if (width < 815) size = 'small'
    else if (width < 1050) size = 'medium'

    this.setState({loaded: true, size: size})

    $(window).resize(this.resize_video);
    this.resize_video()
  }

  render() {
    const { size, loaded } = this.state
    return (
      <VideoWrapper id="previewWrapper">
        { loaded &&
          <Video
            playsInline
            muted
            loop
            autoPlay
            preload="auto"
            className={`${(!this.isScreenTall()) && 'wide'}`}
            id="previewVideo"
            style={{}}
          >
            { size === 'tiny' &&
              <source src={tinyPreviewMP4} type="video/mp4"/>
            }
            { size === 'small' &&
              <source src={smallPreviewMP4} type="video/mp4"/>
            }
            { size === 'medium' &&
              <source src={mediumPreviewMP4} type="video/mp4"/>
            }
            { size === 'large' &&
              <source src={largePreviewMP4} type="video/mp4"/>
            }
          </Video>
        }
      </VideoWrapper>
    )
  }
}
