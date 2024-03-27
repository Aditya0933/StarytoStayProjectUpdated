import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { Typography, Button, Box, Paper } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const PaymentSuccess = () => {
  return (
    <div style={{ textAlign: 'center', marginTop:'150px',minHeight:'100vh'}}>
       <Paper
        elevation={3}
        sx={{
          background: 'white',
          padding: '40px',
          borderRadius: '4px',
          boxShadow: '0 2px 3px #C8D0D8',
          display: 'inline-block',
        }}
      >
        <Box
          sx={{
            borderRadius: '50%',
            height: '200px',
            width: '200px',
            background: '#F8FAF5',
            margin: '0 auto',

          }}
        >
          <VolunteerActivismIcon
            sx={{
              color: '#88B04B',
              fontSize: '100px',
              lineHeight: '200px',
              marginTop: '40px'
            }}
          />
        </Box>
        <Typography
          variant="h4"
          component="h2"
          color="#88B04B"
          fontWeight="bold"
          margin="10px"
          fontFamily="Nunito Sans, Helvetica Neue, sans-serif"
        >
          Donation Successful
        </Typography>
        <Typography
          variant="body1"
          color="#404F5E"
          fontSize="20px"
          fontFamily="Nunito Sans, Helvetica Neue, sans-serif"
          mb={3}
        >
          Thank you for your generous donation!<br />We appreciate your support.
          </Typography>
            <Button
                component={Link} 
                to="/" 
                variant="contained"
                color="secondary"
                sx={{color:'white'}}
            >
                Go to Home
            </Button>
        </Paper>
    </div>
  );
};

export default PaymentSuccess;
