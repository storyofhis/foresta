import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      {/* false */}
      {/* <Controller as={TextField} name={name} control={control} label={label} fullWidth required={required} /> */}
      {/* true */}
      <Controller defaultValue="" control={control} name={name} render={() => <TextField fullWidth label={label} required />} />
    </Grid>
  );
};

export default FormInput;
