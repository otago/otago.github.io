import React, { useEffect, useState } from "react";
const SchoolPreGrad = ({
  ceremony: { Yes_HasSchoolPreGrad, Yes_SchoolPreGradContent },
}) => {
  const [SchoolPreGrad, setSchoolPreGrad] = useState(false);
  const [tickets, setTickets] = useState(0);
  const ticketOptions = [
    {
      id: "0",
      value: 0,
    },
    {
      id: "1",
      value: 1,
    },
    {
      id: "2",
      value: 2,
    },
    {
      id: "3",
      value: 3,
    },
    {
      id: "4",
      value: 4,
    },
    {
      id: "5",
      value: 5,
    },
    {
      id: "6",
      value: 6,
    },
    {
      id: "7",
      value: 7,
    },
    {
      id: "8",
      value: 8,
    },
    {
      id: "9",
      value: 9,
    },
    {
      id: "10",
      value: 10,
    },
  ];
  useEffect(() => {}, [SchoolPreGrad, tickets]);
  return (
    <>
      {Yes_HasSchoolPreGrad ? (
        <div>
          <input
            id="SchoolPreGrad"
            type="checkbox"
            value={SchoolPreGrad}
            onChange={(event) => {
              setSchoolPreGrad(event.target.checked);
            }}
          />
          <label htmlFor="SchoolPreGrad">School Pre-graduation Function</label>
          <div dangerouslySetInnerHTML={{ __html: Yes_SchoolPreGradContent }} />
          {SchoolPreGrad ? (
            <select
              id="tickets"
              value={tickets}
              onChange={(event) => {
                setTickets(event.target.value);
              }}>
              {ticketOptions.map(({ id, value }) => (
                <option key={id} value={value}>
                  {value}
                </option>
              ))}
            </select>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SchoolPreGrad;
