import React from 'react';
import { SyledHome, StyledHomeContainer, StyledHomeTitle, StyledHomeData, StyledHomeDescription } from './home.styles'
import Features from '../../components/features/features.component';
import Services from '../../components/services-component/services.component';
import ContactUs from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
    return (
        <SyledHome>
            <StyledHomeContainer>
                <StyledHomeData>
                    <StyledHomeTitle>
                        Comprehensive Patent Solutions for Innovators and Startups.
                    </StyledHomeTitle>
                    <StyledHomeDescription>
                        Discover MINT's unified platform offering seamless patent verification, IP management, and
                        collaboration tools. From patent checks to connecting with mentors and investors, we provide all
                        the resources you need to drive your innovation forward.
                    </StyledHomeDescription>
                </StyledHomeData>
            </StyledHomeContainer>


            <Features items={[["Unified IP Repository", "Access and manage a comprehensive collection of patents and intellectual property records in one place."],
            ["Interactive Chatbot", "Engage with our AI-powered chatbot to verify patent status and get personalized insights."],
            ["Find mentors,investors and more.", "Get your ideas into action."]]} />

            <Services />
            <ContactUs />
            <Footer />
        </SyledHome>
    )
}

export default Home;