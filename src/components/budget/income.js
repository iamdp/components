import React, { Component } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";

class Income extends Component {
  render() {
    return (
      <Form>
        <h3> Income</h3>
        <hr />
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="incomeType">Take Home Pay</Label>
              <Input
                type="text"
                name="text"
                id="takeHomePay"
                placeholder="$5000"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="payFrequency">Frequency</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Bi-weekly</option>
                <option>Bi-monthly</option>
                <option>Monthly</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Income;
