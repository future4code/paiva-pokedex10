import styled from "styled-components";

export const Header = styled.div `
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContainerGrid = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
    border: 1px solid purple;
    height: 500px;
    margin-right: 10px;
    margin-left: 10px;
`

export const ImgFront = styled.div `
    border: 1px solid black;
    grid-column: 1/2;
    grid-row: 1/3;
`
export const ImgBack = styled.div `
    border: 1px solid black;
    grid-column: 1/2;
    grid-row: 3/5;
`

export const Stats = styled.div `
    grid-column: 2/3;
    grid-row: 1/5;
    border: 1px solid pink;
`

export const Type = styled.div `
    grid-column: 3/4;
    grid-row: 1/2;
    border: 1px solid blue;
`

export const Moves = styled.div `
    grid-column: 3/4;
    grid-row: 2/5;
    border: 1px solid gray;
`