import React from "react";
import PageTitle from "../components/navigation/PageTitle";
import MainTable from "../components/tables/MainTable";

function Home() {
  return (
    <div>
      <PageTitle pageName="Packages" />
      <MainTable />
    </div>
  );
}

export default Home;
