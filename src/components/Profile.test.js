import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
  let component;

  beforeEach(() => {
    component = mount(<Profile />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile />, div);
  });

  it("renders the user's avatar", () => {
    const avatar = component.find('img#avatar');
    expect(avatar.length).toBe(1);
  });

  it("renders the user's name", () => {
    const name = component.find('Row#name');
    expect(name.length).toBe(1);
  });

  it("renders the user's username", () => {
    const username = component.find('Row#username');
    expect(username.length).toBe(1);
  });

  it("renders the user's reviews", () => {
    const reviews = component.find('Row#review-row');
    expect(reviews.length).toBe(3);
  });

  it("renders each review's corresponding photo", () => {
    const photos = component.find('img#review-photo');
    expect(photos.length).toBe(3);
  });

  it("renders each review's corresponding text body", () => {
    const texts = component.find('p#review-text');
    expect(texts.length).toBe(3);
  });
});
