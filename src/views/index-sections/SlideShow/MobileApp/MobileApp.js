import React from 'react';
import './MobileApp.css';
import { Link } from 'react-router-dom';

// reactstrap components
import { UncontrolledTooltip, Button } from 'reactstrap';

// core components

function MobileApp() {
	return (
		<>
			<div className="section section-navbars">
				<div id="navbar">
					<div
						id="MobilApp"
						className="navigation-example"
						style={{
							display: 'flex',
							flexDirection: 'row-reverse',
							justifyContent: 'center',
							alignItems: 'center',
							flexWrap: 'wrap',
							backgroundImage:
								'url(' + require('assets/img/Mobile_App.webp').default + ')',
						}}
					>
						<div>
							<div>
								<div className="Container_Buttons_Jocuri_Section">
									<div className="hero-images-container  Hero_Image_Container_Jocuri_Mobile">
										<img
											alt="..."
											src={require('assets/img/phone2.png').default}
										></img>
									</div>
									<div class="Jocuri_Section">
										<p className="Title_Jocuri_Mobile_Section fAleg">
											Jocuri Mobile
										</p>
										<Button
											id="JocuriButon"
											className="btn-round"
											color="green"
											type="button"
										>
											<Link
												to={{
													pathname: '/JocuriMobile',
													state: {
														title: 'Jocuri pe Telefon sau Tableta',
													},
												}}
											>
												<div className="Jocuri_Mobil_Text_Subtitle_In_Button_Programare_Web">
													<p className="Jocuri_Mobile_Sub_Subtitle_In_Button_Programare_Web fAleg">
														<i class="fas fa-gamepad"></i>
														-Jocuri Mobile
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="right"
											target="JocuriButon"
										>
											Jocuri Mobile: Realizam Jocuri pe Mobil la comanda.
										</UncontrolledTooltip>
										<Button
											id="Realitate_VirtualaButon"
											className="btn-round"
											color="green"
											type="button"
										>
											<Link
												to={{
													pathname: '/VR',
													state: {
														title:
															'SOFTWARE PERSONALIZAT pentru Realitate Virtuala',
													},
												}}
											>
												<div className="Realitate_Virtuala_Text_Subtitle_In_Button_Programare_Web">
													<p className="Realitate_Virtuala_Subtitle_In_Button_Programare_Web fAleg">
														<i class="fas fa-vr-cardboard"></i>
														-V.R.
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="right"
											target="Realitate_VirtualaButon"
										>
											Realitate Virtual: Realizam Jocuri si Aplicatii cu
											Realitate Virtuala.
										</UncontrolledTooltip>
										<Button
											id="Realitate_AugmentataButon"
											className="btn-round"
											color="green"
											type="button"
										>
											<Link
												to={{
													pathname: '/AR',
													state: {
														title:
															'Aplicatii industriale bazate pe realitatea augmentata',
													},
												}}
											>
												<div className="Realitate_Augmentata_Text_Subtitle_In_Button_Programare_Web">
													<p className="Realitate_Augmentata_Subtitle_In_Button_Programare_Web fAleg">
														<i class="fas fa-vr-cardboard"></i>
														-A.R.
													</p>
												</div>
											</Link>
										</Button>
										<UncontrolledTooltip
											delay={0}
											placement="right"
											target="Realitate_AugmentataButon"
										>
											Realitate Augmentata: Realizam Jocuri si Aplicatii cu
											Realitate Augmentata.
										</UncontrolledTooltip>
									</div>
								</div>
							</div>
						</div>

						<div className="Container_Buttons_Aplicatii_Mobile_Section">
							<div class="Sanatate_Section">
								<p className="Title_Aplicatii_Mobile_Section fAleg">
									Aplicatii Mobile
								</p>
								<Button
									id="Medicale_Button"
									className="btn-round"
									color="info"
									type="button"
								>
									<Link
										to={{
											pathname: '/Medicale',
											state: {
												title: 'Aplicatii pentru monitorizare a pacientilor',
											},
										}}
									>
										<div className="Medicale_Text_Subtitle_In_Button_Web_Design">
											<p className="Medicale_Text_Sub_Subtitle_In_Button_Web_Design fAleg">
												<i class="fas fa-briefcase-medical"></i>-Medicale
											</p>
										</div>
									</Link>
								</Button>
								<UncontrolledTooltip
									delay={0}
									placement="left"
									target="Medicale_Button"
								>
									Medicale: Realizam Aplicatii Medicale in ajutorul Pacient -
									Cabinet Medical.
								</UncontrolledTooltip>
								<Button
									id="Sportive_Button"
									className="btn-round"
									color="info"
									type="button"
								>
									<Link
										to={{
											pathname: '/Sportive',
											state: {
												title: 'Aplicatii Sportive / Fitness',
											},
										}}
									>
										<div className="Sportive_Text_Subtitle_In_Button_Web_Design">
											<p className="Sportive_Text_Sub_Subtitle_In_Button_Web_Design fAleg">
												<i class="fas fa-dumbbell"></i>-Sportive
											</p>
										</div>
									</Link>
								</Button>
								<UncontrolledTooltip
									delay={0}
									placement="left"
									target="Sportive_Button"
								>
									Sportive: Realizam Aplicatii pentru Sportivi sau dornici de a
									face miscare, chiar si pentru ce doresc sa ajunga la forma
									dorita.
								</UncontrolledTooltip>
								<Button
									id="Publice_Button"
									className="btn-round"
									color="info"
									type="button"
								>
									<Link
										to={{
											pathname: '/publice',
											state: {
												title: 'Aplicatii Publice cat si cel privat ',
											},
										}}
									>
										<div className="Publice_Text_Subtitle_In_Button_Web_Design">
											<p className="Publice_Text_Sub_Subtitle_In_Button_Web_Design fAleg">
												<i class="fas fa-users"></i>-Publice
											</p>
										</div>
									</Link>
								</Button>
								<UncontrolledTooltip
									delay={0}
									placement="left"
									target="Publice_Button"
								>
									Publice: Realizam Aplicatii in prijinul institutiilor publice.
								</UncontrolledTooltip>
							</div>
							<div className="hero-images-container-1 Hero_Image_Container_AppMobile">
								<img
									alt="..."
									src={require('assets/img/phone1.png').default}
								></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MobileApp;
