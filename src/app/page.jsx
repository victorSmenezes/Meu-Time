'use client';

import Filters from '@/components/Filters/Filters';
import Options from '@/components/Options/Options';
import Ball from '../assets/ball.png';
import {
  Container,
  Header,
  ImageBall,
  Footer,
  Linkedin,
  GitHub,
  Nav
} from './page.styles';
import Team from '@/components/Teams/Team';

export default function Home() {
  <link
    rel="icon"
    href="/icon?<generated>"
    type="image/<generated>"
    sizes="<generated>"
  />;
  return (
    <>
      <Header>
        <h1>MEU TIME</h1>

        <ImageBall src={Ball} alt="bola" />
      </Header>

      <Container>
        <Filters />
        <Team />
        <Options />
      </Container>

      <Footer>
        <Nav>
          <p>Desenvolvido por &copy; Victor Santos</p>

          <p>
            <a
              href="https://www.linkedin.com/in/victor-santos-de-menezes/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

            <a
              href="https://github.com/victorSmenezes"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </p>
        </Nav>
      </Footer>
    </>
  );
}
