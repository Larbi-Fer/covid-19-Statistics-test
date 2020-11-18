import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
    title: {
        padding: "5px 10px"
    },
    con: {
        position: "relative",
        marginTop: "10px",
        width: "100%",
        height: "90%",
        overflow: "auto"
    },
    btnCont: {
        textAlign: "left",
        background: "#111 !important",
        borderBottom: "1px solid #181818"
    },
    cases: {
        color: "#f55",
        paddingLeft: "10px"
    },
    circle: {
        position: "absolute",
        top: "42%",
        left: "45%",
        color: "#05f"
    },
    details: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
}))