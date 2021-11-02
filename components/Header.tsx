import React, { useContext } from 'react';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import styles from '../styles/Header.module.css';
import AuthContext from '../stores/authContext';

function Header() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.container}>
      {user && <div className={styles.leftNav} />}
      <div className={styles.navImg}>
        <Image
          src="/pupperly_web.png"
          alt="Pupperly Logo"
          width={275}
          height={104}
        />
      </div>

      {!user && (
        <div className={styles.headerLogBtn}>
          <button onClick={login} className={styles.btn}>
            Login
          </button>
        </div>
      )}
      {user && (
        <div className={styles.rightNav}>
          <p className={styles.user}>
            Welcome {user.user_metadata.full_name ?? null}
          </p>
          <button onClick={logout} className={styles.btn}>
            Logout
          </button>
        </div>
      )}

      {user && (
        <div className={styles.mobileNav}>
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
              vertical: 'bottom',
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
            <MenuItem onClick={logout} className={styles.menuItem}>
              Logout
            </MenuItem>
          </Menu>
        </div>
      )}
      {!user && <div className={styles.loggedOutDiv} />}
    </div>
  );
}

export default Header;
