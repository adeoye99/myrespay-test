import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import "./PermanentDrawer.css"
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from '../ImageComponent/Image';
import Typography from '@mui/material/Typography';
import Property from '../Pages/Property12/Propertycomponent/Property';


const drawerWidth = 240;
const menuData = [
  {
     text :"Dashboard",
     icon:  <Image src = "/Images/Vector (1).png"/>
  },
  {
    text :'Properties',
    icon: <Image src = "/Images/Vector (2).png"/>
},
 {
  text: 'Application',
  icon: <Image src = "/Images/Vector (3).png"/>
}, 
{
  text:'Rent&Losses',
  icon: <Image src = "/Images/Vector (4).png"/>
},
{
   text:'Invoice&Payment',
   icon: <Image src = "/Images/Vector (5).png"/>
},
{
  text:'Maintenance',
  icon: <Image src = "/Images/Vector (6).png"/>
},
{
  text:'Facility Management',
  icon: <Image src = "/Images/Vector (7).png"/>
} , 
{ 
  text:'Visitors',
  icon: <Image src = "/Images/Vector (8).png"/>
}

]
const menuData2 = [
  {
    text:'Roles',
    icon: <Image src = "/Images/Vector (9).png" />
  }, 
  {
    text:'Settings',
    icon: <Image src = "/Images/Vector (10).png"/>
  },
  { 
    text:'Logout',
    icon:<Image src = "/Images/Vector (11).png"/>
  }
  ]


export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex', bgcolor :"#E5E5E5"}}>
      <CssBaseline />
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            height:"90%",
            background:"#038618"
          },
         
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <img className = "drawer_logo"src ="/Images/R2.png "/>
        <List sx ={{padding:"0",marginTop: "10px",}}>
          
          {menuData.map((item, index) => (
            <ListItem sx = {{ color : "white",
             marginLeft : "10px",padding:"0px",height:"40px",width: "220px",fontSize : "0.1rem",}}button key={item.text}>
              <ListItemIcon sx = {{paddingLeft: "15px"}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx = {{color : "white" ,marginLeft:"6px"}}>
          {menuData2.map((item, index) => (
            <ListItem sx = {{ height:"35px",marginLeft : "0",width: "220px",}} button key={item.text}>
              <ListItemIcon>
                 {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      > 
          <Toolbar/>
          <Typography  paragraph>
          <div className='property12_section1'>
          <h1 className='property12_header'>Property</h1>
          <button className = "property12_button"> Add New Property</button>  
        </div>
        <Property
         Propertytitle = "Top Court Garden"
         propertyamount  = "1,000 units"
         propertype = "Residential"
          propertylocation = "Challenge, Ibadan"
        />
        <Property
           Propertytitle = "Top Court Garden"
           propertyamount  = "1,000 units"
           propertype = "Residential"
          propertylocation = "Challenge, Ibadan"
        />
        <Property
            Propertytitle = "Top Court Garden"
            propertyamount  = "1,000 units"
            propertype = "Residential"
             propertylocation = "Challenge, Ibadan" 
        />
         <Property
            Propertytitle = "Top Court Garden"
            propertyamount  = "1,000 units"
            propertype = "Residential"
             propertylocation = "Challenge, Ibadan" 
        />
         <Property
            Propertytitle = "Top Court Garden"
            propertyamount  = "1,000 units"
            propertype = "Residential"
             propertylocation = "Challenge, Ibadan" 
        />
        </Typography>
        <Typography paragraph>
          
        </Typography>

         </Box>
        </Box>
        );
    }