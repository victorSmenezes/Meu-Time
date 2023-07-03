import { Merriweather_Sans as Merriweather } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather'
});

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${merriweather.variable}, sans-serif;
  }

  body{
        background: #252f3a;
        width: 100vw;
        height: 100vh;
    }
`;
