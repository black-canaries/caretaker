import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const MealCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Carbs" source="carbs" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput label="Fat" source="fat" />
        <div />
        <SelectInput
          source="mealType"
          label="Meal Type"
          choices={[
            { label: "Breakfast", value: "Breakfast" },
            { label: "Lunch", value: "Lunch" },
            { label: "Dinner", value: "Dinner" },
            { label: "Snack", value: "Snack" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Protein" source="protein" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
