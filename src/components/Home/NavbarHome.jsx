import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import Logo from "../../assets/commerce.png";
import LogoForesta from "../../assets/logo.svg";
const NavbarHome = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      backgroundColor="#7ACB90"
    >
      <MenuItem backgroundColor="#7ACB90">
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit"></IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={LogoForesta} alt="commerce.js" height="25px" className={classes.image} />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton component={Link} to="/register" aria-label="login" color="inherit">
              <Button variant="outlined" className={classes.buttonAuth}>
                Sign Up
              </Button>
            </IconButton>
            <IconButton component={Link} to="/login" aria-label="login" color="inherit">
              <Button variant="outlined" className={classes.buttonAuth}>
                Login
              </Button>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default NavbarHome;
