import React, { useEffect, useState } from 'react'
import MovieApi from './components/MovieApi'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import WatchNow from './pages/WatchNow'
import Spinner from './components/Spinner'
import SignUp from './pages/SignUp'
import Favourite from './pages/Favourite'
export default function App() {

  const [data, setData] = useState({ results: [] });
  const [page, setPage] = useState(1)
  const [watchData, setWatchData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [similarData, setSimilarData] = useState({ results: [] })
  const [liked, setLiked] = useState([])
  const [favourite, setFavourite] = useState([])
  const [topRated, setTopRated] = useState({ results: [] })

  function getWatchData(data) {

    setWatchData(data)
  }

  const getTopRatedMovie = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=70d103b3a804bbe3d118e59a0c68d7e2&language=en-US&page=1`

    try {
      const resp = await fetch(apiUrl)
      const output = await resp.json();
      setTopRated(output)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTopRatedMovie()
  }, [])




  async function fetchSimilarData() {
    try {
      const baseUrl = `https://api.themoviedb.org/3/movie/${watchData?.genre_ids[0]}/similar?api_key=70d103b3a804bbe3d118e59a0c68d7e2&language=en-US&page=1`
      const resp = await fetch(baseUrl)
      const data = await resp.json()
      setSimilarData(data)
    }
    catch (error) {
      Error("error Found")
    }
  }

  async function getData() {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=70d103b3a804bbe3d118e59a0c68d7e2&Language=en&pagesize=${5}&page=${page}`;
    setLoading(true)
    try {
      const resp = await fetch(apiUrl);
      const output = await resp.json();
      setData(prev => ({ prev, results: [...data.results, ...output.results] }));
    } catch (error) {
      console.log(error)
      Error("error aaya")
    }
    setLoading(false)
  }

  useEffect(() => {
    getData();
  }, [page])

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchSimilarData();
  }, [watchData])

  // function handleInfiniteScroll() {
  //   try {
  //     if (document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
  //       setPage(prev => prev + 1)
  //       console.log(page)
  //     }
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleInfiniteScroll)
  //   return () => {
  //     window.removeEventListener("scroll", handleInfiniteScroll);
  //   };
  // }, [page])

  return (
    <div className='scroll-smooth'>
      <Navbar />
      <Routes>
        <Route path='/Movy'
          element={!loading ?
            (<MovieApi data={data}
              page={page}
              setPage={setPage}
              getWatchData={getWatchData}
              liked={liked}
              setLiked={setLiked}
              favourite={favourite}
              setFavourite={setFavourite}
              topRated={topRated}
            />) :
            (<Spinner />)} />

        <Route path='/WatchNow'
          element={(<WatchNow watchData={watchData}
            similarData={similarData}
            getWatchData={getWatchData}
            setLiked={setLiked}
            setFavourite={setFavourite}
            favourite={favourite}
            liked={liked} />)} />

        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/Favourite"
          element={<Favourite favourite={favourite}
            liked={liked}
            getWatchData={getWatchData}
            setLiked={setLiked}
            setFavourite={setFavourite} />} />
      </Routes>
    </div>
  )
}


