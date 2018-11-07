import React, { Component } from 'react';
import { Button } from 'reactstrap';
import BudgetSetup from './budgetSetup';
import Expenses from './expenses';

class Budget extends Component {
  render() {
    return (
      <div>
        <BudgetSetup />
        <Button>Set Up Budget</Button>
      </div>
    );
  }
}

export default Budget;
