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

    return (
        <SyledHome id='home'>

            <HeroContainer />
            {userRole && <Features type={userRole} />}

            <Services />
            <ContactUs />
            <Footer />
        </SyledHome>
    )
}

export default Home;