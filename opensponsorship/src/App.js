import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { AgGridReact } from 'ag-grid-react';
import profileService from "./services/profileService";
import ProfileList from "./ProfileList";
import ModalMain from './ModalMain'

const App = () => {
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  const [adding, setAdding] = useState(false);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  useEffect(() => {
    getGridData();
  }, []);

  const getGridData = () => {
    profileService.getAll().then((res) => {setRowData(res); console.log(res);});
  }

  const setGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    console.log(params);
  }

  useEffect(() => {
    if(gridApi !== null) {
      var data = rowData;
      gridApi.setRowData(data);
    }   
  }, [rowData]);

  const onProfileAdded = () => {
    getGridData();
  }

  return (
    <div className="App">
        <h3>Athlete profiles:</h3>
        <div className = "grid">
          <ProfileList
            gridApi={gridApi}
            getGridData={getGridData}
            onGridReady={setGridReady}
            gridColumnApi={gridColumnApi}
            rowData = {rowData}
          />
        </div>
        <Button onClick={() => setAdding(true)}>Add Athlete</Button>
        <ModalMain
          show={adding}
          closeModal={() => {setAdding(false); onProfileAdded();}}
          submit={() => onProfileAdded()}
          />
    </div>
  );
}

export default App;
