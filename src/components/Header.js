import {Box,Typography,Button} from "@mui/material"
import {green } from "@mui/material/colors"

import {useContext} from "react"

import {ColorModeContext} from "../theme"


const Header=({title,subtitle})=>{
    
    return(
        <Box mb="30px">
            <Typography variant="h2" sx={{mb:"5px"}}>{title}</Typography>
            <Typography variant="h5" color={green[500]}>{subtitle}</Typography>
        </Box>
    )
}

export default Header