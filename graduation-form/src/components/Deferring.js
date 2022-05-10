const Deferring = ({ ceremony: { Defer_Content } }) => {
  return <div dangerouslySetInnerHTML={{ __html: Defer_Content }} />;
};

export default Deferring;
