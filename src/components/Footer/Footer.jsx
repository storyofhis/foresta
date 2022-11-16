import React, { useState } from "react";
import { Box, Container, Typography, Toolbar, AppBar } from "@material-ui/core";
import { BottomNavigation } from "@mui/material";

import useStyles from "./Styles";
const Footer = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const mobileMenuId = "primary-search-account-menu-mobile";

  const classes = useStyles();

  return (
    <>
      <BottomNavigation className={classes.footerBar} position="fixed">
        <Container maxWidth="lg">
          <Typography alignItems="center" align="ceter" className={classes.text} style={{ mx: "auto" }}>
            Copyright 2022 All rights reserved by Foresta
          </Typography>
        </Container>
      </BottomNavigation>
    </>
  );
};

export default Footer;
