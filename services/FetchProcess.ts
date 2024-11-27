import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";

const FetchProcess = ({url,paramsValue}:{url:string, paramsValue?:Record<string, any>}) => {
    try {
        const res = axios.get(`${BASE_URL + url}`,{
            params:{...paramsValue,page:1},
            headers:{
                accept:'application/json',
                Authorization:`Bearer ${process.env.API_KEY}`
            }
        }).then(response => {
            return response.data;
        })
        return res;

    } catch (e) {
        if(e instanceof Error){
            throw new Error(e.message);
        }else{
            throw new Error("an unexpected error occured");
        }
    }
}

const getCategoryMovies = async (genreId:string) => {
    return FetchProcess({url:"/discover/movie", paramsValue:{with_genres:genreId}})
}

const getPopularMovies = async () => {
    return FetchProcess({url:'/movie/popular'})
};

const getTopRatedMovies = async () => {
    return FetchProcess({url:'/movie/top_rated'})
};

const getCategories = async () => {
    return FetchProcess({url:'/genre/movie/list'})
};


const getMovie = async (movieId:string) => {
    return FetchProcess({url:`/movie/${movieId}`})
}

const getAllMovies = async () => {
    return FetchProcess({url:"/discover/movie"});
}

const getTvSerieCategories = async () => {
    return FetchProcess({url:'/genre/tv/list'})
}

const getTvPopularSeries = async () => {
    return FetchProcess({url:'/tv/popular'})
}

const getTvTopRatedSeries = async () => {
    return FetchProcess({url:"/tv/top_rated"})
}

const getAllTvSeries = async () => {
    return FetchProcess({url:"/discover/tv"})
}

const getCategoryTvSeries = async (genreId:string) => {
    return FetchProcess({url:"/discover/tv", paramsValue:{with_genres:genreId}})
}

const getTvSerie = async (serieId:string) => {
    return FetchProcess({url:`/tv/${serieId}`})
}

export {
    FetchProcess,
    getCategories,
    getCategoryMovies,
    getPopularMovies,
    getTopRatedMovies,
    getMovie,
    getAllMovies,
    getTvSerieCategories,
    getTvPopularSeries,
    getTvTopRatedSeries,
    getAllTvSeries,
    getCategoryTvSeries,
    getTvSerie,
}