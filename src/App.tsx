import React from 'react';
import { Navigate } from "./components/Navigate";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-400 p-5">
      <div className="container bg-base-100 mx-auto p-4">
        <Navigate>
          Sup
        </Navigate>
      </div>
    </div>
  );
}

export default App;
