import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/Login';
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Login />, div)
})

it('has a username input', ()=>{
  const component = mount(<Login />)
  expect(component.find('#username').type()).toBe("input")
})

it('has a password input', ()=>{
  const component = mount(<Login />)
  expect(component.find('#password').type()).toBe("input")
})

it('has a login button', ()=>{
  const component = mount(<Login />)
  expect(component.find('#submit_button').type()).toBe("input")
})

it('has a register button', ()=>{
  const component = mount(<Login />)
  expect(component.find('#register_button').type()).toBe("input")
})



// it("calls submitHandler onsubmit", ()=>{
//   const mockSubmitHandler = jest.fn()
//   const component = mount(<Login onSubmit={mockSubmitHandler}/>)
//   component.find('button#submit').simulate('click', {button: 0})
//   expect(mockSubmitHandler.mock.calls.length).toBe(1)
// })
