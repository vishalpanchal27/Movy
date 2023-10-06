import React from 'react'
import Card from '../components/Card'

const Favourite = (props) => {
  const { favourite, getWatchData, setFavourite, liked, setLiked } = props
  console.log(favourite)
  return (
    <div className='flex justify-center items-center flex-col mt-10 ' >
      <div className='flex w-full justify-center'>
        <div className='w-10/12 gap-5 flex flex-wrap'>
          {favourite.length !== 0 ?
            (
              favourite.map((fav) => {
                return (
                  <div key={fav.id}>
                    <Card
                      id={fav.id}
                      image={fav.image}
                      background={fav.background}
                      language={fav.language}
                      title={fav.title}
                      overview={fav.overview}
                      rating={fav.rating}
                      genre_ids={fav.genre_ids}
                      date={fav.date}
                      getWatchData={getWatchData}
                      favourite={favourite}
                      setFavourite={setFavourite}
                      liked={liked}
                      setLiked={setLiked}
                    />
                  </div>
                )
              })
            ) :
            (
              <p className='text-2xl font-bold text-black w-full h-[93vh] flex justify-center items-center'>No Any Favourite Movie</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Favourite
