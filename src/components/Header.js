import React from "react";
import {
	Collapse, Nav, NavbarToggler, NavItem, NavLink, Row, Col, Navbar,

} from "reactstrap";
import { useHeaderItems } from '../hooks';
import { Icon } from '../components';
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

const Header = () => {
	const { logo, intro, nav = [], social } = useHeaderItems();


	return (

		<>

			<Row className="pt-5 pb-2 border-bottom">
				<Col md="3">
					<Link to={logo.link} >
						<img height={'95px'} src={withPrefix(logo.image)} />
					</Link>
				</Col>
				<Col md="9">
					<Row className="justify-content-end">
						{
							intro.map(({ text, link, icon, title, iconType = 'fas' }, index) => {
								return (
									<Col className="py-md-2 intro-link" xs="auto" md="3" key={index}>

										<Link to={link} className="link-secondary text-decoration-none">
											<Row>
												<Col md="auto">
													<Icon classNames="text-warning" type={iconType}>
														{icon}
													</Icon>


												</Col>
												<Col className="pl-0 d-none d-sm-block">
													<h5>{title}</h5>

													{text}

												</Col>

											</Row>
										</Link>
									</Col>
								)
							})
						}
					</Row>
				</Col>


			</Row>
			{(nav.length > 1) && (<Row className="pb-md-2">

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
											<Link className="nav-link" to={link} >
												{text}
											</Link>

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
			</Row>)}
		</>

	)
}

export default Header;
