import Ceremony from "./Ceremony";
import Email from "./Email";

const Fields = ({ ceremonies }) => {
  //   console.log(ceremonies);
  return (
    <>
      {ceremonies.map(({ node }) => {
        return (
          <Ceremony key={node.ID} ceremony={node}>
            <Email />
          </Ceremony>
        );
      })}
    </>
  );
};

export default Fields;
