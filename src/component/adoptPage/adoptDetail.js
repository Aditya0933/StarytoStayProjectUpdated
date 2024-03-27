import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Place from "@mui/icons-material/Place";
import { Avatar, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, TextField } from "@mui/material";
import Map from "../common/map";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAnimalDetail } from "../../redux/action/animalAction";
import { useEffect, useState } from "react";
import AnimalDetailSkeleton from "./animalDetailSkeleton";
import { BASE_URL } from "../../redux/baseURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LOADING } from "../../redux/type";

const AdoptDetails = () => {

//   const animal= {
//     _id:"64da8f71eabd78d6e06ab472",
//     name:"rosery",  
//     type:"cat", 
//     description:"Regal and independent cat with a with a majestic a majestic mane of fur cat with a majestic mane  of fur.Regal and independent cat with a independent cat with a majestic a majestic mane of fur",   
//     breed:"Maine Coon", 
//     gender:"female",    
//     age:7,  
//     colour:"brown", 
//     vaccinated:true,    
//     address:"Cg-147, Sec-2, Salt Lake City",    
//     city:"Kolkata", 
//     country:"India",    
//     photo:"http://res.cloudinary.com/didvew55k/image/upload/v1692045098/nny2ugraemr1ejgbazuy.png",    
//     adopted:false,  
//     creator: {
//       _id: "64c0de07554a8ac9aaed5fa3",
//       name: "subham",
//       email: "subh8723@gmail.com",
//       contactNo: 7838783292,
//       gender: "male",
//       address: '327-B kazi khera',
//       city: 'Kanpur',
//       country: 'India',
//       avatar: "http://res.cloudinary.com/didvew55k/image/upload/v1690621365/kuu9kc3wfgabijnkzzmq.png",
//       __v: 14
//     },
//     date: "2023-07-28T09:19:33.815Z",
//     __v: 0
//   }
    const {id} = useParams();
    const animal = useSelector(state=> state.animalDetail.animal);
    const {loading} = useSelector(store=>store.load);
    const [load, setLoad] = useState(loading);

    const isLoggedIn = localStorage.getItem('token') !== null;

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAnimalDetail(id));
    },[])

    const [confirmAdopt,setConfirmAdopt] = useState(false);
    const [maildData,setMailData] = useState({name:'', email:'',user:{},detailUrl:window.location.href,message:''})

    const handleOpenAdopt = () =>{
        if(isLoggedIn){
            setMailData({
                ...maildData,
                name:animal.creator.name,
                email:animal.creator.email,
                user:JSON.parse(localStorage.getItem('user'))
            })
            setConfirmAdopt(true);
        }
        else{
            toast.error('Please Log In', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }

    const handleAdopt = async() =>{
        setConfirmAdopt(false);
        try{
            await fetch(`${BASE_URL}/api/v1/sendmail/`,{
                method:'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(maildData)
            });
            toast.success('Request send succesfully', {
                position: "top-right",
                autoClose: 2000,
            });
        }
        catch(error){
            console.log(error);
            toast.error('something went wrong', {
                position: "top-right",
                autoClose: 2000,
            });
        }
        setMailData({name:'', email:'',user:{},detailUrl:window.location.href,message:''})
    }
    
    

    return (
        <>
        {load ?(<AnimalDetailSkeleton/>):
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
                                            <Typography fontSize={14} fontWeight={500} color="#808191">Vaccinated</Typography>
                                            <Typography fontSize={14} color="#11142D" noWrap>{animal.vaccinated?`vaccinated`:` Not vaccinated`}</Typography>
                                        </Stack>
                                        <Divider orientation="vertical" flexItem sx={{  borderRightWidth: 3 , borderColor:'#ff8a00'}}/>
                                        <Stack flex={1} gap="3px" textAlign='center'>
                                            <Typography fontSize={14} fontWeight={500} color="#808191">Colour</Typography>
                                            <Typography fontSize={14} color="#11142D">{animal.colour}</Typography>
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
                                        <Typography fontSize={16} fontWeight={500} color="#808191" mr={5}>Breed</Typography>
                                        <Typography fontSize={15} color="#11142D">{animal.breed?animal.breed:'unknown'}</Typography>
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
                                Description
                            </Typography>
                            <Typography fontSize={14} color="#808191" height={100} overflow='auto'>
                                {animal.description}
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
                                        <Typography  fontSize={12} fontWeight={400} color="#808191">
                                            Owner
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
                            <Button variant="contained" size="large" color='secondary' onClick={handleOpenAdopt} fullWidth sx={{color:'white', textTransform:'capitalize'}}><b>Adopt</b></Button>
                        </Box>
                    </Stack>

                    <Stack flexGrow={1} mt={2}>
                        <Stack height={290}  borderRadius={1}  border='1px solid #121212'>
                            <Map address={animal.address} city={animal.city} country={animal.country}/>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            <Dialog open={confirmAdopt} onClose={() => setConfirmAdopt(false)} maxWidth='300px'>
                <DialogTitle>Request for Adoption</DialogTitle>
                <DialogContent sx={{marginTop:'10px'}} >
                <TextField label="Message" name='message'  placeholder="write any message for owner" value={maildData.message} onChange={(e)=>{setMailData({...maildData,message:e.target.value})}} multiline rows={5}  style={{width:'280px', margin: '15px 0px' }} />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setConfirmAdopt(false)} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleAdopt} color="secondary">
                    Adopt
                </Button>
                </DialogActions>
            </Dialog>
        </Box>)
        }
        <ToastContainer/>
  </>
    );
};

export default AdoptDetails;



                