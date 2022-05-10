import React, { useEffect, useState } from "react";
import Defer from "./Defer";
import DisclaimerArea from "./DisclaimerArea";
import No from "./No";

const CeremonyForm = ({ ceremony, setCeremony }) => {
  const [acknowledged, setAcknowledged] = useState(null);
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");
  console.log(ceremony);
  useEffect(() => {
    //
  }, [acknowledged, email, attendance]);
  if (!ceremony) {
    return <></>;
  }
  const {
    Disclaimer,
    Defer_Content,
    No_Option1Title,
    No_Option1Content,
    No_Option2Title,
    No_Option2Content,
  } = ceremony;
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCeremony(null);
            setAcknowledged(false);
          }}>
          Back
        </button>
      </div>
      <div>
        <label htmlFor="Email">Enter your email address here</label>
        <input
          id="Email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <DisclaimerArea
        content={Disclaimer}
        acknowledged={acknowledged}
        setAcknowledged={setAcknowledged}
      />
      <div>
        <label htmlFor="attendance">
          Will you be attending Otago Polytechnic Graduation Cermeony?
        </label>
        <div id="attendance">
          <div>
            <input
              type="radio"
              id="attendance_yes"
              name="attendance"
              checked={attendance === "yes"}
              onChange={() => {
                setAttendance("yes");
              }}
            />
            <label htmlFor="attendance_yes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="attendance_no"
              name="attendance"
              checked={attendance === "no"}
              onChange={() => {
                setAttendance("no");
              }}
            />
            <label htmlFor="attendance_no">No</label>
          </div>
          <div>
            <input
              type="radio"
              id="attendance_defer"
              name="attendance"
              checked={attendance === "defer"}
              onChange={() => {
                setAttendance("defer");
              }}
            />
            <label htmlFor="attendance_defer">Defer</label>
          </div>
        </div>
      </div>
      <No
        show={attendance === "no"}
        title1={No_Option1Title}
        title2={No_Option2Title}
        content1={No_Option1Content}
        content2={No_Option2Content}
      />
      <Defer content={Defer_Content} show={attendance === "defer"} />
    </>
  );
};

export default CeremonyForm;
