import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import buttons from './buttonsProps.json';

// styles for this kit
import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.5.0';
// pages for this kit
import Index from 'views/Index.js';
import AboutUs from 'views/examples/AboutUs';

import LinkTemplate from './components/componentPage/linkTemplate';
import TermsTemplate from './views/examples/TermsTemplate';
// programare
const php = buttons.php;
const laravel = buttons.laravel;
const react = buttons.react;
const angular = buttons.angular;
const uiux = buttons.uiux;
const grafica = buttons.grafica;
const ilustratii = buttons.ilustratii;
// app mobile
const JocuriMobile = buttons.JocuriMobile;
const VR = buttons.VR;
const AR = buttons.AR;
const Medicale = buttons.Medicale;
const Sportive = buttons.Sportive;
const publice = buttons.publice;
//Promovare online
const EmailMarketing = buttons.EmailMarketing;
const LendingPage = buttons.LendingPage;
const ServiciiSeo = buttons.ServiciiSeo;
const PromovareOnline = buttons.PromovareOnline;
//Gazduire
const MentenantaWeb = buttons.MentenantaWeb;
const GazduireWeb = buttons.GazduireWeb;

console.log(php);
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Switch>
				<Route path="/" exact render={(props) => <Index {...props} />} />

				<Route
					path="/landing-page"
					render={(props) => <AboutUs {...props} />}
				/>

				{/* programare conponent */}
				<Route path="/php" component={() => <LinkTemplate details={php} />} />
				<Route
					path="/laravel"
					component={() => <LinkTemplate details={laravel} />}
				/>
				<Route
					path="/react"
					component={() => <LinkTemplate details={react} />}
				/>
				<Route
					path="/angular"
					component={() => <LinkTemplate details={angular} />}
				/>
				<Route path="/uiux" component={() => <LinkTemplate details={uiux} />} />
				<Route
					path="/grafica"
					component={() => <LinkTemplate details={grafica} />}
				/>
				<Route
					path="/ilustratii"
					component={() => <LinkTemplate details={ilustratii} />}
				/>
				{/* mobile app */}
				<Route
					path="/JocuriMobile"
					component={() => <LinkTemplate details={JocuriMobile} />}
				/>
				<Route path="/VR" component={() => <LinkTemplate details={VR} />} />
				<Route path="/AR" component={() => <LinkTemplate details={AR} />} />
				<Route
					path="/Medicale"
					component={() => <LinkTemplate details={Medicale} />}
				/>
				<Route
					path="/Sportive"
					component={() => <LinkTemplate details={Sportive} />}
				/>
				<Route
					path="/publice"
					component={() => <LinkTemplate details={publice} />}
				/>
				{/* Promovare online */}
				<Route
					path="/EmailMarketing"
					component={() => <LinkTemplate details={EmailMarketing} />}
				/>
				<Route
					path="/LendingPage"
					component={() => <LinkTemplate details={LendingPage} />}
				/>
				<Route
					path="/ServiciiSeo"
					component={() => <LinkTemplate details={ServiciiSeo} />}
				/>
				<Route
					path="/PromovareOnline"
					component={() => <LinkTemplate details={PromovareOnline} />}
				/>
				{/* gazduire */}
				<Route
					path="/MentenantaWeb"
					component={() => <LinkTemplate details={MentenantaWeb} />}
				/>
				<Route
					path="/GazduireWeb"
					component={() => <LinkTemplate details={GazduireWeb} />}
				/>
				<Route
					path="/cookie"
					component={() => (
						<TermsTemplate firstLink="cookie" title="Cookie Policy" />
					)}
				/>
				<Route
					path="/terms"
					component={() => (
						<TermsTemplate firstLink="terms" title="Termeni si conditii" />
					)}
				/>
				<Route
					path="/gdpr"
					component={() => (
						<TermsTemplate firstLink="gdpr" title="GDPR Policy" />
					)}
				/>
			</Switch>
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
