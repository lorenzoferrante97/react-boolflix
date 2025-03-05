import { useGlobalContext } from "../../contexts/GlobalContext";

export default function Header() {
  const { searchValue, handleField, handleSearch } = useGlobalContext();

  return (
    <>
      <header className='container-fluid mt-10u max-md:gap-y-5u items-center md:flex-row md:justify-between'>
        {/* logo */}
        <span id='logo' className='font-body-l-bold text-red-400'>
          BoolFlix
        </span>
        {/* search */}
        <form
          className='w-full md:max-w-[40%]'
          onSubmit={event => handleSearch(event, searchValue)}>
          <input
            type='text'
            placeholder='Cerca un film o serie'
            className='px-5u py-u min-h-12u font-body-s-light w-full rounded-md border border-white/40 focus:border-white focus:outline-white'
            onChange={handleField}
            value={searchValue}
          />
          <button type='submit' className='min-h-12u'>
            Cerca
          </button>
        </form>
      </header>
    </>
  );
}
