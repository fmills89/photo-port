import React from 'react';

// render function "render the component"
// cleanup used to remove components from the DOM to prevent memory leaking
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// import the About Component 
import About from '..';

//call the cleanup() using the afterEach global function from jest
// after each test wont have any leftover memory data could give us false results
afterEach(cleanup);

describe('About component', () => {
    // first test be the baseline to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        // asFragment(), returns a snapshot of the about component
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})