import React, { Component } from 'react'
import $ from 'jquery';
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import { logoOrch, logoText } from 'assets/images'
import { HoverDropdown } from 'components'
import { NavbarHeader, NavbarMain, NavbarBrand, NavbarButtons,
         NavbarButton, NavbarLinks, NavbarMenu, NavbarLink, NavbarTriangle,
         NavbarDropdownLink } from './navbar-components'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.clickBrand = this.clickBrand.bind(this);

    this.state = {
      menuActive: false
    }
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
          <NavbarLinks>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/concerts`}>{`Concerts`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/members`}>{`Members`}</NavLink>
            </NavbarLink>
            <HoverDropdown
              header = {
                <NavbarLink>
                  <NavLink to={`${process.env.PUBLIC_URL}/about`}>{`About`}</NavLink>
                </NavbarLink>
              }
              list = {[
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/about#orchestra`}>{`The Orchestra`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/about#conductor`}>{`Conductor`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/about#officers`}>{`Officers`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/about#contact-us`}>{`Contact Us`}</NavHashLink>
                </NavbarDropdownLink>
              ]}
            />
            <HoverDropdown
              header = {
                <NavbarLink>
                  <NavLink to={`${process.env.PUBLIC_URL}/media`}>{`Media`}</NavLink>
                </NavbarLink>
              }
              list = {[
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/media#video`}>{`Video`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/media#audio`}>{`Audio`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/media#photo-gallery`}>{`Photo Gallery`}</NavHashLink>
                </NavbarDropdownLink>
              ]}
            />
            <HoverDropdown
              header = {
                <NavbarLink>
                  <NavLink to={`${process.env.PUBLIC_URL}/news`}>{`News`}</NavLink>
                </NavbarLink>
              }
              list = {[
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/news#announcements`}>{`Announcements`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/news#in-the-press`}>{`In the Press`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/news#conductors-blog`}>{`Conductor’s Blog`}</NavHashLink>
                </NavbarDropdownLink>
              ]}
            />
            <HoverDropdown
              header = {
                <NavbarLink>
                  <NavLink to={`${process.env.PUBLIC_URL}/faq`}>{`FAQ`}</NavLink>
                </NavbarLink>
              }
              list = {[
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/faq#for-our-audience`}>{`For Our Audience`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/faq#for-princeton-students`}>{`For Princeton Students`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/faq#for-prospective-high-school-students`}>{`For Prospective High School Students`}</NavHashLink>
                </NavbarDropdownLink>
              ]}
            />
            <HoverDropdown
              header = {
                <NavbarLink>
                  <NavLink to={`${process.env.PUBLIC_URL}/archives`}>{`Archives`}</NavLink>
                </NavbarLink>
              }
              list = {[
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/archives#past-seasons`}>{`Past Seasons`}</NavHashLink>
                </NavbarDropdownLink>,
                <NavbarDropdownLink>
                <NavHashLink smooth to={`${process.env.PUBLIC_URL}/archives#past-tours`}>{`Past Tours`}</NavHashLink>
                  </NavbarDropdownLink>,
                <NavbarDropdownLink>
                  <NavHashLink smooth to={`${process.env.PUBLIC_URL}/archives#past-orchestras`}>{`Past Orchestras`}</NavHashLink>
                </NavbarDropdownLink>
              ]}
            />
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/donate`}>{`Donate`}</NavLink>
            </NavbarLink>
          </NavbarLinks>
          <NavbarMenu id={"navbarMenu"}>
            <NavbarLink onClick={() => this.toggleMenu()}>
              <NavLink to={`${process.env.PUBLIC_URL}/concerts`}>{`Concerts`}</NavLink>
            </NavbarLink>
            <NavbarLink onClick={() => this.toggleMenu()}>
              <NavLink to={`${process.env.PUBLIC_URL}/members`}>{`Members`}</NavLink>
            </NavbarLink>
            <NavbarLink onClick={() => this.toggleMenu()}>
              <NavLink to={`${process.env.PUBLIC_URL}/about`}>{`About`}</NavLink>
            </NavbarLink>
            <NavbarLink onClick={() => this.toggleMenu()}>
              <NavLink to={`${process.env.PUBLIC_URL}/media`}>{`Media`}</NavLink>
            </NavbarLink>
            <NavbarLink onClick={() => this.toggleMenu()}>
              <NavLink to={`${process.env.PUBLIC_URL}/news`}>{`News`}</NavLink>
            </NavbarLink>
            <NavbarLink onClick={() => this.toggleMenu()}>
              <NavLink to={`${process.env.PUBLIC_URL}/faq`}>{`FAQ`}</NavLink>
            </NavbarLink>
            <NavbarLink onClick={() => this.toggleMenu()}>
              <NavLink to={`${process.env.PUBLIC_URL}/archives`}>{`Archives`}</NavLink>
            </NavbarLink>
            <NavbarLink onClick={() => this.toggleMenu()}>
              <NavLink to={`${process.env.PUBLIC_URL}/donate`}>{`Donate`}</NavLink>
            </NavbarLink>
          </NavbarMenu>
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
