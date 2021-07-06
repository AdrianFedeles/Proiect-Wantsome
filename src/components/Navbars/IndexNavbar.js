import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo2.svg';
import '../Navbars/IndexNavbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

//Typewriter
import Typewriter from 'typewriter-effect';
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
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
} from 'reactstrap';

// Se schimba chestii din nav bar de pe src/asets/scss/new-ui-kit/_navbar.scss/.........
// Schimbarea culorii si transparent de inceput din standby  NAV-BAR se face src/asets/scss/new-ui-kit/_navbar.scss/linia 140-142 (&.navbar-transparent)
// Schimbarea culorii si transparent de dupa standby NAV-BAR se face src/asets/scss/new-ui-kit/_navbar.scss/linia 184-186 (.bg-info)
// Schimbarea font butoane de la src/asets/scss/new-ui-kit/_navbar.scss/linia 16-23 (p)
// Schimbari ale containerului se face din

function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [transparent, setTransparent] = React.useState(
        'info_dropdown_transparent'
    );
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor('');
                setTransparent('info_dropdown');
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor('navbar-transparent');
                setTransparent('info_dropdown_transparent');
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
                    id='bodyClick'
                    onClick={() => {
                        document.documentElement.classList.toggle('nav-open');
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar
                className={'fixed-top  fAleg ' + navbarColor}
                expand='lg'
                color='info'
            >
                <Container className='nav-container'>
                    <div className='navbar-translate'>
                        <NavbarBrand
                            href='#'
                            id='navbar-brand'
                            style={{
                                width: '120px',
                            }}
                        >
                            <img data-aos='zoom-in' src={logo} alt='logo'></img>
                        </NavbarBrand>
                        <UncontrolledTooltip
                            target='#navbar-brand'
                            placement='left'
                        >
                            DESCRIERE LOGO FORMA .
                        </UncontrolledTooltip>
                        <button
                            className='navbar-toggler navbar-toggler'
                            onClick={() => {
                                document.documentElement.classList.toggle(
                                    'nav-open'
                                );
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type='button'
                        >
                            <span className='navbar-toggler-bar top-bar'></span>
                            <span className='navbar-toggler-bar middle-bar'></span>
                            <span className='navbar-toggler-bar bottom-bar'></span>
                        </button>
                    </div>
                    <Collapse
                        className='justify-content-end'
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar>
                            <NavItem>
                                <NavLink
                                    id='webDesignButton'
                                    href='#pablo'
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById('SoftwareCostum')
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
                                        <p data-aos='zoom-in'>
                                            <Typewriter
                                                className='Typewriter__cursor Liniutza'
                                                onInit={typewriter => {
                                                    typewriter
                                                        .typeString(
                                                            'Software Custom'
                                                        )
                                                        .pauseFor(2000)
                                                        .start();
                                                }}
                                            />
                                        </p>
                                    </div>
                                </NavLink>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement='bottom'
                                    target='webDesignButton'
                                >
                                    Aplicatii Mobile
                                    <br />
                                    Aplicatii Web
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    id='AplicațiiMobilebButoon'
                                    href='#pablo'
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById('ServiciiCloud')
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
                                        <p data-aos='zoom-in'>
                                            <Typewriter
                                                style={{}}
                                                onInit={typewriter => {
                                                    typewriter
                                                        .typeString(
                                                            'Servicii Cloud'
                                                        )
                                                        .pauseFor(2000)
                                                        .start();
                                                }}
                                            />
                                        </p>
                                    </div>
                                </NavLink>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement='bottom'
                                    target='AplicațiiMobilebButoon'
                                >
                                    Consultanta Cloud
                                    <br />
                                    Implementare Cloud
                                    <br />
                                    Migrare Cloud
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    id='HostingSiMentenantaWebButton'
                                    href='/#pablo'
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById('ServiciiIt')
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
                                        <p data-aos='zoom-in'>
                                            <Typewriter
                                                style={{}}
                                                onInit={typewriter => {
                                                    typewriter
                                                        .typeString(
                                                            'Servicii IT'
                                                        )
                                                        .pauseFor(2000)
                                                        .start();
                                                }}
                                            />
                                        </p>
                                    </div>
                                </NavLink>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement='bottom'
                                    target='HostingSiMentenantaWebButton'
                                >
                                    Servicii Help Desk
                                    <br />
                                    Administrare Sisteme IT
                                    <br />
                                    Management Retea
                                    <br />
                                    Solutii Virtualizare
                                    <br />
                                    Hostare Cloud
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    id='DezvoltareSistemCRMButton'
                                    href='#pablo'
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById('Portofoliul')
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
                                        <p data-aos='zoom-in'>Protofoliu</p>
                                    </div>
                                </NavLink>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement='bottom'
                                    target='DezvoltareSistemCRMButton'
                                >
                                    TEXT5 DESCRIERE
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    id='DezvoltareSistemERPButton'
                                    href='#pablo'
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById('Echipa_Noastra')
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
                                        <p data-aos='zoom-in'>Echipa Noastra</p>
                                    </div>
                                </NavLink>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement='bottom'
                                    target='DezvoltareSistemERPButton'
                                >
                                    TEXT6 DESCRIERE
                                </UncontrolledTooltip>
                            </NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    aria-haspopup={true}
                                    caret
                                    color='default'
                                    nav
                                    data-aos='zoom-in'
                                >
                                    <p>Info</p>
                                </DropdownToggle>
                                <DropdownMenu className={transparent}>
                                    <DropdownItem to='/landing-page' tag={Link}>
                                        AboutUs
                                    </DropdownItem>
                                    <DropdownItem to='/terms' tag={Link}>
                                        Termesi si Conditii
                                    </DropdownItem>
                                    <DropdownItem to='/gdpr' tag={Link}>
                                        GDPR Policy
                                    </DropdownItem>
                                    <DropdownItem to='/cookie' tag={Link}>
                                        Cookie Policy
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default IndexNavbar;
