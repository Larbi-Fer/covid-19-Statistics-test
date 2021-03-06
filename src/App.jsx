import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import Contrais from './components/contrais/contrais'
import Details from './components/details/details'
import Bayanate from './components/bayanate/bayanate'
import Map from './components/map/map'

import store from './store/store'

import mackStyle from './style.App'

const App = () => {

    // document.title = "covid 19"
    const classes = mackStyle()

    return (
        <Provider store={store}>
            <div className={classes.blocks}>
                <Con classes={classes}  />
                <MapABay classes={classes} />
                <Det classes={classes} />
            </div>
        </Provider>
    )
}

const Con = ({classes}) => (
    <div className={`${classes.blockAll} ${classes.block1}`} >
        <Contrais />
    </div>
)
const MapABay = ({classes}) => (
    <div className={`${classes.blockAll} ${classes.block2}`}>
        <div className={`${classes.blockAll} ${classes.block2Top}`}>
            <Map />
        </div>
        <div className={`${classes.blockAll} ${classes.block2Bottom}`}>
            <Bayanate />
        </div>
    </div>
)
const Det = ({classes}) => (
    <div className={`${classes.blockAll} ${classes.block3}`}>
        <Details />
    </div>
)

export default App;