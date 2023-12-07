import styled from 'styled-components';

export const Containers = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  flex-wrap: wrap;
`

export const Modal = styled.div`
  width: 120px;
  height: 70px;
  background: #9F9F8F;
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 10px 28px 10px rgba(0,0,0,0.11);

  h3 {
    text-align: center;
    color: #1C2221;
  }

  span {
    text-align: center;
    font-size: 13px;
    color: #1F2227;
  }
`