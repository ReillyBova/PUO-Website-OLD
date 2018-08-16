import React from 'react';
import styled from 'styled-components'
import { largePreviewMP4, largePreviewWebM, mediumPreviewMP4, mediumPreviewWebM,
          smallPreviewMP4, tinyPreviewMP4 } from 'assets/videos'
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
    console.log(size)

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
              <source src={mediumPreviewWebM} type="video/webm"/>
            }
            { size === 'medium' &&
              <source src={mediumPreviewMP4} type="video/mp4"/>
            }
            { size === 'large' &&
              <source src={largePreviewWebM} type="video/webm"/>
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
