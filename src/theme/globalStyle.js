import { injectGlobal } from 'styled-components'

const black = '#221e20';
const orange = '#f58025';
const offWhite = '#f2f2f2';

injectGlobal`
  body {
    padding: 0;
    margin: 0;

    color: ${black};
    background-color: ${offWhite};

    font-family: Roboto, sans-serif;
    height: 200vh;
    min-width: 300px;
    overflow-x: scroll;

    a {
      color: ${black};
      text-decoration: none;

      &:hover, &.active {
        color: ${orange};
      }
    }

    ‑webkit‑text‑size‑adjust: 100%
  }
`

export const theme = {
  black: black,
  orange: orange,
  offWhite: offWhite
}
