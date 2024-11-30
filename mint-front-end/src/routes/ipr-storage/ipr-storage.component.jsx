import React from "react";
import HeroContainer from "../../components/hero-container/hero-container.component";
import UploadDocument from "../../components/upload-document/upload-document.component";
import ContactUs from "../../components/contact/contact.component";
import Footer from "../../components/footer/footer.component";

const IprStorage = () => {
    return (
        <div>
            <HeroContainer heroContent={{
                "main": "Intellectual Properties, patents and more.",
                "sub-main": "Discover your IP, patents and a lot at one place"
            }} styles={{ textAlign: "center" }} otherStyles={{ paddingLeft: "4rem", paddingRight: "4rem" }} />

            <UploadDocument />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default IprStorage;