import { useGlobalContext } from "../../contexts/GlobalContext";
import { useEffect } from "react";
import Card from "../Card";

export default function Main() {
  const {
    searchQuery,
    filteredMovies,
    filterMovies,
    filteredSeries,
    filterSeries
  } = useGlobalContext();

  useEffect(() => {
    filterMovies(searchQuery);
    filterSeries(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <main className='container-fluid bg-smoke-950/40 border-smoke-950 py-10u px-5u gap-y-20u rounded-lg border-2'>
        {/* filtered movies */}
        <section className='row-grid'>
          <div className='col-span-full'>
            <h2 className='font-h2 uppercase'>Film</h2>
            <p className='font-body-s-light text-smoke-400 uppercase'>
              Risultati di ricerca:
            </p>
          </div>
          {/* movie cards */}
          {filteredMovies.length === 0 ? (
            <div className='col-span-full'>
              <p className='font-body-s-light text-smoke-400 italic'>
                Nessun film trovato in base alla tua ricerca
              </p>
            </div>
          ) : (
            filteredMovies.map(movie => {
              const id = movie.id;

              return (
                <div
                  className='col-span-full sm:col-span-2 xl:col-span-3'
                  key={id}>
                  <Card content={movie} type='movies' />
                </div>
              );
            })
          )}
        </section>

        {/* filtered series */}
        <section className='row-grid'>
          <div className='col-span-full'>
            <h2 className='font-h2 uppercase'>Serie</h2>
            <p className='font-body-s-light text-smoke-400 uppercase'>
              Risultati di ricerca:
            </p>
          </div>
          {/* series cards */}
          {filteredSeries.length === 0 ? (
            <div className='col-span-full'>
              <p className='font-body-s-light text-smoke-400 italic'>
                Nessuna serie trovata in base alla tua ricerca
              </p>
            </div>
          ) : (
            filteredSeries.map(serie => {
              const id = serie.id;

              return (
                <div
                  className='col-span-full sm:col-span-2 xl:col-span-3'
                  key={id}>
                  <Card content={serie} type='series' />
                </div>
              );
            })
          )}
        </section>
      </main>
    </>
  );
}
