import {
  AutocompleteInput,
  Create,
  Datagrid,
  DateField,
  DeleteButton,
  Edit,
  EditButton,
  List,
  NumberField,
  ReferenceField,
  ReferenceInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  useGetList,
} from "react-admin";
import type { RaRecord } from "react-admin";

type VisitFormValues = {
  created_at?: string;
  patient_id?: number | string | null;
  comments?: string | null;
  appointment?: string | null;
  diagnosis_id?: number | string | null;
};

const normalizeNullable = <T,>(value: T | "" | undefined): T | null => {
  if (value === "" || value === undefined) {
    return null;
  }

  return value;
};

const patientOptionText = (patient: RaRecord) => {
  const fullName = [patient.name, patient.surname]
    .filter((value) => value !== null && value !== undefined && value !== "")
    .join(" ");
  const phone =
    patient.phone !== null &&
    patient.phone !== undefined &&
    patient.phone !== ""
      ? String(patient.phone)
      : "";

  return [fullName, phone].filter(Boolean).join(" — ");
};

const patientFilterToQuery = (searchText: string) => {
  const searchTerm = searchText.trim();

  if (!searchTerm) {
    return {};
  }

  const filters: Record<string, string> = {
    "name@ilike": searchTerm,
    "surname@ilike": searchTerm,
  };
  const isPhoneSearch = /^[+\d\s()-]+$/.test(searchTerm);

  if (isPhoneSearch) {
    filters["phone@eq"] = searchTerm.replace(/\D/g, "");
  }

  return { "@or": filters };
};

const appointmentOptionText = (appointment: RaRecord) =>
  [appointment.title, appointment.description].filter(Boolean).join(" — ");

const AppointmentInput = () => {
  const { data: appointments = [], isPending } = useGetList("appointments", {
    pagination: { page: 1, perPage: 1000 },
    sort: { field: "title", order: "ASC" },
  });

  return (
    <AutocompleteInput
      source="appointment"
      label="Appointment"
      choices={appointments}
      optionText={appointmentOptionText}
      optionValue="title"
      isPending={isPending}
      fullWidth
    />
  );
};

const visitFilters = [
  <ReferenceInput
    key="patient_id"
    source="patient_id"
    reference="patients_info"
    label="Patient search"
    alwaysOn
  >
    <AutocompleteInput
      optionText={patientOptionText}
      filterToQuery={patientFilterToQuery}
    />
  </ReferenceInput>,
  <TextInput
    key="appointment"
    label="Appointment"
    source="appointment@ilike"
    alwaysOn
  />,
  <TextInput key="comments" label="Comments" source="comments@ilike" />,
];

const visitInputs = (
  <>
    {/* FK можно начать с NumberInput; когда будет справочник, заменишь на ReferenceInput. */}
    <ReferenceInput
      source="patient_id"
      reference="patients_info"
      label="Patient"
      fullWidth
    >
      <AutocompleteInput
        optionText={patientOptionText}
        filterToQuery={patientFilterToQuery}
        fullWidth
      />
    </ReferenceInput>
    <AppointmentInput />
    <TextInput
      source="comments"
      label="Comments"
      multiline
      rows={4}
      fullWidth
    />
    <ReferenceInput
      source="diagnosis_id"
      reference="diagnosis"
      label="Diagnosis"
    >
      <AutocompleteInput optionText="title" fullWidth />
    </ReferenceInput>
  </>
);

const prepareVisitData = (data: VisitFormValues) => ({
  ...data,
  patient_id: normalizeNullable(data.patient_id),
  comments: normalizeNullable(data.comments),
  appointment: normalizeNullable(data.appointment),
  diagnosis_id: normalizeNullable(data.diagnosis_id),
  // created_at обязателен в Supabase, поэтому ставим его здесь, а не просим пользователя вводить дату.
  created_at: data.created_at ?? new Date().toISOString(),
});

export const VisitList = () => (
  <List
    filters={visitFilters}
    perPage={25}
    sort={{ field: "created_at", order: "DESC" }}
  >
    <Datagrid rowClick="show">
      <NumberField source="id" label="ID" />
      <DateField source="created_at" label="Created" showTime />
      <ReferenceField
        source="patient_id"
        reference="patients_info"
        label="Patient"
      />

      <TextField source="appointment" label="Appointment" />
      <TextField source="comments" label="Comments" />
      {/* <NumberField source="diagnosis_id" label="Diagnosis ID" /> */}
      <ReferenceField
        source="diagnosis_id"
        reference="diagnosis"
        label="Diagnosis"
      />
      <ShowButton />
      <EditButton />
      <DeleteButton mutationMode="pessimistic" />
    </Datagrid>
  </List>
);

export const VisitCreate = () => (
  <Create transform={prepareVisitData} redirect="list">
    <SimpleForm>{visitInputs}</SimpleForm>
  </Create>
);

export const VisitEdit = () => (
  <Edit transform={prepareVisitData} redirect="list">
    <SimpleForm>{visitInputs}</SimpleForm>
  </Edit>
);

export const VisitShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* Для show-экрана бери те же поля, что в таблице, чтобы пользователь легко сверял запись. */}
      <NumberField source="id" label="ID" />
      <DateField source="created_at" label="Created" showTime />
      <NumberField source="patient_id" label="Patient ID" />
      <TextField source="appointment" label="Appointment" />
      <TextField source="comments" label="Comments" />
      <NumberField source="diagnosis_id" label="Diagnosis ID" />
    </SimpleShowLayout>
  </Show>
);
