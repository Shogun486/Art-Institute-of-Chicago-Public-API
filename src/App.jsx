import {useState, useEffect} from 'react'
import ArtCard from './ArtCard';
import './index.css'


const API_URL = "https://api.artic.edu/api/v1/artworks?page=100&limit=100";
let image = '';

const App = () => {

  const [artworks, setArtworks] = useState([]);
  const [search, setSearch] = useState('');

  const searchArt = async (term) => {
    const response = await fetch(`${term}`);
    const data = await response.json();
    image = data.config.iiif_url;
    setArtworks(data.data);
    console.log(data);
  }

  useEffect(() => {
    searchArt(API_URL);
  }, []);

  return (
    <div className="text-center items-center">
      {/* Title */}
      <h1 className="text-center leading-relaxed bg-gradient-to-r from-red-950 via-orange-800 to-indigo-800 inline-block text-transparent bg-clip-text text-6xl">
        Art Institute of Chicago API
      </h1>

      {/* Search Bar */}
      <div>
        <div>
          <form className="relative flex items-centers justify-center">
            <input type="text" id="search" placeholder="Hagrid . . ." className="border-0 focus:ring-0 focus:outline-0 w-[60%] bg-slate-500 rounded-l-lg pl-4 text-sm text-slate-200"/>
            <button className="ring-4  ring-slate-900 ring-offset-[0.55rem] shadow-transparent ring-offset-red hover:ring-offset-white  hover:bg-white bg-white rounded-[50%] active:scale-95 cursor-pointer">
              <h2 className="rounded-full border-4 border-slate-800 w-16 h-16  text-red-900 text-2xl text-center justify-center flex items-center font-semibold hover:border-slate-600 hover:text-black ">
                GO
              </h2>
            </button>   
          </form>   
        </div>
      </div>
      <br/>


      {/* Displaying Artwork */}
      {artworks.length > 0 ? (
        <div className = "container grid grid-flow-row-dense grid-cols-3 grid-rows-3">
          {artworks.map((artwork) => (
           
          <ArtCard card ={artwork} image={image}/>
          ))}
        </div>
        ):(
        <div className="empty">
          <h2>No movies found</h2>
        </div>
        )
      }

    </div>
  )
}

export default App;