import { Box, Stack,Typography } from '@mui/material'
import React, { useEffect, useState} from 'react'
import MyAnimalCard from './myAnimalCard'
import { useDispatch, useSelector } from 'react-redux';
import { getUserAnimal } from '../../redux/action/animalAction';
import LoadingAnimalCard from '../common/loadingAnimalCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyAnimalPage() {
    // const allAnimal= [
    //   {
    //     _id: "64c38825c633d65ab78397c2",
    //     name: "motikjha",
    //     type: "cat",
    //     breed: "milliy",
    //     gender: "male",
    //     description: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
    //     age: 4,
    //     colour: "brown",
    //     address: '327-B kazi khera',
    //     city: 'Kanpur',
    //     country: 'India',
    //     photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690535912/pynhca4wre6t6qjobe00.jpg",
    //     adopted: false,
    //     creator: "64c0de07554a8ac9aaed5fa3",
    //     date: "2023-07-28T09:19:33.815Z",
    //     __v: 0
    //   },
    //   {
    //     _id: "64c3bc40d024ad944489d77b",
    //     name: "mira",
    //     type: "cow",
    //     breed: "desi",
    //     gender: "male",
    //     description: "gives lotes of milk moti is very wild dog moti is very wild dog gives lotes of milk moti is very wild dog moti is very wild dog",
    //     age: 18,
    //     colour: "black",
    //     address: '327-B kazi khera',
    //     city: 'Kanpur',
    //     country: 'India',
    //     photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690549251/yvigpbtwz4xm5olaz1cp.png",
    //     adopted: true,
    //     creator: "64c0de07554a8ac9aaed5fa3",
    //     date: "2023-07-28T13:01:52.577Z",
    //     __v: 0
    //   },
    //   {
    //     _id: "64c38825c633d65ab78397c2",
    //     name: "motikjha",
    //     type: "cat",
    //     breed: "milliy",
    //     gender: "male",
    //     description: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
    //     age: 4,
    //     colour: "brown",
    //     address: '327-B kazi khera',
    //     city: 'Kanpur',
    //     country: 'India',
    //     photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690535912/pynhca4wre6t6qjobe00.jpg",
    //     adopted: false,
    //     creator: "64c0de07554a8ac9aaed5fa3",
    //     date: "2023-07-28T09:19:33.815Z",
    //     __v: 0
    //   },
    //   {
    //     _id: "64c3bc40d024ad944489d77b",
    //     name: "mira",
    //     type: "cow",
    //     breed: "desi",
    //     gender: "male",
    //     description: "gives lotes of milk moti is very wild dog moti is very wild dog gives lotes of milk moti is very wild dog moti is very wild dog",
    //     age: 18,
    //     colour: "black",
    //     address: '327-B kazi khera',
    //     city: 'Kanpur',
    //     country: 'India',
    //     photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690549251/yvigpbtwz4xm5olaz1cp.png",
    //     adopted: false,
    //     creator: "64c0de07554a8ac9aaed5fa3",
    //     date: "2023-07-28T13:01:52.577Z",
    //     __v: 0
    //   },
    //   {
    //     _id: "64c38825c633d65ab78397c2",
    //     name: "motikjha",
    //     type: "cat",
    //     breed: "milliy",
    //     gender: "male",
    //     description: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
    //     age: 4,
    //     colour: "brown",
    //     address: '327-B kazi khera',
    //     city: 'Kanpur',
    //     country: 'India',
    //     photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690535912/pynhca4wre6t6qjobe00.jpg",
    //     adopted: true,
    //     creator: "64c0de07554a8ac9aaed5fa3",
    //     date: "2023-07-28T09:19:33.815Z",
    //     __v: 0
    //   },
    //   {
    //     _id: "64c3bc40d024ad944489d77b",
    //     name: "mira",
    //     type: "cow",
    //     breed: "desi",
    //     gender: "male",
    //     description: "gives lotes of milk moti is very wild dog moti is very wild dog gives lotes of milk moti is very wild dog moti is very wild dog",
    //     age: 18,
    //     colour: "black",
    //     address: '327-B kazi khera',
    //     city: 'Kanpur',
    //     country: 'India',
    //     photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690549251/yvigpbtwz4xm5olaz1cp.png",
    //     adopted: false,
    //     creator: "64c0de07554a8ac9aaed5fa3",
    //     date: "2023-07-28T13:01:52.577Z",
    //     __v: 0
    //   }
    // ]

    const allAnimal = useSelector(store=> store.userAnimal);
    const {loading} = useSelector(store=>store.load);

    const [showToast, setShowToast] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUserAnimal());
  },[]);

    useEffect(() => {
      if (showToast) {
          if (allAnimal.success && allAnimal.message) {
              toast.success(allAnimal.message, {
                  position: "top-right",
                  autoClose: 2000,
              });
          } else if (allAnimal.message) {
              toast.error(allAnimal.message, {
                  position: "top-right",
                  autoClose: 2000,
              });
          }
          setShowToast(false); 
      }
  }, [showToast, allAnimal]);

  return (
    <Box minHeight='100vh' mt={11} maxWidth='1200px' mx='auto' px={3}>
        <Box sx={{borderLeft:'5px solid #ff6d00'}}>
          <Typography color='tertiory' fontSize={{sm:24,xs:16}} fontWeight={700} ml={2}>
              My Animals
          </Typography>
        </Box>
        <Stack direction='column' mt={3} gap={2} mx='auto' maxWidth='1100px'>
          {loading?(
                  [1,2,3,4,5,6].map((e)=>{
                    return <LoadingAnimalCard key={e}/>
                  })
                ):
          (allAnimal.animals.map((animal,index)=>{
            return(<MyAnimalCard animal={animal} key={index} setShowToast={setShowToast}/>)
          }))
        }
        </Stack>
        {!loading && allAnimal.animals.length===0 && (
          <Typography color='#757575' ml={3} p={2} variant="h5" gutterBottom><i>You have not rehomed any animal</i></Typography>
        )}
        <ToastContainer/>
    </Box>
  )
}

export default MyAnimalPage
