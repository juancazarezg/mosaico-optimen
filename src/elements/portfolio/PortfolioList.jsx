import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="/assets/images/portfolio/portfolio-4.jpg" alt="Mosaico Apps Optimen" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/portfolio-5.jpg" alt="Mosaico Apps Optimen" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/portfolio-6.jpg" alt="Mosaico Apps Optimen" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/portfolio-7.jpg" alt="Mosaico Apps Optimen" />;
const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-8.jpg" alt="Mosaico Apps Optimen" />;
const Portfolio_image6 = <img src="/assets/images/portfolio/portfolio-9.jpg" alt="Mosaico Apps Optimen" />;

const PortfolioListContent = [
    /*{
        image: Portfolio_image,
        category: 'Development',
        title: 'AIOPS VOI',
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.',
        link: 'aiops-voi'
    },*/
    {
        image: Portfolio_image,
        category: '',
        title: 'AIOPS',
        description: 'Airport Operations Sentinel',
        link: '/aiops'
    },
    {
        image: Portfolio_image2,
        category: '',
        title: 'ORKA',
        description: 'Optimen Resources & KPI Analytics',
        link: '/orka'
    },
    {
        image: Portfolio_image3,
        category: '',
        title: '4OPS',
        description: 'Facilitate the resource allocation and personnel assignment',
        link: '/4ops'
    },
    {
        image: Portfolio_image4,
        category: '',
        title: 'RADAR CONTROL',
        description: 'Strategic Maintenance Control​',
        link: '/radarcontrol'
    },
    {
        image: Portfolio_image5,
        category: '',
        title: 'DIRECSMAN',
        description: '',
        link: '/direcsman'
    },
    {
        image: Portfolio_image6,
        category: '',
        title: 'VRP',
        description: '',
        link: '/vrp'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`im_portfolio ${styevariation}`}>
                            <div className="thumbnail_inner">
                                <div className="thumbnail">
                                    <Link to={value.link}>
                                        {value.image}
                                    </Link>    
                                </div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <div className="portfolio_heading">
                                        <div className="category_list">
                                            <Link to={value.link}>{value.category}</Link>
                                        </div>
                                        <h4 className="title"><Link to={value.link}>{value.title}</Link></h4>
                                    </div>
                                    <div className="portfolio_hover">
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="transparent_link" to={value.link}></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;