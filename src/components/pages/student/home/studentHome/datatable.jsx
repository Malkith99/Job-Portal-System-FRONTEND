import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColoumns,userRows } from "./datatablesource";
//import { TablePagination } from "@mui/material";

const datatable =()=> {
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          sortable: false,
          renderCell: () => {
            return (
              <div className="cellAction">
                
                  <div className="viewButton">View</div>
                  
                
              </div>
            );
          },
        },
      ];
      
    return (
        <div className="datatable">
          <DataGrid
            rows={userRows}
            columns={userColoumns.concat (actionColumn)}
           // pageSize={10}
          // rowsPerPageOptions={[2]}
           // checkboxSelection
         
          />
        </div>
      );
}

export default datatable