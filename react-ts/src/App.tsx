import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { User, userLocalStorageKey } from "./model/User";
import { AppWrapper } from "./AppWrapper";
import "./App.scss";
import { Layout } from "./components/Layout";

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const storedUser = localStorage.getItem(userLocalStorageKey);
    setUser(storedUser ? (JSON.parse(storedUser) as User) : undefined);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <AppWrapper user={user} setUser={setUser} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
