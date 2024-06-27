import styled from "styled-components";

import React from 'react';

export default function ButtonLogout({content}){
    return (
        <StyledButton>{content}</StyledButton>
    )
}

const StyledButton = styled.button`
    background: linear-gradient(to right,#FF2D31 100%, #FF2D31 100%);
    text-transform: uppercase;
    letter-spacing: 0rem;
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    margin: 1rem 0 1rem 0;
    
    
    
`;