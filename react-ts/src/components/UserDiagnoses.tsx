type Props = {
  diagnoses: string[];
};

export const UserDiagnoses = ({ diagnoses }: Props) => {
  /**
   * TODO
   *
   * 1. Define component's Props interface (see how it is done in src/AppWrapper.tsx)
   *    - Props will contain list of user's diagnoses
   * 2. Display list of user diagnoses (see Todo)
   */
  const listDiagnoses = diagnoses.map((diagnose, index) => <li key={index}>{diagnose}</li>);

  return (
    <div>
      <ul>{listDiagnoses}</ul>
    </div>
  );
};
