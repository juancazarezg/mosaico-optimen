import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/HeaderThree";
import Footer from "../../component/footer/FooterTwo";


class Vrp extends Component{
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
                <PageHelmet pageTitle='VRP' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo-optimen.png" homeLink="/"/>

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--9"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient2">VRP</h2>
                                    <p>Vehicle Routing Problem</p>
                                    <div className="about-button mt--50" style={{display:"none"}}>
                                        <a className="rn-button-style--2 btn-solid" href="http://sura.4ops-optimen.com/">Ver demo</a>
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
                                                    <ModalVideo channel='custom' isOpen={this.state.isOpen} url='./assets/video/vrp.mp4' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <div className="section-title">
                                                        <span className="subtitle">Vehicle Routing Problem</span>
                                                        <h2 className="title">VRP</h2>
                                                        <p className="description" style={{textAlign: 'justify'}}>En logística hemos enfocado nuestra experiencia en la optimización de redes de transporte con algoritmos de inteligencia artificial.</p>
                                                        <p className="description" style={{textAlign: 'justify'}}>Gracias a nuestro sfotware somos capaces de eficientizar el transportar personal desde un punto de encuentro o estación de inicio hacia las diferentes locaciones o fábricas con una demanda específica, haciendo uso de un número específico de vehículos los cuales tienen una capacidad limitada. </p>
                                                        <p className="description" style={{textAlign: 'justify'}}>La herramienta es capaz de modelar diferentes etapas del proceso logístico desde la planeación hasta la ejecución de las operaciones.</p>
                                                    </div>
                                                    <ul className="liststyle mt--30">
                                                        <li>Plataforma Web</li>
                                                        <li>Data real de Mapas</li>
                                                        <li>Mejores rutas</li>
                                                        <li>Interfaz gráfica fácil de usar</li>
                                                    </ul>
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
export default Vrp;