import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
//import { Link } from 'react-router-dom';
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import PortfolioList from "../elements/portfolio/PortfolioList";
import Helmet from "../component/common/Helmet";
import VideoPopup from '../elements/common/Video';

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Optimen',
        title: 'Bienvenido<br/> Conoce de lo que somos capaces.',
        description: '',
        buttonText: 'Download My CV',
        buttonLink: ''
    }
]
const Home = () => {
    return (
        <div>
            <Helmet pageTitle="Mosaico" />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span className="theme-color font-700">{value.category}</span> : ''}
                                            {value.title ? <h1 className="title theme-gradient2" dangerouslySetInnerHTML={{__html: value.title}} ></h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 



            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area pb--120 bg_color--5">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mt--30 mb--30 mb_sm--0">
                                        <span className="subtitle">Nuestros productos</span>
                                        <h2 className="title">Soluciones con software</h2>
                                        <p>Resolvemos problemas de optimización a través <br/> de nuestros productos hechos a la medida.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}    

            {/* Start Service Area */}
            <div id="service" className="fix">
                <VideoPopup/>
            </div>

            {/* Start Service Area  
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper pb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30 mb_sm--0">
                                    <span className="subtitle">¿Por qué elegirnos?</span>
                                    <h2 className="title">Beneficios para ti</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            End Service Area  */}         

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
}

export default Home;
