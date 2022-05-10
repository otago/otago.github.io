import React, { useState, useEffect } from "react";
const Assistance = ({ ceremony }) => {
  const [assistance, setAssistance] = useState("");
  const [guestAssistance, setGuestAssistance] = useState("");
  useEffect(() => {}, [assistance, guestAssistance]);
  return (
    <>
      <div>
        <label htmlFor="assistance">
          Do you need any assistance on graduation day? For example, do you have
          limited mobility, difficulty climbing stairs, or require a wheelchair?
        </label>
        <textarea
          id="assistance"
          value={assistance}
          onChange={(event) => {
            setAssistance(event.target.value);
          }}></textarea>
      </div>
      <div>
        <label htmlFor="guestAssistance">
          Do any of your guests need assistance on graduation day? For example,
          do they have limited mobility, difficulty climbing stairs, or require
          a wheelchair?
        </label>
        <textarea
          id="guestAssistance"
          value={guestAssistance}
          onChange={(event) => {
            setGuestAssistance(event.target.value);
          }}></textarea>
      </div>
    </>
  );
};

export default Assistance;
