import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { AgGridReact } from 'ag-grid-react';

// SERVICES
import profileService from "./services/profileService";

function App() {
  const [profiles, setprofiles] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [gridApi, setGridApi] = useState(null);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if(!profiles) {
      getProfiles();
    }
  });

  const getProfiles = async () => {
    let res = await profileService.getAll();
    console.log(res);
    setprofiles(res);
    setRowData({athlete:res.name, sport:res.sport, team:res.team, description:res.description});
  }

  const columnDefs = [
    {
      headerName: "Athlete",
      field: "athlete"
    },
    {
        headerName: "Sport(s)",
        field: "sport"
      },
      {
        headerName: "Team",
        field: "team"
      },
      {
          headerName: "Description",
          field: "description"
      }
  ];

  const createProfile = () => {
    const profile = {name:"food", description:"you can eat it"};
    profileService.create(profile);
  }

  const onGridReady = (params) => {
    setGridApi(params.api)
  }

  return (
    <div className="App">
        {rowData &&
        <h3>Athlete profiles:</h3>
        }     
        {rowData &&  
        <div style={{ width: "100%", height: "100%" }}>
            <div className="grid-wrapper">
                <div
                id="myGrid"
                style={{
                    boxSizing: "border-box",
                    height: "100%",
                    width: "100%"
                }}
                className="ag-theme-balham"
                >
                <AgGridReact
                    rowModelType="infinite"
                    columnDefs={columnDefs}
                    rowData = {rowData}
                    onGridReady = {onGridReady}
                />
                </div>
            </div>
        </div>
        }
    </div>
  );
}

export default App;
