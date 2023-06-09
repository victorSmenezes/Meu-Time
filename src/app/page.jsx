'use client'

import { GlobalStyle } from '../styles/globalStyles'

import {
  Container,
  Header,
  BoxList,
  BoxMenuTitle,
  ImageBall,
  Footer,
  Linkedin,
  GitHub,
  Nav
} from './page.styles'
import Select from '@/components/Select/Select'
import Options from '@/components/Options/Options'

import Ball from '../assets/ball.png'
import Teams from '@/components/Teams/Teams'

export default function Home() {


  return (
    <>
      <GlobalStyle />

      <Header>
        <h1>MEU TIME</h1>
        <ImageBall src={Ball} alt='bola' />
      </Header>

      <Container>

        {/* Filtros de busca */}

        <Select />

        {/* Lista do Time */}
        <BoxList>
          <BoxMenuTitle>
            {/* <img src='' alt='' /> */}
            <Teams />
          </BoxMenuTitle>

          <Options />

        </BoxList>
      </Container>

      <Footer>
        <Nav>
            <p>Desenvolvido por &copy; Victor Santos</p> 
            <p>
            <a href='https://www.linkedin.com/in/victor-santos-de-menezes/' target='_blank'><Linkedin /></a>

            <a href='https://github.com/victorSmenezes' target='_blank'><GitHub/></a>
            </p>
        </Nav>
      </Footer>
    </>
  )
}
