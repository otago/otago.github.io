import React, { useEffect, useState } from "react";

const No = ({ show, title1, title2, content1, content2 }) => {
  let content = <></>;
  const [option, setOption] = useState(null);
  useEffect(() => {
    //
  }, [option]);
  if (option === "1") {
    content = <div dangerouslySetInnerHTML={{ __html: content1 }} />;
  } else if (option === "2") {
    content = <div dangerouslySetInnerHTML={{ __html: content2 }} />;
  }
  return !show ? (
    <></>
  ) : (
    <>
      <div>
        <label htmlFor="not_attending_options">Please select an option</label>
        <div id="not_attending_options">
          <div>
            <input
              type="radio"
              id="not_attending_options_1"
              name="not_attending_options"
              checked={option === 1}
              onChange={() => {
                setOption(1);
              }}
            />
            <label htmlFor="not_attending_options_1">{title1}</label>
          </div>
          <div>
            <input
              type="radio"
              id="not_attending_options_2"
              name="not_attending_options"
              checked={option === 2}
              onChange={() => {
                setOption(2);
              }}
            />
            <label htmlFor="not_attending_options_2">{title2}</label>
          </div>
        </div>
      </div>
      {content}
    </>
  );
};

export default No;
