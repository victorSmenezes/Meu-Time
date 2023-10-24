import { PiWarningCircleThin } from 'react-icons/pi';

import styled from 'styled-components';

export const BoxOfTeams = styled.div`
  width: 225px;
  height: fit-content;
  max-height: 650px;
  background: #d9d9d9;
  border-radius: 25px;
  padding: 10px;
  margin-right: 5%;
  margin-left: 5%;

  h4 {
    text-align: center;
    padding: 5px;
  }

  hr {
    margin: 5px 0;
    border: 1px solid black;
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
  }

  &::-webkit-scrollbar-track {
    background: #7b7b7b;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 2px solid gray;
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

    &:hover {
      background: #9b9b9b;
    }

    &:active {
      background: #c9c9c9;
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
