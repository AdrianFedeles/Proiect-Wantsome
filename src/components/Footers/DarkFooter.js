/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import { Container, Button } from 'reactstrap';

function DarkFooter() {
	return (
		<footer className="footer fAleg" data-background-color="black">
			<Container id="Footerinfo">
				<nav>
					<ul>
						<li>
							<Button
								className="btn-round"
								color="default"
								to="/landing-page"
								outline
								tag={Link}
							>
								About Us
							</Button>
							<Button
								className="btn-round"
								color="default"
								to="/terms"
								outline
								tag={Link}
							>
								Termeni conditii
							</Button>
							<Button
								className="btn-round"
								color="default"
								to="/gdpr"
								outline
								tag={Link}
							>
								GDPR Policy
							</Button>
							<Button
								className="btn-round"
								color="default"
								to="/cookie"
								outline
								tag={Link}
							>
								Cookie policy
							</Button>
						</li>
					</ul>
				</nav>
				<div className="copyright" id="copyright">
					© {new Date().getFullYear()}, EQUITY TECHNOLOGY . All Rights Reserved.{' '}
					<img
						alt="..."
						className="n-logo"
						src={require('assets/img/logo2.svg').default}
					></img>
				</div>
			</Container>
		</footer>
	);
}

export default DarkFooter;
