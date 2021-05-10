import React from 'React';
import { shallow } from 'enzyme';

import Income from './income';

describe('./src/components/Income/income.js',() => {
  const transactions = [
      {
          id: Math.floor(Math.random * 100000000),
          text:"Salary",
          amount:+8000
      },
      {
        id: Math.floor(Math.random * 100000000),
        text:"Rent",
        amount:-7000
      }
  ]
  const props = {
      context:{
          transactions
      }
  }
  const amounts = transactions.map((transaction)=>transaction.amount);
  const getComponent = () => {
    return shallow(<Income {...props}/>);
  }

  let component;
  let instance;

  beforeEach(()=>{
    component = getComponent();
    instance = component.instance();
  });

  it('Should App Renders without crashing',()=>{
    expect(component.exists()).toBe(true);
  })

  it('Should App Should have Income Title',()=>{
    const heading = component.find('h4.income-title');
    expect(heading).toContain('INCOME');
  })

  it('Should App Should have Expense Title',()=>{
    const heading = component.find('h4.expense-title').text();
    expect(heading).toContain('EXPENSE')
  })

  it('Should have income amount correct',()=>{
    const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    expect(income).toEqual('8000.00');
  })

  it('Should have expense amount correct',()=>{
    const expense = (
        amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
      ).toFixed(2);
    expect(expense).toEqual('7000.00')
  })
})