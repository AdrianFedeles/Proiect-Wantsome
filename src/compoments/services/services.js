import React from 'react';
import "../../styling/services.css"
import background from "../../images/background.png";
import StarIcon from '@material-ui/icons/Star';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import FaceIcon from '@material-ui/icons/Face';
import AssignmentReturnedTwoToneIcon from '@material-ui/icons/AssignmentReturnedTwoTone';
import AndroidTwoToneIcon from '@material-ui/icons/AndroidTwoTone';
import {withTranslation} from "react-i18next";
class Services extends React.Component {
  render() {
    const {t}=this.props
    return (
      <section id="services" className="section-background" >
        <div data-aos={"zoom-in"} className="s-c">
          <div className="sh">
            <h2 className="header-content-headeing">{t("servicesComponent.title1")}</h2>
                <h2 className="header-content-headeing2">
                {t("servicesComponent.subtitle1")}
                </h2>
          </div>
        </div>
        <div className="solutions-module background-image" style={{backgroundImage:`url(${background})`}} >
            <div data-aos={"zoom-in-right"} className="solution-item services service-background">
            <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><StarIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes1.box1.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes1.box1.paragraph")}
                  </p>
                </div>
                <div data-aos={"zoom-in-right"} className="solution-item services service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><HomeWorkIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes1.box2.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes1.box2.paragraph")}
                  </p>
                  
                </div>
                <div data-aos={"zoom-in-right"} className="solution-item services service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><AddToHomeScreenIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes1.box3.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes1.box3.paragraph")}
                  </p>
                </div>
                <div data-aos={"zoom-in-right"} className="solution-item services service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><EmojiPeopleIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes1.box4.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes1.box4.paragraph")}
                  </p>
                </div>

                <div></div>
                <div data-aos={"zoom-in-right"} className="solution-item services service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><LocalShippingIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes1.box5.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes1.box5.paragraph")}
                  </p>
                </div>
                <div data-aos={"zoom-in-right"} className="solution-item services service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><FaceIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes1.box6.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes1.box6.paragraph")}
                  </p>
                </div>
            </div>


            <div data-aos={"zoom-in"} className="s-c">
          <div className="sh">
            <h2 className="header-content-headeing">{t("servicesComponent.title2")}</h2>
                <h2 className="header-content-headeing2">
                {t("servicesComponent.subtitle2")}
                </h2>
          </div>
        </div>
        <div className="solutions-module " >
            <div data-aos={"fade-in-right"} className="solution-item services-1 service-background">
            <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><StarIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes2.box1.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes2.box1.paragraph")}
                  </p>
                </div>
                <div data-aos={"fade-in-right"} className="solution-item services-1 service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><HomeWorkIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes2.box2.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes2.box2.paragraph")}
                  </p>
                  
                </div>
                <div data-aos={"fade-in-right"} className="solution-item services-1 service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><AddToHomeScreenIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes2.box3.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes2.box3.paragraph")}
                  </p>
                </div>
                <div data-aos={"fade-in-right"} className="solution-item services-1 service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><EmojiPeopleIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes2.box4.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes2.box4.paragraph")}
                  </p>
                </div>

                <div></div>
                <div data-aos={"fade-in-right"} className="solution-item services-1 service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><LocalShippingIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes2.box5.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes2.box5.paragraph")}  
                  </p>
                </div>
                <div data-aos={"fade-in-right"} className="solution-item services-1 service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><FaceIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes2.box6.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes2.box6.paragraph")}
                  </p>
                </div>
                <div data-aos={"fade-in-right"} className="solution-item services-1 service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><AssignmentReturnedTwoToneIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes2.box7.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes2.box7.paragraph")}
                  </p>
                </div>
                <div data-aos={"fade-in-right"} className="solution-item services-1  service-background">
                <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full icon-background">
                                        <span className="material-icons text-white text-xl leading-none"><AndroidTwoToneIcon/></span>
                                    </div>
                  <h3 className="solution-item-title">{t("servicesComponent.servicesBoxes2.box8.title")}</h3>
                  <p className="header-content-paragraph">
                  {t("servicesComponent.servicesBoxes2.box8.paragraph")}
                  </p>
                </div>

            </div>
      </section>
    );
  }
}

const ServicesTranslated=withTranslation("common")(Services)
export default ServicesTranslated;
