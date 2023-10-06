import { MdKeyboardArrowDown } from 'react-icons/md';

import styled from 'styled-components';

export const TitleOptions = styled.div`
  background: #7b7b7b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  border-radius: 3px;
  border: none;
  margin-bottom: 22px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding-left: 5px;
  font-size: 13px;
`;

export const Content = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const ArrowDown = styled(MdKeyboardArrowDown)`
  width: 19px;
  height: 19px;
  cursor: pointer;
`;
