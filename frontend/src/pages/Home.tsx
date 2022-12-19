import React, { useEffect, useState } from "react";
import { Wine } from "../types/wines";
import "./Home.css";
type WinesFetched = [result: { wines: Wine[] } | null, test2: any];

const fetchWines = async (callback?: () => void): Promise<WinesFetched> => {
  try {
    const response = await fetch(`http://localhost:8000/wines`);
    const result = (await response.json()) as { wines: Wine[] };

    if (!result) return [null, null];

    return [result, null];
  } catch (err) {
    console.log(err);
    return [null, err];
  } finally {
    callback && callback();
  }
};

const Home = () => {
  const [wines, setWines] = useState([] as Wine[]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    const getWines = async () => {
      const [result, error] = await fetchWines(() => setDataLoading(false));
      if (result) {
        setWines(result.wines);
        console.log("wines : ", result.wines);
      }
      error && alert(`Error : ${error}`)
    };
    getWines();
  }, []);

  return (
    <div>
      <header></header>
      <div>{`${wines}`}</div>
    </div>
  );
};

export default Home;
