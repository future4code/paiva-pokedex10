import styled from "styled-components";

export const Header = styled.div `
   display: flex;
    background-color:#fe0000;
    align-items: center;
    justify-content:center; 
    width: auto;  
    `
    export const ButtonContainerPoke = styled.div`  
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