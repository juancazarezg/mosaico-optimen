import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import ModalVideo from 'react-modal-video';


class VideoPopup extends Component {
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
    render() {
        return (
            <>
                {/* Start Page Wrapper  */}
                <main className="page-wrapper">

                    {/* Start Video Area  */}
                    <div className="rn-section ptb--120 bg_color--1 line-separator">
                        <div className="container">
                             <div className="row sercice-details-content align-items-center">
                                <div className="col-lg-12">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/bg/bg-image-1.jpg" alt="Service Images"/>
                                        <ModalVideo channel='custom' isOpen={this.state.isOpen} url='https://videos-mosaico.s3.amazonaws.com/optiairways.mp4' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Video Area  */}
                </main>
             
            </>
        )
    }
}

export default VideoPopup;