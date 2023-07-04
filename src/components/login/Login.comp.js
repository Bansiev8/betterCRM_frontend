import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const Login = ({
  handleOnChange,
  email,
  pass,
  formSwitcher,
  handleOnSubmit,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1> Client Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  value={pass}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Button type="submit"> Login </Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("reset")}>
              Forget Password?
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  formSwitcher: PropTypes.func.isRequired,
};
