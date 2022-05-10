import React, { useEffect, useState } from "react";

const Disclaimer = ({ ceremony, children }) => {
  const { Disclaimer } = ceremony;
  const [acknowledged, setAcknowledged] = useState(false);
  useEffect(() => {}, [acknowledged]);
  return (
    <>
      {!acknowledged ? (
        <>
          <div dangerouslySetInnerHTML={{ __html: Disclaimer }} />
          <button
            onClick={() => {
              setAcknowledged(true);
            }}>
            Next
          </button>
        </>
      ) : (
        <></>
      )}
      {acknowledged ? <>{children}</> : <></>}
    </>
  );
};

export default Disclaimer;
