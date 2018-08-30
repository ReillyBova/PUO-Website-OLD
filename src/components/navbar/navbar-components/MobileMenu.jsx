import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import { logoOrch, logoText } from 'assets/images'
import { HoverDropdown } from 'components'
import { NavbarHeader, NavbarMain, NavbarBrand, NavbarButtons,
         NavbarButton, NavbarLinks, NavbarMenu, NavbarLink, NavbarTriangle,
         NavbarDropdownLink, MobileDropdown } from './'

const MobileNavbarLinkWrapper = styled.div`
  width: 100%;

  div {
    transition: border-bottom, color, .2s !important;
    color: ${props => props.theme.offWhite};
  }

  &:hover {
    div {
      border-bottom: 1px solid ${props => props.theme.orange};
      color: ${props => props.theme.orange};
    }
  }
`

const SubSectionLink = styled.div `
  font-size: 18px;
  width: 100%;
  margin: 2px 0 2px 16px;
  display: flex;
  align-items: center;

  span {
    color: transparent;
    transition: color .2s;
  }

  &:hover {
    span {
      color: ${props => props.theme.black};
    }
  }

  a {
    color: ${props => props.theme.offWhite};
    transition: color .2s;
    flex-grow: 1;
    padding: 8px;
    margin-right: 12px;
    &:hover {
      color: ${props => props.theme.black};
    }
  }
`

class MobileMenu extends Component {
  constructor(props) {
    super(props);

    this.makeLinkAndDropdown = this.makeLinkAndDropdown.bind(this);
  }

  urlify(string) {
    return string.replace(/\s+/g, '-').replace(/’/g, '').toLowerCase()
  }

  linkClick(event) {
    const { toggleMenu } = this.props
    event.stopPropagation();
    toggleMenu();
  }

  makeLinkAndDropdown(navItem, i) {
    const baseURL = this.urlify(navItem.header)
    const headerLink = (
      <MobileNavbarLinkWrapper>
        <NavbarLink>
          {navItem.header}
        </NavbarLink>
      </MobileNavbarLinkWrapper>
    )
    if (!navItem.list) {
      return (
        <NavLink key={i} to={`${process.env.PUBLIC_URL}/${baseURL}`} onClick={(e) => this.linkClick(e)}>
          {headerLink}
        </NavLink>
      )
    } else {
      const listLinks = navItem.list.map((section, j) => {
        const sectionURL = this.urlify(section)
        return (
          <SubSectionLink key={j}>
            <span>></span>
            <NavHashLink smooth to={`${process.env.PUBLIC_URL}/${baseURL}#${sectionURL}`} onClick={(e) => this.linkClick(e)}>{section}</NavHashLink>
          </SubSectionLink>
        )
      })
      return (
        <MobileDropdown key={i}
          header = {
            <NavLink to={`${process.env.PUBLIC_URL}/${baseURL}`} onClick={(e) => this.linkClick(e)}>
              {headerLink}
            </NavLink>
          }
          list = {listLinks}
        />
      )
    }
  }

  render() {
    const { navData } = this.props

    return (
      <NavbarMenu id={"navbarMenu"}>
        { navData.map((navItem, i) => this.makeLinkAndDropdown(navItem, i)) }
      </NavbarMenu>
    )
  }
}

export default MobileMenu
