/* eslint-disable no-unused-vars */
import { Button, Row, Col } from "react-bootstrap";
import imgSrc from "./assets/team-01.png";
import style from "./style.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";

function Dates(props) {
  return (
    <>
      {props.person.length == 0 ? (
        <div className="text-center fs-5 fw-bold">There is no dates today</div>
      ) : (
        props.person.map((p, i) => {
          return (
            <Accordion key={i} className="pb-2">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Date {`#${i + 1}`}</Accordion.Header>
                <Accordion.Body>
                  <Row className={style.date} key={i}>
                    <Col className={style.col} sm={4}>
                      <div>
                        <img src={imgSrc} className={style.img}></img>
                      </div>
                      <div>
                        <p className="d-inline">{p.name}</p>
                      </div>
                    </Col>
                    <Col
                      sm={4}
                      className="d-flex align-items-center justify-content-center border border-top-0 border-bottom-0 "
                    >
                      <p className="fs-6 text-center ">{p.date}</p>
                    </Col>
                    <Col
                      sm={4}
                      className="text-center d-flex align-items-center justify-content-center"
                    >
                      <Button
                        variant="success"
                        className="mx-4"
                        onClick={() => props.handelCompleteBtn(i)}
                      >
                        Completed
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => props.handelCancelBtn(i)}
                      >
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })
      )}
    </>
  );
}
Dates.propTypes = {
  person: PropTypes.array,
  setPerson: PropTypes.func,
  handelCompleteBtn: PropTypes.func,
  handelCancelBtn: PropTypes.func,
};
export default Dates;
