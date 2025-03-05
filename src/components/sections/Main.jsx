import { GlobalProvider, useGlobalContext } from "../../contexts/GlobalContext";
import { useEffect } from "react";
import Card from "../Card";

export default function Main() {
  const { filteredMovies, filterMovies } = useGlobalContext();

  useEffect(() => {
    filterMovies();
  }, [filteredMovies]);

  return (
    <>
      <main className='container-fluid bg-smoke-950/100 gap-20u py-10u h-screen'>
        {/* filtered movies */}
        <section className='row-grid'>
          <div className='col-span-full'>
            <h2 className='font-h2 uppercase'>Film</h2>
            <p className='font-body-s-light text-smoke-400 uppercase'>
              Risultati di ricerca:
            </p>
          </div>
          {/* movie cards */}
          {filteredMovies.map(movie => {
            const { id } = movie;

            return (
              // movie col
              <div
                className='bg-smoke-700 col-span-full h-[80px] md:col-span-4'
                key={id}>
                <Card content={movie}></Card>
              </div>
            );
          })}
        </section>
        {/* filtered series */}
      </main>
    </>
  );
}
