import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { Typography, Button } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '200px',minHeight:'100vh'}}>
      <ErrorOutline color="error" fontSize="large" />
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button
        component={Link} // If using React Router
        to="/" // Replace with your home page URL
        variant="contained"
        color="secondary"
      >
        Go to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
