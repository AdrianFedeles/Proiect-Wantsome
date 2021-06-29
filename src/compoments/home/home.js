import React from "react"
import ParticleBackground from "../particleBackground/particleBackground";
import IndexNavBarTranslate from "../navbar/navigationBar";

class Home extends React.Component{
    render(){
        return(
        <div id="home" style={{position:"relative",minHeight: "500px",width: "100%",textAlign: "center",overflow: "hidden"}}>
           <IndexNavBarTranslate/> 
           <ParticleBackground/>
        </div>)
    }
}
export default Home