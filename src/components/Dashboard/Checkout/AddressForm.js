import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { commerce } from "../../../lib/commerce";
import FormInput from "./CustomTextField";
import { Button } from "@chakra-ui/react";
import {
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Progress,
  Divider,
  Box,
  ButtonGroup,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const AddressForm = ({ checkoutToken, test }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Shipping Address
      </Heading>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingCountry, shippingSubdivision, shippingOptions }))}>
          <SimpleGrid spacing={3}>
            <FormInput isRequired={true} name="firstName" label="First name" />
            <FormInput isRequired={true} name="lastName" label="Last name" />
            <FormInput isRequired={true} name="address1" label="Address line 1" />
            <FormInput isRequired={true} name="email" label="Email" />
            <FormInput isRequired={true} name="city" label="City" />
            <FormInput isRequired={true} name="zip" label="Zip / Postal code" />
            <Grid spacing={10}>
              <FormControl>
                <FormLabel>Shipping Country</FormLabel>
                <Select value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value)}>
                  {Object.entries(shippingCountries)
                    .map(([code, name]) => ({ id: code, label: name }))
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid spacing={10}>
              <FormControl>
                <FormLabel>Shipping subdivision</FormLabel>
                <Select value={shippingSubdivision} onChange={(e) => setShippingSubdivision(e.target.value)}>
                  {Object.entries(shippingSubdivisions)
                    .map(([code, name]) => ({ id: code, label: name }))
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid spacing={10}>
              <FormControl>
                <FormLabel>Shipping Options</FormLabel>
                <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                  {shippingOptions
                    .map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }))
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </SimpleGrid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button>
              <Link to="/cart">Back to Cart</Link>
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
