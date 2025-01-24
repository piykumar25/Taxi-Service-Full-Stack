import React from "react";
import Header from "../components/Header.tsx";
import { RegisterTaxi } from "../components/RegisterTaxi.tsx";

const Home: React.FC = () => {

  return (
    <div>
      <Header />
      <main>
        <RegisterTaxi />
      </main>
    </div>
  );
};

export default Home;
