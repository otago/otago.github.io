const CeremonyOptions = ({ ceremony, ceremonies, setCeremony }) => {
  if (ceremony) {
    return <></>;
  }
  return (
    <>
      {ceremonies.map(({ node }) => {
        return (
          <button
            key={node.ID}
            onClick={() => {
              setCeremony(node);
            }}>
            {node.Title}
          </button>
        );
      })}
    </>
  );
};

export default CeremonyOptions;
