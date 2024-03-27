import React, { useEffect, useState } from 'react';
import bgImg from './images/rabbit.jpg';
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/action/userAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './loading';

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
  

export default function Signup() {

    const dispatch = useDispatch();
    const status = useSelector(store=>store.user);
    const {loading} = useSelector(store=>store.load);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpwd:'',
        contactNo: '',
        gender: '',
        address: '',
        city: '',
        country: '',
        avatar: null,
    });
    const [showToast, setShowToast] = useState(false);

    
    const [formErrors, setFormErrors] = useState({
        passwordMismatch: false,
        nameTooShort: false,
        contactNoInvalid: false,
    });

    const validateForm = () => {
        const errors = {
            passwordMismatch: formData.password !== formData.confirmpwd,
            nameTooShort: formData.name.length < 3,
            contactNoInvalid: formData.contactNo.length !== 10 || isNaN(formData.contactNo),
        };

        setFormErrors(errors);
        return Object.values(errors).every(error => !error);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAvatarChange = event => {
        setFormData(prevData => ({
            ...prevData,
            avatar: event.target.files[0],
        }));
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

    const handleSubmit = async event => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        console.log(formData);
        let data = new FormData();
        data.append('name', formData.name);
        data.append('email',formData.email);
        data.append('password',formData.password);
        data.append('contactNo',formData.contactNo);
        data.append('gender',formData.gender);
        data.append('address',formData.address);
        data.append('city',formData.city);
        data.append('country',formData.country);
        if(formData.avatar!==null){
            data.append('avatar',formData.avatar);
        }
        await dispatch(userRegister(data));
        setShowToast(true);
        setFormData({name: '', email: '', password: '',confirmpwd:'',contactNo: '',gender: '',address: '',city: '',country: '',avatar: null})

    };

    return (
        <Box minHeight='100vh'>
            {loading && (<Loading/>)}
            <Box className="register" mt={11} mx='auto' maxWidth='90%' width={1000} textAlign='center'>
                <Box className="col-2">
                    <img src={bgImg} alt="" />
                </Box>
                <Box className="col-1" maxWidth='95%'>
                    <h3 className='main-heading'>Sign Up</h3>
                    <span>Register and enjoy the service</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <TextField name="name" value={formData.name} onChange={handleChange} label='Username' fullWidth required error={formErrors.nameTooShort} helperText={formErrors.nameTooShort && "Name is too short"}/>
                        <TextField  name="password" type="password" value={formData.password} onChange={handleChange}  label='Password' fullWidth required error={formErrors.passwordMismatch} helperText={formErrors.passwordMismatch && "Passwords do not match"}/>
                        <TextField name="confirmpwd" type="password" value={formData.confirmpwd} onChange={handleChange} label='Confirm Password' fullWidth required  error={formErrors.passwordMismatch}  helperText={formErrors.passwordMismatch && "Passwords do not match"}/>
                        <TextField name="email" type="email" value={formData.email} onChange={handleChange} label='Email' fullWidth required />
                        <TextField name="contactNo" value={formData.contactNo} onChange={handleChange} label='Mobile Number' fullWidth required error={formErrors.contactNoInvalid} helperText={formErrors.contactNoInvalid && "Contact number must be 10 digits"}/>
                        <FormControl fullWidth >
                            <InputLabel>Gender</InputLabel>
                            <Select name="gender" value={formData.gender} onChange={handleChange} required>
                                <MenuItem value="">Gender</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="others">Others</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth >
                            <InputLabel>Country</InputLabel>
                            <Select name="country" value={formData.country} onChange={handleChange} required>
                                <MenuItem value="">Country</MenuItem>
                                {countries.map((country, index) => (
                                    <MenuItem key={index} value={country}>
                                        {country}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField name="address" value={formData.address} onChange={handleChange} label='Address' fullWidth required />
                        <TextField name="city" value={formData.city} onChange={handleChange} label='City' fullWidth required />
                        <input type="file" accept="image/*" onChange={handleAvatarChange} fullWidth  />
                        <Button className='btn' variant="contained" style={{ padding: '.9em 1em' }} type="submit" fullWidth>
                            Sign Up
                        </Button>
                        <Typography mt={2} variant="body2" color="text.secondary" >Already have account? <Link to='/signin' style={{color:'blue',}}><u>LOGIN</u></Link></Typography>
                    </form>
                </Box>
            </Box>
            <ToastContainer/>
        </Box>
    );
}
