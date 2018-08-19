import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  &.MuiButton-textPrimary-4 {
    color: ${props => props.theme.black} !important;
    background-color: rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: ${props => props.theme.orange};
    }
  }
  &.MuiButton-root-1 {
    font-size: 18px;
    border-radius: 2px;
  }
  &.MuiButton-outlinedPrimary-10 {
    border: 2px solid white !important;
    &:hover {
      border: 2px solid ${props => props.theme.orange} !important;
    }
  }

  .MuiButton-label-2 {
    color: white !important;
    position: relative;
    z-index: 1;
  }

  .MuiTouchRipple-root-30 {
    border-radius: 0;
  }

  .MuiTouchRipple-rippleVisible-32 {
    opacity: 1 !important;

    @keyframes mui-ripple-enter {
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
`

const BackgroundButton = ({children}) => {
  return (
    <StyledButton variant="outlined" color="primary"  >
      { children }
    </StyledButton>
  )
}

export default BackgroundButton
