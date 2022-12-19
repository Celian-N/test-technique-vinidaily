import React, { useEffect, useMemo, useState } from "react";
import { Wine } from "../types/wines";
import "./Home.css";
import WineItem from "../components/WineItem/WineItem";
type WinesFetched = [result: { wines: Wine[] } | null, test2: any];

const fetchWines = async (
  page: number,
  callback?: () => void
): Promise<WinesFetched> => {
  try {
    const response = await fetch(`http://localhost:8000/wines/${page.toString()}`);
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

function useFilter(wines: Wine[], searchText: string) {
  return useMemo(() => {
    const formattedSearch = searchText.toLowerCase();
    return wines.filter(
      (wine) =>
        wine.name?.toLowerCase().includes(formattedSearch) ||
        wine.appelation?.toLowerCase().includes(formattedSearch) ||
        wine.cuve?.toLowerCase().includes(formattedSearch)
    );
  }, [wines, searchText]);
}

const Home = () => {
  const [wines, setWines] = useState([] as Wine[]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    const getWines = async () => {
      const [result, error] = await fetchWines(page, () =>
        setDataLoading(false)
      );
      if (result) {
        setWines(result.wines);
        console.log("wines : ", result.wines);
      }
      error && alert(`Error : ${error}`);
    };
    getWines();
  }, [page]);

  const handleSearchText = (event: any) => {
    if (!event?.target) return;
    setSearchText(event?.target.value);
  };

  const filteredWines = useFilter(wines, searchText);

  return (
    <div className="home">
      <header>
        <div>
          <img src="logo_vinidaily.png" alt="Logo Vinidaily"></img>
          <span>Test technique</span>
        </div>
      </header>
      <h2>Nos vins : </h2>
      <div>
        <label>
          Recherher :
          <input type="text" value={searchText} onChange={handleSearchText} />
        </label>
      </div>
      {isDataLoading ? (
        <div className="loader">Chargement...</div>
      ) : (
        filteredWines.map((wine, index) => {
          return (
            <div
              className={
                index != filteredWines.length - 1
                  ? "wine-border wine-container"
                  : "wine-container"
              }
              key={wine._id}
            >
              <WineItem wine={wine}></WineItem>
            </div>
          );
        })
      )}
      <div>
        <button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Précedent
        </button>
        <span>{page}</span>
        <button onClick={() => setPage(page + 1)}>Suivant</button>
      </div>
    </div>
  );
};

export default Home;
