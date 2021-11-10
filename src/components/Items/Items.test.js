import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {Items} from './Items';

const rows = [
  {
    id: 'e28d290a-a2f2-48c2-9001-ff43884e271b',
    timestamp: new Date('2020/2/14').getTime(),
    diff: [
      { field: 'name', oldValue: 'John', newValue: 'Bruce' },
    ],
  },
  {
    id: '8bd0166f-f0c6-48fd-9fcd-a17e76eb1e92',
    timestamp: new Date('2020/2/15').getTime(),
    diff: [
      { field: 'name', oldValue: 'Bruce', newValue: 'Nick' },
    ],
  }];

describe('Items', () => {
  it('renders according to snapshot', () => {
    const sallowComponent = shallow(
      <Items rows={rows}/>
    );
    expect(toJson(sallowComponent)).toMatchSnapshot();
 });
});
