import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { User } from "./model/User";

type Props = {
  user?: User;
  setUser: (user: User) => void;
};

export const AppWrapper = ({ user, setUser }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(user ? "/home" : "/");
  }, [navigate, user]);

  return (
    <Routes>
      <Route path={"/home"} element={<Home />} />
      <Route path={"*"} element={<Login setUser={setUser} />} />
    </Routes>
  );
};
