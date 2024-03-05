import React, { ChangeEvent, useState } from "react";
import image from "../assets/heart.png";
import { User, userLocalStorageKey } from "../model/User";

type Props = {
  user?: User;
  setUser: (user: User) => void;
};

export const Login = ({ setUser }: Props) => {
  /**
   * TODO
   *
   * Login page UI:
   *
   * 1. Add inputs for username and password
   *    - keep username and password in component state (use useState() hook)
   * 2. Add button which will call logIn() function
   *    - button will be disabled if either username or password is empty
   * 3. Add whatever you like to make it look pretty :)
   *
   * Login page functionality:
   *
   * 1. Implement logIn() function that will:
   *    - create object of type User (see src/model/User.ts) for a person: John Doe, 12.12.1986, 86kg, 185cm, with 2 diagnoses: Arthritis and Diabetes
   *    - store user object in browser localStorage (use userLocalStorageKey constant from src/model/User.ts)
   *    - navigate to Home component (use useNavigate() hook). Route to Home component is "/".
   */
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isInputEmpty = username.trim() === "" || password.trim() === "";

  const logIn = () => {
    const loggedInUser: User = {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "12.12.1986",
      weight: "86kg",
      height: "185cm",
      diagnoses: ["Arthritis", "Diabetes"],
    };

    localStorage.setItem(userLocalStorageKey, JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const handleLogIn = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    logIn();
  };

  return (
    <div className="pg-login">
      <div className="pg-login__content">
        <img src={image} alt="" width="100" height="100" className="pg-login__img" />
        <h1 className="pg-login__title">Přihlášení</h1>
        <form onSubmit={handleLogIn} className="pg-login__form">
          <div className="form-item">
            <label htmlFor="username" className="form-label">
              Uživatelské jméno
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="form-input"
              required
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="password" className="form-label">
              Heslo
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="form-input"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn--primary pg-login__form__btn" disabled={isInputEmpty}>
            Přihlásit se
          </button>
        </form>
      </div>
    </div>
  );
};
