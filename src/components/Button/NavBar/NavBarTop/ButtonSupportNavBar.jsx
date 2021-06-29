import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

function simulateNetworkRequest() {
	return new Promise((resolve) => setTimeout(resolve, 2000));
}

function ButtonSupport() {
	const SectionLinks = styled.div`
		color: #ffffff;
		margin-right: 40px;
		font-size: 15px;
		text-decoration: none;
		border-top: 2px solid transparent;
		transition: all 0.3s ease-in;
		@media screen and (max-width: 1600px) {
			font-size: 0.5rem;
		}
		&:after {
			content: '';
			margin: 0 auto;
			width: 100%;
			padding-top: 3px;
			border-top: 3px solid transparent;
		}
		&:hover {
			border-top: 2px solid #b8bbbe;
		}
		span {
			border: 1px solid #ffffff;
			padding: 0 5px;
			transition: all 0.3s ease-in;
			&:hover {
				border: 2px solid #ffffff;
			}
		}
	`;
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
		<>
			<Button
				href="#"
				variant="link"
				size="sm"
				active
				disabled={isLoading}
				onClick={!isLoading ? handleClick : null}
			>
				<SectionLinks>{isLoading ? 'Loading…' : 'Support'}</SectionLinks>
			</Button>
		</>
	);
}
export default ButtonSupport;
