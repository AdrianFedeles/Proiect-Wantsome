import React from 'react';
// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import IndexHeader from 'components/Headers/IndexHeader.js';
import DarkFooter from 'components/Footers/DarkFooter.js';
import '../index.css';

// sections for this page
import ProgramareWeb from './index-sections/SlideShow/WebPrograming/ProgramareWeb';
import MobileApp from './index-sections/SlideShow/MobileApp/MobileApp';
import GazduireWeb from './index-sections/SlideShow/Hosting/GazduireWeb';
import EchipaNoastra from './index-sections/SlideShow/OutTeam/EchipaNoastra';
import PromovareOnline from './index-sections/SlideShow/OnlinePromotion/PromovareOnline';
import Portofoliu from './index-sections/SlideShow/Portfolio/Portofoliu';

import img1 from '../assets/img/Echipa_Igor_Full.webp';
import img2 from '../assets/img/Echipa_Eva_Manager.webp';
import img3 from '../assets/img/Echipa_Ioana_UIUX.webp';
import img4 from '../assets/img/Echipa_James_Tell_back.webp';
import img5 from '../assets/img/Echipa_Marius_Front.webp';
import img6 from '../assets/img/Echipa_Vlas_Front.webp';
import img7 from '../assets/img/Echipa_Stafana_Back.webp';

const teamMembers = [
	{
		image: img2,
		name: 'Eva',
		job: 'Project Manager',
	},
	{
		image: img1,
		name: 'Igor',
		job: 'Full - Stack Developer',
	},
	{
		image: img3,
		name: 'Ioana',
		job: 'UI/UX Designer',
	},
	{
		image: img5,
		name: 'Marius',
		job: 'Front - End Developer',
	},
	{
		image: img6,
		name: 'Vlad',
		job: 'Front - End Develope',
	},
	{
		image: img7,
		name: 'Stefania',
		job: 'Back - End Developer',
	},
	{
		image: img4,
		name: 'James',
		job: 'Back - End Developer',
	},
];

function Index() {
	React.useEffect(() => {
		document.body.classList.add('index-page');
		document.body.classList.add('sidebar-collapse');
		document.documentElement.classList.remove('nav-open');
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
		return function cleanup() {
			document.body.classList.remove('index-page');
			document.body.classList.remove('sidebar-collapse');
		};
	});
	return (
		<>
			<IndexNavbar />
			<div className="wrapper">
				<IndexHeader />
				<div className="main">
					<ProgramareWeb />
					<MobileApp />
					<div className="fixedSection">
						<PromovareOnline />
						<GazduireWeb />
					</div>
					<Portofoliu />
					<EchipaNoastra teamMembers={teamMembers} />
				</div>
				<DarkFooter />
			</div>
		</>
	);
}

export default Index;
