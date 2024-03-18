import styled from 'styled-components';

export const FilterBox = styled.div`
  width: 200px;
  height: 190px;
  background: #d9d9d9;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 90px;

  @media (max-width: 430px) {
   margin-left: 0;
  }
`;
export const Filter = styled.select`
  width: 85%;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  font-size: 11px;
`;
