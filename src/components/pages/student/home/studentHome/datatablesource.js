export const userColoumns=[
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'Company_Name', headerName: 'Company Name', width: 230 

    },
    { field: 'Position', headerName: 'Position', width: 230 },
    {
      field: 'Applied_date',
      headerName: 'Applied Date',
    
      width: 200,
    },
    {
      field: 'Status',
      headerName: 'Status',
      //sortable: true,
      width: 260,
      renderCell:(params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>
              {params.row.status}
            </div>
          );
          
      },    
    },
   
];
export const userRows=[
    
    {   id: 1, Company_Name: 'Snow', Position:'Assistat Engineer',Applied_date: '2019-10-12', Status:'rejected'},
    {   id: 2, Company_Name: 'HNB', Position:'Design Engineer',Applied_date: '2010-10-12', Status:'active'},
    {   id: 3, Company_Name: 'Selan', Position:'Assistant',Applied_date: '2009-10-12', Status:'pending'},
]