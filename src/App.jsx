/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";
import Dates from "./Dates";
import Complete from "./complete";
import React, { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Ahmed", date: "5 Pm" },
    {
      name: "Mohamed",
      date: "2 Am",
    },
    {
      name: "Ali",
      date: "5 Am",
    },
  ]);

  const [complete, setComplete] = useState(["Ahmed Hassan"]);

  function handelCompleteBtn(index) {
    const completeP = persons.filter((_, i) => i == index);

    handelCancelBtn(index);

    setComplete((c) => [...c, completeP[0].name]);
  }

  function handelCancelBtn(index) {
    const deleteP = persons.filter((_, i) => i !== index);
    setPersons(deleteP);
  }

  return (
    <Container>
      <Row>
        <Col>
          {persons.length
            ? `You have ${persons.length} dates today`
            : "You don't have any dates today"}
        </Col>
      </Row>
      <Row className={"contain bg-body-tertiary"}>
        <Col>
          <Row className=" p-3 text-center border mb-4 rounded-1 ">
            <Col>Name</Col>
            <Col className="border border-top-0 border-bottom-0">Date</Col>
            <Col> Status</Col>
          </Row>
          <Dates
            person={persons}
            setPerson={setPersons}
            handelCancelBtn={handelCancelBtn}
            handelCompleteBtn={handelCompleteBtn}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Completed Dates</span>
        </Col>
      </Row>
      <Row>
        <Complete complete={complete} />
      </Row>
    </Container>
  );
}

export default App;
