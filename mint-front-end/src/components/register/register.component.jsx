import { StyledH2, RegisterContainer, RegisterMainContainer, StyledButton, StyledRegisterForm, StyledRegisterInput, StyledRegisterLabel, StyledRegisterOption, StyledRegisterSelect } from "./register.styles";

const SignUp = () => {
    return (
        <RegisterMainContainer>
            <RegisterContainer>
                <StyledH2>Register</StyledH2>
                <StyledRegisterForm>
                    <StyledRegisterLabel for="username">Username:</StyledRegisterLabel>
                    <StyledRegisterInput type="text" id="username" name="username" required />

                    <StyledRegisterLabel for="password">Password:</StyledRegisterLabel>
                    <StyledRegisterInput type="password" id="password" name="password" required />

                    <StyledRegisterLabel for="password">Confirm Password:</StyledRegisterLabel>
                    <StyledRegisterInput type="password" id="confirm-password" name="password" required />

                    <StyledRegisterLabel for="role">Register as:</StyledRegisterLabel>
                    <StyledRegisterSelect id="role" name="role" required>
                        <StyledRegisterOption value="individual">Individual</StyledRegisterOption>
                        <StyledRegisterOption value="startup">Startup</StyledRegisterOption>
                        <StyledRegisterOption value="investor">Investor</StyledRegisterOption>
                        <StyledRegisterOption value="mentor">Mentor</StyledRegisterOption>
                    </StyledRegisterSelect>


                    <div id="mentorFields">
                        <StyledRegisterLabel for="domain">Domain of Knowledge:</StyledRegisterLabel>
                        <StyledRegisterInput type="text" id="domain" name="domain" />

                        <StyledRegisterLabel for="experience">Experience (years):</StyledRegisterLabel>
                        <StyledRegisterInput type="number" id="experience" name="experience" min="0" />
                    </div>


                    <div id="investorFields">
                        <StyledRegisterLabel for="budget">Investment Budget (₹):</StyledRegisterLabel>
                        <StyledRegisterInput type="number" id="budget" name="budget" min="0" />
                    </div>

                    <StyledButton type="submit">Register</StyledButton>
                </StyledRegisterForm>

                <p>Already have an account? <a href="/login" id="loginLink">Login here</a></p>
            </RegisterContainer>
        </RegisterMainContainer>
    )
}

export default SignUp;