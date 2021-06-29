import React from "react";
import "../../styling/contact.css";
import axios from 'axios';
import {withTranslation} from "react-i18next";
let mailName="";
let email="";
let subject="";
let message="";

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            error:null
        }
    }
   
render(){
        const { t } = this.props;
    const validateFrom=(event)=>{
        event.preventDefault()
        if(event.target.contactName.value===""){
            this.setState({
                error:`${t("contactComponent.formLAbels.error")}  ${t("contactComponent.formLAbels.name")}!`
            })
        }else if(event.target.contactEmail.value===""){
            this.setState({
                error:`${t("contactComponent.formLAbels.error")}  ${t("contactComponent.formLAbels.email")}!`
            })
        }else if(event.target.contactSubject.value===""){
            this.setState({
                error:`${t("contactComponent.formLAbels.error")}  ${t("contactComponent.formLAbels.subject")}!`
                
            })
        }
        else if(event.target.contactMessage.value===""){
            this.setState({
                error:`${t("contactComponent.formLAbels.error")}  ${t("contactComponent.formLAbels.message")}!`
                
            })
        }else{
            this.setState({
                error:""
            })
             let data={
            "name":mailName,
            "email":email,
            "subiect":subject,
            "message":message,};
            let header={"Content-Type": "application/json"};
            axios.post("mailFrom.php",data,header).then(response=>response)
            .catch(e=>console.log(e));
            document.getElementById("contactForm").reset()
             }
            }
 
    return(
        <section id="contact" style={{background: "#191919",paddingTop: "96px",paddingBottom: "102px",color: "#636363",}}>
            <div data-aos={"zoom-in"} className="row section-head">
                <div className="ten columns">
                    <p className="lead">
                    {t("contactComponent.title")}
                    </p>
                </div>
                <div className="row">
                    <div className="eight columns">
                    <form  method="post" action="mailFrom.php" id="contactForm" onSubmit={validateFrom} name="contactForm">
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">{t("contactComponent.formLAbels.name")} <span className="required">*</span></label>
                                <input onKeyDown={this.verifyImput} type="text" size="35" onChange={e => {mailName = e.target.value}} id="contactName" name="contactName" defaultValue=""/>
                            </div>
                                <div>
                                <label htmlFor="contactEmail">{t("contactComponent.formLAbels.email")} <span className="required">*</span>
                                </label><input onKeyDown={this.verifyImput} type="email" size="35" id="contactEmail" onChange={e => {email = e.target.value}} name="contactEmail" defaultValue=""/></div>
                                <div><label htmlFor="contactSubject">{t("contactComponent.formLAbels.subject")}</label>
                                <input onKeyDown={this.verifyImput} type="text" size="35" id="contactSubject" onChange={e => {subject = e.target.value}} name="contactSubject" defaultValue=""/></div>
                                <div><label htmlFor="contactMessage">{t("contactComponent.formLAbels.message")} <span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" onChange={e => {message = e.target.value}} name="contactMessage"></textarea></div>
                                <label style={{color:"red",width: "100%",textAlign: "center",display: "block"}}>{this.state.error}</label>
                                <div><button className="submit" type="submit">Submit</button>
                            </div>
                        </fieldset>
                        
                    </form>
                    </div>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                        <h4 style={{color:"white"}}>{t("contactComponent.asideContent.component1.title")}</h4>
                        <p className="more-info">
                        {t("contactComponent.asideContent.component1.paragraph1")}
                        </p>
                        </div>
                        <div className="widget widget_contact">
                            <h4 style={{color:"white"}}>{t("contactComponent.asideContent.component2.title")}</h4>
                            <p className="more-info">
                            {t("contactComponent.asideContent.component2.paragraph1")}<br></br>
                            {t("contactComponent.asideContent.component2.paragraph2")}
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
}
const ContactTranslated=withTranslation("common")(Contact)
export default ContactTranslated