import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo2.svg';
import './nav_for_about_terms_template.css';
// reactstrap components
import {
	UncontrolledTooltip,
	NavbarBrand,
	Button,
	Navbar,
	Container,
} from 'reactstrap';

// core components

function NavbarsSeparated() {
	return (
		<>
			<div className="section section-navbars nav_for_about_terms_template_container">
				<div id="navbar">
					<div className="navigation-example">
						<Navbar
							className="bg-primary nav_for_about_terms_template_content"
							expand="lg"
						>
							<Container>
								<NavbarBrand
									to="/"
									tag={Link}
									id="navbar-brand"
									style={{
										width: '120px',
									}}
								>
									<img src={logo} alt="logo"></img>
								</NavbarBrand>
								<div className="navbar-translate">
									<Button
										id="GoHome"
										color="info"
										type="button"
										style={{
											width: '15em',
											height: '3em',
											fontSize: 'larger',
											backgroundColor: '#115081',
											margin: '5px',
										}}
									>
										<Link
											style={{
												fontSize: '30px',
												fontWeight: 'bolder',
												color: 'white',
												alignItems: 'center',
												display: 'flex',
												justifyContent: 'center',
												textIndent: '5px',
											}}
											to="/"
										>
											<span className=" fAleg"> Go Home</span>
										</Link>
									</Button>
									<UncontrolledTooltip
										delay={0}
										placement="left"
										target="GoHome"
										style={{ fontSize: '30px' }}
									>
										Go Home
									</UncontrolledTooltip>
								</div>
							</Container>
						</Navbar>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavbarsSeparated;
