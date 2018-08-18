import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from 'react-slick';

const Wrapper = styled.div`
position: absolute;
top: 0;
padding-top: 128px;
color: white;
text-shadow: 3px 3px 5px rgba(0,0,0,0.6);
width: 100%;

@media screen and (max-width: 599px), screen and (max-height: 500px) and (min-width: 600px) {
  padding-top: 80px;
}
`

const Quote = styled.div`
height: calc(75vh - 256px);
width: 100%;
display: block !important;
`

const AlignBottom = styled.div`
position: absolute;
bottom: 0;
width: 100%
`

const QuoteText = styled.div`
font-size: 64px;
line-height: 1.2;
font-family: Lora, serif;
font-weight: bold;
font-style: italic;
padding: 32px 64px;
transition: font-size, padding, .5s;

@media screen and (max-height: 790px) and (min-width: 600px),
  screen and (max-width: 1295px) and (min-width: 600px) and (max-height: 1100px),
  screen and (max-width: 760px) and (min-width: 600px) {

  font-size: 50px;
  @media screen and (max-height: 715px), screen and (max-width: 1050px) {
    font-size: 35px;
    @media screen and (max-height: 630px) and (max-width: 1030px), screen and (max-width: 765px) and (max-height: 725px) {
      padding: 0 32px;
      font-size: 22px;
      @media screen and (max-height: 485px) {
        display: none;
      }
    }
    @media screen and (max-height: 585px) and (min-width: 1030px) {
      font-size: 22px;
      @media screen and (max-height: 500px) and (min-width: 1030px) {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 599px) {
  padding: 0 32px;
  font-size: 40px;
  @media screen and (min-width: 420px) and (max-height: 845px) {
    font-size: 35px;
    @media screen and (max-height: 740px) {
      font-size: 28px;
      @media screen and (max-height: 620px) {
        font-size: 22px;
        @media screen and (max-height: 525px) {
          font-size: 18px;
          @media screen and (max-height: 460px) {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    padding: 0 16px;
    font-size: 28px;
    @media screen and (max-height: 700px) {
      font-size: 22px;
      @media screen and (max-height: 570px) {
        font-size: 18px;
        @media screen and (max-height: 495px) {
          font-size: 14px;
          @media screen and (max-height: 450px) {
            display: none;
          }
        }
      }
    }
  }
}

`
const QuoteAuthor = styled.div`
font-size: 40px;
text-align: right;
padding: 0 64px;
font-weight: 500;

@media screen and (max-height: 790px) and (min-width: 600px),
  screen and (max-width: 1295px) and (min-width: 600px) and (max-height: 1100px),
  screen and (max-width: 760px) and (min-width: 600px) {

  @media screen and (max-height: 715px), screen and (max-width: 1050px) {
    font-size: 22px;
    @media screen and (max-height: 630px) and (max-width: 1030px), screen and (max-width: 765px) and (max-height: 725px) {
      padding: 12px 32px;
      font-size: 14px;
      @media screen and (max-height: 485px) {
        display: none;
      }
    }
    @media screen and (max-height: 585px) and (min-width: 1030px) {
      font-size: 14px;
      @media screen and (max-height: 500px) and (min-width: 1030px) {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 599px) {
  padding: 12px 32px;
  font-size: 25px;
  @media screen and (min-width: 420px) and (max-height: 845px) {
    font-size: 22px;
    @media screen and (max-height: 740px) {
      font-size: 18px;
      @media screen and (max-height: 620px) {
        font-size: 14px;
        @media screen and (max-height: 525px) {
          font-size: 11px;
          @media screen and (max-height: 460px) {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    padding: 12px 16px;
    font-size: 18px;
    @media screen and (max-height: 700px) {
      font-size: 14px;
      @media screen and (max-height: 570px) {
        font-size: 11px;
        @media screen and (max-height: 495px) {
          font-size: 9px;
          @media screen and (max-height: 450px) {
            display: none;
          }
        }
      }
    }
  }
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
                <AlignBottom>
                  <QuoteText>
                     “{quote.text}”
                  </QuoteText>
                  <QuoteAuthor>
                    – {quote.author}
                  </QuoteAuthor>
                </AlignBottom>
              </Quote>
            )
          })}
        </Slider>
      </Wrapper>
    )
  }
}
