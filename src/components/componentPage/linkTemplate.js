import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContactForm from '../FormContact/contactForm';
import { Button, UncontrolledTooltip } from 'reactstrap';
import './linkTemplate.css';

const Wraper = styled.div`
	width: 100vw;
	display: table;
	height: 100vh;
`;
const Container = styled.div`
	margin-bottom: 10px;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	max-width: 1140px;
	@media (max-width: 992px) {
		max-width: 960px;
	}
	@media (max-width: 768px) {
		max-width: 720px;
	}
	@media (max-width: 576px) {
		max-width: 490px;
	}
`;

const HeaderTitle = styled.h1`
	text-align: center;
	align-items: center;
	font-size: 2.5em;
	text-transform: uppercase;
	font-weight: 600;
	font-family: 'Noto Sans JP', sans-serif;
	letter-spacing: 5.4px;
	word-spacing: 5.6px;
	color: White;
	font-weight: 400;
`;
const MiniHeader = styled.ul`
	display: table;
	margin-left: auto;
	margin-right: auto;
	list-style: none;
	padding-left: 0;
	margin-bottom: 0;
	width: 100%;
	height: auto;
	font-size: 160%;
	font-family: 'Noto Sans JP', sans-serif;
	text-align: center;
	color: white;
`;
const ContentCategory = styled.div`
	padding-top: 80px;
	padding-bottom: 0;
	display: table;
	width: 80%;
	margin: auto;
	/* text-indent: 50px; */
`;
const ContainerRow = styled.div`
	max-width: 1140px;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	margin-bottom: 15px;
	padding-left: 0;
	padding-right: 0;
	@media (max-width: 992px) {
		max-width: 960px;
	}
	@media (max-width: 768px) {
		max-width: 720px;
	}
	@media (max-width: 576px) {
		display: table;
		max-width: 500px;
	}
`;
const SecondTitle = styled.h2`
	font-family: 'Noto Sans JP', sans-serif;
	font-size: 3em;
	color: whitesmoke;
	font-weight: 700;
	display: table;
	width: 100%;
	transition: 0.3s;
	margin-bottom: 0.5rem;
`;
const Paragraph = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 1.5em;
	color: whitesmoke;
	font-weight: 600;
	transition: 0.3s;
	margin-top: 0;
	margin-bottom: 1rem;
`;
const BoxStep = styled.div`
	background-color: #97979742;
	height: 100%;
	border-radius: 5px;
	padding-left: 25px;
	padding-right: 25px;
	padding-top: 20px;
	padding-bottom: 10px;
	transition: 0.3s;
`;
class LinkTemplate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.details.title,
			details: this.props.details.details,
		};
	}

	render() {
		function createCards(details) {
			let card = details.map((elem, index) => (
				<BoxStep key={elem.secondTitle + index}>
					<SecondTitle
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
						}}
					>
						{elem.secondTitle}
					</SecondTitle>
					<Paragraph>{elem.paragraph} </Paragraph>
				</BoxStep>
			));
			return card;
		}
		let content = createCards(this.state.details);
		return (
			<div>
				<Wraper className="page-header-image">
					<div class="background">
						{/* <div class="cube"></div>
						<div class="cube"></div>
						<div class="cube"></div>
						<div class="cube"></div>
						<div class="cube"></div> */}
						<Button
							id="GoHome"
							color="info"
							type="button"
							style={{
								width: '15em',
								height: '3em',
								color: 'transparent',
								fontSize: 'larger',
								backgroundColor: 'transparent',
								borderRadius: '5px',
								border: '2px solid #115081',
								margin: '30px',
							}}
						>
							<Link
								style={{
									fontSize: '30px',
									fontWeight: 'bolder',
									color: 'white',
									alignItems: 'center',
									display: 'flex',
									justifyContent: 'center',
									textIndent: '5px',
								}}
								to="/"
							>
								<span className=" fAleg"> Go Home</span>
							</Link>
						</Button>
						<UncontrolledTooltip
							delay={0}
							placement="left"
							target="GoHome"
							style={{ fontSize: '30px' }}
						>
							Go Home
						</UncontrolledTooltip>
						<Container>
							<HeaderTitle className=" fAleg">{this.state.title}</HeaderTitle>
							<MiniHeader className=" fAleg">EQUITY TECHNOLOGY</MiniHeader>
						</Container>
						<ContentCategory className=" fAleg">
							{content}
							<div className=" fAleg" style={{ width: '100%' }}>
								<ContainerRow
									style={{ display: 'flex', justifyContent: 'center' }}
								>
									<ContactForm className=" fAleg"></ContactForm>
								</ContainerRow>
							</div>
						</ContentCategory>
					</div>
				</Wraper>
			</div>
		);
	}
}

export default LinkTemplate;
