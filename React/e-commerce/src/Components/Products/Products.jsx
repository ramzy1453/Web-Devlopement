import { Grid } from "@mui/material";
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = (props) => {
  const classes = useStyles();
  const { products } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid
        container
        sx={{ padding: "20px 50px" }}
        justify="center"
        spacing={12}
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={5} lg={4}>
            <Product onAddToCart={props.onAddToCart} product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
