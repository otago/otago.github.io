const CeremonyOptions = ({ ceremony, ceremonies, setCeremony }) => {
  if (ceremony) {
    return <></>;
  }
  return (
    <div>
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
    </div>
  );
};

export default CeremonyOptions;
