import React from "react";
import {
	Collapse, Nav, NavbarToggler, NavItem, NavLink, Row, Col, Navbar,
	List, ListGroupItem, ListGroup
} from "reactstrap";
import { useHeaderItems } from '../hooks';
import { Icon } from '.';
import { Link, withPrefix } from 'gatsby';


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

const Footer = () => {
	const { logo, intro, nav, social, copyright } = useHeaderItems();


	return (

		<>

			<Row className="pb-5">
				<Col sm="12" md="4">
					<Link to={logo.link} >
						<img height={'56px'} src={withPrefix(logo.image)} />
					</Link>
					<p>this is site description about how we build it and deploye it at the times.</p>
				</Col>

				<Col sm="12" md="4">
					<Row className="justify-content-end">
						{
							intro.map(({ text, link = "", icon, title, iconType = 'fas' }, index) => {
								return (
									<Col className=" intro-link" md="12" key={index}>

										<Link to={link} className="link-dark text-decoration-none">
											<Row>
												<Col md="auto">
													<Icon classNames="text-warning" type={iconType}>
														{icon}
													</Icon>


												</Col>
												<Col className="pl-0">
													<span>{title}</span>
													<div className="text-secondary">
														{text}
													</div>

												</Col>

											</Row>
										</Link>
									</Col>
								)
							})
						}
					</Row>
				</Col>

				<Col sm="12" md="4">
					<h5>Quick Links</h5>
					<List type="unstyled">

						{
							nav.map(({ text, link = "#" }, index) => {
								return (
									<li key={index}>
										<Link className="link-dark text-decoration-none" href={link}>
											{text}
										</Link>
									</li>
								)
							})
						}
					</List>
				</Col>
			</Row>

			<Row className="border-top pt-4">
				<Col>
					<div className="text-start">
						{copyright}
					</div>
				</Col>
				<Col>
					<Nav className="justify-content-end">

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
					</Nav>
				</Col>

			</Row>


		</>

	)
}

export default Footer;
