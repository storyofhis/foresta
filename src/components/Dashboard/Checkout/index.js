import React, { useState, useEffect } from "react";
import { Footer } from "../../../Utils";
import Navbar from "../Navbar";
import { commerce } from "../../../lib/commerce";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Progress, Divider, Box, ButtonGroup, Heading, Flex, FormControl, GridItem, FormLabel, Input, Select, SimpleGrid, InputLeftAddon, InputGroup, Textarea, FormHelperText, InputRightElement, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import AddressForm from "./AddressForm";
import PaymentForm from "./Payment";
import { Step, Steps, useSteps } from "chakra-ui-steps";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: "cart" });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push("/bibit");
        }
      };

      generateToken();
    }
  }, [cart]);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Heading as="h5">
            Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!
          </Heading>
          <Divider />
          <Text>Order ref: {order.customer_reference}</Text>
        </div>
        <br />
        <Button>
          <Link to="/">Back to home</Link>
        </Button>
      </>
    ) : (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (error) {
    Confirmation = () => (
      <>
        <Heading as="h5">Error: {error}</Heading>
        <br />
        <Button>
          <Link to="/bibit">Back to home</Link>
        </Button>
      </>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
    ) : (
      <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />
    );

  return (
    <div>
      <Navbar />
      <div />
      <main>
        <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={800} p={6} m="10px auto" as="form">
          <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
            Checkout
          </Heading>
          <Steps activeStep={activeStep}>
            {steps.map(({ label }) => (
              <Step label={label} key={label}>
                {label}
              </Step>
            ))}
          </Steps>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
