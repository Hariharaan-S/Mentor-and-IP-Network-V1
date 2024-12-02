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
        "individual": [
            {
                title: "Unified IP Repository",
                description: "Access and manage a comprehensive collection of patents and intellectual property records in one place.",
                route: "/home/iprManagement",
            },
            {
                title: "Interactive Chatbot",
                description: "Engage with our AI-powered chatbot to verify patent status and get personalized insights.",
                route: "/home/patent",
            },
            {
                title: "Find mentors, investors and more.",
                description: "Get your ideas into action.",
                route: "/home/forum",
            },
        ],
        "startup": [
            {
                title: "Unified IP Repository",
                description: "Access and manage a comprehensive collection of patents and intellectual property records in one place.",
                route: "/home/iprManagement",
            },
            {
                title: "Interactive Chatbot",
                description: "Engage with our AI-powered chatbot to verify patent status and get personalized insights.",
                route: "/home/patent",
            },
            {
                title: "Boosting Startups",
                description: "If chatbot signals green, proceed with registration.",
                route: "/home/startup",
            },
            {
                title: "Find mentors, investors and more.",
                description: "Get your ideas into action.",
                route: "/home/forum",
            }]
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