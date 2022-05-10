const Defer = ({ content, show }) => {
  return !show ? (
    <></>
  ) : (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default Defer;
