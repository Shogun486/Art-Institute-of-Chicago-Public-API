import React from 'react';
import {useState, useEffect} from 'react';

const ArtCard = ({card}) => {
  let [artist, setArtist] = useState('');
  let [artName, setArtName] = useState('');
  let [pre_iiif_url, setPreURL] = useState('');
  let [image_id_no, setImageID] = useState(0);
  let [image_url, setImageURL] = useState('');

  let searchImage = async (id) => {
    let response = await fetch(`https://api.artic.edu/api/v1/artworks?ids=${id}&fields=image_id,artist_title,title`)
    let keys = await response.json();    
    let info = keys.data;
    
    artist = info[0].artist_title;
    artName = info[0].title;
    pre_iiif_url = keys.config.iiif_url;
    image_id_no = info[0].image_id;
    image_url = `${pre_iiif_url}/${image_id_no}/full/843,/0/default.jpg`;

    setArtist(artist);
    setArtName(artName);
    setPreURL(pre_iiif_url);
    setImageID(image_id_no);
    setImageURL(image_url);
    console.log(artName, image_url);
  }

  useEffect(() => {
    searchImage(card.id);
  }, [card]);

return (
  <div className="self-center relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
    <div className="relative mx-4 mt-4  text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-70">
      <img className="place-content-center object-contain" 
           src={image_url !== null ? image_url : 'https://via.placeholder.com/400'} />
    </div>
    <div className="p-6 text-center">
      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {artName !== null ? artName : 'Unknown Piece'}
      </h4>
      <p
        className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        {artist !== null ? artist : 'Unknown Artist'}
      </p>
    </div>
  </div>
)
}

export default ArtCard;