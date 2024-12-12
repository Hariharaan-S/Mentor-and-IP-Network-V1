import styled from 'styled-components'
import LoginBG from '../../asset/login.jpg'

export const LoginMainContainer = styled.div`
    background-image: url(${LoginBG});
    background-size: cover;
    width: 100%;
    height: 100vh;
`


export const LoginContainer = styled.div`
    position: absolute;
    left: 17%;
    top: 10%;
    background-color: transparent;
    color: white;
    border: 1px solid #3faadf;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25);
    backdrop-filter: blur(20px);
    padding: 5%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 115vh;
    display: flex;
    flex-direction: row;
    column-gap: 12%;
`

export const Styledh2 = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`
export const StyledLabel = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`

export const StyledSelect = styled.select`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: transparent;
    color: white;
`

export const StyledInput = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: transparent;
    color: white;
`
export const StyledOption = styled.option`
    background-color: transparent;
    color: black;
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

export const StyledPara = styled.p`
    text-align: center;
`

export const StyledAnchor = styled.a`
    color: #007bff;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`