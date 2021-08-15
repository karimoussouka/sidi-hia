import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const Grid = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'cin', headerName: 'CIN', width: 160 },
        { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 200},
        { field: 'email', headerName: 'E-mail', width: 270},
        { field: 'phone', headerName: 'Phone', width: 200},
        { field: 'hospital', headerName: 'Hospital', width: 200},
        { field: 'action', headerName: 'Action', width : 200},
      ];
      const rows = [
        {id : '1' , cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' , hospital : 'Mohamed 6'},
        {id : '2' , cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' , hospital : 'ibn tofail'},
        {id : '3' , cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' , hospital : 'sifil'},
        {id : '4' , cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' , hospital : 'test'},
      ];
    return (
        <div className = "list">
                <DataGrid rows={rows} columns={columns} disableSelectionOnClick pageSize={10} checkboxSelection />
        </div>
    )
}
export default Grid;
