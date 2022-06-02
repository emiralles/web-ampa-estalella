import React, { useCallback, useMemo, useRef, useState } from 'react';
//import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function DataGrid() {

    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '20%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    // const [rowData, setRowData] = useState();
    // const [columnDefs, setColumnDefs] = useState([
    //     { field: 'country', rowGroup: true, hide: true },
    //     { field: 'sport', rowGroup: true, hide: true },
    //     { field: 'gold', aggFunc: 'sum' },
    //     { field: 'silver', aggFunc: 'sum' },
    //     { field: 'bronze', aggFunc: 'sum' },
    //     //{ field: 'age', minWidth: 120, checkboxSelection: true, aggFunc: 'sum' },
    //     { field: 'year', maxWidth: 120 },
    //     { field: 'date', minWidth: 150 },
    // ]);

    const defaultColDef = useMemo(() => {
        return {
        flex: 1,
        minWidth: 100,
        };
    }, []);

    const autoGroupColumnDef = useMemo(() => {
        return {
        headerName: 'Make',
        field: 'make',
        minWidth: 100,
        //cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: {
            checkbox: true,
        },
        };
    }, []);

    // const onBtExport = useCallback(() => {
    //     gridRef.current.api.exportDataAsExcel();
    // }, []);
    

    // const onGridReady = useCallback((params) => {
    //     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //     .then((resp) => resp.json())
    //     .then((data) => setRowData(data));
    // }, []);
    
    const [rowData] = useState([
        {id: "asjmkmkkoo", nombre: "Toyota", inicio: "10/05/2022", final: "21/05/2022", price: 35000},
        {id: "asjmkmkdrt", nombre: "Nissa", inicio: "10/05/2022", final: "21/05/2022", price: 32000},
        {id: "asjmkmkfgh", nombre: "SKoda", inicio: "10/05/2022", final: "21/05/2022", price: 72000}
    ]);
    
    const [columnDefs] = useState([
        
        { field: 'nombre', checkboxSelection: true },
        { field: 'inicio' },
        { field: 'final' },
        { field: 'price' },
        { headerClass: ['d-none','w-15'], field: 'id' , cellClass: ['d-none','w-15']}
        
    ]);

  return (
    <div className=' col-12' style={containerStyle}>
        <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            //rowSelection={'multiple'}
            //groupSelectsChildren={true}
            suppressRowClickSelection={true}
            suppressAggFuncInHeader={true}
            //onGridReady={onGridReady}
            ></AgGridReact>
        </div>
    </div>
  )
}

export default DataGrid