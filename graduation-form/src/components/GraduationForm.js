import React, { useEffect, useState } from "react";
import api from "../api";
import CeremonyForm from "./CeremonyForm";
import CeremonyOptions from "./CeremonyOptions";

const GraduationForm = () => {
  const { data, loading, error } = api.GetCeremonies(25, 0);
  const [ceremony, setCeremony] = useState(null);
  useEffect(() => {
    //
  }, [loading, ceremony]);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  const ceremonies = data ? data.paginatedReadCeremonies.edges : [];
  return (
    <>
      <CeremonyOptions
        ceremony={ceremony}
        ceremonies={ceremonies}
        setCeremony={setCeremony}
      />
      <CeremonyForm ceremony={ceremony} setCeremony={setCeremony} />
    </>
  );
};

export default GraduationForm;
