import React from 'React';
import { shallow } from 'enzyme';

import TransactionList from './transactionList';

describe('./src/components/TransactionList/transactionList.js',() => {
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
  const getComponent = () => {
    return shallow(<TransactionList {...props}/>);
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

  it('Should App Should have h3 component',()=>{
    const heading = component.find('h3');
    expect(heading).toHaveLength(1);
  })

  it('Should App Should have h3 with text component',()=>{
    const heading = component.find('h3').text();
    expect(heading).toContain('history')
  })
})