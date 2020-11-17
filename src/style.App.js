import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    blocks: {
        display: "flex",
        height: "100%"
    },
    blockAll: {
        height: '100%',
        border: '1px solid #222'
    },
    block1: {
        width: "20%",
    },
    block2: {
        width: "45%",
    },
    block3: {
        width: "35%",
    },
    block2Top: { height: "45%" },
    block2Bottom: { height: "55%" }
}))