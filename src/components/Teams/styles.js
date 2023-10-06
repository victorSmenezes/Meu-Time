import { PiWarningCircleThin } from 'react-icons/pi';

import styled from 'styled-components';

export const BoxOfTeams = styled.div`
  width: 220px;
  height: max-content;
  background: #d9d9d9;
  border-radius: 25px;
  padding: 20px;
  margin-right: 5%;
  margin-left: 5%;
`;

export const FilterTeams = styled.select`
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
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
