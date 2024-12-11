import React, { useContext } from 'react';
import { SyledHome } from './home.styles'
import Features from '../../components/features/features.component';
import Services from '../../components/services-component/services.component';
import ContactUs from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';
import HeroContainer from '../../components/hero-container/hero-container.component';
import { UserContext } from '../../context/user.context';
import LanguageSelector from '../../components/language-selector/language-selector.component';
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t } = useTranslation()
    const { currentUser } = useContext(UserContext);
    const userRole = currentUser.role;

    return (
        <SyledHome id='home'>

            <HeroContainer />
            {userRole && <Features type={userRole} />}
            <LanguageSelector />
            <h1>{t("greeting")}</h1>
            <Services />
            <ContactUs />
            <Footer />
        </SyledHome>
    )
}

export default Home;