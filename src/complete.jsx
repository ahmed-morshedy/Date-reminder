/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";

function Complete(prop) {
  return (
    <>
      <div className={"contain bg-body-tertiary "}>
        {prop.complete.map((name, i) => {
          return (
            <Accordion key={i} className="pb-2">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Date Complete {`#${i + 1}`}</Accordion.Header>
                <Accordion.Body>
                  <div key={i}>{`${name} date is finished`}</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>
    </>
  );
}
Complete.propTypes = {
  complete: PropTypes.array,
};

export default Complete;
