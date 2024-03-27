import { Box, Stack,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyRescueCard from './myRescuecard'
import { getUserInjuredAnimal } from '../../redux/action/injuredAnimalAction';
import { useDispatch, useSelector } from 'react-redux';
import LoadingAnimalCard from '../common/loadingAnimalCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyRescuePage() {
 
    const allAnimal = useSelector(store=> store.userInjuredAnimal);
    const {loading} = useSelector(store=>store.load);

    const [showToast, setShowToast] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUserInjuredAnimal());
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
              My Rescue Animals
          </Typography>
        </Box>
        <Stack direction='column' mt={3} gap={2} mx='auto' maxWidth='1100px'>
          {loading?(
                  [1,2,3,4,5,6].map((e)=>{
                    return <LoadingAnimalCard key={e}/>
                  })
                ):
            (allAnimal.animals.map((animal,index)=>{
            return(<MyRescueCard animal={animal} key={index} setShowToast={setShowToast}/>)
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

export default MyRescuePage
