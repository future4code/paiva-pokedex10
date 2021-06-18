import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    background-color:#fe0000;
`

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
    height: 500px;
    margin-right: 10px;
    margin-left: 10px;
    
`

export const ImgFront = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius:20px;
    width: 15em;
    font-size: 20px;   
    margin-top: 20px;
    margin-left: 100px;
    background-color:#FFF2A6;
    grid-column: 1/2;
    grid-row: 1/3;

    img{
        height: 8em;
        width: 8em;
    }
    
`
export const ImgBack = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius:20px;
    margin-top: 20px;
    margin-left: 100px;
    height: 12em;
    width: 15em;
    background-color:#FFF2A6;
    grid-column: 1/2;
    grid-row: 3/5;
    font-size: 20px;      

    img {
        height: 8em;
        width: 8em;
    }
`

export const Stats = styled.div`
    height: 32em;
    grid-column: 2/3;
    grid-row: 1/5;
    border-radius:20px;
    margin-top: 20px;
    margin-right: 80px;
    background-color:#FFF2A6;

    p {
        margin-left: 10px;
        font-size: 20px;
    }

    h2{
        margin-left: 10px;
    }
`

export const Type = styled.div`
    margin-right: 120px;
    grid-column: 3/4;
    grid-row: 1/2;
    border-radius:20px;
    margin-top: 20px;
    background-color:#FFF2A6;

    p{
        margin-left: 10px;
        font-size: 20px;
    }
    h2{
        margin-left: 10px;
    }
`

export const Moves = styled.div`
    height: 22.5em;
    margin-right: 120px;
    grid-column: 3/4;
    grid-row: 2/5;
    border-radius:20px;
    margin-top: 20px;
    background-color:#FFF2A6;
    p{
        margin-left: 10px;
        font-size: 20px;
    }
    h2{
        margin-left: 10px;
    }
    
`