import React from 'react';
import UsersTable from './Users/UsersTable';
import ProductsTable from './Products/ProductsTable';
import './common.css';

export const App = () => {

  return (
    <React.Fragment>
        <UsersTable/>
        <ProductsTable/>    
   </React.Fragment>    
  );
};

export default App;
