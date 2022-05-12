import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Board({ reviews }) {
  const columns = [
    { field: 'id', headerName: '번호', width: 90 },
    {
      field: 'productinfo',
      headerName: '상품정보',
      width: 150,
      editable: true,
    },
    {
      field: 'categori',
      headerName: '카테고리',
      width: 100,
      editable: true,
    },
    {
      field: 'title',
      headerName: '제목',
      width: 220,
      editable: true,
    },
    {
      field: 'date',
      headerName: '작성일',
      width: 110,
      editable: true,
    },
    {
      field: 'writer',
      headerName: '작성자',
      width: 110,
      editable: true,
    },
  ];

  return (
    <div className="flex justify-end m-24">
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={reviews}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default Board;
