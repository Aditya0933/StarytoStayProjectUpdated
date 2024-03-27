import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import catHeader from '../images/cat.png'
import { useDispatch, useSelector } from 'react-redux';
import { getAllInjuredAnimal } from '../../redux/action/injuredAnimalAction';
import DonateCard2 from './donateCard2';
import DonateSkeletonCard from './donateSkeletonCard';
import ReactPaginate from "react-paginate";

function DonatePage() {
    // const animals = [
    //       {
    //         _id: "64c4d4ed0e005a9720442711",
    //         name: "chumpak",
    //         type: "cat",
    //         injuries: "Flea infestation",
    //         injuryDetail: "Smokey is a stray cat found with severe flea infestation and malnourishment smokey is a stray cat found with severe flea infestation and malnourishment.",
    //         breed: "pluffy",
    //         gender: 'female',   
    //         address: '327-B kazi khera',
    //         city: 'Kanpur',
    //         country: 'India',
    //         photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690621103/khcn9hwyn0t1csp3j8qn.png",
    //         creator: "64c0de07554a8ac9aaed5fa3",
    //         date: "2023-07-29T08:59:25.044Z",
    //         __v: 0
    //       },
    //       {
    //         _id: "64c4d5f30e005a9720442715",
    //         name: "max",
    //         type: "dog",
    //         injuries: "Scratches, Mange",
    //         injuryDetail: "Max is a stray dog with several scratches and is suffering from mange max is a stray dog with several scratches and is suffering from mange",
    //         breed: "Mixed Breed",
    //         gender: 'female',
    //         address: '327-B kazi khera',
    //         city: 'Kanpur',
    //         country: 'India',     photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690621365/kuu9kc3wfgabijnkzzmq.png",
    //         creator: "64c0de07554a8ac9aaed5fa3",
    //         date: "2023-07-29T09:03:47.839Z",
    //         __v: 0
    //       },
    //       {
    //         _id: "64c4d7b60e005a972044271d",
    //         name: "Whiskers",
    //         type: "rabbit",
    //         injuries: "Abandoned and Overgrown teeth",
    //         injuryDetail: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
    //         breed: "Mixed Breed",
    //         address: '327-B kazi khera',
    //         city: 'Kanpur',
    //         country: 'India',           
    //         gender: 'female',
    //         photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690621816/q8kxvlyklutkdeuv4sa8.png",
    //         creatr: "64c0de07554a8ac9aaed5fa3",
    //         date: "2023-07-29T09:11:18.714Z",
    //         __v: 0
    //       },
    //       {
    //         _id: "64c4d8730e005a9720442721",
    //         name: "blacky",
    //         type: "dog",
    //         injuries: "hit by bus",
    //         injuryDetail: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
    //         breed: "german shephard",
    //         gender: 'female',
    //         address: '327-B kazi khera',
    //         city: 'Kanpur',
    //         country: 'India',
    //         photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690622005/sfegfjmufluxqcp0qqfy.png",
    //         creator: "64c0de07554a8ac9aaed5fa3",
    //         date: "2023-07-29T09:14:27.724Z",
    //         __v: 0
    //       }
    //     ]

    const animals = useSelector(state => state.injuredAnimal.animals);
    const {loading} = useSelector(store=>store.load);
    const dispatch = useDispatch();

    const itemsPerPage =6;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const pageCount = Math.ceil(animals.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % animals.length;
      setItemOffset(newOffset);
    };

    useEffect(()=>{
        dispatch(getAllInjuredAnimal());
    },[])

    return (
        <Box minHeight='100vh' sx={{ width:{ xl:'75%', xlg:"80%",lg:'80%',md: '85%', sm: '94%', xs: '94%' }, margin: '6rem auto 1rem' }}>
            <Stack container direction={'row'} justifyContent='space-between'
                sx={{
                    height: { md: '210px', sm: '170px', xs: '130px' }, boxSizing: 'content-box', borderRadius: { md: '50px 0 50px 0', xs: '20px 0 20px 0' },
                    backgroundColor: "#d84315", backgroundImage: `linear-gradient(315deg, #ff6d00 0%, #000000 60%)`, position: 'relative',
                }}>
                <Box width={{md:'70%',xs:'90%'}} sx={{
                    margin: 'auto 1rem',
                    color: "white"
                }}>
                    <Typography sx={{fontSize:{md:'1.4rem',sm:'1.2rem',xs:'0.8rem'}}}>
                        Encoureages Charity for Animal
                    </Typography>
                    <Typography mt={1} sx={{fontSize:{md:'0.7rem',sm:'0.6rem',xs:'0.5rem'}}}>
                        Adoption of animal save those animals who cannot protect themselves. Having a missing animal find their way back home is a noble deed. Donation for sick animals is equivalent to saving a life.
                    </Typography>
                    <Button  variant="outlined" color='secondary' size='small' 
                    sx={{textTransform:'none', borderRadius:'8px 0 8px 0',position:'relative',bottom:-20, display:{sm:'block',xs:'none'} }}>
                        Adopt
                    </Button>
                </Box>
                <Box sx={{ position: 'relative', bottom: { md: 63, sm: 51, xs: 39 } }}>
                    <img src={catHeader} style={{position:'relative',height:'130%'}} />
                </Box>
            </Stack>
            <Box sx={{borderLeft:'5px solid #ff6d00'}}>
                <Typography color='tertiory' fontSize={{sm:25,xs:15}} fontWeight={700} mt={3} ml={2}>
                    Donate for good cause
                </Typography>
            </Box>
            <Typography fontSize={25} mt={3} ml={2} fontWeight={700} color="#11142d">
                {(!animals.length && !loading )?"  There are no animals to adopt!":""}
            </Typography>
            <Stack container direction={'row'} mt={4} justifyContent='space-around'  gap={1} flexWrap='wrap'
            sx={{width:{md:"99.6%",sm:"94.5%",xs:"94.5%"},marginX:"auto"}} >
                {loading?(
                    [1,2,3,4,5,6].map((e)=>{
                        return <DonateSkeletonCard/>
                    })
                    ):
                    (animals?.slice(itemOffset, endOffset).map((animal, index) => (
                        <DonateCard2 key={index} animal={animal} />
                    )))
                    }
            </Stack>
            <Stack width='fit-content' marginLeft='auto' mt={4}>
                <ReactPaginate
                breakLabel="..."
                nextLabel='Next →'
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel='← Previous'
                renderOnZeroPageCount={null}
                containerClassName={'pagination'}
                previousLinkClassName={'pagination__link'}
                nextLinkClassName={'pagination__link'}
                disabledClassName={'pagination__link--disabled'}
                activeClassName={'pagination__link--active'}
                />
            </Stack>
        </Box>
    )
}

export default DonatePage
