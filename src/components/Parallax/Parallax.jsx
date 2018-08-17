import React from "react"
import styled from 'styled-components'

const ParallaxContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
`

class Parallax extends React.Component {
  constructor(props) {
    super(props);

    const windowScrollTop = window.pageYOffset / 3;
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
    window.addEventListener("scroll", this.resetTransform);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform);
  }
  resetTransform() {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  }
  render() {
    const { children } = this.props;
    return (
      <ParallaxContainer style={{...this.state  }}>
        {children}
      </ParallaxContainer>
    );
  }
}

export default Parallax;
