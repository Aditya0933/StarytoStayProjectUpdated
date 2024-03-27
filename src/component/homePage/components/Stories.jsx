import { Divider, Typography } from '@mui/material'
import Sto1 from '../assets/C-S-1.jpg'
import Sto2 from '../assets/C-S-2.jpg'
import Sto3 from '../assets/C-S-3.jpg'
import Sto5 from '../assets/C-S-4.jpg'
import Sto4 from '../assets/C-S-6.jpg'

export default function Story(){
    return(
        <div id='stories' name='stories'>
            <div className="flex flex-col py-28 px-1 bg-gray-900 sm:px-10 mx-auto text-center">
                <Typography variant='h1' component='h2' fontSize={50} fontWeight={600} color='white'> Happy Stories </Typography>
                <p className='text-white'>We are happy that we help families find a new family member <br/> for themselves.</p>
                <Divider sx={{ borderBottomWidth: 5,borderRadius:'5px', borderColor:'#ff8a00', margin:'15px auto' }}  width='200px'/>
                <div className="flex overflow-x-scroll pb-10 hide-scroll-bar z-50 mt-5">
                    <div className="flex flex-nowrap z-50">
                        <div className="inline-block px-3">
                            <div className="w-[310px] h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none px-4 flex items-center justify-center flex-col">
                                <div className='flex gap-3 flex justify-center'>
                                    <div className='h-[54px] w-[54px] rounded-full overflow-hidden'>
                                        <img src={Sto1} alt="" className='rounded-full'/>
                                    </div>
                                    <div>
                                        <h3 className=''> Kristal L.</h3>
                                        <h4 className=''>Owner of <b><i>From The Paws</i></b></h4>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-5'> " We are super happy with the transition to Time To Pet! My staff loves it, I love it, and most importantly, clients love it. " </p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3">
                            <div className="w-[310px] h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none px-4 flex items-center justify-center flex-col">
                                <div className='flex gap-3 flex justify-center'>
                                    <div className='h-[54px] w-[54px] rounded-full overflow-hidden'>
                                        <img src={Sto2} alt="" className='rounded-full'/>
                                    </div>
                                    <div>
                                        <h3 className=''> Dan S.</h3>
                                        <h4 className=''>Owner of <b><i>NYC Pooch</i></b></h4>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-5'> " It has helped us streamline many aspects of our operation from scheduling and communication, to billing and customer management. " </p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3">
                            <div className="w-[310px] h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none px-4 flex items-center justify-center flex-col">
                                <div className='flex gap-3 flex justify-center'>
                                    <div className='h-[54px] w-[54px] rounded-full overflow-hidden'>
                                        <img src={Sto3} alt="" className='rounded-full'/>
                                    </div>
                                    <div>
                                        <h3 className=''> Katherine D.</h3>
                                        <h4 className=''>Owner of <b><i>While Away Dog</i></b></h4>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-5'> " Time To Pet has helped me become more organized, passionate about what I do and it surprises my new and reI used to spend hours and hours on the weekends." </p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3">
                            <div className="w-[310px] h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none px-4 flex items-center justify-center flex-col">
                                <div className='flex gap-2 flex justify-center'>
                                    <div className='h-[54px] w-[54px] rounded-full overflow-hidden'>
                                        <img src={Sto4} alt=""/>
                                    </div>
                                    <div>
                                        <h3 className=''> Rochelle B.</h3>
                                        <h4 className=''>Owner of <b><i>Pawsitive</i></b></h4>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-5'> " I can’t believe I survived without Time To Pet! I wanted scheduling software because I was having trouble keeping our schedules straight! Scheduling is now a breeze!" </p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3">
                            <div className="w-[310px] h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 border-none px-4 flex items-center justify-center flex-col">
                                <div className='flex gap-3 flex justify-center'>
                                    <div className='h-[54px] w-[54px] rounded-full overflow-hidden'>
                                        <img src={Sto5} alt="" className='rounded-full'/>
                                    </div>
                                    <div>
                                        <h3 className=''> Alexa R.</h3>
                                        <h4 className=''>Owner of <b>The Pug Mom</b></h4>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-5'> " Time To Pet has helped me become more organized, passionate about what I do and it surprises my new and returning clients with how convenient and easy to use the system is. " </p>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}
