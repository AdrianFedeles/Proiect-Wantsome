/*eslint-disable*/
import React from 'react';
import './Footer_separate.css';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function FooterSeparated() {
	return (
		<>
			<footer className="footer footer-default footer_separator_backgrownd_Color">
				<Container>
					<nav>
						<div className="image_footer_Separator">
							<img
								alt="..."
								className="n-logo"
								src={require('assets/img/logo2.svg').default}
							></img>
						</div>
					</nav>
					<div className="copyright" id="copyright">
						© {new Date().getFullYear()}, EQUITY TECHNOLOGY . All Rights
						Reserved.{' '}
					</div>
				</Container>
			</footer>
		</>
	);
}

export default FooterSeparated;
