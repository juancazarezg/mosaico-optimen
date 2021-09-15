// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";

import PageScrollTop from './component/PageScrollTop';

// Home layout
import Home from './home/Home';

// Element Layout
import error404 from "./elements/error404";



//Productos
import Aiops from "./elements/productos/Aiops"
import Orka from "./elements/productos/Orka"
import Fourops from "./elements/productos/4ops"
import Gema from "./elements/productos/Gema"


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>

                        {/* Productos */}
                        <Route exact path={`${process.env.PUBLIC_URL}/aiops`} component={Aiops}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/orka`} component={Orka}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/4ops`} component={Fourops}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/gema`} component={Gema}/>

                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();