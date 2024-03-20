import { PiWarningCircleThin } from 'react-icons/pi';

import styled from 'styled-components';

export const BoxOfTeams = styled.div`
  width: 245px;
  height: fit-content;
  max-height: 650px;
  background: #d9d9d9;
  border-radius: 25px;
  padding: 10px;
  margin-right: 5%;
  margin-left: 5%;

  h2 {
    text-align: center;
    padding: 5px;
    font-size: 18px;
  }

  hr {
    margin: 5px 0;
    border: 1px solid black;
  }

  @media (max-width: 430px) {
   margin: 15% 0;
  }
`;

export const FilterTeams = styled.ul`
  width: 100%;
  max-height: 540px;
  overflow-y: scroll;
  margin-bottom: 10px;
  border-radius: 30px;
  text-align: center;
  font-size: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;

  &::-webkit-scrollbar {
    width: 8px;

    @media (max-width: 430px) {
      width: 16px;
    }
  }

  &::-webkit-scrollbar-track {
    background: #7b7b7b;
    border-radius: 10px;

    @media (max-width: 430px) {
     border-radius: 5px;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 2px solid gray;

    @media (max-width: 430px) {
      border-radius: 5px;
    }
  }

  hr {
    width: 100%;
    margin: 5px 0;
  }

  li {
    display: flex;
    list-style: none;
    align-items: center;
    margin: 5px;
    cursor: pointer;

    button {
      display: flex;
      font-size: 14px;
      background: none;
      border: none;
      cursor: pointer;
      align-items: center;

      &:focus {
        filter: drop-shadow(0 0 0.2rem #000);
      }
    }

    &:hover {
      filter: drop-shadow(0 0 0.2rem #000);
    }

    img {
      margin-left: 5px;
    }
  }
`;

export const Warning = styled.p`
  font-size: 12px;
  font-style: italic;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #625126;
  display: flex;
`;

export const IconWarning = styled(PiWarningCircleThin)`
  width: 15%;
  height: 15%;
  color: #625126;
`;
