import { Divider, Typography } from '@mui/material'
import WWR from '../assets/wwr.avif'

export default function WhoweAre(){
    return(
        <div>
            <div className="flex flex-col justify-center items-center py-[90px] px-[40px] text-black">
                <Typography variant='h1' component='h2' fontSize={{sm:60,xs:40}} fontWeight={700}> Who we are </Typography>
                <p className="text-center mt-3 max-w-[550px]">We are non-profit organization devoted to fastening discarded and homeless pets with the goal of re-homing them to their home forever.</p>
                <Divider sx={{ borderBottomWidth: 5,borderRadius:'5px', borderColor:'#ff8a00', margin:'10px auto' }}  width='130px'/>
            </div>
        </div>
    )
}