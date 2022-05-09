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
import { IoAdd } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BiArrowBack } from "react-icons/bi";







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

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
         <p className='property12_backicon' closeButton>  <BiArrowBack closeButton/> Back</p>
        <Modal.Header style ={{border:"none"}} closeButton>
         
          <Modal.Title id="contained-modal-title-vcenter">
              Add New Property
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group
            style = {{ marginLeft: "30px" ,marginRight: "30px"}} 
            className="mb-3" 
            controlId="exampleForm.ControlInput1">
              <Form.Label>Property Name</Form.Label>
              <Form.Control
                style = {{ width: "400px",justifyContent : "center"}}
                type="text"
                placeholder="Zone B House"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              style = {{ marginLeft: "30px" ,marginRight: "30px"}}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Property Description</Form.Label>
              <Form.Control  style = {{ width: "400px",justifyContent : "center"}} as="textarea" rows={3} placeholder = "Semi-Detached Bungalow " />
            </Form.Group>
            <Form.Group style ={{display : "flex",marginLeft: "30px" ,marginRight: "30px"}} className="mb-3" controlId="exampleForm.ControlInput1">
              <div className = "state_input">
              <Form.Label>State(Api)</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                autoFocus
              />
              </div>

              <div className='city_input'>
              <Form.Label>City(Api)</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                autoFocus
              />
              </div>
              
            </Form.Group>
            <Form.Group
            style = {{ marginLeft: "30px" ,marginRight: "30px"}} 
             className="mb-3" 
             controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
                style = {{ width: "400px",justifyContent : "center"}}
                type="email"
                placeholder="123 ABBA jones"
                autoFocus
            ></Form.Control>
            </Form.Group>
            <Form.Group style ={{display : "flex",marginLeft: "30px" ,marginRight: "30px"}} className="mb-3" controlId="exampleForm.ControlInput1">
            <div className = "propertytype_input">
              <Form.Label>PropertyType(Api)</Form.Label>
              
              <Form.Control
                type="text"
                placeholder="Residential"
                autoFocus
              />
              </div>
              <div className='buildingtype_input'>
                  <Form.Label>BuildingType(Api)</Form.Label>
                   <Form.Control
                     type="text"
                     placeholder="Apartment"
                     autoFocus
                   />
              </div>
            </Form.Group>
            <Form.Group
            style = {{ marginLeft: "30px" ,marginRight: "30px"}}  
            className="mb-3"
             controlId="exampleForm.ControlInput1">
            <Form.Label>Ammenitie(Api)</Form.Label>
            <Form.Control
                type="text"
                placeholder="123 ABBA jones"
                autoFocus
            ></Form.Control>
            <p className='property12_uploadimage'>Upload Property Image?</p>
            </Form.Group>
            </Form>
            
        </Modal.Body>
        <Modal.Footer  style  ={{ border : "none"}}>
          <Button style = {{ width:"450px", marginLeft: "30px" ,marginRight: "30px",backgroundColor : "#038618"}}onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
export default function PermanentDrawerLeft() {
  const [modalShow, setModalShow] = React.useState(false);
  return (

    <Box sx={{ display: 'flex', bgcolor :"#E5E5E5"}}>
      <CssBaseline />
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            height:"80%",
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
                 <button className = "property12_button" variant="primary" onClick={() => setModalShow(true)}><IoAdd size = "20px" color='white' style = {{ marginLeft : "30px"}}/><p className='property12_addbuttoncontent'>Add New Property</p> </button>  
                     
        </div>
  
        <MyVerticallyCenteredModal
                     show={modalShow}
                      onHide={() => setModalShow(false)}
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
         <Property
            Propertytitle = "Top Court Garden"
            propertyamount  = "1,000 units"
            propertype = "Residential"
             propertylocation = "Challenge, Ibadan" 
        />
                 
        </Typography>
         </Box>
        </Box>
        );
    }