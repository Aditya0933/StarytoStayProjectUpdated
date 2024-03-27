import { Box, Button, Grid, Stack, TextField, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import headerImg from '../images/animal_header2.jpg'
import AdoptCard from './adoptCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from "react-paginate";
import { getAllAnimal } from '../../redux/action/animalAction';
import SkeltonCard from './skeltonCard';

function AdoptPage() {
  // const animals =[
  //     {
  //       _id: "64c38825c633d65ab78397c2",
  //       name: "motikjha",
  //       type: "cat",
  //       breed: "milliy",
  //       gender: "male",
  //       description: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
  //       age: 4,
  //       colour: "brown",
  //       address: '327-B kazi khera',
  //       city: 'Kanpur',
  //       country: 'India',
  //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690535912/pynhca4wre6t6qjobe00.jpg",
  //       adopted: false,
  //       creator: "64c0de07554a8ac9aaed5fa3",
  //       date: "2023-07-28T09:19:33.815Z",
  //       __v: 0
  //     },
  //     {
  //       _id: "64c3bc40d024ad944489d77b",
  //       name: "mira",
  //       type: "cow",
  //       breed: "desi",
  //       gender: "male",
  //       description: "gives lotes of milk moti is very wild dog moti is very wild dog gives lotes of milk moti is very wild dog moti is very wild dog",
  //       age: 18,
  //       colour: "black",
  //       address: '327-B kazi khera',
  //       city: 'Kanpur',
  //       country: 'India',
  //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690549251/yvigpbtwz4xm5olaz1cp.png",
  //       adopted: false,
  //       creator: "64c0de07554a8ac9aaed5fa3",
  //       date: "2023-07-28T13:01:52.577Z",
  //       __v: 0
  //     },
  //     {
  //       _id: "64c38825c633d65ab78397c2",
  //       name: "motikjha",
  //       type: "cat",
  //       breed: "milliy",
  //       gender: "male",
  //       description: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
  //       age: 4,
  //       colour: "brown",
  //       address: '327-B kazi khera',
  //       city: 'Kanpur',
  //       country: 'India',
  //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690535912/pynhca4wre6t6qjobe00.jpg",
  //       adopted: false,
  //       creator: "64c0de07554a8ac9aaed5fa3",
  //       date: "2023-07-28T09:19:33.815Z",
  //       __v: 0
  //     },
  //     {
  //       _id: "64c3bc40d024ad944489d77b",
  //       name: "mira",
  //       type: "cow",
  //       breed: "desi",
  //       gender: "male",
  //       description: "gives lotes of milk moti is very wild dog moti is very wild dog gives lotes of milk moti is very wild dog moti is very wild dog",
  //       age: 18,
  //       colour: "black",
  //       address: '327-B kazi khera',
  //       city: 'Kanpur',
  //       country: 'India',
  //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690549251/yvigpbtwz4xm5olaz1cp.png",
  //       adopted: false,
  //       creator: "64c0de07554a8ac9aaed5fa3",
  //       date: "2023-07-28T13:01:52.577Z",
  //       __v: 0
  //     },
  //     {
  //       _id: "64c38825c633d65ab78397c2",
  //       name: "motikjha",
  //       type: "cat",
  //       breed: "milliy",
  //       gender: "male",
  //       description: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
  //       age: 4,
  //       colour: "brown",
  //       address: '327-B kazi khera',
  //       city: 'Kanpur',
  //       country: 'India',
  //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690535912/pynhca4wre6t6qjobe00.jpg",
  //       adopted: false,
  //       creator: "64c0de07554a8ac9aaed5fa3",
  //       date: "2023-07-28T09:19:33.815Z",
  //       __v: 0
  //     },
  //     {
  //       _id: "64c3bc40d024ad944489d77b",
  //       name: "mira",
  //       type: "cow",
  //       breed: "desi",
  //       gender: "male",
  //       description: "gives lotes of milk moti is very wild dog moti is very wild dog gives lotes of milk moti is very wild dog moti is very wild dog",
  //       age: 18,
  //       colour: "black",
  //       address: '327-B kazi khera',
  //       city: 'Kanpur',
  //       country: 'India',
  //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690549251/yvigpbtwz4xm5olaz1cp.png",
  //       adopted: false,
  //       creator: "64c0de07554a8ac9aaed5fa3",
  //       date: "2023-07-28T13:01:52.577Z",
  //       __v: 0
  //     },
  //     {
  //       _id: "64c38825c633d65ab78397c2",
  //       name: "motikjha",
  //       type: "cat",
  //       breed: "milliy",
  //       gender: "male",
  //       description: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
  //       age: 4,
  //       colour: "brown",
  //       address: '327-B kazi khera',
  //       city: 'Kanpur',
  //       country: 'India',
  //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690535912/pynhca4wre6t6qjobe00.jpg",
  //       adopted: false,
  //       creator: "64c0de07554a8ac9aaed5fa3",
  //       date: "2023-07-28T09:19:33.815Z",
  //       __v: 0
  //     },
  //     {
  //       _id: "64c3bc40d024ad944489d77b",
  //       name: "mira",
  //       type: "cow",
  //       breed: "desi",
  //       gender: "male",
  //       description: "gives lotes of milk moti is very wild dog moti is very wild dog gives lotes of milk moti is very wild dog moti is very wild dog",
  //       age: 18,
  //       colour: "black",
  //       address: '327-B kazi khera',
  //       city: 'Kanpur',
  //       country: 'India',
  //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690549251/yvigpbtwz4xm5olaz1cp.png",
  //       adopted: false,
  //       creator: "64c0de07554a8ac9aaed5fa3",
  //       date: "2023-07-28T13:01:52.577Z",
  //       __v: 0
  //     }
  //   ];

  const animals = useSelector(state => state.animal.animals);
  const {loading} = useSelector(store=>store.load);
  const dispatch = useDispatch();
  const [filter,setFilter] = useState({name:'',breed:''});

  const handleFilter = e =>{
      setFilter((prevFilter)=>({
        ...prevFilter,
        [e.target.name]:e.target.value
      }));
  }

  const [sort,setSorter] = useState({date:'asc'});

  const toggleSort = (field) => {
    setSorter((prevSort) => ({
      ...prevSort,
      [field]: prevSort[field] === "asc" ? "desc" : "asc",
    }));
  };

  const typeSelect = [{id:'1',name:'All', type:''},{id:'2', name:'Dogs',type:'dog'},{id:'3' ,name:'Cats',type:'cat'},{id:'4',name:'Birds',type:'bird'},{id:'5',name:'Others',type:''}]
  const [active, setActive] = useState('1');
  const [type,setType] = useState('')
  const [customType, setCustomType] = useState('');

  const handleType =(selectedType)=>{
    setType(selectedType.type);
    setActive(selectedType.id)

  }

    const itemsPerPage =6;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const pageCount = Math.ceil(animals.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % animals.length;
      setItemOffset(newOffset);
    };

  
  const handleReset = () =>{
    setFilter({name:'',breed:''});
    setCustomType('');
    setType('');
    setActive('1');
  }

  useEffect(() => {
    const query = {
      sort: 'date',
      order: sort.date, 
      name: filter.name,
      breed: filter.breed,
      type: type,
      
    };
    console.log(type);

    dispatch(getAllAnimal(query));

  }, [filter,type,sort]);

  
  return (
    <Box minHeight='100vh' sx={{ width: { xl:'75%', xlg:"80%",lg:'80%',md: '85%', sm: '94%', xs: '94%' },margin:'5.5rem auto 1rem'}}>
      <Stack direction={'column'}
      sx={{height: { md: '210px', sm: '170px', xs: '130px' }, boxSizing: 'content-box', borderRadius: '8px 8px 0 0' ,background:`url(${headerImg})`,
      backgroundSize:'cover' ,backgroundRepeat:{md:'repeat',sm:'no-repeat'}}}>
          <Box width={{sm:'50%',xs:'54%'}}sx={{margin:'auto 1rem',
           color: "white"
          }}>
                    <Typography sx={{fontSize:{sm:'1.4rem',xs:'1rem'}}}>
                        Adopt helpless animals today
                    </Typography>
                    <Typography mt={1} sx={{fontSize:{sm:'0.8rem',xs:'0.6rem'}}}>
                        We're presenting you an oportunity to give a home to a misfortunate animal today. These animals are deprived of shelter, food and love. 
                    </Typography>
                    <Link to='/donate'><Button  variant="outlined" size='medium' color='tertiory' 
                    sx={{textTransform:'none', bgcolor:"#424242", color:'#ff8a00', borderRadius:'8px 0 8px 0',position:'relative',bottom:-20, display:{sm:'block',xs:'none'} }}>
                        Donate
                    </Button>
                    </Link>

          </Box>
      </Stack>
      <Box >
          <Stack direction={'row'} container justifyContent="space-around" spacing={{ xs: 2, md: 3 }} columns={{xl:12}}
            sx={{width: '100%', height:'40px', alignItems:'center', borderTop:'2px solid #ff8a00',borderRadius:"0 0px 8px 8px",
              bgcolor: '#272e37',  color: '#ff8a00',boxShadow: '2px 2px 4px -2px white', position:"sticky", top:70.3,zIndex:1
            }}>
              {typeSelect.map((item)=>{
                return <Typography key={item.id} className={`${active === item.id ? "active-link-type" : ''} petType`} fontSize={{md:'1rem',sm:'0.9rem',xs:"0.75rem"}} 
                onClick={() =>{
                  if (item.id === '5') {
                    setActive(item.id);
                    setType(customType);
                  } else {
                    handleType(item);
                  }
                }}>{item.name}</Typography>
              })}
          </Stack>

          <Stack>
              <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                  <Stack direction="column" width="100%">
                      <Box ml={2} mb={4} mt={1} display="flex" width="100%" justifyContent="space-between" flexWrap="wrap">
                          <Box display="flex" gap={2} flexWrap="wrap" mb={{ xs: "20px", sm: 0 }}>
                              <Button varient='contained' size="small" onClick={() => toggleSort("date")}
                               sx={{backgroundColor:"#424242", color:"#ff8a00",textTransform:'none'}}>
                                  {`Upload Date ${
                                      sort.date === "asc" ? "↑" : "↓"
                                  }`}
                              </Button>
                              <TextField
                                  variant="outlined" size="small" 
                                  color="secondary"
                                  name='name'
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      handleFilter(e);
                                    }
                                  }}
                                  placeholder="Search by name"
                              />
                              <TextField
                                  variant="outlined" size="small"
                                  color="secondary"
                                  name='breed'
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      handleFilter(e);
                                    }
                                  }}
                                  placeholder="Search by breed"
                              />
                              <TextField
                                  variant="outlined" size="small"
                                  color="secondary"
                                  name='other'
                                  value={customType}
                                  onChange={(e) => setCustomType(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      setType(customType);
                                      setActive('5'); 
                                    }
                                  }}
                                  placeholder="Enter animal type"
                              />
                              <Button variant="outlined" size="small"  color='secondary' onClick={handleReset}>
                                  Reset
                              </Button>
                          </Box>
                      </Box>
                      <Typography fontSize={25} mt={3} ml={2} fontWeight={700} color="#11142d">
                        {(!animals.length && !loading )?"  There are no animals to adopt!":""}
                      </Typography>
                  </Stack>
              </Box>
          </Stack>
          <Stack container direction={'row'} justifyContent={{md:'space-between',sm:'space-around'}}  gap={2} flexWrap='wrap'
           sx={{width:{md:"99.6%",sm:"94.5%",xs:"94.5%"},marginX:"auto"}} >
                {loading?(
                  [1,2,3,4,5,6].map((e)=>{
                    return <SkeltonCard/>
                  })
                ):
                  (animals?.slice(itemOffset, endOffset).map((animal, index) => (
                      <AdoptCard key={index} animal={animal} />
                  )))
                }
          </Stack>
      </Box>
      <Stack width='fit-content' marginLeft='auto' mt={4}>
        <ReactPaginate
          breakLabel="..."
          nextLabel='Next →'
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel='← Previous'
          renderOnZeroPageCount={null}
          containerClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
        />
      </Stack>
    </Box>
  )
}

export default AdoptPage
