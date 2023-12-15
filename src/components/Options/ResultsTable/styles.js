import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  table {
    width: 65%;
  }

  table, td ,th {
    border: 1px solid #EFF1F4;
    border-collapse: collapse;
  }

  thead {
    th {
      background-color: #F5F7F9;
      height: 35px;
      font-size: 18px;
      font-weight: 800;
      color: #2E404B;
    }
  }
  
  tbody {
    td, th {
      background-color: #FFFFFF;
      height: 35px;
    }
  
  th {
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    color: #2F404F;
    padding: 4px
  }

  td {
    text-align: center;
    font-size: 16px;
    color: #2E404B;
  }

  td:nth-child(4) {
    background-color: #F5F7F9
  }

  tr:nth-child(2) {
    td {
    color: #00E7CA;
    }
  }

  tr:nth-child(4) {
    td {
    color: #FF355C;
    }
  }
}
`