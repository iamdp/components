import React, { Component } from "react";
import { Button } from "reactstrap";
import Income from "./income";
import Expenses from "./expenses";

class Budget extends Component {
  render() {
    return (
      <div>
        <Income />
        <Expenses />
        <Button>Set Up Budget</Button>
      </div>
    );
  }
}

export default Budget;
