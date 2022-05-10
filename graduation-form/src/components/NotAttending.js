import React, { useEffect, useState } from "react";
const NotAttending = ({
  ceremony: {
    No_Option1Title,
    No_Option1Content,
    No_Option2Title,
    No_Option2Content,
  },
}) => {
  const [status, setStatus] = useState("");
  useEffect(() => {}, [status]);
  return (
    <>
      <div>
        <input
          type="radio"
          id="option_1"
          name="not_attending_options"
          checked={status === "option_1"}
          onChange={() => {
            setStatus("option_1");
          }}
        />
        <label htmlFor="option_1">{No_Option1Title}</label>
      </div>
      <div>
        <input
          type="radio"
          id="option_2"
          name="not_attending_options"
          checked={status === "option_2"}
          onChange={() => {
            setStatus("option_2");
          }}
        />
        <label htmlFor="option_2">{No_Option2Title}</label>
      </div>
      <div>
        {status === "option_1" ? (
          <div dangerouslySetInnerHTML={{ __html: No_Option1Content }} />
        ) : (
          <></>
        )}
        {status === "option_2" ? (
          <div dangerouslySetInnerHTML={{ __html: No_Option2Content }} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default NotAttending;
