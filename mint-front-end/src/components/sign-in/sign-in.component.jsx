import { LoginMainContainer, LoginContainer, Styledh2, StyledForm, StyledLabel, StyledInput, StyledSelect, StyledOption, StyledButton } from "./sign-in.styles";
import LoginGIF from "../../asset/login-ani.gif"

const SignIn = () => {
    return (
        <LoginMainContainer>
            <LoginContainer>
                <div class="login-gif-container">
                    <img src={LoginGIF} alt="" srcset=""></img>
                </div>
                <div class="login-form-container">
                    <Styledh2>Login</Styledh2>
                    <StyledForm>
                        <StyledLabel for="username">Username:</StyledLabel>
                        <StyledInput type="text" id="username" name="username" required></StyledInput>

                        <StyledLabel for="password">Password:</StyledLabel>
                        <StyledInput type="password" id="password" name="password" required></StyledInput>

                        <StyledLabel for="role">Logged in as:</StyledLabel>
                        <StyledSelect id="role" name="role" required>
                            <StyledOption value="individual">Individual</StyledOption>
                            <StyledOption value="startup">Startup</StyledOption>
                            <StyledOption value="investor">Investor</StyledOption>
                            <StyledOption value="mentor">Mentor</StyledOption>
                        </StyledSelect>

                        <StyledButton type="submit">Login</StyledButton>
                    </StyledForm>

                    <p>Don't have an account? <a href="/register" id="registerLink">Register here</a></p>
                </div>
            </LoginContainer>
        </LoginMainContainer>
    )
}

export default SignIn;