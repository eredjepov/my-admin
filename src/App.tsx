import { Admin, CustomRoutes, Resource } from "react-admin";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import { BrowserRouter, Route } from "react-router-dom";
import { ForgotPasswordPage, SetPasswordPage } from "ra-supabase";
import {
  PatientCreate,
  PatientEdit,
  PatientList,
  PatientShow,
} from "./patients";
import {
  DiagnoseCreate,
  DiagnoseEdit,
  DiagnoseList,
  DiagnoseShow,
} from "./diagnosis";
import { VisitCreate, VisitEdit, VisitList, VisitShow } from "./visits";
import {
  AppointmentCreate,
  AppointmentEdit,
  AppointmentList,
  AppointmentShow,
} from "./appointments";
import { authProvider, dataProvider } from "./supabase";
import { Layout } from "./Layout";
import { darkTheme, lightTheme } from "./theme";
import { i18nProvider } from "./i18n";
import { AuthLanguageSwitcher, LocalizedLoginPage } from "./LoginPage";

export const App = () => (
  <BrowserRouter>
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      layout={Layout}
      loginPage={LocalizedLoginPage}
      theme={lightTheme}
      darkTheme={darkTheme}
      defaultTheme="light"
      title="Doc's Workboard"
    >
      {/* Начинай новый раздел с Resource: name всегда равен имени таблицы в Supabase. */}
      <Resource
        name="patients_info"
        list={PatientList}
        create={PatientCreate}
        edit={PatientEdit}
        show={PatientShow}
        icon={PeopleAltRoundedIcon}
      />
      {/* По этому же шаблону добавляй следующие таблицы: list/create/edit/show лежат в отдельном файле. */}
      <Resource
        name="visits"
        list={VisitList}
        create={VisitCreate}
        edit={VisitEdit}
        show={VisitShow}
        icon={EventNoteRoundedIcon}
      />
      <Resource
        name="diagnosis"
        list={DiagnoseList}
        create={DiagnoseCreate}
        edit={DiagnoseEdit}
        show={DiagnoseShow}
        icon={MedicalInformationRoundedIcon}
        // Пока не создаем страницы для диагнозов, но ресурс нужен, чтобы React Admin понимал связи между таблицами.
      />
      <Resource
        name="appointments"
        list={AppointmentList}
        create={AppointmentCreate}
        edit={AppointmentEdit}
        show={AppointmentShow}
        icon={ChecklistRoundedIcon}
      />
      {/* Auth-страницы оставь в App: без логина Supabase RLS не даст создавать записи. */}
      <CustomRoutes noLayout>
        <Route
          path={SetPasswordPage.path}
          element={
            <AuthLanguageSwitcher>
              <SetPasswordPage />
            </AuthLanguageSwitcher>
          }
        />
        <Route
          path={ForgotPasswordPage.path}
          element={
            <AuthLanguageSwitcher>
              <ForgotPasswordPage />
            </AuthLanguageSwitcher>
          }
        />
      </CustomRoutes>
    </Admin>
  </BrowserRouter>
);
