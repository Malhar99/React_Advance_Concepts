import React from 'React';
import { shallow } from 'enzyme';

import Balance from './balance';

describe('./src/components/Balance/balance.js',() => {
  const getComponent = () => {
    return shallow(<Balance />);
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

  it('Should App Should have h4 component',()=>{
    const heading = component.find('h4');
    expect(heading).toHaveLength(1);
  })

  it('Should App Should have h2 with text component',()=>{
    const heading = component.find('h4').text();
    expect(heading).toContain('your_balance')
  })
})