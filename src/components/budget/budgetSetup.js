import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

class BudgetSetup extends Component {
  render() {
    return (
      <Form>
        <h3> Let's Set Up Your Budget</h3>
        <hr />
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Source Name:</Label>
              <Input
                type="text"
                name="text"
                id="takeHomePay"
                placeholder="Take Home Pay"
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Amount:</Label>
              <Input type="text" name="text" id="amount" placeholder="$2000" />
            </FormGroup>
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
            <FormGroup tag="fieldset">
              <p>Type:</p>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Income
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Expense
                </Label>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default BudgetSetup;
