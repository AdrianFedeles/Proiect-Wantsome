/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import './DarkFooter.css';
// reactstrap components
import { Container, Button } from 'reactstrap';

function DarkFooter() {
    return (
        <footer
            className='footer fAleg footer_backgrownd_Color'
            data-background-color='black'
        >
            <Container id='Footerinfo'>
                <nav>
                    <div className='image_footer'>
                        <img
                            alt='...'
                            className='n-logo'
                            src={require('assets/img/logo2.svg').default}
                        ></img>
                    </div>
                </nav>
                <div className='copyright' id='copyright'>
                    © {new Date().getFullYear()}, EQUITY TECHNOLOGY . All Rights
                    Reserved.{' '}
                </div>
            </Container>
        </footer>
    );
}

export default DarkFooter;
