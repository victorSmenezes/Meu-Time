import { Content, TitleOptions } from "./styles";
import { MdKeyboardArrowDown } from "react-icons/md";


export default function Options() {

  function isClicked (Click) {
    if(Click == 'none' ){
    Click = 'block' 
  }else{
    Click = 'none' 
  }
}

  return (
    <>
      <TitleOptions onClick={() => isClicked()}>Jogadores <MdKeyboardArrowDown/></TitleOptions>
        <Content Click>Jogador1</Content>
      

      <TitleOptions>Formação mais usada na temporada <MdKeyboardArrowDown/></TitleOptions>
        <Content>Formação1</Content>
      

      <TitleOptions>Tabela de Resultados <MdKeyboardArrowDown/></TitleOptions>
        <Content>Tabela1</Content>
      

      <TitleOptions>Quantidade de gols marcados por tempo de jogo <MdKeyboardArrowDown/></TitleOptions>
        <Content>Gols1</Content>
      
    </>
  )
}