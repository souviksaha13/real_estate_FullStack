import { Container, Modal, Stepper } from "@mantine/core";
import React, { useState } from "react";
import AddLocation from "../AddLocation/AddLocation";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "../UploadImage/UploadImage";
import BasicDetails from "../BasicDetails/BasicDetails";
import Facilities from "../Facilities/Facilities";

const AddPropertyModal = ({ opened, setOpened }) => {
    const [active, setActive] = useState(0)
    const {user} = useAuth0()

    const [propertyDetails, setPropertyDetails] = useState({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        userEmail: user.email,
    })

    const nextStep = () => {
        setActive((current) => (current < 4 ? current+1 : current))
    }

    const prevStep = () => {
        setActive((current) => (current > 0 ? current-1 : current))
    }

      
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      size={"90rem"}
    >
      <Container h={"40rem"} w={"100%"}>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
        >
            {/* First step */}
          <Stepper.Step label="Location" description="Address">
            <AddLocation
            nextStep = {nextStep}
            propertyDetails = {propertyDetails}
            setPropertyDetails = {setPropertyDetails}
            />
          </Stepper.Step>

          {/* Second step */}
          <Stepper.Step label="Upload Images" description="of your property">
            <UploadImage 
            prevStep = {prevStep}
            nextStep = {nextStep}
            propertyDetails = {propertyDetails}
            setPropertyDetails = {setPropertyDetails}
            />
          </Stepper.Step>

          {/* Third step */}
          <Stepper.Step label="Basic Details" description="About the property">
            <BasicDetails
            prevStep = {prevStep}
            nextStep = {nextStep}
            propertyDetails = {propertyDetails}
            setPropertyDetails = {setPropertyDetails}
            /> 
          </Stepper.Step>

          {/* Fourth step */}
          <Stepper.Step label="Facilities" description="in the property">
            <Facilities
            prevStep={prevStep}
            propertyDetails={propertyDetails}
            setPropertyDetails={setPropertyDetails}
            setOpened={setOpened}
            setActiveStep={setActive}
            />
          </Stepper.Step>

          {/* final step */}
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
