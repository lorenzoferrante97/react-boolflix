export default function Main() {
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
          <div className='bg-smoke-700 col-span-full h-[80px] md:col-span-4'></div>
        </section>
        {/* filtered series */}
      </main>
    </>
  );
}
