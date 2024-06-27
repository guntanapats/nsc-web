import React ,{ createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Login from '../component2/login';
import Button from "../component2/Button";
import Input from "../component2/Input";
import styled from "styled-components";
import "./LoginPage.css"


export default function Signin2(){

    // const token = localStorage.getItem(authTokens);
    const [authTokens, setAuthTokens] = useState(null);
    const [user, setUser] = useState(null);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    // const classes = useStyles();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('test')
        let response = await fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        console.log('data:',data)
        console.log('data:',response)
        if(response.status == 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('accessToken', JSON.stringify(data)); //'accessToken' default = 'authTokens'
            window.location.href = "/Member";
        }else{
            alert('ไอดีหรือรหัสผ่านไม่ถูกต้อง!')
        }}

    
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
        return (
            // <div>
            //     <form onSubmit={handleSubmit}>
            //         <input type="text" name="username" placeholder="Enter Username"/>
            //         <input type="password" name="password" placeholder="Enter Password"/>
            //         <input type="submit"/>
            //     </form>
            // </div>
            <center>
                <div className="Background">
                <div className="MainContainer">
                    <div className="TopPosition">
                    <form onSubmit={handleSubmit} >
                        <div className="LoginText">Login</div>
                        <div className="InputContainer">
                            
                            <input type="text" name="username" placeholder="Enter Username" />
                
                        </div>
                        <div className="InputContainer">
                            <input type="password" name="password" placeholder="Enter Password"/>
                        </div>
                        <div className="HorizontalRule"/>
                        <div className="ButtonContainer">
                            
                            <input type="submit"  />
                            
                        </div>
                    </form>
                    </div>
                    
            
                </div>
                </div>
            </center>
  
        );
    }