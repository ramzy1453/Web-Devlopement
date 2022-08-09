import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import { commerce } from "../../Lib/Commerce";
import InputForm from "./CheckoutForm/InputForm";
import SelectForm from "./CheckoutForm/SelectForm";

const AddressForm = (props) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = (checkoutTokenId) => {
    commerce.services
      .localeListShippingCountries(checkoutTokenId)
      .then(({ countries }) => {
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
      })
      .catch((error) => console.error(error));
  };

  const fetchSubdivisions = (countryCode) => {
    commerce.services
      .localeListSubdivisions(countryCode)
      .then(({ subdivisions }) => {
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
      })
      .catch((error) => console.error(error));
  };

  const fetchShippingOptions = (checkoutTokenId, country, region = null) => {
    commerce.checkout
      .getShippingOptions(checkoutTokenId, { country, region })
      .then((options) => {
        setShippingOptions(options);
        setShippingOption(options[0].id);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchShippingCountries(props.checkoutToken.id);
  }, [props.checkoutToken.id]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        props.checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [props.checkoutToken.id, shippingSubdivision, shippingCountry]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => ({
            ...data,
            shippingCountry,
            shippingSubdivision,
            shippingOption,
          }))}
        >
          <Grid container spacing={3}>
            <InputForm required name="firstName" label="First name" />
            <InputForm required name="lastName" label="Last name" />
            <InputForm required name="address" label="Address line 1" />
            <InputForm required name="email" label="Email" />
            <InputForm required name="city" label="City" />
            <InputForm required name="zip" label="Postal code" />
            <SelectForm
              name="Shipping Country"
              value={shippingCountry}
              setValue={setShippingCountry}
              interval={Object.entries(shippingCountries).map(
                ([code, name]) => ({ id: code, label: name })
              )}
            />
            <SelectForm
              name="Shipping Subdivision"
              value={shippingSubdivision}
              setValue={setShippingSubdivision}
              interval={Object.entries(shippingSubdivisions).map(
                ([code, name]) => ({ id: code, label: name })
              )}
            />
            <SelectForm
              name="Shipping Options"
              value={shippingOption}
              setValue={setShippingOption}
              interval={shippingOptions.map((sO) => ({
                id: sO.id,
                label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
              }))}
            />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
