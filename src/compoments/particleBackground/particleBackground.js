import React from "react";
import Particles from "react-particles-js"
import config from "./particleBgConfig"
import styled from "styled-components"
import PresentationComponentTranslated from "../home/presentationComponent/presentationComponent"


const ParticleBackgorund=styled.div`
background: linear-gradient(29deg, rgba(0,0,0,1) 53%, rgba(9,3,98,1) 96%, rgba(59,139,179,1) 100%);
height:100vh;
position:relative;
`
 
class ParticleBackground extends React.Component{


    render(){
        return(
            <ParticleBackgorund>
            <Particles params={config} style={{width: "100%",height: "100%",position: "absolute",zIndex: "1",top:" 0px",left: "0px"}} ></Particles>
             <PresentationComponentTranslated></PresentationComponentTranslated>
            </ParticleBackgorund>
        )
    }
}
export default ParticleBackground