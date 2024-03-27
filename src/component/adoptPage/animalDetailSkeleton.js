import React from 'react';
import {
  Box,
  Typography,
  Skeleton,
  Stack,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Place from "@mui/icons-material/Place";

const AnimalDetailSkeleton = () => {
  return (
    <Box
      minHeight='100vh'
      borderRadius='15px'
      width={{ lg: '1300px', xs: '100%' }}
      mx='auto'
      padding='20px'
      bgcolor='#fefefe'
      mt={8}
    >
      <Stack gap={2}>
        <Skeleton variant='rectangular' height={22} sx={{ borderLeft: '3px solid #ff6d00' }} />
        <Skeleton variant='text' width='15%' height={30} />
      </Stack>

      <Box mt={3} width={{ sm: '90%', xs: '100%' }} gap={4} mx='auto'>
        <Stack direction='row' flexWrap='wrap' gap={3}>
          <Skeleton variant='rectangular' width={500} height={{ sm: 350, xs: 200 }} borderRadius='30px 0 30px 0' />

          <Box flexGrow={1} mt='15px' mb={3}>
            <Skeleton variant='rectangular' width={100} height={22} sx={{ borderLeft: '3px solid #ff6d00' }} />
            <Skeleton variant='text' width='70%' height={30} />
            <Skeleton variant='rectangular' width='100%' height={60} sx={{ marginTop: '10px' }} />
            <Skeleton variant='text' width='10%' height={30} sx={{ marginTop: '5px' }} />
            <Skeleton variant='rectangular' width='70%' height={20} sx={{ marginTop: '5px' }} />
            <Skeleton variant='rectangular' width='100%' height={40} sx={{ marginTop: '5px' }} />
            <Skeleton variant='rectangular' width='100%' height={40} sx={{ marginTop: '5px' }} />
          </Box>
        </Stack>

        <Stack direction='row' flexWrap='wrap' gap={3}>
          <Stack width={500} p={2} direction='column' borderRadius={2} gap={1}>
            <Typography fontSize={20} color='#11142D' sx={{ borderLeft: '3px solid #ff6d00' }} pl={2}>
              Description
            </Typography>
            <Skeleton variant='text' height={100} sx={{ backgroundColor: '#808191' }} />

            <Stack my={1} gap={1} direction='row' flexWrap='wrap' justifyContent='space-between'>
              <Box>
                <Stack direction='row' gap={3}>
                  <Box>
                    <Skeleton variant='circular' width={40} height={40} />
                  </Box>
                  <Box>
                    <Skeleton variant='text' width={100} />
                    <Skeleton variant='text' width={60} />
                  </Box>
                </Stack>
                <Stack direction='row' alignItems='center' mt={0.5} gap={1}>
                  <Place sx={{ color: '#808191' }} />
                  <Skeleton variant='text' width={100} />
                </Stack>
              </Box>

              <Stack justifyContent='space-around'>
                <Stack direction='row' alignItems='center' gap={1}>
                  <EmailIcon sx={{ color: '#808191' }} />
                  <Skeleton variant='text' width={100} />
                </Stack>
                <Stack direction='row' alignItems='center' gap={1}>
                  <CallIcon sx={{ color: '#808191' }} />
                  <Skeleton variant='text' width={100} />
                </Stack>
              </Stack>
            </Stack>

            <Skeleton variant='rectangular' width='100%' height={50} sx={{ marginTop: '10px' }} />
          </Stack>

          <Stack flexGrow={1} mt={2}>
            <Skeleton variant='rectangular' width='100%' height={290} sx={{ border: '1px solid #121212' }} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default AnimalDetailSkeleton;
