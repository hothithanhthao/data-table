import React, { useState } from 'react';
import { formatDate } from '../common';
import './Items.css'

const sortTypes = {
  up: {
    fn: (a, b) => a.timestamp - b.timestamp
  },
  down: {
    fn: (a, b) => b.timestamp - a.timestamp
  },
  default: {
    fn: (a, b) => b.timestamp - a.timestamp
  }
}


export const Items = ({rows}) => {
  const [currentSort, setCurrentSort] = useState('default');

  const onSortChange = () => {
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		setCurrentSort(nextSort);
	};

  return (
    rows.length > 0 && (
      <table className='text-left'>
        <thead>
          <tr>
            <th>
              <button onClick={onSortChange}>Date</button>
            </th>
            <th>User ID</th>
            <th>Old value</th>
            <th>New value</th>
          </tr>
        </thead>
        <tbody>
          {[...rows].sort(sortTypes[currentSort].fn).map((item, index) => (
            <tr key={index}>
              <td>{formatDate(item.timestamp)}</td>
              <td>{item.id}</td>
              <td>{item.diff[0].oldValue}</td>
            <td>{item.diff[0].newValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

export default Items;
