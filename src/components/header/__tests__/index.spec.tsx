import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Header from "../index";
import {Provider} from "react-redux";
import store from "../../../store";

describe("Description Test:", () => {
  let component: any;
  beforeEach(() => {
    component = render(
        <Provider store={store}>
          <Header image={null}/>
        </Provider>
        
    );
  })
  
  afterEach(cleanup)
  
  it('renders Description component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have image present', () => {
    const logo = screen.getByAltText("logo");
    
    expect(logo).toBeInTheDocument();
  })
  
})