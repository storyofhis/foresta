import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  footerBar: {
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  text: {
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
}));
