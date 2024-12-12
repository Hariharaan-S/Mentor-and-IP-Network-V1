import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import {
    RegisterContainer,
    RegisterMainContainer,
    StyledButton,
    StyledRegisterInput,
    StyledRegisterLabel,
    StyledRegisterOption,
    StyledRegisterSelect
} from "./register.styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { registerWithMint } from "../../utilities/dataAccessLayer";
import { TextareaAutosize } from "@mui/material";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const formData = { profileImage, password, role };
        console.log(formData);
        try {
            const isSuccess = registerWithMint(formData);
            if (isSuccess) {
                setCurrentUser({ profileImage, role });
                navigate("/home/" + role);
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });

    const renderPageContent = () => {
        switch (currentPage) {
            case 1:
                return (
                    <RegisterContainer style={{ display: "flex", flexDirection: "row", columnGap: "2rem" }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: ".7rem",
                            width: "100vh",
                        }}>
                            <StyledRegisterLabel htmlFor="profileImage">Upload Profile Photo:</StyledRegisterLabel>
                            <Button
                                component="label"
                                variant="contained"
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload files
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={(event) => setProfileImage(event.target.files)}
                                    multiple
                                />
                            </Button>

                            <StyledRegisterLabel htmlFor="age">Age:</StyledRegisterLabel>
                            <StyledRegisterInput
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="number"
                                id="age"
                                name="age"
                                required
                            />

                            <StyledRegisterLabel htmlFor="occupation">Occupation:</StyledRegisterLabel>
                            <StyledRegisterInput type="text" id="occupation" name="occupation" required />

                            <StyledRegisterLabel htmlFor="interests">Interests:</StyledRegisterLabel>
                            <StyledRegisterSelect
                                onChange={(e) => setRole(e.target.value)}
                                id="role"
                                name="role"
                                required
                            >
                                <StyledRegisterOption value="government">Government</StyledRegisterOption>
                                <StyledRegisterOption value="manufacturing">Manufacturing</StyledRegisterOption>
                                <StyledRegisterOption value="market-place">Market Place</StyledRegisterOption>
                                <StyledRegisterOption value="mobile">Mobile</StyledRegisterOption>
                                <StyledRegisterOption value="online-aggregator">Online Aggregator</StyledRegisterOption>
                                <StyledRegisterOption value="consulting">Consulting</StyledRegisterOption>
                                <StyledRegisterOption value="engineering">Engineering</StyledRegisterOption>
                                <StyledRegisterOption value="others">Others</StyledRegisterOption>
                            </StyledRegisterSelect>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: ".7rem",
                            width: "100vh",
                            position: "relative",
                            marginTop: "4.7rem"
                        }}>
                            <StyledRegisterLabel htmlFor="display-name">Display Name:</StyledRegisterLabel>
                            <StyledRegisterInput type="text" id="display-name" name="display-name" required />

                            <StyledRegisterLabel htmlFor="describe">Describe yourself:</StyledRegisterLabel>
                            <TextareaAutosize
                                minRows={3}
                                placeholder="Describe yourself.."
                            ></TextareaAutosize>

                            <Button onClick={() => setCurrentPage(2)}>Next</Button>
                        </div>
                    </RegisterContainer>
                );

            case 2:
                return (
                    <RegisterContainer style={{ display: "flex", flexDirection: "column", rowGap: ".8rem" }}>
                        <StyledRegisterLabel htmlFor="terms">Terms and Conditions</StyledRegisterLabel>
                        <p>
                            This official website of "MINT" has been created to provide information to the general public. The documents and information displayed in this website are for reference purposes only and does not purport to be a legal document. MINT does not warrant the accuracy or completeness of the information, text, graphics, links or other items contained within the portal.
                        </p>
                        <div>
                            <StyledRegisterInput type="checkbox" id="t_accept" name="t_accept" required /> I Agree to Terms & Conditions
                        </div>

                        <Button onClick={() => setCurrentPage(1)}>Previous</Button>
                        <StyledButton type="submit">Register</StyledButton>
                    </RegisterContainer>
                );

            default:
                return null;
        }
    };

    return (
        <RegisterMainContainer>
            <form onSubmit={handleRegisterSubmit}>{renderPageContent()}</form>
        </RegisterMainContainer>
    );
};

export default SignUp;
