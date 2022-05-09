const CeremonyForm = ({ ceremony, setCeremony }) => {
  if (!ceremony) {
    return <></>;
  }
  return (
    <>
      <button
        onClick={() => {
          setCeremony(null);
        }}>
        Back
      </button>
    </>
  );
};

export default CeremonyForm;
