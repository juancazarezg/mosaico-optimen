import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/HeaderThree";
import Footer from "../../component/footer/FooterTwo";


class Orka extends Component{
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
                <PageHelmet pageTitle='Orka' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo-optimen.png" homeLink="/"/>

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient2">Orka</h2>
                                    <p>Optimen Resources & KPI Analytics</p>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="https://voi.orkasystems.com/test/ls-dashboard">Ver demo</a>
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
                                                    <ModalVideo channel='custom' isOpen={this.state.isOpen} url='./assets/video/orka.mp4' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <div className="section-title">
                                                        <span className="subtitle"></span>
                                                        <h2 className="title">Orka</h2>
                                                        <p className="description">Orka (Optimen Resources & KPI Analytics) es un sistema que actúa como un agente intermedio asistiendo la comunicación entre múltiples aplicaciones, almacenando la información recibida a través de interfaces con distintas fuentes de datos de la operación, recolección y almacenando información operativa, traduciendola a indicadores y reportes ejecutivos que midan el desempeño y tendencia de las variables clave en el rendimiento y  resultados diarios y periodicos de la empresa.</p>
                                                        <p className="description">Maneja entre sus indicadores gráficos Alertas, Machine Learning, Reportes, Optimización, BI mismos que aplican a diferentes industrias de producción, transformación o servicios que quieran medir su eficiencia en procesos y resultados periodicos estableciendo una analítica descriptiva, predictiva y KPI's a niveles operativos y ejecutivos que facilitan y promueven la toma de decisiones en funcion de los recursos, su asignación y resultados de tal forma que sean comparados contra presupuestos, resultados anteriores o pronósticos de resultados,  permite identificar riesgos y cuantificar la eficiencia y productividad de las variables en la empresa o areas operativas donde se implemente el sistema.</p>
                                                    </div>
                                                    <ul className="liststyle mt--30">
                                                        <li>Establece una estrategia de flujo de datos</li>
                                                        <li>Identifica fuentes de big data para implementación de interfaces de extracción de información</li>
                                                        <li>Gestiona y almacena datos</li>
                                                        <li>Analiza datos</li>
                                                        <li>Respalda la toma de decisiones por medio de reportes y paneles de visualización de información</li>
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
export default Orka;