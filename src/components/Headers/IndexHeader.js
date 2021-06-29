/*eslint-disable*/
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// reactstrap components
import { Container } from 'reactstrap';
import '../Headers/HerroSectionStyles.css';
// core components

function IndexHeader() {
	React.useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<>
			<div
				className="page-header clear-filter BackGround_Color_Floating_Colors_Orbs "
				filter-color="blue"
			>
				<div className="container_line">
					<div class="light x1"></div>
					<div class="light x2"></div>
					<div class="light x3"></div>
					<div class="light x4"></div>
					<div class="light x5"></div>
					<div class="light x6"></div>
					<div class="light x7"></div>
					<div class="light x8"></div>
					<div class="light x9"></div>

					<Container>
						<div className="content-center brand Logo_hero_Section content_bg_line">
							<img
								data-aos="fade-down"
								alt="..."
								className="n-logo"
								src={require('assets/img/logo2.svg').default}
							></img>
							<h1 data-aos="fade-up" className="Herro_Section_Paragraph fAleg ">
								Lasă imaginația ta în mâinile experților noștri
							</h1>
						</div>
					</Container>
				</div>
			</div>
		</>
	);
}

export default IndexHeader;
