import React from 'react';
import renderer from 'react-test-renderer';

import ContentArea.js from '../src/component/ContentArea.js.js';

describe('<ContentArea.js />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<ContentArea.js />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });