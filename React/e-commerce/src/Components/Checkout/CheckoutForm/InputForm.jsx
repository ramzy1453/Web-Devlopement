import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const InputForm = (props) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={props.name}
        render={({ field }) => (
          <TextField fullWidth label={props.label} required />
        )}
      ></Controller>
    </Grid>
  );
};

export default InputForm;
