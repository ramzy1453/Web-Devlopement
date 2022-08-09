import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import NumberDigit from "./NumberDigit";
import useStyles from "./styles";
import formatNumber from "../../../Utils/formatNumber";

const CartItem = (props) => {
  const { item } = props;
  const classes = useStyles();

  const addQte = () => {
    props.onUpdateCartQte(item.id, item.quantity + 1);
  };
  const subQte = () => {
    props.onUpdateCartQte(item.id, item.quantity - 1);
  };
  const deleteAll = () => {
    props.onRemoveFromCart(item.id);
  };
  const changeQte = (newQte) => {
    props.onUpdateCartQte(item.id, newQte);
  };

  return (
    <Card>
      <CardMedia image={item.image.url} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{formatNumber(item.name)}</Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_code}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button onClick={subQte} type="button" size="small">
            -
          </Button>
          <NumberDigit onChangeQte={changeQte}>{item.quantity}</NumberDigit>
          <Button onClick={addQte} type="button" size="small">
            +
          </Button>
        </div>
        <Button
          onClick={deleteAll}
          variant="contained"
          type="button"
          color="secondary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
