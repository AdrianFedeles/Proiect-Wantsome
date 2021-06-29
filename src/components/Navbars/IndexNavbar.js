import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo2.svg';
// reactstrap components
import {
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	UncontrolledTooltip,
} from 'reactstrap';

function IndexNavbar() {
	const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	React.useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 399 ||
				document.body.scrollTop > 399
			) {
				setNavbarColor('');
			} else if (
				document.documentElement.scrollTop < 400 ||
				document.body.scrollTop < 400
			) {
				setNavbarColor('navbar-transparent');
			}
		};
		window.addEventListener('scroll', updateNavbarColor);
		return function cleanup() {
			window.removeEventListener('scroll', updateNavbarColor);
		};
	});
	return (
		<>
			{collapseOpen ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle('nav-open');
						setCollapseOpen(false);
					}}
				/>
			) : null}
			<Navbar
				className={'fixed-top  fAleg ' + navbarColor}
				expand="lg"
				color="info"
			>
				<Container>
					<div className="navbar-translate">
						<NavbarBrand
							href="#"
							id="navbar-brand"
							style={{
								width: '120px',
							}}
						>
							<img src={logo} alt="logo"></img>
						</NavbarBrand>
						<UncontrolledTooltip target="#navbar-brand" placement="left">
							Designed by EQUITY TECHNOLOGY .
						</UncontrolledTooltip>
						<button
							className="navbar-toggler navbar-toggler"
							onClick={() => {
								document.documentElement.classList.toggle('nav-open');
								setCollapseOpen(!collapseOpen);
							}}
							aria-expanded={collapseOpen}
							type="button"
						>
							<span className="navbar-toggler-bar top-bar"></span>
							<span className="navbar-toggler-bar middle-bar"></span>
							<span className="navbar-toggler-bar bottom-bar"></span>
						</button>
					</div>
					<Collapse
						className="justify-content-end"
						isOpen={collapseOpen}
						navbar
					>
						<Nav navbar>
							<NavItem>
								<NavLink
									id="webDesignButton"
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('programareWeb').scrollIntoView();
									}}
								>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<p>Programare Web</p>
									</div>
								</NavLink>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target="webDesignButton"
								>
									-Creare Aplicatii Web Personalizate
								</UncontrolledTooltip>
							</NavItem>
							<NavItem>
								<NavLink
									id="AplicațiiMobilebButoon"
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('MobilApp').scrollIntoView();
									}}
								>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<p>Aplicații mobile</p>
									</div>
								</NavLink>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target="AplicațiiMobilebButoon"
								>
									Aplicații mobile
								</UncontrolledTooltip>
							</NavItem>
							<NavItem>
								<NavLink
									id="HostingSiMentenantaWebButton"
									href="/#pablo"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById('section-pagination')
											.scrollIntoView();
									}}
								>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<p>Mentenanta Web</p>
									</div>
								</NavLink>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target="HostingSiMentenantaWebButton"
								>
									Gazduire Web
								</UncontrolledTooltip>
							</NavItem>

							<NavItem>
								<NavLink
									id="PromovareOnlineButton"
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById('Promovare_Online_BTN_NAv')
											.scrollIntoView();
									}}
								>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<p>Gazduire Online</p>
									</div>
								</NavLink>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target="PromovareOnlineButton"
								>
									Prompomovare Online
								</UncontrolledTooltip>
							</NavItem>
							<NavItem>
								<NavLink
									id="DezvoltareSistemCRMButton"
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('Portofoliul').scrollIntoView();
									}}
								>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<p>Portofoliu</p>
									</div>
								</NavLink>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target="DezvoltareSistemCRMButton"
								>
									Portofoliu
								</UncontrolledTooltip>
							</NavItem>
							<NavItem>
								<NavLink
									id="DezvoltareSistemERPButton"
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('Echipa_Noastra').scrollIntoView();
									}}
								>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<p>Echipa noastra</p>
									</div>
								</NavLink>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target="DezvoltareSistemERPButton"
								>
									Echipa noastra
								</UncontrolledTooltip>
							</NavItem>
							<NavItem>
								<NavLink
									id="Informatii"
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('Footerinfo').scrollIntoView();
									}}
								>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<p>Info</p>
									</div>
								</NavLink>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target="Informatii"
								>
									Informatii despre Noi
								</UncontrolledTooltip>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default IndexNavbar;
