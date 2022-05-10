import React, { useEffect, useState } from "react";
import Deferring from "./Deferring";

const Attendance = ({ ceremony }) => {
  const [attendance, setAttendance] = useState("");
  useEffect(() => {}, [attendance]);
  const attending = attendance === "yes";
  const notAttending = attendance === "no";
  const deferring = attendance === "defer";
  return (
    <>
      <div>
        <input
          type="radio"
          id="attending"
          name="attendance"
          checked={attending}
          onChange={() => {
            setAttendance("yes");
          }}
        />
        <label htmlFor="attending">Yes</label>
      </div>
      <div>
        <input
          type="radio"
          id="not_attending"
          name="attendance"
          checked={notAttending}
          onChange={() => {
            setAttendance("no");
          }}
        />
        <label htmlFor="not_attending">No</label>
      </div>
      <div>
        <input
          type="radio"
          id="deferring"
          name="attendance"
          checked={deferring}
          onChange={() => {
            setAttendance("defer");
          }}
        />
        <label htmlFor="deferring">Defer</label>
      </div>
      <div>{deferring ? <Deferring ceremony={ceremony} /> : <></>}</div>
    </>
  );
};

export default Attendance;
