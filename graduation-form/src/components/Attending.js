import React, { useEffect, useState } from "react";
const Attending = ({ ceremony }) => {
  const [tickets, setTickets] = useState(2);
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
  ];
  useEffect(() => {}, [tickets]);
  return (
    <>
      <div>
        <label for="tickets">
          How many tickets do you need for your guests?
        </label>
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
      </div>
    </>
  );
};

export default Attending;
