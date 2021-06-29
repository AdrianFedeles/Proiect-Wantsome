import React from "react";
import styled from "styled-components"
import "../../../styling/generalStyling.css";
import {withTranslation} from "react-i18next";

const Horizontal=styled.hr`
border: solid #E3E3E3;
    border-top-color: rgb(227, 227, 227);
    border-top-width: medium;
    border-right-color: rgb(227, 227, 227);
    border-right-width: medium;
    border-bottom-color: rgb(227, 227, 227);
    border-bottom-width: medium;    
    border-left-color: rgb(227, 227, 227);
    border-left-width: medium;
border-width: 1px 0 0;
clear: both;
margin: 11px 0 30px;
height: 0;
`

const BannerText=styled.div`
    width: 100%;
    text-align:center;
    ${Horizontal}{
        width: 60%;
margin: 18px auto 24px auto;
border-color: #2F2D2E;
border-color: rgba(150, 150, 150, .1);
    }
`
const BannerRow=styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const Header1=styled.h1`
font-size:90px;
color:white;
font-weight:bold;
letter-spacing:2px;
@media(max-width:720px){
font-size:40px;
}
`
const Social=styled.ul`
    margin: 24px 0;
    padding: 0;
    font-size: 30px;
    list-style: none outside;
    @media(max-width:474px){
        display: none;
        }
`
const SocialButton=styled.div`
    margin-right: 30px;
    font: 16px/30px 'opensans-bold', sans-serif;
background: rgba(17, 171, 176,0.5);
display: inline-block;
text-decoration: none;
letter-spacing: 0;
color: #fff;
padding: 12px 20px;
    padding-right: 20px;
    padding-left: 20px;
margin-bottom: 18px;
border: none;
height: auto;
-webkit-transition: all .2s ease-in-out;
-moz-transition: all .2s ease-in-out;
-o-transition: all .2s ease-in-out;
-ms-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
-moz-border-radius: 0px;
-webkit-border-radius: 0px;
-khtml-border-radius: 0px;
border-radius: 0px;
padding-left: 30px;
    padding-right: 30px;
    border-radius:10px;
    :hover{
        color:white;
    }
    @media(max-width:474px){
        margin-right:0;
    }
`

class presentationComponent extends React.Component{

render(){
    const { t } = this.props;
    return(
        <BannerRow>
            <BannerText>
                <Header1>{t("presentationComponent.title")}</Header1>
                <h3 style={{font: "18px/1.9em librebaskerville-regular, serif",color: "#ddd",margin:"auto",width:"70%"}}>{t("presentationComponent.subtitle")}</h3>
                <Horizontal/>
                <Social>
                <SocialButton>{t("presentationComponent.socialButtons.development")}</SocialButton>
                <SocialButton>{t("presentationComponent.socialButtons.creation")}</SocialButton>
                <SocialButton>{t("presentationComponent.socialButtons.inovation")}</SocialButton>
                <SocialButton style={{margin:"0"}}>{t("presentationComponent.socialButtons.security")}</SocialButton>
                </Social>
            </BannerText>
        </BannerRow>
    )
}

}
const presentationComponentTranslated=withTranslation('common')(presentationComponent)
export default presentationComponentTranslated