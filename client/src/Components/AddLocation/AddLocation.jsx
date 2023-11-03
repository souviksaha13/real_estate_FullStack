import React from "react";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";
import { Button, Group, Select, TextInput } from "@mantine/core";
import useContries from "../../Hooks/useContries";
import { Map } from "../Map/Map";
import { useAuth0 } from "@auth0/auth0-react";
import './AddLocation.css'

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
  const { getAll } = useContries();
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },

    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });

  const { user } = useAuth0();
  const { country, city, address } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      const userEmail = user.email;
      setPropertyDetails((prev) => ({
        ...prev,
        country,
        city,
        address,
        userEmail,
      }));
      nextStep();
    }
  };

  return (
    <form
      onSubmit={(evnt) => {
        evnt.preventDefault();
        handleSubmit();
      }}
    >
      <div
        className="flexCenter location-container"
        style={{
          gap: "3rem",
          marginTop: "3rem",
          justifyContent: "space-between",
        }}
      >
        {/* left side */}
        <div className="flexColStart">
          {/* inputs */}
          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            clearable
            searchable
            data={getAll()}
            {...form.getInputProps("country", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="City"
            {...form.getInputProps("city", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Address"
            {...form.getInputProps("address", { type: "input" })}
          />
        </div>
        {/* right side */} {/* render the map */}
        <div className="left-location">
          <Map country={country} city={city} address={address} />
        </div>
      </div>

      <Group position="center" mt="xl">
        <Button type="submit">Next Step</Button>
      </Group>
    </form>
  );
};

export default AddLocation;
