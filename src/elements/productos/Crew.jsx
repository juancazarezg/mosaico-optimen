import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/HeaderThree";
import Footer from "../../component/footer/FooterTwo";


class Crew extends Component{
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
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient2">DIRECSMAN </h2>
                                    <p>Digital Records System Management and Certification</p>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="https://demo.optimen.com.mx/crew">Ver demo</a>
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
                                                    <ModalVideo channel='custom' isOpen={this.state.isOpen} url='https://videos-mosaico.s3.amazonaws.com/radarcontrol.mp4' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <div className="section-title">
                                                        <span className="subtitle">Digital Records System Management and Certification</span>
                                                        <h2 className="title">DIRECSMAN </h2>
                                                        <p className="description">Sistema para la administración y control de alumnos, cursos, resultados, e instructores, por registro digital para optimizar entrega de resultados con certificados y firmas electrónicas, agilizando trámites individuales o por grupos.</p>
                                                        <p className="description">Asegura el seguimiento de evaluaciones y gestión de certificaciones para Tripulantes o personal con documentos de capacitación especializada, costosa o que requieren control puntual por evento, permite la consolidación de resultados y evaluación por etapas, incrementando la seguridad y eficiencia de los recursos.</p>
                                                        <p className="description">DIRECSMAN recopila y proyecta información estandarizada por participante, curso, calificación, o necesidades de cada empresa. El sistema administra el rendimiento de los participantes y sus evaluaciones. Permite certificar, registrar resultados oficiales y presentar auditorias, expedientes por programa de capacitación, o niveles de capacitación establecidos por las directrices administrativas, sindicatos, acuerdos de industria, y autoridades locales o extranjeras para asegurar la cobertura y requerimientos legales. Además, genera bases de información para análisis de datos y facilita la planeación y control de recursos en la producción.</p>
                                                        <p className="description">Permite a los instructores evaluar adiestramientos y conformar estrategias aprendizaje. Provee acceso a los avances de cada participante o tripulante, y de forma digital, establece registros de control y seguimientos, acordes a los requerimientos establecidos por cada programa de adiestramiento.</p>
                                                        <p className="description">El sistema registra y da seguimiento de resultados de adiestramiento en simuladores, Line checks, y expedientes digitales, con soluciones de alta tecnología en certificaciones y control de recursos.</p>
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
export default Crew;