import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../src/component/Header.js';

describe('<Header />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Header />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });