import React, { useContext } from 'react';
import { SyledHome } from './home.styles'
import Features from '../../components/features/features.component';
import Services from '../../components/services-component/services.component';
import ContactUs from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';
import HeroContainer from '../../components/hero-container/hero-container.component';
import { UserContext } from '../../context/user.context';


const Home = () => {
    const { currentUser } = useContext(UserContext);
    const userRole = currentUser.role;
    const featureCard = {
        "individual": [["Unified IP Repository", "Access and manage a comprehensive collection of patents and intellectual property records in one place.", "/home/iprManagement"],
        ["Interactive Chatbot", "Engage with our AI-powered chatbot to verify patent status and get personalized insights.", "/home/patent"],
        ["Find mentors,investors and more.", "Get your ideas into action.", "/home/forum"]],
        "startup": [["Unified IP Repository", "Access and manage a comprehensive collection of patents and intellectual property records in one place.", "/home/iprManagement"],
        ["Interactive Chatbot", "Engage with our AI-powered chatbot to verify patent status and get personalized insights.", "/home/patent"],
        ["Boosting Startups", "If chatbot signals green, proceed with register", "/home/startup"],
        ["Find mentors,investors and more.", "Get your ideas into action.", "/home/forum"]]
    }
    return (
        <SyledHome id='home'>
            <HeroContainer heroContent={{
                "main": "Comprehensive Patent Solutions for Innovators and Startups.",
                "sub-main": "Discover MINT's unified platform offering seamless patent verification, IP management, and collaboration tools. From patent checks to connecting with mentors and investors, we provide all the resources you need to drive your innovation forward."
            }} />
            {userRole && <Features items={featureCard[userRole]} />}

            <Services />
            <ContactUs />
            <Footer />
        </SyledHome>
    )
}

export default Home;