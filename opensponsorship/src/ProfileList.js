import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { AgGridReact } from 'ag-grid-react';
import profileService from "./services/profileService";
import { AgGridColumn } from "ag-grid-react/lib/agGridColumn";
import { PropTypes } from "prop-types";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const ProfileList = (props) => {

console.log(props.rowData);  
  return (
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
            rowData={props.rowData}
            onGridReady={props.onGridReady}
            domLayout={'autoHeight'}
        >
            <AgGridColumn headerName="Athlete" field="name"></AgGridColumn>
            <AgGridColumn headerName="Sport" field="sport"></AgGridColumn>
            <AgGridColumn headerName="Team" field="team"></AgGridColumn>
            <AgGridColumn headerName="Description" field="description"></AgGridColumn>
        </AgGridReact>
    </div>
    </div>
    </div>
  );
}

ProfileList.propTypes = {
    getGridData: PropTypes.func,
}

export default ProfileList;
