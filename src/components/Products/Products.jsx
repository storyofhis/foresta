import React from "react";
import { Grid, TextField } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Product from "./Product/Product";
import useStyles from "./styles";
import { Box, Button } from "@material-ui/core";

const InputCustom = () => {
  return (
    <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, m: 2 }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Cari Bibit Pohon" inputProps={{ "aria-label": "masukkan nama barang" }} />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <InputCustom />
      <div>
        <Box sx={{ flexDirection: "row", m: 2 }}>
          <Button container spacing={8} variant="contained" sx={{ mx: "auto" }}>
            Relevan
          </Button>
          <Button container spacing={8} variant="contained">
            Populer
          </Button>
          <Button container spacing={8} variant="contained">
            Baru
          </Button>
          <Button container spacing={8} variant="contained">
            Harga
          </Button>
        </Box>
      </div>
      <Grid container justify="center" spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
