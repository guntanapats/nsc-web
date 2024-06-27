import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Member from '../pages/Member';
import NewComponent from "./Icon";
import { Link } from "react-router-dom";

function Login(){
    return (
    <MainContainer>
        <LoginText>Login</LoginText>
        <InputContainer>
            <Input type="text" name="username" placeholder="Enter Username"/>
        </InputContainer>
        <InputContainer>
            <Input type="password" name="password" placeholder="Enter Password"/>
        </InputContainer>
        <ButtonContainer>
            {/* <a href="http://localhost:3000/Member" className="card-link">
            
                    <Button content="Login"/>
                         
            </a>  */}
            
                <Button content="Login"/>
            
        </ButtonContainer>
        <HorizontalRule/>
        
        
            <ForgotPassword>ลืมรหัสผ่าน?</ForgotPassword>
            
       
    </MainContainer>
    
    );
}

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 60vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); 
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #32ADFF;
    text-transform: uppercase;
    letter-spacing: 0.4rem;


`;

const LoginText = styled.h2`
    margin: 3rem 0 2rem 0;

`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 13%;
    width: 100;
    
`;

const ButtonContainer = styled.div`
    margin: 1rem 0 2rem -14rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    

`;

const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    margin: 1.5em 0 1rem 0;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    backdrop-filter: blur(25px);
`;

const ForgotPassword = styled.h4`
    cursor: pointer;
    font-size: 1rem;
    

`;

export default Login;