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
        <div className="text-center fs-5 fw-bold ">There is no dates today</div>
      ) : (
        props.person.map((p, i) => {
          return (
            <Accordion key={i} className="pb-2">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Date {`#${i + 1}`}</Accordion.Header>
                <Accordion.Body>
                  <Row className={style.date} key={i}>
                    <Col className={style.col} sm={3} lg={4} md={4} xs={3}>
                      <div>
                        <img src={imgSrc} className={style.img}></img>
                      </div>
                      <div>
                        <p className="d-inline">{p.name}</p>
                      </div>
                    </Col>
                    <Col
                      xs={3}
                      sm={3}
                      md={2}
                      lg={4}
                      className="d-flex justify-content-center align-items-center border border-top-0 border-bottom-0 "
                    >
                      <p className="fs-6">{p.date}</p>
                    </Col>
                    <Col
                      xs={6}
                      sm={6}
                      md={6}
                      lg={4}
                      className=" d-flex align-items-center justify-content-center  gap-0 column-gap-3"
                    >
                      <Button
                        variant="success"
                        className="  btn-sm"
                        onClick={() => props.handelCompleteBtn(i)}
                      >
                        Completed
                      </Button>
                      <Button
                        className=" btn-sm"
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
