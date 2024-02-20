import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { User, userLocalStorageKey } from "./model/User";
import { AppWrapper } from "./AppWrapper";

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const storedUser = localStorage.getItem(userLocalStorageKey);
    setUser(storedUser ? (JSON.parse(storedUser) as User) : undefined);
  }, []);

  return (
    <BrowserRouter>
      <AppWrapper user={user} />
    </BrowserRouter>
  );
}

export default App;
