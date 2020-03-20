import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

function App() {
  const jobquery = gql`
    {
      jobs {
        title,
        company{name},
        applyUrl,
      }
    }`;

  const { loading, error, data } = useQuery(jobquery);

  if (loading)
    return "Loading...";
  if (error)
    return `Error ${error.message}`;

  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
      id: 0
    },
    {
      Header: 'Company Name',
      accessor: d => d.company.name,
      id: 1
    },
    {
      Header: 'Apply Url',
      accessor: 'applyUrl',
      id: 2
    },
  ]

  return (
    <div className="App">
      <ReactTable
        data={data.jobs}
        columns={columns}
        defaultPageSize={15}
        filterable={true}
      />
    </div>
  );
}

export default App;
