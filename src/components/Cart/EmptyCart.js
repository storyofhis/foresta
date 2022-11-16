import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
const EmptyCart = () => {
  const classes = useStyles();
  return (
    <Typography variant="subtitle1">
      You have no items in your shooping cart,
      <Link to="/bibit-pohon" className={classes.link}>
        start adding some
      </Link>
      !
    </Typography>
  );
};
export default EmptyCart;
