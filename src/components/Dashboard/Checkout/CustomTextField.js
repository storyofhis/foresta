import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Text, Grid } from "@chakra-ui/react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={() => (
          <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input isRequired={true} />
          </FormControl>
        )}
      />
    </Grid>
  );
};

export default FormInput;
