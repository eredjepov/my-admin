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

const diagnoseFilters = [
  <TextInput
    key="title"
    label="resources.diagnosis.fields.title"
    source="title@ilike"
    alwaysOn
  />,
  <TextInput
    key="description"
    label="resources.diagnosis.fields.description"
    source="description@ilike"
  />,
];

const diagnoseInputs = (
  <>
    {/* В форме оставляй только поля, которые человек вводит руками; id и даты лучше не трогать. */}
    <TextInput source="title" validate={[required()]} fullWidth />
    <TextInput source="description" fullWidth />
  </>
);

// CRUD - Create Read Update Delete

export const DiagnoseList = () => (
  <List
    filters={diagnoseFilters}
    perPage={25}
    sort={{ field: "created_at", order: "DESC" }}
  >
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <DateField source="created_at" showTime />
      <ShowButton />
      <EditButton />
      <DeleteButton mutationMode="pessimistic" />
    </Datagrid>
  </List>
);

export const DiagnoseCreate = () => (
  <Create>
    <SimpleForm>{diagnoseInputs}</SimpleForm>
  </Create>
);

export const DiagnoseEdit = () => (
  <Edit>
    <SimpleForm>{diagnoseInputs}</SimpleForm>
  </Edit>
);

export const DiagnoseShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* Show почти повторяет List, только без input-компонентов и кнопок изменения. */}
      <NumberField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <DateField source="created_at" showTime />
    </SimpleShowLayout>
  </Show>
);
