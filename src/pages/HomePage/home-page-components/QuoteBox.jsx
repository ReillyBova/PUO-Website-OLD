import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from 'react-slick';

const Wrapper = styled.div`
position: absolute;
top: 0;
padding-top: 128px;
color: white;
text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
width: 100%;
`

const Quote = styled.div`
height: calc(75vh - 256px);
width: 100%;
display: block !important;
`

const QuoteText = styled.div`
font-size: 64px;
line-height: 1.2;
font-family: Lora, serif;
font-weight: bold;
padding: 32px 64px;

@media screen and (max-height: 680px) and (min-width: 1760px) {
  font-size: 32px !important;
}
@media screen and (max-width: 768px) {
  padding: 16px 32px;
  font-size: 32px !important;
}
@media screen and (max-height: 435px) {
  display: none;
}
`
const QuoteAuthor = styled.div`
font-size: 40px;
text-align: right;
padding: 0 64px;
font-weight: 500;

@media screen and (max-height: 680px) and (min-width: 1765px) {
  font-size: 20px !important;
}
@media screen and (max-height: 500px) {
  display: none;
}
`

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
}

export class QuoteBox extends Component {
  state = {
    quotes: [
      {
        text: `It should be one's sole endeavor to see everything afresh and create it anew.`,
        author: `Gustav Mahler`
      },
      {
        text: `To send light into the darkness of men's hearts - such is the duty of the artist.`,
        author: `Robert Schumann`
      },
      {
        text: `Without craftsmanship, inspiration is a mere reed shaken in the wind.`,
        author: `Johannes Brahms`
      },
      {
        text: `I know that the most joy in my life has come to me from my violin.`,
        author: `Albert Einstein`
      },
      {
        text: `Where words fail, music speaks.`,
        author: `Hans Christian Andersen`
      },
      {
        text: `The challenge is not so much to change the sound. The challenge is to connect and to create something special.`,
        author: `Gustavo Dudamel`
      },
      {
        text: `Those who have achieved all their aims probably set them too low.`,
        author: `Herbert von Karajan`
      }
    ]
  }

  componentWillMount() {
    shuffleArray(this.state.quotes)
  }

  render() {
    const slickSettings = {
      dots: false,
      prevArrow: false,
      nextArrow: false,
      fade: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000
    };

    return (
      <Wrapper>
        <Slider {...slickSettings}>
          {this.state.quotes.map((quote, i) => {
            return (
              <Quote key={i}>
                <QuoteText>
                   “The challenge is not so much to change the sound. The challenge is to connect and to create something special.”
                </QuoteText>
                <QuoteAuthor>
                  – Gustavo Dudamel, Conductor
                </QuoteAuthor>
              </Quote>
            )
          })}
        </Slider>
      </Wrapper>
    )
  }
}
