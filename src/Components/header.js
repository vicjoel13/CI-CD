import React from 'react';  
import styled from "@emotion/styled";

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-family: bold;
    color: #FFFFFF;
`

const Header = ({titulo}) =>{
return (
    <ContenedorHeader>
        <h1>{titulo + "HOla"}</h1>
    </ContenedorHeader>
)

};
export default Header;