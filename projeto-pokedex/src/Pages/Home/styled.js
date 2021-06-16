import styled from "styled-components";

export const Header = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content:center; 
  width: auto;
`

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  `

export const ButtonContainer = styled.div`  
  display: flex;
  justify-content: flex-start;
  `