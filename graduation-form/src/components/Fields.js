import Ceremony from "./Ceremony";
import Email from "./Email";
import React, { useEffect, useState } from "react";

const Fields = ({ ceremonies }) => {
  const [activeCeremony, setActiveCeremony] = useState(null);
  useEffect(() => {}, [activeCeremony]);
  return (
    <>
      {ceremonies.map(({ node }) => {
        return (
          <Ceremony
            key={node.ID}
            ceremony={node}
            activeCeremony={activeCeremony}
            setActiveCeremony={setActiveCeremony}>
            <Email />
          </Ceremony>
        );
      })}
    </>
  );
};

export default Fields;
