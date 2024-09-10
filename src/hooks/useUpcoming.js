import { useDispatch } from "react-redux"
import { options } from "../utils/constants"
import { addUpcomingMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useUpcoming=()=>{
    const dispatch=useDispatch()
    const getUpcomingMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const json=await data.json()
        // console.log(json)
        dispatch(addUpcomingMovies(json.results))

    }

    useEffect(()=>{
        getUpcomingMovies()
    },[])
}

export default useUpcoming;