import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Socials from "../index";
import store from "../../../store";
import {Provider} from "react-redux";

describe("Socials Test:", () => {
  let component: any;
  beforeEach(() => {
    component = render(
        <Provider store={store}>
          <Socials/>
        </Provider>
    );
  })
  
  afterEach(cleanup)
  
  it('renders Socials component', () => {
    expect(component).toBeTruthy();
  });
  
  it('Socials Card should not be empty', () => {
    const socials = screen.getByTestId("socials-card");
    
    expect(socials).not.toBeEmptyDOMElement()
  })
  
})