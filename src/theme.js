import {green,grey} from "@mui/material/colors"
import {createContext} from "react"

export const ColorModeContext=createContext()


export const customTheme=(mode)=>{
    return {
        palette:{
            mode:mode,
            ...(mode ==="dark"? {
                    primary:{
                        main:"#141b2d"
                    },
                    secondary:{
                        main:green[500]
                    },
                    neutral:{
                        darK:grey[700],
                        main:grey[500],
                        light:grey[100]
                    },
                    background:{
                        default:"#141b2d"
                    }
                }:{
                    primary:{
                        main:"#d0d1d5"
                    },
                    secondary:{
                        main:green[500],
                    },
                    neutral:{
                        dark:grey[700],
                        main:grey[500],
                        light:grey[100]
                    },
                    background:{
                        default:"#fcfcfc"
                    }

                }
            )
        },
        typography:{
            fontFamily:["Source Sans Pro","sans-serif"].join(","),
            fontSize:12,
            h1:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:40
            },
            h2:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:32
            },
            h3:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:24
            },
            h4:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:20
            },
            h5:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:16
            },
            h6:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:14
            },
        }
    }
}