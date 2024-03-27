import React, { useState } from 'react';
import {
  Modal,
  Button,
  TextField,
  Container,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditProfile = ({ user, open, onClose, onSave }) => {

  const countries = [
    "Algeria",
    "Argentina",
    "Australia",
    "Bangladesh",
    "Belgium",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Czech Republic",
    "Denmark",
    "Egypt",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "India",
    "Indonesia",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Jordan",
    "Kenya",
    "Malaysia",
    "Mexico",
    "Morocco",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Russia",
    "Saudi Arabia",
    "Singapore",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Venezuela",
    "Vietnam",
  ];


  const [editedUser, setEditedUser] = useState(user);

  const [formErrors, setFormErrors] = useState({
      nameTooShort: false,
      contactNoInvalid: false,
  });

  const validateForm = () => {
      const errors = {
          nameTooShort: editedUser.name.length < 3,
          contactNoInvalid: editedUser.contactNo !== user.contactNo && (editedUser.contactNo.length !== 10 || isNaN(editedUser.contactNo)),
      };

      setFormErrors(errors);
      return Object.values(errors).every(error => !error);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setEditedUser(prevData => ({
        ...prevData,
        [name]: value,
    }));
  };


      const handleAvatarChange = event => {
        setEditedUser(prevData => ({
            ...prevData,
            avatar: event.target.files[0],
        }));
    };


    const handleSave = () => {
      if (!validateForm()) {
          return;
      }
      onSave(editedUser);
      onClose();
    };

  return (
    <Box
      sx={{
        flexGrow: 1,
        transform: 'translateZ(0)',
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}

    >
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
    >
        <Container maxWidth="sm" sx={{ p: 4, bgcolor: 'white', borderRadius: 4 }}>
          <Box sx={{ position:'relative', display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <IconButton
              onClick={onClose}
              sx={{ position: 'absolute', top: 0, right: 0 }}
            >
              <CloseIcon/>
            </IconButton>
          </Box>
          <Typography variant="h5" gutterBottom>
            Edit User
          </Typography>
          <Box className='flex flex-col'>
            <TextField name="name" value={editedUser.name} onChange={handleChange} label='Username' fullWidth required error={formErrors.nameTooShort} helperText={formErrors.nameTooShort && "Name is too short"}/>
            <TextField name="email" type="email" value={editedUser.email} onChange={handleChange} label='Email' fullWidth required />
            <TextField name="contactNo" value={editedUser.contactNo} onChange={handleChange} label='Mobile Number' fullWidth required error={formErrors.contactNoInvalid} helperText={formErrors.contactNoInvalid && "Contact number must be 10 digits"}/>
            <FormControl fullWidth >
                <InputLabel>Gender</InputLabel>
                <Select name="gender" value={editedUser.gender} onChange={handleChange} required>
                    <MenuItem value="">Gender</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="others">Others</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth >
                <InputLabel>Country</InputLabel>
                <Select name="country" value={editedUser.country} onChange={handleChange} required>
                    <MenuItem value="">Country</MenuItem>
                    {countries.map((country, index) => (
                        <MenuItem key={index} value={country}>
                            {country}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField name="address" value={editedUser.address} onChange={handleChange} label='Address' fullWidth required />
            <TextField name="city" value={editedUser.city} onChange={handleChange} label='City' fullWidth required />
            <input type="file" accept="image/*" onChange={handleAvatarChange} fullWidth  />
            <Button className='btn' variant="contained" color='secondary' onClick={handleSave} type="submit" fullWidth>
                Update
            </Button>
          </Box>
        </Container>
    </Modal></Box>
  );
};

export default EditProfile;
