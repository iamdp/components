import React, { Component } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";

class Expenses extends Component {
  render() {
    return (
      <Form>
        <h3> Expenses</h3>
        <hr />
        <p>
          Select the expenses you have on a regular basis from the items below:
        </p>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Rent
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Mortgage
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Property Taxes
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Home Insurance
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Condo Fees
          </Label>
        </FormGroup>
        <br />
        <br />
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="expenseType">Rent</Label>
              <Input type="text" name="text" id="rent" placeholder="$1200" />
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

export default Expenses;
