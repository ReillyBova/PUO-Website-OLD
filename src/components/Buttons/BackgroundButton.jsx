import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import { DelayedLink } from 'components'

const StyledButton = styled(Button)`
  font-size: 18px !important;
  border-radius: 2px !important;
  border: 2px solid white !important;
  color: ${props => props.theme.black} !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
  &:hover {
    background-color: ${props => props.theme.orange} !important;
    border: 2px solid ${props => props.theme.orange} !important;
  }

  &>span:first-of-type {
    color: white !important;
    position: relative;
    z-index: 1;
  }

  &>span:last-of-type  {
    border-radius: 0 !important;

    span {
      opacity: 1 !important;
      animation-name: press-down !important;

      @keyframes press-down {
        0% {
          opacity: 0.75;
          transform: scale(0);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
`

const BackgroundButton = ({children}) => {
  return (
    <DelayedLink delay={500} to={`${process.env.PUBLIC_URL}/concerts`}>
      <StyledButton variant="outlined" color="primary"  >
        { children }
        <ArrowRightAlt style={{marginLeft: 8}} />
      </StyledButton>
    </DelayedLink>
  )
}

export default BackgroundButton
