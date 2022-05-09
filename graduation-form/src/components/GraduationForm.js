import React, { useEffect, useState } from "react";
import api from "../api";

const GraduationForm = () => {
  const limit = 25;
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState(false);
  const { data, loading, error } = api.GetCeremonies(limit, offset, !active);
  //   const edges = data && active ? data.paginatedReadCeremonies.edges : [];
  useEffect(() => {
    //
  }, [loading, offset]);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  console.log(data);
  return <></>;
};

export default GraduationForm;
