import { useState } from 'react';

import { Content, TitleOptions, ArrowDown } from './styles';

export default function Options() {
  const [modal, setModal] = useState(false);

  function OpenModal() {
    setModal(true);
  }

  return (
    <>
      <TitleOptions>
        <h3>
          Jogadores <ArrowDown />
        </h3>
        <Content>Jogador1</Content>
      </TitleOptions>

      <TitleOptions>
        Formação mais usada na temporada <ArrowDown />
      </TitleOptions>
      <Content>Formação1</Content>

      <TitleOptions>
        Tabela de Resultados <ArrowDown />
      </TitleOptions>
      <Content>Tabela1</Content>

      <TitleOptions>
        Quantidade de gols marcados por tempo de jogo <ArrowDown />
      </TitleOptions>
      <Content>Gols1</Content>
    </>
  );
}
