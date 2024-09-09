import { useDispatch } from "react-redux"
import { options } from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"

const useMovieTrailer=(movie_id)=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        movieTrailerBackground()
    },[])

    const movieTrailerBackground=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US', options)

        const json=await data.json()

        // console.log(json.results);
        const filteredTrailer=json.results.filter(videos=>videos.type==='Trailer')
        // console.log(filteredTrailer);
       const  originalTrailer=  filteredTrailer.length? filteredTrailer.filter(trailer=>trailer.name==='Official Trailer'):json.results[0]
    //    console.log(originalTrailer);
       
       dispatch(addTrailerVideo(originalTrailer[0]))

         }
}

export default useMovieTrailer