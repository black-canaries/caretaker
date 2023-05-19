import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SleepList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sleeps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="End" source="end" />
        <TextField label="ID" source="id" />
        <TextField label="Quality" source="quality" />
        <TextField label="Start" source="start" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
