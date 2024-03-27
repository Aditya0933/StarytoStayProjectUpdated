import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from 'react-router-dom';

export default function DonateCard2(props) {
    const {animal} = props;
  return (
    <Card  sx={{ maxWidth: 320,marginTop:'40px'}}>
        <Box sx={{overflow:'hidden'}}>
            <CardMedia
            className='cardImg'
            component="img"
            sx={{ height:{xl:220,md:200,sm:180,xs:160},width:'100%'}}
            image={animal.photo}
            alt="animal_img"
            />
        </Box>
        <Box>
        <CardContent sx = {{textAlign:'center'}}>
            <PetsIcon color='secondary' fontSize='large' sx={{marginY:'8px'}}/>
          <Typography  variant="h5" fontWeight={800} color='tertiory' component="div">
            {animal.name}
          </Typography>
          <Typography variant="body2" mt={1} color="text.secondary" height='80px' overflow='hidden'>
            {animal.injuryDetail}
          </Typography>
        </CardContent>
        </Box>
      <Box sx={{margin:'0px auto 20px'}} position='relative' bottom='0' width='fit-content'>
      <Link to={`/injuedAnimalDetail/${animal._id}`} style={{ textDecoration: 'none' }}>
        <Button variant='contained' size="medium" color="secondary" sx={{ color:'white',borderRadius:'20px',textTransform:'none'}} >
          Donate
        </Button>
      </Link>
      </Box>
    </Card>
  );
}