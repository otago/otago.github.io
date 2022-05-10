import React, { useEffect } from "react";
import api from "../api";
import Fields from "./Fields";

const Form = () => {
  const { data, loading, error } = api.GetCeremonies(25, 0);
  useEffect(() => {
    //
  }, [loading]);
  if (loading) {
    return <>loading...</>;
  }
  if (error) {
    console.log(error);
    return <>error</>;
  }
  const ceremonies = data ? data.paginatedReadCeremonies.edges : [];
  return <Fields ceremonies={ceremonies} />;
};

export default Form;
