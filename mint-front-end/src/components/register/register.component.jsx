import { useContext, useEffect, useState } from "react";
import { StyledH2, RegisterContainer, RegisterMainContainer, StyledButton, StyledRegisterForm, StyledRegisterInput, StyledRegisterLabel, StyledRegisterOption, StyledRegisterSelect } from "./register.styles";
import { registerWithMint } from "../../utilities/dataAccessLayer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";

const SignUp = () => {
    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [domainOfKnowledge, setDomainOfKnowledge] = useState("");
    const [experience, setExperience] = useState("");
    const [investmentBudget, setInvestmentBudget] = useState("");


    useEffect(() => {
        document.getElementById("mentorFields").style.display = "none";
        document.getElementById("investorFields").style.display = "none";
        switch (role) {
            case 'mentor':
                document.getElementById("mentorFields").style.display = "block";
                break;
            case 'investor':
                document.getElementById("investorFields").style.display = "block";
                break;
            default:
                break;
        }
    }, [role])

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const formData = { username, password, role, experience, domain: domainOfKnowledge, budget: investmentBudget };
        console.log(formData);
        try {
            const isSuccess = registerWithMint(formData);
            console.log(isSuccess);

            if (isSuccess) {
                setCurrentUser({ username, role });
                navigate('/home/' + role);
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }

    }

    return (
        <RegisterMainContainer>
            <RegisterContainer>
                <StyledH2>Register</StyledH2>
                <StyledRegisterForm onSubmit={handleRegisterSubmit}>
                    <StyledRegisterLabel for="username">Username:</StyledRegisterLabel>
                    <StyledRegisterInput onChange={(e) => setUsername(e.target.value)} value={username} type="text" id="username" name="username" required />

                    <StyledRegisterLabel for="password">Password:</StyledRegisterLabel>
                    <StyledRegisterInput onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" name="password" required />

                    <StyledRegisterLabel for="password">Confirm Password:</StyledRegisterLabel>
                    <StyledRegisterInput type="password" id="confirm-password" name="password" required />

                    <StyledRegisterLabel for="role">Register as:</StyledRegisterLabel>
                    <StyledRegisterSelect onChange={(e) => setRole(e.target.value)} id="role" name="role" required>
                        <StyledRegisterOption value="individual">Individual</StyledRegisterOption>
                        <StyledRegisterOption value="startup">Startup</StyledRegisterOption>
                        <StyledRegisterOption value="investor">Investor</StyledRegisterOption>
                        <StyledRegisterOption value="mentor">Mentor</StyledRegisterOption>
                    </StyledRegisterSelect>


                    <div id="mentorFields" >
                        <StyledRegisterLabel for="domain">Domain of Knowledge:</StyledRegisterLabel>
                        <StyledRegisterInput onChange={(e) => setDomainOfKnowledge(e.target.value)} value={domainOfKnowledge} type="text" id="domain" name="domain" />

                        <StyledRegisterLabel for="experience">Experience (years):</StyledRegisterLabel>
                        <StyledRegisterInput onChange={(e) => setExperience(e.target.value)} value={experience} type="number" id="experience" name="experience" min="0" />
                    </div>

                    <div id="investorFields" >
                        <StyledRegisterLabel for="budget">Investment Budget (₹):</StyledRegisterLabel>
                        <StyledRegisterInput onChange={(e) => setInvestmentBudget(e.target.value)} value={investmentBudget} type="number" id="budget" name="budget" min="0" />
                    </div>

                    <StyledButton type="submit">Register</StyledButton>
                </StyledRegisterForm>

                <p>Already have an account? <a href="/login" id="loginLink">Login here</a></p>
            </RegisterContainer>
        </RegisterMainContainer>
    )
}

export default SignUp;