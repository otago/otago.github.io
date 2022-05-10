import React, { useEffect, useState } from "react";
const Tickets = ({ ceremony: { Yes_HasExtraTickets, Yes_TicketsContent } }) => {
  const [tickets, setTickets] = useState(2);
  const [extraTickets, setExtraTickets] = useState(0);
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
  const extraTicketOptions = [
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
  ];
  useEffect(() => {}, [tickets, extraTickets]);
  return (
    <>
      <div>
        <label htmlFor="tickets">
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
      {Yes_HasExtraTickets ? (
        <div>
          <label htmlFor="extraTickets">
            How many extra tickets do you need for your guests?
          </label>
          <select
            id="extraTickets"
            value={extraTickets}
            onChange={(event) => {
              setExtraTickets(event.target.value);
            }}>
            {extraTicketOptions.map(({ id, value }) => (
              <option key={id} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <></>
      )}
      <div dangerouslySetInnerHTML={{ __html: Yes_TicketsContent }} />
    </>
  );
};

export default Tickets;
