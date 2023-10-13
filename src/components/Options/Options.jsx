import { useState } from 'react';

import { Content, BoxOptions, ArrowDown, Title } from './styles';

export default function Options() {
  const [modalPlayers, setModalPlayers] = useState(false);
  const [modalFormation, setModalFormation] = useState(false);
  const [modalTable, setModalTable] = useState(false);
  const [modalNumberOfGoals, setModalNumberOfGoal] = useState(false);

  return (
    <>
      <BoxOptions>
        <Title onClick={() => setModalPlayers(true)}>Jogadores</Title>
        <ArrowDown
          onClick={() => setModalPlayers(false)}
          isOpen={modalPlayers}
        />
      </BoxOptions>

      {modalPlayers && (
        <Content setModalPlayers={setModalPlayers}>Jogador1 </Content>
      )}

      <BoxOptions>
        <Title onClick={() => setModalFormation(true)}>
          Formação mais usada na temporada
        </Title>
        <ArrowDown
          onClick={() => setModalFormation(false)}
          isOpen={modalFormation}
        />
      </BoxOptions>

      {modalFormation && (
        <Content setModalFormation={setModalFormation}>Formação1</Content>
      )}

      <BoxOptions>
        <Title onClick={() => setModalTable(true)}>Tabela de Resultados</Title>
        <ArrowDown onClick={() => setModalTable(false)} isOpen={modalTable} />
      </BoxOptions>

      {modalTable && <Content setModalTable={setModalTable}>Tabela1</Content>}
      <BoxOptions>
        <Title onClick={() => setModalNumberOfGoal(true)}>
          Quantidade de gols marcados por tempo de jogo
        </Title>
        <ArrowDown
          onClick={() => setModalNumberOfGoal(false)}
          isOpen={modalNumberOfGoals}
        />
      </BoxOptions>

      {modalNumberOfGoals && (
        <Content setModalNumberOfGoal={setModalNumberOfGoal}>Gols1</Content>
      )}
    </>
  );
}
