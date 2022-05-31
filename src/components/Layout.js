import React from "react"
import Header from "./Header";
import PageTitle from "./PageTitle";
import Slider from "./Slider";

import { Container } from "reactstrap";
import './style.css';

const Layout = ({ children, pageTitle, hasSlider=true }) => {
    return (
        <main>
            <Container>
                <Header />
            </Container>
            {
                !!pageTitle && (<PageTitle title={pageTitle} />)
            }

            {
                hasSlider && (<Slider />)    
            }

            <Container>
                {children}
            </Container>

        </main>

    )
}


export default Layout;
