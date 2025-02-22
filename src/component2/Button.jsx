import styled from "styled-components";

import React from 'react';

export default function Button({content}){
    return (
        <StyledButton>{content}</StyledButton>
    )
}

const StyledButton = styled.button`
    background: linear-gradient(to right,#14163c 0, #03217b 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 400%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    // margin: 1rem 0 2rem 0;
    
    
`;