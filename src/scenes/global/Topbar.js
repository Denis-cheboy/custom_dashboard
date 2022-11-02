import { IconButton, InputBase ,Box,useTheme} from '@mui/material'
import React,{useContext} from 'react'
import {ColorModeContext} from "../../theme"
import {LightModeOutlined,DarkModeOutlined,SettingsOutlined,NotificationsOutlined,PersonOutlined} from "@mui/icons-material"
import {Search} from "@mui/icons-material"

function Topbar() {
  const {handleToggleTheme}=useContext(ColorModeContext)
  const theme=useTheme()
  return (
    <Box display="flex"  justifyContent="space-between" alignItems="center" p={2}>
      <Box display="flex" alignItems="center" backgroundColor="#434957" borderRadius="3px">
        <InputBase sx={{ml:2,flex:1,}} placeholder="Search"/>
        <IconButton type="button" sx={{p:1}}>
          <Search/>
        </IconButton>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleToggleTheme}>
          {theme.palette.mode==="dark"?<DarkModeOutlined/>:<LightModeOutlined/>}
        </IconButton>
        <IconButton>
          <SettingsOutlined/>
        </IconButton>

        <IconButton>
          <NotificationsOutlined/>
        </IconButton>

        <IconButton>
          <PersonOutlined/>
        </IconButton>


      </Box>

    </Box>
  )
}

export default Topbar