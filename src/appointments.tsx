import {
  Create,
  Datagrid,
  DateField,
  DeleteButton,
  Edit,
  EditButton,
  List,
  NumberField,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  required,
} from "react-admin";

type AppointmentFormValues = {
  title?: string;
  description?: string | null;
  created_at?: string;
  updated_at?: string | null;
};

const normalizeNullable = (value: string | null | undefined) =>
  value === "" || value === undefined ? null : value;

const appointmentFilters = [
  <TextInput key="title" source="title@ilike" label="Appointment" alwaysOn />,
  <TextInput
    key="description"
    source="description@ilike"
    label="Description"
  />,
];

const appointmentInputs = (
  <>
    <TextInput
      source="title"
      label="Appointment"
      validate={[required()]}
      fullWidth
    />
    <TextInput
      source="description"
      label="Description"
      multiline
      rows={3}
      fullWidth
    />
  </>
);

const prepareAppointmentCreate = (data: AppointmentFormValues) => ({
  ...data,
  title: data.title?.trim(),
  description: normalizeNullable(data.description),
  created_at: data.created_at ?? new Date().toISOString(),
});

const prepareAppointmentEdit = (data: AppointmentFormValues) => ({
  ...data,
  title: data.title?.trim(),
  description: normalizeNullable(data.description),
  updated_at: new Date().toISOString(),
});

export const AppointmentList = () => (
  <List
    filters={appointmentFilters}
    perPage={25}
    sort={{ field: "title", order: "ASC" }}
  >
    <Datagrid rowClick="show">
      <NumberField source="id" label="ID" />
      <TextField source="title" label="Appointment" />
      <TextField source="description" label="Description" />
      <DateField source="created_at" label="Created" showTime />
      <DateField source="updated_at" label="Updated" showTime />
      <ShowButton />
      <EditButton />
      <DeleteButton mutationMode="pessimistic" />
    </Datagrid>
  </List>
);

export const AppointmentCreate = () => (
  <Create transform={prepareAppointmentCreate} redirect="list">
    <SimpleForm>{appointmentInputs}</SimpleForm>
  </Create>
);

export const AppointmentEdit = () => (
  <Edit transform={prepareAppointmentEdit} redirect="list">
    <SimpleForm>{appointmentInputs}</SimpleForm>
  </Edit>
);

export const AppointmentShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" label="ID" />
      <TextField source="title" label="Appointment" />
      <TextField source="description" label="Description" />
      <DateField source="created_at" label="Created" showTime />
      <DateField source="updated_at" label="Updated" showTime />
    </SimpleShowLayout>
  </Show>
);
