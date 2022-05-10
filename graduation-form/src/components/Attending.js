import HiringAcademicDress from "./HiringAcademicDress";
import MaoriPreGrad from "./MaoriPreGrad";
import SchoolPreGrad from "./SchoolPreGrad";
import Tickets from "./Tickets";

const Attending = ({ ceremony }) => {
  console.log(ceremony);
  return (
    <>
      <Tickets ceremony={ceremony} />
      <MaoriPreGrad ceremony={ceremony} />
      <SchoolPreGrad ceremony={ceremony} />
      <HiringAcademicDress ceremony={ceremony} />
    </>
  );
};

export default Attending;
