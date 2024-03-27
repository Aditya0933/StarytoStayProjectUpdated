import React, { useEffect, useState } from 'react'
import {Box, Divider, Stack , Typography} from '@mui/material'
import headerImg from '../images/cat_header.jpg'
import dog from '../images/dog_rehome.png'
import cat from '../images/cat_rehome.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../loading'
import { addAnimal } from '../../redux/action/animalAction'
import { Link } from 'react-router-dom'

const initialFormData = {
  name: '',
  type: '',
  breed: '',
  gender: '',
  description: '',
  age: '',
  colour: '',
  adopted: false,
  vaccinated: false,
  address: '',
  city: '',
  country: '',
  photo: '',
};

// const genderOptions = ['male', 'female', 'other'];

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

function Rehome() {
    const [formData, setFormData] = useState(initialFormData);
    const dispatch = useDispatch();
    const status = useSelector(store=>store.animal);
    const {loading} = useSelector(store => store.load);

    const isLoggedIn = localStorage.getItem('token') !== null;

    const [showToast, setShowToast] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === 'checkbox' ? checked : value;
      setFormData({ ...formData, [name]: fieldValue });
    };

    const handleAvatarChange = event => {
      setFormData(prevData => ({
          ...prevData,
          photo: event.target.files[0],
        }));
    };
  
    const handleGenderChange = (e) => {
      const { value } = e.target;
      setFormData({ ...formData, gender: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      let data = new FormData();
      data.append('name', formData.name);
      data.append('type', formData.type);
      if(formData.breed){
        data.append('breed', formData.breed);
      }
      data.append('gender', formData.gender);
      data.append('description', formData.description);
      data.append('age', formData.age);
      data.append('colour', formData.colour);
      data.append('adopted', formData.adopted);
      data.append('vaccinated', formData.vaccinated);
      data.append('address', formData.address);
      data.append('city', formData.city);
      data.append('country', formData.country);
      data.append('photo', formData.photo);
      await dispatch(addAnimal(data));
      setShowToast(true);
      setFormData(initialFormData);
    }

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
  }, [showToast, status]);


  return (
    <Box width='100%' minHeight='100vh'>
      {isLoggedIn ? (
        <>
        {loading && <Loading/>}
        <Stack  mt={4} height={{sm:400,xs:200}} justifyContent='center' alignItems='center' direction="column" 
        sx={{backgroundSize:'cover',  boxSizing: 'content-box', backgroundRepeat:'no-repeat', backgroundImage:`url(${headerImg})`}}>
          <Box maxWidth={{sm:'70%',xs:'94%'}} sx={{color:'white'}} >
            <Typography fontSize={{sm:40,xs:22}} fontWeight={600}>Rehoming Your Pet</Typography>
            <Typography mt={2} fontSize={{sm:28,xs:15}} fontWeight={400}>Discover the Perfect Forever Home for Your Beloved Pet. A Journey Filled with Love and Hope Awaits!</Typography>
          </Box>  
        </Stack>
        <Divider sx={{ borderBottomWidth: 6,borderRadius:'10px', borderColor:'#ff8a00', margin:'30px auto' }}  width='200px'/>
        <Stack mt={5} direction='column' justifyContent='center'>
            <Typography mt={1} fontSize={{sm:18,xs:12}}  maxWidth={{sm:'70%',xs:'94%'}} mx='auto' textAlign='center'>Rehoming your pet should be easy and stress free both for you and your pet.
             Our experts at Adopt-a-Pet.com have created a simple, reliable program to help you place your pet from your loving home directly to another.
             </Typography>
            <Stack direction='row' mb={2}  mt={4} justifyContent='space-between'>
              <Box display={{md:'block',sm:'none',xs:'none'}}><img src={dog} alt='dog_img' style={{height:'400px'}}/>
              </Box>

              <Stack direction='column' ml={{md:-5,sm:0}} justifyContent='center' width={{md:'35%',sm:'80%',xs:'90%'}} color='#4d4d4d' px={2} gap={4}>
                  <Stack direction='row' mt={1} gap={3} justifyContent='center'>
                    <Typography fontSize={{sm:70,xs:30}} mt={{md:-2,sm:0}} fontWeight={600}>1</Typography>
                    <Box >
                      <Typography fontSize={{sm:30,xs:18}}  fontWeight={600}>Create a Pet Profile</Typography>
                      <Typography fontSize={{sm:18,xs:11}}  fontWeight={400}>Get your pets posted on StayToStray to be seen by millions of pet adopters.</Typography>
                    </Box>
                  </Stack>
                  <Stack direction='row' mt={1} gap={3} justifyContent='center'>
                    <Typography fontSize={{sm:70,xs:30}} mt={{md:-2,sm:0}} fontWeight={600}>2</Typography>
                    <Box >
                      <Typography fontSize={{sm:30,xs:18}}  fontWeight={600}>Add Pictures and Information</Typography>
                      <Typography fontSize={{sm:18,xs:11}}  fontWeight={400}>Include pictures, facts, and descriptions about your pet on the profile.</Typography>
                    </Box>
                  </Stack>
                  <Stack direction='row' mt={1} gap={3} justifyContent='center'>
                    <Typography fontSize={{sm:70,xs:30}} mt={{md:-2,sm:0}} fontWeight={600}>3</Typography>
                    <Box >
                      <Typography fontSize={{sm:30,xs:18}}  fontWeight={600}>Meet Adopters Safely</Typography>
                      <Typography fontSize={{sm:18,xs:11}}  fontWeight={400}>The Rehome team will guide you through safe and pressure-free meetings with applicants.</Typography>
                    </Box>
                  </Stack>
                  <Stack direction='row' mt={1} gap={3} justifyContent='center'>
                    <Typography fontSize={{sm:70,xs:30}} mt={{md:-2,sm:0}} fontWeight={600}>4</Typography>
                    <Box >
                      <Typography fontSize={{sm:30,xs:18}}  fontWeight={600}>Finalize Adoption</Typography>
                      <Typography fontSize={{sm:18,xs:11}}  fontWeight={400}>Rehome provides you with a template for the transfer of ownership with the adopter.</Typography>
                    </Box>
                  </Stack>
              </Stack>

              <Box mt={-3}  display={{md:'block',sm:'none',xs:'none'}}><img src={cat} alt='cat_img' style={{height:'450px'}}/></Box>
            </Stack>
        </Stack>
        <Box width='90%' mx='auto' my={4} ><hr style={{height:'2px',border:'none', color:'#e0e0e0', backgroundColor:'#e0e0e0'}}/> </Box>
        <Box width={{md:'70%',xs:'90%'}} mx='auto' mb={4}>
          <Box sx={{borderLeft:'5px solid #ff6d00'}} mb={3}>
            <Typography color='tertiory' fontSize={{sm:24,xs:16}} fontWeight={700} ml={2}>
                ReHome Form
            </Typography>
          </Box>
          <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={handleSubmit} >
                <TextField label="Animaln Name" name="name" value={formData.name} onChange={handleInputChange} required fullWidth style={{ marginBottom: '15px' }} />
                <FormControl fullWidth style={{ marginBottom: '15px' }} required>
                <InputLabel>Type</InputLabel>
                <Select
                  label="Type"
                  name="type"
                  onChange={handleInputChange}
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
                <TextField label="Breed" name="breed" value={formData.breed} onChange={handleInputChange} fullWidth style={{ marginBottom: '15px' }} />
                <FormControl style={{ marginBottom: '15px' }}>
                  <FormLabel id="demo-row-radio-buttons-group-label">Animal Gender</FormLabel>
                  <RadioGroup
                    row
                    value={formData.gender} 
                    onChange={handleGenderChange}
                    required
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
                <TextField label="Age" name="age" type="number" value={formData.age} onChange={handleInputChange} required fullWidth style={{ marginBottom: '15px' }} />
                <TextField label="Colour" name="colour" value={formData.colour}  onChange={handleInputChange} required fullWidth style={{ marginBottom: '15px' }} />
                <FormControlLabel
                  control={<Checkbox checked={formData.adopted} onChange={handleInputChange} name="adopted" />}
                  label="Available for Adoption"
                  style={{ marginBottom: '15px' }}
                />
                <FormControlLabel
                  control={<Checkbox checked={formData.vaccinated} onChange={handleInputChange} name="vaccinated" />}
                  label="Vaccinated"
                  style={{ marginBottom: '15px' }}
                />
                <TextField label="Description" name='description' value={formData.description} onChange={handleInputChange} placeholder="Describe the more about your pet" required multiline minLength={10} rows={5} style={{ marginBottom: '15px' }} />
                <TextField label="Address" name="address" value={formData.address} onChange={handleInputChange}  required fullWidth style={{ marginBottom: '15px' }} />
                <TextField label="City" name="city" value={formData.city} onChange={handleInputChange}  required fullWidth style={{ marginBottom: '15px' }} />
                <TextField label="Country" name="country" value={formData.country} onChange={handleInputChange}  required fullWidth style={{ marginBottom: '20px' }} />
                <Typography>Add Animal Picture* </Typography><input type="file" accept="image/*" onChange={handleAvatarChange} fullWidth required style={{ marginBottom: '20px' }}/>
                <Button type="submit" justifyContent='center' size='large' variant="contained" color="secondary" sx={{color:'white'}}>
                  Submit
                </Button>

            </form>
        </Box>
        </>):(
          <Stack mt={13} alignItems='center'>
            <Typography  variant="h5" align="center">
              Please log in to access the rehome page.
            </Typography>
            <Button
              component={Link} // If using React Router
              to="/signin" // Replace with your home page URL
              variant="contained"
              sx={{width:'100px', }}
              color="secondary"
            >
              login
            </Button>
        </Stack>
      )}
        <ToastContainer/>
    </Box>
  )
}

export default Rehome
