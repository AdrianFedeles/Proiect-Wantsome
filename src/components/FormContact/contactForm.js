import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const FormDisplay = styled.div`
	position: absolute;
	z-index: 1000;
	background: #48474796;
	height: 100vh;
	width: 100%;
`;
const FormAnimation = (start, stop) => keyframes`
from{bottom:${start}}
to{bottom:${stop}}
`;

const FormWraper = styled.div`
	animation-name: ${FormAnimation('100%', '31%')};
	animation-duration: 0.4s;
	background-color: white;
	position: absolute;
	z-index: 1001;
	width: 30%;
	right: 35%;
	bottom: 5%;
	@media (max-width: 1350px) {
		animation-name: ${FormAnimation('100%', '10%')};
		width: 50%;
		right: 25%;
		bottom: 10%;
		font-size: 0.8rem;
		text-align: center;
	}
	@media (max-width: 550px) {
		animation-name: ${FormAnimation('100%', '5%')};
		width: 80%;
		right: 10%;
		bottom: 5%;
		font-size: 0.6rem;
		text-align: center;
	}
`;

const FromGroup = styled.div`
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	width: 100%;
`;
const FormLabel = styled.label`
	display: inline-block;
	margin-bottom: 0.5rem;
`;
const Input = styled.input`
	display: block;
	width: 100%;
	padding: 0.275rem;
	font-size: 1rem;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
`;

const TitleFormContainer = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	padding: 1rem;
	border-bottom: 1px solid #e9ecef;
	border-top-left-radius: 0.3rem;
	border-top-right-radius: 0.3rem;
`;
const TitleFromHeader = styled.h5`
	font-family: inherit;
	font-weight: 500;
	line-height: 1.2;
	color: inherit;
	margin-bottom: 0;
	line-height: 1.5;
	font-size: 1.25rem;
`;
const FromEscapeButton = styled.button`
	padding: 1rem;
	margin: -1rem -1rem -1rem auto;
	background-color: transparent;
	border: 0;
	-webkit-appearance: none;
	cursor: pointer;
	float: right;
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1;
	color: #000;
	text-shadow: 0 1px 0 #fff;
	opacity: 0.5;
	&:hover {
		color: #000;
		opacity: 1;
	}
`;
const LabelFromGDPR = styled.label`
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 13px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;
const InputCheckbox = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	left: 0;
	top: 0;
`;

const CheckMark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 21px;
	width: 21px;
`;

const AfterCheckMark = styled.span`
	position: absolute;
	left: 6px;
	top: 5px;
	width: 5px;
	height: 6px;
	border: solid #fff;
	border-top-width: medium;
	border-right-width: medium;
	border-bottom-width: medium;
	border-left-width: medium;
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
`;
const FormFooter = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	padding: 1rem;
	border-top: 1px solid #e9ecef;
`;

const FormFooterEscapeButton = styled.button`
	color: #fff;
	background-color: #6c757d;
	border-color: #6c757d;
	margin-right: 0.25rem;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px solid transparent;
	border-top-color: transparent;
	border-right-color: transparent;
	border-bottom-color: transparent;
	border-left-color: transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	cursor: pointer;
	:hover {
		background-color: #424446;
	}
`;
const FormFooterFinalizeButton = styled.button`
	color: #fff;
	background: linear-gradient(90deg, rgb(77, 48, 143) 0%, rgb(98, 42, 145) 39%);
	border-color: #6c757d;
	margin-right: 0.25rem;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px solid transparent;
	border-top-color: transparent;
	border-right-color: transparent;
	border-bottom-color: transparent;
	border-left-color: transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	cursor: pointer;
	:hover {
		background: linear-gradient(90deg, rgb(38, 13, 95) 0%, rgb(72, 42, 97) 39%);
	}
`;

let mailName = '';
let email = '';
let telephone = '';
let message = '';
let file = null;

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contactDisplay: false,
			background: false,
			error: null,
		};
	}
	verifyImput = (event) => {
		if (event.keyCode == 13) {
			event.preventDefault();
		}
	};
	validateFrom = (event) => {
		event.preventDefault();
		if (event.target.nume.value === '') {
			this.setState({
				error: 'Introduceti un nume!',
			});
		} else if (event.target.telefon.value === '') {
			this.setState({
				error: 'Introduceti un numar de telefon!',
			});
		} else if (event.target.email.value === '') {
			this.setState({
				error: 'Introduceti o adresa de e-mail!',
			});
		} else if (event.target.mesaj.value === '') {
			this.setState({
				error: 'Introduceti un mesaj!',
			});
		} else if (!event.target.checkbox.checked) {
			this.setState({
				error: 'Va rugam acceptati termenii GDPR!',
			});
		} else {
			this.setState({
				error: '',
			});
			let data = {
				name: mailName,
				email: email,
				telephone: telephone,
				message: message,
				file: file,
			};

			let header = { 'Content-Type': 'application/json' };
			axios
				.post('https://equity.bar/sendMail.php', data, header)
				.then((response) => response)
				.catch((e) => console.log(e));
			this.displayContact();
		}
	};

	changeCheck = () => {
		this.setState({
			background: !this.state.background,
		});
	};

	noScroll = () => {
		window.scrollTo(0, 0);
	};

	displayContact = () => {
		this.setState({
			contactDisplay: !this.state.contactDisplay,
			error: '',
		});
		if (this.state.background) {
			this.changeCheck();
		}
		this.noScroll();
		this.state.contactDisplay
			? window.removeEventListener('scroll', this.noScroll)
			: window.addEventListener('scroll', this.noScroll);
	};

	render() {
		let afterBefore = this.state.background ? (
			<AfterCheckMark></AfterCheckMark>
		) : null;
		let form = this.state.contactDisplay ? (
			<FormDisplay>
				<FormWraper>
					<div>
						<TitleFormContainer>
							<TitleFromHeader>
								Scrie-ne cum iti putem fi de ajutor
							</TitleFromHeader>
							<FromEscapeButton onClick={this.displayContact}>
								X
							</FromEscapeButton>
						</TitleFormContainer>
						<form
							method="post"
							action="mailForm.php"
							onSubmit={this.validateFrom}
							style={{ padding: '20px' }}
						>
							<div>
								<FromGroup>
									<FormLabel>Nume si prenume *</FormLabel>
									<Input
										onKeyDown={this.verifyImput}
										onChange={(e) => {
											mailName = e.target.value;
										}}
										name="nume"
										type="text"
									></Input>
								</FromGroup>
								<FromGroup>
									<FormLabel>Telefon *</FormLabel>
									<Input
										onKeyDown={this.verifyImput}
										onChange={(e) => {
											telephone = e.target.value;
										}}
										name="telefon"
										type="tel"
									></Input>
								</FromGroup>
								<FromGroup>
									<FormLabel>E-mail *</FormLabel>
									<Input
										onKeyDown={this.verifyImput}
										onChange={(e) => {
											email = e.target.value;
										}}
										name="email"
										type="email"
									></Input>
								</FromGroup>
								<FromGroup>
									<FormLabel>Mesaj *</FormLabel>
									<Input
										onKeyDown={this.verifyImput}
										onChange={(e) => {
											message = e.target.value;
										}}
										name="mesaj"
										type="text"
									></Input>
								</FromGroup>
								<FromGroup>
									<LabelFromGDPR>
										(GDPR) datele vor fi utilizate exclusiv pentru a raspunde la
										cererea de oferta solicitata si pentru informari ulterioare
										legate de aceasta. *
										<InputCheckbox
											onKeyDown={this.verifyImput}
											name="checkbox"
											type="checkBox"
											requered
										></InputCheckbox>
										<CheckMark
											onClick={this.changeCheck}
											style={{
												background: this.state.background ? '#4caf50' : '#eee',
											}}
										>
											{afterBefore}
										</CheckMark>
									</LabelFromGDPR>
								</FromGroup>
								<FromGroup
									style={{
										minHeight: '30px',
										textAlign: 'center',
										background: '#a8a2a266',
										border: '',
										cursor: 'pointer',
									}}
								>
									<Dropzone
										onDrop={(acceptedFiles) =>
											(document.getElementById('fileDrop').innerText =
												acceptedFiles[0].name)
										}
									>
										{({ getRootProps, getInputProps }) => (
											<section>
												<div {...getRootProps()}>
													<input name="fisier" {...getInputProps()} />
													<p id="fileDrop" style={{ padding: '20px' }}>
														Drag 'n' drop some files here, or click to select
														files
													</p>
												</div>
											</section>
										)}
									</Dropzone>
								</FromGroup>
							</div>
							<label
								style={{
									color: 'red',
									width: '100%',
									textAlign: 'center',
									display: 'block',
								}}
							>
								{this.state.error}
							</label>
							<FormFooter>
								<FormFooterEscapeButton onClick={this.displayContact}>
									Inchide
								</FormFooterEscapeButton>
								<FormFooterFinalizeButton type="submit">
									Trimite Cererea
								</FormFooterFinalizeButton>
							</FormFooter>
						</form>
					</div>
				</FormWraper>
			</FormDisplay>
		) : null;
		return (
			<div>
				<button
					className="start-now-button"
					onClick={this.displayContact}
					style={{
						width: '15em',
						height: '3em',
						color: 'white',
						fontSize: 'larger',
						backgroundColor: 'transparent',
						borderRadius: '10px',
						borderColor: '#115081',
						margin: '10px',
					}}
				>
					Incepe acum{' '}
					<span>
						<FontAwesomeIcon icon={faArrowRight} />
					</span>
				</button>
				<div
					style={{
						position: 'absolute',
						width: '100%',
						top: '0',
						left: '0',
					}}
				>
					{form}
				</div>
			</div>
		);
	}
}

export default ContactForm;
