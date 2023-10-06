import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import Slider from "react-slick";

const HeroSlider = (props) => {
    const { topRated, getWatchData, favourite, setFavourite, liked, setLiked } = props
    const topRatedCard = true



    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        autoplay: true,
        // slidesToScroll: 5,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipeToSlide: true,
        focusOnSelect: true,
        variableWidth: true,
        cssEase: "linear",
        afterChange: function (index) { },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]

    }

    return (
        <div className='flex justify-center items-center flex-col flex-nowrap '>
            <p className='text-3xl text-black font-bold my-5 border-b-4 shadow-2xl px-4 py-1'>
                Up Comming Movies
            </p>
            <div className='w-10/12  flex-col flex h-[380px] overflow-hidden '>
                <Slider {...settings}>
                    {topRated.results &&
                        topRated.results.map((data) => (
                            <div key={data.id} className='flex flex-nowrap cursor-grab mx-2 my-2 mb-16'>
                                <Card
                                    id={data.id}
                                    image={data.poster_path}
                                    title={data.title}
                                    background={data.backdrop_path}
                                    // overview={data.overview}
                                    // rating={data.vote_average}
                                    date={data.release_date}
                                    genre_ids={data.genre_ids}
                                    getWatchData={getWatchData}
                                    favourite={favourite}
                                    setFavourite={setFavourite}
                                    liked={liked}
                                    setLiked={setLiked}
                                    topRatedCard={topRatedCard}

                                />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default HeroSlider
