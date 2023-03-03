import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const App = () => {
  const methods = useForm();
  return (
    <div className="App">
      <FormProvider {...methods}>
        <form></form>
      </FormProvider>
    </div>
  );
};

export default App;
