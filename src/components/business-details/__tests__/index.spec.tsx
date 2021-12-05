import React from 'react';
import {cleanup, render} from '@testing-library/react';
import BusinessDetails from "../index";
import {Provider} from "react-redux";
import store from "../../../store";

describe("Business Details Test:", () => {
  let component: any;
  beforeEach(() => {
    component = render(
        <Provider store={store}>
          <BusinessDetails />
        </Provider>
    );
  })
  
  afterEach(cleanup)
  
  it('renders Business Details component', () => {
    expect(component).toBeTruthy();
  });
  
})