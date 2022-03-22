import React from "react";
import { Navbar } from "./components/Navbar";
import { Routing } from "./components/Routing";
import { DataProvider } from "./context/DataProvider";
import "boxicons";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function App() {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Routing />
      </DataProvider>
    </>
  );
}

export default App;
