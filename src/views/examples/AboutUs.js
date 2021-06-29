import React from 'react';
import './AboutUs.css';
// reactstrap components
import { Button, UncontrolledTooltip, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/FormContact/contactForm';

// core components

function AboutUs() {
	return (
		<>
			<div className="wrapper">
				<div className="page-header page-header-small">
					<div
						className="page-header-image"
						style={{
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundImage:
								'url(' + require('assets/img/AboutUs2.webp').default + ')',
						}}
					></div>
					<div className="content-center">
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
						<h1 className="title fAleg">About Us</h1>
					</div>
				</div>
				<div className="section section-about-us">
					<Container className="aboutUsContainer">
						<Row>
							<Col className="ml-auto mr-auto text-center" md="8">
								<h2 className="About_Us_Titlu fAleg">
									Noi, suntem o echipă de profesioniști dedicați.
								</h2>
							</Col>
						</Row>
						<h3 className="About_Us_SubTitlu_h3 fAleg">
							<span className="About_Us_Spatiere_Span"></span>Facem tot ceea ce
							ni se cere, legat de ceea ce facem, chiar și in plus, cât să
							surptindem placut clientul.
						</h3>
						<h5 className="About_Us_SubTitlu_h5 fAleg">MISIUNEA NOASTRĂ:</h5>
						<h3 className="About_Usi_Content_TXt_h3 fAleg">
							<span className="About_Us_Spatiere_Span"></span>Pornind de la
							citatul scriitorului Rus{' '}
							<span className="About_Us_Evidentiere_cuvinte_Span">
								Fedor Mihailovici Dostoievski
							</span>{' '}
							(<q>Fiodor Dostoievsk</q>) <q>Frumusețea va salva lumea</q>, Noi
							nu știm daca v-om reuși să salvăm lumea, dar cu siguranță o
							înfrumusețăm. Suntem înconjurați de talente și idei frumoase; Idei
							ce ajung în protectele noastre și ușor poate chiar schimbăm lumea.
							Echipa este in continu` creștere, ni se alătură cei mai frumoși și
							talentați oameni.{' '}
							<span className="About_Us_Evidentiere_cuvinte_Span">
								Relevanța
							</span>{' '}
							pe piața I.T. este ceea ce ne călăuzește. Ne lasăm condusi de vaul
							tehnologic, înavațăm și asimilăm tot ce se poate și cât se poate.
							În echipa avem, studenți, artiști teatrali, plastici și grafici.
							În echipă avem și ingineri specializați pe tehnologii I.T. Te
							așteptăm să ne cunoști, să ne împărtășești gandurile și
							experietele, să îți lași imaginația pe mâinile noastre. Noi facem
							ca visul tău să devină realitate. <br />
						</h3>
						<h3 className="About_Us_SubTitlu">
							<span className="About_Us_Spatiere_Span">
								<span
									className="About_Us_Evidentiere_cuvinte_Span fAleg"
									style={{
										backgroundColor: 'transparent',
										display: 'flex',
										justifyContent: 'center',
									}}
								>
									TE ASTEPTAM.
								</span>
							</span>
						</h3>

						{/* <ContactForm></ContactForm> */}
					</Container>
				</div>
			</div>
		</>
	);
}

export default AboutUs;
