import React from "react";
import {
    Collapse, Nav, NavbarToggler, NavItem, NavLink, Row, Col, Navbar,

} from "reactstrap";
import { useHeaderItems } from '../hooks';
import { Icon } from '../components';
import { Link } from 'gatsby';

const getActive = (pathName) => {
    if (typeof window !== 'undefined') {


        if (pathName == '/' && window.location.pathname == '/') {
            return 'active';
        }
        else if (pathName !== '/' && window.location.pathname.includes(pathName)) {
            return 'active';
        }
    }
    return '';
}

const Header = () => {
    const { logo, intro, nav, social } = useHeaderItems();


    return (

        <>

            <Row className="pt-5 pb-3 border-bottom">
                <Col md="3">
                    <Link to={logo.link} >
                        <img height={'56px'} src={logo.image} />
                    </Link>
                </Col>
                <Col md="9">
                    <Row className="justify-content-end">
                        {
                            intro.map(({ text, link, icon, title, iconType = 'fas' }, index) => {
                                return (
                                    <Col xs="12" md="3" key={index}>
                                        <Row>
                                            <Col md="auto">
                                                <Icon classNames="text-warning" type={iconType}>
                                                    {icon}
                                                </Icon>


                                            </Col>
                                            <Col className="pl-0">
                                                <h5>{title}</h5>
                                                <Link to={link} className="link-secondary text-decoration-none">
                                                    {text}
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>


            </Row>
            <Row className="pb-md-2">

                <Navbar

                    expand="md"
                    sticky="top"
                    className="px-0"

                >


                    <NavbarToggler onClick={function noRefCheck() { }} >
                        <Icon>
                            home
                        </Icon>
                    </NavbarToggler>
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >


                            {
                                nav.map(({ text, link = "#" }, index) => {
                                    return (
                                        <NavItem key={index}>
                                            <NavLink href={link}>
                                                {text}
                                            </NavLink>
                                            <div className={`link-bottom ${getActive(link)}`}></div>
                                        </NavItem>
                                    )
                                })
                            }



                        </Nav>

                        {
                            social.map(({ text, link = "#", icon, iconType }, index) => {
                                return (
                                    // <NavItem key={index}>
                                    <NavLink className="px-2" key={index} href={link} title={text}>
                                        <Icon type={iconType}>
                                            {icon}
                                        </Icon>
                                    </NavLink>
                                    // </NavItem>
                                )
                            })
                        }

                    </Collapse>
                </Navbar>
            </Row>
        </>

    )
}

export default Header;
