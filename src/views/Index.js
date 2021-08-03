import React from 'react';
// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import IndexHeader from 'components/Headers/IndexHeader.js';
import DarkFooter from 'components/Footers/DarkFooter.js';
import '../index.css';
import CoverHeroToSiftwareCustom from '../components/CoverHeroTo SiftwareCustom/CoverHeroToSiftwareCustom';
// sections for this page
import Cards from './index-sections/SlideShow/CardGenerator/CardGenerator';
// import MobileApp from './index-sections/SlideShow/MobileApp/MobileApp';
// import GazduireWeb from './index-sections/SlideShow/Hosting/GazduireWeb';
import EchipaNoastra from './index-sections/SlideShow/OutTeam/EchipaNoastra';
// import PromovareOnline from './index-sections/SlideShow/OnlinePromotion/PromovareOnline';
import Portofoliu from './index-sections/SlideShow/Portfolio/Portofoliu';
//
import image1 from '../assets/img/webDesign.png';
import image2 from '../assets/img/pc2.png';
import image3 from '../assets/img/Consultanta-cloud.png';
import image4 from '../assets/img/cloud-implementation.png';
import image5 from '../assets/img/migrare-cloud.png';
import image6 from '../assets/img/servidce-desk.png';
import image7 from '../assets/img/sistem-admin.png';
import image8 from '../assets/img/network-manage.png';
import image9 from '../assets/img/vitualizare.png';
import image10 from '../assets/img/cloud-hosting.png';
//
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
            <div className='wrapper'>
                <IndexHeader />
                <CoverHeroToSiftwareCustom />
                <div className='main'>
                    <Cards
                        givenId='SoftwareCostum'
                        LinkItem='SoftwareCostum'
                        cards={['aplicatiiMobile', 'aplicatiiWeb']}
                        image={[image1, image2]}
                    />
                    <Portofoliu />
                    <Cards
                        givenId='ServiciiCloud'
                        LinkItem='ServiciiCloud'
                        cards={[
                            'ConsultantCloud',
                            'ImplementareCloud',
                            'MigrareCloud',
                        ]}
                        image={[image3, image4, image5]}
                    />
                    <EchipaNoastra teamMembers={teamMembers} />
                    <Cards
                        givenId='ServiciiIt'
                        LinkItem='ServiciiIt'
                        cards={[
                            'ServiciiHelpDesk',
                            'AdministrareSistemeIt',
                            'ManagementRetea',
                            'SolutiiVirtualizare',
                            'HostareCloud',
                        ]}
                        image={[image6, image7, image8, image9, image10]}
                    />
                </div>
                <DarkFooter />
            </div>
        </>
    );
}

export default Index;
