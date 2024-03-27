import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteInjuredAnimal } from '../../redux/action/injuredAnimalAction';
import EditMyRescueAnimal from './editMyRescueAnimal';


function MyRescueCard({animal,setShowToast}) {

    let date = new Date(animal.date).toISOString().replace('-', '/').split('T')[0].replace('-', '/');

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpenEditModal = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDelete = () =>{
        setConfirmDelete(true);
    }

    const handleDeleteAnimal = async () =>{
        await dispatch(deleteInjuredAnimal(animal._id,animal.photo));
        setShowToast(true);
        setConfirmDelete(false);
    }
  return (
        <Box width="100%"  bgcolor="#ffffee" sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, 
        gap: "20px", borderRadius:'10px',boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", padding:"10px",
        "&:hover": {boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}}>
            <img src={animal.photo} alt={animal.type} 
            width={90} height={90} style={{ borderRadius: 8, objectFit: "cover" }} />
            <Stack direction="column" justifyContent="space-around" flex={1} gap={{ xs: 4, sm: 2 }}>
                <Stack gap={2} direction="row"  flexWrap="wrap" alignItems="center">
                    <Stack gap={2} direction="row" alignItems="center">
                        <Stack direction='row' gap={2} width={150}>
                            <Typography fontSize={22} fontWeight={600} color="#11142d">
                                {animal.name}
                            </Typography>
                            <Typography fontSize={16} color="#808191">
                                {animal.type}
                            </Typography>
                        </Stack>
                        <Stack ml={4} gap={1}  direction="row" alignItems="center">
                            <Tooltip title="Edit" placement="top-start" arrow>
                                <IconButton size='medium' sx={{color:'#304ffe'}}  onClick={handleOpenEditModal}> <EditNoteIcon/> </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete" placement="top-start" arrow>
                                <IconButton size='medium' sx={{color:'#d50000'}} onClick={handleDelete}> <DeleteIcon/> </IconButton>   
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction="row" flexWrap="wrap" justifyContent="space-between" pr={8} alignItems="center" gap={2}>
                    <Stack direction='row'>
                        <Box  ml={1}><LocationOnIcon fontSize='small'/></Box>
                        <Typography fontSize={14} color="#11142D">{animal.address} {animal.city} {animal.country}</Typography>
                    </Stack>
                    <Typography fontSize={14} color="#11142D"><b>Breed - </b>{animal.breed?animal.breed:'unknown'}</Typography>
                    <Typography fontSize={14} color="#11142D"><b>Injuries - </b>{animal.injuries}</Typography>
                    <Typography fontSize={14} color="#11142D"><b>Posted - </b>{date}</Typography>
                </Stack>
            </Stack>
            <EditMyRescueAnimal
                open={isEditModalOpen}
                onClose={handleCloseEditModal}
                animal={animal}
                setShowToast={setShowToast}
            />
            <Dialog open={confirmDelete} onClose={() => setConfirmDelete(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setConfirmDelete(false)} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleDeleteAnimal} color="secondary">
                    Delete
                </Button>
                </DialogActions>
            </Dialog>
        </Box>

  )
}

export default MyRescueCard
