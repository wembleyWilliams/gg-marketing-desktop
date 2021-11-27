import React from 'react';
import {cleanup, render, screen, waitFor} from '@testing-library/react';
import Description from "../index";

describe("Description Test:", () => {
    let component: any;
    beforeEach(() => {
        component = render(
            <Description description={"mock"}/>
        );
    })
    
    
    afterEach(cleanup)
    
    it('renders Description component', () => {
        expect(component).toBeTruthy();
    });
    
    it('description should not be empty', () => {
        const desc = screen.getByTestId("description-body");
        jest.setTimeout(3000);
        expect(desc).not.toBeEmptyDOMElement()
    })
})