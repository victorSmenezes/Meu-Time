'use client'

import styled from "styled-components";
import Image from 'next/image'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background: #212f3f;
  border: 1px solid #000;
  padding-top: 5px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`
export const ImageBall = styled(Image)`
  width: 34px;
  height: 34px;
  margin-left: 15px;
  background: none;
`

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  margin-right: 100px;
  justify-content: space-evenly;
`

export const BoxList = styled.div`
  width: 60em;
  height: auto;
  background: #D9D9D9;
  border-radius: 3px;
`

export const BoxMenuTitle = styled.select`
  background: #8B8B8B;
  width: 100%;
  height: 36px;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 38px;
  font-weight: 700;
  font-size: 14px;
`

export const Footer = styled.footer`
  width: 100%;
  height: 31px;
  background: #1C2228;
  border: 1px solid #000;
  padding-top: 5px;
  color: #FFF;
  font-weight: 400;
  position: fixed;
  bottom: 0;

  p{
    font-size: 10px;
    text-decoration: none;
  }
`
export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 3px;
`

export const Linkedin = styled(FaLinkedinIn)`
  color: #FFF;
  width: 14px;
  height: 14px;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  
  &:hover{
    color: #2F88FF;
  }
`
export const GitHub = styled(FaGithub)`
  color: #FFF;
  width: 14px;
  height: 14px;
  cursor: pointer;

  &:hover{
    color: #000;
  }
`