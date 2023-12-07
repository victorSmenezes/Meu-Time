import { useState } from 'react';

import { Content, BoxOptions, ArrowDown, Title, BoxList } from './styles';
import Players from './Players';
import Formations from './Formations';

export default function Options() {
  const [modalPlayers, setModalPlayers] = useState(false);
  const [modalFormation, setModalFormation] = useState(false);
  const [modalTable, setModalTable] = useState(false);
  const [modalNumberOfGoals, setModalNumberOfGoal] = useState(false);

  return (
    <BoxList>
      <BoxOptions isOpen={modalPlayers}>
        <Title onClick={() => setModalPlayers(true)}>Jogadores</Title>
        <ArrowDown
          onClick={() => setModalPlayers(false)}
          isOpen={modalPlayers}
        />
      </BoxOptions>

       {modalPlayers && ( 
        <Content setModalPlayers={setModalPlayers}>
          <Players />
        </Content>
      )}
      {/*   */}      
      <BoxOptions isOpen={modalPlayers}>
        <Title onClick={() => setModalFormation(true)}>
          Formações mais usadas na temporada
        </Title>
        <ArrowDown
          onClick={() => setModalFormation(false)}
          isOpen={modalFormation}
        />
      </BoxOptions>

      {modalFormation && (
        <Content setModalFormation={setModalFormation}><Formations /></Content>
      )}
      {/*   */} 
      <BoxOptions isOpen={modalPlayers}>
        <Title onClick={() => setModalTable(true)}>Tabela de Resultados</Title>
        <ArrowDown onClick={() => setModalTable(false)} isOpen={modalTable} />
      </BoxOptions>

      {modalTable && <Content setModalTable={setModalTable}>Tabela1</Content>}
      {/*   */} 
      <BoxOptions isOpen={modalPlayers}>
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
    </BoxList>
  );
}
