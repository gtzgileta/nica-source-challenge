import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { logout } from '../../store/auth';
import { ROLE_TEACHER } from "../../utils/constants";
import Logo from '../Logo';
import styles from './Header.module.scss'

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);

  return <AppBar id={styles.nav} position="relative" color="transparent">
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <Logo width="200px" height="50px" />

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <Menu
          id="menu-appbar"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
          open={false}
        >
          <MenuItem>
            <Typography textAlign="center">Pagina 1</Typography>
          </MenuItem>
        </Menu>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button className={styles.button}>Home</Button>
          <Button onClick={() => history.push('/videos')} className={styles.button}>Videos</Button>
          <Button onClick={() => history.push(`/profile/${ user?.id || '1' }`)} className={styles.button}>My Profile</Button>
          { user?.user_role === ROLE_TEACHER &&
            <Button onClick={() => history.push('/videos/upload')} className={styles.button}>UPLOAD VIDEO</Button>
          }
          <Button onClick={() => dispatch(logout(() => {
            history.push("/");
          }))} className={styles.button}>Logout</Button>
      </Box>

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Button className={styles.button}>{ user?.first_name || '' }</Button>
      </Box>
    </Toolbar>
  </Container>
</AppBar>;
};

export default Header;
