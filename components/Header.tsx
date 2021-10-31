import React, {useContext} from 'react'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AuthContext from '../stores/authContext'



function Header() {
    const {user, login, logout, authReady}  = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    return (
        <div style={styles.container}>
            <Image src="/pupperly_web.png" alt="Pupperly Logo" width={275} height={104} />
           {!user && <button onClick={login} style = {styles.btn}>Login</button>}
           {user && <div style={styles.rightNav}>
           <p style ={styles.user}>{user.user_metadata.full_name}</p>
           <button onClick={logout} style = {styles.btn}>Logout</button>
           </div>
           }
       {/* {user && (
            <div>
                {user?.user_metadata.full_name}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={logout} sx={styles.menuItem}>Logout</MenuItem>
              </Menu>
            </div>
          )} */}
        </div>
    )
}

const styles:any = {
    btn: {
        height:'50px',
        backgroundColor:'#ffb703',
        color:'#023047',
        padding: '10px 20px',
        fontSize: '1.2em',
        fontWeight: '700',
        borderRadius: '30px',
        border: 'none'
    },
    container:{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        height: '100px',
        width: 'auto',
        padding: '0 15px',
        backgroundColor:'#023047',
        color:'#ffb703',
        // borderRadius: '0 0 10px 10px',
    },
    menuItem: {
        backgroundColor:'#ffb703',
        margin: '0',
        height:'100%',

    },
    rightNav: {
        display: 'flex',
        alignItems: 'center',
        gap: '1em',
    },
    user: {
        fontSize: '1.5em',   
    }
}
export default Header
