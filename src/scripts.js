import $ from 'jquery';

export const resize_navbarTriangle = () => {
  const polygon1 = $('#navbarOrangeTriangle');
  const line1 =  $('#navbarOrangeLine');
  const width = $('#wrapper').width();

  let maxH = Math.min(Math.max((width / 12.0) - 15.0, 0), 75);
  if (maxH < 35) maxH = 0;

  polygon1.attr('points', `0,0 ${width},0 0,${maxH}`);
  line1.attr('x2', width + 4);
  line1.attr('y1', maxH + 1.5);

  const polygon2 = $('#navbarBlackTriangle');
  polygon2.attr('points', `${width / 3},2 ${width},2 ${width},${maxH + 2}`);
}

export const scroll_navbar = () => {
  if ($(document).scrollTop() > 50) {
    $('#navbarMain').addClass('mini');
  } else {
    $('#navbarMain').removeClass('mini');
  }
}

const loadFunctions = [resize_navbarTriangle]
const scrollFunctions = [scroll_navbar]
const resizeFunctions = [resize_navbarTriangle]

export const init_executeLoadScripts = () => {
  loadFunctions.forEach((func) => func());
}

export const init_addScrollScripts = () => {
  scrollFunctions.forEach((func) => $(window).scroll(func));
}

export const init_addResizeScripts = () => {
  resizeFunctions.forEach((func) => $(window).resize(func));
}
