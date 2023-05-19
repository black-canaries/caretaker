import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { GlucoseTitle } from "../glucose/GlucoseTitle";
import { InsulinTitle } from "../insulin/InsulinTitle";
import { MealTitle } from "../meal/MealTitle";
import { SleepTitle } from "../sleep/SleepTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="glucose"
          reference="Glucose"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GlucoseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="insulin"
          reference="Insulin"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InsulinTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="meals"
          reference="Meal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MealTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="sleep"
          reference="Sleep"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SleepTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
