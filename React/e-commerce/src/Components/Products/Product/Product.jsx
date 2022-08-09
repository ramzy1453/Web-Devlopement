import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";

import { AddShoppingCart } from "@mui/icons-material";
import useStyles from "./styles";
import formatNumber from '../../../Utils/formatNumber'

const Product = (props) => {
  const { product } = props;
  const classes = useStyles();

  const addToCartHandler = () => {
    props.onAddToCart(product.id, 1);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product?.image?.url}
        title={formatNumber(product.name)}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description.replace(/(<([^>]+)>)/gi, "")}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={addToCartHandler}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
