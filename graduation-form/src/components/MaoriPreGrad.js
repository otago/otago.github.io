import React, { useEffect, useState } from "react";
const MaoriPreGrad = ({
  ceremony: { Yes_HasMaoriPreGrad, Yes_MaoriPreGradContent },
}) => {
  const [maoriPreGrad, setMaoriPreGrad] = useState(false);
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
  useEffect(() => {}, [maoriPreGrad, tickets]);
  return (
    <>
      {Yes_HasMaoriPreGrad ? (
        <div>
          <input
            id="maoriPreGrad"
            type="checkbox"
            value={maoriPreGrad}
            onChange={(event) => {
              setMaoriPreGrad(event.target.checked);
            }}
          />
          <label for="maoriPreGrad">Maori Pre-graduation Function</label>
          <div dangerouslySetInnerHTML={{ __html: Yes_MaoriPreGradContent }} />
          {maoriPreGrad ? (
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

export default MaoriPreGrad;
