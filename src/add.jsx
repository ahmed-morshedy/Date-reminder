import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

function Add(props) {
  const getName = useRef();
  const getTime = useRef();

  const [show, setShow] = useState(false);

  function flashText() {
    setShow(false);
  }

  function handelClick() {
    if (getName.current.value !== "" && getTime.current.value !== "") {
      props.add({
        name: getName.current.value,
        date: getTime.current.value,
      });
      getName.current.value = "";
      getTime.current.value = "";
    } else {
      setShow(true);
      setTimeout(flashText, 3000);
    }
  }

  return (
    <>
      <div className="fs-4 ">Add new date</div>
      <Form className="position-relative">
        <InputGroup className="mb-3 mt-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Date Name
          </InputGroup.Text>
          <Form.Control
            ref={getName}
            required
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <div className="mb-3">Time :</div>
        <input type="time" required ref={getTime}></input>
      </Form>
      <button
        className="position-absolute bottom-0 end-0 rounded-pill  btn btn-primary"
        onClick={handelClick}
      >
        Add
      </button>
      {show && (
        <Alert variant="danger" className="alert">
          This filed needed
        </Alert>
      )}
    </>
  );
}

Add.propTypes = {
  add: PropTypes.func,
};

export default Add;
