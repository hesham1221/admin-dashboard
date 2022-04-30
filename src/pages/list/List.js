import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import './list.scss'
import {DataGrid} from '@mui/x-data-grid'
const List = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      width: 70,
      type : 'number'
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field : 'email',
      headerName : 'Email',
      width: 200,
    },{
      field : 'status',
      headerName : 'Status',
      width: 130,
      renderCell : (params) =>{
        return <p className={params.row.status.replace(/\s/g, "")}>{params.row.status}</p>
      }
    },
  
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , email :'fakefd@fake.com' , status : 'active' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , email :'fake1243@fake.com' , status : 'pending' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 , email :'fake2ee23@fake.com' , status : 'active' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , email :'fakedefe@fake.com' , status : 'not active'},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null , email :'fafdfdke@fake.com' ,status : 'active' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150  , email :'fakefd342@fake.com' , status : 'pending'},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , email :'faker3r3r@fake.com' ,status : 'not active' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , email :'fakeererfd@fake.com',status : 'pending' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , email :'fakeerefd@fake.com' , status : 'not active'},
  ]  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <NavBar />
      <div className="dataGrid">
      <DataGrid
      className="gridEL"
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
      </div>
    </div>
  );
};

export default List;
