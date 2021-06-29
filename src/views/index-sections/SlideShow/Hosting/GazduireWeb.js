import React from 'react';
import './GazduireWeb.css';
import { Link } from 'react-router-dom';
// reactstrap components
import { UncontrolledTooltip, Button } from 'reactstrap';

// core components

function GazduireWeb() {
	return (
		<>
			<div className="section section-pagination" id="section-pagination">
				<div className="Container_section_Gazduire">
					<p className="Title_Gazduire_Paragraph_Section fAleg">
						Mentenanta Web
					</p>
					<div className="Container_Buttons_Gazduire_Section">
						<div class="Gazduire_Section">
							<Button
								id="MENTENANTA_SITE_Buton"
								className="btn-round"
								color="green"
								type="button"
							>
								<Link
									to={{
										pathname: '/MentenantaWeb',
										state: {
											title:
												'Mentenanta - Site-uri Web, Aplicatii Desktop / Mobile ',
										},
									}}
								>
									<div className="Mentenenta_Site_Text_Subtitle_In_Button_Gazduire">
										<p className="Mentenenta_Site_Text_Sub_Subtitle_In_Button_Gazduire  fAleg">
											<i class="fas fa-cogs"></i>
											-MENTENANTA
										</p>
									</div>
								</Link>
							</Button>
							<UncontrolledTooltip
								delay={0}
								placement="top"
								target="MENTENANTA_SITE_Buton"
							>
								ADMINISTRARE SI MENTENANTA
							</UncontrolledTooltip>
							<div className="hero-images-container  Hero_Image_Container_Gazduire">
								<img
									alt="..."
									src={require('assets/img/hosting.png').default}
								></img>
							</div>
							<Button
								id="GAZDUIRE_WEB_Buton"
								className="btn-round"
								color="green"
								type="button"
							>
								<Link
									to={{
										pathname: '/GazduireWeb',
										state: {
											title: 'Gazduire Web / E-Mail',
										},
									}}
								>
									<div className="Gazduire_Text_Subtitle_In_Button_Gazduire">
										<p className="Gazduire_Text_Sub_Subtitle_In_Button_Gazduire fAleg">
											<i class="fas fa-cogs"></i>
											-GAZDUIRE
										</p>
									</div>
								</Link>
							</Button>
							<UncontrolledTooltip
								delay={0}
								placement="right"
								target="GAZDUIRE_WEB_Buton"
							>
								Gazduire Web
							</UncontrolledTooltip>
							<UncontrolledTooltip
								delay={0}
								placement="left"
								target="GAZDUIRE_WEB_Buton"
							>
								Gazduire E-mail
							</UncontrolledTooltip>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default GazduireWeb;
