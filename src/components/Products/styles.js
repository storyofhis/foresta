import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  shadow: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: 0.5,
  },
}));
