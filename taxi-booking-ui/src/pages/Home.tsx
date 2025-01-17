import React from "react";
import TaxiList from "../components/TaxiList.tsx";
import Header from "../components/Header.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <TaxiList />
      </main>
    </div>
  );
};

export default Home;
