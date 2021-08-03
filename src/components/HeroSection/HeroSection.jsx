import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './HeroSection.css';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function simulateNetworkRequest() {
	return new Promise((resolve) => setTimeout(resolve, 2000));
}
function HeroSection() {
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			simulateNetworkRequest().then(() => {
				setLoading(false);
			});
		}
	}, [isLoading]);

	const handleClick = () => setLoading(true);

	return (
		<div className="Hero_Section">
			<div className="Styled_Text_Hero_Section">
				<div className="Hero_Section_Styled">
					<strong class="Text_1">
						<span className="Color_bar_Vertical_Hero_Section">|</span>Our code
						is open<span className="Color_Bar_Horizontal_Hero_Section">_</span>
					</strong>
				</div>
				<div className="Hero_Section_Styled">
					<h1 className="Text_2">
						Clouds that compete can <br />
						still connect
					</h1>
				</div>
				<Button
					variant="danger"
					size="lg"
					active
					disabled={isLoading}
					onClick={!isLoading ? handleClick : null}
				>
					{isLoading ? 'Loading…' : 'See why open source works'}
				</Button>{' '}
			</div>
		</div>
	);
}

export default HeroSection;
