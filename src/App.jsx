import React from 'react'

import Contrais from './components/contrais/contrais'
import Details from './components/details/details'
import Map from './components/map/map'

const App = () => {

    // document.title = "covid 19"

    return (
        <React.Fragment>
            <h1>App</h1>
            <Contrais />
            <Details />
            <Map />
        </React.Fragment>
    )
}

export default App;