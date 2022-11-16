import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardPriceActions: {
    display: "flex",
    justifyContent: "row",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  shadow: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: 0.5,
  },
}));
