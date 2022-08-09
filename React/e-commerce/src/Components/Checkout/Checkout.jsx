import {
  Paper,
  Stepper,
  Step,
  StepLaber,
  Typography,
  CircularProgress,
  Divider,
  Button,
  StepLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdressForm from "./AdressForm";
import PaymentForm from "./PaymentForm";
import ConfirmationForm from "./ConfirmationForm";
import useStyles from "./styles";
import { commerce } from "../../Lib/Commerce";

const steps = ["Shipping adress", "Payment details"];
const Checkout = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    commerce.checkout
      .generateToken(props.cart.id, { type: "cart" })
      .then((token) => {
        setCheckoutToken(token);
      })
      .catch((error) => {
        throw error;
      });
  }, [props.cart.id]);

  const navigationNext = () => {
    if (activeStep < steps.length) setActiveStep(activeStep + 1);
  };

  const navigationPrevious = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const ActualForm = () => {
    switch (activeStep) {
      case 0:
        return <AdressForm checkoutToken={checkoutToken} />;
      case 1:
        return (
          <PaymentForm
            navigationNext={navigationNext}
            checkoutToken={checkoutToken}
            onCaputreCheckout={props.onCaputreCheckout}
          />
        );
      default:
        return <ConfirmationForm />;
    }
  };

  const PastButton = () =>
    activeStep + 1 < steps.length && (
      <Button
        variant="outlined"
        onClick={activeStep > 0 ? navigationPrevious : () => navigate("/cart")}
        className={classes.button}
      >
        Previous
      </Button>
    );

  const ForwardingButton = () =>
    activeStep + 1 < steps.length && (
      <Button
        sx={{ alignItems: "right" }}
        variant="contained"
        onClick={navigationNext}
        className={classes.button}
      >
        Next
      </Button>
    );

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {checkoutToken && <ActualForm />}
        </Paper>
        <div className={classes.buttonsContainer}>
          <PastButton />
          <ForwardingButton />
        </div>
      </main>
    </>
  );
};

export default Checkout;
