import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import { CardMedia, Stack, Typography } from '@mui/material';

const DonateSkeletonCard = () => {
  return (
    <Card sx={{ width: 320, marginTop: '40px' }}>
    <CardMedia
      component="img"
      sx={{
        height: { xl: 220, md: 200, sm: 180, xs: 160 },
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
      }}
    />
    <CardContent sx={{ textAlign: 'center' }}>
      <Skeleton variant="circle" width={40} height={40} sx={{ margin: '8px auto', borderRadius:'30px' }} />
      <Stack direction='column' my={2} alignItems='center'>
        <Skeleton variant="text" width='60%' height={40}/>
      </Stack>
      <Stack direction='column' alignItems='center' mt={1} height={80}  overflow="hidden">
        <Skeleton variant="text" width="85%" />
        <Skeleton variant="text" width="85%" />
        <Skeleton variant="text" width="85%" />
      </Stack>
    </CardContent>
    <Skeleton variant="rectangular" height={40} width={100} sx={{ margin: '0 auto 20px',borderRadius:'40px'}} />
  </Card>
  );
};

export default DonateSkeletonCard;
