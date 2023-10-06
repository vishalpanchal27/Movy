import React from 'react'
import Card from './Card'

const SimilarMovies = (props) => {
    const { similarData, getWatchData, setLiked, setFavourite, favourite, liked } = props

    return (
        <div className=' flex justify-center items-center flex-col absolute top-10 '>
            <p className='text-4xl text-gray-900 font-bold mb-5 flex w-10/12 justify-center'>
                <span className='shadow-2xl border-b-4 '>Similar Movies</span>
            </p>
            <div className=' w-10/12 gap-5 flex flex-wrap justify-center'>

                {similarData.results &&
                    similarData.results.map((sameMovies) => (
                        <div key={sameMovies.id}>
                            <Card image={sameMovies.poster_path}
                                title={sameMovies.original_title}
                                overview={sameMovies.overview}
                                rating={sameMovies.vote_average}
                                background={sameMovies.backdrop_path}
                                language={sameMovies.original_language}
                                date={sameMovies.release_date}
                                id={sameMovies.id}
                                genre_ids={sameMovies.genre_ids}
                                getWatchData={getWatchData}
                                setLiked={setLiked}
                                setFavourite={setFavourite}
                                favourite={favourite}
                                liked={liked}
                            />
                        </div>
                    ))
                }
            </div>

            <p className='text-xl text-white mt-5 border-2 w-10/12 flex justify-center bg-black'>Movie End....</p>
        </div>
    )
}

export default SimilarMovies
