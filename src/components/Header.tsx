import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import Logo from './shared/Logo'
import { useAuth } from '../context/AuthContext'
import NavigationLink from './shared/NavigationLink'

const Header = () => {
  const auth =useAuth();

  return <AppBar sx={{
    bgcolor:"darkgray", 
    position:"static",
    boxShadow: "none"
    }}>
  <Toolbar sx={{
    display:"flex"
   }}>
    <Logo/>
    <div>
      {auth?.isLoggedIn ?(
        <>
        <NavigationLink 
        bg="#00fffc"
        to="/chat"
        text='Chats'
        textColor='black'
       
        />
        <NavigationLink 
        bg='#51538f'
        textColor='white'
        to='/'
        text='LogOut'
        onClick={auth.logout}
        />
        </>
      ) : (
        <>
        <NavigationLink 
        bg="#00fffc"
        to="/login"
        text='Login'
        textColor='black'
       />
        <NavigationLink 
        bg='#51538f'
        textColor='white'
        to='/signup'
        text='SignUp'
        />
        </>
      )
      }
    </div>
</Toolbar>
  </AppBar>
  
  
}

export default Header
 