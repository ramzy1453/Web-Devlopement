import { Typography, Button, Divider } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import env from "../../env";
import Reviews from "./CheckoutForm/Reviews";

const stripePromise = loadStripe(env.REACT_STRIPE_PUBLIC_KEY);

const PaymentForm = (props) => {
  console.log(props);
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    console.log(stripe, elements);
    if (!elements || !stripe) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: props.checkoutToken.line_items,
        customer: {
          firstname: props.shippingData.firstName,
          lastname: props.shippingData.lastName,
          email: props.shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: props.shippingData.adress,
          town_city: props.shippingData.city,
          country: props.shippingData.shippingCountry,
          country_state: props.shippingData.shippingSubdivision,
          postal_zip_code: props.shippingData.zip,
        },
        fulfillment: { shipping_method: props.shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      props.onCaputreCheckout(props.checkoutToken.id, orderData);
    }
  };

  return (
    <div style={{ padding: "10px 30px" }}>
      <Reviews checkoutToken={props.checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined">Back</Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={props.navigationNext}
                  disabled={!stripe}
                >
                  Pay {props.checkoutToken.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
