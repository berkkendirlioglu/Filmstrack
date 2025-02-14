import { MovieTypes } from "@/types/FeaturedMovieTypes";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const FetchWithAuth = async ({
  url,
  paramsValue,
}: {
  url: string;
  paramsValue?: Record<string, any>;
}) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      params: { ...paramsValue },
    };
    const res = await axios.get(`${BASE_URL + url}`, options);
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("an unexpected error occured");
    }
  }
};

const Logout = async (data: string) => {
  const response = await fetch(`${BASE_URL}/authentication/session`, {
    method: "DELETE",
    body: JSON.stringify({ session_id: data }),
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });
  const responseJson = (await response.json()) as { success: boolean };

  const deleteCookie = await fetch("/api/logout", { method: "POST" });

  if (deleteCookie.ok) {
    alert("Çıkış başarılı! Token kaldırıldı.");
  } else {
    alert("Çıkış başarısız!");
  }

  return responseJson;
};

const CreateSessionId = async (req: string) => {
  const response = await fetch(`${BASE_URL}/authentication/session/new`, {
    method: "POST",
    body: JSON.stringify({ request_token: req }),
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });
  const responseJson = (await response.json()) as SessionIdPayload;

  const login = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ accessToken: responseJson.session_id }),
});

if (login.ok) {
    alert("Giriş başarılı! Token cookie'ye kaydedildi.");
} else {
    alert("Giriş başarısız!");
}

  return responseJson;
};

const AddRemoveWatchlist = async (
  data: WatchlistPayload,
  session_id: string
) => {
  const response = await fetch(
    `${BASE_URL}/account/21635653/watchlist?session_id=${session_id}`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  const responseJson = (await response.json()) as {
    success: boolean;
    status_code: number;
    status_message: string;
  };

  return responseJson;
};

const GetWatchlist = async (session_id: string) => {
  const response = await fetch(
    `${BASE_URL}/account/21635653/watchlist/movies?session_id=${session_id}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  const responseJson = (await response.json()) as MovieTypes;

  return responseJson;
};

const CreateRequestToken = async () => {
  return FetchWithAuth({ url: "/authentication/token/new" });
};

const getCategoryMovies = async (genreId: string) => {
  return FetchWithAuth({
    url: "/discover/movie",
    paramsValue: { with_genres: genreId },
  });
};

const getPopularMovies = async () => {
  return FetchWithAuth({ url: "/movie/popular" });
};

const getTopRatedMovies = async () => {
  return FetchWithAuth({ url: "/movie/top_rated" });
};

const getCategories = async () => {
  return FetchWithAuth({ url: "/genre/movie/list" });
};

const getMovie = async (movieId: string) => {
  return FetchWithAuth({ url: `/movie/${movieId}` });
};

const getAllMovies = async () => {
  return FetchWithAuth({ url: "/discover/movie" });
};

const getTvSerieCategories = async () => {
  return FetchWithAuth({ url: "/genre/tv/list" });
};

const getTvPopularSeries = async () => {
  return FetchWithAuth({ url: "/tv/popular" });
};

const getTvTopRatedSeries = async () => {
  return FetchWithAuth({ url: "/tv/top_rated" });
};

const getAllTvSeries = async () => {
  return FetchWithAuth({ url: "/discover/tv" });
};

const getCategoryTvSeries = async (genreId: string) => {
  return FetchWithAuth({
    url: "/discover/tv",
    paramsValue: { with_genres: genreId },
  });
};

const getTvSerie = async (serieId: string) => {
  return FetchWithAuth({ url: `/tv/${serieId}` });
};

export {
  FetchWithAuth,
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
  CreateRequestToken,
  CreateSessionId,
  AddRemoveWatchlist,
  GetWatchlist,
  Logout,
};
