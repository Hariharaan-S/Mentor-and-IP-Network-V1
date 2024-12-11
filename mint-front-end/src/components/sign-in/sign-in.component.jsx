import {
    LoginMainContainer,
    LoginContainer,
    Styledh2,
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledSelect,
    StyledOption,
    StyledButton
} from "./sign-in.styles";
import LoginGIF from "../../asset/login-ani.gif";
import { login } from "../../utilities/dataAccessLayer"
import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router";

const SignIn = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("individual");
    const { setCurrentUser } = useContext(UserContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const successLogin = login(username, password, role);
        if (successLogin) {
            setCurrentUser({ username, role });
            navigate('/home/' + role);
        }
    };

    return (
        <LoginMainContainer>
            <LoginContainer>
                <div className="login-gif-container">
                    <img src={LoginGIF} alt="Login Animation" />
                </div>
                <div className="login-form-container">
                    <Styledh2>Login</Styledh2>
                    <StyledForm onSubmit={onSubmitHandler}>
                        <StyledLabel htmlFor="username">Username:</StyledLabel>
                        <StyledInput
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />

                        <StyledLabel htmlFor="password">Password:</StyledLabel>
                        <StyledInput
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <StyledLabel htmlFor="role">Logged in as:</StyledLabel>
                        <StyledSelect
                            id="role"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <StyledOption value="individual">Individual</StyledOption>
                            <StyledOption value="startup">Startup</StyledOption>
                            <StyledOption value="investor">Investor</StyledOption>
                            <StyledOption value="mentor">Mentor</StyledOption>
                        </StyledSelect>

                        <StyledButton type="submit">Login</StyledButton>
                    </StyledForm>

                    <p>
                        Don't have an account? <a href="/auth/register" id="registerLink">Register here</a>
                    </p>
                </div>
            </LoginContainer>
        </LoginMainContainer>
    );
};

export default SignIn;
