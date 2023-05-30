'use client'

import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background: #212f3f;
  border: 1px solid #000;
  padding-top: 5px;
  text-align: center;
  color: #FFF;
`

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  margin-right: 100px;
  justify-content: space-evenly;
`

export const FilterBox = styled.div`
  width: 200px;
  height: 190px;
  background: #D9D9D9;
  border-radius: 25px;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 90px;
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