import React from 'react';
import { shallow, mount } from 'enzyme';
import { UsersTable } from './UsersTable';
import { Items } from '../Items/Items';
import CircularProgress from '@material-ui/core/CircularProgress';

describe('ProductTable', () => {
  const wrapper = shallow(<UsersTable/>);
  const mountedWrapper = mount(<UsersTable/>);
    it('renders Items', () => {
      expect(wrapper.find(Items)).toHaveLength(1);
    });
    it('should renders loading icon', () => {
      expect(mountedWrapper.find(CircularProgress)).toHaveLength(1);
    });
});

