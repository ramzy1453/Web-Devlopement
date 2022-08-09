import { Container, Button, Grid, Typography } from "@mui/material";
import CardItem from "./CartItem/CartItem";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
const Cart = (props) => {
  const { cart } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start adding some!
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={6}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CardItem
              onEmptyCart={props.onEmptyCart}
              onRemoveFromCart={props.onRemoveFromCart}
              onUpdateCartQte={props.onUpdateCartQte}
              item={item}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            sx={{ margin: "20px" }}
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={props.onEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            onClick={() => navigate("/checkout")}
            sx={{ margin: "20px" }}
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return <div>loading...</div>;
  return (
    <Container sx={{ padding: "30px 50px" }}>
      <div className={classes.toolbar} />
      <Typography gutterBottom className={classes.title} variant="h4">
        Your Shopping Cart
      </Typography>
      {!cart.total_items ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
