import React,{useEffect} from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import IconButton from "@mui/material/IconButton";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { useHistory, useRouteMatch } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SaveIcon from '@mui/icons-material/Save';
import Alert from '@mui/material/Alert';
import AddLoaiHinhKT from "./AddLoaiHinhKT";
import EditDiem from "./EditDiem";
const TranscriptTable = (props) => {
    const [pageSize, setPageSize] = React.useState(15);
    const [selectedList, setSelectedList] = React.useState([]);
    const[edit, setEdit]=React.useState(false);
    const [editRowsModel, setEditRowsModel] = React.useState({});
    const[id,setID]=React.useState('');
    const[tenLop,setHoVaTen]=React.useState('');
    const[hoTen,setLop]=React.useState('');
    const[monhoc,setMonHoc]=React.useState('');
    const[diemmieng,setMieng]=React.useState('');
    const[diem15p,set15p]=React.useState('');
    const[diem1tiet,set1t]=React.useState('');
    const[diemhocky,setHK]=React.useState('');


    const handleEditRowsModelChange = React.useCallback((model) => {
      setEditRowsModel(model);
      //alert(JSON.stringify(model[0]));
    }, []);
    const [isEditDiemDialogVisible, setEditDiemDialogVisible] =
    React.useState(false);
    const hideEditDiemHandler = () => {
        setEditDiemDialogVisible(false);
      };
      const showEditDiemHandler = () => {
        setEditDiemDialogVisible(true);
      };
    const deleteStudentsHandler = () => {
      console.log(selectedList);
    };
    const handleRowSelection = (e) => {
        setID(e.selectionModel);
        alert(e.id);
      }
      
      useEffect(() => {
        //alert(id) // <-- The state is updated
      }, [id]);
    const columns = [
        { field: "id", headerName: "Mã HS", width: 80,        },
        { field: "tenLop", headerName: "Lớp", width: 100 },
        { field: "hoTen", headerName: "Họ tên", width: 190 },
        { field: "diemmieng", headerName: "Điểm miệng", width: 150,editable:true },
        { field: "diem15p", headerName: "Điểm 15p",  width: 150,editable: true },
        { field: "diem1tiet", headerName: "Điểm 1 tiết",  width: 150,editable: true },
        { field: "diemhocky", headerName: "Điểm học kì", width: 120,editable: true },
        { field: "diemtrungbinh", headerName: "Điểm trung bình", width: 140 },
        {
          field: "action",
          type: 'actions',
          headerName: "Hành động",
          headerAlign: "center",
          sortable: false,
          align: "center",
          width: 120,
          renderCell: (params) => {             
              return(
                <IconButton
                    title="Sửa"
                    variant="dark"
                    onClick={()=>{setEdit(false);
                      setID(params.id);
                      setLop(params.tenLop);
                      setHoVaTen(params.hoTen);
                      setMieng(params.diemmieng);
                      set15p(params.diem15p);
                      set1t(params.diem1tiet);
                      setHK(params.diemhocky);
                      setEditDiemDialogVisible("true");
                      alert("Sao chỉ lấy đc mỗi id thôi ta")
                  }}
                    >
                    <EditOutlined />
                    </IconButton>  
                  )
          }
        
            
         
        },
      ];
    
      return (
        <div style={{ height: "auto", minHeight: "500px", width: "100%" }}>
        {selectedList.length > 0 && (
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "rgba(3, 201, 215, 0.08)",
            }}
          >
            <Typography variant="subtitle1">
              Đã chọn {selectedList.length}
            </Typography>
            <IconButton
              title="Xóa"
              variant="dark"
              onClick={deleteStudentsHandler}
            >
              <DeleteOutlined />
            </IconButton>
          </Toolbar>
        )}
        {selectedList.length === 0 && <Toolbar></Toolbar>}
        <DataGrid
        components={{
            Toolbar: GridToolbar,
          }}
          className="mh-500 bt-none"
          hideFooterSelectedRowCount
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSelectionModelChange={(params) => {
            setSelectedList(params);
            alert(params)
          }}
          pagination
          disableColumnMenu
          disableSelectionOnClick
        //  checkboxSelection
          rows={rows}
          rowsPerPageOptions={[5, 10, 20]}
          columns={columns}
          

          editMode="row"
          editRowsModel={editRowsModel}
          onCellClick={handleEditRowsModelChange}
          onEditRowsModelChange={!edit ? handleEditRowsModelChange:""}
          //onSelectionModelChange = {handleRowSelection}

        />
         
        <EditDiem
        open={isEditDiemDialogVisible}
        onClose={hideEditDiemHandler}
        _id={id}
        _hoten={hoTen}
        _lop={tenLop}
        _monhoc={monhoc}
        _diemmieng={diemmieng}
        _diem15p={diem15p}
        _diem1t={diem1tiet}
        _diemhk={diemhocky}


        />
      </div>

      
      );
      
};

export default TranscriptTable;
const rows = [
    { id: 1,tenLop:'10A1' ,hoTen: 'Đinh Việt Hào',diemmieng:'10 9 8' ,diem15p: '10 9 8', diem1tiet:'10 9 8', diemhocky:'10', diemtrungbinh:'Chưa tính' },
    { id: 2,tenLop:'10A1' ,hoTen: 'Đinh Việt Cường',diemmieng:'10 9 8' , diem15p: '10 9 8', diem1tiet:'10 9 8', diemhocky:'10', diemtrungbinh:'Chưa tính' },
    { id: 3,tenLop:'10A1' ,hoTen: 'Đinh Cao Hào',diemmieng:'10 9 8' , diem15p: '10 9 8', diem1tiet:'10 9 8', diemhocky:'10', diemtrungbinh:'Chưa tính' },
    { id: 4,tenLop:'10A1' ,hoTen: 'Nguyễn Việt Hào',diemmieng:'10 9 8' , diem15p: '10 9 8', diem1tiet:'10 9 8', diemhocky:'10', diemtrungbinh:'Chưa tính' },
    { id: 5,tenLop:'10A1' ,hoTen: 'Nguyễn Cao Cường',diemmieng:'10 9 8' , diem15p: '10 9 8', diem1tiet:'10 9 8', diemhocky:'10', diemtrungbinh:'Chưa tính' },

  ];
  
 //const rows1 = [
  // {
  //   id: 1,
  //   hoTen: "Nguyễn Cao Cường",
  //   gioiTinh: "Nam",
  //   ngaySinh: "09/03/2001",
  //   diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
  // },
 //  {
 //    id: 2,
 //    hoTen: "Nguyễn Cao Cường",
 //    gioiTinh: "Nam",
 //    ngaySinh: "09/03/2001",
 //    diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
 //  },]
//   {
//     id: 3,
//     hoTen: "Nguyễn Cao Cường",
//     gioiTinh: "Nam",
//     ngaySinh: "09/03/2001",
//     diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
//   },
//   {
//     id: 4,
//     hoTen: "Nguyễn Cao Cường",
//     gioiTinh: "Nam",
//     ngaySinh: "09/03/2001",
//     diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
//   },
//   {
//     id: 5,
//     hoTen: "Nguyễn Cao Cường",
//     gioiTinh: "Nam",
//     ngaySinh: "09/03/2001",
//     diaChi: "xã Eatar, huyện Cư M'gar, tỉnh Đăk Lăk",
//   },
// ];