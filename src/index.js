import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import buttons from './buttonsProps.json';
import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.5.0';
import Index from 'views/Index.js';
import AboutUs from 'views/examples/AboutUs';
import LinkTemplate from './components/componentPage/linkTemplate';
import TermsTemplate from './views/examples/TermsTemplate';

// const LendingPage = buttons.LendingPage;
const ServiciiHelp = buttons.ServiciiHelp;
const AppMobil = buttons.AppMobil;
const AppWeb = buttons.AppWeb;
const ConsulCloud = buttons.ConsulCloud;
const ImplementCloud = buttons.ImplementCloud;
const MigraCloud = buttons.MigraCloud;
const HostCloud = buttons.HostCloud;
const AdminSistemIt = buttons.AdminSistemIt;
const ManageRetea = buttons.ManageRetea;
const SolVirtual = buttons.SolVirtual;

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Switch>
				<Route path="/" exact render={(props) => <Index {...props} />} />
				<Route
					path="/AppMobil"
					component={() => <LinkTemplate details={AppMobil} />}
				/>
				<Route
					path="/AppWeb"
					component={() => <LinkTemplate details={AppWeb} />}
				/>
				<Route
					path="/ConsulCloud"
					component={() => <LinkTemplate details={ConsulCloud} />}
				/>
				<Route
					path="/ImplementCloud"
					component={() => <LinkTemplate details={ImplementCloud} />}
				/>
				<Route
					path="/MigraCloud"
					component={() => <LinkTemplate details={MigraCloud} />}
				/>
				<Route
					path="/landing-page"
					render={(props) => <AboutUs {...props} />}
				/>
				{/* <Route
					path="/LendingPage"
					component={() => <LinkTemplate details={LendingPage} />}
				/> */}
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
				<Route
					path="/HostCloud"
					component={() => <LinkTemplate details={HostCloud} />}
				/>
				<Route
					path="/ServiciiHelp"
					component={() => <LinkTemplate details={ServiciiHelp} />}
				/>
				<Route
					path="/AdminSistemIt"
					component={() => <LinkTemplate details={AdminSistemIt} />}
				/>
				{/* gazduire */}
				<Route
					path="/ManageRetea"
					component={() => <LinkTemplate details={ManageRetea} />}
				/>
				<Route
					path="/SolVirtual"
					component={() => <LinkTemplate details={SolVirtual} />}
				/>
			</Switch>
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
