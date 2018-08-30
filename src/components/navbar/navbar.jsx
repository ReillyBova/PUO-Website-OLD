import React, { Component } from 'react'
import $ from 'jquery';
import { NavLink } from 'react-router-dom'
import { logoOrch, logoText } from 'assets/images'
import { NavbarHeader, NavbarMain, NavbarBrand, NavbarButtons,
         NavbarButton, NavbarTriangle, DesktopLinks, MobileMenu } from './navbar-components'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.clickBrand = this.clickBrand.bind(this);

    this.state = {
      menuActive: false
    }

    this.navData = [
      {header: 'Concerts'},
      {header: 'Members'},
      {header: 'About', list: ['The Orchestra', 'Conductor', 'Officers', 'Contact Us']},
      {header: 'Media', list: ['Video', 'Audio', 'Photo Gallery']},
      {header: 'News', list: ['Announcements', 'In the Press', 'Conductor’s Blog']},
      {header: 'FAQ', list: ['For Our Audience', 'For Princeton Students', 'For Prospective High School Students']},
      {header: 'Archives', list: ['Past Seasons', 'Past Tours', 'Past Orchestras']},
      {header: 'Donate'}
    ]
  }

  scroll_navbar = () => {
    if ($(document).scrollTop() > 115 || ($(window).height() < 500 && $(window).width() > 599)) {
      $('#navbarMain').addClass('mini');
    } else {
      $('#navbarMain').removeClass('mini');
    }
  }

  resize_navbar = () => {
    // Height minification
    if ($(window).height() < 500 && $(window).width() > 599) {
      $('#navbarMain').addClass('mini');
    } else {
      $('#navbarMain').removeClass('mini');
    }

    // Triangle
    const polygon1 = $('#navbarOrangeTriangle');
    const line1 =  $('#navbarOrangeLine');
    const width = $('#root').width();

    let maxH = Math.min(Math.max((width / 12.0) - 15.0, 0), 75);
    if (maxH < 35) maxH = 0;

    polygon1.attr('points', `0,0 ${width},0 0,${maxH}`);
    line1.attr('x2', width + 4);
    line1.attr('y1', maxH + 1.5);

    const polygon2 = $('#navbarBlackTriangle');
    polygon2.attr('points', `${width / 3},2 ${width},2 ${width},${maxH + 2}`);
  }

  clickBrand() {
    if (this.state.menuActive) {
      this.toggleMenu()
    }
  }

  toggleMenu() {
    const wasActive = this.state.menuActive;
    this.setState({menuActive: !wasActive});
    $('#navbarMenu').slideToggle();
    $('#menuButton').toggleClass('active');

    if (!wasActive) {
      $('#menuButtonL0').css({'transform-origin' : 'bottom left'})
      $('#menuButtonL0').css({'transform' : 'translateY(2.1px) rotate(-45deg)'})
      $('#menuButtonL4').css({'transform-origin' : 'top right'})
      $('#menuButtonL4').css({'transform' : 'translateY(-2.1px) rotate(-45deg)'})

      $('#menuButtonL1').css({'transform-origin' : 'bottom right'})
      $('#menuButtonL1').css({'transform' : 'translateY(12.3px) rotate(45deg)'})
      $('#menuButtonL3').css({'transform-origin' : 'top left'})
      $('#menuButtonL3').css({'transform' : 'translateY(-12.3px) rotate(45deg)'})

      $('#menuButtonL2').css({'transform-origin' : 'center'})
      $('#menuButtonL2').css({'transform' : 'rotate(-45deg)'})
    } else {
      $('#menuButtonL0').css({'transform' : 'rotate(0)'})
      $('#menuButtonL1').css({'transform' : 'rotate(0)'})
      $('#menuButtonL2').css({'transform' : 'rotate(0)'})
      $('#menuButtonL3').css({'transform' : 'rotate(0)'})
      $('#menuButtonL4').css({'transform' : 'rotate(0)'})
    }
  }

  componentDidMount() {
    this.resize_navbar();

    $(window).scroll(this.scroll_navbar);
    $(window).resize(this.resize_navbar);
  }

  componentWillUnmount() {
    $(window).off('resize', this.resize_navbar);
    $(window).off('scroll', this.scroll_navbar);
  }

  render() {
    return (
      <NavbarHeader id={"navbarHeader"}>
        <NavbarMain id={"navbarMain"}>
          <NavLink to={`${process.env.PUBLIC_URL}/`}>
            <NavbarBrand className={"navbar-brand"} onClick={() => this.clickBrand()}>
              <img className={"navbar-brand-orch"} src={logoOrch} alt={""} />
              <img className={"navbar-brand-text below"} src={logoText} alt={""} />
              <img className={"navbar-brand-text inline"} src={logoText} alt={""} />
            </NavbarBrand>
          </NavLink>
          <NavbarButtons>
            <NavbarButton id={"menuButton"} onClick={() => this.toggleMenu()}>
              <svg>
                <path id="menuButtonL0" d="M 0,30.5 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
                <path id="menuButtonL1" d="M 0,23.25 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
                <path id="menuButtonL2" d="M 0,16 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
                <path id="menuButtonL3" d="M 0,8.75 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
                <path id="menuButtonL4" d="M 0,1.5 H 32" style={{fill: 'none', fillRule: 'evenodd', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}}/>
              </svg>
            </NavbarButton>
          </NavbarButtons>
          <DesktopLinks navData={this.navData} />
          <MobileMenu navData={this.navData} toggleMenu={this.toggleMenu.bind(this)} />
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

export default Navbar
