import { Box, Card, CardActions, CardContent, Skeleton, Stack, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'

function SkeltonCard() {
  return (
    <Card className='card' sx={{ width:{xl:520,xlg:490,lg:470,md:400,sm:320,xs:350},display: 'flex', marginBottom:'20px',':hover': {boxShadow: 6} }}>
        <Box sx={{position:'relative',width:'inherit',overflow:'hidden'}}>
            {/* Skeleton for CardMedia */}
            <Skeleton variant="rectangular" className='cardImg' sx={{ height:{xl:260,md:250,sm:220,xs:220},width:'100%' }} />

            <Box style={{position: "absolute", color: "white",top:0,textAlign:'center', width:"100%",height:30,background:'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))', textShadow: "2px 7px 5px rgba(0,0,0,0.3),0px -4px 10px rgba(255,255,255,0.3)" }}>
            {/* Skeleton for Card Title */}
            <Skeleton variant="text" sx={{ width: '40%' }} />
            </Box>
        </Box>

        <Box px={{xl:1.5,sm:0,xs:0}} sx={{position:'relative'}} width='120%' >
            <Typography pl={3.5} pr={1} fontSize={12} sx={{color:"white",bgcolor:'#ff8a00',position:'absolute',right:0,top:0, clipPath:`polygon(100% 0%, 0% 0%, calc(0% + 20px) 50%, 0% 100%, 100% 100%);` }}>
            {/* Skeleton for Date */}
            <Skeleton variant="text" sx={{ width: '50px', height: '18px' }} />
            </Typography>

            <CardContent className='cardBody' sx={{height:{md:190,sm:170,xs:170}}}>
            {/* Skeleton for Card Title */}
            <Skeleton variant="text" sx={{ width: '40%' }} />

            <Stack direction='row' mb={1} ml={-1}>
                <LocationOnIcon size={1} sx={{color:'rgba(0, 0, 0, 0.6)'}}/>
                {/* Skeleton for Location */}
                <Skeleton variant="text" sx={{ width: '30%' }} />
            </Stack>

            {/* Skeleton for Breed */}
            <Skeleton variant="text" sx={{ width: '50%'}} />

            {/* Skeleton for Age */}
            <Skeleton variant="text" sx={{ width: '40%'}} />

            {/* Skeleton for Description */}
            <Skeleton variant="text" sx={{ width: '80%',height:'50%'}} />
            </CardContent>

            <CardActions >
            {/* Skeleton for Button */}
            <Skeleton variant="text" sx={{ width: '30%' }} />
            </CardActions>
        </Box>
    </Card>

  )
}

export default SkeltonCard
