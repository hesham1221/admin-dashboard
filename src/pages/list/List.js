import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import "./list.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { users } from "../../data/users";
const List = () => {
  const navigate = useNavigate()
  const [rows, setRows] = useState(users)
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      width: 70,
      type: "number",
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => {
        return (
          <p className={params.row.status.replace(/\s/g, "")}>
            {params.row.status}
          </p>
        );
      },
    },
    {
      filed: "actions",
      headerName: "Actions",
      width: 200,
      sortable : false,
      filterable : false,
      renderCell: (params) => {
        return (
          <div className="actions">
            <button onClick={() => navigate(`../:${params.row.id}`)} className="actions__btn">Show user</button>
            <button onClick={() => setRows(rows => rows.filter(row => row.id !== params.row.id))} className="actions__btn">Delete</button>
          </div>
        );
      },
    },
  ];
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
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default List;
