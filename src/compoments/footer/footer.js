import React from "react"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {withTranslation} from "react-i18next";

class Footer extends React.Component{


    render(){
        const {t}=this.props
        return(
            <footer>
                <div className="row" >
                    
                    <div className="twelve columns">
                        
                        <ul className="copyright">
                            <li><div id="goTop">
                        <a className="smoothscroll" href="/#home">
                            <ExpandLessIcon/>
                        </a>
                    </div></li>
                            
                        <li>© Copyright 2021 Pursue Systems.All Rights Reserved.</li>
                        <div className="list-of-terms">
                            <li><a href="/terms">{t("footer.terms")}</a></li>
                            <li><a href="/gdpr">{t("footer.gdpr")}</a></li>
                            <li><a href="/cookie">{t("footer.cookie")}</a></li>
                        </div>
                        
                        </ul>
                    </div>
                    
                </div>
            </footer>
        )
    }
}
const FooterTranslated=withTranslation("common")(Footer)
export default FooterTranslated
