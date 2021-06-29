import React from "react"
import Home from "./compoments/home/home";
import About from "./compoments/about/about";
import Services from "./compoments/services/services";
import Contact from "./compoments/contact/contact";
import Footer from "./compoments/footer/footer";

class Main extends React.Component{
    render(){
        return(
            <div>
                <Home/>
                <About/>
                <Services/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}
export default Main