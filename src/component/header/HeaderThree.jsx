import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/optimen.mx/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/optimen-sc/?originalSubdomain=mx'},
]
class HeaderThree extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
        
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}
    render(){
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-optimen-blanco.png" alt="Optimen" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-optimen.png" alt="Optimen" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-optimen.png" alt="Optimen" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-optimen-blanco.png" alt="Optimen" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo-optimen.png" alt="Optimen" />;
        }
        
        return(
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href={this.props.homeLink}>
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner d-none d-sm-block">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderThree;