import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AgendaList } from "./agenda/AgendaList";
import { AgendaCreate } from "./agenda/AgendaCreate";
import { AgendaEdit } from "./agenda/AgendaEdit";
import { AgendaShow } from "./agenda/AgendaShow";
import { ReminderList } from "./reminder/ReminderList";
import { ReminderCreate } from "./reminder/ReminderCreate";
import { ReminderEdit } from "./reminder/ReminderEdit";
import { ReminderShow } from "./reminder/ReminderShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AgendaService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Agenda"
          list={AgendaList}
          edit={AgendaEdit}
          create={AgendaCreate}
          show={AgendaShow}
        />
        <Resource
          name="Reminder"
          list={ReminderList}
          edit={ReminderEdit}
          create={ReminderCreate}
          show={ReminderShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
      </Admin>
    </div>
  );
};

export default App;
