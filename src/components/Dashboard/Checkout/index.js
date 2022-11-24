import React, { useState, useEffect } from "react";
import { Footer } from "../../../Utils";
import Navbar from "../Navbar";
import { commerce } from "../../../lib/commerce";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Progress, Divider, Box, ButtonGroup, Heading, Flex, FormControl, GridItem, FormLabel, Input, Select, SimpleGrid, InputLeftAddon, InputGroup, Textarea, FormHelperText, InputRightElement, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { Step, Steps, useSteps } from "chakra-ui-steps";

const steps = [{ label: "Shipping Address" }, { label: "Payment Details" }];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  // const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const history = useHistory();

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  // const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

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
          <Link to="/bibit">Back to home</Link>
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

  const Form = ({ activeStep, prevStep, nextStep, steps }) =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} prevStep={prevStep} activeStep={activeStep} setShippingData={setShippingData} test={test} steps={steps} />
    ) : (
      <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} prevStep={prevStep} activeStep={activeStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} steps={steps} />
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
            {steps?.map(({ label }) => (
              <Step label={label} key={label}>
                <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
                  {label}
                </Heading>
              </Step>
            ))}
          </Steps>
          {activeStep === steps.length ? (
            <Flex px={4} py={4} width="100%" flexDirection="column">
              <Heading fontSize="xl" textAlign="center">
                Woohoo! All steps completed!
              </Heading>
              <Button mx="auto" mt={6} size="sm" onClick={reset}>
                Reset
              </Button>
            </Flex>
          ) : (
            checkoutToken && <Form activeStep={activeStep} prevStep={prevStep} nextStep={nextStep} steps={steps} />
          )}
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
