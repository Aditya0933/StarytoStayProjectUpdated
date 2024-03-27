import React, { useEffect, useState } from 'react';
import bgImg from './images/signin.jpg.jpg';
import { TextField, Button, Checkbox, Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/action/userAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './loading';

export default function Signin() {

    const status = useSelector(store => store.user);
    const {loading} = useSelector(store=>store.load);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showToast, setShowToast] = useState(false); 

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
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
            console.log(loading);
            setShowToast(false); 
        }
    }, [showToast, status]);

    const handleSubmit =async event => {
        event.preventDefault();
        console.log(formData);
        await dispatch(loginUser(formData));
        setShowToast(true); 
        setFormData({ email: '', password: '' });
    };

    return (
        <Box minHeight='100vh'>
            {loading && (<Loading/>)}
            <Box  className="register" mt={11} mx='auto' maxWidth='90%' width={1000} textAlign='center'>
                <Box className="col-2">
                    <img src={bgImg} alt=""/>
                </Box>
                <Box className="col-1">
                    <h3 className='main-heading' >Sign In</h3>
                    <span>Welcome To StarytoStay !</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <TextField name="email" type="email" label='Email' value={formData.email} onChange={handleChange} required />
                        <TextField name="password" type="password" label='Password' value={formData.password} onChange={handleChange} required inputProps={{ minLength: 4 }}/>
                        
                        <Box className='checkbox' flexDirection='row-reverse'>
                            <Typography variant="body2">forgot Password ?</Typography>
                        </Box>
                        
                        <Button className='btn' variant="contained" style={{ padding: '.9em 1em' }} type="submit">
                            Sign In
                        </Button>
                        <Typography mt={2} variant="body2" color="text.secondary" >Don't have account? <Link to='/signup' style={{color:'blue',}}><u>REGISTER</u></Link></Typography>
                    </form>
                    
                    {/* <Box>
                        <Box>
                            <Typography className='or' variant="body2">OR</Typography>
                        </Box>
                        <Box className='googleSign'>
                            <Typography variant="body2">Sign In With Google</Typography>
                            <img src={googlePNG} alt="" height='30px' width='30px'/>
                        </Box>
                    </Box> */}
                </Box>         
            </Box>
            <ToastContainer/>
        </Box>
    );
}
