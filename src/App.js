import React,{useState} from"react"
import {ThemeProvider,createTheme, Grid} from "@mui/material"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import {ColorModeContext} from "./theme"
import Sidebar from "./scenes/global/Sidebar"
import Dashboard from "./scenes/dashboard"
import Team from "./scenes/team"
import Topbar from "./scenes/global/Topbar"
import { ProSidebarProvider } from 'react-pro-sidebar';

import Header from "./components/Header"
import { customTheme } from "./theme"
import {styled} from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"


const App=()=>{
  const [mode,setMode]=useState("light")


  const theme=createTheme(customTheme(mode))

  const handleToggleTheme=()=>{
      return setMode((prev)=>(prev==="light"?"dark":"light"))
  }

  return(
  <Router>


    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ColorModeContext.Provider value={{handleToggleTheme}}>
        <ProSidebarProvider>
          <Grid container sx={{height:"100vh"}}>
            <Grid item sm={2}>
              <Sidebar/>
            </Grid>
            <Grid item sm={9.5} marginLeft="30px" >
              <Topbar/>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="team" element={<Team/>}/>
              </Routes>
            </Grid>
          </Grid>
        </ProSidebarProvider>

      </ColorModeContext.Provider>
    </ThemeProvider>
  </Router>

  )
}


export default App