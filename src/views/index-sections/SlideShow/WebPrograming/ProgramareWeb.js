import React from 'react';
import './ProgramareWeb.css';
import { Link } from 'react-router-dom';

// reactstrap components
import { UncontrolledTooltip, Button, Container, Row, Col } from 'reactstrap';

// core components

function ProgramareWeb() {
	return (
		<>
			<div className="section section-basic" id="programareWeb">
				<Container className="CenterContainer">
					<Row>
						<Col md="12" className="Container_section_ProgramareWeb">
							<div>
								<p className="Title_Programare_Web_Section fAleg">
									Programare Web
								</p>
								<div className="Container_Buttons_Programare_Web_Section">
									<div className="hero-images-container  Hero_Image_Container_Web_Design">
										<img
											alt="..."
											src={require('assets/img/pc2.png').default}
										></img>
									</div>
									<div class="Programare_PHP_Section">
										<Button
											id="PHPButon"
											className="btn-round"
											color="info"
											type="button"
										>
											<Link
												to={{
													pathname: '/php',
												}}
											>
												<div className="PHP_Text_Subtitle_In_Button_Programare_Web ">
													<p className="PHP_Text_Sub_Subtitle_In_Button_Programare_Web fAleg">
														<i class="fab fa-php">-</i>PHP
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="left"
											target="PHPButon"
										>
											Web PHP: Realizam Aplicatii Web cu Limbajul de programare
											PHP
										</UncontrolledTooltip>
										<Button
											id="LARAVEL"
											className="btn-round"
											color="info"
											type="button"
										>
											<Link
												to={{
													pathname: '/laravel',
												}}
											>
												<div className="Laravel_Text_Subtitle_In_Button_Programare_Web">
													<p className="Laravel_Text_Sub_Subtitle_In_Button_Programare_Web fAleg">
														<i class="fab fa-laravel">-</i>LARAVEL
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="right"
											target="LARAVEL"
										>
											LARAVEL: Realizam Aplicatii Web cu framework PHP numit
											Laravel
										</UncontrolledTooltip>
										<Button
											id="ReactJsButon"
											className="btn-round"
											color="info"
											type="button"
										>
											<Link
												to={{
													pathname: '/react',
												}}
											>
												<div className="React_Text_Subtitle_In_Button_Programare_Web">
													<p className="React_Text_Sub_Subtitle_In_Button_Programare_Web fAleg">
														<i class="fab fa-react">-</i>React JS
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="left"
											target="ReactJsButon"
										>
											React: Realizam Aplicatii Web cu framework / libraria
											React Js
										</UncontrolledTooltip>
										<Button
											id="AngulatButton"
											className="btn-round"
											color="info"
											type="button"
										>
											<Link
												to={{
													pathname: '/angular',
												}}
											>
												<div className="Angular_Text_Subtitle_In_Button_Programare_Web">
													<p className="Angular_Text_Sub_Subtitle_In_Button_Programare_Web fAleg">
														<i class="fab fa-angular">-</i>Angular
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="right"
											target="AngulatButton"
										>
											Angular: Realizam Aplicatii Web cu framework Angular
										</UncontrolledTooltip>
									</div>
								</div>
							</div>
							{/* here is finish the buttons form programare Web */}
							<div>
								<p className="Title_Web_Designer_Section fAleg">Design Web </p>
								<div className="Container_Buttons_Web_Design_Section">
									<div className="hero-images-container-1 Hero_Image_Container_Web_Design1">
										<img
											alt="..."
											src={require('assets/img/web design.png').default}
										></img>
									</div>
									<div class="Web_Design_Section">
										<Button
											id="UiUxDesignButton"
											className="btn-round"
											color="info"
											type="button"
										>
											<Link
												to={{
													pathname: '/uiux',
												}}
											>
												<div className="Ui_Ux_Design_Text_Subtitle_In_Button_Web_Design">
													<p className="Ui_Ux_Design_Text_Sub_Subtitle_In_Button_Web_Design fAleg">
														<i class="fas fa-edit">-</i>UI/UX Design
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="left"
											target="UiUxDesignButton"
										>
											UI/UX Design: Realizam Templates, Design User experience,
											Design User interface
										</UncontrolledTooltip>
										<Button
											id="GRAFICĂ_LOGOButton"
											className="btn-round"
											color="info"
											type="button"
										>
											<Link
												to={{
													pathname: '/grafica',
												}}
											>
												<div className="GRAFICĂ_LOGO_Text_Subtitle_In_Button_Web_Design">
													<p className="GRAFICĂ_LOGO_Text_Sub_Subtitle_In_Button_Web_Design fAleg">
														<i class="fas fa-palette">-</i>LOGO
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="right"
											target="GRAFICĂ_LOGOButton"
										>
											GRAFICĂ LOGO: Realizam Logo-uri, Desene digitale,
											Procesarea digitala imaginilor.
										</UncontrolledTooltip>
										<Button
											id="GRAFICĂ_ILUSTRATIIButton"
											className="btn-round"
											color="info"
											type="button"
										>
											<Link
												to={{
													pathname: '/ilustratii',
												}}
											>
												<div className="GRAFICĂ_ILUSTRA_Text_Subtitle_In_Button_Web_Design">
													<p className="GRAFICĂ_ILUSTRA_Text_Sub_Subtitle_In_Button_Web_Design fAleg">
														<i class="fas fa-file-image">-</i>ILUSTRATII
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="left"
											target="GRAFICĂ_ILUSTRATIIButton"
										>
											Ilustratii: Realizam Info-Grafice, Bannere.
										</UncontrolledTooltip>
										<div className="spatiereButton"></div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default ProgramareWeb;
