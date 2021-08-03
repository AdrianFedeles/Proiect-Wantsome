import React from 'react';
import './PromovareOnline.css';
import { Link } from 'react-router-dom';
// reactstrap components
import { Button, UncontrolledTooltip } from 'reactstrap';

// core components

function PromovareOnline() {
	return (
		<>
			<div className="section section-javascript" id="Promovare_Online_BTN_NAv">
				<div className="Container_section_Promovare_Online">
					<p className="Title_Promovare_Online_Paragraph_Section fAleg">
						Hosting
					</p>
					<div className="Container_Buttons_Promovare_Online">
						<div class="Promovare_Online_Section">
							<div className="Promovare_Online_Btn">
								<Button
									id="E-mail_Marketing"
									className="btn-round"
									color="green"
									type="button"
								>
									<Link
										to={{
											pathname: '/EmailMarketing',
											state: {
												title: 'E-mail Marketing',
											},
										}}
									>
										<div className="E_mail_Marketing_Text_Subtitle_In_Button_Programare_Web">
											<p className="E_mail_Marketing_Sub_Subtitle_In_Button_Programare_Web fAleg">
												<i class="fas fa-envelope-open-text"></i> E-mail
												Marketing
											</p>
										</div>
									</Link>
								</Button>
								<UncontrolledTooltip
									delay={0}
									placement="top"
									target="E-mail_Marketing"
								>
									E-mail Marketing.
								</UncontrolledTooltip>
								<Button
									id="Lending_Page"
									className="btn-round"
									color="green"
									type="button"
								>
									<Link
										to={{
											pathname: '/LendingPage',
											state: {
												title: 'Lending page',
											},
										}}
									>
										<div className="Lending_Page_Text_Subtitle_In_Button_Programare_Web">
											<p className="Lending_Page_Subtitle_In_Button_Programare_Web fAleg">
												<i class="fas fa-pager"></i>
												-Lending page
											</p>
										</div>
									</Link>
								</Button>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target="Lending_Page"
								>
									Creare Lending: Realizam Lending page-uri pentru un Start-Up.
								</UncontrolledTooltip>
							</div>
							<div className="hero-images-container  Hero_Image_Container_Promovare_Online">
								<img
									alt="..."
									src={require('assets/img/pcc-1.png').default}
								></img>
							</div>
							<div className="Promovare_Online_Btn">
								<Button
									id="Servicii_SEO"
									className="btn-round"
									color="green"
									type="button"
								>
									<Link
										to={{
											pathname: '/ServiciiSeo',
											state: {
												title: 'Servicii SEO',
											},
										}}
									>
										<div className="Servicii_SEO_Text_Subtitle_In_Button_Programare_Web">
											<p className="Servicii_SEO_Subtitle_In_Button_Programare_Web fAleg">
												<i class="fas fa-globe"></i>
												-Servicii SEO
											</p>
										</div>
									</Link>
								</Button>
								<UncontrolledTooltip
									delay={0}
									placement="top"
									target="Servicii_SEO"
								>
									Servicii Optimizare SEO
								</UncontrolledTooltip>
								<Button
									id="Promovare_Online"
									className="btn-round"
									color="green"
									type="button"
								>
									<Link
										to={{
											pathname: '/PromovareOnline',
											state: {
												title: 'Promovare Online',
											},
										}}
									>
										<div className="Promovare_Text_Subtitle_In_Button_Programare_Web">
											<p className="Promovare_Subtitle_In_Button_Programare_Web fAleg">
												<i class="fas fa-ad"></i>
												-Promovare
											</p>
										</div>
									</Link>
								</Button>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target="Promovare_Online"
								>
									Promovare Online: Promoval ceea ce ni se cere pe: platforme de
									socialivare, Utilizam Google-Ad
								</UncontrolledTooltip>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PromovareOnline;
