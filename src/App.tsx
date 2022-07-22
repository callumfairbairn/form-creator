import React from 'react';
import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { Create } from "./pages/Create";
import { Preview } from "./pages/Preview";
import { FormContextProvider } from "./components/FormContextProvider";

function App() {
  return (
    <FormContextProvider>
      <div className="min-h-screen bg-gradient-to-b from-zinc-400 p-5">
        <div className="container bg-base-100 mx-auto p-4 rounded">
          <Navigation>
            <Routes>
              <Route path="/create" element={<Create />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="*" element={<Create />} />
            </Routes>
          </Navigation>
        </div>
      </div>
    </FormContextProvider>
  );
}

export default App;
