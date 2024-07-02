import { useEffect, useState } from "react";
export function useMovies(query) {
  const KEY = "9108810a";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(
    function () {
      const controller = new AbortController();
      // callback?.();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            // 当输入下一个关键词时，中止对当前关键词的请求
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies!");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Move not found!");

          setMovies(data.Search);
          // console.log(data);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
            console.log(err);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return {
    movies,
    isLoading,
    error,
  };
}
