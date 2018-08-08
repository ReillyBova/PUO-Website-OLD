require('./styles.scss');
import { init_executeLoadScripts, init_addScrollScripts, init_addResizeScripts } from './scripts.js';
import $ from 'jquery';

const navBarHTML = `
<header class="navbar">
  <div class="navbar-main desktop" id="navbarMain" >
    <div class="navbar-brand">
      <img id="navbarBrandOrch" class="navbar-brand-orch" src="images/branding/logoOrch.svg"></img>
      <img id="navbarBrandText" class="navbar-brand-text below" src="images/branding/logoText.svg"></img>
      <img id="navbarBrandText" class="navbar-brand-text inline" src="images/branding/logoText.svg"></img>
    </div>
    <div class="navbar-buttons">
      <div class="navbar-button">
        <svg>
          <path d="M 0,30.5 H 32" style="fill:none;fill-rule:evenodd;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
          <path d="M 0,23.25 H 32" style="fill:none;fill-rule:evenodd;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
          <path d="M 0,16 H 32" style="fill:none;fill-rule:evenodd;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
          <path d="M 0,8.75 H 32" style="fill:none;fill-rule:evenodd;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
          <path d="M 0,1.5 H 32" style="fill:none;fill-rule:evenodd;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
        </svg>
      </div>
    </div>
    <div class="navbar-links">
      <div class="navbar-link">
        <a href="/concerts">Concerts</a>
      </div>
      <div class="navbar-link">
        <a href="/members">Members</a>
      </div>
      <div class="navbar-link">
        <a href="/about">About</a>
      </div>
      <div class="navbar-link">
        <a href="/media">Media</a>
      </div>
      <div class="navbar-link">
        <a href="/news">News</a>
      </div>
      <div class="navbar-link">
        <a href="/faq">FAQ</a>
      </div>
      <div class="navbar-link">
        <a href="/archives">Archives</a>
      </div>
      <div class="navbar-link">
        <a href="/hire-us">Hire Us</a>
      </div>
    </div>
  </div>
  <div class="navbar-collapse-background"></div>
  <svg class="navbar-triangle black">
    <polygon id="navbarBlackTriangle" fill="currentColor" points="0,0 0,0 0,0"></polygon>
  </svg>
  <svg class="navbar-triangle orange">
    <polygon id="navbarOrangeTriangle" fill="currentColor" points="0,0 0,0 0,0"></polygon>
    <line id="navbarOrangeLine" x1="0" y1="0" x2="0" y2="1.5" stroke-width="4px"></line>
  </svg>
</header>
`;


$('body').append(`<div class="wrapper" id="wrapper"></div>`);
$('#wrapper').append(navBarHTML);

$('document').ready(() => {init_addResizeScripts(); init_addScrollScripts(); init_executeLoadScripts();});
