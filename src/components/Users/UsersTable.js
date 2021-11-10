import React, { useState, useEffect } from 'react';
import api from '../../lib/api';
import Items from '../Items/Items';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

export const UsersTable = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
  
    useEffect(() => {
      const loadData = async () => {
        try {
          setIsLoading(true);
          const result = await api.getUsersDiff();
          setData(result.data);
          setErrorMsg('');
        } catch (error) {
          setErrorMsg('We had problems fetching your data. Please try again');
        } finally {
          setIsLoading(false);
        }
      };
  
      loadData();
    }, [page]);
  
    const loadMore = () => {
      setPage((page) => page + 1);
    };
  
    return (
      <div className="container">
         <Items rows={data}/>
            {errorMsg && <div className="error-msg">{errorMsg}</div>}
            <div className="loading">
            {isLoading ?<CircularProgress/> :<Button className="load-button" variant="contained" color="primary" onClick={loadMore}>Retry</Button>}
            </div>  
       </div>  
             
    );
};

export default UsersTable;


