import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import ContactForm from '../FormContact/contactForm';
// import { Button, UncontrolledTooltip } from 'reactstrap';
import './linkTemplate.css';
import FooterSeparated from '../../views/examples/Footer_separater/Footer_separate';
import NavbarsSeparated from '../../views/examples/NavBar_separate/nav_for_about_terms_template';
//general
import { IoCheckmarkDone } from 'react-icons/io5';
//Mobile App
import { SiMaterialdesign } from 'react-icons/si';
import { FaConnectdevelop } from 'react-icons/fa';
import { BsWrench } from 'react-icons/bs';
//clous services//consultanta cloud
import { GiMagnifyingGlass } from 'react-icons/gi';
import { BsNewspaper } from 'react-icons/bs';
import { ImPencil2 } from 'react-icons/im';
import { GoSettings } from 'react-icons/go';
import { FaPaperPlane } from 'react-icons/fa';
//clous services//Implement
import { GiBugleCall } from 'react-icons/gi';
import { AiOutlineApartment } from 'react-icons/ai';
import { FiLayers } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { IoServerOutline } from 'react-icons/io5';
import { BsFillChatQuoteFill } from 'react-icons/bs';
//clous services//migrare
import { BsArrowLeftRight } from 'react-icons/bs';
import { GiBallPyramid } from 'react-icons/gi';
import { GiGears } from 'react-icons/gi';
import { GoLock } from 'react-icons/go';
import { GiFlexibleStar } from 'react-icons/gi';
import { IoEarthOutline } from 'react-icons/io5';
//servicii IT//servicii desk
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { CgRadioCheck } from 'react-icons/cg';

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
			mainTitle: this.props.details.mainTitle,
			title: this.props.details.title,
			details: this.props.details.details,
		};
	}

	render() {
		function createCards(details) {
			let card = details.map((elem, index) => {
				let icon;
				if (elem.icon) {
					//general
					if (elem.icon.includes('IoCheckmarkDone')) {
						icon = <IoCheckmarkDone />;
						//mobile app mobil//web
					} else if (elem.icon.includes('SiMaterialdesign')) {
						icon = <SiMaterialdesign />;
					} else if (elem.icon.includes('FaConnectdevelop')) {
						icon = <FaConnectdevelop />;
					} else if (elem.icon.includes('BsWrench')) {
						icon = <BsWrench />;
						//cloud services
						//consult cloud
					} else if (elem.icon.includes('GiMagnifyingGlass')) {
						icon = <GiMagnifyingGlass />;
					} else if (elem.icon.includes('BsNewspaper')) {
						icon = <BsNewspaper />;
					} else if (elem.icon.includes('ImPencil2')) {
						icon = <ImPencil2 />;
					} else if (elem.icon.includes('GoSettings')) {
						icon = <GoSettings />;
					} else if (elem.icon.includes('FaPaperPlane')) {
						icon = <FaPaperPlane />;
						//cloud services
						//implement cloud
					} else if (elem.icon.includes('GiBugleCall')) {
						icon = <GiBugleCall />;
					} else if (elem.icon.includes('AiOutlineApartment')) {
						icon = <AiOutlineApartment />;
					} else if (elem.icon.includes('FiLayers')) {
						icon = <FiLayers />;
					} else if (elem.icon.includes('FaCode')) {
						icon = <FaCode />;
					} else if (elem.icon.includes('IoServerOutline')) {
						icon = <IoServerOutline />;
					} else if (elem.icon.includes('BsFillChatQuoteFill')) {
						icon = <BsFillChatQuoteFill />;
						//cloud services
						//migrare
					} else if (elem.icon.includes('BsArrowLeftRight')) {
						icon = <BsArrowLeftRight />;
					} else if (elem.icon.includes('GiBallPyramid')) {
						icon = <GiBallPyramid />;
					} else if (elem.icon.includes('GiGears')) {
						icon = <GiGears />;
					} else if (elem.icon.includes('GoLock')) {
						icon = <GoLock />;
					} else if (elem.icon.includes('GiFlexibleStar')) {
						icon = <GiFlexibleStar />;
					} else if (elem.icon.includes('IoEarthOutline')) {
						icon = <IoEarthOutline />;
						//servicii it// servicii desk
					} else if (elem.icon.includes('HiOutlineArrowNarrowRight')) {
						icon = <HiOutlineArrowNarrowRight />;
					} else if (elem.icon.includes('AiOutlineCheck')) {
						icon = <AiOutlineCheck />;
					} else if (elem.icon.includes('CgRadioCheck')) {
						icon = <CgRadioCheck />;
					}
				} else {
					icon = null;
				}
				return (
					<BoxStep key={elem.secondTitle + index}>
						<SecondTitle style={{}}>{elem.secondTitle}</SecondTitle>
						<Paragraph style={{ textIndent: '20px' }}>
							{icon}
							{elem.paragraph}{' '}
						</Paragraph>
					</BoxStep>
				);
			});
			return card;
		}
		let content = createCards(this.state.details);
		return (
			<div>
				<NavbarsSeparated />
				<Wraper className="page-header-image">
					<div class="background">
						<Container>
							<HeaderTitle className=" fAleg">{this.state.title}</HeaderTitle>
							<MiniHeader className=" fAleg">SYSTEMSOONT SRL</MiniHeader>
						</Container>
						<ContentCategory className=" fAleg">
							<div
								style={{
									textAlign: 'center',
									color: 'white',
									fontSize: '20px',
								}}
							>
								<h3> {this.state.mainTitle}</h3>
							</div>
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
				<FooterSeparated />
			</div>
		);
	}
}

export default LinkTemplate;
