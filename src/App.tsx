import React from 'react';
import { Create } from "./pages/Create";
import { Preview } from "./pages/Preview";
import { FormContextProvider } from "./components/FormContextProvider";

function App() {
  return (
    <FormContextProvider>
      <div className="min-h-screen bg-gradient-to-b from-zinc-400 p-5">
        <div className="container bg-base-100 mx-auto p-4 rounded max-w-5xl grid gap-3 sm:grid-cols-2">
          <div className="bg-base-200 p-2">
            <p className="text-center mx-auto prose prose-2xl font-bold p-5">
              Create
            </p>
            <Create />
          </div>
          <div className="bg-base-200 p-2">
            <p className="text-center mx-auto prose prose-2xl font-bold p-5">
              Preview
            </p>
            <Preview />
          </div>
        </div>
      </div>
    </FormContextProvider>
  );
}

export default App;
