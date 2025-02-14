export interface MovieTypes {
    page:number,
    results:MoviesResultsType[],
    total_pages?:number,
    total_results?:number
}

export interface MoviesResultsType {
    adult:boolean,
    backdrop_path:string | null,
    genre_ids:number[] | [],
    id:number,
    origin_country?: string[],
    original_language:string,
    original_name?: string,
    original_title?:string,
    overview:string | undefined,
    popularity:number,
    poster_path:string,
    first_air_date?: string,
    name?: string,
    release_date?:string,
    title?:string,
    video?:boolean,
    vote_average:number,
    vote_count:number,
}
export interface TvSeriesType {
    page:number,
    results:TvSerieResultsType[],
}

export interface TvSerieResultsType {
    adult: boolean,
    backdrop_path: string | null,
    genre_ids: number[] | [],
    id: number,
    origin_country?: string[],
    original_language: string,
    original_name: string,
    overview: string | undefined,
    popularity: number,
    poster_path: string,
    first_air_date: string,
    name: string,
    vote_average: number,
    vote_count:number
}