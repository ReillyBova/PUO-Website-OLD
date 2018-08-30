import React, { Component } from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const StyledExpansionPanel = styled(ExpansionPanel)`
  margin: 0 !important;
  background-color: unset !important;
  box-shadow: none !important;

  &::before {
    content: none !important;
  }

  &>div:first-of-type {
    min-height: 0 !important;
    padding: 0 !important;
    &>div:first-of-type {
      margin: 0 48px 0 0 !important;
      a {
        padding: 0 !important;
        width: fit-content;
      }
    }
    &>div:last-of-type {
      right: 0 !important;
    }
  }
  &>div:first-of-type {
    &>div:last-of-type:hover {
      color: ${props => props.theme.orange};
      span {
        svg {
          color: ${props => props.theme.orange} !important;
        }
      }
    }
  }
  &>div:last-of-type {
    background-color: ${props => props.theme.orange};
  }
`

const SubSections = styled(ExpansionPanelDetails) `
  display: block !important;
  padding: 0 0 12px 0 !important;
`

const Arrow = styled(ExpandMoreIcon) `
  color: ${({ colored, theme }) => colored ? theme.orange : 'white'};
`

const HoverCapture = styled.div `
  width: 100%;
  padding: 0 !important;
`

class MobileDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  handleHover = () => {
    this.setState({ hover: true });
  };

  handleLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { header, list } = this.props
    const { hover } = this.state
    return (
      <StyledExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Arrow colored={hover ? 1 : 0} />}>
          { header }
          <HoverCapture onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave} />
        </ExpansionPanelSummary>
        <SubSections>
          {list}
        </SubSections>
      </StyledExpansionPanel>
    )
  }
}

export default MobileDropdown;
