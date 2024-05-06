import {useState, useEffect} from 'react'
import ArtCard from './ArtCard'
import './index.css'

const App = () => {
 
  let [artworks, setArtworks] = useState(new Set());
  let [search, setSearch] = useState('chicago');

  let searchArt = async (term) => {
    let response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${term}&limit=18`)
    let data = await response.json();
    console.log(term, data.data);
    setArtworks(data.data);
  }

  useEffect(() => {
    searchArt(search);
  }, [search]);

  return (
    <div className="px-10 text-center items-center">
      {/* Title */}
      <h1 className="text-center leading-relaxed bg-gradient-to-r from-red-950 via-orange-800 to-indigo-800 inline-block text-transparent bg-clip-text text-6xl">
        Art Institute of Chicago API
      </h1>

      {/* Search Bar */}
      <div>
        <div>
          <form className="mt-20 mb-5 relative flex items-centers justify-center">
            <input value={search} onChange={(e) => setSearch(e.target.value)}
                   type="text" id="search" placeholder="Search artwork . . ." className="placeholder:text-slate-100 h-20 border-4 focus:ring-0 focus:outline-0 w-[56%] bg-transparent rounded pl-4 text-4xl text-slate-100"/>
          </form>   
        </div>
      </div>

      {/* Displaying Artwork */}
      {artworks.length > 0 ? (
        <div className = "container grid grid-flow-row grid-cols-3 grid-rows-3">
          { 
            artworks.map((artwork) => (
            <ArtCard card ={artwork}/>
          ))}
        </div>
        ):(
        <div>
          <h2>No artworks found</h2>
        </div>
        )
      }
    </div>
  )
}

export default App