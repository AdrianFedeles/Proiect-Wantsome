import React from 'react';
import terms from './terms.json';
import './TermsTemplate.css';
import NavbarsSeparated from './NavBar_separate/nav_for_about_terms_template';
import FooterSeparated from './Footer_separater/Footer_separate';

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
				<NavbarsSeparated />
				<div class="background">
					<div class="cube"></div>
					<div class="cube"></div>
					<div class="cube"></div>
					<div class="cube"></div>
					<div class="cube"></div>
					<div style={{ marginBottom: '20px', display: 'block' }}></div>
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
				<FooterSeparated />
			</div>
		);
	}
}

export default TermsTemplate;
