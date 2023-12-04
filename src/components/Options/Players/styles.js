import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 padding: 20px;
 flex-wrap: wrap;
 gap: 10px;
 margin-left: 35px;
`

export const BoxPlayers = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-items: flex-start;
  width: 130px;
  padding: 10px;
  margin-left: 0;

  img {
    border-radius: 8px;
    margin: 5px;
  }
  
  h3, h4, h5{
    color: #2B2b2b;
    background: #9B9b9b;
    border-radius: 3px;
    text-align: center;
  }

  h3 {
    font-size: 15px;
    max-width: 110px;
    flex-wrap: wrap;
    padding: 3px;
  }

  h4 {
    font-size: 14px;
    padding: 2px;
    margin: 6px 0;
  }

  h5 {
    font-size: 13px;
    padding: 2px;
  }
`