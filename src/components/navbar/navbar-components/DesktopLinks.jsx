import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import { HoverDropdown } from 'components'
import { NavbarLinks, NavbarLink, NavbarDropdownLink } from './'

class DesktopLinks extends Component {
  constructor(props) {
    super(props);
    this.makeLinkAndDropdown = this.makeLinkAndDropdown.bind(this);
  }

  urlify(string) {
    return string.replace(/\s+/g, '-').replace(/’/g, '').toLowerCase()
  }

  makeLinkAndDropdown(navItem, i) {
    const baseURL = this.urlify(navItem.header)
    const headerLink = <NavLink to={`${process.env.PUBLIC_URL}/${baseURL}`}>{navItem.header}</NavLink>
    if (!navItem.list) {
      return (
        <NavbarLink key={i}> {headerLink} </NavbarLink>
      )
    } else {
      const listLinks = navItem.list.map((section, j) => {
        const sectionURL = this.urlify(section)
        return (
          <NavbarDropdownLink key={j}>
            <NavHashLink smooth to={`${process.env.PUBLIC_URL}/${baseURL}#${sectionURL}`}>{section}</NavHashLink>
          </NavbarDropdownLink>
        )
      })
      return (
        <HoverDropdown key={i}
          header = { <NavbarLink> {headerLink} </NavbarLink> }
          list = {listLinks}
        />
      )
    }
  }

  render() {
    const { navData } = this.props
    return (
      <NavbarLinks>
        { navData.map((navItem, i) => this.makeLinkAndDropdown(navItem, i)) }
      </NavbarLinks>
    )
  }
}

export default DesktopLinks
