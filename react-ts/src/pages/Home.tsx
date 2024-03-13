import React, { useEffect, useState } from "react";
import { UserDiagnoses } from "../components/UserDiagnoses";
import { User, userLocalStorageKey } from "../model/User";

export const Home = () => {
  /**
   * TODO
   *
   * 1. Load user from browser localStorage (use useEffect() hook)
   * 2. Set user to component state (use useState() hook)
   * 3. Display name of the user in <h1> tag (see Todo)
   * 4. Send user's diagnoses to UserDiagnoses component through props
   */
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const storedUser = localStorage.getItem(userLocalStorageKey);
    setUser(storedUser ? (JSON.parse(storedUser) as User) : undefined);
  }, []);

  return (
    <div className="pg-home">
      <h1>
        {user?.firstName} {user?.lastName}
      </h1>
      {user && <UserDiagnoses diagnoses={user.diagnoses} />}
    </div>
  );
};
