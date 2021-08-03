import styled from 'styled-components';

const MainButton = styled.button`
	padding: 5px 2px;
	margin: 2px;
`;

const StyledButton = styled(MainButton)`
	outline: none;
	border: 1px solid ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.whiteColor};
	cursor: pointer;
	background-color: ${(props) => props.theme.primaryColor};
	${(props) => {
		switch (props.size) {
			case 'small':
				return 'font-size: 12px;';
			case 'large':
				return 'font-size: 28px;';
			default:
				return 'font-size: 18px;';
		}
	}}

	&:hover {
		background-color: ${(props) => props.theme.secondaryColor};
		color: ${(props) => props.theme.blackColor};
	}
`;

const OutlineStyledButton = styled(StyledButton)`
	background-color: transparent;
	border: 1px solid ${(props) => props.theme.primaryColor};
	&:hover {
	}
`;

export { StyledButton, OutlineStyledButton };
