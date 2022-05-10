import Ceremony from "./Ceremony";
import Email from "./Email";
import React, { useEffect, useState } from "react";
import Disclaimer from "./Disclaimer";

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
            <Disclaimer ceremony={activeCeremony}></Disclaimer>
          </Ceremony>
        );
      })}
    </>
  );
};

export default Fields;
