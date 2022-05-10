const DisclaimerArea = ({ content, acknowledged, setAcknowledged }) => {
  return acknowledged ? (
    <></>
  ) : (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div>
        <button
          onClick={() => {
            setAcknowledged(true);
          }}>
          Next
        </button>
      </div>
    </>
  );
};

export default DisclaimerArea;
