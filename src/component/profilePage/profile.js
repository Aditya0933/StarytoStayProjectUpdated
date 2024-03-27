import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Profile_pet from '../images/profile_pet.jpg'
import { Avatar, Chip, Divider, IconButton, Tooltip } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { userUpdate } from "../../redux/action/userAction";
import Loading from "../loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import EditProfile from "./editProfile";


function Profile(){
    const isLoggedIn = !!localStorage.getItem('token');
    let user;
    if(isLoggedIn){
      user = JSON.parse(localStorage.getItem('user'));
    }

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [userData, setUserData] = useState(user);

    const dispatch = useDispatch();
    const status = useSelector(store=>store.user);
    const {loading} = useSelector(store=>store.load);

    const [showToast, setShowToast] = useState(false);

    const handleOpenEditModal = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    useEffect(() => {
        if (showToast) {
            if (status.success) {
                toast.success(status.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
            } else if (status.message) {
                toast.error(status.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
            }
            setShowToast(false); 
        }
        setUserData(user);
    }, [showToast, status]);

    const handleSaveEditModal = async (editedUser) => {

        let data = new FormData();
        data.append('name', editedUser.name);
        data.append('email',editedUser.email);
        data.append('password',editedUser.password);
        data.append('contactNo',editedUser.contactNo);
        data.append('gender',editedUser.gender);
        data.append('address',editedUser.address);
        data.append('city',editedUser.city);
        data.append('country',editedUser.country);
        if(editedUser.avatar!==null){
            data.append('avatar',editedUser.avatar);
        }
        await dispatch(userUpdate(data));
        setShowToast(true);
    };
      
    
    return (
    <Box minHeight='100vh' mt={11} maxWidth='1000px' mx='auto'>
        {loading && <Loading/>}
        <Box sx={{borderLeft:'5px solid #ff6d00'}}>
          <Typography color='tertiory' fontSize={{sm:24,xs:16}} fontWeight={700} ml={2}>
              User Profile
          </Typography>
       </Box>

        <Box mt="20px" mx='auto' borderRadius="15px" padding="20px" bgcolor=" #ffd166;background-image: linear-gradient(315deg, #ffd166 0%, #fffcf9 77%)" 
        boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px' width='90%'>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2.5 }}>

                <Box width={{sm:400,xs:300}}>
                    <img src={Profile_pet}  alt="abstract" style={{objectFit:'cover',height:'420px',width:'90%'}} />
                </Box>

                <Box flex={1} sx={{ marginTop: { md: "30px" }, marginLeft: { xs: "20px", md: "0px" } }}>

                    <Box flex={1} display="flex" flexDirection='column' gap="10px">

                        {userData.avatar?(<Avatar title={userData.name} alt='user_Image' src={userData.avatar} sx={{ width: 90, height: 90 }}/>):(<Avatar sx={{ bgcolor:'#ff5722',width: 90, height: 90, fontSize: 50 }}>{userData.name[0].toUpperCase()}</Avatar>)}

                        <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between" gap={1}>

                            <Stack direction="row" justifyContent='space-between'>
                                <Typography ml={1} fontSize={22} fontWeight={600} color="#11142D">{userData.name}</Typography>

                                <Tooltip title="Edit" placement="top-start" arrow style={{transform:"translate(10px,-120px)"}} onClick={handleOpenEditModal}>
                                    <IconButton size='medium' sx={{color:'#304ffe'}}>
                                         <EditNoteIcon fontSize='large'/> 
                                    </IconButton>
                                </Tooltip>

                            </Stack>

                            <Stack direction="column" gap="20px">
                                <Stack gap="5px">
                                    <Typography fontSize={14} fontWeight={500} color="#808191">Address</Typography>
                                    <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                                        <Place sx={{ color: "#11142D" }} />
                                        <Typography fontSize={14} color="#11142D">{`${userData.address}, ${userData.city}, ${userData.country}`}</Typography>
                                    </Box>
                                </Stack>

                                <Box >
                                    <Chip label={userData.gender} variant="outlined" sx={{bgcolor:(userData.gender==='male'?'blue':"red"),color:'white'}} />
                                </Box>

                                <Stack direction="row" flexWrap="wrap" gap="20px" borderRadius={4} mb={2} py={1.5} px={3} bgcolor='#fff3e0'>

                                    <Stack flex={1} gap="5px">
                                        <Typography fontSize={14} fontWeight={500} color="#808191">Phone Number</Typography>
                                        <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                                            <Phone sx={{ color: "#11142D" }} />
                                            <Typography fontSize={14} color="#11142D" noWrap>+91 {userData.contactNo}</Typography>
                                        </Box>
                                    </Stack>

                                    <Divider orientation="vertical" flexItem sx={{  borderRightWidth: 3 , borderColor:'#ff8a00'}}/>

                                    <Stack flex={1} gap="5px">
                                        <Typography fontSize={14} fontWeight={500} color="#808191">Email</Typography>
                                        <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                                            <Email sx={{ color: "#11142D" }} />
                                            <Typography fontSize={14} color="#11142D">{userData.email}</Typography>
                                        </Box>
                                    </Stack>

                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        <EditProfile
            user={userData}
            open={isEditModalOpen}
            onClose={handleCloseEditModal}
            onSave={handleSaveEditModal}
        />
        <ToastContainer/>
    </Box>
    )
};

export default Profile;
