import React from 'react'
import Button from '../button/button.component'
import { FeatureSubHero, Flowchart, FlowchartSubTopic, StartupFeatureContainer, FeatureStartupOverlay } from './startup-features.styles'
import LeanCanvasIcon from "../../asset/lean_canvas.jpg"
import ContactUs from '../contact/contact.component'
import Footer from '../footer/footer.component'

const StartupFeature = () => {
    return (
        <StartupFeatureContainer>
            <FeatureSubHero>
                <h2>Fueling Startup Growth</h2>
                <p>Unlock the potential of your startup with the right tools, mentorship, and funding. We provide the support you need to transform your ideas into thriving businesses.</p>
            </FeatureSubHero>

            <Flowchart>
                <FlowchartSubTopic>
                    <FeatureStartupOverlay></FeatureStartupOverlay>
                    <div style={{
                        zIndex: 10
                    }}>
                        <h2 class="tools-header">Translate ideas into process diagram</h2>
                        <p class="tools-para">Create a visual representation of steps, workflows, or key decision points to
                            enhance clarity, streamline processes, and improve overall communication and understanding
                            within teams or organizations.</p>
                        <Button content={"Explore"} styles={{ background: 'white', color: 'black' }} />

                    </div>

                </FlowchartSubTopic>

            </Flowchart>

            <FeatureSubHero>
                <h2>Build Ideas, Transform into Business</h2>
                <p>Turning your innovative concepts into successful, thriving ventures.</p>
            </FeatureSubHero>

            <Flowchart style={{
                background: 'url(' + LeanCanvasIcon + ')',
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover"
            }}>
                <FlowchartSubTopic>
                    <FeatureStartupOverlay></FeatureStartupOverlay>
                    <div style={{
                        zIndex: 10
                    }}>
                        <h2 class="lean-header">Effortlessly generate a LEAN canvas for success</h2>
                        <p class="lean-para">Streamline your business planning with a clear, concise<br /> framework that
                            identifies key areas for growth and innovation.</p>
                        <Button content={"Explore"} />
                    </div>

                </FlowchartSubTopic>
            </Flowchart>

            <ContactUs />
            <Footer />

        </StartupFeatureContainer>
    )
}

export default StartupFeature