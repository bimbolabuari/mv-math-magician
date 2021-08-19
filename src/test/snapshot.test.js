import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Tests snapshots of components', () => {
  it('renders correctly', () => {
    const UICalculator = renderer
      .create(<Calculator />)
      .toJSON();
    expect(UICalculator).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const UIHome = renderer
      .create(<Home />)
      .toJSON();
    expect(UIHome).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const UIQuote = renderer
      .create(<Quote />)
      .toJSON();
    expect(UIQuote).toMatchSnapshot();
  });
});