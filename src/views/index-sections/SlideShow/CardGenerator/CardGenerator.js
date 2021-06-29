import React from 'react';
import './CardGenerator.css';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardGenerator from '../Container_contentJson/ContainerContextCards';

// reactstrap components
// import { UncontrolledTooltip, Button, Container, Row, Col } from 'reactstrap';

function Cards(props) {
	React.useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	const { givenId } = props;
	const { cards } = props;
	const { LinkItem } = props;
	const { image } = props;
	let content = cards.map((elem, index) => (
		<CardGenerator
			LinkItem={LinkItem}
			data="zoom-in"
			card={elem}
			image={image[index]}
		/>
	));
	return (
		<>
			<div className="section section-basic" id={givenId}>
				<div class="area">
					<ul class="circles">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<div className="Container_section_ProgramareWeb">{content}</div>
				</div>
			</div>
		</>
	);
}

export default Cards;
