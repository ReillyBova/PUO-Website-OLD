import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { logoOrch, logoText } from 'assets/images'
import { NavbarHeader, NavbarMain, NavbarBrand, NavbarButtons,
          NavbarButton, NavbarLinks, NavbarLink, NavbarTriangle } from './navbar-components'
import $ from 'jquery';

export class Navbar extends Component {

  scroll_navbar = () => {
    if ($(document).scrollTop() > 115) {
      $('#navbarMain').addClass('mini');
    } else {
      $('#navbarMain').removeClass('mini');
    }
  }

  resize_navbarTriangle = () => {
    const polygon1 = $('#navbarOrangeTriangle');
    const line1 =  $('#navbarOrangeLine');
    const width = $('#root').width();
    console.log(width)

    let maxH = Math.min(Math.max((width / 12.0) - 15.0, 0), 75);
    if (maxH < 35) maxH = 0;

    polygon1.attr('points', `0,0 ${width},0 0,${maxH}`);
    line1.attr('x2', width + 4);
    line1.attr('y1', maxH + 1.5);

    const polygon2 = $('#navbarBlackTriangle');
    polygon2.attr('points', `${width / 3},2 ${width},2 ${width},${maxH + 2}`);
  }

  componentDidMount() {
    this.resize_navbarTriangle();

    $(window).scroll(this.scroll_navbar);
    $(window).resize(this.resize_navbarTriangle);
  }

  render() {
    return (
      <NavbarHeader>
        <NavbarMain id="navbarMain">
          <NavLink to={`${process.env.PUBLIC_URL}/`}>
            <NavbarBrand className={"navbar-brand"}>
              <img className={"navbar-brand-orch"} src={logoOrch} alt={""} />
              <img className={"navbar-brand-text below"} src={logoText} alt={""} />
              <img className={"navbar-brand-text inline"} src={logoText} alt={""} />
            </NavbarBrand>
          </NavLink>
          <NavbarButtons>
            <NavbarButton>
              <svg>
                <path d="M 0,30.5 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
                <path d="M 0,23.25 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
                <path d="M 0,16 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
                <path d="M 0,8.75 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
                <path d="M 0,1.5 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
              </svg>
            </NavbarButton>
          </NavbarButtons>
          <NavbarLinks>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/concerts`}>{`Concerts`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/members`}>{`Members`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/about`}>{`About`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/media`}>{`Media`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/news`}>{`News`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/faq`}>{`FAQ`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/archives`}>{`Archives`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/donate`}>{`Donate`}</NavLink>
            </NavbarLink>
          </NavbarLinks>
        </NavbarMain>
        <NavbarTriangle className="black">
          <polygon id="navbarBlackTriangle" fill="currentColor" points="0,0 0,0 0,0"></polygon>
        </NavbarTriangle>
        <NavbarTriangle className="orange">
          <polygon id="navbarOrangeTriangle" fill="currentColor" points="0,0 0,0 0,0"></polygon>
          <line id="navbarOrangeLine" x1="0" y1="0" x2="0" y2="1.5" strokeWidth="4px"></line>
        </NavbarTriangle>
      </NavbarHeader>
    )
  }
}
