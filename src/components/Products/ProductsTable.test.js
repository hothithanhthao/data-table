import React from 'react';
import { shallow, mount } from 'enzyme';
import { ProductsTable } from './ProductsTable';
import { Items } from '../Items/Items';
import CircularProgress from '@material-ui/core/CircularProgress';


describe('ProductTable', () => {
  const wrapper = shallow(<ProductsTable/>);
  const mountedWrapper = mount(<ProductsTable/>);
    it('renders Items', () => {
      expect(wrapper.find(Items)).toHaveLength(1);
    });
    it('should renders loading icon', () => {
      expect(mountedWrapper.find(CircularProgress)).toHaveLength(1);
    });
});

