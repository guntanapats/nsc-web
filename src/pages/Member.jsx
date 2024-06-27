// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Box, Avatar,Typography,Grid} from '@mui/material'
// import MemberSidebar from '../Member/Sidebar';



// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 18,
//     },
// }));
  
// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
// }));

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// function createData(name,discription) {
//     return {name, discription}
// }
// const rows = [
//     createData('ชื่อโครงการ :', 'สาคูแพลตฟอร์มบริหารจัดการชั้นเรียน'),
//     createData('หมวดหมู่ :', 'โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้'),
//     createData('สมาชิก'),
//     createData('','หัวหน้าโครงการ : นางสาวหฤทัย แซ่ฮั่น'),
//     createData('','ผู้พัฒนาคนที่2 : นางสาวคริสต์มาส วีรชิตอรกานต'),
//     createData('','ผู้พัฒนาคนที่3 : นายจักรภัทร สุวรรณพงศ'),
//     createData('อาจารย์ที่ปรึกษา'),
//     createData('','นายธนาธิป ลิ่มนา'),
//     createData('เกียรติบัตร'),
// ];
// const Member = () => {
   
//     return (
//         <div>
//             <MemberSidebar/>
//             <Box sx={{flexGrow: 1 }}>
//                 <Grid container spacing={1} columns={16}>
//                     <Grid item xs={35}>
//                     <Item><h1>การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่24 (NSC 2022) </h1></Item>
//                     </Grid>
//                 </Grid>
//             </Box>
//             {/* <Box>
//             <Typography variant="h4">
//                 การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่24 (NSC 2022)
//             </Typography>
//             </Box> */}
            
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }}aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                         <TableCell><h1>รหัสโครงการ</h1></TableCell>
//                         <TableCell align="justify"><h1>24p11s0098</h1></TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows.map((row) => (
//                             <StyledTableRow key={row.name}>
//                             <StyledTableCell component="th" scope="row">
//                                 {row.name}
//                             </StyledTableCell>
//                             <StyledTableCell align="justify">{row.discription}</StyledTableCell>
                            
//                             </StyledTableRow>
//                         ))}    
//                     </TableBody>
//                 </Table>
//             </TableContainer>
            
             
//         </div>     
//     );
// };
import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Sidebar from '../Member/Sidebar';
import { Typography, Button } from "@mui/material";
import Box from '@mui/material/Box';
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import BackupTableIcon from '@mui/icons-material/BackupTable';
//create our styles
import HeaderMember from '../components/HeaderMember';
import './Member.css'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Btbanner from '../components/Btbanner';


const useStyles = makeStyles(({ theme = createTheme() }) => ({
    container: {
      width: "auto",
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(3),
      },
    },
  }));
const classes = {
  
  paper: {
    padding:12,
    fontSize: 19,
  }
};

const theme = createTheme();

function Member() {
  return (
    <div style={classes.root}>
        <div className="ShowSidebar-Member">
        <Sidebar/>
      </div>
      <div className="ShowHeader-Member">
                <HeaderMember/>
            </div>
      <Grid container spacing={3}>
        {/*Create items with different breakpoints */}
        {/*For example,This item will be 12 units wide on extra small screens */}
        
        <Grid item xs={12}>
          <center>
            <Typography style={classes.paper} sx={{fontFamily: "Kanit"}}><h1><b>การแข่งขันพัฒนาโปรมแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่ 24</b></h1></Typography>
          </center>
        </Grid>
        
        {/*This item will be 12 units on extra small screens */}
        {/*But will be 6 units on small screens */}
        
        <Grid className="ShowGrid-Member" item xs={2} sm={3}  backgroundColor='#e3f2fd'sx={{ textAlign: "center" }} > 
          <Typography style={classes.paper} sx={{fontFamily: "Kanit"}}><b class='bg-gray' >อาจารย์ที่ปรึกษา:  </b></Typography> 
          <Typography style={classes.paper} sx={{fontFamily: "Kanit"}}><b>นายชิระวัฒน์ วัฒนพานิช</b></Typography>
        </Grid>
        <Grid className="ShowGrid-Member"  item xs={2} sm={3}  backgroundColor='#aadbff' sx={{ textAlign: "center" }}>
          <Typography style={classes.paper} sx={{fontFamily: "Kanit"}}><b>ผู้พัฒนาคนที่ 1 (หัวหน้าโครงการ): </b></Typography>
          <Typography style={classes.paper} sx={{fontFamily: "Kanit"}}><b>นายปุณณวิช ฝอยทอง</b></Typography>
        </Grid>
        <Grid className="ShowGrid-Member"  item xs={2} sm={3}  backgroundColor='#e3f2fd' sx={{ textAlign: "center" }}>
          <Typography style={classes.paper} sx={{fontFamily: "Kanit"}}><b>ผู้พัฒนาคนที่ 2: </b></Typography>
          <Typography style={classes.paper} sx={{fontFamily: "Kanit"}}><b>นางสาวกวิญทิพย์ ยาปัน</b></Typography>
        </Grid>  
        <Grid className="ShowGrid-Member"  item xs={2} sm={3}  backgroundColor='#aadbff' sx={{ textAlign: "center" }}>
          <Typography style={classes.paper} sx={{fontFamily: "Kanit"}}><b>ผู้พัฒนาคนที่ 3: </b></Typography>
          <Typography style={classes.paper} sx={{fontFamily: "Kanit"}}><b>นายวิศิษฏ์ศักดิ์ อ่อนแก้ว</b></Typography>
        </Grid> 
        {/* </div> */}
        <div class="ShowGridMB-Member">
          <div class="first">อาจารย์ที่ปรึกษา : นายชิระวัฒน์ วัฒนพานิช</div>
          <div class="second">ผู้พัฒนาคนที่ 1 (หัวหน้าโครงการ): นายปุณณวิช ฝอยทอง</div>
          <div class="third">ผู้พัฒนาคนที่ 2 : นางสาวกวิญทิพย์ ยาปัน</div>
          <div class="fourth">ผู้พัฒนาคนที่ 3 : นายวิศิษฏ์ศักดิ์ อ่อนแก้ว</div>
        </div>

        <Grid item xs={2} sm={4}>
        </Grid>
        {/* <center> */}
        <Grid item xs={12}>

        <Box
            sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
                m: 1,

                width: "95%",
                height: "auto",
                borderRadius: 3,
                marginLeft: "auto",
                marginRight: "auto",
                paddingBottom: 2,
            },
            }}
        >
        <Paper elevation={3}  sx={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(2)}}>
          <Box
            component="h3"
            sx={{
                marginLeft: theme.spacing(5),
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(2)
            }}
          >
          <Box component='div'
          sx={{  width: {xs: "50%", md:"20%"} , height: 'auto', alignItems: 'center',
                bgcolor: '#1976d2', color: 'white', display: 'flex',
                paddingleft: theme.spacing(3), 
                borderRadius: 3, marginBottom: theme.spacing(2) }}>
          <Typography
            sx={{ display:'flex' , fontWeight: "bold" , fontSize: "20px",
                   padding: theme.spacing(3)}}>
            รหัสโครงการ: 24p11s0052   
          </Typography>
        </Box>
  
        <Typography  sx={{ fontWeight: "bold" , fontSize: "20px" }}>
            โครงการ:   โปรแกรมช่วยเหลือและวิเคราะห์เพื่อพัฒนาการเล่นAOV
            <br />
            หมวดหมู่โครงการ:   โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้
            <br />
            ระดับ:   นิสิต นักศึกษา
            <br />
            สถาบัน   มหาวิทยาลัยวลัยลักษณ์
        </Typography>


        </Box>    
        </Paper>  
        <Button sx={{ fontSize: 20, marginBottom: theme.spacing(1)}}
             variant="contained"
             href="https://drive.google.com/file/d/1gJOKqqM0brIkPeiEbS2HrhfZqJ2DLGNN/view?usp=sharing" 
            >
        <BackupTableIcon sx={{ paddingLeft: theme.spacing(2), marginRight: theme.spacing(2), fontSize: 25 }} />
            ตารางการนำเสนอโครงการ
        </Button>
        </Box>
        
        <Box
            sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
                m: 1,

                width: "95%",
                height: "auto",
                borderRadius: 3,
                marginLeft: "auto",
                marginRight: "auto",
                paddingBottom: 2,
            },
            }}
        >
        <Paper elevation={3}  sx={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(2)}}>
          <Box
            component="h3"
            sx={{
                marginLeft: theme.spacing(5),
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(2),
                
            }}
          >
            สถานะโครงการ:  สิ้นสุดการแข่งขันโครงการ
        <br />
            ผลการแข่งขัน: ไม่ผ่านการเข้ารอบ
        </Box>
        </Paper>
        </Box>

        <Box
            sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
                m: 1,

                width: "95%",
                height: "auto",
                borderRadius: 3,
                marginLeft: "auto",
                marginRight: "auto",
                paddingBottom: 2,
            },
            }}
        >
        <Paper elevation={3}  sx={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(2)
            }}>
          <Box
            component="h3"
            sx={{
                marginLeft: theme.spacing(5),
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(2),
                
            }}
          >
            เกียรติบัตรผู้เข้าแข่งขัน:
          </Box>
          
            <Button sx={{ spacing: 2, marginLeft: theme.spacing(5), marginBottom: theme.spacing(2)}}
                variant="contained"
                href="https://drive.google.com/file/d/1GIaiel1CiT3IKyhXlubSjJYaneVxT_Ek/view?usp=sharing" 
            >
                เกียรติบัตรผู้พัฒนาคนที่ 1
            </Button>   
         
            <Button sx={{ spacing: 2, marginLeft: theme.spacing(5), marginBottom: theme.spacing(2)}}
                variant="contained"
                href="https://drive.google.com/file/d/14rC6-hA06-_4QXWs01E12xWNwB0wRGNb/view?usp=sharing" 
            >
                เกียรติบัตรผู้พัฒนาคนที่ 2
            </Button>    
          
            <Button sx={{ spacing: 2, marginLeft: theme.spacing(5), marginBottom: theme.spacing(2)}}
                variant="contained" 
                href="https://drive.google.com/file/d/14rC6-hA06-_4QXWs01E12xWNwB0wRGNb/view?usp=sharing" 
            >
                เกียรติบัตรผู้พัฒนาคนที่ 3
            </Button>    
            <Button sx={{ spacing: 2, marginLeft: theme.spacing(5), marginBottom: theme.spacing(2)}}
                variant="contained" 
                href="https://drive.google.com/file/d/1yHulKNL9DIHR37yMddzK2FMu7RMH9TOe/view?usp=sharing" 
            >
                เกียรติบัตรอาจารย์ที่ปรึกษา
            </Button>     
        </Paper>
        </Box>
        </Grid>
        {/* </center> */}
      </Grid>
      <Btbanner/>
            <Footer/>
    </div>
  );
}
export default Member;