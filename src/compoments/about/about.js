import React from 'react';
import '../../styling/about.css';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import StarIcon from '@material-ui/icons/Star';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../images/image-1.png';
import {withTranslation} from "react-i18next";

class About extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }
  render() {
    const {t}=this.props
    return (
      <section id="about" className="pb-20 bg-gray-100 -mt-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap relative z-50">
            <div className="w-full md:w-4/12 px-4 flex justify-center text-center">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                <div className="p-4 undefined">
                  <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-red-500">
                    <span className="material-icons text-white text-xl leading-none">
                      <StarIcon />
                    </span>
                  </div>
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                    {t("aboutComponent.topBoxes.flexible.title")}
                  </h1>
                  <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                  {t("aboutComponent.topBoxes.flexible.paragraph")}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 flex justify-center text-center">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                <div className="p-4 undefined">
                  <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-light-blue-500">
                    <span className="material-icons text-white text-xl leading-none">
                      <AutorenewIcon />
                    </span>
                  </div>
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                  {t("aboutComponent.topBoxes.fast.title")}
                  </h1>
                  <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                  {t("aboutComponent.topBoxes.fast.paragraph")}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 flex justify-center text-center">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                <div className="p-4 undefined">
                  <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-teal-500">
                    <span className="material-icons text-white text-xl leading-none">
                      <FingerprintIcon />
                    </span>
                  </div>
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                  {t("aboutComponent.topBoxes.innovation.title")}
                  </h1>
                  <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                  {t("aboutComponent.topBoxes.innovation.paragraph")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos={'zoom-in'}
            className="flex flex-wrap items-center mt-32"
          >
            <div className="w-full md:w-5/12 px-4 mx-auto">
              <h1 className="text-gray-900 text-3xl font-serif font-bold leading-normal mt-0 mb-2">
                {t("aboutComponent.sideBySideComponents.leftComponent.title")}
              </h1>
              <p className="text-blue-gray-700 text-lg font-light leading-relaxed mt-6 mb-4">
              {t("aboutComponent.sideBySideComponents.leftComponent.paragraph1")}
              </p>
              <p className="text-blue-gray-700 text-lg font-light leading-relaxed mt-6 mb-4">
              {t("aboutComponent.sideBySideComponents.leftComponent.paragraph2")}
              </p>
            </div>
            <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                <img
                  className="w-full rounded-lg -mt-9 shadow-lg undefined"
                  src={image}
                  alt="computerPicture"
                ></img>
                <div className="p-4 undefined">
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                  {t("aboutComponent.sideBySideComponents.rightComponent.title")}
                  </h1>
                  <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                  {t("aboutComponent.sideBySideComponents.rightComponent.paragraph")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos={'fade-in'} className="header-content text-center">
            <h4 className="header-content-headeing">{t("aboutComponent.companyValueComponent.title")}</h4>
            <h2 className="header-content-headeing2">{t("aboutComponent.companyValueComponent.subtitle")}</h2>
            <p className="header-content-paragraph">
            {t("aboutComponent.companyValueComponent.paragraph")}
            </p>
          </div>
          <div className="solutions-module">
            <div data-aos={'zoom-in-right'} className="solution-item">
              <h3 className="solution-item-title">{t("aboutComponent.companyValueComponent.boxes.box1.title")}</h3>
              <p className="header-content-paragraph">
              {t("aboutComponent.companyValueComponent.boxes.box1.paragraph")}
              </p>
            </div>
            <div data-aos={'zoom-in-left'} className="solution-item">
              <h3 className="solution-item-title">{t("aboutComponent.companyValueComponent.boxes.box2.title")} </h3>
              <p className="header-content-paragraph">
              {t("aboutComponent.companyValueComponent.boxes.box2.paragraph")}
              </p>
            </div>
            <div data-aos={'zoom-in-right'} className="solution-item">
              <h3 className="solution-item-title">{t("aboutComponent.companyValueComponent.boxes.box3.title")} </h3>
              <p className="header-content-paragraph">
              {t("aboutComponent.companyValueComponent.boxes.box3.paragraph")}
              </p>
            </div>
            <div data-aos={'zoom-in-left'} className="solution-item">
              <h3 className="solution-item-title">{t("aboutComponent.companyValueComponent.boxes.box4.title")}</h3>
              <p className="header-content-paragraph">
              {t("aboutComponent.companyValueComponent.boxes.box4.paragraph")}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const AboutTranslated=withTranslation("common")(About)
export default AboutTranslated;
