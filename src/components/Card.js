import React, { useEffect } from 'react'
import { Progress } from 'rsuite'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import '../App.css'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'


export default function Card(props) {
    const { image, title, overview, rating, getWatchData, background, language, genre_ids, date, id, favourite, setFavourite, liked, setLiked, topRatedCard } = props


    const obj = {
        image, title, rating, overview, background, language, date, id, genre_ids
    }
    const summery = overview ? (overview) : ('').split(' ').slice(0, 20).join(' ').replace(',', '  ')


    function handleWatchNow() {
        console.log(obj)
        getWatchData(obj)
    }



    // const likeHandler = () => {
    //     if (favourite.includes(id)) {
    //         setFavourite((prev) => prev.filter((fav) => (fav !== id)))
    //         toast.error("Remove from the favourite list")
    //     }
    //     else {
    //         if (favourite.length === 0) {
    //             setFavourite([id]);
    //             toast.success("Added in your favourite list")
    //         }
    //         else {
    //             setFavourite((prev) => [...prev, id])
    //             toast.success("Added in your favourite list")
    //         }
    //     }
    // }

    // const likeHandler = () => {
    //     const isObjectInFavourites = favourite.some(fav => fav.id === obj.id);

    //     if (isObjectInFavourites) {
    //         setFavourite(prev => prev.filter(fav => fav.id !== obj.id));
    //         toast.error("Remove from the favourite list");
    //     } else {
    //         setFavourite(prev => [...prev, obj]);
    //         toast.success("Added in your favourite list");
    //     }
    // };

    const likeHandler = () => {

        console.log(favourite)
        const isObjectInFavourites = favourite.some(fav => fav.id === obj.id);
        if (isObjectInFavourites) {
            setFavourite(prev => prev.filter(fav => fav.id !== obj.id));
            setLiked(prev => prev.filter(like => like !== id))
            toast.error('Remove from the favourite list')
        }
        else {
            setFavourite(prev => [...prev, obj])
            setLiked(prev => [...prev, id])
            toast.success('Added in your favourite list')
        }
    }




    useEffect(() => {
        // console.log(favourite)
        // console.log(liked)
    }, [favourite, liked])



    return (
        <div className='flex flex-col items-center w-[300px] border-solid border-4 border-pink-50 p-2 relative z-0 shadow-sm shadow-black rounded-lg'>
            <div className='absolute top-5 cursor-pointer right-6' onClick={likeHandler}>
                {
                    topRatedCard ?
                        ('') :
                        (
                            liked &&
                                liked.includes(id) ?
                                (<FcLike className='text-2xl p-1 bg-white rounded-md shadow-sm shadow-black bg-inherit' />) :
                                (<FcLikePlaceholder className='text-2xl p-1 bg-white rounded-md shadow-sm shadow-black bg-inherit' />)

                        )
                }
            </div>
            <div className=''>
                <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" className='h-[250px] w-[300px] rounded-md' />
            </div>

            <div>
                {/* <p className="bg-white">rating</p> */}
                {/* <p className='absolute bottom-36 bg-red-100 rounded-s-3xl px-2 right-[55px] font-bold  border-black border-b-2'>IMDB Rating</p> */}
                {topRatedCard ?
                    ('') :
                    (
                        <div className='w-[40px] bg-white rounded-full absolute bottom-[8.9rem] right-5 shadow-black shadow-md'>
                            <Progress.Circle percent={parseInt(rating * 10)} strokeColor={rating > '6.9' ? 'green' : '#ffc107'} strokeWidth={10} trailColor='' />
                        </div>
                    )}
                {/* <div >
                    <ProgressCircle
                        percent={100} status="success" />
                </div> */}
            </div>


            <div className='flex flex-wrap w-[285px] h- mt-3 px-2 flex-col '>
                <h2 className='text-xl h-7 overflow-hidden text-black'>{title}</h2>
                {topRatedCard ?
                    (
                        <p className=''>{date}</p>
                    ) :
                    (
                        <p className='flex flex-wrap gap-2 text-xs h-12 overflow-hidden '>{`${summery}`}</p>
                    )
                }
            </div>
            {
                topRatedCard ?
                    ('') :
                    (
                        <div className='w-full flex justify-center m-2'>
                            <button onClick={handleWatchNow} className='bg-red-400 w-full py-2 font-bold text-black text-lg border-2 border-black outline-none'>
                                <Link to="/watchNow"><p className={`text-black underline-offset-0`}>Watch Now</p></Link >
                            </button >
                        </div >
                    )
            }

        </div>
    )
}

