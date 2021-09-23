import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/HeaderThree";
import Footer from "../../component/footer/FooterTwo";


class RadarControl extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='RadarControl' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo-optimen.png" homeLink="/"/>

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient2">Radar Control</h2>
                                    <p></p>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="http://radartest.optimen.com.mx/login">Ver demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row row--35 sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
                                                    <ModalVideo channel='custom' isOpen={this.state.isOpen} url='./assets/video/radarcontrol1.mp4' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <div className="section-title">
                                                        <span className="subtitle"></span>
                                                        <h2 className="title">Radar Control</h2>
                                                        <p className="description">Strategic Management System for Aeronautical MROs (Maintenance, Repair and Operations)​</p>
                                                        <p className="description">A system that allows planning, execution and follow up or the different processes of an Aircraft Maintenance Base​</p>
                                                        <p className="description">Provides overall direction to a MRO and involves specifying the organization’s objectives, developing policies and plans​</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default RadarControl;