import styled from "styled-components";
import registerBG from "../../asset/register.jpg"

export const RegisterMainContainer = styled.div`
    background-image: url(${registerBG});
    background-size: cover;
    width: 100%;
    height: 100vh;
`

export const RegisterContainer = styled.div`
    position: absolute;
    left: 15%;
    top: 5%;
    color: white;
    padding: 5px;
    border: 1px solid #3faadf;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25);
    backdrop-filter: blur(20px);
    padding: 5%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 120vh;
    height: 70vh;
`

export const StyledH2 = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const StyledRegisterLabel = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`

export const StyledRegisterInput = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: transparent;
    color: white;
`
export const StyledRegisterSelect = styled.select`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: transparent;
    color: white;
`

export const StyledButton = styled.button`
    padding: 10px;
    background-color: #441474;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: .5s ease;
    &:hover{
        background-color: #bc3ca9;
    }
`

export const StyledRegisterPara = styled.p`
    text-align: center;
`

export const StyledRegisterAnchor = styled.a`
    color: #007bff;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`

export const StyledRegisterOption = styled.option`
    background-color: transparent;
    color: black;
`