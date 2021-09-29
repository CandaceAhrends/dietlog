import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { GridService } from "./GridService";
import ActionsHeader from "./Header";
import { dummy } from "./dummy";

const gridServiceInstance = GridService.getInstance();

const GroupingGrid = () => {
  const [rowData, setRowData] = useState(null);

  React.useEffect(() => {
    setRowData(dummy());
    gridServiceInstance.setGridData(dummy());
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className="ag-theme-alpine-dark"
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
          frameworkComponents={{ agColumnHeader: ActionsHeader }}
          defaultColDef={{
            sortable: true,
            resizable: true,
            floatingFilter: true,
            filter: "agTextColumnFilter",
          }}
          debug={true}
          rowData={rowData}
        >
          <AgGridColumn field="name"></AgGridColumn>
          <AgGridColumn field="calories"></AgGridColumn>
          <AgGridColumn
            field="date"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn field="fat"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};

export default GroupingGrid;
