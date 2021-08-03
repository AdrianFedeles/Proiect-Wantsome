/*eslint-disable*/
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// reactstrap components
import { Container } from 'reactstrap';
import '../Headers/HerroSectionStyles.css';
//Typewriter
import Typewriter from 'typewriter-effect';
//parallax
import Parallax from 'react-rellax';

function IndexHeader() {
    React.useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <>
            <div className='page-header clear-filter BackGround_Color_Floating_Colors_Orbs '>
                <div className='container_line'>
                    <div class='light x0'></div>
                    <div class='light x1'></div>
                    <div class='light x2'></div>
                    <div class='light x3'></div>
                    <div class='light x4'></div>
                    <div class='light x5'></div>
                    <div class='light x6'></div>
                    <div class='light x7'></div>
                    <div class='light x8'></div>
                    <div class='light x9'></div>
                    <div class='light x10'></div>
                    <div class='light x11'></div>
                    <Container>
                        <div className='content-center brand Logo_hero_Section content_bg_line'>
                            <div className='container_Image_and_text'>
                                <img
                                    data-aos='fade-down'
                                    alt='...'
                                    className='n-logo Logo_to_hero_section'
                                    src={
                                        require('assets/img/logo2.svg').default
                                    }
                                ></img>
                                <div className='paragraph_herro_section'>
                                    EQUITY TECHNOLOGY
                                </div>
                            </div>
                            <h1
                                data-aos='fade-up'
                                className='Herro_Section_Paragraph fAleg '
                            >
                                <Parallax speed={-4}>
                                    <Typewriter
                                        onInit={typewriter => {
                                            typewriter
                                                .typeString('Sa incepem!')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .start();
                                        }}
                                        options={{
                                            strings: [
                                                'Lasă imaginația ta în mâinile experților noștri!',
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Parallax>
                            </h1>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default IndexHeader;
