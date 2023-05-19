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
import { InsulinList } from "./insulin/InsulinList";
import { InsulinCreate } from "./insulin/InsulinCreate";
import { InsulinEdit } from "./insulin/InsulinEdit";
import { InsulinShow } from "./insulin/InsulinShow";
import { GlucoseList } from "./glucose/GlucoseList";
import { GlucoseCreate } from "./glucose/GlucoseCreate";
import { GlucoseEdit } from "./glucose/GlucoseEdit";
import { GlucoseShow } from "./glucose/GlucoseShow";
import { MealList } from "./meal/MealList";
import { MealCreate } from "./meal/MealCreate";
import { MealEdit } from "./meal/MealEdit";
import { MealShow } from "./meal/MealShow";
import { SleepList } from "./sleep/SleepList";
import { SleepCreate } from "./sleep/SleepCreate";
import { SleepEdit } from "./sleep/SleepEdit";
import { SleepShow } from "./sleep/SleepShow";
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
        title={"Care Taker"}
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
          name="Insulin"
          list={InsulinList}
          edit={InsulinEdit}
          create={InsulinCreate}
          show={InsulinShow}
        />
        <Resource
          name="Glucose"
          list={GlucoseList}
          edit={GlucoseEdit}
          create={GlucoseCreate}
          show={GlucoseShow}
        />
        <Resource
          name="Meal"
          list={MealList}
          edit={MealEdit}
          create={MealCreate}
          show={MealShow}
        />
        <Resource
          name="Sleep"
          list={SleepList}
          edit={SleepEdit}
          create={SleepCreate}
          show={SleepShow}
        />
      </Admin>
    </div>
  );
};

export default App;
