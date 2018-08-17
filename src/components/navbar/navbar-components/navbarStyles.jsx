import styled from 'styled-components'

export const NavbarHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 15;
  background-color: white;
`

export const NavbarMain = styled.div`
  height: 120px;

  font-size: 24px;
  font-weight: 500;

  transition: height, font-size, 0.5s ease;
  &.mini {
    font-size: 18px;
    height: 70px;

    @media screen and (min-width: 1251px) {
      .navbar-brand-orch { width: 225px; }
      .navbar-brand-text.inline { width: 250px; padding: 16px 0px; animation-name: fadeDownInline; }
      .navbar-brand-text.below { display: none; animation: none; }
    }
    @media screen and (min-width: 1101px) and (max-width: 1250px) {
      .navbar-brand-orch { width: 150px; }
      .navbar-brand-text.inline { width: 215px; padding: 16px 0px; animation-name: fadeDownInline; }
      .navbar-brand-text.below { display: none; animation: none; }
    }
    @media screen and (min-width: 1016px) and (max-width: 1100px) {
      .navbar-brand { display: block; max-width: 150px;}
      .navbar-brand-orch { width: 150px; padding-bottom: 0;}
      .navbar-brand-text.inline { display: none; animation: none; }
      .navbar-brand-text.below { width: 150px; animation-name: fadeDownBelow; }
    }
    @media screen and (min-width: 701px) and (max-width: 1015px) {
      .navbar-brand { display: block; max-width: 120px;}
      .navbar-brand-orch { width: 120px; padding-bottom: 0;}
      .navbar-brand-text.inline { display: none; animation: none; }
      .navbar-brand-text.below { width: 120px; animation-name: fadeDownBelow; }
    }
    @media screen and (min-width: 600px) and (max-width: 700px) {
      .navbar-brand-orch { width: 152px; }
      .navbar-brand-text.inline { width: 175px; padding: 0; animation-name: fadeDownInline; }
      .navbar-brand-text.below { display: none; animation: none; }
    }
    @media screen and (min-width: 361px) and (max-width: 599px) {
      .navbar-brand-orch { width: 120px; padding: 8px 12px 0 8px; }
      .navbar-brand-text.inline { width: 138px; padding: 10px 0 0 0; animation-name: fadeDownInline; }
      .navbar-brand-text.below { display: none; animation: none; }
    }
    @media screen and (max-width: 360px) {
      .navbar-brand { display: block; max-width: 80px; line-height: 0;}
      .navbar-brand-orch { width: 80px; padding: 7.5px 0 3px 8px;}
      .navbar-brand-text.inline { display: none; animation: none; }
      .navbar-brand-text.below { width: 80px; padding: 0 8px; animation-name: fadeDownBelow; }
    }
  }

  &:not(.mini) {
    @media screen and (min-width: 1521px) {
      .navbar-brand-orch { width: 300px; }
      .navbar-brand-text.inline { width: 335px; animation-name: fadeDownInline; }
      .navbar-brand-text.below { display: none; animation: none; }
    }
    @media screen and (min-width: 1025px) and (max-width: 1520px) {
      .navbar-brand { display: block; max-width: 225px;}
      .navbar-brand-orch { width: 225px; padding-bottom: 0}
      .navbar-brand-text.inline { display: none; animation: none; }
      .navbar-brand-text.below { width: 225px; animation-name: fadeDownBelow; }
    }
    @media screen and (min-width: 701px) and (max-width: 1024px) {
      .navbar-brand { display: block; max-width: 190px;}
      .navbar-brand-orch { width: 190px; padding-bottom: 0}
      .navbar-brand-text.inline { display: none; animation: none; }
      .navbar-brand-text.below { width: 190px; animation-name: fadeDownBelow;  }
    }
    @media screen and (min-width: 536px) and (max-width: 700px) {
      .navbar-brand-orch { width: 190px; padding: 18px 16px;}
      .navbar-brand-text.inline { width: 220px; padding: 0; animation-name: fadeDownInline; }
      .navbar-brand-text.below { display: none; animation: none; }
    }
    @media screen and (min-width: 421px) and (max-width: 535px) {
      .navbar-brand-orch { width: 150px; padding: 27px 16px;}
      .navbar-brand-text.inline { width: 150px; padding: 0; animation-name: fadeDownInline; }
      .navbar-brand-text.below { display: none; animation: none; }
    }
    @media screen and (max-width: 420px) {
      .navbar-brand { display: block; max-width: 125px; line-height: 0;}
      .navbar-brand-orch { width: 125px; padding: 15px 0 4px 16px;}
      .navbar-brand-text.inline { display: none; animation: none; }
      .navbar-brand-text.below { width: 125px; animation-name: fadeDownBelow; }
    }
  }
`

export const NavbarBrand = styled.div`
  position: absolute;
  font-size: 24px;
  z-index: 12;

  display: flex;
  align-items: center;

  .navbar-brand-orch {
    padding: 16px;
    transition: width, padding, 0.5s ease;

    animation: fadein 1s;

    @keyframes fadein {
       from { opacity: 0; }
       to   { opacity: 1; }
     }
  }
  .navbar-brand-text {
    &.inline {
      padding: 16px;
      animation-name: fadeDownInline;
    }
    &.below {
      padding: 0 16px;
      animation-name: fadeDownBelow;
    }

    transition: width, padding, 0.5s ease;

    animation-iteration-count: 1;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-fill-mode: both;

    @keyframes fadeDownInline {
      0% { opacity: 0; transform: translateY(-50px); }
      25% { opacity: 0; transform: translateY(-50px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeDownBelow {
      0% { opacity: 0; transform: translateY(-12px); }
      25% { opacity: 0; transform: translateY(-12px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  }
`

export const NavbarButtons = styled.div`
  padding-right: 16px;
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 701px) {
    display: none !important;
  }
`

export const NavbarButton = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;

  animation: fadein 1s;

  @keyframes fadein {
     from { opacity: 0; }
     to   { opacity: 1; }
   }

  svg {
    width: 32px;
    height: 32px;
    stroke: ${props => props.theme.black};
    &:hover { stroke: ${props => props.theme.orange}; }
    path {
      transition: all 0.5s ease;
    }
  }
  &.active { svg { stroke: ${props => props.theme.orange} !important; } }
`

export const NavbarLinks = styled.div`
  padding: 0 16px 0 24px;
  margin-left: 225px;
  height: 100%;
  justify-content: flex-end;
  flex-flow: row wrap;
  align-items: center;
  display:flex;
  align-content: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const NavbarMenu = styled.div`
  overflow-y: auto;
  max-height: 48vh;
  position: fixed;
  background-color: ${props => props.theme.black};
  width: 100%;
  margin-top: 165px;
  padding: 16px;
  transition: margin-top 0.5s ease;
  display: none;

  ${NavbarMain}.mini & {
    margin-top: 70px !important;
  }
  ${NavbarMain}:not(.mini) & {
    margin-top: 120px !important;
  }

  @media screen and (min-width: 600px) and (max-width: 700px) {
    padding-top: 60px;
  }

  @media screen and (min-width: 701px) {
    display: none !important;
  }
`

export const NavbarLink = styled.div`
  margin: 4px 12px;
  cursor: pointer;
  border-bottom: 0px solid transparent;

  transition: border-bottom .2s;
  a { transition: color .2s; }

  animation: fadein 1s;

  @keyframes fadein {
     from { opacity: 0; }
     to   { opacity: 1; }
   }

  &:after {
    height: 2px;
    content:'';
    display:block;
    width: 0;
    transition: width .2s;
    background: ${props => props.theme.orange};
  }

  @media screen and (min-width: 768px) {
    &:hover::after {
      width:100%;
    }
  }
  @media screen and (max-width: 768px) {
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${props => props.theme.orange};
    }
  }

  @media screen and (max-width: 700px) {
    font-size: 24px;

    float: left;
    white-space: nowrap;
    margin: 4px 700px 4px 0;
    a {
      color: ${props => props.theme.offWhite};

      &:hover {
        color: ${props => props.theme.orange};
      }
    }
  }
`

export const NavbarTriangle = styled.svg`
  width: 100%;
  height: 80px;
  position: absolute;
  pointer-events: none;
  margin-top: -2px;
  z-index: 10;
  &.orange {
    color: white;
    line {
      stroke: ${props => props.theme.orange};
    }
  }
  &.black {
    color: ${props => props.theme.black};
  }
`
