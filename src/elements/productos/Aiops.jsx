import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/HeaderThree";
import Footer from "../../component/footer/FooterTwo";


class Aiops extends Component{
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
                <PageHelmet pageTitle='AIOPS' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo-optimen.png" homeLink="/"/>

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient2">AIOPS</h2>
                                    <p>Airport Operations Sentinel</p>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="https://demo.optimen.com.mx/demo_aiops/auth">Ver demo</a>
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
                                                    <ModalVideo channel='custom' isOpen={this.state.isOpen} url='https://videos-mosaico.s3.amazonaws.com/aiops.mp4' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <div className="section-title">
                                                        <span className="subtitle">Airport Operations Sentinel</span>
                                                        <h2 className="title">AIOPS</h2>
                                                        <p className="description">Aplicación web y móvil para registrar los suministros diarios de recursos complementarios (Combustible, Pax, Carga, etc.) utilizados en las operaciones de rampa ocurridas en un aeropuerto, con posibilidad de incluir imágenes para evidencias. </p>
                                                        <p className="description">La carga de información es en linea o por respaldo de acuerdo a lógistica de cada cliente; en un modelo exportable a diferentes industrias con control de recursos y contratos con terceros</p>
                                                    </div>
                                                    <ul className="liststyle mt--30">
                                                        <li>Registro de insumos</li>
                                                        <li>Registro por evento</li>
                                                        <li>Exportación de reportes en formato PDF y XLS</li>
                                                        <li>Herramienta de consolidación entre autoridades y proveedores</li>
                                                        <li>Suministro de data hacia otros sistemas</li>
                                                        <li>Integración con sistemas e vuelo</li>
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
export default Aiops;