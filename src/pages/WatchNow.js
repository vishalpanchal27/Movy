import React from 'react'
import { Progress } from 'rsuite';
import { AiTwotoneStar } from 'react-icons/ai'
import SimilarMovies from '../components/SimilarMovies';
import netflix from '../assets/netflix.png'
import social from '../assets/social.png'
import video from '../assets/video-player.png'
const WatchNow = ({ watchData, similarData, getWatchData, setLiked, setFavourite, favourite, liked }) => {
    const data = watchData;
    const price = data?.id?.toString().slice(0, 3);
    console.log(price)

    return (
        <div className='cursor-default flex flex-col relative top-0 bottom-60'>
            <div className='flex justify-center text-gray-800 '>
                <p className='text-3xl font-extrabold mt-5 mb-3 border-b-2 shadow-lg'>Overview</p>
            </div>
            {data &&
                <div className='relative h-[550px] '>
                    <div className="relative top-3 flex w-full flex-nowrap justify-evenly z-50 gap-2 px-6 watchNowSecondContainer">
                        <div className=' flex justify-center '>
                            <img src={`https://image.tmdb.org/t/p/w500/${data.image}`} className=' rounded-xl w-[300px] h-[480px]' alt="" />
                        </div>
                        <div className=' flex gap-2 flex-col flex-wrap overflow-hidden w-[75%] watchNowMovieDetail'>
                            <p className='text-4xl font-extrabold  text-black'>{data.title}</p>
                            <p className='text-xl font-bold text-black  '>OverView</p>
                            <p className='text-lg watchNowOverview'>{data.overview}</p>
                            <p className='text-black text-sm'>Release Date :- {data.date}</p>
                            <p className='text-black text-sm'>Language :- {data.date === 'hi' ? 'Hindi' : 'English'}</p>
                            <div className='flex gap-4'>
                                <p className='text-lg font-bold mt-1 text-black'>popularity</p>
                                <div className='text-white bg-black w-10 rounded-full'>
                                    <Progress.Circle strokeColor='green' percent={data.rating * 10} />
                                </div>
                            </div>
                            <p className='text-lg text-black flex gap-1'>IMDB Rating <span className='flex flex-row'>{data.rating}</span>
                                <span className='mt-1'><AiTwotoneStar /></span>
                            </p>
                            <button className='bg-yellow-600 flex justify-center w-[150px] rounded-sm text-lg text-black  py-1 mt-3'>Buy ₹{price}</button>
                            <div className='flex mt-5 border-2  gap-5 w-[280px] bg-transparent p-4 rounded-lg'>
                                <p className='text-lg text-black items-center flex'>Available On : </p>
                                <div className='flex gap-2 justify-center items-center'>
                                    <a href="https://www.netflix.com/in/" target="_blank" rel="noreferrer">
                                        <img className='h-7  border-solid border-e-2 border-gray-100 ' src={netflix} alt="" />
                                    </a>
                                    <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root" target="_blank" rel="noreferrer">
                                        <img className='h-7 pr-2 border-solid border-e-2 border-gray-100 ' src={social} alt="" />
                                    </a>
                                    <a href="https://www.jiocinema.com/tv-shows/" target='_blank rel="noreferrer"'>
                                        <img className='h-7' src={video} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-0'>
                        <img src={`https://image.tmdb.org/t/p/w500/${data.background}`} className='w-screen h-[550px] opacity-30 z-0 watchNowBackground' alt="" />
                    </div>
                    <div className='relative top-10'>
                        <SimilarMovies similarData={similarData} getWatchData={getWatchData} setLiked={setLiked} setFavourite={setFavourite} favourite={favourite} liked={liked} />
                    </div>
                </div>
            }

        </div>
    )
}

export default WatchNow
