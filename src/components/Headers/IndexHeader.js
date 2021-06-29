/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';
import '../Headers/HerroSectionStyles.css';
// core components

function IndexHeader() {
	return (
		<>
			<div className="page-header clear-filter" filter-color="blue">
				<div
					className="page-header-image"
					style={{
						backgroundImage:
							'url(' + require('assets/img/background.webp').default + ')',
					}}
				></div>
				<Container>
					<div className="content-center brand Logo_hero_Section">
						<img
							alt="..."
							className="n-logo"
							src={require('assets/img/logo2.svg').default}
						></img>
						<p className="Herro_Section_Paragraph fAleg">
							Lasă imaginația ta în mâinile experților noștri
						</p>
					</div>
				</Container>
			</div>
		</>
	);
}

export default IndexHeader;
