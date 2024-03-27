import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoadingBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: 10,
  color: '#FFA500', // Orange color
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black for blur effect
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // Align at the top
  paddingTop: '30vh', // Adjust as needed
}));

const Loading = () => {
  return (
    <LoadingBackdrop open={true}>
      <CircularProgress size={80} thickness={4} color="inherit" />
    </LoadingBackdrop>
  );
};

export default Loading;
