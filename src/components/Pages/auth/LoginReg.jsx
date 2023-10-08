import React, { useState } from 'react'
import  {Grid,Card,Typography,Tab,Tabs,Box} from "@mui/material"
import Pic1 from "../../../assets/pic1.png"

const TabPanel=(props)=>{
    const {children,value,index}=props;
    return (
        <div role='tabpanel' hidden={value!==index}>
            {
                value===index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

const LoginReg = () => {
    const[value,setValue]= useState()
  return (
    <>
    <Grid container sx={{height:"90vh"}}>
        <Grid item lg={7} sm={5} sx={{
            backgroundImage:`url(${Pic1})`,
            backgroundPosition:'center',
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
        }}>
        </Grid>
         
        <Grid item lg={5} sm={7} > 
            <Card sx={{width:"100%" ,height:"100%"}}>
                <Box sx={{borderBottom:1,borderColor:"divider"}}>
                    <Box>
                        <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handlechange}>
                            <Tab label="Login" sx={{textTransform:"none",fontWeight:"bold",fontStyle:"italic"}}></Tab>
                            <Tab label="Registartion"sx={{textTransform:"none",fontWeight:"bold",fontStyle:"italic"}}></Tab>
                        </Tabs>
                    </Box>
                        <TabPanel value={value} index={0} >User Login</TabPanel>
                        <TabPanel value={value} index={1} >User Registartion</TabPanel>
                </Box>
            </Card>
        </Grid>
    </Grid>
    </>
  )
}

export default LoginReg