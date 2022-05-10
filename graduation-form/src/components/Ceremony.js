const Ceremony = ({
  ceremony,
  children,
  activeCeremony,
  setActiveCeremony,
}) => {
  const { Title } = ceremony;
  return (
    <>
      <div>
        <button
          onClick={() => {
            setActiveCeremony(ceremony);
          }}>
          {Title}
        </button>
      </div>
      {activeCeremony === ceremony ? <div>{children}</div> : <></>}
    </>
  );
};

export default Ceremony;
