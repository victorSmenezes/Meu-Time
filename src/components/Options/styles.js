import { MdKeyboardArrowDown } from 'react-icons/md';

import styled from 'styled-components';

export const BoxList = styled.div`
  width: 60em;
  height: fit-content;
  background: #d9d9d9;
  border-radius: 3px;
`;

export const BoxOptions = styled.div`
  background: #7b7b7b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  border-radius: 3px;
  border: none;
  margin-bottom: ${props => props.isOpen ? '0' : '35px'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 13px;
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 16px;
  height: 36px;
  display: flex;
  align-items: center;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transform: ${props => props.isOpen ? 'rotate(0)' : 'rotate(90deg)'};
  animation: transform 0.8s ease-in;
`;

export const Content = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 20px;
`;
