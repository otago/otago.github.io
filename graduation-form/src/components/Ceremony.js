import React, { useEffect, useState } from "react";

const Ceremony = ({ ceremony, children }) => {
  const { Title } = ceremony;
  const [active, setActive] = useState(false);
  useEffect(() => {}, [active]);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setActive(!active);
          }}>
          {Title}
        </button>
      </div>
      {active ? <div>{children}</div> : <></>}
    </>
  );
};

export default Ceremony;
