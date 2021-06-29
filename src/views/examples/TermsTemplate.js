import React from 'react';
import { Link } from 'react-router-dom';
import terms from './terms.json';
import { UncontrolledTooltip, Button } from 'reactstrap';
import './TermsTemplate.css';

class TermsTemplate extends React.Component {
	render() {
		const { firstLink, title } = this.props;

		function createList(param) {
			let listOfItems = Object.keys(param).map((elem, index) => {
				return <li key={index + 'list'}>{param[elem]}</li>;
			});
			return (
				<ul key={param + 'list'} style={{ padding: 0 }}>
					{listOfItems}
				</ul>
			);
		}

		function createContent() {
			const cookieObject = terms[firstLink];
			return Object.keys(cookieObject).map((elem, index) => {
				if (elem.includes('subtitle')) {
					return (
						<h2 className="h2TermsTemplate fAleg" key={index}>
							{cookieObject[elem]}
						</h2>
					);
				} else if (elem.includes('paragraph')) {
					return (
						<p className="pTermsTemplate fAleg" key={index}>
							{cookieObject[elem]}
						</p>
					);
				} else if (elem.includes('unnorderedList')) {
					return createList(cookieObject[elem]);
				}
			});
		}

		let component = createContent();
		return (
			<div>
				<div class="background">
					<div class="cube"></div>
					<div class="cube"></div>
					<div class="cube"></div>
					<div class="cube"></div>
					<div class="cube"></div>
					<div style={{ marginBottom: '20px', display: 'block' }}>
						<Link
							id="GoHome"
							style={{
								width: '15em',
								height: '3em',
								color: 'white',

								fontWeight: '700',
								backgroundColor: 'transparent',
								margin: '50px',
								border: '2px solid #115081',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: '5px',
							}}
							to="/"
						>
							<span className=" fAleg" style={{ fontSize: '1.5rem' }}>
								{' '}
								Go Home
							</span>
						</Link>
						<UncontrolledTooltip
							delay={0}
							placement="left"
							target="GoHome"
							style={{ fontSize: '30px' }}
						>
							<span className=" fAleg"> Go Home</span>
						</UncontrolledTooltip>
					</div>
					<div
						style={{
							color: 'white',
							padding: '48px 0 96px 0',
							width: '80%',
							margin: 'auto',
						}}
					>
						<h2 className="header-content-headeing">{title}</h2>
						<div className="row section-head">
							<div className=" fAleg">{component}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TermsTemplate;
