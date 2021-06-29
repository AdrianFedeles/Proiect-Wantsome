import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

function simulateNetworkRequest() {
	return new Promise((resolve) => setTimeout(resolve, 2000));
}

function ButtonProducts() {
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
				variant="danger"
				size="sm"
				active
				disabled={isLoading}
				onClick={!isLoading ? handleClick : null}
			>
				{isLoading ? 'Loading…' : 'Produs'}
			</Button>{' '}
		</>
	);
}
export default ButtonProducts;
