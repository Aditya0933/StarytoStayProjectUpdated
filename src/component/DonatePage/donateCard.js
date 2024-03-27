import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Stack } from '@mui/material';

function DonateCard(props) {
    const {animal} = props;
    let date = new Date(animal.date).toISOString().replace('-', '/').split('T')[0].replace('-', '/');
    return (
      <Card className='card' sx={{ width:{xl:520,xlg:490,lg:470,md:400,sm:320,xs:350},display: 'flex', marginBottom:'20px',':hover': {boxShadow: 6} }}>
      <Box sx={{position:'relative',width:'inherit',overflow:'hidden'}}>
          <CardMedia
            className='cardImg'
            sx={{ height:{xl:260,md:250,sm:220,xs:220},width:'100%'}}
            image={animal?.photo}
            title={animal?.type}
          />
          <Box style={{position: "absolute", color: "white",top:0,textAlign:'center',
           width:"100%",height:30,background:'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))',
           textShadow: "2px 7px 5px rgba(0,0,0,0.3),0px -4px 10px rgba(255,255,255,0.3)"}}>
              {animal?.type.charAt(0).toUpperCase() + animal?.type.slice(1)}
          </Box>
      </Box>
      
      <Box px={{xl:1.5,sm:0,xs:0}} sx={{position:'relative'}} width='120%' >
      <Typography pl={3.5} pr={1} fontSize={12} sx={{color:"white",bgcolor:'#ff8a00',position:'absolute',right:0,top:0,clipPath:`polygon(100% 0%, 0% 0%, calc(0% + 20px) 50%, 0% 100%, 100% 100%);
`}}>{date}</Typography>
          <CardContent className='cardBody' sx={{height:{md:190,sm:170,xs:170}}}>
            <Typography gutterBottom variant="h5" component="div">
              {animal.name}
            </Typography>
            <Stack direction='row' mb={1} ml={-1}>
              <LocationOnIcon size={1} sx={{color:'rgba(0, 0, 0, 0.6)'}}/>
              <Typography variant="body2" color="text.secondary" mt={0.5}>
                  {animal?.city}, {animal?.country}
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              <b>Breed</b> - {animal?.breed}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              <b>Injury</b> - {`${animal?.injuries}`} 
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{display: {md:'block', sm: 'none',xs:'none' } }}>
              <i>{animal?.injuryDetail?.substring(0,(animal.injuries.length>20)?55:80)}...</i>
            </Typography>
          </CardContent>
        
          <CardActions sx={{justifyContent:'space-between',marginTop:'5px'}}>
            <Button size='medium' color='secondary' sx={{textTransform:'none'}}> <Box display={{sm:'block',xs:'none'}}>View</Box>&nbsp;Detail➔ </Button>
            <Button variant='contained' size="small" color='secondary'  sx={{ color:'white',borderRadius:'8px 0 8px 0',textTransform:'none'}}>Donate</Button>
          </CardActions>
      </Box>
    </Card>
  )
}

export default DonateCard
