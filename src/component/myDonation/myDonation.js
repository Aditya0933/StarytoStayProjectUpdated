import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BASE_URL } from '../../redux/baseURL';
import { Link } from 'react-router-dom';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import { Avatar, Box, Button, Chip, Stack, Typography } from '@mui/material';
import Loading from '../loading';
import ReactPaginate from "react-paginate";

// {
//   "success": true,
//   "allDonation": [
//     {
//       "_id": "64fc338455dc4832b9727e34",
//       "doner": "64fc33210e00d809987130d7",
//       "animal": {
//         "_id": "64e5c5f1b3ba0c1bdb33b801",
//         "name": "stiphen",
//         "type": "rabbit",
//         "injuries": "carrot-induced hiccups",
//         "injuryDetail": "The rabbit suffered a case of \"carrot-induced hiccups,\" a rare ailment caused by excessive carrot consumption.",
//         "gender": "female",
//         "address": "h-9 black street , kanti ganj",
//         "city": "Bhopal",
//         "country": "India",
//         "photo": "http://res.cloudinary.com/didvew55k/image/upload/v1692779941/taizefqhaelovcmivdas.jpg",
//         "creator": "64da89304a90aba44a3c9621",
//         "date": "2023-08-23T08:40:17.602Z",
//         "__v": 0
//       },
//       "amount": 374,
//       "date": "2023-09-09T08:57:40.393Z",
//       "__v": 0
//     }
//   ],
//   "message": "All User Donation fetches successfully"
// }


export default function MyDonation() {

  const giveDate=(date)=>{
    return new Date(date).toISOString().replace('-', '/').split('T')[0].replace('-', '/');
  }

  function formatTime(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = 'AM';

    if (hours >= 12) {
      period = 'PM';
      if (hours > 12) {
        hours -= 12;
      }
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${hours}:${minutes} ${period}`;
  }

  const [load,setLoad] = useState(false);

  const [data,setData] = useState([]);
  let temp;
  const [total,setTotal] = useState(0);

  async function fetchData(){
    setLoad(true);
    try{
      const response = await fetch(`${BASE_URL}/api/v1/donation/getUserDonation`,{
          method:"GET",
          headers:{
              'Content-Type': "application/json",
              'Authorization': localStorage.getItem("token"),
          }
      })
      const Data = await response.json();
      setData(Data.allDonation);
    }
    catch(error){
      console.log(error);
    }
    setLoad(false);
  }

  function findTotal(){
    let t = data.reduce((ele1,ele2)=>ele1+ele2.amount,0);
    setTotal(t);
  }

  useEffect(()=>{
    fetchData();
  },[temp])

  useEffect(() => {
    findTotal();
  }, [data]);

  const itemsPerPage =5;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const pageCount = Math.ceil(data.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };

  return (
    <Box minHeight='100vh' mt={11} maxWidth='1200px' mx='auto' px={3}>
        <Box sx={{borderLeft:'5px solid #ff6d00'}}>
          <Typography color='tertiory' fontSize={{sm:24,xs:16}} fontWeight={700} ml={2}>
              My Donation
          </Typography>
        </Box>
        {load && <Loading/>}
        {!load && data.length===0 ? (
          <Typography color='#757575' ml={3} p={2} variant="h5" gutterBottom><i>You have not Donated any amount</i></Typography>
        ):
        (
          <Box>
            <TableContainer sx={{maxWidth:1100,marginTop:'20px'}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Animal</TableCell>
                    <TableCell align="center">Amount </TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Time</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.slice(itemOffset, endOffset).map((ele) => (
                    <TableRow
                    key={ele._id}
                    >
                    <TableCell component="th" scope="row">
                    <Stack direction='row' gap={2}>
                      <Box><Avatar sx={{width:40, height:40 }} src={ele.animal.photo} variant="rounded"/></Box>
                      <Box display='flex' alignItems='center' fontSize={18}>{ele.animal.name}</Box>
                    </Stack>
                    </TableCell>
                    <TableCell align="center">{ele.amount} ₹</TableCell>
                    <TableCell align="center">{giveDate(ele.date)}</TableCell>
                    <TableCell align="center">{formatTime(ele.date)}</TableCell>
                    <TableCell align="center"><Chip label="success" size='small' color="success" variant="outlined" /></TableCell>
                    <TableCell align="center">
                        <Link to={`/injuedAnimalDetail/${ele.animal._id}`} style={{ textDecoration: 'none' }}>
                            <Button size='small' variant="contained" endIcon={<DoubleArrowOutlinedIcon/>}>Detail</Button>
                        </Link>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <Stack width='95%' direction='row' justifyContent='space-between'>
              <Stack direction='row' m={3}>
                <Typography fontSize={26}fontWeight='700' color='#ff8a00'>Total :</Typography>
                <Typography ml={1} mt={0.7} fontSize={20} color="text.secondary" fontWeight='300'> {total} ₹</Typography>
              </Stack>
              <ReactPaginate
                  breakLabel="..."
                  nextLabel='→'
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={1}
                  pageCount={pageCount}
                  previousLabel='←'
                  renderOnZeroPageCount={null}
                  containerClassName={'pagination_table'}
                  previousLinkClassName={'pagination__link'}
                  nextLinkClassName={'pagination__link'}
                  disabledClassName={'pagination__link_table--disabled'}
                  activeClassName={'pagination__link_table--active'}
                />
            </Stack>
          </Box>
        )}
    </Box>
  );
}
