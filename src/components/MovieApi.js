import React, { useEffect, useState } from 'react'
import Card from './Card'
import HeroSlider from './HeroSlider';
import { FaArrowUp } from 'react-icons/fa'
export default function MovieApi(props) {
    const { data, getWatchData, liked, setLiked, favourite, setFavourite, topRated, page, setPage } = props;
    const [fake, setFake] = useState(true)
    function handleInfiniteScroll() {
        try {
            if (document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
                // setScrollValue(parseInt((document.documentElement.scrollTop).toString().split('').slice(0, 3).join('').replace(',', ' ')));
                setPage(prev => prev + 1)
                console.log(page)
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll)
        return () => {
            window.removeEventListener("scroll", handleInfiniteScroll);
            console.log(fake, document.documentElement.scrollTop)
        };
    }, [page])

    function handleUpArrow() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setFake(false);
    }


    return (
        <>
            <div>
                <HeroSlider topRated={topRated} getWatchData={getWatchData}
                    favourite={favourite}
                    setFavourite={setFavourite}
                    liked={liked}
                    setLiked={setLiked} />
            </div>
            {fake ? (
                <div className='fixed bottom-0 right-0 m-5 text-3xl z-50 scroll-smooth rounded-full p-3 bg-gray-600 text-white cursor-pointer' onClick={handleUpArrow} >
                    <FaArrowUp className='cursor-pointer' />
                </div>
            ) : ('')}

            <div className=' flex justify-center items-center flex-col relative'>
                <p className='mt-3 text-3xl text-black font-extrabold border-b-4 shadow-2xl px-4 py-1'>All Popular Movies</p>
                <div className="mt-5 w-10/12 gap-5 flex flex-wrap justify-center items-center">
                    {
                        data.results && data.results.map((item) => {
                            return (
                                <div key={item.id} className='w-[300px] flex gap-5'>
                                    <Card image={item.poster_path}
                                        title={item.original_title}
                                        overview={item.overview}
                                        rating={item.vote_average}
                                        background={item.backdrop_path}
                                        language={item.original_language}
                                        date={item.release_date}
                                        id={item.id}
                                        genre_ids={item.genre_ids}
                                        getWatchData={getWatchData}
                                        favourite={favourite}
                                        setFavourite={setFavourite}
                                        liked={liked}
                                        setLiked={setLiked}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
