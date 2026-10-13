import {
  Create,
  Datagrid,
  DateField,
  DeleteButton,
  Edit,
  EditButton,
  List,
  NumberField,
  NumberInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  required,
} from "react-admin";

type PatientFormValues = {
  name?: string;
  surname?: string | null;
  phone?: number | string | null;
  created_at?: string;
  updated_at?: string | null;
};

const normalizeNullable = <T,>(value: T | "" | undefined): T | null => {
  if (value === "" || value === undefined) {
    return null;
  }

  return value;
};

const patientFilters = [
  <TextInput
    key="name"
    label="resources.patients_info.fields.name"
    source="name@ilike"
    alwaysOn
  />,
  <TextInput
    key="surname"
    label="resources.patients_info.fields.surname"
    source="surname@ilike"
  />,
];

const patientInputs = (
  <>
    {/* В форме оставляй только поля, которые человек вводит руками; id и даты лучше не трогать. */}
    <TextInput source="name" validate={[required()]} fullWidth />
    <TextInput source="surname" fullWidth />
    <NumberInput source="phone" fullWidth />
  </>
);

const preparePatientCreate = (data: PatientFormValues) => ({
  ...data,
  surname: normalizeNullable(data.surname),
  phone: normalizeNullable(data.phone),
  created_at: data.created_at ?? new Date().toISOString(),
});

const preparePatientEdit = (data: PatientFormValues) => ({
  ...data,
  surname: normalizeNullable(data.surname),
  phone: normalizeNullable(data.phone),
  // Здесь мы сами ставим updated_at, чтобы ты видел, где готовить данные перед Supabase.
  updated_at: new Date().toISOString(),
});

export const PatientList = () => (
  <List
    filters={patientFilters}
    perPage={25}
    sort={{ field: "created_at", order: "DESC" }}
  >
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="surname" />
      <NumberField source="phone" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
      <ShowButton />
      <EditButton />
      <DeleteButton mutationMode="pessimistic" />
    </Datagrid>
  </List>
);

export const PatientCreate = () => (
  <Create transform={preparePatientCreate} redirect="list">
    <SimpleForm>{patientInputs}</SimpleForm>
  </Create>
);

export const PatientEdit = () => (
  <Edit transform={preparePatientEdit} redirect="list">
    <SimpleForm>{patientInputs}</SimpleForm>
  </Edit>
);

export const PatientShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* Show почти повторяет List, только без input-компонентов и кнопок изменения. */}
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="surname" />
      <NumberField source="phone" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleShowLayout>
  </Show>
);
