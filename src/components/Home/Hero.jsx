import React from "react";
import HomeSVG from "../../assets/HomeSVG.svg";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Container, Grid } from "@material-ui/core";

const makeStyles = (theme) => ({
  imageContainer: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    // marginTop: "500px",
    // top: "50px",
  },
  container: {
    // marginTop: "50px",
    // top: "50px",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Hero = () => {
  const classes = makeStyles();
  return (
    <Container>
      <Container fixed className={classes.container}>
        <img src={HomeSVG} alt="foresta" className={classes.imageContainer} />
      </Container>
      <Container fixed>
        <Typography>Foresta adalah platform pembelian bibit pohon secara online. Bibit pohon akan ditanam oleh organisasi pecinta lingkungan.</Typography>
        <Typography>Mari ikut berkontribusi selamatkan bumi dengan menanam pohon melalui Foresta.</Typography>
      </Container>
    </Container>
  );
};

export default Hero;
