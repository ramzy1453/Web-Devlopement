import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Typography,
  Badge,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../Assets/one-piece.png";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
              onClick={() => navigate("/")}
            />
            Caliphate Store
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={props.count} color="primary">
                <ShoppingCart onClick={() => navigate("/cart")} />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
