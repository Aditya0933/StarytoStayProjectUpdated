
import React, { useState } from 'react';
import { Modal,Button,TextField,FormControl, InputLabel, Select, MenuItem, Typography, Box, RadioGroup, FormControlLabel, Radio, Checkbox, FormLabel,IconButton,Container,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { updateInjuredAnimal } from '../../redux/action/injuredAnimalAction';

const petTypes = [
    'dog',
    'cat',
    'bird',
    'cow',
    'rabbit',
    'horse',
    'goat',
    'pig',
    'other',
  ];

const EditMyRescueAnimal = ({ open, onClose,animal,setShowToast }) => {
  const [formData, setFormData] = useState(animal);
 
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
    onClose();
    await dispatch(updateInjuredAnimal(formData));
    setShowToast(true);
  };

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Container maxWidth="sm" sx={{ p: 4, bgcolor: 'white', borderRadius: 4 , height:'95vh', overflowY:'scroll'}}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <IconButton onClick={onClose} sx={{ position: 'absolute', top: 0, right: 0 }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h5" gutterBottom>
          Edit Animal
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <TextField label="Name" name="name" onChange={handleChange} value={formData.name} required fullWidth style={{ marginBottom: '15px' }} />
                <FormControl fullWidth style={{ marginBottom: '15px' }} required>
                <InputLabel>Type</InputLabel>
                <Select
                  onChange={handleChange}
                  label="Type"
                  name="type"
                  value={formData.type}
                  required
                >
                  [{petTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}]
                </Select>
              </FormControl>
              {formData.type === 'other' && (
                <TextField label="Type (Other)" name="type" required fullWidth style={{ marginBottom: '15px' }} />
              )}
                <TextField label="Breed" name="breed" onChange={handleChange} value={formData.breed}  fullWidth style={{ marginBottom: '15px' }} />
                <FormControl style={{ marginBottom: '15px' }}>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    onChange={handleChange}
                    row
                    value={formData.gender} 
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
                <TextField label="Injuries" name="injuries" onChange={handleChange} value={formData.injuries} required fullWidth style={{ marginBottom: '15px' }} />
                <TextField label="Injury Detail" name='injuryDetail' onChange={handleChange} value={formData.injuryDetail}  placeholder="Describe the injuries in detail" required multiline rows={5}  style={{ marginBottom: '15px' }} />
                <TextField label="Address" name="address" onChange={handleChange} value={formData.address} required fullWidth style={{ marginBottom: '15px' }} />
                <TextField label="City" name="city" onChange={handleChange} value={formData.city} required fullWidth style={{ marginBottom: '15px' }} />
                <TextField label="Country" name="country" onChange={handleChange} value={formData.country} required fullWidth style={{ marginBottom: '15px' }} />
          <Button type="submit" justifyContent="center" size="large" variant="contained" color="secondary" sx={{ color: 'white' }}>
            Submit
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default EditMyRescueAnimal
