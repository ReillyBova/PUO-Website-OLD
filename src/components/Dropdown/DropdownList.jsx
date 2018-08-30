import React, { Component } from 'react'
import $ from 'jquery'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import styled from 'styled-components'

const Positioner = styled.div`
  position: absolute;
  z-index: 20;
  margin-left: 12px;
  ${({ extendRight }) => 'right: ' + (extendRight ? extendRight + 'px' : 'unset')};
`

const MenuWrapper = styled(Paper)`
  margin-top: 5px;
  font-size: 18px;
  border-top: 2px solid ${props => props.theme.orange};
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
`
const Arrow = styled.span`
  top: 0;
  ${({ extendRight }) => extendRight ? 'right' : 'left'}: 0;
  width: 32px;
  height: 8px;
  margin-top: -2.5px;
  position: absolute;

  &::before {
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent ${props => props.theme.orange} transparent;
    width: 0;
    margin: auto;
    height: 0;
    content: "";
    display: block;
    border-style: solid;
  }
`

const Item = styled(ListItem)`
  padding: 0 !important;
  max-width: 225px;
  color: ${props => props.theme.black} !important;
  &:hover {
    background-color: rgb(0, 0, 0, 0.05) !important;
    a {
      color: ${props => props.theme.orange} !important;
    }
  }

  &>div:first-of-type {
    position: relative;
    z-index: 1;
  }
`

class DropdownList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      extendRight: 0
    }

    this.myRef = React.createRef();
  }

  orientDropdown = () => {
    if (!this.myRef.current) {
      return;
    }

    const { headerRef } = this.props;
    const { extendRight } = this.state;
    const offsetLeft = headerRef.current.offsetLeft + 12; // 12px margin
    const eleWidth = this.myRef.current.clientWidth;
    const windowWidth = $(window).width();
    const offsetRight = windowWidth - (offsetLeft + eleWidth);

    // 4px for buffer with edge of screen
    if (offsetRight < 16) {
      const leftEdge = headerRef.current.offsetLeft
                          + headerRef.current.clientWidth
                          - 12;
      const rightHeaderOffset = windowWidth - leftEdge;

      if (extendRight !== rightHeaderOffset) {
        this.setState({ extendRight: rightHeaderOffset });
      }
    } else if (extendRight) {
      this.setState({ extendRight: 0 });
    }
  }

  componentDidMount() {
    this.orientDropdown()
    $(window).resize(this.orientDropdown);
    $(window).scroll(this.orientDropdown);
  }

  componentWillUnmount() {
    $(window).off('resize', this.orientDropdown);
    $(window).off('scroll', this.orientDropdown);
  }

  render() {
    const { list, style } = this.props
    const { extendRight } = this.state

    return (
      <Positioner style={style} extendRight={extendRight}>
        <MenuWrapper>
          <Arrow extendRight={extendRight} />
          <div ref={this.myRef}>
            {list && list.map((item, i) => {
              return(
                <Item button divider key={i}>
                  {item}
                </Item>
              )
            })}
          </div>
        </MenuWrapper>
      </Positioner>
    )
  }
}

export default DropdownList
