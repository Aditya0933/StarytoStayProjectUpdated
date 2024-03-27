import React from 'react';
import { Box, Skeleton, Stack } from '@mui/material';

const LoadingAnimalCard = () => {
  return (
    <Box
      width="100%"
      bgcolor="#ffffee"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        borderRadius: '10px',
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        padding: "10px",
        "&:hover": { boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }
      }}
    >
      <Skeleton variant="rectangular" width={90} height={90} sx={{ borderRadius: 8 }} />

      <Stack direction="column" justifyContent="space-around" flex={1} gap={{ xs: 4, sm: 2 }}>
        <Stack gap={2} direction="row" justifyContent='space-between' flexWrap="wrap" alignItems="center">
          <Stack gap={2} direction="row" alignItems="center">
            <Stack direction='row' gap={2} width={150}>
              <Skeleton variant="text" width="70%" height={22} />
              <Skeleton variant="text" width="50%" height={18} />
            </Stack>
            <Stack ml={4} gap={3} direction="row" alignItems="center">
              <Skeleton variant="circular" width={32} height={20} />
              <Skeleton variant="circular" width={32} height={20} />
              <Skeleton variant="circular" width={32} height={20} />
            </Stack>
          </Stack>
          <Stack>
            <Stack direction='row'>
              <Skeleton variant="text" width="40%" height={18} />
              <Skeleton variant="circular" width={24} height={24} />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" flexWrap="wrap" justifyContent="space-between" pr={8} alignItems="center" gap={2}>
          <Stack direction='row'>
            <Box ml={1}><Skeleton variant="circular" width={24} height={24} /></Box>
            <Skeleton variant="text" width="50%" height={18} />
          </Stack>
          <Skeleton variant="text" width="15%" height={18} />
          <Skeleton variant="text" width="15%" height={18} />
          <Skeleton variant="text" width="15%" height={18} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default LoadingAnimalCard;
