import React from 'React';
import { shallow } from 'enzyme';

import Header from './header';

describe('./src/components/Header/header.js',() => {
  const getComponent = () => {
    return shallow(<Header />);
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

  it('Should App Should have h2 component',()=>{
    const heading = component.find('h2');
    expect(heading).toHaveLength(1);
  })

  it('Should App Should have h2 with text component',()=>{
    const heading = component.find('h2').text();
    expect(heading).toContain('title')
  })
})