import React from "react";
import HeroContainer from "../../components/hero-container/hero-container.component";
import Button from "../../components/button/button.component";
import ChatComponent from "../../components/chatbot/chatbot.component";
import ProcessPatent from "../../components/patentprocess/patentprocess.component";
import PrepareImage from "../../asset/prepare.jpg"
import AskBotImage from "../../asset/askchatbot.jpg"
import ProceedImage from "../../asset/proceed.jpg"
import SuccessImage from "../../asset/success.jpg"
import { FeatureContainer, FeatureSubTitle, FeatureTitle } from "../../components/features/features.styles";
import Services from "../../components/services-component/services.component";
import Footer from "../../components/footer/footer.component";
import ContactUs from "../../components/contact/contact.component";

const Patent = () => {
    return (
        <div>
            <HeroContainer heroContent={{
                "main": "Patent check, funding, mentorship.",
                "sub-main": "Effortlessly verify the authenticity of patents and streamline your innovation process with our advanced Patent Check Tool. Simplify your research, ensure compliance, and move forward with confidence on your journey to success."
            }} otherStyles={{
                width: "40%",
                marginLeft: "-44rem"
            }} children={[<Button content={"Chat Now"} styles={{
                marginLeft: "2rem"
            }} />, <ChatComponent />]} />
            <FeatureContainer>
                <FeatureSubTitle>Register your patent now!</FeatureSubTitle>
                <FeatureTitle>How to Register<span style={{ color: "hsl(25, 83%, 53%)" }}>?</span></FeatureTitle>
            </FeatureContainer>

            <ProcessPatent process={[
                {
                    "main": "Prepare your Patent.",
                    "sub": "Get your patents prepared.",
                    "image": PrepareImage
                },
                {
                    "main": "Ask chatbot for validness",
                    "sub": "Ask our chatbot for similar patents.",
                    "image": AskBotImage
                },
                {
                    "main": "Proceed with register",
                    "sub": "If chatbot signals green, proceed with register",
                    "image": ProceedImage
                },
                {
                    "main": "Success! Complete register",
                    "sub": "Congrats! You own your patent.",
                    "image": SuccessImage
                }
            ]} />

            <Services />
            <ContactUs />
            <Footer />

        </div>
    )
}

export default Patent;