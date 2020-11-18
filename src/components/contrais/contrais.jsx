import React, { useEffect } from 'react';
import { Button, CircularProgress } from '@material-ui/core'
import makeStyle from "./countrys.style"
import { connect } from 'react-redux'

import { getAll } from '../../store/actions/actions';

function Countrys(props) {
    const classes = makeStyle()
    useEffect(props.getAllF, [])
    console.log(props.getAll);
    return (
        <div style={{height: "100%"}} >
            <h2 className={classes.title}>Countrys</h2>
            <div className={classes.con}>
                {props.getAll.length !== 0 ? props.getAll.map(data => (
                    <Button  color='primary' className={classes.btnCont} size="small" variant="contained" >
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }} >
                            <div style={{ display: "flex", alignItems: "center", paddingRight: '8px' }} >
                                <img src={`https://coronavirus.politologue.com/i/flags/${data.country}.png`} alt={data.country}/>
                            </div>
                            <div>
                                <h3>{data.country}</h3>
                                <div className={classes.details} >
                                    <div><span className={classes.cases}>cases: </span> <b>{data.cases}</b></div>
                                    <div><span className={classes.cases}>deaths: </span> <b>{data.deaths}</b></div>
                                </div>
                            </div>
                        </div>
                    </Button>
                )) : <CircularProgress className={classes.circle} />}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getAll: state.All
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllF: () => getAll(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countrys)