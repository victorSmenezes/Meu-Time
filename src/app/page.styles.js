'use client';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import Image from 'next/image';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background: #212f3f;
  border: 1px solid #000;
  padding-top: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
export const ImageBall = styled(Image)`
  width: 34px;
  height: 34px;
  margin-left: 15px;
  background: none;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  margin-right: 100px;
  justify-content: space-evenly;
`;

export const BoxList = styled.div`
  width: 60em;
  height: auto;
  background: #d9d9d9;
  border-radius: 3px;
`;

export const BoxMenuTitle = styled.select`
  background: #8b8b8b;
  width: 100%;
  height: 36px;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 38px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 31px;
  background: #1c2228;
  border: 1px solid #000;
  padding-top: 5px;
  color: #fff;
  font-weight: 400;
  position: fixed;
  bottom: 0;

  p {
    font-size: 10px;
    text-decoration: none;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 3px;
`;

export const Linkedin = styled(FaLinkedinIn)`
  color: #fff;
  width: 14px;
  height: 14px;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    color: #2f88ff;
  }
`;
export const GitHub = styled(FaGithub)`
  color: #fff;
  width: 14px;
  height: 14px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
