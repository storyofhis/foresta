import React from "react";
import NavbarHome from "./NavbarHome";
import Hero from "./Hero";
const makeStyles = (theme) => ({
  grow: {
    flexGrow: 1,
    display: "block",
    marginTop: "50%",
    // padding: theme.spacing(1),
    // [theme.breakpoints.only("md")]: {
    //   backgroundColor: theme.palette.primary.main,
    // },
  },
});
const index = () => {
  const classes = makeStyles();
  return (
    <>
      <NavbarHome />
      {/* <div className={classes.grow} />
      <div className={classes.grow} />
      <div className={classes.grow} /> */}
      <Hero />
    </>
  );
};

export default index;
