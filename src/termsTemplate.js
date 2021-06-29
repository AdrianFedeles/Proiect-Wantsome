import React from 'react';
import {Link} from "react-router-dom"
import Footer from './compoments/footer/footer';
import {withTranslation} from "react-i18next";
import IndexNavBarTranslate from "./compoments/navbar/navigationBar";
class TermsTemplate extends React.Component {


  render() {
const {t}=this.props;
const{firstLink}=this.props

function createList(param,primary){
    let listOfItems=Object.keys(param).map((elem,index)=>{
        return <li key={index+"list"}>{t(`${firstLink}.${primary}.${elem}`)}</li>
})
        return <ul key={primary+"list"} style={{padding:0}}>{listOfItems}</ul>
}

function createContent(){
     const cookieObject=t(`${firstLink}`, {returnObjects: true})
      return Object.keys(cookieObject).map((elem,index)=>{
         if(elem.includes("subtitle")){
            return <h2 key={index}>{t(`${firstLink}.${elem}`)}</h2>
        } else if(elem.includes("paragraph")){
            return <p key={index}>{t(`${firstLink}.${elem}`)}</p>
        } else if(elem.includes("unnorderedList")){
             return createList(cookieObject[elem],elem)
        }})
      }
   
let component=createContent();
    return (
      <div style={{background: '#191919',paddingTop:"100px"}}>
        <IndexNavBarTranslate/>
        <div
          style={{
            color: 'white',
            padding: '48px 0 96px 0',
            width:"80%",margin:"auto"
          }}
        >
          <span style={{marginBottom:"20px",display:"block",}} ><Link style={{color:"black",background:"white",padding:"10px"}} to="/">Go Home</Link></span>
          <h2 className="header-content-headeing">{t(`footer.${firstLink}`)}</h2>
          <div className="row section-head">
            <div style={{ textAlign: 'left' }}>
             {component}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const TermsTemplateTranslate=withTranslation("common")(TermsTemplate)
export default TermsTemplateTranslate;
