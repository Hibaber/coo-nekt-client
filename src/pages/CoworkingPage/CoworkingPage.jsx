import CoworkingList from "../../components/CoworkingList/CoworkingList";
import "../../services/material.service";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CoworkingPage = () => {
  return (
    <>
      <Link to="/material">
        <Button
          className=" button materialButton"
          variant="light"
          style={{ width: "5%" }}
        >
          Volver
        </Button>
      </Link>
      <CoworkingList />
    </>
  );
};

export default CoworkingPage;
