import React from 'react';

import { shallow, mount,render } from 'enzyme';
import App from './App';
import Timer from './Timer';



const fnclick = jest.fn();
describe('First try',()=>{

  it('find number of div',()=>{
    const container = shallow(<App></App>);
    expect(container.find('div').length).toEqual(4);
  })
  it('containts Timer Element',()=>{
    const container = shallow(<App></App>)
    expect(container.containsMatchingElement(<Timer></Timer>)).toBe(true);
  })
});
describe('buttons displayed on the first page',()=>{

  
  it('find button',()=>{
      const container = shallow(<Timer ></Timer>);
      expect(container.find('button').length).toEqual(3)
      
    
  })
  it('checking select element',()=>{
    const container = shallow(<Timer></Timer>)
    expect(container.find('select').length).toEqual(5)
  })
  it('number of div',()=>{
    const container = shallow(<Timer></Timer>)
    expect(container.find('div').length).toEqual(6)
    expect(container.find('h1').length).toEqual(2)
    expect(container.getElements);
  })
  
});
describe('Elements in Timer',()=>{

  let container:any;
  beforeEach(() => (container = mount(<Timer />)));


  it('Select Element',()=>{
 
    const container = shallow(<Timer></Timer>)
    expect(container.find('select').length).toEqual(5)

  })
 
  it('btn Exits',()=>{
    

    const container = shallow(<Timer></Timer>);
    expect(container.exists('.btn')).toEqual(true)

  })

})