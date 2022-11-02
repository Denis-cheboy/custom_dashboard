import React,{useState} from 'react'
import {Box, IconButton,Typography,Avatar} from "@mui/material"
import {Link} from "react-router-dom"
import { Sidebar as ProSidebar, Menu, MenuItem,SubMenu, useProSidebar } from 'react-pro-sidebar';
import {useTheme} from "@mui/material"
import {MenuOutlined, HomeOutlined,PeopleOutlined,ContactsOutlined,BarChartOutlined,MapOutlined,TimelineOutlined,PieChartOutlineOutlined,ReceiptOutlined,HelpOutlined,PersonOutlined,CalendarTodayOutlined} from "@mui/icons-material"
import {grey,} from "@mui/material/colors"
import {Button} from "@mui/material"

// import 'react-pro-sidebar/dist/css/styles.css'
const Item=({to,selected,setSelected,title,icon})=>{
  return(
    <MenuItem
    icon={icon}
    active={selected===title}
    onClick={()=>setSelected(title)}
    >
      <Link to={to} style={{textDecoration:"none",color:"inherit"}}>
          <Typography>{title}</Typography>
      </Link>
    
    </MenuItem>
  )
}
const Sidebar=()=>{
  const theme=useTheme()
  const [selected,setSelected]=useState("Dashbaord")
  const [isCollapsed,setIsCollapsed]=useState(false)

  return(
    <Box display="flex" height="100vh">
      <ProSidebar backgroundColor={theme.palette.mode==="dark"?"#434957":"#f2f0f0"}>
        <Menu>
          <MenuItem
          icon={isCollapsed?<MenuOutlined/>:undefined}
          onClick={()=>setIsCollapsed(!isCollapsed)}
          >
            {!isCollapsed &&
             <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">ADMINISTRATION</Typography>
              <IconButton onClick={()=>setIsCollapsed(true)}>
                <MenuOutlined/>
              </IconButton>
             </Box>
             }
          </MenuItem>
          {!isCollapsed &&
          <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" gap="8px" marginTop="10px">
            <Box>
              <Avatar/>
            </Box>
            <Box>
              <Typography variant="h3">John Witcher</Typography>
              <Typography variant="h5">In One Dashboard</Typography>
            </Box>
          </Box>
          }
          <Box marginTop="10px" paddingLeft={isCollapsed?undefined:"10%"}>

            <Item
            position="static"
            selected={selected}
            setSelected={setSelected}
            to="/"
            title="Dashboard"
            icon={<HomeOutlined/>}
            />
            <Typography
             varaint="h6"
             sx={{m:"15px 0 5px 20px"}}
            >
              Data
            </Typography>
            <Item
            title="Manage Team"
            to="team"
            icon={<PeopleOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            {/* <Item
            title="Contacts Information"
            to="contacts"
            icon={<ContactsOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Invoices Balances"
            to="invoices"
            icon={<ReceiptOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Typography
            varaint="h6"
            sx={{m:"15px 0 5px 20px"}}
            >
              Pages
            </Typography>
            <Item
            title="Profile Form"
            to="form"
            icon={<PersonOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="FAQ Page"
            to="faq"
            icon={<HelpOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
             <Typography
            varaint="h6"
            sx={{m:"15px 0 5px 20px"}}
            >
            Charts
            </Typography>
            <Item
            title="Bar Chart"
            to="bar"
            icon={<BarChartOutlined/>}
            selected={selected}
            setSelected={setSelected}
            /> <Item
            title="Pie Chart"
            to="pie"
            icon={<PieChartOutlineOutlined/>}
            selected={selected}
            setSelected={setSelected}
            /> <Item
            title="Line Chart"
            to="line"
            icon={<TimelineOutlined/>}
            selected={selected}
            setSelected={setSelected}
            /> <Item
            title="Geopgraphy Chart"
            to="/geography"
            icon={<MapOutlined/>}
            selected={selected}
            setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>

    </Box>

  )
}

export default Sidebar