import HomeContainer from "@/containers/home";

import { getPopularMovies,getTopRatedMovies, getTvPopularSeries, getTvTopRatedSeries} from "@/services/FetchProcess";


export default async function Home() {
  
  const [{results:popularMovies},{results:topRatedMovies},{results:popularTvSeries},{results:topRatedTvSeries}] = await Promise.all([getPopularMovies(), getTopRatedMovies(),getTvPopularSeries(),getTvTopRatedSeries()])

  return (
    <HomeContainer 
    topRatedMovies={topRatedMovies}
    popularMovies={popularMovies}
    topRatedTvSeries={topRatedTvSeries}
    popularTvSeries={popularTvSeries}
    />
  );
}
