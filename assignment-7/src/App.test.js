import React from 'React';
import { mount } from 'enzyme';

import App from './App';
import Header from './components/Header/header';

describe('./src/App.js',() => {
  const getComponent = () => {
    return mount(<App/>);
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

  it('Should App Should have Header component',()=>{
    const homecomponent = component.find('Header');
    expect(homecomponent).toHaveLength(1);
  })
})