import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Place from "@mui/icons-material/Place";
import { Avatar, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import Map from "../common/map";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAnimalDetail } from "../../redux/action/animalAction";
import { useEffect, useState} from "react";
import AnimalDetailSkeleton from "../adoptPage/animalDetailSkeleton";
import { getInjuredAnimalDetail } from "../../redux/action/injuredAnimalAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { loadStripe } from '@stripe/stripe-js';
import { BASE_URL } from "../../redux/baseURL";


const DonateDetails = () => {

    // const animal= {
    //       _id: "64db26685df659b3631b4f88",
    //       name: "Lucky",
    //       type: "dog",
    //       injuries: "Fractured leg",
    //       injuryDetail: "Lucky had a nasty fall while playing and unfortunately ended up with a fractured leg. The injury required immediate medical attention and a cast.",
    //       breed: "desi",
    //       gender: "male",
    //       address: "236, Kailash Hills",
    //       city: "delhi",
    //       country: "india",
    //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1692083744/yurlutiea5zst3jh3bos.png",
    //       creator: {
    //         _id: "64da89304a90aba44a3c9621",
    //         name: "subham singh",
    //         email: "subham@gmail.com",
    //         contactNo: 9876543211,
    //         gender: "male",
    //         address: "A. R. S. Plaza, 8th Cross, Malleswaram",
    //         city: "Bangalore",
    //         country: "India",
    //         avatar: "http://res.cloudinary.com/didvew55k/image/upload/v1692043497/r7xragfelvlzayl8cbxl.png",
    //         __v: 37
    //       },
    //       date: "2023-08-15T07:16:56.520Z",
    //       __v: 0
    //     }

    const {id} = useParams();
    const animal = useSelector(state=> state.injuredAnimalDetail.animal);
    const {loading} = useSelector(store=>store.load);

    const isLoggedIn = localStorage.getItem('token') !== null;

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getInjuredAnimalDetail(id));
    },[])   

    const [confirmDonate,setConfirmDonate] = useState(false);
    const [donateData, setDonateData] = useState({doner:{},animal:{},amount:null})

    const handleOpenDonate = () =>{
        if(isLoggedIn){
            setDonateData({
                ...donateData,
                doner:JSON.parse(localStorage.getItem('user')),
                animal:animal,
            })
            setConfirmDonate(true);
        }
        else{
            toast.error('Please Log In', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }

    const handleDonate = async() =>{
        setConfirmDonate(false);

        try{
            const stripe = await loadStripe('pk_test_51Nndj5SEBwGuV2QLvpMYMAr4dpcY3qOFqJOnG8CzLaw0H4NiCu6Km9K6WcAI5rC8hSTYt1ZRf5BM4YeNR5WjqNGy00Ej6kBbMy');

            const response = await fetch(`${BASE_URL}/api/v1/donation/donate`,{
                method:'POST',
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify(donateData)
            })

            if (!response.ok) {
                console.error('Failed to create donation session.');
                return;
              }
          
              const session = await response.json();
          
              console.log('Received session.id:', session.id);
          
              const result = await stripe.redirectToCheckout({
                sessionId: session.id,
              });
          
              if (result.error) {
                console.error(result.error.message);
                // Handle error, e.g., show an error message to the user
              }
        }
        catch(error){
                console.log(error);
        }
            

        setDonateData({doner:{},animal:{},amount:null});
    }


    return (
        <>
        {loading ?(<AnimalDetailSkeleton/>):
        ( <Box minHeight='100vh' borderRadius="15px" width={{lg:'1300px',xs:'100%'}} mx='auto' padding="20px" bgcolor="#fefefe" mt={8}>
            
            <Box sx={{borderLeft:'5px solid #ff6d00'}}>
                <Typography color='tertiory' fontSize={{sm:28,xs:18}} fontWeight={700} ml={3} >
                    Animal Detail
                </Typography>
            </Box>
            <Box mt={3} width={{sm:"90%",xs:"100%"}} gap={4} mx='auto'>

                <Stack direction='row' flexWrap='wrap' gap={3}  >
                    <Box overflow="hidden" height={{sm:350,xs:200}} width={500} borderRadius="30px 0 30px 0" >
                        <img src={animal.photo} alt="animal_details-img"  className="cardImg" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center center'}} />
                    </Box>
                    <Box flexGrow={1}  mt="15px" mb={3}>

                        <Stack direction="column">
                            <Box sx={{borderLeft:'3px solid #ff6d00',height:22}}>
                                <Typography color='tertiory' mt={-0.5} fontSize={{sm:22,xs:14}} fontWeight={500} ml={1.5} textTransform='capitalize'>
                                    {animal.type}
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack direction="column" >
                                <Typography fontSize={25} fontWeight={600} mt="10px" color="#11142D">
                                    {animal.name}
                                </Typography>
                                <Stack direction="row" flexWrap="wrap" gap="10px" borderRadius='20px 0 20px 0' mt={2} mb={2} p={1} bgcolor='#fff3e0'>
                                        <Stack flex={1} gap="3px" textAlign='center'>
                                            <Typography fontSize={14} fontWeight={500} color="#808191">Breed</Typography>
                                            <Typography fontSize={14} color="#11142D">{animal.breed?animal.breed:'unknown'}</Typography>
                                        </Stack>
                                        <Divider orientation="vertical" flexItem sx={{  borderRightWidth: 3 , borderColor:'#ff8a00'}}/>
                                        <Stack flex={1} gap="3px" textAlign='center'>
                                            <Typography fontSize={14} fontWeight={500} color="#808191">Age</Typography>
                                            <Typography fontSize={14} color="#11142D">{animal.age} years</Typography>
                                        </Stack>
                                </Stack>
                                <Box mb={1}>
                                    <Chip label={animal.gender} variant="outlined" sx={{bgcolor:(animal.gender==='male'?'blue':"red"),color:'white'}} />
                                </Box>
                                <Stack direction='column' >
                                    <Divider  flexItem />
                                    <Stack direction='row' justifyContent='space-between' px={2} py={2}>
                                        <Typography fontSize={16} fontWeight={500} color="#808191" mr={5}>Location</Typography>
                                        <Typography fontSize={15} color="#11142D">{animal.address}, {animal.city}, {animal.country}</Typography>
                                    </Stack>
                                    <Divider flexItem />
                                    <Stack direction='row'  justifyContent='space-between' px={2} py={2}>
                                        <Typography fontSize={16} fontWeight={500} color="#808191" mr={5}>Injuries</Typography>
                                        <Typography fontSize={15} color="#11142D">{animal.injuries}</Typography>
                                    </Stack>
                                    <Divider flexItem />
                                </Stack>
                        </Stack>

                    </Box>
                    
                </Stack>


                <Stack direction='row' flexWrap='wrap' gap={3}>

                        <Stack width={500} p={2} direction="column" borderRadius={2} gap={1}>
                        <Stack  direction="column" gap={1} >
                            <Typography fontSize={20} color="#11142D" sx={{borderLeft:'3px solid #ff6d00'}} pl={2}>
                                Ingury Detail
                            </Typography>
                            <Typography fontSize={14} color="#808191" height={100} overflow='auto'>
                                {animal.injuryDetail}
                            </Typography>
                        </Stack>

                        <Stack my={1} gap={1} direction='row' flexWrap='wrap' justifyContent='space-between'>

                            <Box>
                                <Stack direction='row' gap={3}>
                                    <Box>{animal.creator?.avatar?(<Avatar title={animal.creator?.name} alt='user_image' src={animal.creator?.avatar}/>):(<Avatar title={animal.creator?.name} sx={{ bgcolor:'#ff5722' }}>{animal.creator?.name[0].toUpperCase()}</Avatar>)}</Box>
                                    <Box >
                                        <Typography fontSize={14} fontWeight={600} color="#11142D">
                                            {animal.creator?.name}
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="row" alignItems="center" mt={0.5} gap={1}>
                                    <Place sx={{ color: "#808191" }} />
                                    <Typography fontSize={14} fontWeight={400} color="#808191">
                                        {animal.creator?.city} {animal.creator?.country}
                                    </Typography>
                                </Stack>
                            </Box>

                            <Stack justifyContent='space-around'>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <EmailIcon sx={{ color: "#808191" }} />
                                    <Typography fontSize={14} fontWeight={500} color="#808191">
                                        {animal.creator?.email}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <CallIcon sx={{ color: "#808191" }} />
                                    <Typography fontSize={14} fontWeight={500} color="#808191">
                                        +91 {animal.creator?.contactNo}
                                    </Typography>
                                </Stack>
                            </Stack>

                        </Stack>

                        <Box >
                            <Button variant="contained" size="large" color='secondary' onClick={handleOpenDonate}  fullWidth sx={{color:'white', textTransform:'capitalize'}}><b>Donate</b></Button>
                        </Box>
                    </Stack>

                    <Stack flexGrow={1} mt={2}>
                        <Stack height={290}  borderRadius={1}  border='1px solid #121212'>
                            <Map address={animal.address} city={animal.city} country={animal.country}/>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            <Dialog open={confirmDonate} onClose={() => setConfirmDonate(false)} maxWidth='320px'>
                <DialogTitle>Enter Donation Amount</DialogTitle>
                <DialogContent sx={{marginTop:'10px'}}>
                    <FormControl fullWidth variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                            id="filled-adornment-amount"
                            onChange={(e)=>{setDonateData({...donateData,amount:e.target.value})}}
                            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setConfirmDonate(false)} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleDonate} color="secondary">
                    Donate
                </Button>
                </DialogActions>
            </Dialog>
        </Box>)
        }
        <ToastContainer/>
  </>
    );
};

export default DonateDetails;



                