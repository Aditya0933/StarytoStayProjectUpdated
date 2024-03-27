
import { Box, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import injuredDog from  '../images/rescue.webp'
import helpDog from '../images/help-rescue-background-img.jpeg'
import Maldives6 from '../images/9-img.webp';
import Maldives5 from '../images/5-img.webp';
import Maldives4 from '../images/4-img.jpeg';
import Maldives3 from '../images/8-img.jpeg';
import Maldives2 from '../images/10-img.jpeg';
import Maldives1 from '../images/1-img.avif';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addInjuredAnimal } from '../../redux/action/injuredAnimalAction';
import { Link } from 'react-router-dom';
import Loading from '../loading';
import { useDispatch, useSelector } from 'react-redux';

 
const initialFormData = {
  name: '',
  type: '',
  injuries: '',
  injuryDetail: '',
  breed: '',
  address: '',
  city: '',
  country: '',
  photo: '',
};

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

function Rescue() {

  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const status = useSelector(store => store.injuredAnimal);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('name', formData.name);
    data.append('type', formData.type);
    data.append('injuries', formData.injuries);
    data.append('injuryDetail', formData.injuryDetail);
    if(formData.breed){
      data.append('breed', formData.breed);
    }
    data.append('gender', formData.gender);
    data.append('address', formData.address);
    data.append('city', formData.city);
    data.append('country', formData.country);
    data.append('photo', formData.photo);

    await dispatch(addInjuredAnimal(data)); 
    setShowToast(true);
    setFormData(initialFormData);
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
  }, [showToast, status]);

  return (
      <Box minHeight='100vh' width='100%' mx={'auto'}>
      {isLoggedIn ? (
        <>
        {loading && <Loading/>}
        <Box  className='rescue-home'   sx={{ p: 2.9 ,backgroundSize:'cover' , backgroundRepeat:'no-repeat',backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundImage:`url(${helpDog})`}}>
          <Stack justifyContent='end' alignItems='center'>
              <Box minHeight='100vh' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Typography fontSize={{md:58,sm:48,xs:42}} fontWeight={700} color='#ffff' lineHeight={1.5} letterSpacing={1}> They Need Your Help, </Typography>
                <Typography fontSize={{md:58,sm:48,xs:38}} fontWeight={700} color='#ffff' marginTop={2} lineHeight={1.3} letterSpacing={1}> Love & Support </Typography>
                <Button className='rescue-btn' type="button" justifyContent='center' variant="contained"
                 onClick={() => {
                  const formElement = document.getElementById('rescueForm');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                 sx={{color:'white',backgroundColor:'#ff6d00',fontSize:'24px',marginTop:'20px'}}>
                  RESCUE THEM 
                </Button>
              </Box>  
          </Stack>
        </Box>
        <Box bgcolor='#272e37' className='rescue-content'>
            <h2 className='rescue-content-heading'>Making a Difference: Rescuing Precious Lives</h2>
            <Divider sx={{ borderBottomWidth: 6,borderRadius:'10px', borderColor:'#ff8a00', margin:'30px auto' }}  width='300px'/>
            <p className='rescue-content-para'>Animals suffer everyday. Whether it is dehydration, starvation, or lack of attention, these are all leading factors into animal abuse. Animal abuse occurs all around the world. Typically it is something people will turn a blind eye towards because it is not a human life being threatened; it is simply ‘just an animal life.’ Animals are crucial for our universe, not to mention they are capable of being lifelong companions.</p>
            <Box className='max-w-[1240px] mx-auto px-4 py-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
                <img src={Maldives1} alt="" srcset="" />
                <img src={Maldives2} alt="" srcset="" />
                <img src={Maldives3} alt="" srcset="" />
                <img src={Maldives4} alt="" srcset="" />
                <img src={Maldives5} alt="" srcset="" />
                <img src={Maldives6} alt="" srcset="" />
            </Box>
        </Box>
        <Box className="flex items-center justify-center ">
            <Box className="bg-#bfbfbf">
                <Box className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                      - FAQ -

                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                    Saving one animal won’t change the world, but it will change the world for that one animal.

                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            What types of animals do you rescue?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            We rescue a variety of animals, including dogs, cats, rabbits, and sometimes even small animals like guinea pigs or birds .
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            Are the animals up-to-date on vaccinations and medical care?
                            </summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Yes, all our animals receive necessary vaccinations and medical care before they are available for adoption.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            Can I surrender my pet to your rescue organization?
                            </summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            We do accept surrendered pets if space is available. Please contact us to discuss the situation and check for availability.
                            </p>
                        </details>
                    </div>
                </Box>
            </Box>
        </Box>
        <Box id="rescueForm"  sx={{  p: 2.9 ,backgroundSize:'cover',  boxSizing: 'content-box', backgroundRepeat:'no-repeat', backgroundImage:`url(${injuredDog})`}}>
        <Stack justifyContent='end' alignItems='center'>
            <Box>
              <Typography fontSize={{md:45,sm:36,xs:26}} fontWeight={700} color='#ffff' lineHeight={1.2} letterSpacing={1}>What to do when you find an injured stray animal !!!</Typography>
            </Box>  
        </Stack>
        <Box width='90%' mx='auto' my={4} ><hr style={{height:'2px',border:'none', backgroundColor:'#e0e0e0'}}/> </Box>
        <Box width={{md:'70%',xs:'90%'}} mx='auto' mb={4}>
          <Box sx={{borderLeft:'3.5px solid #ff6d00',borderRight:'3.5px solid #ff6d00'}} mb={3}>
            <Typography color='#000000' fontSize={{sm:44,xs:32}} fontWeight={700} ml={2}>
                Rescue Form
            </Typography>
          </Box>
          <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={handleSubmit}>
            <TextField
              label="Animal Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{fieldset: { borderColor: "#2F4F4F" }}}
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              style={{ marginBottom: '15px' }}
            />
            <FormControl fullWidth style={{ marginBottom: '15px' }} required>
              <InputLabel style={{ color: 'white' }}>Type</InputLabel>
              <Select
                label="Type"
                name="type"
                onChange={handleInputChange}
                value={formData.type}
                required
                sx={{fieldset: { borderColor: "#2F4F4F" }}}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
              >
                {petTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formData.type === 'other' && (
              <TextField
                label="Type (Other)"
                name="type"
                required
                fullWidth
                sx={{fieldset: { borderColor: "#2F4F4F" }}}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                style={{ marginBottom: '15px' }}
              />
            )}
            <TextField
              label="Breed"
              name="breed"
              value={formData.breed}
              onChange={handleInputChange}
              fullWidth
              sx={{fieldset: { borderColor: "#2F4F4F" }}}
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              style={{ marginBottom: '15px' }}
            />
            <FormControl style={{ marginBottom: '15px' }}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ color: 'white' }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                value={formData.gender}
                onChange={handleInputChange}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  style={{ color: 'white' }}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  style={{ color: 'white' }}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  style={{ color: 'white' }}
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Injuries"
              name="injuries"
              value={formData.injuries}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{fieldset: { borderColor: "#2F4F4F" }}}
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              style={{ marginBottom: '15px' }}
            />
            <TextField
              label="Injury Detail"
              name="injuryDetail"
              value={formData.injuryDetail}
              onChange={handleInputChange}
              placeholder="Describe the injuries in detail"
              required
              multiline
              rows={5}
              fullWidth
              sx={{fieldset: { borderColor: "#2F4F4F" }}}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
              style={{ marginBottom: '15px' }}
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{fieldset: { borderColor: "#2F4F4F" }}}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
              style={{ marginBottom: '15px' }}
            />
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{fieldset: { borderColor: "#2F4F4F" }}}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
              style={{ marginBottom: '15px' }}
            />
            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{fieldset: { borderColor: "#2F4F4F" }}}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
              style={{ marginBottom: '20px' }}
            />
            <Typography style={{ color: 'white' }}>Add Animal Picture* </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              fullWidth
              required
              style={{ marginBottom: '20px' }}
            />
            <Button
              type="submit"
              justifyContent="center"
              size="large"
              variant="contained"
              color="secondary"
              sx={{ color: 'white' }}
            >
              Submit
            </Button>
          </form>

        </Box>
        </Box>
            </>):(
              <Stack mt={13} alignItems='center'>
                <Typography  variant="h5" align="center">
                  Please log in to access the rescue page.
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
          <ToastContainer />
      </Box>
  )
}

export default Rescue;