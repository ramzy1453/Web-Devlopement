import { Select, MenuItem, Grid, InputLabel } from "@mui/material";

const SelectForm = (props) => {
  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>{props.name}</InputLabel>
      <Select
        value={props.value}
        fullWidth
        onChange={(e) => props.setValue(e.target.value)}
      >
        {props.interval.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export default SelectForm;
