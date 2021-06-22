import styled from "styled-components";

export const Card = styled.div`
    background-color:  #FFF2A6;
    border-radius: 20px;
    height: 240px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 28px;
    text-align: center;

    p{
      font-size: 20px;
      font-weight: bold;
    }
`

export const ButtonContainer = styled.div`  

margin: 10px 10px;   

button {   
    border-radius: 20px; 
    background-color: black ;
    color: white;
    border:none;
    height:30px;
    width: 100px;  
    font-weight: bold;
    
    :hover{
      background-color: #B7D5E5;
      color: black;
    }  
    
}       
`