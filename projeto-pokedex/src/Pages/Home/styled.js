import styled from "styled-components";


export const Header = styled.div`
  display: flex;
  background-color:#fe0000;
  align-items: center;
  justify-content:center; 
  width: auto;  
`

export const Logo = styled.div` 
 display: flex;   
  width: 300px;
  height: 30vh;   
  margin-right:55em;
  
  `

export const BodyHome = styled.div`
background-color: #B7D5E5; 
`

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
 `

export const ButtonContainerHome = styled.div`  
  display: flex;
  button {
    border-radius: 20px;
    background-color: black ;
    color: white;
    border:none;
    height:40px;
    width: 150px;  
    font-size: 18px;
    font-weight: bold;
    
    :hover{
      background-color: #B7D5E5;
      color: black;
    }    
}   
  `

export const TextHome = styled.h1`  
  display: flex;
  justify-content: center;
  color: black;
  font-size:20px;
  `