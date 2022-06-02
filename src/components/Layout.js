import React from "react"
import Header from "./Header";
import PageTitle from "./PageTitle";
import Slider from "./Slider";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

import { Container } from "reactstrap";
import './style.css';

const Layout = ({ children, pageTitle, hasSlider = false, slides = [] }) => {
    return (
        <main>
            <Container>
                <Header />
            </Container>
            {
                !!pageTitle && (<PageTitle title={pageTitle} />)
            }

            {
                hasSlider && (<Slider list={slides} />)
            }

            <Container>
                {children}
            </Container>
            <Container>
                {/* <ContactForm /> */}

            </Container>
            <Container fluid className="bg-light-blue py-5">
                <Container className="pt-md-5">
                    {/* <div className="p-5">
                        <div className="py-5"></div>
                    </div> */}

                    <Footer />
                </Container>

            </Container>

        </main>


    )
}


export default Layout;
