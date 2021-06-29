import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/fontawesome-free-solid';
import './teamWrapper.css';

// core components

class EchipaNoastra extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			translateWidth: 0,
		};
		this.teamMembers = this.props.teamMembers;
	}

	render() {
		const backButton = () => {
			if (this.state.translateWidth < 0) {
				this.setState({
					translateWidth: (this.state.translateWidth += 287),
				});
			}
		};
		const nextButton = () => {
			let width = window.innerWidth;
			switch (true) {
				case width > 1300:
					if (
						this.state.translateWidth >
						(this.teamMembers.length - 4) * -287
					) {
						this.setState({
							translateWidth: (this.state.translateWidth -= 287),
						});
					}
					break;
				case width > 1092 && width <= 1300:
					if (
						this.state.translateWidth >
						(this.teamMembers.length - 3) * -287
					) {
						this.setState({
							translateWidth: (this.state.translateWidth -= 287),
						});
					}
					break;
				case width > 868 && width <= 1092:
					if (
						this.state.translateWidth >
						(this.teamMembers.length - 2) * -287
					) {
						this.setState({
							translateWidth: (this.state.translateWidth -= 287),
						});
					}
				case width < 868:
					if (
						this.state.translateWidth >
						(this.teamMembers.length - 2) * -287
					) {
						this.setState({
							translateWidth: (this.state.translateWidth -= 287),
						});
					}
					break;
				default:
					console.log(' wrong table');
			}
		};
		function createMembersItem(items) {
			let memberItems = items.map((element, index) => (
				<div
					className="team-item"
					style={{ width: '251.25px', marginRight: '35px', boxSizing: 'none' }}
					key={index}
				>
					<div className="item">
						<img
							src={element.image}
							alt={element.name}
							width="100%"
							height="auto"
						></img>
						<h3 className="EchipaNpastraTag fAleg">{element.name}</h3>
						<h4 className="EchipaNpastraTag fAleg">{element.job}</h4>
					</div>
				</div>
			));
			return memberItems;
		}
		return (
			<div className="team-wrap" id="Echipa_Noastra">
				<div className="team-container">
					<div className="team-carousel-wrap">
						<div className="team-carousel">
							<div className="team-stage-outer">
								<div
									className="team-stage"
									style={{
										transform:
											'translate3d(' +
											this.state.translateWidth +
											'px, 0px, 0px)',
										transition: 'all 0.25s ease 0s',
										width: '5725px',
									}}
								>
									{createMembersItem(this.teamMembers)}
								</div>
							</div>
							<div className="team-navigation">
								<div className="team-preview-button" onClick={backButton}>
									<FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
								</div>
								<div className="team-next-button" onClick={nextButton}>
									<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EchipaNoastra;
